import{_ as s,r as l,o as t,c as r,a as e,b as n,d as i,f as c,e as d}from"./app-ab31641a.js";const o={},p=e("h1",{id:"dhcp-动态主机配置协议",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dhcp-动态主机配置协议","aria-hidden":"true"},"#"),n(" DHCP（动态主机配置协议）")],-1),u={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://datatracker.ietf.org/doc/rfc2131/?include_text=1",target:"_blank",rel:"noopener noreferrer"},v=d(`<p>DHCP 是 BOOTP 协议功能的增强，与 BOOTP 相比，DHCP 是主流技术，它不仅能为无盘工作站提供引导信息，而且在大型的网络中可以大大减轻网络管理员跟踪记录手工分配 IP 地址的负担，同时也能减轻用户的配置任务与花费。</p><p>DHCP 的另外一个优点是可以部分缓解 IP 地址紧张的状况，当某一 IP 地址的用户离开使用环境时，该 IP 地址还能再次分配给其他用户使用。</p><p>DHCP 是基于 Client－Server 模式的协议，DHCP 客户端向 DHCP 服务器索取网络地址及配置参数； 服务器为客户端提供网络地址及配置参数； 当客户端与服务器不在同一子网时，需要由 DHCP 中继为客户端与服务器传递 DHCP 报文。</p><p>DHCP 实现的过程如下：</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
    客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span>发现
    服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span>提供
    客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span>请求
    服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span>确认
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图解：</p><ol><li>首先客户端在本子网内广播 DHCPDISCOVER 包；</li><li>服务器收到 DHCPDISCOVER 包后，给该客户端发送带有 IP 地址与其他网络参数的 DHCPOFFER 包；</li><li>客户端对收到的 DHCPOFFER 包进行选择后，广播带有它要选择的服务器的信息的 DHCPREQUEST 包；</li><li>被客户端选中的服务器向客户端发送 DHCPACK 包，客户端得到 IP 地址与其他网络配置参数。</li></ol><p>通过上面四个步骤，完成动态分配主机配置的协议过程。 但如果服务器与客户端不在同一网络时，服务器是无法收到客户端发出的 DHCP 广播报文，因此服务器也不会给客户端发送任何 DHCP 报文，这时需要 DHCP 中继来转发报文，完成客户端与服务器之间的 DHCP 报文交互过程。 交换机实现了服务器和 DHCP 中继的功能。 服务器不但支持动态分配 IP 地址，还支持手动绑定 IP 地址（即为指定的硬件地址或者指定设备标识的网络设备分配一个固定的长期的 IP 地址）。</p><p>动态分配 IP 地址与手动绑定 IP 地址的区别与联系是：</p><ol><li>采用动态方式获得的 IP 地址可以是不固定的；而采用手动绑定方式获得的 IP 地址是固定的；</li><li>采用动态方式获得的 IP 地址租期与其地址池的租期一致，是有时间限制的；而采用手动绑定方式获得的 IP 地址的租期理论上是无限长时间，即没有时间限制；</li><li>已经动态分配出去的地址，不允许再手动绑定；</li><li>手动 DHCP 地址池可以继承相关网段的动态 DHCP 地址池的网络配置参数。</li></ol><h2 id="dhcp-服务器配置" tabindex="-1"><a class="header-anchor" href="#dhcp-服务器配置" aria-hidden="true">#</a> DHCP 服务器配置</h2>`,11),g={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"TIP",-1),P={href:"http://www.dcnetworks.com.cn/goods/24.html",target:"_blank",rel:"noopener noreferrer"},b=d(`<h3 id="启动-关闭-dhcp-服务功能" tabindex="-1"><a class="header-anchor" href="#启动-关闭-dhcp-服务功能" aria-hidden="true">#</a> 启动/关闭 DHCP 服务功能</h3><p><strong>全局配置模式</strong> 下：</p><ul><li><strong>启用</strong>：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#service dhcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><strong>禁用</strong>：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#no service dhcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="配置-dhcp-地址池" tabindex="-1"><a class="header-anchor" href="#配置-dhcp-地址池" aria-hidden="true">#</a> 配置 DHCP 地址池</h3><p><strong>全局配置模式</strong> 下：</p><ul><li>创建 DHCP 地址池<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#ip dhcp pool &lt;name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>创建 DHCP 地址池<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#no ip dhcp pool &lt;name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,6),D=d(`<h2 id="配置实例" tabindex="-1"><a class="header-anchor" href="#配置实例" aria-hidden="true">#</a> 配置实例</h2><ul><li><p>连接路由器，进入配置模式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI&gt;enable 
S5750E-28C-SI#config terminal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置 Vlan IP:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#interface vlan 1
Nov 12 16:53:26:000 2020 S5750E-28C-SI DEFAULT/5/:%LINK-5-CHANGED: Interface Vlan1, changed state to UP
Nov 12 16:53:26:000 2020 S5750E-28C-SI DEFAULT/5/:%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1,changed state to UP
S5750E-28C-SI(config)#interface vlan 1 
S5750E-28C-SI(config-if-vlan1)#ip address 192.168.100.1 255.255.255.0
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启 DHCP 服务，创建 DHCP 地址池：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(config)#service dhcp
S5750E-28C-SI(config)#ip dhcp pool yueplus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置路由器地址？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(dhcp-yueplus-config)#network-address 192.168.100.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置路由器默认网关</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(dhcp-yueplus-config)#default-router 192.168.100.254
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置默认 DNS 服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(dhcp-yueplus-config)#dns-server 8.8.8.8 8.8.4.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将 DHCP 服务器设为“先点对点后广播的混合型”？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>S5750E-28C-SI(dhcp-yueplus-config)#netbios-node-type h-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>保存配置</p></li></ul><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接" aria-hidden="true">#</a> 相关链接</h2>`,3),x={href:"https://baike.baidu.com/item/DHCP/218195?fr=aladdin",target:"_blank",rel:"noopener noreferrer"};function H(f,I){const a=l("ExternalLinkIcon");return t(),r("div",null,[p,e("div",u,[m,e("p",null,[n("DHCP（Dynamic Host Configuration Protocol）"),e("sup",null,[e("a",h,[n("RFC2131"),i(a)])]),n(" 是动态主机配置协议的简写，它能从地址池中把 IP 地址动态分配给请求的主机，同时也能够提供其它网络配置参数，如：缺省网关、DNS服务器、域名与网络范围内主机映像文件的位置等。")])]),v,e("div",g,[C,e("p",null,[n("使用设备： "),e("a",P,[n("DCN S5750E 系列绿色智能万兆安全汇聚接入交换机"),i(a)])])]),b,c(`
### 配置动态 DHCP 地址池的参数

**DHCP 地址池配置模式** 下：

\`\`\`text

\`\`\`

## 相关命令

### [DHCP 配置命令](./command/DHCP.md)

#### DHCP服务器配置命令

- [bootfile](./command/DHCP.html#bootfile)
- [clear ip dhcp binding](./command/DHCP.html#clear-ip-dhcp-binding)
- [clear ip dhcp conflict](./command/DHCP.html#clear-ip-dhcp-conflict)
- [clear ip dhcp server statistics](./command/DHCP.html#clear-ip-dhcp-server-statistics)
- [client-identifier](./command/DHCP.html#)
- [debug ip dhcp client](./command/DHCP.html#)
- [debug ip dhcp relay](./command/DHCP.html#)
- [debug ip dhcp server](./command/DHCP.html#)
- [default-router](./command/DHCP.html#)
- [dns-server](./command/DHCP.html#)
- [domain-name](./command/DHCP.html#)
- [hardware-address](./command/DHCP.html#)
- [host]()
`),D,e("ul",null,[e("li",null,[e("a",x,[n("DHCP - 百度百科"),i(a)])])])])}const S=s(o,[["render",H],["__file","07_DHCP.html.vue"]]);export{S as default};
