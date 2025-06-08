---
title: "随时掌握全网热榜：手把手搭建个人热点 API"
date: 2025-04-21T08:00:00+08:00
draft: false
description: ""
tags: []
showauthor: true
slug: ""
ShowReadingTime: true
showWordCount: true
showSummary: true
summary: ""
weight: 
---

大家好，我是MetaX  。今天给大家带来一份非常实用的教程，手把手教你如何实时获取全网热点。无论是在 Make 还是 n8n 自动化工作流中，热点数据都是内容创作和推广的核心素材：及时、精准的热榜信息能帮助你迅速捕捉趋势，提升流量和转化率。


在接下来的内容里，我将从项目说明、Zeabur 一键部署，最后演示 API 调用，全流程演示如何搭建属于你自己的“今日热榜”服务，让你轻松实现热点自由。

### 教程简介：

本教程将带领您 **Fork** 并部署 DailyHotApi 仓库到您自己的 GitHub，然后通过 **Zeabur** 一键部署，最终搭建一个随时可用的“今日热榜” API 服务。全文共分为四大部分：项目简介、环境准备、部署步骤、API 调用示例，语言专业但通俗易懂，确保完整覆盖从零到上线的关键环节。

**项目简介**

DailyHotApi 是由 imsyy 发布的一个开源项目，聚合了 B 站、微博、知乎、抖音等多个平台的实时热榜数据，并以 JSON/RSS 形式对外提供 API 接口，支持极快响应和多种部署方式。

核心特性：

• **多源聚合**：涵盖主流中文社区与资讯站点的热榜；

• **双模式输出**：JSON 与 RSS；

• **缓存机制**：默认 60 分钟缓存，可通过环境变量自定义；

• **多平台部署**：支持 Docker、Vercel、Railway、Zeabur 等 。

**环境准备**

1\. **GitHub 账号**：用于 Fork 与代码托管。

2\. **Zeabur 账号**：用于云端部署，支持 GitHub 一键集成 。 

### **部署步骤**

**1\. Fork 到自己的 GitHub 仓库**

