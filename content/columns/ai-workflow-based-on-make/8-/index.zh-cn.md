---
title: "零基础教程：如何使用Notion和Make搭建自动化电子图书馆"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 8
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/8-notion-make-digital-library-automation/](https://xiangyugongzuoliu.com/8-notion-make-digital-library-automation/)

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

[工作流下载](https://pan.quark.cn/s/dccf7f405f3d)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/30d211bccd944fd9a42ed89001ff824c?v=6b3d940c7f894d08975d3340465366c6&pvs=4)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

### **核心主题：**

本教程介绍如何利用 ChatGPT4 的多模态能力，从豆瓣图书图片中提取信息，并自动化保存到 Notion 数据库，实现高效的图书信息管理。

**主要内容：**

**工作流目标：** 通过识别豆瓣图书图片，自动提取图书信息（书名、作者、出版社等），并将其结构化存储到 Notion 数据库，构建个人电子图书馆。

**实现效果：**

在 Notion 数据库中新建条目，保存豆瓣图书链接，并将状态设为“开始”。

运行工作流，自动完成信息提取和存储。

在 Notion 数据库中查看完整的图书信息。

**步骤分解：**

获取图书链接： 在 Notion 中创建数据库，用于保存图书信息（书名、作者、出版社、出版日期、页数、价格、豆瓣评分等）。

将链接转换为图片： 利用 HCTI 模块，将图书链接转换为图片格式。

下载图片： 使用 HTTP 模块下载图片。

ChatGPT4 图像识别： 将图片输入 ChatGPT4，识别提取图书信息。

结构化输出： 将提取的图书信息，以 JSON 格式输出。

解析 JSON 数据： 对输出的 JSON 数据进行解析，分离各个数据条目。

保存到 Notion 数据库：将解析后的数据保存到 Notion 数据库对应条目中。

**工作流优势：**

自动化信息采集： 免去手动复制粘贴的繁琐操作。

+   信息结构化存储： 方便日后检索和管理。
    
+   应用场景广泛： 可用于监控商品价格、追踪网页变化等场景。
    

注意事项：

+   信息准确性： 由于是基于图像识别，可能存在少量信息识别错误的情况，需要人工核对。
    
+   封面保存： 本教程未涉及封面保存，将在后续视频中介绍。
    
+   数据来源： 可结合豆瓣图书 RSS 源，实现新书和热门书籍的自动抓取。
    

**总结：** 本教程详细介绍了如何利用 ChatGPT4 和 Notion 搭建自动化电子图书馆，并提供了详细的操作步骤和注意事项。 希望本教程能帮助您更高效地管理图书信息。