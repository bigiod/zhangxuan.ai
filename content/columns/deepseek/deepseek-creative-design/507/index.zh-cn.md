---
title: "这怕是全网最强的 DeepSeek 图片教程吧，赶紧收藏了！"
date: 2025-03-14
weight: 100
draft: false
description: ""
tags: []
slug: ""
---
## 这怕是全网最强的 DeepSeek 图片教程吧，赶紧收藏了！

废话不多说，我们直接进入正题，讲讲如何让 DeepSeek 帮我们通过文字生成图片，及处理图片。

### 文字生成图片

文字生成图片基本就两步。

1️⃣ 先提需求让 DeepSeek R1 优化内容，得到优化文本。

2️⃣ 再提需求让 DeepSeek R1 把优化文本转为图片。

下面介绍的几种生图方法中，第一步都是相同的，区别是第二步。

那么第一步该怎么做呢？

还是我们之前介绍的方法，套万能模样：背景+需求+约束条件，或用模仿的方法来优化内容。

比如把前文讲怎么用好 DeepSeek 的内容生成小红书样式的图片。

第一步，先让 DeepSeek R1 帮我们优化内容。

模仿小红书爆款格式，展示如下内容：

标题：DeepSeek 使用技巧

技巧：

1.  万能提问模板：背景+需求+约束条件（可选）

例子：我家小孩读初一（交代背景），怎样提高他的英语水平（提出需求），不需要考虑口语问题 （约束条件，可选）

2.  让 DeepSeek “说人话”

例子：我想了解 DeepSeek 成本这么低的原因。说人话。

3.  模仿人物回答

例子：模仿李白，写一首“万事如意”的藏头诗。

DeepSeek 给我优化的内容如下：