打开 [https://github.com/imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi) 页面，点击 **Fork**，将项目复制到您的账号下。

![](https://static.xiaobot.net/file/2025-04-21/720345/fac57b257af0a83702d31b006f2a55ca.png!post)![](https://static.xiaobot.net/file/2025-04-21/720345/249ccfd88f7e9f6f78680049e9813363.png!post)

**2\. 在 Zeabur 上部署**

Zeabur 注册链接:[https://bit.ly/42yBafS](https://bit.ly/42yBafS)

Zeabur 支持从 GitHub 仓库一键部署 Node.js 应用，无需手写 Dockerfile。

**登录** Zeabur 控制台，点击 **New Project → Deploy New Service**。

![](https://static.xiaobot.net/file/2025-04-21/720345/74f4274c4c038ffefaffce49d1b65ed2.png!post)![](https://static.xiaobot.net/file/2025-04-21/720345/8c8b9f368812eacee5a6ef4848934339.png!post)

我一般项目都选择美国，这个根据个人倾向性。

![](https://static.xiaobot.net/file/2025-04-21/720345/4f72a635bee23f429823861bc7dae390.png!post)

**选择 GitHub** 作为源码来源，授权并选中您 Fork 的 DailyHotApi 仓库。

![](https://static.xiaobot.net/file/2025-04-21/720345/4dc40806f259b0e20d3acd2e3c722d9d.png!post)![](https://static.xiaobot.net/file/2025-04-21/720345/9bcfc6543cc4fd6f13a42a2117ade4e8.png!post)

3.**启动部署**

Zeabur 会自动识别 Node.js 项目并执行 npm install、npm run build、npm start（或 serveHotApi）等步骤。

如需自定义域名，可在 **Domains** 中绑定您的自有域或使用 \*.zeabur.app 子域。

![](https://static.xiaobot.net/file/2025-04-21/720345/32a9dda06cc8d087f4338d179aeb39ad.png!post)![](https://static.xiaobot.net/file/2025-04-21/720345/1fd7a3378cb2ba40b77068055e67dbeb.png!post)

**4\. 访问与使用**

部署成功后，假设您的 Zeabur 域名为 dailyhot-xyz.zeabur.app，即可通过以下 URL 访问 API：

![](https://static.xiaobot.net/file/2025-04-21/720345/e9eecb53c68b358861900e4199ebc232.png!post)

### 使用简介

该接口支持以下四种主要功能选项：

1\. 基础请求：获取平台的最新热榜数据，无额外参数。

2\. RSS 模式：支持通过 RSS 阅读器获取热榜数据。只需在请求网址后加上 rss=true。

3\. 限制数量：对于某些返回的数据量较大的接口，用户可以通过添加 limit=20 等参数来限制返回的数据条目数。

**热榜覆盖媒体平台包括：**

36kr、51cto、AcFun、Baidu、Bilibili、CSDN、豆瓣小组 (Douban Group)、豆瓣电影 (Douban Movie)、抖音 (Douyin)、地震信息 (Earthquake)、原神 (Genshin)、HelloGitHub、历史上的今天 (History)、崩坏 (Honkai)、虎扑 (Hupu)、虎嗅 (Huxiu)、ifanr、IT之家 (iThome)、iThome-Xijiayi、简书 (Jianshu)、掘金 (Juejin)、LOL、网易新闻 (Netease News)、NGA论坛 (Ngabbs)、NodeSeek、QQ新闻 (QQ News)、新浪新闻 (Sina News)、新浪 (Sina)、少数派 (SSPai)、崩坏：星穹铁道 (Starrail)、澎湃新闻 (ThePaper)、贴吧 (Tieba)、头条 (Toutiao)、V2EX、天气预警 (Weather Alarm)、微博 (Weibo)、微信读书 (WeRead)、知乎日报 (Zhihu Daily)、知乎 (Zhihu）

### Make.com 与 n8n 调用简易教程

**RSS 模式**

注意make和n8n使用的放置有两种模式，一种是通过添加RSS参数，直接在rss阅读器（inoreader和feedly）中进行订阅（也可在make和n8n中添加rss模块添加订阅结构），RSS 的地址为https://自己自定义的域名前缀.zeabur.app/rss/weibo。

通过rss阅读器的文件夹聚合功能进行多订阅源的管理输出，然后来到make使用rss进行数据获取，注意该种方式每次运行只返回一个热榜内容。

**HTTP 模式：**

另一种方式通过HTTP模块直接调用，具体方法如下：

**选择 HTTP 模块：**

在搜索框中输入 "HTTP"，选择 HTTP 模块。

## **配置 HTTP 模块：**

\- Method: 选择GET。

\- URL: 输入 API 的完整 URL。

例如：https://自己自定义的域名前缀.zeabur.app/bilibili

![](https://static.xiaobot.net/file/2025-04-21/720345/f8624ab7cf5e6c54e6555d86fd0c6a93.png!post)![](https://static.xiaobot.net/file/2025-04-21/720345/5d65a4fb3a61367365738e56c1089024.png!post)

**总结**

通过本教程，您已成功将 DailyHotApi Fork 到个人仓库，并借助 Zeabur 的一键部署功能，快速搭建了自用的“今日热榜” API。如有不懂可以访问项目页面获得介绍：[https://github.com/imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)


**注意事项：**

由于第三方服务可能存在不稳定性，可能随时失效，建议会员采取小额充值、按需使用的策略，避免大额充值带来的资金浪费。此外，务必注意保护个人信用卡信息，防范网络诈骗或数据泄露风险。

另外，由于属于第三方服务，出现的任何使用问题与不稳定情况，可到相关网址进行解决方案的获取。

本文分享的所有数据获取方法和工具推荐仅供学习、交流和了解数据获取途径之用，禁止用于任何商业用途。会员在使用这些工具时应严格遵守相关法律法规，确保使用行为的合法性。

