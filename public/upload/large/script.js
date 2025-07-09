// script.js (最终完整版)

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 全局变量和配置 ---
    const LOGIN_WEBHOOK_URL = 'https://szb.zeabur.app/webhook/d4ba8fa0-45e9-4d1f-ad6d-9c3523ada543';
    const GCS_SIGN_REQUEST_URL = 'https://szb.zeabur.app/webhook/request-gcs-upload-url'; // 确保这个URL正确
    const MAX_FILES = 10;
    const ALLOWED_FILE_TYPES = ['.mp4'];
    const SESSION_DURATION = 60 * 60 * 1000; // 1小时

    let filesToUpload = [];

    // --- 2. 获取所有HTML元素 ---
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
    const logoutBtn = document.getElementById('logoutBtn');

    // --- 3. 初始化与事件监听 ---
    // (这部分是之前缺失的关键代码)
    
    // 检查登录状态
    checkLoginStatus(); 

    // 登录表单提交事件
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // <-- 这行代码至关重要，阻止页面刷新！
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
                performLogin();
            } else {
                showMessage(loginError, data.message || '发生未知错误，请重试。');
            }
        } catch (error) {
            showMessage(loginError, '无法连接到服务器，请检查网络。');
        } finally {
            setButtonLoading(loginBtn, false);
        }
    });

    // 退出登录按钮点击事件
    logoutBtn.addEventListener('click', logout);

    // 文件处理与上传交互事件
    fileInput.setAttribute('accept', ALLOWED_FILE_TYPES.join(','));
    updateUploadability();
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

    // --- 4. 登录与会话管理函数 ---
    // (这部分是之前缺失的关键代码)
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

    function logout() {
        localStorage.removeItem('userSession');
        location.reload();
    }
    
    // --- 5. 文件选择与列表渲染函数 ---
    // (这部分是之前缺失的关键代码)
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

    // --- 6. 核心上传逻辑 (这是我们新升级的部分) ---
    async function uploadAllFiles() {
        setButtonLoading(uploadBtn, true);
        uploadBtn.classList.add("hidden");
        progressContainer.classList.remove("hidden");
        hideMessage(uploadError);

        let totalSize = filesToUpload.reduce((sum, file) => sum + file.size, 0);
        let uploadedSize = 0;
        
        progressFill.style.width = '0%';
        progressText.textContent = `整体进度: 0% (0 Bytes / ${formatFileSize(totalSize)})`;

        const uploadPromises = filesToUpload.map(file => uploadSingleFile(file, (chunkSize) => {
            uploadedSize += chunkSize;
            const percentage = totalSize > 0 ? Math.round(uploadedSize / totalSize * 100) : 0;
            progressFill.style.width = `${percentage}%`;
            progressText.textContent = `整体进度: ${percentage}% (${formatFileSize(uploadedSize)} / ${formatFileSize(totalSize)})`;
        }));

        try {
            const results = await Promise.allSettled(uploadPromises);
            const successfulUploads = results.filter(r => r.status === 'fulfilled').map(r => r.value);
            const failedUploads = results.filter(r => r.status === 'rejected').map(r => r.reason.message);
            
            renderSuccessResults(successfulUploads);

            if (failedUploads.length > 0) {
                showMessage(uploadError, `部分文件上传失败:\n- ${failedUploads.join('\n- ')}`);
            }
        } catch (error) {
            showMessage(uploadError, `发生意外错误: ${error.message}`);
        } finally {
            setButtonLoading(uploadBtn, false);
            resetBtn.classList.remove("hidden");
            uploadArea.classList.add("disabled");
        }
    }

    async function uploadSingleFile(file, onProgress) {
        let signedUrlResponse;
        try {
            const response = await fetch(GCS_SIGN_REQUEST_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fileName: file.name,
                    contentType: file.type || 'application/octet-stream'
                }),
            });
            if (!response.ok) throw new Error(`无法获取上传许可, 状态: ${response.status}`);
            signedUrlResponse = await response.json();
            if (!signedUrlResponse.success || !signedUrlResponse.uploadUrl) throw new Error('服务器返回的上传许可无效');
        } catch (error) {
            throw new Error(`文件 "${file.name}" 获取许可失败: ${error.message}`);
        }

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(signedUrlResponse.method, signedUrlResponse.uploadUrl, true);
            xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream');
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
                    const finalUrl = signedUrlResponse.uploadUrl.split('?')[0];
                    resolve({ fileName: file.name, url: finalUrl });
                } else {
                    reject(new Error(`文件 "${file.name}" 上传至GCS失败, 状态: ${xhr.status}`));
                }
            };
            xhr.onerror = () => reject(new Error(`文件 "${file.name}" 发生网络错误`));
            xhr.send(file);
        });
    }

    // --- 7. 结果渲染与状态重置函数 ---
    // (这部分是之前缺失的关键代码)
    function renderSuccessResults(results) {
        progressContainer.classList.add("hidden");
        fileListContainer.innerHTML = "";
        if (results.length === 0) {
            fileListContainer.classList.add("hidden");
            return;
        }
        fileListContainer.classList.remove("hidden");
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
                    setTimeout(() => { copyBtn.textContent = "复制" }, 2000);
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

    // --- 8. 辅助函数 ---
    // (这部分是之前缺失的关键代码)
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
