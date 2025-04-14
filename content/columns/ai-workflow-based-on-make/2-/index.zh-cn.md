---
title: "从 Apify到 Notion：如何利用make实现自动化Youtube视频采集"
date: 2025-03-13
draft: false
description: ""
tags: []
showauthor: true
slug: ""
series: ["基于make的AI自动化工作流"]
series_order: 2
seriesOpened: false
ShowReadingTime: false
showWordCount: false
---

## 视频链接

[https://xiangyugongzuoliu.com/2-apify-to-notion-make-youtube-automation/](https://xiangyugongzuoliu.com/2-apify-to-notion-make-youtube-automation/)

## **视频资源**

**1\. 使用教程和简要过程**

详细的模版导入教程可以参考以下链接：

[https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3](https://xiaobot.net/post/03a57a85-017d-4433-8b69-85ac73779039?refer=887f6c59-e879-48e4-a8fb-ef07f8dac6b3)

简要过程：

1\. 登录Make账户，创建新场景并导入翔宇工作流的蓝图文件

2\. 配置各模块的账户和API密钥

3\. 链接和配置Notion数据库

4\. 保存并运行工作流

**2\. Make 工作流模板文件下载**

Make 工作流的 JSON 蓝图文件，点击下方链接即可下载并导入你的 Make 账号

**（如遇问题请随时访问该页面检查是否有新版本更新）**：

[工作流下载](https://pan.quark.cn/s/30208ca7c9a6)

**3\. Notion 数据库模板**

点击下方链接即可获取Notion 数据库模板复制到自己的工作空间：

[数据库模版](https://xiaoyuzaici.notion.site/f1e7ee5ac9104c769a0fc4e7a6975817?v=3bd036028d254f4facf528123b35da0c&pvs=4)

通过这些工具和资源，你可以快速完成翔宇工作流视频中的工作流搭建！

## **视频介绍**

本文档总结了祥玉工作流博主小宇的视频“从 Apify 到 Notion：如何利用 Make 实现自动化 Youtube 视频采集”的主要内容。该视频分享了如何利用 Make.com 打造一套高效的自动更新的视频采集库，方便后期处理和应用。

### 流程概述

整个流程通过以下步骤实现：

1\. 设置触发器 (Basic Trigger)：将需要采集的视频链接和频道链接放到触发器中。

2\. 数据分发 (Iterator)：利用迭代器将链接数据分别发送给 Apify。

3\. 数据采集 (Apify)：Apify 作为专业的网络数据采集工具，根据设置的参数采集视频信息。

4\. 数据存储 (Notion)：采集到的数据最终保存到 Notion 数据库中，方便查看和管理。

### Notion 数据库搭建

首先需要在 Notion 中创建一个数据库用于存储采集到的视频数据。数据库字段设置如下：

\- 文本类型：

\- 视频标题

\- 视频描述

\- 频道名称

\- 时长

\- 数字类型：

\- 观看次数

\- 评论数

\- 喜欢数

\- URL 网址：

\- 频道链接

\- 视频链接

\- 文件和媒体：

\- 视频封面

\- 日期：

\- 创建时间

\- 更新时间

\- 发布日期

### Make.com 工作流搭建

1\. 创建场景：在 Make.com 中创建一个新的场景 (Scenario)，命名为“视频采集”。

2\. 添加触发器模块：选择 Basic Trigger 模块，设置触发条件，例如手动触发或定时触发。

3\. 输入频道链接：在触发器模块中输入需要采集的 YouTube 频道链接，例如 Make.com 和 OpenAI 的频道链接。

4\. 添加迭代器模块：使用 Iterator 模块将多个频道链接数据逐个分发给后续步骤。

5\. 添加 Apify 模块：选择 Apify 模块，并设置连接，使用 API Key 将 Make.com 和 Apify 账户相关联。

6\. 设置采集参数：在 Apify 模块中设置采集参数，例如：

\- channelUrl: 设定需要采集的频道链接，可以使用 Make.com 触发器模块中传递过来的链接。

\- downloadCaptions: 选择是否下载字幕。

\- uploadDateFilter: 设置采集的时间范围，例如过去一周、一个月或一年。

\- maxResults: 设置单次采集的最大视频数量。

7\. 添加获取数据模块：选择 Apify 的 "Get Dataset Items" 模块，用于获取采集到的数据。

8\. 添加 Notion 模块：选择 Notion 的 "Create a Database Item" 模块，用于将采集到的数据保存到 Notion 数据库中。

9\. 字段匹配：将 Apify 模块中采集到的数据字段与 Notion 数据库中对应的字段进行匹配。

10\. 添加字幕模块：由于字幕内容较长，需要使用 Notion 的 "Append to Database Item Content" 模块将字幕内容添加到单独的记录中。

### 采集模式设置

Make.com 支持两种采集模式：

1\. 一次性采集：将 maxResults 设置为较大的值，例如 500 或 1000，并将 uploadDateFilter 设置为空，即可一次性采集该频道的所有视频数据。

2\. 周期性采集：将 maxResults 设置为较小的值，例如 20，并将 uploadDateFilter 设置为 This Week，然后设置 Make.com 场景的定时运行时间，例如每周日晚上，即可实现每周更新一次视频数据。

注意事项

1\. 在设计工作流时，建议先运行每个步骤，并查看输出数据的结构，确保数据能够正确传递。

2\. 由于某些视频可能没有字幕，为了避免程序出错，可以使用条件判断语句 (Conditions) 判断字幕是否存在，如果存在则执行添加字幕的操作。

### 总结

通过 Make.com 和 Apify 的结合，可以轻松实现自动化 Youtube 视频采集，并将数据存储到 Notion 数据库，大大提高了工作效率，方便后续的数据处理和应用。