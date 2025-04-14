---
title: "从 RSS 到 Notion：如何利用make实现自动更新知识库"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 1
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---

## 视频链接

[https://xiangyugongzuoliu.com/1-rss-to-notion-make-automation/](https://xiangyugongzuoliu.com/1-rss-to-notion-make-automation/)

## 视频资源

**1\. 使用教程和简要过程**

详细的模版导入教程可以参考以下链接：

[https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3](https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3)

简要过程：

1\. 登录Make账户，创建新场景并导入翔宇工作流的蓝图文件

2\. 配置各模块的账户和API密钥

3\. 链接和配置Notion数据库

4\. 保存并运行工作流

**2\. Make 工作流模板文件下载**

**（如遇问题请随时访问该页面检查是否有新版本更新）**：

[工作流下载](https://pan.quark.cn/s/3c4c6482c086)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模板](https://xiaoyuzaici.notion.site/cbf85a47c8574328941a43cc7c4818d8?v=6774b2dd446c447f9a1ff3cd2cfb7e8b&pvs=4)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

## 视频介绍

本介绍总结了视频“从 RSS 到 Notion：如何利用 Make 实现自动更新知识库”的主要内容，并提取了其中的重要信息和操作步骤。

### 目标

该视频旨在利用 Make.com 自动化地将 RSS 内容整合到 Notion 数据库中，实现知识库的自动更新。

### 流程概述

1.  **创建 Notion 数据库**: 设置标题、创建时间、更新时间、发布时间、原文链接、PDF 文件链接等属性。
    
2.  **使用 Make.com**:
    

+   添加 RSS 模块：实时监控 RSS 源，获取最新内容，包括标题、描述、图片、分类、来源、发布时间等信息。
    
+   添加 OpenAI 模块：将中文标题翻译成英文，方便后续生成 PDF 文件名。
    
+   添加 JSON 模块：解析 OpenAI 返回的 JSON 格式数据，提取翻译结果。
    
+   添加 Text Parser 模块：截取翻译后的标题，控制长度不超过 Notion 属性限制。
    
+   添加 HTML to Markdown 模块：将 RSS 内容中的 HTML 语言转换为 Markdown 格式，方便在 Notion 中阅读和检索。
    
+   添加 PDF.co 模块：将原文链接转换为 PDF 文件，完整保存 RSS 内容。
    
+   添加 Google Drive 模块：将生成的 PDF 文件上传到 Google 云盘。
    
+   添加 Notion 模块 (创建条目)：在 Notion 数据库中创建新的条目，填写标题、原文链接、发布时间等信息。
    
+   添加 Notion 模块 (附加内容)：将 Markdown 格式的 RSS 内容添加到 Notion 条目的对应属性中。
    

1.  **运行流程**: Make.com 自动执行所有步骤，实现 RSS 内容到 Notion 知识库的自动更新。
    

### 关键步骤和注意事项

+   RSS 模块：根据实际订阅源的输出数据结构，选择相应的字段。
    
+   OpenAI 模块：使用create completion 模块进行翻译，提示词中需指定翻译内容和输出格式 (JSON)。
    
+   JSON 模块：解析 OpenAI 返回的数据，提取翻译结果。
    
+   Text Parser 模块：使用正则表达式截取字符串，例如 ^.{0,90} 表示匹配前 90 个字符。
    
+   HTML to Markdown 模块：将 HTML 转换为 Markdown 格式，提高可读性。
    
+   PDF.co 模块：需要注册账号并获取 API Key。
    
+   Google Drive 模块：需要在 Google Cloud Platform 中创建项目，启用 Google Drive API，创建服务账号和 OAuth 2.0 客户端 ID，并将相关信息配置到 Make.com 中。
    
+   Notion 模块：需要授权 Make.com 访问指定的 Notion 页面和数据库。
    

### 优势

+   自动化流程：无需手动操作，节省时间和精力。
    
+   信息整合：将分散的 RSS 内容集中到 Notion 数据库中，方便管理和检索。
    
+   完整保存：将原文链接转换为 PDF 文件，避免信息丢失。
    
+   知识增强：可将 PDF 文件与 ChatGPT 连接，进一步挖掘知识。
    

### 视频中提到的重要提示

+   不同 RSS 源的输出数据结构可能不同，需要根据实际情况调整 Make.com 中的配置。
    
+   OpenAI 的返回结果可能不稳定，有时会出现 JSON 格式错误，可以使用 flow control 模块中的 ignore 或 rollback 功能处理错误。
    
+   Notion 属性有长度限制，需要对过长的文本进行截取。
    
+   Google Drive 模块的配置比较复杂，需要按照步骤操作。
    
+   从 RSS 到 Notion 自动更新知识库中可能出现的错误及解决方案
    
+   不同 RSS 订阅源的输出数据格式可能不同，需要根据实际情况选择正确的字段。
    
+   建议在添加新的模块或修改模块设置后，运行一次该模块以获取数据，方便后续设置。
    
+   建议定期检查各个服务的 API 额度和运行状态，避免因服务问题导致自动化流程中断。
    

### 总结

通过学习该视频，可以掌握利用 Make.com 自动更新 Notion 知识库的方法，提高信息获取和知识管理效率。