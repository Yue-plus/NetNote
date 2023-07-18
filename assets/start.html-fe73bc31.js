import{_ as o,r,o as d,c,a as n,b as s,d as e,w as t,f as p,e as l}from"./app-ab31641a.js";const u="/assets/system_info-4b719047.jpg",v="/assets/01-9104cc32.png",h="/assets/02-930974b4.png",m="/assets/gitee_add_ssh-key-a40531fd.jpg",b="/assets/PS_error-09638296.png",g="/assets/no_telnet-51b569b0.jpg",k="/assets/add_win10_telnet-1431692a.jpg",_="/assets/add_WS_telnet-92c4f2fa.jpg",f={},x=l('<h1 id="开始项目" tabindex="-1"><a class="header-anchor" href="#开始项目" aria-hidden="true">#</a> 开始项目</h1><h2 id="在开始之前" tabindex="-1"><a class="header-anchor" href="#在开始之前" aria-hidden="true">#</a> 在开始之前</h2><p>确保自己的系统为 <strong>Windows 10 专业版</strong></p><p><img src="'+u+'" alt="系统版本"></p>',4),y=n("strong",null,"家庭中文版",-1),S=n("h2",{id:"本地安装-git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地安装-git","aria-hidden":"true"},"#"),s(" 本地安装 Git")],-1),w=n("iframe",{src:"//player.bilibili.com/player.html?aid=98007542&bvid=BV1FE411P7B3&cid=167296411&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),E={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.runoob.com/git/git-tutorial.html",target:"_blank",rel:"noopener noreferrer"},D=l(`<h3 id="配置-git" tabindex="-1"><a class="header-anchor" href="#配置-git" aria-hidden="true">#</a> 配置 Git</h3><p>桌面右键点击 [Git Bash Here]，输入以下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># &quot;username&quot; 为 GitHub 账号，用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;username&quot;</span>

<span class="token comment"># xxxxxxxxxx@mail.com 为 GitHub 账号，注册时的用的邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email xxxxxxxxxx@mail.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成自己的-ssh-key" tabindex="-1"><a class="header-anchor" href="#生成自己的-ssh-key" aria-hidden="true">#</a> 生成自己的 SSH Key</h3><p>Git Bash 终端中，输入 <code>ssh-keygen</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/c/Users/Yue_p/.ssh/id_rsa<span class="token punctuation">)</span>: <span class="token comment"># 直接回车</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:    <span class="token comment"># 直接回车</span>
Enter same passphrase again:                   <span class="token comment"># 直接回车</span>
Your identification has been saved <span class="token keyword">in</span> <span class="token function">yes</span>
Your public key has been saved <span class="token keyword">in</span> yes.pub
The key fingerprint is:
SHA256:xuvPaGeJuufX6k4oiufALDHD7PCfZxkfXQxjCBElkCA Yue_p@DESKTOP-SQLFD1T
The key&#39;s randomart image is:
+---<span class="token punctuation">[</span>RSA <span class="token number">3072</span><span class="token punctuation">]</span>----+
<span class="token operator">|</span>E <span class="token punctuation">..</span>.o<span class="token operator">==</span><span class="token punctuation">..</span>       <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token builtin class-name">.</span>  <span class="token builtin class-name">.</span>  <span class="token punctuation">..</span> +      <span class="token operator">|</span>
<span class="token operator">|</span>         <span class="token builtin class-name">.</span> +     <span class="token operator">|</span>
<span class="token operator">|</span>o      <span class="token builtin class-name">.</span>    o    <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">=</span>o      S. <span class="token builtin class-name">.</span>     <span class="token operator">|</span>
<span class="token operator">|</span>oB    <span class="token punctuation">..</span>.o.      <span class="token operator">|</span>
<span class="token operator">|</span><span class="token punctuation">..</span><span class="token operator">=</span>   .+oo.o     <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token builtin class-name">.</span> +.o+o<span class="token operator">=</span><span class="token operator">+=</span> <span class="token builtin class-name">.</span>    <span class="token operator">|</span>
<span class="token operator">|</span>  .o<span class="token operator">=</span>oo*+B*.     <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>&lt;个人文件夹&gt;/.ssh/</code> 中应该有 <code>id_rsa</code>（私钥）与 <code>id_rsa.pub</code>（公钥）两个文件。</p><h2 id="注册-github-gitee-账号" tabindex="-1"><a class="header-anchor" href="#注册-github-gitee-账号" aria-hidden="true">#</a> 注册 GitHub/Gitee 账号</h2>`,8),C=n("span",{style:{color:"black","background-color":"black"}},[n("s",null,"全球最大的同性交友网站")],-1),B={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},G=n("span",{style:{color:"black","background-color":"black"}},[n("s",null,"全国最大的同性交友网站")],-1),H={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"前往本项目：",-1),j={href:"https://github.com/Yue-plus/NetNote",target:"_blank",rel:"noopener noreferrer"},R={href:"https://gitee.com/yue_plus/NetNote",target:"_blank",rel:"noopener noreferrer"},V=n("h2",{id:"添加-ssh-key",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加-ssh-key","aria-hidden":"true"},"#"),s(" 添加 SSH Key")],-1),L=n("p",null,[s("用 "),n("strong",null,"记事本打开"),s(),n("code",null,"<个人文件夹>/.ssh/id_rsa.pub"),s(" 文件。")],-1),I=n("h3",{id:"github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),s(" GitHub")],-1),W={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},Y=n("p",null,[n("img",{src:v,alt:"添加 SSH Key 01"})],-1),F=n("p",null,[n("img",{src:h,alt:"添加 SSH Key 02"})],-1),M=n("p",null,[s("最后点击 "),n("strong",null,"[Add SSH Key]")],-1),T=n("h3",{id:"gitee",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitee","aria-hidden":"true"},"#"),s(" Gitee")],-1),U={href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,[n("img",{src:m,alt:"添加 SSH Key"})],-1),q=n("h2",{id:"本地安装-nodejs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地安装-nodejs","aria-hidden":"true"},"#"),s(" 本地安装 NodeJS")],-1),z={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},J=l(`<h3 id="安装-cnpm" tabindex="-1"><a class="header-anchor" href="#安装-cnpm" aria-hidden="true">#</a> 安装 <code>cnpm</code></h3><p>由于国内众所周知的网络原因，推荐安装 <code>cnpm</code>，在安装依赖时代替 <code>npm</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装后可使用 <code>cnpm -v</code> 验证：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ cnpm <span class="token parameter variable">-v</span>
cnpm@7.0.0 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>parse_argv.js<span class="token punctuation">)</span>
npm@6.14.15 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>npm.js<span class="token punctuation">)</span>
node@16.8.0 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node.exe<span class="token punctuation">)</span>
npminstall@5.0.2 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>npminstall<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>index.js<span class="token punctuation">)</span>
<span class="token assign-left variable">prefix</span><span class="token operator">=</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm
win32 x64 <span class="token number">10.0</span>.19043
<span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.nlark.com
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地安装-yarn" tabindex="-1"><a class="header-anchor" href="#本地安装-yarn" aria-hidden="true">#</a> 本地安装 Yarn</h2>`,6),O={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},Q=l(`<p>在 <a href="#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-nodejs">本地安装 NodeJS</a> 后，在终端输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可使用 <code>yarn -v</code> 验证安装，如果输出版本号则安装成功。</p><h3 id="安装-tyarn" tabindex="-1"><a class="header-anchor" href="#安装-tyarn" aria-hidden="true">#</a> 安装 <code>tyarn</code></h3><p>由于国内众所周知的网络原因，推荐安装 <code>tyarn</code>，在安装依赖时代替 <code>yarn</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">yarn</span> tyarn <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="拉取项目" tabindex="-1"><a class="header-anchor" href="#拉取项目" aria-hidden="true">#</a> 拉取项目</h2><p>找一个合适的路径，执行以下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># GitHub 克隆仓库（注意替换为自己的用户名：&lt;username&gt;）</span>
<span class="token function">git</span> clone git@github.com:<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/NetNote.git

