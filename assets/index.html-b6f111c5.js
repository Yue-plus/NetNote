import{_ as l,r as d,o,c,a as e,b as n,d as a,w as h,f as i,e as t}from"./app-ab31641a.js";const p="/assets/rj45-50bb4317.jpg",u="/assets/crt-01-86f85980.jpg",g="/assets/crt-02-151239c2.jpg",b="/assets/telnet-355b26fc.jpg",v="/assets/config_ipv4-b80f9545.jpg",m="/assets/web-01-3c5002c9.jpg",k="/assets/web-02-1c689349.jpg",_="/img/book/《计算机网络-自顶向下方法》.jpg",f={},w=e("h1",{id:"网络基础",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网络基础","aria-hidden":"true"},"#"),n(" 网络基础")],-1),x=e("h2",{id:"常用软件下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用软件下载","aria-hidden":"true"},"#"),n(" 常用软件下载")],-1),C={href:"https://www.vandyke.com/cgi-bin/releases.php?product=securecrt",target:"_blank",rel:"noopener noreferrer"},S={href:"http://www.z-tek.com.cn/index.php?catid=13",target:"_blank",rel:"noopener noreferrer"},I=t('<h2 id="网线接法" tabindex="-1"><a class="header-anchor" href="#网线接法" aria-hidden="true">#</a> 网线接法</h2><p><img src="'+p+'" alt="rj45"></p><h2 id="使用设备列表" tabindex="-1"><a class="header-anchor" href="#使用设备列表" aria-hidden="true">#</a> 使用设备列表</h2>',3),P={href:"http://www.dcnetworks.com.cn/goods/43.html",target:"_blank",rel:"noopener noreferrer"},N={href:"http://www.dcnetworks.com.cn/goods/24.html",target:"_blank",rel:"noopener noreferrer"},E=e("ul",null,[e("li",null,"开机时间：约 4m35s")],-1),D={href:"http://www.dcnetworks.com.cn/goods/148.html",target:"_blank",rel:"noopener noreferrer"},L={href:"http://www.dcnetworks.com.cn/goods/131.html",target:"_blank",rel:"noopener noreferrer"},B={href:"http://www.dcnetworks.com.cn/goods/146.html",target:"_blank",rel:"noopener noreferrer"},A={href:"http://www.dcnetworks.com.cn/goods/26.html",target:"_blank",rel:"noopener noreferrer"},T=t('<h2 id="使用-securecrt" tabindex="-1"><a class="header-anchor" href="#使用-securecrt" aria-hidden="true">#</a> 使用 SecureCRT</h2><p>从<a href="#%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD">常用软件下载</a>，前往官网下载并安装 SecureCRT 软件（可免费试用 30 天）与串口转 USB 口线驱动。</p><h3 id="连接网络设备" tabindex="-1"><a class="header-anchor" href="#连接网络设备" aria-hidden="true">#</a> 连接网络设备</h3><p>协议（Protocol）一般为 <code>Serial</code>。 波特率（Baud rate）一般为 <code>9600</code> 或 <code>115200</code></p><p><img src="'+u+`" alt="crt-01"></p><h3 id="设置中文" tabindex="-1"><a class="header-anchor" href="#设置中文" aria-hidden="true">#</a> 设置中文</h3><p>在网络设备上输入以下指令切换到中文帮助：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>language chinese
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 SecureCRT 软件的文本编码为 <code>简体中文 GB2312</code>，<strong>防止乱码</strong>：</p><p><img src="`+g+`" alt="crt-02"></p><h2 id="使用-cli-进行配置管理" tabindex="-1"><a class="header-anchor" href="#使用-cli-进行配置管理" aria-hidden="true">#</a> 使用 CLI 进行配置管理</h2><h3 id="配置模式介绍" tabindex="-1"><a class="header-anchor" href="#配置模式介绍" aria-hidden="true">#</a> 配置模式介绍</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD
  A<span class="token text string">[&quot;一般用户配置模式&quot;]</span>
  <span class="token arrow operator">--&gt;</span><span class="token label property">|&quot;&gt; enable&quot;|</span>B<span class="token text string">[&quot;特权用户配置模式&quot;]</span>
  <span class="token arrow operator">--&gt;</span><span class="token label property">|&quot;# config&quot;|</span>C<span class="token text string">[&quot;全局配置模式&quot;]</span>
  C<span class="token arrow operator">--&gt;</span>C1<span class="token text string">[&quot;接口配置模式&quot;]</span>
  C<span class="token arrow operator">--&gt;</span>C2<span class="token text string">[&quot;VLAN 配置模式&quot;]</span><span class="token punctuation">;</span>
  C<span class="token arrow operator">--&gt;</span>C3<span class="token text string">[&quot;DHCP 地址池配置模式&quot;]</span><span class="token punctuation">;</span>
  C<span class="token arrow operator">--&gt;</span>C4<span class="token text string">[&quot;路由配置模式&quot;]</span><span class="token punctuation">;</span>
  C<span class="token arrow operator">--&gt;</span>C5<span class="token text string">[&quot;访问列表配置模式&quot;]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一般用户模式" tabindex="-1"><a class="header-anchor" href="#一般用户模式" aria-hidden="true">#</a> 一般用户模式</h4><p>进入 CLI 界面，首先进入的就是 <strong>一般用户模式</strong>，提示符为 <code>Switch&gt;</code>，符号 <code>&gt;</code> 为 <strong>一般用户模式</strong> 的提示符。 当从 <strong>特权用户模式</strong> 使用命令 <code>exit</code> 退出时，可以回到一般用户模式。</p><h4 id="特权用户模式" tabindex="-1"><a class="header-anchor" href="#特权用户模式" aria-hidden="true">#</a> 特权用户模式</h4><p>在 <strong>一般用户模式</strong> 使用 <code>enable</code> 命令，如果已经配置了进入特权用户的口令，则输入相应的特权用户口令，即可进入 <strong>特权用户模式</strong> “Switch#”。 当从 <strong>全局配置模式</strong> 使用 <code>exit</code> 退出时，也可以回到 <strong>特权用户模式</strong>。 另外交换机提供 <kbd>Ctrl</kbd> + <kbd>z</kbd> 的快捷键，使得交换机在任何配置模式（一般用户模式除外），都可以退回到 <strong>特权用户模式</strong>。</p><p>在 <strong>特权用户模式</strong> 下，可以查询交换机配置信息、各个端口的连接情况、收发数据统计等。 而且进入 <strong>特权用户模式</strong> 后，可以进入到全局模式对交换机的各项配置进行修改，因此进入 <strong>特权用户模式</strong> 后必须要设置特权用户口令，防止非特权用户的非法使用，对交换机配置进行恶意修改，造成不必要的损失。</p><h4 id="全局配置模式" tabindex="-1"><a class="header-anchor" href="#全局配置模式" aria-hidden="true">#</a> 全局配置模式</h4><p>进入 <strong>特权用户模式</strong> 后，只需使用命令 <code>config</code>，即可进入 <strong>全局配置模式</strong> <code>Switch(config)#</code>。 当在其他配置模式，如接口配置模式、VLAN 配置模式时，可以使用命令 <code>exit</code> 退回到全局配置模式。</p><p>在 <strong>全局配置模式</strong> 可以对交换机进行全局性的配置，如对 MAC 地址表、端口镜像、创建 VLAN、启动 IGMP Snooping、STP 等。 在 <strong>全局配置模式</strong> 还可通过命令进入到接口配置模式对各个接口进行配置。</p><h5 id="接口配置模式" tabindex="-1"><a class="header-anchor" href="#接口配置模式" aria-hidden="true">#</a> 接口配置模式</h5><p>在全局配置模式，使用命令 <code>interface</code> 就可以进入到相应的接口配置模式。 交换机操作系统提供了三种端口类型，因此有三种接口的配置模式：</p><ol><li><p><strong>VLAN 接口</strong></p><ul><li>在 <strong>全局配置模式</strong> 下，输入命令：<code>interface vlan &lt;Vlan-id&gt;</code></li><li>可配置交换机的 IP 等</li></ul></li><li><p><strong>以太网端口</strong></p><ul><li>在 <strong>全局配置模式</strong> 下，输入命令：<code>interface ethernet &lt;interface-list&gt;</code></li><li>可配置交换机提供的以太网接口的双工模式、速率等</li></ul></li><li><p><strong>port-channel</strong></p><ul><li>在 <strong>全局配置模式</strong> 下，输入命令：<code>interface port-channel &lt;port-channel-number&gt;</code></li><li>可配置 port-channel 有关的双工模式、速率等。</li></ul></li></ol><p><em><strong>使用 <code>exit</code> 命令退回全局配置模式</strong></em></p><h5 id="vlan-配置模式" tabindex="-1"><a class="header-anchor" href="#vlan-配置模式" aria-hidden="true">#</a> VLAN 配置模式</h5><p>在 <strong>全局配置模式</strong>，使用命令 <code>vlan &lt;vlan-id&gt;</code> 就可以进入到相应的 VLAN 配置模式。 在 <strong>VLAN 配置模式</strong>，可以配置属于本 VLAN 的成员端口。 执行 <code>exit</code> 命令即可从 VLAN 配置模式退回到全局配置模式。</p><h5 id="dhcp-地址池配置模式" tabindex="-1"><a class="header-anchor" href="#dhcp-地址池配置模式" aria-hidden="true">#</a> DHCP 地址池配置模式</h5><p>在 <strong>全局配置模式</strong> 下用 <code>ip dhcp pool &lt;name&gt;</code> 命令进入到 <strong>DHCP 地址池配置模式</strong> <code>Switch(Config-&lt;name&gt;-dhcp)#</code>。 在 <strong>DHCP 地址池配置模式</strong> 下可以配置 DHCP 地址池的属性。 执行 <code>exit</code> 命令即可从 DHCP 地址池配置模式退回到全局配置模式。</p><h5 id="路由配置模式" tabindex="-1"><a class="header-anchor" href="#路由配置模式" aria-hidden="true">#</a> 路由配置模式</h5><ul><li><p><strong>RIP 路由协议</strong></p><ul><li>在全局配置模式下输入 <code>router rip</code> 命令，可配置 RIP 协议参数</li></ul></li><li><p><strong>OSPF 路由协议</strong></p><ul><li>在全局配置模式下输入 <code>router ospf</code> 命令，可配置 OSPF 协议参数</li></ul></li><li><p><strong>BGP 路由协议</strong></p><ul><li>在全局配置模式下输入 <code>router bgp &lt;AS number&gt;</code> 命令，可配置 BGP 协议参数</li></ul></li></ul><p><em><strong>使用 <code>exit</code> 命令退回全局配置模式</strong></em></p><h5 id="访问列表配置模式" tabindex="-1"><a class="header-anchor" href="#访问列表配置模式" aria-hidden="true">#</a> 访问列表配置模式</h5><ul><li><p><strong>命名标准 IP 访问列表配置模式</strong></p><ul><li>在全局配置模式下输入 <code>ipaccess-list standard</code> 命令，可配置扩展访问列表配置模式。</li></ul></li><li><p><strong>命名扩展 IP 访问列表配置模式</strong></p><ul><li>在全局配置模式下输入 <code>ipaccess-list extanded</code> 命令，可配置扩展访问列表配置模式。</li></ul></li></ul><p><em><strong>使用 <code>exit</code> 命令退回全局配置模式</strong></em></p><h3 id="cli-配置语法" tabindex="-1"><a class="header-anchor" href="#cli-配置语法" aria-hidden="true">#</a> CLI 配置语法</h3><p>交换机提供的配置命令形式不完全一样，但都遵循交换机配置命令的语法。 以下是交换机提供的通用命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cmdtxt &lt;variable&gt; {enum1 | … | enumN} [option1 | … | optionN]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法说明：</p><ul><li><code>cmdtxt</code> 表示命令关键字</li><li><code>&lt;variable&gt;</code> 表示参数为变量</li><li><code>{enum1 | … |enumN }</code> 表示在参数集 enum1 ~ enumN 中必须选一个参数</li><li><code>[option1 | … | optionN]</code> 表示该参数可选择一个或者不选</li></ul><p>在各种命令中还会出现 <code>&lt; &gt;</code>、<code>{ }</code>、<code>[ ]</code> 符号的组合使用，如：</p><p><code>[&lt;variable&gt;]</code>、<code>{enum1 &lt;variable&gt; | enum2}</code>、<code>[option1 [option2]]</code> 等等。</p><p>下面是几种配置命令语法的具体分析：</p><ul><li><code>show version</code>，没有任何参数，属于只有关键字没有参数的命令，直接输入命令即可；</li><li><code>vlan &lt;vlan-id&gt;</code>，输入关键字后，还需要输入相应的参数值；</li><li><code>firewall {enable | disable}</code>，此类命令用户可以输入 <code>firewall enable</code> 或者 <code>firewall disable</code>；</li><li><code>snmp-server community {ro | rw} &lt;string&gt;</code>，出现以下几种输入情况： <ul><li><code>snmp-server community ro &lt;string&gt;</code></li><li><code>snmp-server community rw &lt;string&gt;</code></li></ul></li></ul><h3 id="键盘快捷键" tabindex="-1"><a class="header-anchor" href="#键盘快捷键" aria-hidden="true">#</a> 键盘快捷键</h3><p>交换机为方便用户的配置，特别提供了多个快捷键，如上、下、左、右键（方向键）及删除键 <kbd>BackSpace</kbd> 等。 如果超级终端不支持上下光标键的识别，可以使用 <kbd>Ctrl</kbd> + <kbd>P</kbd> 与 <kbd>Ctrl</kbd> + <kbd>N</kbd> 来替代。</p><ul><li><p><kbd>BackSpace</kbd>（删除键）</p><ul><li>删除光标所在位置的前一个字符，光标前移</li></ul></li><li><p><kbd>↑</kbd> | <kbd>↓</kbd>（上下方向键）或 <kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>N</kbd></p><ul><li>翻找曾经使用过的命令（最多记录 20 条）</li></ul></li><li><p><kbd>←</kbd> | <kbd>→</kbd>（左右方向键）或 <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>F</kbd></p><ul><li>左右移动光标，可用于修改当前输入的命令</li></ul></li><li><p><kbd>Ctrl</kbd> + <kbd>Z</kbd></p><ul><li>从其他配置模式（一般用户配置模式除外）直接退回到特权用户模式</li></ul></li><li><p><kbd>Ctrl</kbd> + <kbd>C</kbd></p><ul><li>打断交换机 ping 或其它正在执行的命令进程</li></ul></li><li><p><kbd>Tab</kbd></p><ul><li>自动补全命令</li></ul></li></ul><h3 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h3><ul><li><code>help</code><ul><li>在任一命令模式下，输入 <code>help</code> 命令均可获取有关帮助系统的简单描述。</li></ul></li><li><code>?</code><ul><li>在任一命令模式下，输入 <code>?</code> 获取该命令模式下的所有命令及其简单描述</li><li>在命令的关键字后，输入以空格分隔的 <code>?</code>，若该位置是参数，会输出该参数类型、范围等描述； 若该位置是关键字，则列出关键字的集合及其简单描述； 若输出 <code>&lt;cr&gt;</code> ，则此命令已输入完整，在该处键入回车即可执行命令；</li><li>在字符串后紧接着输入 <code>?</code>，会列出以该字符串开头的所有命令</li></ul></li></ul><h3 id="不完全匹配指令-缺省指令" tabindex="-1"><a class="header-anchor" href="#不完全匹配指令-缺省指令" aria-hidden="true">#</a> 不完全匹配指令（缺省指令）</h3><p>交换机的 Shell 支持不完全匹配的搜索命令与关键字，当输入无冲突的命令或关键字时，Shell 就会正确解析。</p><p>例如：</p><ul><li>对特权用户配置命令 <code>show interface ethernet 1/0/1</code>，只要输入 <code>sh in e 1/0/1</code> 即可。</li><li>对特权用户配置命令 <code>show running-config</code>，如果仅输入 <code>sh r</code>，系统会报 <code>&gt;Ambiguous command!</code>，因为 Shell 无法区分 <code>show r</code> 是 <code>show radius</code> 命令还是 <code>show running-config</code> 命令，因此必须输入 <code>sh ru</code>，Shell 才能正确的解析。</li></ul><h2 id="使用-telnet-管理" tabindex="-1"><a class="header-anchor" href="#使用-telnet-管理" aria-hidden="true">#</a> 使用 <code>telnet</code> 管理</h2><h3 id="交换机开启-telnet-功能" tabindex="-1"><a class="header-anchor" href="#交换机开启-telnet-功能" aria-hidden="true">#</a> 交换机开启 <code>telnet</code> 功能</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI&gt;enable 
S5750E-28C-SI#config 
S5750E-28C-SI(config)#telnet-server enable 
Telnet server has been already enabled.
S5750E-28C-SI(config)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启-windows-telnet-客户端" tabindex="-1"><a class="header-anchor" href="#开启-windows-telnet-客户端" aria-hidden="true">#</a> 开启 Windows <code>Telnet</code> 客户端</h3><p><img src="`+b+`" alt="开启 Windows  客户端"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet <span class="token punctuation">[</span>-a<span class="token punctuation">]</span><span class="token punctuation">[</span>-e escape char<span class="token punctuation">]</span><span class="token punctuation">[</span>-f log file<span class="token punctuation">]</span><span class="token punctuation">[</span>-l user<span class="token punctuation">]</span><span class="token punctuation">[</span>-t term<span class="token punctuation">]</span><span class="token punctuation">[</span>host <span class="token punctuation">[</span>port<span class="token punctuation">]</span><span class="token punctuation">]</span>
 <span class="token parameter variable">-a</span>      企图自动登录。除了用当前已登陆的用户名以外，与 <span class="token parameter variable">-l</span> 选项相同。
 <span class="token parameter variable">-e</span>      跳过字符来进入 telnet 客户端提示。
 <span class="token parameter variable">-f</span>      客户端登录的文件名
 <span class="token parameter variable">-l</span>      指定远程系统上登录用的用户名。
         要求远程系统支持 TELNET ENVIRON 选项。
 <span class="token parameter variable">-t</span>      指定终端类型。
         支持的终端类型仅是: vt100, vt52, ansi 和 vtnt。
 <span class="token function">host</span>    指定要连接的远程计算机的主机名或 IP 地址。
 port    指定端口号或服务名。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-telnet-客户端管理交换机" tabindex="-1"><a class="header-anchor" href="#使用-telnet-客户端管理交换机" aria-hidden="true">#</a> 使用 <code>telnet</code> 客户端管理交换机</h3><p>先配置好交换机 DHCP 服务，<strong>或者</strong> 配置本机 IP 地址：</p><p><img src="`+v+`" alt="配置本地 IP"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet <span class="token number">192.168</span>.1.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-telnet line-numbers-mode" data-ext="telnet"><pre class="language-telnet"><code>login:admin
Password:*****
S5750E-28C-SI#help
命令行系统提供了先进的帮助手段.  当需要帮助时,
任何时候都可以在命令行中输入 &#39;?&#39;寻求帮助.

如果没有可匹配的内容, 则帮助提示为空, 需要输入其它信息直到
输入 &#39;?&#39; 显示匹配内容.
帮助信息有两种风格:
1. 当输入一个命令参数时(例如&#39;show ?&#39;), 可以得到全部的帮助信息,
   帮助信息中列举了所有可能的参数.
2. 当希望知道哪些参数与输入字符匹配,则可以输入参数的部分字符,
   (如&#39;show ve?&#39;), 则可以获得部分的帮助信息.

S5750E-28C-SI#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用网页管理" tabindex="-1"><a class="header-anchor" href="#使用网页管理" aria-hidden="true">#</a> 使用网页管理</h2><p>通过网页管理交换机的 <strong>必要条件</strong>：</p><ol><li>交换机配置IPv4/IPv6 地址；</li><li>作为客户端的主机 IPv4/IPv6 地址与其所属交换机的 VLAN 接口的 IPv4/IPv6 地址在相同网段；</li><li>若不满足第 2 条，那么客户端可以通过路由器等设备到达交换机某个IPv4/IPv6 地址。 与 Telnet 用户登录交换机类似，只要主机能够 ping/ping6 通交换机的 IPv4/IPv6 地址，并且输入正确的登录口令，该主机就可通过 HTTP 访问交换机。</li></ol><h3 id="启动交换机的-http-server-功能" tabindex="-1"><a class="header-anchor" href="#启动交换机的-http-server-功能" aria-hidden="true">#</a> 启动交换机的 HTTP Server 功能</h3><p>参考 <a href="#%E4%BD%BF%E7%94%A8-cli-%E8%BF%9B%E8%A1%8C%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86">使用 CLI 进行配置管理</a>，使用 <code>ip http server</code> 指令开启 Web Server 功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI&gt;enable 
S5750E-28C-SI#config terminal 
S5750E-28C-SI(config)#ip http server 
web server has worked
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置管理员用户" tabindex="-1"><a class="header-anchor" href="#设置管理员用户" aria-hidden="true">#</a> 设置管理员用户</h3><p>登录到 Web 的配置界面，需要输入正确的用户名和口令，否则交换机将拒绝该 HTTP 访问。 该项措施是为了保护交换机免受非授权用户的非法操作。 若交换机没有设置授权 Web 用户，则任何用户都无法进入交换机的 Web 配置界面。</p><p>因此在允许 Web 方式管理交换机时，必须在 Console 方式下的全局配置模式下使用命令 <code>username &lt;username&gt; privilege &lt;privilege&gt; [password (0 | 7)&lt;password&gt;]</code> 为交换机设置 Web 授权用户和口令并使用命令 <code>authentication line web login local</code> 打开本地验证方式，其中 <code>privilege</code> 选项必须存在且为15。</p><p>如交换机的授权用户名为 admin，口令为明文的 admin，设置方式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch&gt;enable
Switch#config
Switch(config)#username admin privilege 15 password 0 admin
Switch(config)#authentication line web login local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器访问配置页面" tabindex="-1"><a class="header-anchor" href="#浏览器访问配置页面" aria-hidden="true">#</a> 浏览器访问配置页面</h3>`,76),q={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP",-1),R={href:"http://192.168.100.1/",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[n("在使用 IPv6 地址访问交换机时，推荐使用 Firefox 浏览器，版本在 1.5 以上，比如交换机的 IPv6 地址为 "),e("code",null,"3ffe:506:1:2::3"),n("，在地址处输入交换机的 IPv6 地址 "),e("code",null,"http://[3ffe:506:1:2::3]"),n("，地址需要用方括号括起来。")],-1),W=e("p",null,[e("img",{src:m,alt:"web01"})],-1),j=e("p",null,[e("img",{src:k,alt:"web02"})],-1),H=e("h2",{id:"设备恢复出厂设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#设备恢复出厂设置","aria-hidden":"true"},"#"),n(" 设备恢复出厂设置")],-1),F={id:"dcn-s5750e-系列绿色智能万兆安全汇聚接入交换机",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#dcn-s5750e-系列绿色智能万兆安全汇聚接入交换机","aria-hidden":"true"},"#",-1),O={href:"http://www.dcnetworks.com.cn/goods/24.html",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI&gt;enable
S5750E-28C-SI#set default 
Are you sure? [Y/N] = y
S5750E-28C-SI#write
Nov 03 14:56:20:000 2020 S5750E-28C-SI MODULE_CONFIG_SHELL/3/:Switch configuration has been set default!
NULL(factory config) will be used as the startup-config file on member 1, slot 1 at the next time!
S5750E-28C-SI#reload
Process with reboot? [Y/N] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),M={id:"dcn-dcr-2655-模块化路由器",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#dcn-dcr-2655-模块化路由器","aria-hidden":"true"},"#",-1),Y={href:"http://www.dcnetworks.com.cn/goods/131.html",target:"_blank",rel:"noopener noreferrer"},Z=t(`<p>删除 <code>startup-config</code> 文件即恢复出厂设置，<code>delete</code> 命令默认为删除该文件。</p><p>进入 CLI 界面，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Router&gt;enable 
Router#Jan  1 01:07:18 Unknown user enter privilege mode from console 0, level = 15

Router#delete 
this file will be erased,are you sure?(y/n)y
Router#
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),J={id:"dcn-dcws-6028-无线控制器",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#dcn-dcws-6028-无线控制器","aria-hidden":"true"},"#",-1),Q={href:"http://www.dcnetworks.com.cn/goods/120.html",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,[n("在开机（能进入配置 CLI）后，用回形针戳下一 "),e("strong",null,"RST"),n(" 孔。")],-1),$=e("h2",{id:"推荐阅读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐阅读","aria-hidden":"true"},"#"),n(" 推荐阅读")],-1),ee={href:"https://book.douban.com/subject/30280001/",target:"_blank",rel:"noopener noreferrer"},ne=e("ul",null,[e("li",null,[e("img",{src:_,alt:"《计算机网络 - 自顶向下方法》"})])],-1);function ae(se,te){const s=d("ExternalLinkIcon"),r=d("RouterLink");return o(),c("div",null,[w,x,e("ul",null,[e("li",null,[e("a",C,[n("SecureCRT（配置终端软件）"),a(s)])]),e("li",null,[e("a",S,[n("Z-TEK 官网（串口转 USB 口线驱动）"),a(s)])])]),I,e("ul",null,[e("li",null,[e("a",P,[n("DCN S4600 系列全千兆绿色智能安全接入交换机"),a(s)])]),e("li",null,[e("a",N,[n("DCN S5750E 系列绿色智能万兆安全汇聚接入交换机"),a(s)]),E]),e("li",null,[e("a",D,[n("DCN DCFW-1800E-N3002-Pro下一代防火墙"),a(s)])]),e("li",null,[e("a",L,[n("DCN DCR-2655 模块化路由器"),a(s)])]),e("li",null,[e("a",B,[n("DCN DCWS-6028 有线无线智能一体化控制器"),a(s)])]),e("li",null,[e("a",A,[n("DCN WL8200-I2 室内放装型无线AP"),a(s)])])]),e("blockquote",null,[e("p",null,[a(r,{to:"/serve/VM/Cloud/"},{default:h(()=>[n("DCC-CRL 1000 云服务实训平台")]),_:1})])]),T,e("div",q,[V,e("p",null,[n("当前配置页面 "),e("a",R,[n("http://192.168.100.1/"),a(s)])])]),y,W,j,H,i(`
### [DCN S4600 系列全千兆绿色智能安全接入交换机](http://www.dcnetworks.com.cn/goods/43.html)
`),e("h3",F,[G,n(),e("a",O,[n("DCN S5750E 系列绿色智能万兆安全汇聚接入交换机"),a(s)])]),U,i(" ### [DCN DCFW-1800E-N3002-Pro下一代防火墙](http://www.dcnetworks.com.cn/goods/148.html) "),e("h3",M,[z,n(),e("a",Y,[n("DCN DCR-2655 模块化路由器"),a(s)])]),Z,e("h3",J,[K,n(),e("a",Q,[n("DCN DCWS-6028 无线控制器"),a(s)])]),X,i(" ### [DCN WL8200-I2 室内放装型无线AP](http://www.dcnetworks.com.cn/goods/26.html) "),$,e("ul",null,[e("li",null,[e("a",ee,[n("《计算机网络 - 自顶向下方法》"),a(s)]),ne])])])}const de=l(f,[["render",ae],["__file","index.html.vue"]]);export{de as default};