---
title: "跨境电商必备：Make与RAG打造文章自动化创作工作流"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 18
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/18-make-rag-ecommerce-content-workflow/](https://xiangyugongzuoliu.com/18-make-rag-ecommerce-content-workflow/)

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

**2024年10月17日（Smartsuit版本）：**

[工作流下载](https://pan.quark.cn/s/a9c061c7fdb5)

提取码：5wmf

**2024年10月17日（Airtable版本）：**

[工作流下载](https://pan.quark.cn/s/1276cfcc8a99)

提取码：HZkT

**3.数据库模板**

点击下方链接查看数据库模板：

[https://app.smartsuite.com/shared/s86z4dxi/vf8tOmTwP1](https://app.smartsuite.com/shared/s86z4dxi/vf8tOmTwP1)

[https://airtable.com/apppdnJYZ4cCSQT6Z/shrMBBKzilW364cy1](https://airtable.com/apppdnJYZ4cCSQT6Z/shrMBBKzilW364cy1)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

**4.PPT:**

[https://miro.com/app/board/uXjVK14yTgg=/?share\_link\_id=764297992263](https://miro.com/welcomeonboard/OU5EVnorN1ZiRHJaOCtyYUVwRjJrOFVtcUNIeU5ZWG10ZzE5T1R3OGNXbGlGYjlUN1BoNGtCK2dYSndOeHNvUjRVdUFRVExrTWJVQWY3bmJYdWRCOTYra0tuYk9oZ0VucWYwVGZZdFp1UFVGYWhTaGJKZENYRkZ6R1NYV2EyeXRzVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=53582148985)

**5\. 注意事项：**

+   开头的原文的组合是一个非常重要的步骤，请尽量把商品的型号等问题都加入每行的参数中，这样能够帮助大模型更好的生成内容。
    
+   另外如果重排如果不是需要的片段主要是嵌入模型和重排模型搭配的问题，可根据自己文本的内容（语言）去选择合适的嵌入模型，和重排模型，在Jina官网上有介绍每种模型的用途与适用的语言范围。
    
+   该工作流的内容创作的实现为什么选择建立RAG而不是直接在notion数据库直接获取新建而是需要嵌入提取。有如下几个方面的原因：
    

1.为的介绍airtable和smartsuit的使用方法和实时出发的实现方向，针对跨境电商领域工作流实时运行尤为重要，数据一点不同更新会造成多平台信息混乱，所以通过这个工作流把make自动化工作流实时出发的技巧讲解一下。

2.通过这个工作流讲解RAG系统。

3.如果商品数量很多的情况，向数据库的检索方式更为合适，因为单纯通过关键词无法定位多个商品获取内容，基于这些内容生成多商品的推广文章。

4.当然单纯的复制商品的规格和描述也能实现Listing的内容制作，这个工作流把提示词进行了分享，可以直接大模型应用。