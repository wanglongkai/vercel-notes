import{_ as s,o as a,c as n,V as l}from"./chunks/framework.74edd467.js";const A=JSON.parse('{"title":"css技巧","description":"","frontmatter":{},"headers":[],"relativePath":"domcss/css-view.md","filePath":"domcss/css-view.md"}'),p={name:"domcss/css-view.md"},o=l(`<h1 id="css技巧" tabindex="-1">css技巧 <a class="header-anchor" href="#css技巧" aria-label="Permalink to &quot;css技巧&quot;">​</a></h1><h2 id="移动端1px解决方案" tabindex="-1">移动端1px解决方案 <a class="header-anchor" href="#移动端1px解决方案" aria-label="Permalink to &quot;移动端1px解决方案&quot;">​</a></h2><p><strong>产生原因</strong>：设备像素比</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">devicePixelRatio </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 物理像素</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">css像素</span></span></code></pre></div><p><strong>解决方案：</strong></p><ol><li><p>ios设备：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">0</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">5px solid red</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//IOS可用，安卓不可用</span></span></code></pre></div></li><li><p>通用型：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//使用伪类+scale(.5)</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">1</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">%;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">scaleX</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">background</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>box-shadow实现：</p></li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px 1px </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px #e5e5e5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//上边线</span></span>
<span class="line"><span style="color:#A6ACCD;">            1px  </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">  1px </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px #e5e5e5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//右边线</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">  1px  1px </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px #e5e5e5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//下边线</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">  1px </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">1px #e5e5e5</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//左边线</span></span></code></pre></div><h2 id="position-sticky" tabindex="-1">position:sticky <a class="header-anchor" href="#position-sticky" aria-label="Permalink to &quot;position:sticky&quot;">​</a></h2><p>css3新增的定位属性。目前兼容性不够好。火狐和chrome50以上才支持，IE不支持。 设置该属性值后，元素仍然处于文档流中，只是当元素要被移出视口时，会变成和fixed类似的形态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">background</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 4000</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sticky</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="实现-5-add-3-minus-2-功能" tabindex="-1">实现 (5).add(3).minus(2) 功能 <a class="header-anchor" href="#实现-5-add-3-minus-2-功能" aria-label="Permalink to &quot;实现 (5).add(3).minus(2) 功能&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">valueof</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">minus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">valueof</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,12),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