<span class="token comment"># Gitee 克隆仓库（注意替换为自己的用户名：&lt;username&gt;）</span>
<span class="token function">git</span> clone git@gitee.com:<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/NetNote.git

<span class="token builtin class-name">cd</span> NetNote

<span class="token comment"># 安装依赖</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h2><p>在项目路径下执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),X={href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://vuepress2.netlify.app/zh/guide/",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"参与项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参与项目","aria-hidden":"true"},"#"),s(" 参与项目")],-1),nn={href:"https://vuepress2.netlify.app/zh/",target:"_blank",rel:"noopener noreferrer"},sn=n("a",{href:"#%E9%99%84-%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"},"项目目录结构",-1),en=n("code",null,".md",-1),an={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"/docs/.vuepress/config.ts",-1),ln={href:"https://mazhuang.org/wiki/chinese-copywriting-guidelines/",target:"_blank",rel:"noopener noreferrer"},rn=n("p",null,"当前计划任务：",-1),on=l(`<h2 id="部署项目" tabindex="-1"><a class="header-anchor" href="#部署项目" aria-hidden="true">#</a> 部署项目</h2><p>复制 <code>deploy.sh.examples</code> 文件，并重命名为 <code>deploy.sh</code> 并适当修改 <code>&lt;USERNAME&gt;/&lt;REPO&gt;</code>。</p><h2 id="附-项目目录结构" tabindex="-1"><a class="header-anchor" href="#附-项目目录结构" aria-hidden="true">#</a> 附：项目目录结构</h2><p>当前所有文档都保存在 <code>NetNote\\docs\\</code> 文件夹内。</p><p>新建目录需修改 <code>NetNote\\docs\\.vuepress\\config.ts</code> 文件。</p><p>公共图片统一放在 <code>NetNote\\docs\\.vuepress\\public\\img</code> 文件夹内。</p><p>每个文档都可以放在独立的文件夹下，维护自己的 <code>img</code> 文件夹。</p><details class="custom-container details"><summary>目录结构</summary><div class="language-text文件夹 line-numbers-mode" data-ext="text文件夹"><pre class="language-text文件夹"><code>卷序列号为 6010-F505
D:.
├─.vuepress/
├─coding
│  ├─Docker/
│  ├─Java
│  │  ├─Gradle/
│  ├─MariaDB/
│  ├─PostgreSQL/
│  ├─Python/
│  ├─RabbitMQ/
│  ├─Redis/
│  ├─Spring
│  │  └─Framework
│  │      └─WebServlet/
│  └─Web/
├─game/
├─hack
│  └─base/
├─net
│  ├─00-Abbreviation/
│  ├─01-base/
│  ├─acap/
│  ├─manual
│  │  ├─command/
│  │  └─operate/
│  ├─router/
│  ├─security/
│  ├─switch/
│  └─wan/
├─serve
│  ├─base
│  │  ├─sys_config/
│  │  └─sys_install/
│  ├─CentOS
│  │  ├─Apache/
│  │  ├─Base/
│  │  ├─CA/
│  │  ├─Chrony/
│  │  ├─E-Mail/
│  │  ├─firewalld/
│  │  ├─MariaDB/
│  │  ├─NFS/
│  │  ├─NIS/
│  │  ├─Pacemaker/
│  │  ├─Samba/
│  │  ├─Tomcat/
│  │  └─Unbound/
│  ├─VM
│  │  ├─DCC-CRL1000/
│  │  ├─Hyper-V/
│  │  ├─VirtualBox/
│  │  └─VMware/
│  └─WS
│      ├─AD-CS/
│      ├─AD-DS/
│      ├─AD-RMS/
│      ├─CommonRequirements/
│      ├─DFS/
│      ├─DNS/
│      ├─FailoverCluster/
│      ├─FS/
│      ├─IIS/
│      ├─iSCSI/
│      ├─MPIO/
│      ├─NLB/
│      ├─PS/
│      └─WDS/
└─start
    ├─img
    ├─use_GitHub/
    ├─use_IDEA/
    └─use_VScode/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="附-终端设置代理" tabindex="-1"><a class="header-anchor" href="#附-终端设置代理" aria-hidden="true">#</a> 附：终端设置代理</h2><h3 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash" aria-hidden="true">#</a> Git Bash</h3><h4 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># http</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://127.0.0.1:1080
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy https://127.0.0.1:1080

