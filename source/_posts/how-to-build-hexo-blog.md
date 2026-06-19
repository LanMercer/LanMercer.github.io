---
title: 如何搭建自己的 Hexo 博客
date: 2026-06-19 14:00:00
categories:
  - 教程
tags:
  - Hexo
  - 建站
  - 新手教程
cover: ''
---

# 如何搭建自己的 Hexo 博客

如果你也想拥有一个像我这样的个人博客，这篇文章会手把手教你从零开始搭建一个 Hexo 博客。

## 什么是 Hexo？

Hexo 是一个快速、简洁且高效的静态博客框架，使用 Markdown 写作，一键生成网页。它的优点是：

- **免费** - 完全开源，不需要服务器费用
- **简单** - 只需要会写 Markdown 就能发布文章
- **美观** - 有大量免费主题可以选择
- **可定制** - 支持自定义主题和插件

## 搭建步骤概览

### 第一步：安装 Node.js

Hexo 基于 Node.js 运行，所以首先需要安装它。去 [Node.js 官网](https://nodejs.org) 下载安装包，选择 LTS（长期支持）版本即可。

### 第二步：安装 Hexo

打开命令行，输入：

```
npm install -g hexo-cli
```

### 第三步：创建博客项目

```
hexo init my-blog
cd my-blog
npm install
```

### 第四步：选择主题

Hexo 有很多漂亮的主题。我使用的是 **Butterfly** 主题，安装方法：

```
npm install hexo-theme-butterfly
```

### 第五步：写文章

在 `source/_posts/` 目录下创建 `.md` 文件，用 Markdown 格式编写内容即可。

### 第六步：预览和发布

```
hexo server    # 本地预览
hexo generate  # 生成静态文件
hexo deploy    # 部署到 GitHub Pages
```

## 写在最后

搭建博客并不难，难的是坚持写下去。希望这篇简单的教程能帮到你，如果你有任何问题，欢迎在 GitHub 上给我留言！
