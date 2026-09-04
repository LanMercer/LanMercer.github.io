# hexo-blog-v2

> 个人博客的 GitHub 部署仓库，通过 GitHub Pages 访问：`https://lanmercer.github.io/`

---

## 这个文件夹是什么

这是博客的**部署仓库**，存放 Hexo 生成后的静态文件（HTML/CSS/JS/图片），由 GitHub Desktop 管理并推送到 GitHub。

所有文件由 `hexo-blog-v2-backup` 通过 `hexo generate` 生成后同步过来，**不建议手动编辑此文件夹内的文件**。

---

## 目录结构

```
hexo-blog-v2/
├── index.html              # 博客首页
├── search.xml              # 本地搜索数据源
├── .gitattributes          # Git 属性配置
├── 2026/                   # 按年份归档的文章静态页
├── about/                  # 关于页面
├── archives/               # 归档页面
├── categories/             # 分类页面
├── tags/                   # 标签页面
├── search/                 # 搜索页面
├── css/                    # 博客样式文件
├── js/                     # 博客脚本文件
├── images/                 # 博客图片资源（文章配图等）
├── img/                    # 博客图标和 404 图片
├── game/                   # 游戏站跳转链接
├── node_modules/           # Node.js 依赖
└── public/                 # 遗留输出目录
```

---

## 如何更新博客内容

1. 在 `hexo-blog-v2-backup` 中编辑文章（`source/_posts/*.md`）
2. 运行 `npx hexo clean && npx hexo generate`
3. 将 `hexo-blog-v2-backup/public/` 的内容同步到本文件夹
4. 打开 GitHub Desktop，提交并推送

---

## 注意事项

- 此文件夹**缺少** `themes/` 和 `scaffolds/`，无法直接用 Hexo 重新生成
- 博客源码和主题配置在 `hexo-blog-v2-backup` 中
- 本地预览：`python -m http.server 4000`，访问 `http://localhost:4000/`