<span class="token comment"># socks5</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取消代理" tabindex="-1"><a class="header-anchor" href="#取消代理" aria-hidden="true">#</a> 取消代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell" aria-hidden="true">#</a> PowerShell</h3><h4 id="设置代理-1" tabindex="-1"><a class="header-anchor" href="#设置代理-1" aria-hidden="true">#</a> 设置代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>netsh winhttp <span class="token builtin class-name">set</span> proxy <span class="token number">127.0</span>.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="取消代理-1" tabindex="-1"><a class="header-anchor" href="#取消代理-1" aria-hidden="true">#</a> 取消代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>netsh winhttp reset proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看代理" tabindex="-1"><a class="header-anchor" href="#查看代理" aria-hidden="true">#</a> 查看代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>netsh winhttp show proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="附-windows-powershell-无法加载文件-因为在此系统上禁止运行脚本。" tabindex="-1"><a class="header-anchor" href="#附-windows-powershell-无法加载文件-因为在此系统上禁止运行脚本。" aria-hidden="true">#</a> 附：Windows PowerShell 无法加载文件，因为在此系统上禁止运行脚本。</h2><div class="language-ps line-numbers-mode" data-ext="ps"><pre class="language-ps"><code>cnpm : 无法加载文件 C:\\Users\\Yue_plus\\AppData\\Roaming\\npm\\cnpm.ps1，因为在此系统上禁止运脚本。
有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ cnpm install
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="PowerShell 报错"></p><p>参阅 <a href="https:/go.microsoft.com/fwlink/?LinkID=135170">https:/go.microsoft.com/fwlink/?LinkID=135170</a></p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h3><p>先以 <strong>管理员身份</strong> 在 PowerShell 中运行一下指令：</p><div class="language-ps line-numbers-mode" data-ext="ps"><pre class="language-ps"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就不会报错了。</p><h2 id="附-没有-telnet-指令" tabindex="-1"><a class="header-anchor" href="#附-没有-telnet-指令" aria-hidden="true">#</a> 附：没有 <code>telnet</code> 指令</h2><p><img src="`+g+'" alt="没有  指令"></p><h3 id="windows-10" tabindex="-1"><a class="header-anchor" href="#windows-10" aria-hidden="true">#</a> Windows 10</h3><p>在 <strong>控制面版</strong> -&gt; <strong>程序</strong> -&gt; <strong>程序和功能</strong> -&gt; <strong>启用或关闭 Windows 功能</strong> 中，勾选 <strong>Telnet 客户端</strong>：</p><p><img src="'+k+'" alt="启用或关闭 Windows 功能"></p><h3 id="windows-server" tabindex="-1"><a class="header-anchor" href="#windows-server" aria-hidden="true">#</a> Windows Server</h3><p>在 <strong>服务器管理器</strong> -&gt; <strong>添加角色和功能</strong> 中，添加 <strong>Telnet Client</strong> 功能：</p><p><img src="'+_+`" alt="添加服务器功能"></p><h3 id="telnet-指令帮助" tabindex="-1"><a class="header-anchor" href="#telnet-指令帮助" aria-hidden="true">#</a> <code>telnet</code> 指令帮助</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>telnet [-a][-e escape char][-f log file][-l user][-t term][host [port]]
 -a      企图自动登录。除了用当前已登陆的用户名以外，与 -l 选项相同。
 -e      跳过字符来进入 telnet 客户端提示。
 -f      客户端登录的文件名
 -l      指定远程系统上登录用的用户名。
         要求远程系统支持 TELNET ENVIRON 选项。
 -t      指定终端类型。
         支持的终端类型仅是: vt100, vt52, ansi 和 vtnt。
 host    指定要连接的远程计算机的主机名或 IP 地址。
 port    指定端口号或服务名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附-打不开微软商店-无法系统登入微软账号" tabindex="-1"><a class="header-anchor" href="#附-打不开微软商店-无法系统登入微软账号" aria-hidden="true">#</a> 附：打不开微软商店 / 无法系统登入微软账号</h2><p>打不开微软商店可以试试将 DNS 设为 <code>4.2.2.1</code> 和 <code>4.2.2.2</code></p>`,41);function dn(cn,pn){const i=r("RouterLink"),a=r("ExternalLinkIcon");return d(),c("div",null,[x,n("p",null,[s("如果是 "),y,s(" 请参考 "),e(i,{to:"/serve/base/sys_install/"},{default:t(()=>[s("系统安装")]),_:1}),s(" 重装系统。")]),n("p",null,[s("然后可以参考 "),e(i,{to:"/serve/base/sys_config/"},{default:t(()=>[s("配置舒适的桌面环境")]),_:1}),s(" 。")]),S,w,n("p",null,[s("前往 "),n("a",E,[s("Git 官网"),e(a)]),s(" 下载安装包，下一步到底。")]),n("blockquote",null,[n("p",null,[n("a",N,[s("Git - Book（官方教程）"),e(a)]),n("a",A,[s("Git - 菜鸟教程"),e(a)])])]),D,n("p",null,[s("前往"),C,s("面向开源及私有软件项目的托管平台 "),n("a",B,[s("GitHub"),e(a)]),s(" 注册并登入账号。")]),n("p",null,[s("前往"),G,s("云端软件开发协作平台 "),n("a",H,[s("Gitee"),e(a)]),s(" 注册并登入账号。")]),P,n("ul",null,[n("li",null,[s("GitHub 地址 "),n("a",j,[s("https://github.com/Yue-plus/NetNote"),e(a)]),s("，点击 Watch、Star、Fork。")]),n("li",null,[s("Gitee 地址 "),n("a",R,[s("https://gitee.com/yue_plus/NetNote"),e(a)]),s("，点击 Watch、Star、Fork。")])]),V,L,I,n("p",null,[s("打开 "),n("a",W,[s("GitHub.com"),e(a)]),s(" 参照以下截图添加 SSH Key：")]),Y,F,M,T,n("p",null,[s("打开 "),n("a",U,[s("设置 -> SSH 公钥"),e(a)])]),K,q,n("p",null,[s("前往 "),n("a",z,[s("NodeJS 官网"),e(a)]),s(" 下载安装包，下一步到底。")]),J,n("p",null,[s("可参考 "),n("a",O,[s("Yarn 官网"),e(a)]),s("。")]),Q,n("p",null,[s("通过浏览器访问："),n("a",X,[s("http://127.0.0.1:8080/"),e(a)])]),n("blockquote",null,[n("p",null,[s("更多配置可参考 "),n("strong",null,[n("a",$,[s("VuePress2 介绍"),e(a)])])])]),Z,n("p",null,[s("本项目使用了 "),n("a",nn,[s("VuePress2"),e(a)]),s(" 静态网站生成器，参考 "),sn,s(" 使用 "),e(i,{to:"/start/markdown.html"},{default:t(()=>[s("Markdown 语法")]),_:1}),s(" 来编写/修改 "),en,s(" 文件。")]),n("p",null,[s("新建页面请参考 "),n("a",an,[s("默认主题配置"),e(a)]),s(" 修改项目内的 "),tn,s(" 文件。")]),n("p",null,[s("参考 "),n("a",ln,[s("中文文案排版指北（简体中文版）"),e(a)])]),rn,n("ul",null,[n("li",null,[s("网络搭建 "),n("ul",null,[n("li",null,[e(i,{to:"/net/manual/operate/"},{default:t(()=>[s("操作手册")]),_:1})]),n("li",null,[e(i,{to:"/net/manual/command/"},{default:t(()=>[s("命令手册")]),_:1})])])]),n("li",null,[s("系统服务 "),n("ul",null,[n("li",null,[s("云平台与虚拟机 "),n("ul",null,[n("li",null,[e(i,{to:"/serve/VM/Hyper-V/"},{default:t(()=>[s("Hyper-V")]),_:1})])])]),n("li",null,[e(i,{to:"/serve/WS/"},{default:t(()=>[s("Windows Server")]),_:1})]),n("li",null,[e(i,{to:"/serve/Linux/"},{default:t(()=>[s("Linux")]),_:1})])])])]),p(`

## 获取资源

### 共享文件夹

在培训室内网环境，计算机右键，**添加网络位置**：

- \`\\\\ws22\\Yue_plus 的共享\`
- \`\\\\ws22\\公共文件夹\`

![添加网络位置向导](./img/03.png)

用户名：\`Administrator\`

密码：<span style="color: black; background-color: black;">Abcd1234</span>

### GitLab

访问：<https://gitlab.ws22/>

![](./img/gitlab-login.jpg)
![](./img/gitlab-signup.jpg)

通知 @Yue_plus 批准申请后即可登入。

点击右上角头像，修改 **偏好设置**，设置本地化语言，选择完毕后刷新浏览器生效：

![](./img/gitlab-config.jpg)

`),on])}const vn=o(f,[["render",dn],["__file","start.html.vue"]]);export{vn as default};
