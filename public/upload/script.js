document.addEventListener('DOMContentLoaded', () => {

    // --- 全局变量和配置 ---
    const LOGIN_WEBHOOK_URL = 'https://szb.zeabur.app/webhook/d4ba8fa0-45e9-4d1f-ad6d-9c3523ada543';
    const UPLOAD_WEBHOOK_URL = 'https://szb.zeabur.app/webhook/upload-file';
    const MAX_FILES = 10;
    const ALLOWED_FILE_TYPES = ['.mp4', '.txt'];
    const SESSION_DURATION = 60 * 60 * 1000; // 1小时

    let filesToUpload = [];

    // --- 获取所有需要操作的HTML元素 ---
    const loginSection = document.getElementById('loginSection');
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    const uploadSection = document.getElementById('uploadSection');
    const uploadArea = document.getElementById('uploadArea');
    const uploadHint = document.getElementById('uploadHint');
    const fileInput = document.getElementById('fileInput');
    const fileListContainer = document.getElementById('fileListContainer');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const uploadError = document.getElementById('uploadError');
    const uploadBtn = document.getElementById('uploadBtn');
    const resetBtn = document.getElementById('resetBtn');
    // ✨ NEW: 获取退出登录按钮
    const logoutBtn = document.getElementById('logoutBtn');

    // ========================================================================
    // 登录与会话管理函数
    // ========================================================================
    function checkLoginStatus() {
        const sessionDataString = localStorage.getItem('userSession');
        if (!sessionDataString) return;
        try {
            const sessionData = JSON.parse(sessionDataString);
            const now = Date.now();
            if (sessionData.isLoggedIn && (now - sessionData.loginTimestamp < SESSION_DURATION)) {
                loginSection.classList.add('hidden');
                uploadSection.classList.remove('hidden');
            } else {
                logout();
            }
        } catch (error) {
            logout();
        }
    }

    function performLogin() {
        const sessionData = { isLoggedIn: true, loginTimestamp: Date.now() };
        localStorage.setItem('userSession', JSON.stringify(sessionData));
        loginSection.classList.add('hidden');
        uploadSection.classList.remove('hidden');
    }

    // ✨ NEW: 创建一个统一的退出登录函数
    function logout() {
        localStorage.removeItem('userSession');
        // 使用 location.reload() 可以确保所有状态都被重置
        location.reload();
    }


    // --- 初始化与事件监听 ---
    fileInput.setAttribute('accept', ALLOWED_FILE_TYPES.join(','));
    updateUploadability();
    checkLoginStatus(); 

    // 登录表单提交
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        setButtonLoading(loginBtn, true);
        hideMessage(loginError);
        try {
            const response = await fetch(LOGIN_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                }),
            });
            const data = await response.json();
            if (response.ok && data.success) {
                performLogin(); // 调用登录函数
            } else {
                showMessage(loginError, data.message || '发生未知错误，请重试。');
            }
        } catch (error) {
            showMessage(loginError, '无法连接到服务器，请检查网络。');
        } finally {
            setButtonLoading(loginBtn, false);
        }
    });

    // ✨ NEW: 为退出登录按钮添加点击事件
    logoutBtn.addEventListener('click', logout);

    // 文件处理与上传交互
    ['click', 'dragover', 'dragleave', 'drop'].forEach(eventName => uploadArea.addEventListener(eventName, e => e.preventDefault()));
    uploadArea.addEventListener('click', () => { if (!uploadArea.classList.contains('disabled')) fileInput.click(); });
    uploadArea.addEventListener('dragover', () => { if (!uploadArea.classList.contains('disabled')) uploadArea.classList.add('dragover'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
    uploadArea.addEventListener('drop', e => {
        if (!uploadArea.classList.contains('disabled')) {
            uploadArea.classList.remove('dragover');
            handleFileSelection(e.dataTransfer.files);
        }
    });
    fileInput.addEventListener('change', () => handleFileSelection(fileInput.files));
    uploadBtn.addEventListener('click', uploadAllFiles);
    resetBtn.addEventListener('click', resetUploadState);

    // --- 核心功能函数 (这部分代码保持不变) ---
    function handleFileSelection(selectedFiles) {
        hideMessage(uploadError);
        const validFiles = [];
        const invalidFileNames = [];
        const isFileTypeValid = (file) => {
            const fileNameLower = file.name.toLowerCase();
            return ALLOWED_FILE_TYPES.some(type => fileNameLower.endsWith(type));
        };
        for (const file of selectedFiles) {
            if (isFileTypeValid(file)) {
                validFiles.push(file);
            } else {
                invalidFileNames.push(file.name);
            }
        }
        if (invalidFileNames.length > 0) {
            showMessage(uploadError, `只支持 ${ALLOWED_FILE_TYPES.join(' 或 ')} 格式。以下文件已被忽略: ${invalidFileNames.join(', ')}`);
        }
        if (filesToUpload.length + validFiles.length > MAX_FILES) {
            showMessage(uploadError, `选择失败：一次最多只能上传 ${MAX_FILES} 个文件。`);
            fileInput.value = '';
            return;
        }
        filesToUpload.push(...validFiles);
        renderFileList();
        fileInput.value = '';
    }

    function renderFileList() {
        fileListContainer.innerHTML = '';
        if (filesToUpload.length > 0) {
            fileListContainer.classList.remove('hidden');
        } else {
            fileListContainer.classList.add('hidden');
        }
        filesToUpload.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-list-item';
            fileItem.innerHTML = `
                <div class="file-details">
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${formatFileSize(file.size)}</span>
                </div>
                <button class="delete-btn" data-index="${index}" title="删除此文件">&times;</button>
            `;
            fileListContainer.appendChild(fileItem);
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const indexToRemove = parseInt(e.currentTarget.dataset.index, 10);
                filesToUpload.splice(indexToRemove, 1);
                renderFileList();
            });
        });
        updateUploadability();
    }

    function updateUploadability() {
        uploadBtn.disabled = filesToUpload.length === 0;
        const allowedTypesString = ALLOWED_FILE_TYPES.join(', ');
        if (filesToUpload.length >= MAX_FILES) {
            uploadArea.classList.add('disabled');
            uploadHint.textContent = `已达到 ${MAX_FILES} 个文件的上限`;
        } else {
            uploadArea.classList.remove('disabled');
            uploadHint.textContent = `支持 ${allowedTypesString} (已选 ${filesToUpload.length})`;
        }
    }

    async function uploadAllFiles() {
        setButtonLoading(uploadBtn, true);
        uploadBtn.classList.add("hidden");
        progressContainer.classList.remove("hidden");
        hideMessage(uploadError);
        let totalSize = filesToUpload.reduce((sum, file) => sum + file.size, 0);
        let uploadedSize = 0;
        const uploadPromises = filesToUpload.map(file => uploadSingleFile(file, (chunkSize) => {
            uploadedSize += chunkSize;
            const percentage = totalSize > 0 ? Math.round(uploadedSize / totalSize * 100) : 0;
            progressFill.style.width = `${percentage}%`;
            progressText.textContent = `整体进度: ${percentage}% (${formatFileSize(uploadedSize)} / ${formatFileSize(totalSize)})`;
        }));
        try {
            const results = await Promise.all(uploadPromises);
            renderSuccessResults(results);
        } catch (error) {
            showMessage(uploadError, `上传失败: ${error.message || "未知错误"}`);
            progressContainer.classList.add("hidden");
            uploadBtn.classList.remove("hidden");
        } finally {
            setButtonLoading(uploadBtn, false);
            resetBtn.classList.remove("hidden");
            uploadArea.classList.add("disabled");
        }
    }

    function uploadSingleFile(file, onProgress) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            formData.append("file0", file);
            let lastLoaded = 0;
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const chunkLoaded = event.loaded - lastLoaded;
                    lastLoaded = event.loaded;
                    onProgress(chunkLoaded);
                }
            };
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        if (response.success && response.url) {
                            resolve({ fileName: file.name, url: response.url });
                        } else {
                            reject(new Error(response.message || `文件 ${file.name} 上传成功但服务器返回错误`));
                        }
                    } catch (e) {
                        reject(new Error(`文件 ${file.name} 的服务器响应解析失败`));
                    }
                } else {
                    reject(new Error(`文件 ${file.name} 上传失败，状态码: ${xhr.status}`));
                }
            };
            xhr.onerror = () => reject(new Error(`文件 ${file.name} 发生网络错误`));
            xhr.open("POST", UPLOAD_WEBHOOK_URL, true);
            xhr.send(formData);
        });
    }

    function renderSuccessResults(results) {
        progressContainer.classList.add("hidden");
        fileListContainer.innerHTML = "";
        results.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            const link = document.createElement("a");
            link.className = "result-link";
            link.href = result.url;
            link.textContent = result.fileName;
            link.title = result.url;
            link.target = "_blank";
            const copyBtn = document.createElement("button");
            copyBtn.className = "btn copy-btn";
            copyBtn.textContent = "复制";
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(result.url).then(() => {
                    copyBtn.textContent = "已复制!";
                    setTimeout(() => {
                        copyBtn.textContent = "复制"
                    }, 2000);
                });
            };
            resultItem.appendChild(link);
            resultItem.appendChild(copyBtn);
            fileListContainer.appendChild(resultItem);
        });
    }
    
    function resetUploadState() {
        filesToUpload = [];
        fileInput.value = "";
        renderFileList();
        hideMessage(uploadError);
        progressContainer.classList.add("hidden");
        uploadBtn.classList.remove("hidden");
        resetBtn.classList.add("hidden");
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    }

    function setButtonLoading(button, isLoading) {
        const btnText = button.querySelector(".btn-text");
        const target = btnText || button;
        if (!button.dataset.originalText) {
            button.dataset.originalText = target.textContent.trim();
        }
        if (isLoading) {
            button.disabled = true;
            target.innerHTML = btnText ? '<span class="loading-spinner"></span>处理中...' : "处理中...";
        } else {
            button.disabled = false;
            target.innerHTML = button.dataset.originalText;
        }
    }

    function showMessage(element, message) {
        element.textContent = message;
        element.classList.remove("hidden");
    }

    function hideMessage(element) {
        if (element) element.classList.add("hidden");
    }
});
