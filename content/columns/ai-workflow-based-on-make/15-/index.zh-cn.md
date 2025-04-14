---
title: "Firecrawl爬虫实操：Make和Firecrawl全自动撰写博客文章引流"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 15
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/15-firecrawl-make-blog-automation/](https://xiangyugongzuoliu.com/15-firecrawl-make-blog-automation/)

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

[2024年9月8日版本：](https://pan.quark.cn/s/b61f2e1c56d7)

[2024年9月10日版本：（删除存储于notion附录最后的附加图片）](https://pan.quark.cn/s/5766014cf6be)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[https://xiaoyuzaici.notion.site/08f75f8816454f8a98850d22e3e82a00?v=995b3ab8242d40b086e1e8166a9b0b39&pvs=4](https://xiaoyuzaici.notion.site/08f75f8816454f8a98850d22e3e82a00?v=995b3ab8242d40b086e1e8166a9b0b39&pvs=4)

**4\. 视频配套PPT**

[**https://gamma.app/docs/15MakeFirecrawl-jzlqcqxuizasmdq**](https://gamma.app/docs/15MakeFirecrawl-jzlqcqxuizasmdq)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

本文档基于翔宇工作流的视频“Firecrawl爬虫实操：Make和Firecrawl全自动撰写博客文章引流”的内容进行总结分析，提炼出视频中介绍的工作流的主要功能、技术要点以及应用价值。

### 工作流概述

该工作流旨在实现全网数据的自动化采集，并利用AI大模型将采集到的数据转化为高质量的博客文章、小红书笔记等内容，最终实现自动化内容生产和引流。

### 主要功能

1.  网站链接抓取: 利用 Firecrawl 工具抓取目标网站的所有链接，包括子页面链接，并支持关键词筛选，高效获取所需链接。
    
2.  内容提取与转化: 利用 Firecrawl 的 scrape 功能抓取单个网页内容，并将其转化为简洁的 Markdown 格式。
    
3.  多语言模型内容处理: 支持接入多种大语言模型，例如 OpenAI、Kimi 等，对提取的内容进行翻译、去除非必要信息（例如广告），并根据需求生成博客文章、小红书笔记等不同格式的内容。
    
4.  Notion 数据库存储: 将最终生成的文章内容和相关信息存储到 Notion 数据库中，便于后续管理和发布。
    

### 技术要点

**Firecrawl 爬虫工具**:

+   核心功能：自动化爬取网页内容，并转化为适合大语言模型训练的数据格式。
    
+   主要端点：
    
+   map: 抓取目标网站的所有链接。
    
+   scrape: 抓取单个网页内容并转化为 Markdown 格式。
    
+   crawl: 抓取整个网站内容，并可选择转化为 Markdown 格式。
    
+   优势：
    
+   支持本地部署，免费开源。
    
+   提供在线服务，每月500个抓取点数。
    
+   支持全面抓取，包括单网页和整站内容。
    
+   集成 AI 技术，可动态适应和解析网页内容。
    

**Make 自动化平台**:

+   核心功能：通过可视化界面搭建自动化工作流，连接不同的应用程序和服务，实现自动化操作。
    
+   关键模块：
    
+   HTTP 请求：用于访问 Firecrawl 的 API 端点，发送抓取请求。
    
+   Iterator 遍历器：用于遍历 Firecrawl 抓取到的所有链接，逐个进行内容处理。
    
+   Notion 模块：用于连接 Notion 数据库，存储和管理生成的内容。
    
+   大语言模型模块：用于接入 OpenAI 等 AI 服务，实现内容翻译、改写等功能。
    

**结构化提示词**:

+   作用：引导大语言模型按照特定要求进行内容处理。
    
+   内容：
    
+   翻译：将英文内容翻译为中文。
    
+   信息过滤：删除广告等非必要信息。
    
+   格式要求：例如生成小红书笔记的特定格式。
    

### 应用价值

1.  高效内容生产: 自动化抓取、处理和生成内容，极大提升内容生产效率，节省人力成本。
    
2.  高质量内容输出: 利用大语言模型进行内容优化，确保内容质量和可读性。
    
3.  精准内容定位: 可根据目标受众需求，定制化生成不同平台的内容，例如博客文章、小红书笔记等。
    
4.  全网数据利用: 打破信息孤岛，充分利用全网数据资源，开拓更广泛的内容创作领域。
    
5.  SEO 优化: 自动生成符合 SEO 规范的文章内容，提升网站搜索排名，吸引更多流量。
    

### 总结

翔宇工作流展示的“Firecrawl爬虫实操：Make和Firecrawl全自动撰写博客文章引流”工作流为自动化内容生产提供了一种高效的解决方案，通过结合 Firecrawl 爬虫工具、Make 自动化平台以及大语言模型，实现了从数据采集到内容生成的完整流程自动化，对于提升内容生产效率、拓宽内容创作领域具有重要意义。