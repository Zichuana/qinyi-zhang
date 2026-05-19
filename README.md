# Academic Homepage (GitHub Pages)

一个适合部署到 `GitHub Pages` 的静态单页学术主页（Academic Homepage）。

## 文件结构

- `index.html`：主页内容（简介 / Research / News / Publications / Experience / Awards / Contact）
- `styles.css`：站点样式（白底学术风格 + News 滚动窗口 + Publications 代表作高亮）
- `script.js`：单页导航高亮（滚动时自动高亮当前 section）
- `favicon.png`：头像图片（页面头像目前使用该文件）
- `icons.png`：站点标签页图标（favicon）

## 常用修改位置

打开 `index.html`，你通常会改这些内容：

- 顶部信息（姓名、学校/实验室、邮箱/主页链接）：`<section class="hero">`
- Research Interest（研究方向标签）：`#research`
- News（动态列表）：`#news`
- Publications（论文列表）：`#publications`
- Education / Experience / Awards / Contact：对应 section

## 小技巧

### News：重要标记

在对应的 `<li>` 上加 `class="news-important"`，右侧会出现 `‼️` 标记，并有浅红底高亮。

### Publications：代表作高亮（黄色）

在对应的 `<article>` 上加 `publication-featured`，并在标题前加：

`<span class="publication-badge">代表作</span>`

## 本地预览

直接双击 `index.html` 即可打开，或者使用本地静态服务器预览。

## 部署到 GitHub Pages

如果这个仓库名是 `<你的用户名>.github.io`：

1. 把文件推送到仓库默认分支
2. 打开 GitHub 仓库的 `Settings`
3. 找到 `Pages`
4. 将部署来源设置为默认分支根目录
5. 保存后等待几分钟即可访问

如果你已经在使用自定义域名，也可以继续在 GitHub Pages 设置中绑定。
