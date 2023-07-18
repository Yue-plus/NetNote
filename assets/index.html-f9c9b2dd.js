import{_ as o,r,o as t,c as l,a as s,b as n,d as a,e as i}from"./app-ab31641a.js";const p={},c=s("h1",{id:"chrony-时间同步",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chrony-时间同步","aria-hidden":"true"},"#"),n(" Chrony（时间同步）")],-1),d={class:"custom-container tip"},u=s("p",{class:"custom-container-title"},"TIP",-1),v=s("p",null,"chrony 是网络时间协议（NTP）的通用实现。",-1),m={href:"https://chrony.tuxfamily.org/comparison.html",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"chrony 包含两个程序：",-1),h=s("ul",null,[s("li",null,"chronyd 是一个可以在启动时启动的守护程序。"),s("li",null,"chronyc 是一个命令行界面程序，用于监视 chronyd 的性能并在运行时更改各种操作参数。")],-1),b=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> chrony
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在 CentOS 中配置文件在 <code>/etc/chrony.conf</code>：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># Use public servers from the pool.ntp.org project.
# Please consider joining the pool (http://www.pool.ntp.org/join.html).
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst

# Record the rate at which the system clock gains/losses time.
driftfile /var/lib/chrony/drift

# Allow the system clock to be stepped in the first three updates
# if its offset is larger than 1 second.
makestep 1.0 3

# Enable kernel synchronization of the real-time clock (RTC).
rtcsync

# Enable hardware timestamping on all interfaces that support it.
#hwtimestamp *

# Increase the minimum number of selectable sources required to adjust
# the system clock.
#minsources 2

# Allow NTP client access from local network.
#allow 192.168.0.0/16

# Serve time even if not synchronized to a time source.
#local stratum 10

# Specify file containing keys for NTP authentication.
#keyfile /etc/chrony.keys

# Specify directory for log files.
logdir /var/log/chrony

# Select which information is logged.
#log measurements statistics tracking
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="设置-chrony-服务器" tabindex="-1"><a class="header-anchor" href="#设置-chrony-服务器" aria-hidden="true">#</a> 设置 Chrony 服务器</h3><p>修改 <code>/etc/chrony.conf</code> 文件：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> server 0.centos.pool.ntp.org iburst
</span><span class="token prefix deleted">-</span><span class="token line"> server 1.centos.pool.ntp.org iburst
</span><span class="token prefix deleted">-</span><span class="token line"> server 2.centos.pool.ntp.org iburst
</span><span class="token prefix deleted">-</span><span class="token line"> server 3.centos.pool.ntp.org iburst
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> server &lt;本机 IP / 域名&gt; iburst
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看时间同源状态" tabindex="-1"><a class="header-anchor" href="#查看时间同源状态" aria-hidden="true">#</a> 查看时间同源状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-10-20-70-107 ~<span class="token punctuation">]</span><span class="token comment"># chronyc sourcestats -v</span>
<span class="token number">210</span> Number of sources <span class="token operator">=</span> <span class="token number">1</span>
                             .- Number of sample points <span class="token keyword">in</span> measurement set.
                            /    .- Number of residual runs with same sign.
                           <span class="token operator">|</span>    /    .- Length of measurement <span class="token builtin class-name">set</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span>.
                           <span class="token operator">|</span>   <span class="token operator">|</span>    /      .- Est. clock freq error <span class="token punctuation">(</span>ppm<span class="token punctuation">)</span>.
                           <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>      /           .- Est. error <span class="token keyword">in</span> freq.
                           <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>     <span class="token operator">|</span>           /         .- Est. offset.
                           <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>     <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>   On the -.
                           <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>     <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>   samples. <span class="token punctuation">\\</span>
                           <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>     <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>             <span class="token operator">|</span>
Name/IP Address            NP  NR  Span  Frequency  Freq Skew  Offset  Std Dev
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
host-10-20-70-107.openst<span class="token operator">&gt;</span>   <span class="token number">0</span>   <span class="token number">0</span>     <span class="token number">0</span>     +0.000   <span class="token number">2000.000</span>     +0ns  4000ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,12),f={href:"https://www.cnblogs.com/jhxxb/p/11526098.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://linux.vbird.org/linux_server/0440ntp.php",target:"_blank",rel:"noopener noreferrer"};function _(y,x){const e=r("ExternalLinkIcon");return t(),l("div",null,[c,s("div",d,[u,v,s("blockquote",null,[s("p",null,[s("a",m,[n("与其他 NTP 实现比较"),a(e)])])]),k,h]),b,s("ul",null,[s("li",null,[s("a",f,[n("Linux 时间同步 Chrony - 江湖小小白 - 博客园"),a(e)])]),s("li",null,[s("a",g,[n("第十五章、時間伺服器： NTP 伺服器 - 鳥哥的 Linux 私房菜"),a(e)])])])])}const N=o(p,[["render",_],["__file","index.html.vue"]]);export{N as default};
