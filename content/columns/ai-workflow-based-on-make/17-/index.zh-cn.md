---
title: "PDF翻译自动化：利用Make打造反思翻译工作流"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 17
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---

# **视频链接**

[https://xiangyugongzuoliu.com/17-pdf-make-translation-workflow/](https://xiangyugongzuoliu.com/17-pdf-make-translation-workflow/)

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

**2024年10月4日：**

[工作流下载](https://pan.quark.cn/s/2ed09e1dbf7f)

提取码：8QUD

**2024年10月4日（文本加入反思机制）：**

[工作流下载](https://pan.quark.cn/s/3a8ca08a966b)

提取码：2Maj

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模板](https://xiaoyuzaici.notion.site/1e96596560254b2f82f3e733adbd1120?v=bada02b208fa45398ffa8dd0afda828a&pvs=4)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

**4\. 配套模版：**

配套提示词查看：

[链接](https://kdocs.cn/l/cnFN4wJ8QPto)

**6\. 注意事项：**

+   **文本粒度**是一个非常关键的参数，如果选择过长的粒度会造成信息的缺失，因为大模型的输出结果的长度是有限制的，所以推荐选择600为宜，1000的选项可能存在信息的缺失。当然如果是追求精炼PDF信息，可以选择长粒度1000甚至是2000。
    
+   运行make工作流前，需要在notion知识库中奖需要翻译的pdf或文本的状态调整为开始，否则会报错及未返回内容。
    
+   PDF的处理可以使用[https://www.pdfgear.com/zh/](https://www.pdfgear.com/zh/)完全免费的PDF软件，阅读、编辑、转换、合并和跨设备签署PDF文件，且无需注册。
    
+   针对文本翻译输入翻译文本的内容必须是纯文本格式，从网页复制的内容会存在存在超链接等情况，Notion会将文本转化为多个数组组合，造成内容不能获取完全，请将需要翻译的文本进行清除格式的除了。具体可以使用[https://www.bejson.com/zhanzhang/html\_del/](https://www.bejson.com/zhanzhang/html_del/)进行清除之后粘贴使用。
    
+   运行make工作流前，需要在notion知识库中奖需要翻译的pdf或文本的状态调整为开始，否则会报错及未返回内容。
    
+   工作流要先达到好的翻一下效果，选择**合适大模型、根据文本长度选择合适的文本粒度、对提示词根据翻译任务的目的进行微调、术语表添加反思机制（未按照术语表翻译的内容进行修正），多轮反思等综合设置**达到最佳的翻译效果。