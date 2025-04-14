---
title: "小红书自动化：如何利用Make制作个人自媒体中心，批量生成爆款笔记"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 4
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/4-xiaohongshu-make-content-automation/](https://xiangyugongzuoliu.com/4-xiaohongshu-make-content-automation/)

# **视频资源**

**1\. 使用教程和简要过程**

详细的模版导入教程可以参考以下链接：

[https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3](https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3)

简要过程：

1\. 登录Make账户，创建新场景并导入翔宇工作流的蓝图文件

2\. 配置各模块的账户和API密钥

3\. 链接和配置Notion数据库

4\. 保存并运行工作流

**2\. Make 工作流模版文件下载**

**（如遇问题请随时访问该页面检查是否有新版本更新）：**

[工作流下载](https://pan.quark.cn/s/833e8a6adcf2)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/432cb5eaf52349cc92f71f7f3d1b50c9?v=e8931f1ce85d4aaa961f31cd2850ec24&pvs=4)

**4\. 视频配套PPT**

[https://gamma.app/docs/Make-trucg3s1y3dqyfa](https://gamma.app/docs/Make-trucg3s1y3dqyfa)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍：**

本文档将详细介绍如何利用 Make.com，结合 Inoreader、Jina API 和 ChatGPT，打造一个自动化生成小红书爆款笔记的工作流程。

**一、工作流目标：**

+   实现特定领域小红书笔记的自动化生成，解放生产力，提高内容创作效率。
    
+   保证内容的及时性和相关性，紧跟时事热点。
    

**二、工作流程：**

**新闻源获取（Inoreader）：**

+   确定关键词：根据目标领域确定核心关键词，例如“人工智能”、“财经”。
    
+   选择订阅源：在 Inoreader 中搜索相关关键词，筛选并订阅高质量的英文或中文订阅源，将其归集到特定文件夹（例如“人工智能”文件夹）。
    

**网页内容抓取（Jina API）：**

+   配置 Jina API：在 Jina Reader 网站上设置 API，确保绕过缓存并以 JSON 格式输出结构化数据。
    
+   在 Make.com 中配置 HTTP 模块：将 Jina API 的链接和授权信息添加到 HTTP 模块，设置 Header 信息，保证每次抓取最新内容并以 JSON 格式输出。
    

**小红书笔记生成（ChatGPT）：**

+   配置 OpenAI 模块：选择 GPT-4 或 GPT-3.5 模型，设置 System 角色和 User 角色。
    
+   编写 ChatGPT 提示词：
    
+   System 角色：设定对话背景，例如“你将收到一篇 AI 领域的新闻，请将其撰写成一篇小红书笔记”，并详细说明笔记要求，例如字数限制、表情符号使用、标题风格等。
    
+   User 角色：发送新闻标题和内容，并使用简洁的指令引导 ChatGPT 生成笔记。
    
+   设置输出格式：将 OpenAI 模块的输出格式设置为 JSON，方便后续解析和提取数据。
    

**内容解析（JSON Parse）：**

+   使用 Make.com 的 JSON Parse 模块，解析 ChatGPT 生成的 JSON 格式数据，将标题、正文、标签等信息分离。
    

**内容保存（Notion）：**

+   创建 Notion 数据库：新建一个数据库，用于存储生成的笔记内容，并设置相应的属性，例如标题、链接、发布时间、正文、标签等。
    
+   配置 Notion 模块：将 Make.com 的 Notion 模块连接到新建的数据库，并将解析后的 JSON 数据对应填入相应的属性。
    

**条件控制：**

+   设置网页内容字数限制：利用 Make.com 的条件控制功能，判断 Jina API 抓取的网页内容字数是否达到要求（例如大于 3000 字），如果不足则跳过后续步骤，避免生成低质量笔记。
    
+   设置笔记字数限制：同样利用条件控制功能，判断 ChatGPT 生成的笔记字数是否符合要求（例如 300-500 字），不符合要求则跳过，保证笔记质量。
    

**三、工作流优势：**

+   **自动化操作:** 无需人工干预，自动完成新闻采集、内容生成和笔记发布。
    
+   **高效性:** 大幅节省时间和人力成本，提高内容创作效率。
    
+   **定制化:** 可根据不同需求，灵活调整关键词、订阅源、ChatGPT 提示词等，生成定制化内容。
    
+   **可扩展性:** 可应用于不同领域，只需调整关键词和订阅源即可。
    

**四、注意事项：**

+   Jina API 和 ChatGPT 可能存在使用限制，建议参考官方文档进行设置。
    
+   需要根据实际情况调整 ChatGPT 提示词，以获得更优质的笔记内容。
    

**五、总结：**

通过以上步骤，即可搭建一个完整的小红书自动化内容生成工作流程。 希望本文档能帮助你利用自动化工具，提升内容创作效率，在小红书平台上取得更好的成绩。