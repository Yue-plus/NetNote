import{_ as r,r as i,o,c,a as e,b as s,d as a,e as t}from"./app-ab31641a.js";const d="/assets/22.04-2022-04-29-11-37-22-24511d6b.png",u="/assets/22.04-2022-04-29-11-37-37-026f6197.png",l="/assets/22.04-2022-04-29-11-39-06-53c1d65f.png",m="/assets/22.04-2022-04-29-11-42-19-07973c70.png",p="/assets/22.04-2022-04-29-11-53-16-f4a403bd.png",h="/assets/22.04-2022-04-29-11-54-10-12e0772f.png",b="/assets/22.04-2022-04-29-11-54-14-32f4cad0.png",v="/assets/22.04-2022-04-29-11-54-34-a2cccb8a.png",_="/assets/22.04-2022-04-29-12-01-53-d02fe00b.png",g="/assets/22.04-2022-04-29-12-02-00-39d6342b.png",f="/assets/22.04-2022-04-29-12-02-54-8a63229c.png",k="/assets/22.04-2022-04-29-12-03-24-20d0b60e.png",y="/assets/22.04-2022-04-29-12-06-53-f1d1a50f.png",x="/assets/22.04-2022-04-29-12-07-54-75f94014.png",j="/assets/22.04-2022-04-29-12-08-18-465c0d90.png",z="/assets/22.04-2022-04-29-12-08-41-aa90e265.png",U="/assets/22.04-2022-04-29-12-08-49-5d0494b3.png",w="/assets/22.04-2022-04-29-12-09-53-56c5e615.png",L="/assets/QQ截图20220505181915-04136c0c.png",A={},N=e("h1",{id:"ubuntu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu","aria-hidden":"true"},"#"),s(" Ubuntu")],-1),T={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP",-1),E=e("p",null,"Ubuntu 是适用于企业服务器、桌面电脑、云、IoT 物联网的现代化开源Linux操作系统。",-1),I={href:"https://ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://cn.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},B=t('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>从系统安装光盘或U盘启动系统： <img src="'+d+'" alt=""><img src="'+u+'" alt=""></li><li>启动成功后，在左边选择简体中文语言（最下面），然后点击试用： <img src="'+l+'" alt=""></li><li>这时可以调整一下屏幕分辨率方便后续操作： <img src="'+m+'" alt=""><img src="'+p+'" alt=""></li><li>然后双击桌面的 <strong>安装 Ubuntu</strong> 图标，进入安装流程： <img src="'+h+'" alt=""><img src="'+b+'" alt=""><img src="'+v+'" alt=""><img src="'+_+'" alt=""><img src="'+g+'" alt=""><img src="'+f+'" alt=""><img src="'+k+'" alt=""><img src="'+y+'" alt=""><img src="'+x+'" alt=""></li><li>首次进入系统展示欢迎页，按需选择即可： <img src="'+j+'" alt=""><img src="'+z+'" alt=""><img src="'+U+'" alt=""></li><li>系统安装成功： <img src="'+w+`" alt=""></li></ul><h2 id="配置软件源" tabindex="-1"><a class="header-anchor" href="#配置软件源" aria-hidden="true">#</a> 配置软件源</h2><p>软件源配置通常存放在 <code>/etc/apt/sources.list</code> 文件内。</p><p>先备份源文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/apt/
<span class="token function">sudo</span> <span class="token function">cp</span> sources.list sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后配置需要的软件源</p>`,7),C={id:"阿里巴巴开源镜像站-ubuntu",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#阿里巴巴开源镜像站-ubuntu","aria-hidden":"true"},"#",-1),M={href:"https://developer.aliyun.com/mirror/ubuntu",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>以下配置适用 <strong>Ubuntu 22.04 LTS</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ jammy universe main multiverse restricted
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-updates universe main multiverse restricted
deb http://mirrors.aliyun.com/ubuntu/ jammy universe
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates universe
deb http://mirrors.aliyun.com/ubuntu/ jammy multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-security universe main multiverse restricted
deb http://mirrors.aliyun.com/ubuntu/ jammy-security universe
deb http://mirrors.aliyun.com/ubuntu/ jammy-security multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={id:"腾讯软件源",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#腾讯软件源","aria-hidden":"true"},"#",-1),Z={href:"https://mirrors.cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>以下配置适用 <strong>Ubuntu 22.04 LTS</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb-src https://mirrors.cloud.tencent.com/ubuntu/ jammy main restricted #Added by software-properties
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy main restricted
deb-src https://mirrors.cloud.tencent.com/ubuntu/ jammy universe multiverse #Added by software-properties
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-updates main restricted
deb-src https://mirrors.cloud.tencent.com/ubuntu/ jammy-updates universe main multiverse restricted #Added by software-properties
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy universe
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-updates universe
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy multiverse
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-updates multiverse
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src https://mirrors.cloud.tencent.com/ubuntu/ jammy-backports main restricted universe multiverse #Added by software-properties
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-security main restricted
deb-src https://mirrors.cloud.tencent.com/ubuntu/ jammy-security universe main multiverse restricted #Added by software-properties
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-security universe
deb https://mirrors.cloud.tencent.com/ubuntu/ jammy-security multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),O={id:"清华大学开源软件镜像站",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#清华大学开源软件镜像站","aria-hidden":"true"},"#",-1),$={href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"},H={id:"网易开源镜像站",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#网易开源镜像站","aria-hidden":"true"},"#",-1),K={href:"http://mirrors.163.com/",target:"_blank",rel:"noopener noreferrer"},R=t('<h3 id="桌面版-desktop" tabindex="-1"><a class="header-anchor" href="#桌面版-desktop" aria-hidden="true">#</a> 桌面版 (Desktop)</h3><p>安装了桌面环境可以使用 <strong>软件更新器</strong> 自动选择软件源：</p><p><img src="'+L+`" alt=""></p><h2 id="安装-open-vm-tools-desktop" tabindex="-1"><a class="header-anchor" href="#安装-open-vm-tools-desktop" aria-hidden="true">#</a> 安装 <code>open-vm-tools-desktop</code></h2><p>如果在 VMware 虚拟机中安装，建议使用 <code>open-vm-tools-desktop</code> 替代 VMware Tools：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> open-vm-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装中文语言包" tabindex="-1"><a class="header-anchor" href="#安装中文语言包" aria-hidden="true">#</a> 安装中文语言包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> language-pack-zh-hans manpages-zh <span class="token parameter variable">-y</span>
localectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8 <span class="token assign-left variable"><span class="token environment constant">LANGUAGE</span></span><span class="token operator">=</span>zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh" aria-hidden="true">#</a> 安装 oh my zsh</h2>`,9),W={href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"},X=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">zsh</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-vim" tabindex="-1"><a class="header-anchor" href="#安装-vim" aria-hidden="true">#</a> 安装 vim</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 git</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-screenfetch" tabindex="-1"><a class="header-anchor" href="#安装-screenfetch" aria-hidden="true">#</a> 安装 <code>screenfetch</code></h2><p>可以字符画展示系统信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> screenfetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装搜狗拼音输入法" tabindex="-1"><a class="header-anchor" href="#安装搜狗拼音输入法" aria-hidden="true">#</a> 安装搜狗拼音输入法</h2>`,9),Y={href:"https://pinyin.sogou.com/linux",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://pinyin.sogou.com/linux/guide",target:"_blank",rel:"noopener noreferrer"};function se(ne,ae){const n=i("ExternalLinkIcon");return o(),c("div",null,[N,e("div",T,[V,E,e("p",null,[e("a",I,[s("官网"),a(n)]),e("a",S,[s("中文官网"),a(n)])])]),B,e("h3",C,[G,s(),e("a",M,[s("阿里巴巴开源镜像站 - Ubuntu"),a(n)])]),q,e("h3",F,[Q,s(),e("a",Z,[s("腾讯软件源"),a(n)])]),D,e("h3",O,[P,s(),e("a",$,[s("清华大学开源软件镜像站"),a(n)])]),e("h3",H,[J,s(),e("a",K,[s("网易开源镜像站"),a(n)])]),R,e("p",null,[s("参考："),e("a",W,[s("Oh My Zsh - a delightful & open source framework for Zsh"),a(n)])]),X,e("p",null,[e("a",Y,[s("搜狗拼音输入法 Linux 版"),a(n)]),s(" | "),e("a",ee,[s("Ubuntu 搜狗输入法安装指南"),a(n)])])])}const re=r(A,[["render",se],["__file","index.html.vue"]]);export{re as default};
