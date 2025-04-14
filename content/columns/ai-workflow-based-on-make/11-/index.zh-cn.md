---
title: "写作自动化实操：用Make和OpenRouter批量制作万字长文"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 11
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/11-writing-make-openrouter-batch-longform/](https://xiangyugongzuoliu.com/11-writing-make-openrouter-batch-longform/)

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

[工作流下载](https://pan.quark.cn/s/ea51a825815f)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/aa0eefb445e6409cb0488da2ac80848f?v=1bdffb72a33f452ebc5823eb30413bae&pvs=4)

**4\. 视频配套PPT**

[https://gamma.app/docs/Make-4twax1h205vukbk](https://gamma.app/docs/Make-4twax1h205vukbk)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

**主题：** 本文介绍如何利用 Make 工具和 OpenRouter 批量制作万字长文，大幅提升写作效率。

**主要内容：**

**工作流概述:**

+   通过定制化的工作流，利用大语言模型（LLM）首先生成文章大纲。
    
+   基于大纲遍历生成各个章节的内容，最终组合成高质量的万字长文。
    
+   演示了工作流运行过程，3 分钟内生成了包含 6 个章节的万字长文，并展示了最终效果。
    

**文章生成特点：**

+   基于大语言模型自身知识库生成的文章：内容覆盖面广，但深度不足，可能存在错误。
    
+   “由于大语言模型它会生成一些错误，它本身的这种知识库是来自于 Open AI 或者是各个大模型公司他在网页上抓取的全部的互联网的知识和训练的基础数据形成的这个知识库，他的覆盖面是非常广的。”
    
+   基于网页检索知识生成的文章：内容详细，但主题相关度不定。
    
+   基于书籍内容生成的文章：覆盖面小，但内容精准、质量高、可操作性强。
    
+   基于科研领域数据库生成的文章：内容极其专业，覆盖面极小，阅读难度大。
    
+   “最后一种就是专业性更强了，基于科研领域，我们可以直接检索开源的预印的一些数据库的网站，通过里面网站所获取的全文的这种内容来生成相关那种万字长文。”
    

**大语言模型模块介绍：**

+   Open AI 的 ChatGPT 模块：功能丰富，生成质量高，但获取 API 需要付费。
    
+   Kimi API 接口：可处理 PDF 文档，中文长文能力优秀，充值体验简化。
    
+   OpenRouter：为 LLM 提供统一的 API 接口，简化不同模型的集成和使用，支持数十种 LLM，包括免费模型，降低创作成本。
    
+   “Openrouter，那么这个工具或者这个工作模块，它是整个为大语言模型提供了统一的这种 API 的接口，可以简化我们不同模型的集成和使用。”
    

**工作流应用场景：**

+   内容创作：提高长文创作效率，适用于多主题、不同领域的写作需求。
    
+   自媒体和市场营销：生成适用于多平台的内容。
    
+   知识普及：快速创建科普类、教育类文章。
    

**Make.com 实操演示：**

+   利用 Notion 模块获取文章主题。
    
+   利用 Open AI 模块生成文章大纲，并解析 JSON 数据结构。
    
+   新建谷歌文档，并将标题设置为文章标题。
    
+   利用 Router 模块的遍历器功能，将每个章节分别发送给 OpenRouter。
    
+   利用 OpenRouter 的 HTTP 模块调用 LLM 生成章节内容，并保存至谷歌文档。
    
+   利用 Notion 模块更新文章状态，并将谷歌文档内容保存至 Notion 附录。
    

**技巧和注意事项：**

+   使用 Router 模块控制工作流启停，避免重复操作和内容损坏。
    
+   在提示词中设置占位符，实现编号的按顺序生成。
    
+   使用 JSON 格式输出时，定义 JSON 示例，保证数据条目结构一致。
    
+   选择合适的 LLM 模块，根据需求选择免费或付费模型。
    

**总结：** 通过 Make 和 OpenRouter 可以搭建自动化工作流，高效地生成高质量的万字长文，适用于各种内容创作场景。视频中详细讲解了工作流搭建步骤、技巧和注意事项，并通过实例演示了整个过程。