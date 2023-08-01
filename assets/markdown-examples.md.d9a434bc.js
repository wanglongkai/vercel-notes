import{_ as s,o as a,c as n,V as l}from"./chunks/framework.edddbb10.js";const D=JSON.parse('{"title":"Markdown扩展示例","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),p={name:"markdown-examples.md"},o=l(`<h1 id="markdown扩展示例" tabindex="-1">Markdown扩展示例 <a class="header-anchor" href="#markdown扩展示例" aria-label="Permalink to &quot;Markdown扩展示例&quot;">​</a></h1><h2 id="语法高亮" tabindex="-1">语法高亮 <a class="header-anchor" href="#语法高亮" aria-label="Permalink to &quot;语法高亮&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="代码组" tabindex="-1">代码组 <a class="header-anchor" href="#代码组" aria-label="Permalink to &quot;代码组&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`sh [npm]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm run docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`sh [pnpm]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ pnpm run docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`sh [yarn]</span></span>
<span class="line"><span style="color:#A6ACCD;">$ yarn docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-RcJf_" id="tab-3YS3E8S" checked="checked"><label for="tab-3YS3E8S">npm</label><input type="radio" name="group-RcJf_" id="tab-yRdvLD9"><label for="tab-yRdvLD9">pnpm</label><input type="radio" name="group-RcJf_" id="tab-HoqmZnj"><label for="tab-HoqmZnj">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div></div></div>`,20),e=[o];function t(c,i,r,C,d,y){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
