---
title: "小红书头像赛道自动化实操：用Make和Replicate制作人物卡通头像"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 12
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---
# **视频链接**

[https://xiangyugongzuoliu.com/12-xiaohongshu-make-replicate-avatar-automation/](https://xiangyugongzuoliu.com/12-xiaohongshu-make-replicate-avatar-automation/)

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

[工作流下载](https://pan.quark.cn/s/1694e70cef0a)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/3013d58a1c55445ca403bf50334aca91?v=11037360776d4dea88a68e7d27a9f567&pvs=4)

**4\. 视频配套PPT**

[https://gamma.app/docs/MakeReplicate-1rpt9sj5spizgyo](https://gamma.app/docs/MakeReplicate-1rpt9sj5spizgyo)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

# **视频介绍**

**主要内容:**

本视频教程详细介绍了如何利用Make和Replicate平台自动化制作美式卡通头像，并将其应用于小红书头像赛道。

**核心要点:**

+   小红书头像赛道优势:受众范围广，尤其受年轻人喜爱。
    
+   类型多样，可满足不同用户需求。
    
+   创作门槛低，成本低，收益可观。
    
+   变现渠道多样，例如定制头像、开设网店等。
    
+   主要工具:Make: 自动化工作流平台，用于搭建自动化流程。
    
+   Replicate: 机器学习模型部署平台，提供大量开源模型，包括face to sticker模型，专门用于生成卡通贴纸头像。
    
+   Notion: 知识库工具，用于存储垫图文件、头像生成数量等信息。
    
+   ImgBB: 图床工具，用于存储生成的头像图片，解决Replicate图片过期问题。
    
+   自动化流程步骤:在Notion知识库中创建头像库，存储垫图文件等信息。
    
+   使用Make的Notion模块检索需要生成头像的垫图链接。
    
+   使用Make的HTTP模块调用Replicate的face to sticker模型，上传垫图并生成头像。
    
+   使用Make的Sleep模块设置等待时间，等待头像生成完成。
    
+   使用Make的HTTP模块获取生成的头像图片链接。
    
+   使用Make的Notion模块更新头像库状态为“已完成”。
    
+   使用Make的Iterater模块遍历生成的头像图片链接。
    
+   使用Make的HTTP模块下载头像图片文件。
    
+   使用Make的ImgBB模块上传头像图片到图床，获取永久图片链接。
    
+   使用Make的Notion模块将图片链接保存到头像库。
    
+   成本与收益:Replicate模型调用成本低，每次生成头像仅需几毛钱。
    
+   小红书头像定制价格可达79元/个，销量可观。
    
+   利用Make自动化流程，可以低成本、高效率地制作头像，实现盈利。
    

**重要引文:**

+   “如果大家可以运行多次，它就可以生成不同的着装... 这就是我们针对亚洲女性生成的一个例子。”
    
+   “它整个的会生成两个图片，第一个是黑色的一个背景，另外一个图片是一个白色的背景...”
    
+   “make工具来实现了一个自动化的流程，而且成本很低，但是它带来的效果很好。”
    
+   “如果生成一个手绘的头像，它的价格是79元，而且销量也还可以，200多个这就是非常可观的一个收入。”
    
+   “这个模型它效果非常好，专门用来生成贴纸的卡通头像。”
    
+   “所以说，我们尽量的设置成240秒长一点，让它覆盖的范围更广，然后保证我们后面真正的工作流能获取到数据。”
    

**视频教程亮点:**

+   详细的操作步骤演示，易于理解和学习。
    
+   实用的技巧分享，例如如何设置等待时间、如何使用图床解决图片过期问题等。
    
+   对小红书头像赛道的深度分析，提供盈利思路。
    
+   对未来工作流的展望，例如生成不同场景的头像、视频等。
    

**总结:**

本视频教程为想要进军小红书头像赛道的小伙伴提供了详细的自动化操作指南，通过学习本教程，可以快速掌握利用Make和Replicate制作美式卡通头像的方法，实现低成本、高效率的头像制作，开启盈利之路。