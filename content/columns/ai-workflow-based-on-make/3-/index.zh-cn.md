---
title: "Jina Reader api实操：如何利用make自动采集OpenAI官网新闻"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 3
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---

# **视频链接**

[https://xiangyugongzuoliu.com/3-jina-reader-make-chatgpt-openai-news-automation/](https://xiangyugongzuoliu.com/3-jina-reader-make-chatgpt-openai-news-automation/)

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

[工作流下载](https://pan.quark.cn/s/cf49ba7098cf)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/a5b7f9c61e344f8291fca129dd558f1f?v=c75cd36a72cc47dab33b1bece02c83ed&pvs=4)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍：**

本文档将概述如何使用 Make.com 和 Jina Reader API 自动采集 OpenAI 官网新闻，并将其保存到 Notion 数据库。

### 主要步骤：

**创建 Notion 数据库**

+   新建一个 Notion 数据库，命名为“OpenAI 新闻库”。
    
+   添加以下属性：
    
+   标题（Title）：用于存放新闻标题
    
+   内容（Content）：用于存放新闻内容
    
+   创建时间（Created Time）：记录创建时间
    
+   更新时间（Updated Time）：记录更新时间
    
+   发布时间（Published Time）：记录新闻链接的发布时间
    
+   封面（Cover）：用于存放新闻封面图片
    
+   链接（URL）：用于存放新闻链接
    

**获取 OpenAI 官网新闻链接**

+   可以通过两种方式获取 OpenAI 官网新闻页面的链接：
    
+   使用 RSS：将 OpenAI 官网新闻页面的 URL 转换为 RSS 格式，使用 Make.com 的“Watch RSS feed items”模块获取新闻链接、标题、发布时间等信息。
    
+   使用网站地图：找到 OpenAI 官网的网站地图（sitemap），根据网站地图中提供的链接进行采集。
    
+   本文使用 RSS.app 将 OpenAI 官网新闻页面的 URL 转换为 RSS 格式。
    

**使用 Jina Reader API 获取新闻全文**

+   由于 RSS 源不一定能获取到新闻全文，可以使用 Jina Reader API 获取新闻页面的全文数据。
    
+   将 Jina Reader API 的 URL 中的示例链接替换为需要采集的新闻链接。
    
+   在 Jina Reader API 的设置中：
    
+   选择“read”模式
    
+   开启“Json response”选项，以 JSON 格式返回数据
    
+   开启“Bypass cache”选项，确保每次都重新采集数据
    
+   在 Make.com 中添加“HTTP”模块，将 Jina Reader API 的 URL 和参数配置到模块中，即可获取新闻全文数据。
    

**使用 ChatGPT 处理文本内容**

+   使用 Make.com 中的 “OpenAI - Create a conversation” 模块调用 ChatGPT API。
    
+   将 Jina Reader API 获取到的新闻全文数据和新闻标题作为输入提供给 ChatGPT。
    
+   使用以下提示词，让 ChatGPT 将英文标题翻译成中文，并将长文本内容缩减成 500 字以内的中文新闻快报：
    
+   你是一个资深的新闻编辑，你将我发送给你的内容转化成500字的一个中文的快报，并将英文标题翻译成中文。最终按 JSON 格式输出出来。
    
+   将 ChatGPT 输出的 JSON 格式数据解析为可用的文本格式。
    

**将数据保存到 Notion 数据库**

+   使用 Make.com 中的 “Notion - Create a Page” 模块将处理后的数据保存到 Notion 数据库中。
    
+   将 ChatGPT 处理后的中文标题、新闻快报、新闻链接、发布时间、封面图片等信息分别对应填入 Notion 数据库的相应属性中。
    
+   将 Jina Reader API 获取到的新闻全文内容保存到 Notion 数据库的“内容”属性中。
    

### 注意事项：

+   Make.com 和 Notion 的连接可能存在时间限制，如果遇到连接问题，可以尝试刷新连接或重新连接。
    
+   可以根据实际需要调整 ChatGPT 的提示词和输出格式。
    

### 总结：

通过以上步骤，可以实现自动采集 OpenAI 官网新闻并保存到 Notion 数据库的功能，提高信息获取和整理的效率。