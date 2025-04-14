---
title: "播客自动化实操：用Make自动制作每日新闻播客"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 6
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---

# **视频链接**

[https://xiangyugongzuoliu.com/6-podcast-make-daily-news-automation/](https://xiangyugongzuoliu.com/6-podcast-make-daily-news-automation/)

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

[工作流下载](https://pan.quark.cn/s/8b8fe807f7df)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/af2d64e368024a538408b22d870520d5?v=bce83e6c22214e9c8ec9afe92a2b1d6e&pvs=4)

**4\. 视频配套PPT**

[https://gamma.app/docs/NotionMake-qg5psqnbqq4h5vs](https://gamma.app/docs/NotionMake-qg5psqnbqq4h5vs)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

**主题：** 利用自动化工具 Make， 从数据源自动抓取新闻素材，并借助 OpenAI 生成播客文稿和音频，最终实现每日新闻播客的自动化制作。

**主要内容：**

**播客自动化流程演示:**

+   从 Notion 数据库中获取新闻素材。
    
+   使用 OpenAI 生成播客文稿。
    
+   利用 OpenAI 将文稿转换成 MP3 音频文件。
    
+   将生成的音频文件和文稿保存回 Notion 数据库。
    

**自动化流程详解:**

+   **数据源:** 新闻素材来源于 Notion 数据库，该数据库可以通过 RSS 或 Jina API 自动更新 (视频中提及前几期内容)。
    
+   **数据聚合:** 使用 "Text aggregator" 模块将多条新闻素材整合为一篇完整的文稿。
    
+   **OpenAI 应用:**调用 OpenAI 的 GPT 模型，将新闻素材转换为播客文稿，并以 JSON 格式输出。
    
+   利用 OpenAI 的语音合成功能 (Text to speech)， 将生成的播客文稿转换为 MP3 音频文件。
    
+   **Notion 数据库保存:** 将最终生成的音频和文稿保存至 Notion 数据库，方便后续管理和发布。
    

**Make 工具优势:**

+   **图形化界面:** 相较于其他自动化工具 (如 Zapier)，Make 的图形化界面更加直观，方便用户理解和操作。
    
+   **流程控制:** Make 支持 Router 功能，可以将一个复杂的工作流程拆分为多个模块，提高效率和可维护性。
    
+   **扩展性:** Make 支持 HTTP 模块，可以接入各种公开 API，扩展其功能。
    

**播客自动化应用场景:**

+   **企业内部简报:** 自动生成企业内部新闻、行业资讯等内容，方便员工了解最新动态。
    
+   **市场分析报告:** 自动抓取市场和金融类新闻，生成每日市场竞争报告和金融新闻分析，辅助制定营销策略。
    
+   **科技资讯:** 自动更新科技行业的最新技术发展和行业动态。
    
+   **个性化内容定制:** 可以根据特定领域或用户的需求，定制播客内容。
    

**其他重要信息:**

+   建议使用 OpenAI API Key 以获得更强大的功能和更智能的自动化体验。
    
+   可以根据需求调整 OpenAI 模型 (GPT 3.5 或 GPT 4.0)、语音音色、语速等参数。
    
+   可以通过设置日期过滤器，实现每日新闻的自动抓取和生成。
    

**原文引用:**

+   “以前呢我们一直生成小红书的笔记，是一种文本的形式或者图片的形式，那么今天呢，这种播客，就是一种新的声音的这种形式，未来呢也可以生成图文混排的这种微信公众号的这些内容，都是可以在 make.com 中，通过自动化的流程来进行实现的。”
    
+   "Make 里面有一个比较或者 Zapier 啊，都共同的特点就是如果说你前面，的那种块不运行，这里面就会没有数据，没有数据呢，因为它没有输出数据的结构，这里面它就不会输入。那么 Zapier 比 Make，它好在一个好的点的地方是，它实际上是分流程的，它每一个步都先获得一个数据，之后你再开始下一个它的流程。"
    

**总结:**

该视频教程详细介绍了如何使用 Make 自动化工具制作每日新闻播客，并深入讲解了每个步骤的具体操作和注意事项。作者强调了 OpenAI 在自动化流程中的重要作用，并对 Make 和 Zapier 进行了比较分析。最后，作者还列举了播客自动化的多种应用场景，展现了其巨大的潜力。