![img](https://pic.yupi.icu/yuyi/1739502355262-5b74867d-1b6b-415e-9759-381566fc8de9.webp)

怎么样，还行吧？😁

然后进入第二步，将优化文本转为图片，这一步的方法较多，且听我一个个介绍。

### 生成 SVG 图片

我们常用的图片格式是 png、jpg、webp 等格式，不过 DeepSeek R1 目前只支持直接生成 SVG 格式的图片。

所以我们可以直接要求 DeepSeek 生成 svg 图片，并提一些要求。

如我要求 “将整个回答转为 svg 图片，要求配色简约” 后，DeepSeek 输出如下：

![img](https://pic.yupi.icu/yuyi/1739502355232-875d596d-4ff7-48e8-9a98-bf4d24347d24.webp)

点击运行 HTML，弹出页面展示 svg 图片：

![img](https://pic.yupi.icu/yuyi/1739502355573-a1df4ec7-f6fd-4373-96e8-6f165eb12a98.webp)

如果你觉得生成的样式是你满意的样式，则复制整块内容，创建一个新文件，修改后缀名为 svg，再将内容贴进去就行了。

如果你觉得样式还需要调整，则根据 DeepSeek 提示的配色方案，布局结构等继续调整，直至满意为止。

生成 PNG、JPG 图片

你可以非要生成 png 和 jpg 等格式显示图片，此时又该怎么做呢？

这类需求要么用专门的 Python 库来处理图片，要么写个 HTML 文件生成图片。

哈哈，先不要觉得难，几句话就能搞定，有 DeepSeek 就不用我们写一行代码啦。

![img](https://pic.yupi.icu/yuyi/1739502355611-90c82343-ca78-4e1f-95ad-2c4ed1f3a34d.webp)

比如我直接提的需求：

将整个回答以小红书卡片的风格展示，用 html 输出，要求如下：

1.  每块文本对应一个卡片，每个卡片都提供下载为 png 的按钮，生成的图片中不要包括这个按钮。
2.  不要调整文本内容。
3.  配色简约，卡片美观。

DeepSeek 思考几秒后，直接就给我返回了 HTML 代码文件。

同样的，我们点击“运行 HTML” 按钮就行，比如 DeepSeek 给我返回的样式如下。

![img](https://pic.yupi.icu/yuyi/1739502355630-1a4ad725-1820-49af-a29a-11caafbe98da.webp)

点击“保存图片”就能拿到 png 图片。

怎么样，是不是很简单？

![img](https://pic.yupi.icu/yuyi/1739502355867-2ee2e997-5469-45a1-907f-f68929f2d67a.webp)

我这里的卡片样式没有仔细打磨，如果你在小红书小绿书做图文赛道，可以花时间弄一套自己的提示词，直接让 DeepSeek 变成你的出图神器！

### 生成 Mermaid 图表

DeepSeek 还支持 mermaid 语法，该语法包括流程图、甘特图、饼状图、思维导图等图表，感兴趣的朋友可以在 Mermaid 官网 https://mermaid.js.org/intro/ 查看所有图表类型。

比如我直接要求 DeepSeek 生成书籍的思维导图：

生成《纳瓦尔宝典》的思维导图，以 mermaid 格式保存

DeepSeek 返回结果如下：

![img](https://pic.yupi.icu/yuyi/1739502355861-4408af84-776a-4489-83c1-bc5357403a6e.webp)

我们复制 DeepSeek 返回的结果，在浏览器中打开 https://mermaid.live ，将复制的结果粘贴上去就能得到思维导图，然后点击下载 PNG 和 SVG 图片即可。

如下图所示：

![img](https://pic.yupi.icu/yuyi/1739502355955-e143c028-b22e-48d0-906b-96bb76a643bc.webp)

上面三种方法基本就能满足我们的大部分需求了，如果你都能掌握的话，已经超过 80% 玩 DeepSeek 的人了。

其实这里已经可以结束本文了，但关注过我的朋友都知道，咱不是一般的公众号主啊！

所以我再提供一些思路，有兴趣的朋友可以参考玩一玩。

### 第三方文字转图的 AI 工具

现在市面上有很多免费出图的 AI 工具，这些工具能根据我们提供的提示词来生成图片，提示词直接决定了生成的图片质量。

刚好，DeepSeek 非常擅长生成提示词。

比如我让 DeepSeek 给我生成一个鲸鱼跃出海面喷水的图片，它返回给我一段提示词。

![img](https://pic.yupi.icu/yuyi/1739502355999-13ad7cde-baaa-41d6-b7f8-9c93c799141f.webp)

拿到这个提示词后，我们再找个 AI 出图工具就能得到图片了。

一般来说，英文提示词的效果会优于中文提示词，所以我一般都是让 DeepSeek 直接生成英文提示词。

这个组合蛮适合帮我们生成漫画图、文章封面图，甚至制作视频。

这里再推荐几个常用生图的 AI 工具：

1.  即梦 AI：https://jimeng.jianying.com/ai-tool/image/generate
2.  Midjourney: www.midjourney.com/
3.  Stable Diffusion: 开源方案，可以本地部署，也可以网上搜一些线上方案，如 https://beta.dreamstudio.ai/generate
4.  Bing Image Creator: https://www.bing.com/images/create ，由 DALL·E 3 提供服务。
5.  ChatGPT、豆包等大模型。

比如我用即梦生成的图片：

![img](https://pic.yupi.icu/yuyi/1739502356062-4ee81b25-794f-4080-a9a7-5d0ca694401a.webp)

效果看起来蛮不错吧。

![img](https://pic.yupi.icu/yuyi/1739502356350-b948a45e-891e-4779-b4b4-572c9720dad8.webp)

另外提一句，DeepSeek 在发布 R1 后，在 1 月 28 号还开源了 Janus Pro 处理多模型，也可以根据文字生成图片。

官方给的效果图如下：

![img](https://pic.yupi.icu/yuyi/1739502356357-3155e5a9-cd26-4c0d-a388-aec7c9f717fa.webp)

看起来还行，不过我感觉出图质量没即梦好。

你可以在这个地址试用下：https://huggingface.co/spaces/deepseek-ai/Janus-Pro-7B 。

### 图片处理

如果想让 DeepSeek 帮我们处理图片的话，就只能写代码了。

这种需求通常需要和 DeepSeek 交流多次才能得到满意的效果。

比如我让 DeepSeek 生成一段 HTML 代码，将上传的图片转为“像素圆点风格”和“水墨风格”。

经过四五次与 DeepSeek 的交流后，得出的效果如下：

![img](https://pic.yupi.icu/yuyi/1739502356384-09071cf6-19f2-4577-9f20-55245b867f10.webp)

效果还是不错滴。

网上还有人分享了一个修改照片的方法，让 DeepSeek 生成 PS 脚本去修复照片，对比图如下：

![img](https://pic.yupi.icu/yuyi/1739502356403-35a7cf51-2bdc-4a41-93cf-a30af509cd45.webp)

这个方法我还没测试，估计也是和 DeepSeek 交流多次才实现的。

如果你也想试一下的话，注意 Photoshop 2022 之后的版本才能跑脚本哈。

![img](https://pic.yupi.icu/yuyi/1739502356522-a33b2a21-d470-4bc1-a037-a12fd69e81e6.png)

好了，关于 DeepSeek 处理图片的内容就分享到这了。

> 来源：https://mp.weixin.qq.com/s/uLfResdgf3Ysu\_woG8Rk9A