document.addEventListener('DOMContentLoaded', () => {

    // --- 全局变量和配置 ---
    const LOGIN_WEBHOOK_URL = 'https://szb.zeabur.app/webhook/d4ba8fa0-45e9-4d1f-ad6d-9c3523ada543';
    const UPLOAD_WEBHOOK_URL = 'https://szb.zeabur.app/webhook/upload-file';
    const MAX_FILES = 10;
    
    // ========================================================================
    // ✨【核心配置】请在这里修改您允许的文件类型，格式为['.后缀名1', '.后缀名2']
    const ALLOWED_FILE_TYPES = ['.mp4']; 
    // ========================================================================

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

    // --- 初始化 ---
    // <--- 重要改动：动态设置input的accept属性，限制文件选择对话框
    fileInput.setAttribute('accept', ALLOWED_FILE_TYPES.join(','));
    updateUploadability(); // 初始化提示文本

    // --- 登录逻辑 (保持不变) ---
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
                loginSection.classList.add('hidden');
                uploadSection.classList.remove('hidden');
            } else {
                showMessage(loginError, data.message || '发生未知错误，请重试。');
            }
        } catch (error) {
            showMessage(loginError, '无法连接到服务器，请检查网络。');
        } finally {
            setButtonLoading(loginBtn, false);
        }
    });

    // --- 文件处理与上传交互 ---
    ['click', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, e => e.preventDefault());
    });
    uploadArea.addEventListener('click', () => {
        if (!uploadArea.classList.contains('disabled')) fileInput.click();
    });
    uploadArea.addEventListener('dragover', () => {
        if (!uploadArea.classList.contains('disabled')) uploadArea.classList.add('dragover');
    });
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

    // --- 核心功能函数 ---

    /**
     * 【已修改】处理文件选择，增加对多种文件类型的验证
     * @param {FileList} selectedFiles - 用户选择的文件列表
     */
    function handleFileSelection(selectedFiles) {
        hideMessage(uploadError);
        
        const validFiles = [];
        const invalidFileNames = [];

        // <--- 重要改动：使用数组方法检查文件类型
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
    
    /**
     * 【已修改】更新提示文本以显示所有允许的类型
     */
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

    // (uploadAllFiles, uploadSingleFile, renderSuccessResults, resetUploadState 及辅助函数保持不变)
    async function uploadAllFiles(){setButtonLoading(uploadBtn,!0),uploadBtn.classList.add("hidden"),progressContainer.classList.remove("hidden"),hideMessage(uploadError);let e=filesToUpload.reduce((e,t)=>e+t.size,0),t=0;const o=filesToUpload.map(o=>uploadSingleFile(o,l=>{t+=l;const n=e>0?Math.round(t/e*100):0;progressFill.style.width=`${n}%`,progressText.textContent=`整体进度: ${n}% (${formatFileSize(t)} / ${formatFileSize(e)})`}));try{const e=await Promise.all(o);renderSuccessResults(e)}catch(e){showMessage(uploadError,`上传失败: ${e.message||"未知错误"}`),progressContainer.classList.add("hidden"),uploadBtn.classList.remove("hidden")}finally{setButtonLoading(uploadBtn,!1),resetBtn.classList.remove("hidden"),uploadArea.classList.add("disabled")}}
    function uploadSingleFile(e,t){return new Promise((o,l)=>{const n=new XMLHttpRequest,s=new FormData;s.append("file0",e);let i=0;n.upload.onprogress=e=>{if(e.lengthComputable){const o=e.loaded-i;i=e.loaded,t(o)}},n.onload=()=>{if(n.status>=200&&n.status<300)try{const e=JSON.parse(n.responseText);e.success&&e.url?o({fileName:file.name,url:e.url}):l(new Error(e.message||`文件 ${file.name} 上传成功但服务器返回错误`))}catch(e){l(new Error(`文件 ${file.name} 的服务器响应解析失败`))}else l(new Error(`文件 ${file.name} 上传失败，状态码: ${n.status}`))},n.onerror=()=>l(new Error(`文件 ${e.name} 发生网络错误`)),n.open("POST",UPLOAD_WEBHOOK_URL,!0),n.send(s)})}
    function renderSuccessResults(e){progressContainer.classList.add("hidden"),fileListContainer.innerHTML="",e.forEach(e=>{const t=document.createElement("div");t.className="result-item";const o=document.createElement("a");o.className="result-link",o.href=e.url,o.textContent=e.fileName,o.title=e.url,o.target="_blank";const l=document.createElement("button");l.className="btn copy-btn",l.textContent="复制",l.onclick=()=>{navigator.clipboard.writeText(e.url).then(()=>{l.textContent="已复制!",setTimeout(()=>{l.textContent="复制"},2e3)})},t.appendChild(o),t.appendChild(l),fileListContainer.appendChild(t)})}
    function resetUploadState(){filesToUpload=[],fileInput.value="",renderFileList(),hideMessage(uploadError),progressContainer.classList.add("hidden"),uploadBtn.classList.remove("hidden"),resetBtn.classList.add("hidden")}
    function formatFileSize(e){if(0===e)return"0 Bytes";const t=1024,o=["Bytes","KB","MB","GB","TB"],l=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,l)).toFixed(2))} ${o[l]}`}
    function setButtonLoading(e,t){const o=e.querySelector(".btn-text"),l=o||e;e.dataset.originalText||(e.dataset.originalText=l.textContent.trim()),t?(e.disabled=!0,o?l.innerHTML='<span class="loading-spinner"></span>处理中...':l.textContent="处理中..."):(e.disabled=!1,l.innerHTML=e.dataset.originalText)}
    function showMessage(e,t){e.textContent=t,e.classList.remove("hidden")}
    function hideMessage(e){e&&e.classList.add("hidden")}
});
