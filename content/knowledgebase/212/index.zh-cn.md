---
title: "n8n 图片上传 Cloudinary 工作流"
date: 2025-04-25T08:00:00+08:00
draft: false
description: ""
tags: []
showauthor: true
slug: ""
ShowReadingTime: true
showWordCount: true
showSummary: true
summary: ""
weight: 
---

在自动化流程中，**图片上传**始终是一个关键环节。通过图床服务，我们可以快速获得图片的公网地址，用于展示、储存或对接前端页面。

为此，MetaX更新了《**n8n 图片上传 Cloudinary 手把手教程**》，采用 Cloudinary的**unsigned 上传方式**，免去签名复杂流程，适用于图床、头像上传、用户内容采集等公开场景。

以下是一个完整的教程，教你如何在 n8n 中使用「HTTP Request」节点，通过 Cloudinary 的 unsigned 上传方式上传图片。

## **🧰 第一步：在 Cloudinary 创建 Unsigned 上传 Preset**

1.  登录 Cloudinary 控制台，进入 Upload Settings。
    
    [https://cloudinary.com/users/login](https://cloudinary.com/users/login)
    
    ![](https://static.xiaobot.net/file/2025-04-25/720345/188c7f3b8aa45e20c89bacb5aa623e13.png!post)
    
2.  在「Upload Presets」部分，点击 **Add upload preset**。
    
3.  填写以下信息：
    
    ![](https://static.xiaobot.net/file/2025-04-25/720345/86d485c771777dd42807f0c53099decd.png!post)
    +   **Preset Name**：例如 unsigned\_upload。
        
    +   **Signing Mode**：选择 Unsigned。
        
4.  点击 **Save** 保存。
    

## **🧱 第二步：在 n8n 中配置工作流**

![](https://static.xiaobot.net/file/2025-04-25/720345/c42221d8c333518fadb5eff63e0cbb3a.png!post)

工作流下载地址：

[下载地址点击](https://pan.quark.cn/s/08b5cfc6d309)

提取码：mUjf

## 下载之后只需要设置红框内的三个参数替换为自己的参数即可。

### **1️⃣ Upload preset name（上传预设名称）**

+   **含义**：这是你在 Cloudinary 控制台中创建的 **上传预设（Upload Preset）名称**。
    
    ![](https://static.xiaobot.net/file/2025-04-25/720345/51263f3ae69f79137e797763737a75fa.png!post)

### **2️⃣ Cloud name（云名称）**

+   **含义**：你的 Cloudinary 帐号的唯一标识，称为 cloud\_name。
    
+   **查看方式**：
    
    +   登录 Cloudinary 后台；
        
    +   点击设置 → 「API Keys」；
        
    +   顶栏就是：
        
    
    ![](https://static.xiaobot.net/file/2025-04-25/720345/134e20beca43b78d1089d2a7f2df7c21.png!post)

### **3️⃣ 示例图片地址**

这个参数可以不用替换，使用MetaX的图片地址测试

+   **含义**：一个公网图片的直链 URL，用作上传测试用例。
    
    设置好后运行工作流，就可以在返回内容中查看图片的地址。
    

通过以上步骤，你可以在 n8n 中实现使用 Cloudinary 的 unsigned 上传方式上传图片。

### **⚠️ 使用 Unsigned 上传的注意事项（务必了解）**

虽然 unsigned 上传方式配置简单、无需签名，适合图床场景，但也存在一些**潜在的安全风险**，务必要理解并加以规避：

**🔓 上传接口对公众开放（无需鉴权）**

+   所有人只要知道你的 upload\_preset 名称和 cloud\_name，就可以上传图片到你的 Cloudinary 空间。
    
+   恶意用户可能利用该接口上传大量垃圾内容，甚至刷爆存储额度。
    

**✅ 建议：**

+   上传 preset 名称尽量设置复杂、不容易猜测（如：imgUpload\_202504\_secure）。
    
+   **绝不要在前端页面中暴露 Cloudinary 的 upload preset 名称**，建议仅用于后端或自动化场景。
    

