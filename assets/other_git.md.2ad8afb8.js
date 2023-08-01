import{_ as a,o as t,c as s,V as o}from"./chunks/framework.edddbb10.js";const u=JSON.parse('{"title":"Git常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"other/git.md","filePath":"other/git.md"}'),i={name:"other/git.md"},e=o(`<h1 id="git常用命令" tabindex="-1">Git常用命令 <a class="header-anchor" href="#git常用命令" aria-label="Permalink to &quot;Git常用命令&quot;">​</a></h1><h2 id="本地仓库关联到远程仓库" tabindex="-1">本地仓库关联到远程仓库 <a class="header-anchor" href="#本地仓库关联到远程仓库" aria-label="Permalink to &quot;本地仓库关联到远程仓库&quot;">​</a></h2><ol><li>将本地项目初始化为git仓库 <ol><li><code>git init</code></li></ol></li><li>远程新建repository</li><li>正式进行关联和推送 <ol><li>关联远程库： <code>git remote add origin git@server-name:path/repo-name.git</code></li><li>推送本地仓库内容 ：<code>git push -u origin master</code></li></ol></li></ol><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ol><li>工作目录---&gt;暂存区 ：<code>git add .</code></li><li>暂存区 ---&gt;本地仓库 ： <code>git commit -m &quot;some commit info&quot;</code></li><li>拉取远程: <code>git pull origin 分支名</code></li><li>本地仓库---&gt;远程仓库 ： <code>git push origin 分支名</code></li></ol><p><strong>注意事项：</strong></p><ol><li>push到远程前要先pull远程数据</li><li>若有冲突需先解决冲突</li><li>然后再次提交(add和commit)</li><li>最后push(如果push到master分支，可以简写为<code>git push</code>)</li></ol><h2 id="git-pull命令" tabindex="-1">git pull命令 <a class="header-anchor" href="#git-pull命令" aria-label="Permalink to &quot;git pull命令&quot;">​</a></h2><p><strong>作用</strong>：取回远程仓库某个分支的更新，并与本地某个分支合并。<br><strong>完整语法</strong>：git pull 远程主机名 远程分支名:本地分支名<br><strong>举例</strong>：<code>git pull origin wlk:main</code>      取回远程origin主机的wlk分支与本地的main分支合并。</p><h2 id="暂存区回退到工作区" tabindex="-1">暂存区回退到工作区 <a class="header-anchor" href="#暂存区回退到工作区" aria-label="Permalink to &quot;暂存区回退到工作区&quot;">​</a></h2><ul><li><p><code>git reset HEAD &lt;file&gt;</code> 将file从暂存区回退到工作空间</p></li><li><p><code>git reset</code> 简写，回滚暂存区的所有添加</p></li></ul><h2 id="取消本次修改" tabindex="-1">取消本次修改 <a class="header-anchor" href="#取消本次修改" aria-label="Permalink to &quot;取消本次修改&quot;">​</a></h2><p>指还没有进入暂存区的修改。</p><p><code>git checkout -- &lt;file&gt;</code> 将工作空间的还没有add的修改取消掉</p><h2 id="覆盖上次的commit" tabindex="-1">覆盖上次的commit <a class="header-anchor" href="#覆盖上次的commit" aria-label="Permalink to &quot;覆盖上次的commit&quot;">​</a></h2><p><code>git commit --amend -m &quot;message&quot;</code> 覆盖掉上一次的commit信息</p><h2 id="回退到指定版本" tabindex="-1">回退到指定版本 <a class="header-anchor" href="#回退到指定版本" aria-label="Permalink to &quot;回退到指定版本&quot;">​</a></h2><ul><li><p>回退到上一个版本：<code>git reset --hard HEAD^</code></p></li><li><p>回退到上三个版本：<code>git reset --hard HEAD^^^</code></p></li><li><p>回退到指定版本：<code>git reset --hard commit-id</code><br><strong>注意</strong><br> 1.版本回退时，若工作区和暂存区有未提交的修改，会被撤销掉。这点要<strong>特别注意</strong><br> 2.若回退后，再想恢复，可用 <code>git reflog</code> 查看历史命令，找到相关commit-id，再次reset。</p></li></ul><h2 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-label="Permalink to &quot;分支操作&quot;">​</a></h2><ol><li>创建分支 ： <code>git branch 分支名</code></li><li>切换分支 : <code>git checkout 分支名</code></li><li>创建并切换： <code>git checkout -b 分支名</code></li><li>查看分支：<code>git branch</code></li><li>合并分支：<code>git merge 分支名</code> ---&gt; 合并其他分支到当前分支</li><li>删除分支 ： <code>git branch -d 分支名</code></li><li>删除远程分支 ： <code>git push origin -d 分支名</code></li><li>拉取远程分支(本地不存在的分支) : <code>git checkout -b 本地分支名 origin/远程分支名</code></li><li>push本地存在而远程不存在的分支时，远程会自动创建分支: <code>git push origin 分支名</code></li></ol><h2 id="git-rebase-命令" tabindex="-1">git rebase 命令 <a class="header-anchor" href="#git-rebase-命令" aria-label="Permalink to &quot;git rebase 命令&quot;">​</a></h2><ol><li><p><strong>git pull --rebase origin 分支名</strong></p><blockquote><p>拉取远程代码并整理提交记录，保持提交记录为一条线</p></blockquote></li><li><p><strong>git rebase -i starCommitID endCommitID</strong></p><blockquote><p>整理提交记录，前开后闭。<br> endCommitID可以不写，默认为最新提交记录，但是一旦使用了，就会丢弃endCommitID之后的提交</p></blockquote></li><li><p><strong>git rebase 其他分支 当前分支</strong></p><blockquote><p>变基操作<br> 前提：<code>当前分支</code>是从<code>其他分支</code>拉取的子分支<br><code>当前分支</code>的提交拼接到<code>其他分支</code>的最新提交之后</p></blockquote></li></ol><h2 id="git-cherry-pick-命令" tabindex="-1">git cherry-pick 命令 <a class="header-anchor" href="#git-cherry-pick-命令" aria-label="Permalink to &quot;git cherry-pick 命令&quot;">​</a></h2><ol><li><p><strong>git cherry-pick commitID</strong></p><blockquote><p>将其他分支的commitID应用到当前分支</p></blockquote></li></ol><h2 id="commitid拉取分支" tabindex="-1">commitID拉取分支 <a class="header-anchor" href="#commitid拉取分支" aria-label="Permalink to &quot;commitID拉取分支&quot;">​</a></h2><ol><li>从指定提交拉取分支：<strong>git branch 分支名 commitID</strong></li><li>从指定提交拉取分支并切换： <strong>git checkout -b 分支名 commitID</strong></li></ol><h2 id="git-stash-命令" tabindex="-1">git stash 命令 <a class="header-anchor" href="#git-stash-命令" aria-label="Permalink to &quot;git stash 命令&quot;">​</a></h2><ol><li><strong>git stash save &quot;save message&quot;</strong>: 执行存储时，添加备注说明。</li><li><strong>git stash list</strong>：查看stash列表。</li><li><strong>git stash show</strong>：显示具体做了哪些改动，默认显示第一个stash存储，如果要显示其他存储，后面加stash@{$num}，比如第二个<strong>git stash show stash@{1}</strong>。</li><li><strong>git stash apply</strong>：应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，添加git stash apply stash@{$num}，比如第二个<strong>git stash apply stash@{1}</strong>。</li><li><strong>git stash pop</strong>：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下，默认为第一个stash,即stash@{0}，如果要应用并删除其他stash存储，命令：<strong>git stash pop stash@{$num}</strong>。</li><li><strong>git stash drop stash@{$num}</strong>：删除stash@{$num}存储。</li><li><strong>git stash clear</strong>：删除所有缓存的stash存储。 新增的文件，直接执行stash是不会被存储的。需要先用git add命令将其添加到git暂存区，才可以被git stash保存。</li></ol><h2 id="合并冲突" tabindex="-1">合并冲突 <a class="header-anchor" href="#合并冲突" aria-label="Permalink to &quot;合并冲突&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt;&lt;head    </span></span>
<span class="line"><span style="color:#A6ACCD;">当前分支最新提交   </span></span>
<span class="line"><span style="color:#A6ACCD;">============   </span></span>
<span class="line"><span style="color:#A6ACCD;">其他分支提交或当前分支其他人的提交   </span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt;&gt;&gt;其他commit-id</span></span></code></pre></div><ol><li><p>当两个人同时更改了同一个文件的<strong>文件名</strong>时，会冲突；手动合并文件，再提交。</p></li><li><p>远程删除了某文件，本地修改了该文件，导致本地修改的文件与不存在的文件冲突；解决办法是：1-删除该文件再提交；2-直接提交（需要再次add和commit）</p></li></ol><h2 id="标签操作" tabindex="-1">标签操作 <a class="header-anchor" href="#标签操作" aria-label="Permalink to &quot;标签操作&quot;">​</a></h2><ol><li>切换到目标分支上</li><li>执行<code>git tag 标签名</code><br><strong>在指定commit-id上打标签</strong> : <code>git tag 标签名 commit-id</code><br><strong>打指定并标签信息</strong> ： <code>git tag -a 标签名 -m &quot;message&quot; commit-id</code></li></ol><p>命令 <code>git push origin 标签名</code> 可以推送一个本地标签；<br> 命令 <code>git push origin --tags</code> 可以推送全部未推送过的本地标签；<br> 命令 <code>git tag -d 标签名</code> 可以删除一个本地标签；<br> 命令 <code>git push origin :refs/tags/标签名</code> 可以删除一个远程标签。</p><h2 id="强制获取远程最新版本" tabindex="-1">强制获取远程最新版本 <a class="header-anchor" href="#强制获取远程最新版本" aria-label="Permalink to &quot;强制获取远程最新版本&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(删除本地src)---&gt;这一步可有可无，但是为保安全建议拷贝一下，以防万一</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch --all</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard origin/分支名</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span></code></pre></div><h2 id="强制推送本地代码" tabindex="-1">强制推送本地代码 <a class="header-anchor" href="#强制推送本地代码" aria-label="Permalink to &quot;强制推送本地代码&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">方法一：</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f origin 分支名</span></span>
<span class="line"><span style="color:#A6ACCD;">方法二：</span></span>
<span class="line"><span style="color:#A6ACCD;">    拷贝本地src</span></span>
<span class="line"><span style="color:#A6ACCD;">    pull代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    删除src</span></span>
<span class="line"><span style="color:#A6ACCD;">    拷入src</span></span>
<span class="line"><span style="color:#A6ACCD;">    push代码</span></span></code></pre></div><h2 id="git默认对文件名大小写不敏感" tabindex="-1">git默认对文件名大小写不敏感 <a class="header-anchor" href="#git默认对文件名大小写不敏感" aria-label="Permalink to &quot;git默认对文件名大小写不敏感&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --get core.ignorecase</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看是否文件名大小写敏感，true为不敏感，false为敏感</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config core.ignorecase false</span></span>
<span class="line"><span style="color:#A6ACCD;">#将git设置为文件名大小写敏感</span></span></code></pre></div>`,40),l=[e];function n(r,c,p,g,d,h){return t(),s("div",null,l)}const b=a(i,[["render",n]]);export{u as __pageData,b as default};
