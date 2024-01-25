import{_ as s,o as a,c as n,V as l}from"./chunks/framework.74edd467.js";const e="/wicv-notes/assets/flex-direction.11ec4bfd.jpg",o="/wicv-notes/assets/flex-wrap.44225e2a.jpg",p="/wicv-notes/assets/flex-justify-content.3700846b.jpg",t="/wicv-notes/assets/flex-align-item.a943cd18.jpg",c="/wicv-notes/assets/flex-align-content.7a63b3d2.jpg",r="/wicv-notes/assets/flex-grow.73138534.jpg",i="/wicv-notes/assets/flex-shrink.1a9aa57c.jpg",d="/wicv-notes/assets/flex-align-self.79b3e1f3.jpg",b=JSON.parse('{"title":"Flex布局","description":"","frontmatter":{},"headers":[],"relativePath":"domcss/flex.md","filePath":"domcss/flex.md"}'),y={name:"domcss/flex.md"},C=l(`<h1 id="flex布局" tabindex="-1">Flex布局 <a class="header-anchor" href="#flex布局" aria-label="Permalink to &quot;Flex布局&quot;">​</a></h1><p>详情参阅<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?%5E%25$" target="_blank" rel="noreferrer">阮一峰-Flex布局教程</a></p><h2 id="flex布局是什么" tabindex="-1">Flex布局是什么？ <a class="header-anchor" href="#flex布局是什么" aria-label="Permalink to &quot;Flex布局是什么？&quot;">​</a></h2><p>弹性布局，容器设置<code>display</code>为<code>flex</code>或<code>inlne-flex</code>即指定为flex布局。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">    display:flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>设为flex布局后，直接子元素的<code>float</code>、<code>clear</code>、<code>vertical-align</code>属性都将失效。</p></div><h2 id="容器的属性" tabindex="-1">容器的属性 <a class="header-anchor" href="#容器的属性" aria-label="Permalink to &quot;容器的属性&quot;">​</a></h2><p>以下6个属性设置在容器上。</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-direction</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-wrap</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-flow==&gt;flex-direction和flex-wrap的简写形式</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> justify-content</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> align-items</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> align-content</span></span></code></pre></div><br><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h3><ul><li><p><strong><code>flex-direction</code>:决定主轴的方向（即项目排列的方向）。常用</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row | row-reverse | column | column-reverse</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍*/</span></span>
<span class="line"><span style="color:#A6ACCD;">row（默认值）：主轴为水平方向，起点在左端。</span></span>
<span class="line"><span style="color:#FFCB6B;">row-reverse</span><span style="color:#A6ACCD;">：主轴为水平方向，起点在右端。</span></span>
<span class="line"><span style="color:#A6ACCD;">column：主轴为垂直方向，起点在上沿。</span></span>
<span class="line"><span style="color:#FFCB6B;">column-reverse</span><span style="color:#A6ACCD;">：主轴为垂直方向，起点在下沿。</span></span></code></pre></div><p><img src="`+e+`" alt="flex-direction"></p><p><br> <br></p></li></ul><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h3><ul><li><p><strong><code>flex-wrap</code>:默认情况下，项目都排在一条轴线上。该属性定义一条轴线排不下时，如何换行。</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap | wrap | wrap-reverse</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍*/</span></span>
<span class="line"><span style="color:#A6ACCD;">nowrap(默认)：不换行。</span></span>
<span class="line"><span style="color:#A6ACCD;">wrap：换行，第一行在上方，即常规的换行。</span></span>
<span class="line"><span style="color:#FFCB6B;">wrap-reverse</span><span style="color:#A6ACCD;">：换行，第一行在下方。</span></span></code></pre></div><p><img src="`+o+`" alt="flex-wrap"><br> <br></p></li></ul><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><ul><li><p><strong><code>justify-content</code>：定义项目在主轴上的对齐方式。常用</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | space-between | space-around</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍*/</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">（默认值）：左对齐</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">：右对齐</span></span>
<span class="line"><span style="color:#A6ACCD;">center： 居中</span></span>
<span class="line"><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;">：两端对齐，项目之间的间隔都相等。</span></span>
<span class="line"><span style="color:#FFCB6B;">space-around</span><span style="color:#A6ACCD;">：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</span></span></code></pre></div><p><img src="`+p+`" alt="justify-content"><br> <br></p></li></ul><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h3><ul><li><p><strong><code>align-items</code>:定义项目在交叉轴上的对齐方式。</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | baseline | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍*/</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">：交叉轴的起点对齐。</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">：交叉轴的终点对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">center：交叉轴的中点对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">baseline: 项目的第一行文字的基线对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</span></span></code></pre></div><p><img src="`+t+`" alt="align-items"></p></li></ul><p><br> <br></p><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><ul><li><p><strong><code>align-content</code>:属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | space-between | space-around | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍*/</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;">：与交叉轴的起点对齐。</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;">：与交叉轴的终点对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;">center：与交叉轴的中点对齐。</span></span>
<span class="line"><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;">：与交叉轴两端对齐，轴线之间的间隔平均分布。</span></span>
<span class="line"><span style="color:#FFCB6B;">space-around</span><span style="color:#A6ACCD;">：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</span></span>
<span class="line"><span style="color:#A6ACCD;">stretch（默认值）：轴线占满整个交叉轴。</span></span></code></pre></div><p><img src="`+c+`" alt="align-content"><br> <br></p></li></ul><h2 id="项目的属性" tabindex="-1">项目的属性 <a class="header-anchor" href="#项目的属性" aria-label="Permalink to &quot;项目的属性&quot;">​</a></h2><p>以下6个属性设置在项目上。</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> order</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-grow</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-shrink</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex-basis</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> flex</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> align-self</span></span></code></pre></div><br><h3 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;flex-grow&quot;">​</a></h3><p><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大。</p><p><img src="`+r+'" alt="flex-grow"></p><h3 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><p><img src="'+i+`" alt="flex-shrink"></p><h3 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h3><p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间。</p><ul><li>浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</li></ul><h3 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h3><ul><li><strong><code>flex</code>:<code>flex-grow</code>、<code>flex-shrink</code>、<code>flex-basis</code>的简写形式，默认值为<code>0 1 auto</code>。</strong></li></ul><br><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h3><ul><li><p><strong><code>align-self</code>:该属性允许单个项目在交叉轴上有不一样的对齐方式，可覆盖<code>align-items</code>的属性。</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-self</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto | flex-start | flex-end | center | baseline | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*属性介绍：同align-items一样*/</span></span>
<span class="line"><span style="color:#A6ACCD;">auto:表示继承align-items的属性值。（默认值）</span></span></code></pre></div><p><img src="`+d+'" alt="align-self"></p></li></ul>',39),D=[C];function f(F,h,x,A,g,u){return a(),n("div",null,D)}const w=s(y,[["render",f]]);export{b as __pageData,w as default};