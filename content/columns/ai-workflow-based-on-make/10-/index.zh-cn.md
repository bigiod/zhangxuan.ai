---
title: "科研自动化实操：用Make工具批量自动进行文献总结"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 10
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/10-research-make-batch-literature-automation/](https://xiangyugongzuoliu.com/10-research-make-batch-literature-automation/)

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

**（如遇问题请随时访问该页面检查是否有新版本更新）**：

[工作流下载](https://pan.quark.cn/s/a1057abd7a34)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/c10da18d24294eb6a1c55755476772e6?v=60483f1d056b4c828428045cac0c9f07&pvs=4)

**4\. 视频配套PPT**

[https://gamma.app/docs/Make-ge6rcr8kx2za9wt](https://gamma.app/docs/Make-ge6rcr8kx2za9wt)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

本视频介绍了如何利用 Make 工具实现科研自动化，批量进行文献总结，并将结果保存到 Notion 数据库中。

**核心步骤:**

+   建立 Notion 科研知识库:根据文献元数据（期刊信息、DOI、关键词、摘要、作者等）建立 Notion 知识库。
    
+   设置属性，包括文件储存位置、状态（开始/完成）、分类（如：大语言模型）。
    
+   下载 PDF 文件:利用 HTTP 模块下载 PDF 文件到 Make 服务器。
    
+   PDF 转文本:使用 PDF.co 模块将 PDF 文件转换为纯文本格式。
    
+   可设置提取页码范围，例如提取前三页 (0-3)。
    
+   文本转结构化数据:利用 OpenAI 的 Chat GPT 模块将文本转换为结构化数据。
    
+   自定义提示词，提取标题、作者、摘要、关键词、URL、DOI 和期刊等信息。
    
+   定义数据结构，设置参数名称、描述、数据类型和示例。
    
+   路由器 (Router):根据需求，将工作流分为两个分支：
    
+   科研文献总结: 生成一般性文献总结。
    
+   科研文献摘要: 生成针对具体科研课题的摘要。
    
+   科研文献总结:利用 Chat GPT 模块生成一般性文献总结，字数限制为 3000 字。
    
+   自定义系统提示词，定义角色、任务、限制条件和输出格式。
    
+   将结果保存到 Notion 知识库，更新状态为“已完成”。
    
+   科研文献摘要:利用 Chat GPT 模块生成针对具体科研课题的摘要，字数限制为 3000 字。
    
+   自定义系统提示词，定义角色、任务、限制条件和输出格式。
    
+   在发送给 Chat GPT 的消息中加入具体的研究课题，例如“大语言模型”。
    
+   将结果保存到 Notion 知识库。
    

**工作流优势:**

+   提高科研效率: 自动化处理大量文献，快速提取信息和生成总结报告，节省时间和精力。
    
+   支持团队协作: 在 Notion 中共享知识库，协同工作，提高团队效率。
    
+   定制化: 可根据需求修改提示词和数据结构，生成满足特定需求的文献总结和摘要。
    
+   可扩展性: 可应用于其他领域，例如金融分析、产品发布等。
    

**关键提示:**

+   PDF.co 模块的使用需要付费，新用户有免费额度。
    
+   可使用不同的模块和方法实现相同目的，例如使用 Kimi 的文件接口或 PDF 转 Markdown 模块。
    
+   路由器功能可以控制工作流的分支和执行顺序。
    
+   定制化的提示词是生成高质量总结和摘要的关键。
    

**结论:**

Make 工具可以帮助科研人员自动化处理文献，提高工作效率。通过定制化的提示词和模块配置，可以生成满足特定需求的文献总结和摘要，为科研工作提供有力支持。