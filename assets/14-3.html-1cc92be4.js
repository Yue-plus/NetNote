import{_ as e,o as i,c as l,e as d}from"./app-ab31641a.js";const n={},s=d(`<h1 id="dnsv4-v6配置命令" tabindex="-1"><a class="header-anchor" href="#dnsv4-v6配置命令" aria-hidden="true">#</a> DNSv4/v6配置命令</h1><h2 id="clear-dynamic-host" tabindex="-1"><a class="header-anchor" href="#clear-dynamic-host" aria-hidden="true">#</a> <code>clear dynamic-host</code></h2><ul><li>命令： <ul><li><code>clear dynamic-host {&lt;ip-address&gt;|&lt;ipv6-address&gt;|all } </code></li></ul></li><li>功能：删除动态缓存中指定地址的或者所有的域名表项。</li><li>参数：<code>&lt;ip-address&gt;</code>为 IP 地址，点分十进制格式，<code>&lt;ipv6-address&gt;</code>为 IPv6 地址。all 是删除所有的域名地址映射关系。</li><li>命令模式：特权模式。</li><li>缺省情况：缺省为不配置。使用指南：本命令用于手动删除动态域名缓存中的域名和地址表项,当域名在缓存中存活的时间太长时，此命令显得非常有用。</li><li>举例：删除地址为 202.108.22.5 的域名表项。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#clear dynamic-host 202.108.22.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="debug-dns" tabindex="-1"><a class="header-anchor" href="#debug-dns" aria-hidden="true">#</a> <code>debug dns</code></h2><ul><li>命令： <ul><li><code>debug dns {all | packet [send | recv]| events|relay}</code></li><li><code>no debug dns {all | packet [send | recv]| events|relay} </code></li></ul></li><li>功能：显示进行 DNS 域名解析时的应用调试信息，该命令的 no 形式关闭 DEBUG 显示。</li><li>参数：无。</li><li>命令模式：特权模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#debug dns all 
Switch#ping host www.sina.com.cn


%Jan 01 00:03:13 2006 domain name www.sina.com.cn is to be parsed! 
%Jan 01 00:03:13 2006 Dns query type is A!
 %Jan 01 00:03:13 2006 Connect dns server 10.1.120.241 ...... 
 ping www.sina.com.cn [202.108.33.32] 
 Type ^c to abort. 
 Sending 5 56-byte ICMP Echos to 202.108.33.32, timeout is 2 seconds. 
 %Jan 01 00:03:15 2006 Host:www.sina.com.cn      Address:202.108.33.32 

 .....

Success rate is 0 percent (0/5), round-trip min/avg/max = 0/0/0 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns-server" tabindex="-1"><a class="header-anchor" href="#dns-server" aria-hidden="true">#</a> <code>dns-server</code></h2><ul><li>命令： <ul><li><code>dns-server {&lt;ip-address&gt;|&lt;ipv6-address&gt;} [priority &lt;value&gt;]</code></li><li><code>no dns-server {&lt;ip-address&gt;|&lt;ipv6-address&gt;} </code></li></ul></li><li>功能：配置/删除DNS服务器。</li><li>参数： <ul><li><code>&lt;ip-address&gt;</code>为IP地址，点分十进制格式，<code>&lt;ipv6-address&gt;</code>为IPv6地址，\`</li><li><code>&lt;value&gt;</code>为 DNS 服务器的优先级，范围 0～255，默认为 0。\`</li></ul></li><li>命令模式：全局配置模式。</li><li>缺省情况：缺省为不配置。</li><li>使用指南：本命令用于配置/删除 DNS 服务器，当需要进行动态域名解析时，交换机向配置的DNS服务器发出域名查询请求，DNS 服务器最多配置 6 个。其中优先级为可选参数，如果配置了优先级，则按照优先级从大到小的顺序来组织 DNS 服务器，即交换机首先向优先级最大的服务器发送域名查询请求，因此可以把一些查询速度较快、经常使用的 DNS 服务器配置成较高的优先级，以方便查询。如果不配置优先级，则按照配置的先后顺序来查询 DNS 服务器。交换机做为 DNS SERVER 功能时，对DNS SERVER的查询不按照上面的优先级原则，而是统一向所有配置的服务器发送请求。</li><li>举例：配置优先级为 200 的 DNS 服务器 10.1.120.241。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#dns-server 10.1.120.241 priority 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dns-lookup" tabindex="-1"><a class="header-anchor" href="#dns-lookup" aria-hidden="true">#</a> <code>dns lookup</code></h2><ul><li>命令： <ul><li><code>dns lookup {ipv4|ipv6} &lt;hostname&gt; </code></li></ul></li><li>功能：执行DNS动态域名解析。</li><li>参数：<code>{ipv4|ipv6}</code>表示 IPv4 或者 IPv6 地址查询，<code>&lt;hostname&gt;</code>为要解析的动态主机名，最大 63 个字符。</li><li>命令模式：全局配置模式。缺省情况：缺省为不配置。</li><li>使用指南：本命令根据输入的主机名进行相应地址的查询，可以进行 IPv4 或者 IPv6 地址的查询，查询到的域名和对应地址存储在动态缓存中。本命令只是单独为了进行域名解析，没有什么应用功能，命令使用过程中不能进行中断，如果配置多个服务器和域名后缀，在进行域名解析的时候可能要很长时间。</li><li>举例：查询 www.sina.com 的 IPv4 地址。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#dns lookup ipv4 www.sina.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="show-dns-name-server" tabindex="-1"><a class="header-anchor" href="#show-dns-name-server" aria-hidden="true">#</a> <code>show dns name-server</code></h2><ul><li>命令： <ul><li><code>show dns name-server</code></li></ul></li><li>功能：显示配置的 DNS 服务器信息。</li><li>参数：无。命令模式：特权和配置模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#show dns name-server 
DNS NAME SERVER: 
Address                      Priority 
10.1.120.231                   100 
10.1.180.85                    80 
2001::1                        20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-dns-domain-list" tabindex="-1"><a class="header-anchor" href="#show-dns-domain-list" aria-hidden="true">#</a> <code>show dns domain-list</code></h2><ul><li>命令： <ul><li><code>show dns domain-list</code></li></ul></li><li>功能：显示配置的 DNS 域名后缀信息。</li><li>参数：无。命令模式：特权和配置模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#show dns domain-list
DNS DOMAIN LIST: 
com.cn
edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-dns-hosts" tabindex="-1"><a class="header-anchor" href="#show-dns-hosts" aria-hidden="true">#</a> \`show dns hosts</h2><ul><li>命令： <ul><li><code>show dns hosts</code></li></ul></li><li>功能：显示交换机中解析到的动态域名信息。</li><li>参数：无。命令模式：特权和配置模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch# show dns hosts 
Total number of dynamic host is 2 
DNS HOST LIST： 
Hostname                Address              Time to live                   Type 
www.sina.com.cn         202.108.33.32              168000                dynamic 
www.ipv6.org            2001:6b0:1:                168060                dynamic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-dns-config" tabindex="-1"><a class="header-anchor" href="#show-dns-config" aria-hidden="true">#</a> <code>show dns config</code></h2><ul><li>命令： <ul><li><code>show dns config</code></li></ul></li><li>功能：显示交换机中配置的 DNS 全局信息。</li><li>参数：无。</li><li>命令模式：特权和配置模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#show dns config 
ip dns server enable 
ip domain-lookup enable 
the maximum of 
dns client in cache is 3000, timeout is 5 
dns client number in cache is 0
dns dynamic host in cache is 0 
dns name server number is 1 dns domain-list number is 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-dns-client" tabindex="-1"><a class="header-anchor" href="#show-dns-client" aria-hidden="true">#</a> <code>show dns client</code></h2><ul><li>命令： <ul><li><code>show dns client </code></li></ul></li><li>功能：显示交换机中维护的 DNS Client 信息。</li><li>参数：无。命令模式：特权和配置模式。</li><li>举例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#show dns client 
DNS REQUEST LIST: 
Total number of dns request is 2 
Address                 Request Id 
192.168.11.141              1 
192.168.11.138              2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ip-domain-lookup" tabindex="-1"><a class="header-anchor" href="#ip-domain-lookup" aria-hidden="true">#</a> <code>ip domain-lookup</code></h2><ul><li>命令： <ul><li><code>ip domain-lookup no ip domain-lookup </code></li></ul></li><li>功能：启动/关闭 DNS 功能，交换机是否会向真正的 DNS 服务器进行动态的 DNS 域名查询。</li><li>参数：无。</li><li>命令模式：全局配置模式。</li><li>缺省情况：缺省为不配置。</li><li>使用指南：本命令用于启动/关闭交换机 DNS 动态查询功能。当启动 DNS 动态查询功能后，应用工具(如 ping 等)或者交换机作 DNS SERVER 时遇到域名处理时会向配置的 DNS 服务器发送域名解析请求，得到该域名对应的 IPv4/IPv6 地址。关闭该功能后，遇到域名处理时则不再发送域名解析请求，而只在静态配置的域名中查找，即不再执行动态域名解析，如果此时动态域名缓存中存在以前解析到的域名，也不会去删除，也不会去查找，在时间老化后会被自动删除。 举例：启动DNS功能，能够动态解析域名。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#ip domain-lookup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ip-domain-list" tabindex="-1"><a class="header-anchor" href="#ip-domain-list" aria-hidden="true">#</a> <code>ip domain-list</code></h2><ul><li>命令： <ul><li><code>ip domain-list &lt;WORD&gt; no ip domain-list &lt;WORD&gt; </code></li></ul></li><li>功能：配置/删除域名后缀。</li><li>参数：<code>&lt;WORD&gt;</code>为域名后缀字符串，最大 63 个字符。</li><li>命令模式：全局配置模式。缺省情况：缺省为不配置。</li><li>使用指南：本命令用于配置/删除域名后缀，当输入不完整的域名(如 sina )时，交换机自动添加域名后缀以后再进行域名解析，域名后缀最多配置 6 个。其中先配置的域名后缀则先被添加。</li><li>举例：配置域名后缀 com。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#ip domain-list com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ip-dns-server" tabindex="-1"><a class="header-anchor" href="#ip-dns-server" aria-hidden="true">#</a> <code>ip dns server</code></h2><ul><li>命令： <ul><li><code>ip dns server no ip dns server </code></li></ul></li><li>功能：启动/关闭 DNS SERVER 功能。</li><li>参数：无。</li><li>命令模式：全局配置模式。</li><li>缺省情况：缺省为不配置。</li><li>使用指南：当启动了 DNS SERVER 功能后，能够接收处理客户端的 DNS Request，或者本地查找结果或者向真正DNS服务器请求。</li><li>举例：配置交换机启动 dns server 的功能。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#ip dns server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ip-dns-server-queue-maximum" tabindex="-1"><a class="header-anchor" href="#ip-dns-server-queue-maximum" aria-hidden="true">#</a> <code>ip dns server queue maximum</code></h2><ul><li>命令： <ul><li><code>ip dns server queue maximum &lt;1-5000&gt;</code></li><li><code>no ip dns server queue maximum</code></li></ul></li><li>功能：配置交换机缓存客户信息的最大数量。</li><li>参数：<code>&lt;1-5000&gt;</code>可以配置 1－5000 个。</li><li>命令模式：全局配置模式。</li><li>缺省情况：默认是允许 3000 个用户。</li><li>使用指南：当接收客户端的 DNS Request 后，交换机会缓存该客户的信息，但是维护的客户信息数量不能超过配置的最大值，超过该值后，该客户的请求不能被处理。 举例：配置交换机缓存客户信息的最大数量为2000。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#ip dns server queue maximum 2000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cip-dns-server-queue-timeout" tabindex="-1"><a class="header-anchor" href="#cip-dns-server-queue-timeout" aria-hidden="true">#</a> <code>cip dns server queue timeout</code></h2><ul><li>命令： <ul><li><code>ip dns server queue timeout &lt;1-100&gt;</code></li><li><code>no ip dns server queue timeout</code></li></ul></li><li>功能：配置交换机缓存客户信息的最大超时时间。</li><li>参数：<code>&lt;1-100&gt;</code> 可以配置 1－100s 的超时时间。</li><li>命令模式：全局配置模式。</li><li>缺省情况：默认是 5s 的超时时间。</li><li>使用指南：当接收客户端的 DNS Request 后，交换机会缓存该客户的信息，但是维护的客户信息时间不能超过配置的最大超时时间，超时后该客户的信息被清除。</li><li>举例：配置交换机缓存客户信息的最大超时时间为10s。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch(config)#ip dns server queue timeout 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,43),a=[s];function c(r,t){return i(),l("div",null,a)}const u=e(n,[["render",c],["__file","14-3.html.vue"]]);export{u as default};