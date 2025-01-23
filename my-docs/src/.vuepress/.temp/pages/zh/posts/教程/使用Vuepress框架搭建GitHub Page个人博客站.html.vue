<template><div><p>使用vuepress以及GitHub page搭建个人博客站</p>
<!-- more -->
<h1 id="使用vuepress框架搭建github-page个人博客站" tabindex="-1"><a class="header-anchor" href="#使用vuepress框架搭建github-page个人博客站"><span>使用Vuepress框架搭建GitHub Page个人博客站</span></a></h1>
<h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境"><span>准备环境</span></a></h2>
<h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h3>
<p>前往Node.js官方网站下载并安装Node.js</p>
<p><a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">Node.js — 在任何地方运行 JavaScript</a></p>
<h3 id="vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope"><span>VuePress Theme Hope</span></a></h3>
<p>一个前端框架<br>
运行以下命令，安装该框架</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm init vuepress-theme-hope@latest my-docs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里的 my-docs 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称</p>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2>
<ul>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vuepress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vuepress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</p>
<p>&quot;&lt; dir &gt;&quot;就是项目文件夹名称，如 my-docs</p>
</li>
</ul>
<p>对应命令：</p>
<div class="language-npm line-numbers-mode" data-highlighter="shiki" data-ext="npm" data-title="npm" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm run docs:dev 启动开发服务器</span></span>
<span class="line"><span>npm run docs:build 构建项目并输出</span></span>
<span class="line"><span>npm run docs:clean-dev 清除缓存并启动开发服务器</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用知识" tabindex="-1"><a class="header-anchor" href="#常用知识"><span>常用知识</span></a></h2>
<p><strong>Frontmatter</strong></p>
<p>Frontmatter 是 VuePress 中很重要的一个概念，它用于承载 Markdown 文件的配置。</p>
<p>Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面用本文举一个示例:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#cover: /assets/images/cover2.jpg</span></span>
<span class="line"><span>icon: pen-to-square</span></span>
<span class="line"><span>date: 2025-01-23</span></span>
<span class="line"><span>category:</span></span>
<span class="line"><span>  - 配置教程</span></span>
<span class="line"><span>tag:</span></span>
<span class="line"><span>  - 教程</span></span>
<span class="line"><span>star: true</span></span>
<span class="line"><span>sticky: true</span></span>
<span class="line"><span>--------------------以上是Frontmatter配置-----------------------</span></span>
<span class="line"><span>cover    代表页面的预览图。</span></span>
<span class="line"><span>icon     代表当前页面图标的 FontClass 或文件路径。</span></span>
<span class="line"><span>date     代表写作时间，格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss</span></span>
<span class="line"><span>category 代表分类。</span></span>
<span class="line"><span>tag      代表标签。</span></span>
<span class="line"><span>star	 代表是否标为星标文章。当填入数字时，数字越大，排名越靠前。</span></span>
<span class="line"><span>sticky   代表是否在列表中置顶。当填入数字时，数字越大，排名越靠前。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多配置请看：<a href="https://theme-hope.vuejs.press/zh/config/frontmatter/" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/config/frontmatter/</a></p>
<p><strong><code v-pre>.vuepress</code> 文件夹</strong></p>
<p>VuePress 使用文档文件夹中的 <code v-pre>.vuepress</code> 文件夹存放配置，所有 VuePress 相关的文件都将会被放在这里。</p>
<p>常用的配置文件为 config.ts和 theme.ts</p>
<p>配置文件大全：</p>
<p><a href="https://vuejs.press/zh/reference/config.html" target="_blank" rel="noopener noreferrer">配置 | VuePress</a></p>
<p><a href="https://vuejs.press/zh/reference/theme-api.html" target="_blank" rel="noopener noreferrer">主题 API | VuePress</a></p>
<p><strong>VuePress 项目结构</strong></p>
<p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 <code v-pre>src</code> 文件夹，项目下的其他文件不受 VuePress 控制。</p>
<p>一个基本的项目结构如下:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── .github (可选的) → GitHub 配置文件存放路径</span></span>
<span class="line"><span>│    └── workflow → GitHub 工作流配置</span></span>
<span class="line"><span>│         └── docs-deploy.yml → 自动部署文档的工作流</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src → 文档文件夹</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── .vuepress (可选的) → VuePress 配置文件夹</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── dist (默认的) → 构建输出目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── public (可选的) → 静态资源目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── styles (可选的) → 用于存放样式相关的文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    └── client.{js,ts} (可选的) → 客户端文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── ... → 其他项目文档</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── README.md → 项目主页</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── package.json → Nodejs 配置文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署到githubpage" tabindex="-1"><a class="header-anchor" href="#部署到githubpage"><span>部署到GithubPage</span></a></h2>
<p>当你在本地完成项目的初步开发后,你可以将项目的内容部署到你网站的服务器上。</p>
<p><strong>新建GitHub 项目</strong></p>
<p>新建一个GitHub项目命名为 <strong>&lt;USERNAME&gt;.github.io/</strong> 的格式</p>
<figure><img src="@source/zh/posts/教程/VuepressGaideImage1.png" alt="image-20250123193806383" tabindex="0" loading="lazy"><figcaption>image-20250123193806383</figcaption></figure>
<p>创建完毕后</p>
<p>将整个项目推送到GitHub</p>
<p>对应命令</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 初始化</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>#创建.gitignore 文件</span></span>
<span class="line"><span>touch .gitignore</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑.gitignore文件并上传GitHub</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># .gitignore内容</span></span>
<span class="line"><span>dist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 上传GitHub</span></span>
<span class="line"><span># 项目所有文件添加到暂缓区</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span># 为这个提交添加一条简短的说明</span></span>
<span class="line"><span>git commit -m "忽略 dist 目录"</span></span>
<span class="line"><span># 将当前分支（强制）重命名为main</span></span>
<span class="line"><span>git branch -M main</span></span>
<span class="line"><span># 连接到远程仓库</span></span>
<span class="line"><span>git remote add origin https://github.com/&#x3C;username>/&#x3C;username>.git</span></span>
<span class="line"><span># 将缓存内容推送到远程仓库中</span></span>
<span class="line"><span>git push -u origin main</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>再次编辑.gitignore文件</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#dist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>使用 <code v-pre>npm docs:build</code> 命令构建网站。</strong></p>
<p>如果你在使用模板，网站内容将会输出到 VuePress 项目的 <code v-pre>.vuepress/dist</code> 文件夹下。这些文件就是 VuePress 的最终输出结果。</p>
<p><strong>单独上传dist文件夹</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m 'push dist'</span></span>
<span class="line"><span>// 将 dist 目录的内容推送到远程仓库的 gh-pages 分支（这个命令会创建对应分支，如果没有的话）</span></span>
<span class="line"><span>git subtree push --prefix my-docs/src/.vuepress/dist origin gh-pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--prefix后面对应项目dist文件夹的路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时会有2个分支<br>
<img src="@source/zh/posts/教程/VuepressGaideImage2.png" alt="image-20250123195454042" loading="lazy"></p>
<p>进入项目的setting部分<br>
<img src="@source/zh/posts/教程/VuepressGaideImage3.png" alt="image-20250123195654187" loading="lazy"></p>
<p>按照图示步骤配置setting</p>
<p>最终网站地址会在第四个地方出现<br>
此时网站部署就大功告成啦。<br>
<img src="@source/zh/posts/教程/VuepressGaideImage4.png" alt="image-20250123195836538" loading="lazy"></p>
<p>感谢阅读.</p>
</div></template>


