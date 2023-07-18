import{_ as l,r,o as t,c as d,a as e,b as n,d as s,e as a}from"./app-ab31641a.js";const b="/assets/login-0b498d53.jpg",c={},o=e("h1",{id:"rabbitmq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#"),n(" RabbitMQ")],-1),m={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://www.erlang.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E7%94%B5%E4%BF%A1%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"},_=e("iframe",{src:"//player.bilibili.com/player.html?aid=95396959&bvid=BV1dE411K7MG&cid=163004929&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),g=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),q=e("p",null,"推荐参考官方教程（英文）：",-1),f={href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.rabbitmq.com/install-debian.html",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"debian",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian","aria-hidden":"true"},"#"),n(" Debian")],-1),x=e("p",null,"下载最新 deb 软件包：",-1),E={href:"https://www.erlang-solutions.com/resources/download.html#tabs-debian",target:"_blank",rel:"noopener noreferrer"},M={href:"https://packagecloud.io/rabbitmq/rabbitmq-server",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>将 <code>.deb</code> 软件包上传到 Debian 主机，或在主机上使用 <code>wget</code> 指令下载软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_23.2.1-1~debian~stretch_amd64.deb
<span class="token function">wget</span> --content-disposition https://packagecloud.io/rabbitmq/rabbitmq-server/packages/ubuntu/disco/rabbitmq-server_3.8.11-1_all.deb/download.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下指令安装 ErLang 与 RabbitMQ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg <span class="token parameter variable">--install</span> esl-erlang_23.2.1-1~debian~stretch_amd64.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">--install</span> rabbitmq-server_3.8.11-1_all.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过插件开启 Web 管理界面，并重启 RabbitMQ 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
<span class="token function">sudo</span> systemctl restart rabbitmq-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Q={href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"},B=a('<p><img src="'+b+'" alt="登入"></p><blockquote><p>现代浏览器可能会强制使用 https 链接，可参考 <a href="#%E9%85%8D%E7%BD%AE-ssl-https">配置 &gt; 配置 SSL（https）</a>或暂时使用 IE 浏览器。</p></blockquote><p>参考 <a href="#%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98%E8%B4%A6%E6%88%B7">配置 &gt; 配置管理员账户</a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="配置管理员账户" tabindex="-1"><a class="header-anchor" href="#配置管理员账户" aria-hidden="true">#</a> 配置管理员账户</h3>',5),R=a(`<p>添加用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl add_user <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>密码<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),S={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#add_user",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"rabbitmqctl add_user",-1),I=a(`<p>添加用户标签：</p><ul><li>none 无标签</li><li>management 管理员</li><li>monitoring 监控员</li><li>administrator 超级管理员</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl set_user_tags <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span> administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),L={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#set_user_tags",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"rabbitmqctl set_user_tags",-1),D=a(`<p>赋予所有权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl set_permissions <span class="token parameter variable">-p</span> / <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),P={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#add_user",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"rabbitmqctl set_permissions",-1),C=e("h2",{id:"配置-ssl-https",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置-ssl-https","aria-hidden":"true"},"#"),n(" 配置 SSL（https）")],-1),N={href:"https://www.rabbitmq.com/ssl.html",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"常用指令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用指令","aria-hidden":"true"},"#"),n(" 常用指令")],-1),j={class:"custom-container tip"},O=e("p",{class:"custom-container-title"},"TIP",-1),U={href:"https://www.rabbitmq.com/manpages.html",target:"_blank",rel:"noopener noreferrer"},W=a(`<h3 id="rabbitmqctl-status" tabindex="-1"><a class="header-anchor" href="#rabbitmqctl-status" aria-hidden="true">#</a> <code>rabbitmqctl status</code></h3><p>查询当前 RabbitMQ 状态</p><div class="language-textStatus line-numbers-mode" data-ext="textStatus"><pre class="language-textStatus"><code>Runtime

OS PID: 457
OS: Linux
Uptime (seconds): 178
Is under maintenance?: false
RabbitMQ version: 3.8.11
Node name: rabbit@VM-0-5-debian
Erlang configuration: Erlang/OTP 23 [erts-11.1.5] [source] [64-bit] [smp:1:1] [ds:1:1:10] [async-threads:1] [hipe]
Erlang processes: 441 used, 1048576 limit
Scheduler run queue: 1
Cluster heartbeat timeout (net_ticktime): 60

Plugins

Enabled plugin file: /etc/rabbitmq/enabled_plugins
Enabled plugins:

 * rabbitmq_management
 * amqp_client
 * rabbitmq_web_dispatch
 * cowboy
 * cowlib
 * rabbitmq_management_agent

Data directory

Node data directory: /var/lib/rabbitmq/mnesia/rabbit@VM-0-5-debian
Raft data directory: /var/lib/rabbitmq/mnesia/rabbit@VM-0-5-debian/quorum/rabbit@VM-0-5-debian

Config files


Log file(s)

 * /var/log/rabbitmq/rabbit@VM-0-5-debian.log
 * /var/log/rabbitmq/rabbit@VM-0-5-debian_upgrade.log

Alarms

(none)

Memory

Total memory used: 0.0965 gb
Calculation strategy: rss
Memory high watermark setting: 0.4 of available memory, computed to: 0.3642 gb

code: 0.033 gb (34.25 %)
other_proc: 0.0319 gb (33.06 %)
other_system: 0.0126 gb (13.05 %)
allocated_unused: 0.0066 gb (6.87 %)
reserved_unallocated: 0.0057 gb (5.93 %)
other_ets: 0.0033 gb (3.43 %)
atom: 0.0015 gb (1.51 %)
plugins: 0.0013 gb (1.39 %)
mgmt_db: 0.0002 gb (0.16 %)
binary: 0.0001 gb (0.14 %)
mnesia: 0.0001 gb (0.09 %)
metrics: 0.0001 gb (0.07 %)
msg_index: 0.0 gb (0.03 %)
quorum_ets: 0.0 gb (0.02 %)
connection_other: 0.0 gb (0.0 %)
connection_channels: 0.0 gb (0.0 %)
connection_readers: 0.0 gb (0.0 %)
connection_writers: 0.0 gb (0.0 %)
queue_procs: 0.0 gb (0.0 %)
queue_slave_procs: 0.0 gb (0.0 %)
quorum_queue_procs: 0.0 gb (0.0 %)

File Descriptors

Total: 2, limit: 32671
Sockets: 0, limit: 29401

Free Disk Space

Low free disk space watermark: 0.05 gb
Free disk space: 45.1227 gb

Totals

Connection count: 0
Queue count: 0
Virtual host count: 1

Listeners

Interface: [::], port: 15672, protocol: http, purpose: HTTP API
Interface: [::], port: 25672, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: [::], port: 5672, protocol: amqp, purpose: AMQP 0-9-1 and AMQP 1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq-plugins-list" tabindex="-1"><a class="header-anchor" href="#rabbitmq-plugins-list" aria-hidden="true">#</a> <code>rabbitmq-plugins list</code></h3><p>查询当前插件配置/状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 配置：E = 显示启用；e = 隐式启用
 | 状态：* = 运行于 rabbit@VM-0-5-debian
 |/
[e*] amqp_client                       3.6.6
[  ] cowboy                            1.0.3
[  ] cowlib                            1.0.1
[e*] mochiweb                          2.13.1
[  ] rabbitmq_amqp1_0                  3.6.6
[  ] rabbitmq_auth_backend_ldap        3.6.6
[  ] rabbitmq_auth_mechanism_ssl       3.6.6
[  ] rabbitmq_consistent_hash_exchange 3.6.6
[  ] rabbitmq_event_exchange           3.6.6
[  ] rabbitmq_federation               3.6.6
[  ] rabbitmq_federation_management    3.6.6
[  ] rabbitmq_jms_topic_exchange       3.6.6
[E*] rabbitmq_management               3.6.6
[e*] rabbitmq_management_agent         3.6.6
[  ] rabbitmq_management_visualiser    3.6.6
[  ] rabbitmq_mqtt                     3.6.6
[  ] rabbitmq_recent_history_exchange  1.2.1
[  ] rabbitmq_sharding                 0.1.0
[  ] rabbitmq_shovel                   3.6.6
[  ] rabbitmq_shovel_management        3.6.6
[  ] rabbitmq_stomp                    3.6.6
[  ] rabbitmq_top                      3.6.6
[  ] rabbitmq_tracing                  3.6.6
[  ] rabbitmq_trust_store              3.6.6
[e*] rabbitmq_web_dispatch             3.6.6
[  ] rabbitmq_web_stomp                3.6.6
[  ] rabbitmq_web_stomp_examples       3.6.6
[  ] sockjs                            0.3.4
[e*] webmachine                        1.10.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function G(H,K){const i=r("ExternalLinkIcon");return t(),d("div",null,[o,e("div",m,[u,e("p",null,[n("RabbitMQ 是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。 RabbitMQ 服务器是用 "),e("a",v,[n("Erlang"),s(i)]),n(" 语言编写的，而集群和故障转移是构建在"),e("a",p,[n("开放电信平台"),s(i)]),n("框架上的。 所有主要的编程语言均有与代理接口通讯的客户端库。")]),e("p",null,[e("a",h,[n("RabbitMQ 官方网站"),s(i)])])]),_,g,q,e("ul",null,[e("li",null,[e("a",f,[n("下载与安装 RabbitMQ"),s(i)])]),e("li",null,[e("a",k,[n("在 Debian 或 Ubuntu 中安装 RabbitMQ"),s(i)])])]),w,x,e("ul",null,[e("li",null,[e("a",E,[n("ErLang"),s(i)])]),e("li",null,[e("a",M,[n("RabbitMQ"),s(i)])])]),y,e("p",null,[n("现在可以通过浏览器访问 "),e("a",Q,[n("http://localhost:15672"),s(i)]),n(" 访问 Web 管理界面。")]),B,e("ol",null,[e("li",null,[R,e("p",null,[e("a",S,[n("查看 "),V,n(" 命令"),s(i)])])]),e("li",null,[I,e("p",null,[e("a",L,[n("查看 "),A,n(" 命令"),s(i)])])]),e("li",null,[D,e("p",null,[e("a",P,[n("查看 "),T,n(" 命令"),s(i)])])])]),C,e("p",null,[n("建议参考官方文档 "),e("a",N,[n("TLS 支持（英文）"),s(i)])]),F,e("div",j,[O,e("p",null,[e("a",U,[n("RebbitMQ 手册页面"),s(i)])])]),W])}const J=l(c,[["render",G],["__file","index.html.vue"]]);export{J as default};
