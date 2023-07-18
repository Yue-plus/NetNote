import{_ as n,o as s,c as a,e}from"./app-ab31641a.js";const i={},l=e(`<h1 id="广域网基础" tabindex="-1"><a class="header-anchor" href="#广域网基础" aria-hidden="true">#</a> 广域网基础</h1><h2 id="交换机配置" tabindex="-1"><a class="header-anchor" href="#交换机配置" aria-hidden="true">#</a> 交换机配置</h2><h3 id="进入特权模式" tabindex="-1"><a class="header-anchor" href="#进入特权模式" aria-hidden="true">#</a> 进入特权模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>eanble
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telnet方式管理交换机" tabindex="-1"><a class="header-anchor" href="#telnet方式管理交换机" aria-hidden="true">#</a> Telnet方式管理交换机.</h3><h4 id="进入全局配置模式" tabindex="-1"><a class="header-anchor" href="#进入全局配置模式" aria-hidden="true">#</a> 进入全局配置模式</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">enable</span> password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span>

Line <span class="token number">0</span> <span class="token number">4</span>

Password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机文件备份、升级、还原" tabindex="-1"><a class="header-anchor" href="#交换机文件备份、升级、还原" aria-hidden="true">#</a> 交换机文件备份、升级、还原</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> rgnos.bin系统文件

<span class="token number">2</span><span class="token punctuation">)</span> config.text配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enable密码丢失的解决办法" tabindex="-1"><a class="header-anchor" href="#enable密码丢失的解决办法" aria-hidden="true">#</a> Enable密码丢失的解决办法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> 重启

<span class="token number">2</span><span class="token punctuation">)</span> CTRL+C

<span class="token number">3</span><span class="token punctuation">)</span> 选择 <span class="token number">4</span> （file）

<span class="token number">4</span><span class="token punctuation">)</span> <span class="token number">1</span> <span class="token punctuation">(</span>移除<span class="token punctuation">)</span>

<span class="token number">5</span><span class="token punctuation">)</span> Config.text

<span class="token number">6</span><span class="token punctuation">)</span> Laod （重启）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机vlan的划分" tabindex="-1"><a class="header-anchor" href="#交换机vlan的划分" aria-hidden="true">#</a> 交换机Vlan的划分</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span><span class="token punctuation">)</span> Vlan <span class="token number">10</span>

<span class="token number">2</span><span class="token punctuation">)</span> In vlan <span class="token number">10</span>

<span class="token number">3</span><span class="token punctuation">)</span> Ip <span class="token function">add</span> <span class="token punctuation">[</span>IP<span class="token punctuation">]</span> <span class="token punctuation">[</span>子网掩码<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机端口与mac绑定和过滤" tabindex="-1"><a class="header-anchor" href="#交换机端口与mac绑定和过滤" aria-hidden="true">#</a> 交换机端口与Mac绑定和过滤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span><span class="token punctuation">)</span> //进入串口

<span class="token number">2</span><span class="token punctuation">)</span> sw mode trunk
 sw port-security
<span class="token number">3</span><span class="token punctuation">)</span> sw port-security mac-address <span class="token punctuation">[</span>MAC<span class="token punctuation">]</span> 
 mac-address-table static address <span class="token punctuation">[</span>MAC<span class="token punctuation">]</span> vlan-ID interface ethernet <span class="token punctuation">[</span>要绑定的端口<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成树实验" tabindex="-1"><a class="header-anchor" href="#生成树实验" aria-hidden="true">#</a> 生成树实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> spanning-tree
<span class="token number">2</span>）spanning-tree mstp config 进入MSTP生成树

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机链路聚合" tabindex="-1"><a class="header-anchor" href="#交换机链路聚合" aria-hidden="true">#</a> 交换机链路聚合</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span><span class="token punctuation">)</span> Int aggregateport <span class="token number">1</span>

<span class="token number">2</span><span class="token punctuation">)</span> sw mode trunk

<span class="token number">3</span><span class="token punctuation">)</span> //进入串口

<span class="token number">4</span><span class="token punctuation">)</span> port-group <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机端口镜像" tabindex="-1"><a class="header-anchor" href="#交换机端口镜像" aria-hidden="true">#</a> 交换机端口镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span><span class="token punctuation">)</span> monitor session <span class="token number">1</span> <span class="token builtin class-name">source</span> interface fastEthernet <span class="token number">0</span>/2 both //被镜像的

<span class="token number">2</span><span class="token punctuation">)</span> monitor session <span class="token number">1</span> destination interface fastEthernet <span class="token number">0</span>/3 //镜像端口

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多层交换机静态路由实验" tabindex="-1"><a class="header-anchor" href="#多层交换机静态路由实验" aria-hidden="true">#</a> 多层交换机静态路由实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">ip</span> route <span class="token punctuation">[</span>存在的IP段<span class="token punctuation">]</span> <span class="token punctuation">[</span>子网掩码<span class="token punctuation">]</span> <span class="token punctuation">[</span>下一跳IP<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rip动态路由" tabindex="-1"><a class="header-anchor" href="#rip动态路由" aria-hidden="true">#</a> RIP动态路由</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> router rip

<span class="token number">2</span><span class="token punctuation">)</span> version <span class="token number">2</span>

<span class="token number">3</span><span class="token punctuation">)</span> network <span class="token punctuation">[</span>IP段<span class="token punctuation">]</span>

<span class="token number">4</span><span class="token punctuation">)</span> no auto-summary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口安全" tabindex="-1"><a class="header-anchor" href="#端口安全" aria-hidden="true">#</a> 端口安全</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> //进入端口

<span class="token number">2</span><span class="token punctuation">)</span> switchport port-security //开启端口安全

<span class="token number">3</span><span class="token punctuation">)</span> switchport port-security maximum <span class="token number">5</span> //最大连接5.

<span class="token number">4</span><span class="token punctuation">)</span> sw port-security violation <span class="token function">shutdown</span> //超出就shudown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ospf动态路由" tabindex="-1"><a class="header-anchor" href="#ospf动态路由" aria-hidden="true">#</a> OSPF动态路由</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> router ospf

<span class="token number">2</span><span class="token punctuation">)</span> network <span class="token punctuation">[</span>IP段<span class="token punctuation">]</span> <span class="token punctuation">[</span>反码<span class="token punctuation">]</span> area <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标准acl实验" tabindex="-1"><a class="header-anchor" href="#标准acl实验" aria-hidden="true">#</a> 标准ACL实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> access-list <span class="token number">1</span> deny <span class="token number">192.168</span>.1.0 <span class="token number">0.0</span>.0.255 //拒绝访问的IP段

<span class="token number">2</span><span class="token punctuation">)</span> access-list <span class="token number">1</span> permit <span class="token number">192.168</span>.1.0 <span class="token number">0.0</span>.0.255 //允许的IP段

<span class="token number">3</span><span class="token punctuation">)</span> //进入端口

<span class="token number">4</span><span class="token punctuation">)</span> <span class="token function">ip</span> access-group <span class="token number">1</span> <span class="token keyword">in</span> //把控制列表1 配入 端口，进入控制

<span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">ip</span> access-group <span class="token number">1</span> out //把控制列表1 配入 端口，输出控制

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展acl实验" tabindex="-1"><a class="header-anchor" href="#扩展acl实验" aria-hidden="true">#</a> 扩展ACL实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> access-list <span class="token number">101</span> deny tcp A.B.C.D <span class="token number">255.255</span>.255.0 A.B.C.D <span class="token number">255.255</span>.255.0 eq ftp<span class="token punctuation">(</span>WWW<span class="token punctuation">)</span>// 禁止前面个网段访问后面个网段的FTP或者WWW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="交换机单向访问控制" tabindex="-1"><a class="header-anchor" href="#交换机单向访问控制" aria-hidden="true">#</a> 交换机单向访问控制</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> //使用标准ACL

<span class="token number">2</span><span class="token punctuation">)</span> access-list <span class="token number">1</span> deny <span class="token number">192.168</span>.1.0 <span class="token number">0.0</span>.0.255

<span class="token number">3</span><span class="token punctuation">)</span> //进入端口

<span class="token number">4</span><span class="token punctuation">)</span> <span class="token function">ip</span> access-group <span class="token number">1</span> <span class="token keyword">in</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机dhcp服务器配置" tabindex="-1"><a class="header-anchor" href="#交换机dhcp服务器配置" aria-hidden="true">#</a> 交换机DHCP服务器配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">service</span> dhcp

<span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">ip</span> dhcp <span class="token function">ping</span> packets <span class="token number">1</span>

<span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">ip</span> dhcp excluded-address <span class="token punctuation">[</span>ip1<span class="token punctuation">]</span> <span class="token punctuation">[</span>IP <span class="token number">2</span><span class="token punctuation">]</span> //设置排斥的IP地址从1到2开始

<span class="token number">4</span><span class="token punctuation">)</span> <span class="token function">ip</span> dhcp pool <span class="token punctuation">[</span>名字<span class="token punctuation">]</span>

<span class="token number">5</span><span class="token punctuation">)</span> lease infinite //永久租用

<span class="token number">6</span><span class="token punctuation">)</span> network <span class="token punctuation">[</span>IP段<span class="token punctuation">]</span> <span class="token punctuation">[</span>子网掩码<span class="token punctuation">]</span>

<span class="token number">7</span><span class="token punctuation">)</span> default-router <span class="token punctuation">[</span>网关IP<span class="token punctuation">]</span>

<span class="token number">8</span><span class="token punctuation">)</span> dns-server <span class="token punctuation">[</span>NDS IP<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机dhcp中继功能" tabindex="-1"><a class="header-anchor" href="#交换机dhcp中继功能" aria-hidden="true">#</a> 交换机DHCP中继功能</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">service</span> dhcp

<span class="token number">2</span><span class="token punctuation">)</span> //进入VLAN

<span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">ip</span> helper-address <span class="token punctuation">[</span>DHCP的网管<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机vrrp实验" tabindex="-1"><a class="header-anchor" href="#交换机vrrp实验" aria-hidden="true">#</a> 交换机VRRP实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> //进入VLAN

<span class="token number">2</span><span class="token punctuation">)</span> vrrp <span class="token number">10</span> <span class="token function">ip</span> <span class="token punctuation">[</span>IP<span class="token punctuation">]</span> //设置vrrp虚拟网关

<span class="token number">3</span><span class="token punctuation">)</span> vrrp <span class="token number">10</span> priority <span class="token number">150</span> //设置优先级为150（默认100）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换机qos实验" tabindex="-1"><a class="header-anchor" href="#交换机qos实验" aria-hidden="true">#</a> 交换机QOS实验</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> //1.扩展控制列表，2策略，3方法 <span class="token number">4</span>配入端口

<span class="token number">2</span><span class="token punctuation">)</span> access-list <span class="token number">101</span> permit <span class="token function">ip</span> <span class="token function">host</span> A.B.C.D any //定义要限速的IP

<span class="token number">3</span><span class="token punctuation">)</span> class-map xiansu1 //创建class-map 名字为xiansu1

<span class="token number">4</span><span class="token punctuation">)</span> match access-group <span class="token number">101</span> //把控制列表套入策略xiansu1

<span class="token number">5</span><span class="token punctuation">)</span> policy-map pozz 创建policy-map名字为pozz

<span class="token number">6</span><span class="token punctuation">)</span> class xiansu1

<span class="token number">7</span><span class="token punctuation">)</span> police <span class="token number">8000</span> <span class="token number">512</span> exceed-action drop //限速值为8000 kbit ,512KB

<span class="token number">8</span><span class="token punctuation">)</span> //进入端口

<span class="token number">9</span><span class="token punctuation">)</span> service-policy input pozz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器" tabindex="-1"><a class="header-anchor" href="#路由器" aria-hidden="true">#</a> 路由器</h2><h3 id="路由器telnet" tabindex="-1"><a class="header-anchor" href="#路由器telnet" aria-hidden="true">#</a> 路由器telnet</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> //进入全局配置模式

b<span class="token punctuation">)</span> config

c<span class="token punctuation">)</span> <span class="token builtin class-name">enable</span> password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span>

d<span class="token punctuation">)</span> Line vty <span class="token number">0</span> <span class="token number">4</span> 

e<span class="token punctuation">)</span> Password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="login路由器" tabindex="-1"><a class="header-anchor" href="#login路由器" aria-hidden="true">#</a> Login路由器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> //先建立用户密码

b<span class="token punctuation">)</span> Ip http port <span class="token number">80</span> //开启web端口为80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由器广域网hdlc封装配置" tabindex="-1"><a class="header-anchor" href="#路由器广域网hdlc封装配置" aria-hidden="true">#</a> 路由器广域网HDLC封装配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> encapsulation hdlc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由器广域网ppp封装配置" tabindex="-1"><a class="header-anchor" href="#路由器广域网ppp封装配置" aria-hidden="true">#</a> 路由器广域网PPP封装配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> encapsulation ppp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由器广域网ppp封装pap配置" tabindex="-1"><a class="header-anchor" href="#路由器广域网ppp封装pap配置" aria-hidden="true">#</a> 路由器广域网PPP封装PAP配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> encapsulation ppp

b<span class="token punctuation">)</span> ppp authentication pap

c<span class="token punctuation">)</span> ppp pap sent-username <span class="token punctuation">[</span>用户<span class="token punctuation">]</span> password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span> //验证方

d<span class="token punctuation">)</span> username <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span> password <span class="token number">0</span> <span class="token punctuation">[</span>密码<span class="token punctuation">]</span> //被验证方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由器广域网ppp封装chap配置" tabindex="-1"><a class="header-anchor" href="#路由器广域网ppp封装chap配置" aria-hidden="true">#</a> 路由器广域网PPP封装CHAP配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> encapsulation ppp

b<span class="token punctuation">)</span> ppp authentication CHAP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ppp-chap-hostname-对方电脑" tabindex="-1"><a class="header-anchor" href="#ppp-chap-hostname-对方电脑" aria-hidden="true">#</a> ppp chap hostname [对方电脑]</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- <span class="token number">8</span>. ppp chap password <span class="token number">0</span> <span class="token number">12345687</span>

a<span class="token punctuation">)</span> Ip nat Inside 设置为内网接口 

b<span class="token punctuation">)</span> <span class="token function">ip</span> nat outside 设置为外网接口

c<span class="token punctuation">)</span> access-list <span class="token number">10</span> permit A.B.C.D <span class="token number">0.0</span>.0.255 //配置允许访问的ACL

d<span class="token punctuation">)</span> <span class="token function">ip</span> nat inside <span class="token builtin class-name">source</span> list <span class="token number">10</span> interface serial <span class="token number">1</span>/0 overload //允许访问外网的ACL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nat内网映射" tabindex="-1"><a class="header-anchor" href="#nat内网映射" aria-hidden="true">#</a> NAT内网映射</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> <span class="token function">ip</span> nat inside <span class="token builtin class-name">source</span> static tcp <span class="token number">192.168</span>.1.1 <span class="token number">80</span> interface s4/0 //把IP的80端口射到s4/0端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="策略路由-pbr-配置" tabindex="-1"><a class="header-anchor" href="#策略路由-pbr-配置" aria-hidden="true">#</a> 策略路由（PBR）配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Access-list <span class="token number">101</span> permit <span class="token function">ip</span> <span class="token function">host</span> A.B.C.D any //定义ACL

Route-map <span class="token builtin class-name">test</span> permit <span class="token number">10</span> <span class="token punctuation">..</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>定义策略

Match <span class="token function">ip</span> add0020

//匹配ACL

Set int null <span class="token number">0</span> //如果匹配就丢弃

Set <span class="token function">ip</span> next-hop A.B.C.D //如果匹配就放到下一条

Route-map <span class="token builtin class-name">test</span> permit <span class="token number">20</span> //如果不匹配执行默认路由

Int f <span class="token number">0</span>/1 //进入端口

Ip policy route-map <span class="token builtin class-name">test</span> //关联策略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由在发布" tabindex="-1"><a class="header-anchor" href="#路由在发布" aria-hidden="true">#</a> 路由在发布</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> 当出现多动态路由的时候，一个网段只声明一次，要和下一条的协议一样

b<span class="token punctuation">)</span> Re

redistribute rip subnets 重分布RIP路由

redistribute static subnets 重分布静态路由

5650S-1<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#router rip</span>

5650S-1<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#version 2</span>

5650S-1<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#redistribute ospf</span>

5650S-1<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#redistribute stati</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置qos" tabindex="-1"><a class="header-anchor" href="#配置qos" aria-hidden="true">#</a> 配置QOS</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> //1.扩展控制列表，2策略，3方法 <span class="token number">4</span>配入端口

b<span class="token punctuation">)</span> access-list <span class="token number">101</span> permit <span class="token function">ip</span> <span class="token function">host</span> A.B.C.D any //定义要限速的IP

c<span class="token punctuation">)</span> class-map xiansu1 //创建class-map 名字为xiansu1

d<span class="token punctuation">)</span> match access-group <span class="token number">101</span> //把控制列表套入策略xiansu1

e<span class="token punctuation">)</span> policy-map pozz 创建policy-map名字为pozz

f<span class="token punctuation">)</span> class xiansu1

g<span class="token punctuation">)</span> police <span class="token number">8000</span> <span class="token number">512</span> exceed-action drop //限速值为8000 kbit ,512KB

h<span class="token punctuation">)</span> //进入端口

i<span class="token punctuation">)</span> service-policy input pozz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vpn-pptp" tabindex="-1"><a class="header-anchor" href="#vpn-pptp" aria-hidden="true">#</a> VPN，pptp</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a<span class="token punctuation">)</span> <span class="token function">ip</span> <span class="token builtin class-name">local</span> pool text <span class="token number">192.168</span>.2.2 <span class="token number">192.168</span>.2.20 //定义获取VPN的地址池，

b<span class="token punctuation">)</span> interface Virtual-Template <span class="token number">1</span> //进入虚接口1

c<span class="token punctuation">)</span> ppp authentication pap //配置认证方式

d<span class="token punctuation">)</span> <span class="token function">ip</span> unnumbered FastEthernet <span class="token number">1</span>/0 //继承接口IP

e<span class="token punctuation">)</span> peer default <span class="token function">ip</span> address pool pptp //关联地址池

f<span class="token punctuation">)</span> //进入全局模式

g<span class="token punctuation">)</span> vpdn <span class="token builtin class-name">enable</span> //开启VPN

h<span class="token punctuation">)</span> vpdn-group PPTP //定义组名称

i<span class="token punctuation">)</span> accept-dialin //允许拨入访问

j<span class="token punctuation">)</span> protocol pptp //允许拨入访问得协议

k<span class="token punctuation">)</span> virtual-template <span class="token number">1</span> //关联虚接口，拨入时候分配给用户得虚接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="ipv6-配置隧道" tabindex="-1"><a class="header-anchor" href="#ipv6-配置隧道" aria-hidden="true">#</a> IPV6 配置隧道</h2><p>** 配置隧道 **\\</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- SW1 <span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># interface tunnel 1</span>
SW1<span class="token punctuation">(</span>config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#ipv6 address 2001::1/64</span>
SW1 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel source 2.2.2.1</span>
SW1 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel destination 3.3.3.2</span>
SW1 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel mode ipv6ip</span>
SW1 <span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ipv6 route 2001:2::/64 tunnel1</span>
- SW2 <span class="token punctuation">(</span>Config<span class="token punctuation">)</span><span class="token comment">#interface tunnel 1</span>
SW2<span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#ipv6 address 2001::2/64</span>
SW2 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel source 3.3.3.2</span>
SW2 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel destination 2.2.2.1</span>
SW2 <span class="token punctuation">(</span>Config-if-Tunnel1<span class="token punctuation">)</span><span class="token comment">#tunnel mode ipv6ip</span>
SW2 <span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ipv6 route 2001:1::/64 tunnel1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>woSpanning Tree Protocol（生成树协议）                                                                               <span class="token number">1</span>.在交换机sw1中创建vlan，将接口分配到vlan中
                                                                                                                                              <span class="token number">2</span>.跨交换机之间的通信vlan，交换机之间的相连的两个端口开启trunk
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#spanning-tree                                                                                                 3.单臂路由：在路由上创建子接口【在路由器中一定不要配置fa0/0接口，路由上的</span>
（通过此命令开启STP协议）                                                                                                     所以ip地址出个自vlan的网关】
                                                                                                                                              <span class="token number">4</span>. SVL【SVL————三加二】三层交换机配置vlan和IP          
switch<span class="token comment">#show spanning-tree(通过此命令看生成树）                                                                    5.                          【SPA】 </span>
                                                                                                                                               
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># spanning-tree mst configuration</span>
（进入MSTP配置模式）

switch<span class="token punctuation">(</span>config-Mstp-Region<span class="token punctuation">)</span><span class="token comment">#name mst-pname</span>
（为MST域配置名字，所有开启多实例MST的交换机的域名必须相同）

switch<span class="token punctuation">(</span>config-Mstp-Region<span class="token punctuation">)</span><span class="token comment">#instance 1 vlan 10</span>
switch<span class="token punctuation">(</span>config-Mstp-Region<span class="token punctuation">)</span><span class="token comment">#instance 2 vlan 20</span>
（将vlan加入实例）

switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#spanning-tree mst 1 priority 28672 </span>
（通过该命令修改实例的BID）

switch<span class="token punctuation">(</span>config-Ethernet0/0/2 <span class="token punctuation">)</span><span class="token comment">#spanning-tree mst 1 cost 300000</span>
（通过该命令修改端口的路径成本）

switch<span class="token punctuation">(</span>config-Ethernet0/0/2<span class="token punctuation">)</span><span class="token comment">#spanning-tree mst 1 port-priority 144</span>
（通过该命令修改实例的端口ID）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交换机的链路聚合与端口镜像" tabindex="-1"><a class="header-anchor" href="#交换机的链路聚合与端口镜像" aria-hidden="true">#</a> 交换机的链路聚合与端口镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>                  链路聚合

switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface ethernet 0/0/1-2</span>
switch<span class="token punctuation">(</span>config-Port-Range<span class="token punctuation">)</span><span class="token comment">#port-group 1 mode on</span>
switch<span class="token punctuation">(</span>config-Port-Range<span class="token punctuation">)</span><span class="token comment">#exit</span>
（通过此命令将选定接口进行静态链路聚合）
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface ethernet 0/0/1-2</span>
switch<span class="token punctuation">(</span>config-Port-Range<span class="token punctuation">)</span><span class="token comment">#port-group 1 mode active</span>
（通过此命令将选定接口配置为动态主动协商模式）
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface ethernet 0/0/1-2</span>
switch<span class="token punctuation">(</span>config-Port-Range<span class="token punctuation">)</span><span class="token comment">#port-group 1 mode passive</span>
（通过此命令将选定接口配置为动态被动协商模式）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>                   端口镜像
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># monitor session 1 source  int  e0/0/2-10  both</span>
switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># monitor session 1 destination  int  e0/0/1</span>
（rx为接收） （tx为发出） （both为强制入和出）
switch<span class="token comment">#show monitor </span>
<span class="token punctuation">(</span>通过show monitor查看端口镜像配置<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>             设置交换机trunk端口

switchA<span class="token punctuation">(</span>Config<span class="token punctuation">)</span><span class="token comment">#interface ethernet 0/0/24</span>
switchA<span class="token punctuation">(</span>Config-Ethernet0/0/24<span class="token punctuation">)</span><span class="token comment">#switchport mode trunk</span>
Set the port Ethernet0/0/24 mode TRUNK successfully
switchA<span class="token punctuation">(</span>Config-Ethernet0/0/24<span class="token punctuation">)</span><span class="token comment">#switchport trunk allowed vlan all</span>
<span class="token builtin class-name">set</span> the port Ethernet0/0/24 allowed vlan successfully
switchA<span class="token punctuation">(</span>Config-Ethernet0/0/24<span class="token punctuation">)</span><span class="token comment">#exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态路由" tabindex="-1"><a class="header-anchor" href="#静态路由" aria-hidden="true">#</a> 静态路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>先配置vlan 
配置交换机各个接口的vlan和ip地址
配置各PC的IP位址，注意配置网关
验证PC之间是否连通
DCRS-5650-A<span class="token comment">#show ip route(查看路由表）</span>
                 配置静态路由
DCRS-5650-A<span class="token punctuation">(</span>Config<span class="token punctuation">)</span><span class="token comment">#ip route 192.168.30.0 255.255.255.0 192.168.100.2</span>
DCRS-5650-A<span class="token punctuation">(</span>Config<span class="token punctuation">)</span><span class="token comment">#ip route 192.168.40.0 255.255.255.0 192.168.100.2</span>
（跳过你前面的交换机）
验证配置：
DCRS-5650-A<span class="token comment">#show ip route</span>
C       <span class="token number">127.0</span>.0.0/8 is directly connected, Loopback
C       <span class="token number">192.168</span>.10.0/24 is directly connected, Vlan10
C       <span class="token number">192.168</span>.20.0/24 is directly connected, Vlan20
S       <span class="token number">192.168</span>.30.0/24 <span class="token punctuation">[</span><span class="token number">1</span>/0<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100
S       <span class="token number">192.168</span>.40.0/24 <span class="token punctuation">[</span><span class="token number">1</span>/0<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100
C       <span class="token number">192.168</span>.100.0/24 is directly connected, Vlan100
（S代表静态配置的网段）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思科单臂路由" tabindex="-1"><a class="header-anchor" href="#思科单臂路由" aria-hidden="true">#</a> 思科单臂路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token number">1</span>.  <span class="token number">2</span>成交换机单臂路由
在2成交换机里创建vlan，有几个网段就创建几个
将vlan划分进端口
<span class="token number">0</span>/0.10   <span class="token number">0</span>/0.20
如端口没亮要进入端口用no shut打开
      <span class="token number">1.0</span> 路由配置
在config里
int fa <span class="token number">0</span>/0
no shut
int <span class="token number">0</span>/0.10
int <span class="token number">1</span>/0.10
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">id</span><span class="token operator">=</span>int <span class="token number">0</span>/0.10
int <span class="token number">1</span>/0.10

encapsolution dot1p <span class="token function">id</span>
<span class="token function">ip</span> <span class="token function">add</span>  IP 地址
        
        交换机的路由route RIP
启动RIP协议
DCRS-5650-A<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#router rip</span>
DCRS-5650-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network vlan 10</span>
DCRS-5650-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network vlan 20</span>
DCRS-5650-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network vlan 100</span>
DCRS-5650-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#</span>
DCRS-5650-A<span class="token comment">#show ip rip</span>
Codes: R - RIP, K - Kernel, C - Connected, S - Static, O - OSPF, I - IS-IS,
       B - BGP

   Network            Next Hop         Metric From            If     Time
R  <span class="token number">192.168</span>.10.0/24                          <span class="token number">1</span>                 Vlan10
R  <span class="token number">192.168</span>.20.0/24                          <span class="token number">1</span>                 Vlan20 
R  <span class="token number">192.168</span>.30.0/24    <span class="token number">192.168</span>.100.2         <span class="token number">2</span> <span class="token number">192.168</span>.100.2   Vlan100 02:36
R  <span class="token number">192.168</span>.40.0/24    <span class="token number">192.168</span>.100.2         <span class="token number">2</span> <span class="token number">192.168</span>.100.2   Vlan100 02:36
R  <span class="token number">192.168</span>.100.0/24                         <span class="token number">1</span>                 Vlan100

DCRS-5650-A<span class="token comment">#show ip route</span>
Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
       O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">1</span>, N2 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">2</span>
       E1 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">1</span>, E2 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">2</span>
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default

C       <span class="token number">127.0</span>.0.0/8 is directly connected, Loopback
C       <span class="token number">192.168</span>.10.0/24 is directly connected, Vlan10
C       <span class="token number">192.168</span>.20.0/24 is directly connected, Vlan20
R       <span class="token number">192.168</span>.30.0/24 <span class="token punctuation">[</span><span class="token number">120</span>/2<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100, 00:03:00
R       <span class="token number">192.168</span>.40.0/24 <span class="token punctuation">[</span><span class="token number">120</span>/2<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100, 00:03:00
C       <span class="token number">192.168</span>.100.0/24 is directly connected, Vlan100
（R表示rip协议学习到的网段）

DCRS-5650-B<span class="token comment">#show ip rip</span>
Codes: R - RIP, K - Kernel, C - Connected, S - Static, O - OSPF, I - IS-IS,
       B - BGP

   Network            Next Hop         Metric From            If     Time
R  <span class="token number">192.168</span>.10.0/24    <span class="token number">192.168</span>.100.1         <span class="token number">2</span> <span class="token number">192.168</span>.100.1   Vlan101 02:42
R  <span class="token number">192.168</span>.20.0/24    <span class="token number">192.168</span>.100.1         <span class="token number">2</span> <span class="token number">192.168</span>.100.1   Vlan101 02:42
R  <span class="token number">192.168</span>.30.0/24                          <span class="token number">1</span>                 Vlan30
R  <span class="token number">192.168</span>.40.0/24                          <span class="token number">1</span>                 Vlan40
R  <span class="token number">192.168</span>.100.0/24                         <span class="token number">1</span>                 Vlan101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多层交换机ospf动态路由" tabindex="-1"><a class="header-anchor" href="#多层交换机ospf动态路由" aria-hidden="true">#</a> 多层交换机OSPF动态路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      DCRS-5656-A<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#router ospf</span>
DCRS-5656-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 192.168.10.0/24 area 0</span>
DCRS-5656-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 192.168.20.0/24 area 0</span>
DCRS-5656-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 192.168.100.0/24 area 0</span>
DCRS-5656-A<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#exit</span>
DCRS-5656-A<span class="token comment">#show ip route</span>
Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
       O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">1</span>, N2 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">2</span>
       E1 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">1</span>, E2 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">2</span>
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default

C       <span class="token number">127.0</span>.0.0/8 is directly connected, Loopback
C       <span class="token number">192.168</span>.10.0/24 is directly connected, Vlan10
C       <span class="token number">192.168</span>.20.0/24 is directly connected, Vlan20
O       <span class="token number">192.168</span>.30.0/24 <span class="token punctuation">[</span><span class="token number">110</span>/20<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100, 00:00:23
O       <span class="token number">192.168</span>.40.0/24 <span class="token punctuation">[</span><span class="token number">110</span>/20<span class="token punctuation">]</span> via <span class="token number">192.168</span>.100.2, Vlan100, 00:00:23
C       <span class="token number">192.168</span>.100.0/24 is directly connected, Vlan100
（O代表ospf学习到的路由网段）

                             ospf区域认证

router ospf <span class="token number">1</span>                                 //创建一个ospf进程
area <span class="token number">0</span> authentication message-digest          //开启区域0的认证
int vlan <span class="token number">100</span>                                  //进入路由之间连接的vlan或接口
<span class="token function">ip</span> ospf authentication message-digest         //开启该接口的ospf认证
<span class="token function">ip</span> ospf message-digest-key <span class="token number">1</span> md5 <span class="token number">123456789</span>    //配置md5认证，密钥为123456789

                          生成交换机数据参数
                    Switch<span class="token comment">#show running-config</span>

                 how version    显示交换机版本信息
show flash    显示保存在 flash 中的文件及大小
show arp    显示 ARP 映射表
show <span class="token function">history</span>   显示用户最近输入的历史
show rom    显示启动文件及大小
show running-config    显示当前运行状态下生效的交换机参数配置
show startup-config    显示当前运行状态下写在 Flash Memory 中的交换机参数配置，
show version 命令：show version
功能：显示交换机版本信息。
命令模式：特权用户配置模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一次连接多个接口" tabindex="-1"><a class="header-anchor" href="#一次连接多个接口" aria-hidden="true">#</a> 一次连接多个接口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>conf<span class="token punctuation">)</span>int range fa <span class="token number">0</span>/0/1-8
<span class="token punctuation">(</span>range<span class="token punctuation">)</span>no shi acc vlan 
使用range参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置所有vlan进入trunk-交换机可用" tabindex="-1"><a class="header-anchor" href="#设置所有vlan进入trunk-交换机可用" aria-hidden="true">#</a> 设置所有vlan进入trunk(交换机可用）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>          swi	trunk all vlan all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dhcp排除地址-分段-单一效果一样" tabindex="-1"><a class="header-anchor" href="#dhcp排除地址-分段-单一效果一样" aria-hidden="true">#</a> DHCP排除地址(分段，单一效果一样）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>         <span class="token function">ip</span> dhcp excluded-address 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启加密服务" tabindex="-1"><a class="header-anchor" href="#开启加密服务" aria-hidden="true">#</a> 开启加密服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#services password-encryption</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="光口改电口" tabindex="-1"><a class="header-anchor" href="#光口改电口" aria-hidden="true">#</a> 光口改电口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令：media-type <span class="token punctuation">{</span>copper <span class="token operator">|</span> copper-preferred-auto <span class="token operator">|</span> fiber <span class="token operator">|</span> sfp-preferred-auto <span class="token punctuation">}</span> 
功能：设置光电组合端口的组合模式（只对组合端口有效）。
 参数：copper 为强制电口； copper-preferred-auto 为电口优先；
fiber 为强制光口； sfp-preferred-auto 为光口优先
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地-oam-实体发出远端环回请求" tabindex="-1"><a class="header-anchor" href="#本地-oam-实体发出远端环回请求" aria-hidden="true">#</a> 本地 OAM 实体发出远端环回请求</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>：ethernet-oam remote-loopback   
    no ethernet-oam remote-loopback 
Loopback Supported 是否支持环回：YES表示支持；NO表示不支持
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="md5认证" tabindex="-1"><a class="header-anchor" href="#md5认证" aria-hidden="true">#</a> md5认证</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   R1<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#interface s0/0/0</span>
R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip ospf message-digest-key 1 md5 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态路由-1" tabindex="-1"><a class="header-anchor" href="#静态路由-1" aria-hidden="true">#</a> 静态路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>R1
<span class="token builtin class-name">enable</span>　　进入特权模式　　
config　　进入全局模式
<span class="token function">hostname</span> R1　　修改名称
interface s0/1　　进入端口
physical-layer speed <span class="token number">64000</span>　　设置同步时钟
<span class="token function">ip</span> address <span class="token number">192.168</span>.1.1 <span class="token number">255.255</span>.255.0　　设置IP 地址
encapsulation ppp　　设置封装协议
no <span class="token function">shutdown</span>　　开启端口
<span class="token builtin class-name">exit</span>　　返回上一级
<span class="token function">ip</span> route <span class="token number">192.168</span>.2.0 <span class="token number">255.255</span>.255.0 <span class="token number">192.168</span>.1.2　　添加静态路由
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由重分布配置" tabindex="-1"><a class="header-anchor" href="#路由重分布配置" aria-hidden="true">#</a> 路由重分布配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 
R1
<span class="token builtin class-name">enable</span>　　进入特权模式
config　　进入全局模式
<span class="token function">hostname</span> R1　　修改名称
interface l0　　进入端口
<span class="token function">ip</span> address <span class="token number">192.168</span>.3.254 <span class="token number">255.255</span>.255.0　　设置IP地址
interface s0/1　　进入端口
<span class="token function">ip</span> address <span class="token number">192.168</span>.1.1 <span class="token number">255.255</span>.255.0　　设置IP地址
physical-layer speed <span class="token number">64000</span>　　设置同步时钟
<span class="token builtin class-name">exit</span>　　返回上一级
router rip　　启动RIP协议
version <span class="token number">2</span>　　选择版本
network <span class="token number">192.168</span>.1.0　　添加直连网段到RIP
network <span class="token number">192.168</span>.3.0　　添加直连网段到RIP
相关命令
redistribute connect 　　　　将直连网段重分布到协议中
redistribute rip 　　　　　　 将RIP重分布到协议中
redistribute ospf <span class="token punctuation">[</span>进程号<span class="token punctuation">]</span> 　   将OSPF重分布到协议
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ru邻居" tabindex="-1"><a class="header-anchor" href="#ru邻居" aria-hidden="true">#</a> ru邻居</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>参数 参数说明 <span class="token function">ip</span> ospf authentication  配置 OSPF 接口收发包的认证方
式。 <span class="token function">ip</span> ospf cost cost 值 配置 OSPF 接口发送包的权值。 <span class="token function">ip</span> ospf retransmit-interval seconds 属于同一个 OSPF 接口的邻居之间重传 LSA 的秒数。 <span class="token function">ip</span> ospf transmit-delay seconds 配置在一个 OSPF 接口传输 LSA 的估计时间（秒为单位）。 <span class="token function">ip</span> ospf priority number 配置路由器成为 OSPF DR 路由器的优先值。 <span class="token function">ip</span> ospf hello-interval seconds 配置在 OSPF 接口发送 hello 包的时间间隔。 <span class="token function">ip</span> ospf dead-interval seconds 在这个规定的时间间隔内，未收到邻居的 hello 包，则认为 邻居路由器已关机。 <span class="token function">ip</span> ospf password key 为一个网段内的邻接路由的认证口令。它使用 OSPF 的简单的口令认证。 <span class="token function">ip</span> ospf message-digest-key keyid md5 key 要求 OSPF 使用 MD5 认证。 <span class="token function">ip</span> ospf passive 在端口上不发送 HELLO 报文。
<span class="token function">dir</span>
del
<span class="token function">reboot</span>

rou dhcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙热备份" tabindex="-1"><a class="header-anchor" href="#防火墙热备份" aria-hidden="true">#</a> 防火墙热备份</h2><p>防火墙A/B teack judy:建立一个监控组 interface Ethernet 0/0/1 weight 255:监控接口，监控权255 interface Ethernet 0/0/2 weight 255:监控接口，监控权255</p>`,107),c=[l];function t(p,d){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","index.html.vue"]]);export{o as default};
