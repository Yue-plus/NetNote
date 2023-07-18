import{_ as o,r as t,o as l,c as p,a as n,b as s,d as e,e as r}from"./app-ab31641a.js";const c={},i=n("h1",{id:"unbound-dns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#unbound-dns","aria-hidden":"true"},"#"),s(" Unbound（DNS）")],-1),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"TIP",-1),b=n("p",null,"Unbound 是一个具有验证，递归和缓存等功能的 DNS 解析器。",-1),k={href:"https://nlnetlabs.nl/projects/unbound/about/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://unbound.docs.nlnetlabs.nl/en/latest/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),s(" 链接")],-1),h={href:"https://wiki.archlinux.org/title/Unbound_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.redhat.com/sysadmin/forwarding-dns-2",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.cnblogs.com/djlsunshine/p/9783290.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/Alkaid__3/article/details/104836193",target:"_blank",rel:"noopener noreferrer"},x={href:"https://blog.return0.top/blog/2018/11/%E4%BD%BF%E7%94%A8unbound%E6%90%AD%E5%BB%BAdns%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%BC%93%E5%AD%98%E4%BB%A5%E5%8F%8A%E9%98%B2%E6%AD%A2dns%E6%B1%A1%E6%9F%93/",target:"_blank",rel:"noopener noreferrer"},D=r(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-100 ~<span class="token punctuation">]</span><span class="token comment"># sudo yum install unbound</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Resolving Dependencies
--<span class="token operator">&gt;</span> Running transaction check
---<span class="token operator">&gt;</span> Package unbound.x86_64 <span class="token number">0</span>:1.4.20-34.el7 will be installed
--<span class="token operator">&gt;</span> Processing Dependency: unbound-libs<span class="token punctuation">(</span>x86-64<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1.4</span>.20-34.el7 <span class="token keyword">for</span> package: unbound-1.4.20-34.el7.x86_64
--<span class="token operator">&gt;</span> Processing Dependency: ldns <span class="token operator">&gt;=</span> <span class="token number">1.6</span>.16-10 <span class="token keyword">for</span> package: unbound-1.4.20-34.el7.x86_64
--<span class="token operator">&gt;</span> Processing Dependency: libunbound.so.2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> <span class="token keyword">for</span> package: unbound-1.4.20-34.el7.x86_64
--<span class="token operator">&gt;</span> Processing Dependency: libldns.so.1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> <span class="token keyword">for</span> package: unbound-1.4.20-34.el7.x86_64
--<span class="token operator">&gt;</span> Processing Dependency: libevent-2.0.so.5<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> <span class="token keyword">for</span> package: unbound-1.4.20-34.el7.x86_64
--<span class="token operator">&gt;</span> Running transaction check
---<span class="token operator">&gt;</span> Package ldns.x86_64 <span class="token number">0</span>:1.6.16-10.el7 will be installed
--<span class="token operator">&gt;</span> Processing Dependency: libpcap.so.1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> <span class="token keyword">for</span> package: ldns-1.6.16-10.el7.x86_64
---<span class="token operator">&gt;</span> Package libevent.x86_64 <span class="token number">0</span>:2.0.21-4.el7 will be installed
---<span class="token operator">&gt;</span> Package unbound-libs.x86_64 <span class="token number">0</span>:1.4.20-34.el7 will be installed
--<span class="token operator">&gt;</span> Running transaction check
---<span class="token operator">&gt;</span> Package libpcap.x86_64 <span class="token number">14</span>:1.5.3-9.el7 will be installed
--<span class="token operator">&gt;</span> Finished Dependency Resolution

Dependencies Resolved

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
 Package                        Arch        Version             Repository    Size
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Installing:
 unbound                        x86_64      <span class="token number">1.4</span>.20-34.el7       c7-media     <span class="token number">478</span> k
Installing <span class="token keyword">for</span> dependencies:
 ldns                           x86_64      <span class="token number">1.6</span>.16-10.el7       c7-media     <span class="token number">476</span> k
 libevent                       x86_64      <span class="token number">2.0</span>.21-4.el7        c7-media     <span class="token number">214</span> k
 libpcap                        x86_64      <span class="token number">14</span>:1.5.3-9.el7      c7-media     <span class="token number">138</span> k
 unbound-libs                   x86_64      <span class="token number">1.4</span>.20-34.el7       c7-media     <span class="token number">299</span> k

Transaction Summary
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Install  <span class="token number">1</span> Package <span class="token punctuation">(</span>+4 Dependent packages<span class="token punctuation">)</span>

Total download size: <span class="token number">1.6</span> M
Installed size: <span class="token number">4.7</span> M
Is this ok <span class="token punctuation">[</span>y/d/N<span class="token punctuation">]</span>: y
Downloading packages:
------------------------------------------------------------------------------------
Total                                  <span class="token number">62</span> MB/s <span class="token operator">|</span> <span class="token number">1.6</span> MB  00:00:00     
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  Installing <span class="token builtin class-name">:</span> libevent-2.0.21-4.el7.x86_64                                   <span class="token number">1</span>/5 
  Installing <span class="token builtin class-name">:</span> <span class="token number">14</span>:libpcap-1.5.3-9.el7.x86_64                                  <span class="token number">2</span>/5 
  Installing <span class="token builtin class-name">:</span> ldns-1.6.16-10.el7.x86_64                                      <span class="token number">3</span>/5 
  Installing <span class="token builtin class-name">:</span> unbound-libs-1.4.20-34.el7.x86_64                              <span class="token number">4</span>/5 
  Installing <span class="token builtin class-name">:</span> unbound-1.4.20-34.el7.x86_64                                   <span class="token number">5</span>/5 
  Verifying  <span class="token builtin class-name">:</span> unbound-1.4.20-34.el7.x86_64                                   <span class="token number">1</span>/5 
  Verifying  <span class="token builtin class-name">:</span> ldns-1.6.16-10.el7.x86_64                                      <span class="token number">2</span>/5 
  Verifying  <span class="token builtin class-name">:</span> libevent-2.0.21-4.el7.x86_64                                   <span class="token number">3</span>/5 
  Verifying  <span class="token builtin class-name">:</span> <span class="token number">14</span>:libpcap-1.5.3-9.el7.x86_64                                  <span class="token number">4</span>/5 
  Verifying  <span class="token builtin class-name">:</span> unbound-libs-1.4.20-34.el7.x86_64                              <span class="token number">5</span>/5 

Installed:
  unbound.x86_64 <span class="token number">0</span>:1.4.20-34.el7                                                                                                                                             

Dependency Installed:
  ldns.x86_64 <span class="token number">0</span>:1.6.16-10.el7            libevent.x86_64 <span class="token number">0</span>:2.0.21-4.el7
  libpcap.x86_64 <span class="token number">14</span>:1.5.3-9.el7          unbound-libs.x86_64 <span class="token number">0</span>:1.4.20-34.el7           

Complete<span class="token operator">!</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后： <strong>使用 <code>sudo systemctl start unbound</code> 启动服务</strong>， <strong>使用 <code>sudo systeamctl enable unbound</code> 配置开机启动</strong>， <strong>使用 <code>sudo systeamctl status unbound</code> 查看服务状态</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-100 ~<span class="token punctuation">]</span><span class="token comment"># systemctl status unbound</span>
● unbound.service - Unbound recursive Domain Name Server
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/unbound.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2021</span>-12-06 <span class="token number">22</span>:53:33 EST<span class="token punctuation">;</span> 5s ago
  Process: <span class="token number">1728</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/unbound-anchor <span class="token parameter variable">-a</span> /var/lib/unbound/root.key <span class="token parameter variable">-c</span> /etc/unbound/icannbundle.pem <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
  Process: <span class="token number">1727</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/sbin/unbound-checkconf <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">1731</span> <span class="token punctuation">(</span>unbound<span class="token punctuation">)</span>
   CGroup: /system.slice/unbound.service
           └─1731 /usr/sbin/unbound <span class="token parameter variable">-d</span>

Dec 06 <span class="token number">22</span>:53:15 host-192-168-30-100 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Unbound recursive Domain Name Server<span class="token punctuation">..</span>.
Dec 06 <span class="token number">22</span>:53:15 host-192-168-30-100 unbound-checkconf<span class="token punctuation">[</span><span class="token number">1727</span><span class="token punctuation">]</span>: unbound-checkconf: no errors <span class="token keyword">in</span> /etc/unbound/unbound.conf
Dec 06 <span class="token number">22</span>:53:33 host-192-168-30-100 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started Unbound recursive Domain Name Server.
Dec 06 <span class="token number">22</span>:53:33 host-192-168-30-100 unbound<span class="token punctuation">[</span><span class="token number">1731</span><span class="token punctuation">]</span>: <span class="token punctuation">[</span><span class="token number">1731</span>:0<span class="token punctuation">]</span> notice: init module <span class="token number">0</span>: validator
Dec 06 <span class="token number">22</span>:53:33 host-192-168-30-100 unbound<span class="token punctuation">[</span><span class="token number">1731</span><span class="token punctuation">]</span>: Dec 06 <span class="token number">22</span>:53:33 unbound<span class="token punctuation">[</span><span class="token number">1731</span>:0<span class="token punctuation">]</span> warning: increased limit<span class="token punctuation">(</span>open files<span class="token punctuation">)</span> from <span class="token number">1024</span> to <span class="token number">8290</span>
Dec 06 <span class="token number">22</span>:53:33 host-192-168-30-100 unbound<span class="token punctuation">[</span><span class="token number">1731</span><span class="token punctuation">]</span>: <span class="token punctuation">[</span><span class="token number">1731</span>:0<span class="token punctuation">]</span> notice: init module <span class="token number">1</span>: iterator
Dec 06 <span class="token number">22</span>:53:33 host-192-168-30-100 unbound<span class="token punctuation">[</span><span class="token number">1731</span><span class="token punctuation">]</span>: <span class="token punctuation">[</span><span class="token number">1731</span>:0<span class="token punctuation">]</span> info: start of <span class="token function">service</span> <span class="token punctuation">(</span>unbound <span class="token number">1.4</span>.20<span class="token punctuation">)</span>.
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>Unbound 的配置文件为：<a href="/etc/unbound/unbound.conf"><code>/etc/unbound/unbound.conf</code></a></p><h3 id="配置本机使用的-dns-服务器" tabindex="-1"><a class="header-anchor" href="#配置本机使用的-dns-服务器" aria-hidden="true">#</a> 配置本机使用的 DNS 服务器</h3><ol><li>修改 <code>/etc/resolv.conf</code> 文件，第 3 行：<code>nameserver 192.168.30.100</code>（重启失效）</li><li>修改 <code>/etc/NetworkManager/NetworkManager.conf</code> 文件，在第 14 行下添加 <code>dns=</code>： <ul><li><code>none</code> 为使用本地 DNS</li><li>可以填 IP 或域名</li></ul></li></ol><h3 id="配置为本地-dns-服务器" tabindex="-1"><a class="header-anchor" href="#配置为本地-dns-服务器" aria-hidden="true">#</a> 配置为本地 DNS 服务器</h3><ol><li>修改 <code>unbound.conf</code> 文件，删除第 38、39 行开头的 <code># </code>（取消注释）。</li><li>在第 183 行下加一行：<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>access-control: 0.0.0.0/0 allow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>将第 215 行，改为 <code>username: &quot;&quot;</code>，让所有用户都可访问。</li><li>将第 376 行，改为 <code>domain-insecure: &quot;skillschina.com&quot;</code>，跳过验证域，以避免信任链验证失败。</li><li>修改 <code>/etc/resolv.conf</code> 文件，第 3 行：<code>nameserver 192.168.30.100</code></li><li>使用 <code>firewall-cmd --permanent --add-service=dns</code> 指令，开启 53 端口。</li></ol><h3 id="配置为存缓存-dns-服务器" tabindex="-1"><a class="header-anchor" href="#配置为存缓存-dns-服务器" aria-hidden="true">#</a> 配置为存缓存 DNS 服务器</h3><ol><li>在 <code>unbound.conf</code> 文件，第 558 行下添加：<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>forward-zone:
      name: &quot;.&quot;
      forward-addr: 192.168.30.100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>重启服务：<code>sudo systemctl restart unbound</code></li></ol><h3 id="添加本地正反向解析区域" tabindex="-1"><a class="header-anchor" href="#添加本地正反向解析区域" aria-hidden="true">#</a> 添加本地正反向解析区域</h3><ol><li>切换工作区: <code>cd /etc/unbound/local.d/</code></li><li>创建一个区域配置文件：<code>sudo vim skillschina.com.conf</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 正向解析
local-data: &quot;dns1.skillschina.com   3600 IN A 192.168.30.100&quot;
local-data: &quot;dns2.skillschina.com   3600 IN A 192.168.30.101&quot;
local-data: &quot;ftp.skillschina.com    3600 IN A 192.168.30.104&quot;
local-data: &quot;www.skillschina.com    3600 IN A 192.168.30.101&quot;
local-data: &quot;market.skillschina.com 3600 IN A 192.168.30.102&quot;
local-data: &quot;mail.skillschina.com   3600 IN A 192.168.30.102&quot;

# 反向解析
local-data-ptr: &quot;192.168.30.100   dns1.skillschina.com&quot;
local-data-ptr: &quot;192.168.30.101   dns2.skillschina.com&quot;
local-data-ptr: &quot;192.168.30.104    ftp.skillschina.com&quot;
local-data-ptr: &quot;192.168.30.101    www.skillschina.com&quot;
local-data-ptr: &quot;192.168.30.102 market.skillschina.com&quot;
local-data-ptr: &quot;192.168.30.102   mail.skillschina.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>配置完成后重启服务：<code>sudo systemctl restart unbound</code></li></ol><h4 id="验证配置" tabindex="-1"><a class="header-anchor" href="#验证配置" aria-hidden="true">#</a> 验证配置</h4><blockquote><p>如果没有 <code>nslookup</code> 之类的网络工具可以 <code>yum install bind-utils</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-100 ~<span class="token punctuation">]</span><span class="token comment"># nslookup mail.skillschina.com</span>
Server:         <span class="token number">192.168</span>.30.100
Address:        <span class="token number">192.168</span>.30.100<span class="token comment">#53</span>

Name:   mail.skillschina.com
Address: <span class="token number">192.168</span>.30.102

<span class="token punctuation">[</span>root@host-192-168-30-100 ~<span class="token punctuation">]</span><span class="token comment"># nslookup 192.168.30.102</span>
Server:         <span class="token number">192.168</span>.30.100
Address:        <span class="token number">192.168</span>.30.100<span class="token comment">#53</span>

<span class="token number">102.30</span>.168.192.in-addr.arpa     name <span class="token operator">=</span> market.skillschina.com.
<span class="token number">102.30</span>.168.192.in-addr.arpa     name <span class="token operator">=</span> mail.skillschina.com.
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function y(w,q){const a=t("ExternalLinkIcon");return l(),p("div",null,[i,n("div",d,[u,b,n("p",null,[n("a",k,[s("官网"),e(a)]),n("a",m,[s("官方文档"),e(a)])])]),v,n("ul",null,[n("li",null,[n("a",h,[s("Unbound (简体中文) - ArchWiki"),e(a)])]),n("li",null,[n("a",g,[s("Configuring Unbound as a simple forwarding DNS server | Enable Sysadmin"),e(a)])]),n("li",null,[n("a",_,[s("unbound域名解析 - 阿小杜 - 博客园"),e(a)])]),n("li",null,[n("a",f,[s("UNbound DNS -UNbound域名解析_Alkaid__3的博客-CSDN博客_alkaid"),e(a)])]),n("li",null,[n("a",x,[s("使用unbound搭建DNS服务器，配置缓存以及防止DNS污染 - Nrehearsal"),e(a)])])]),D])}const N=o(c,[["render",y],["__file","index.html.vue"]]);export{N as default};
