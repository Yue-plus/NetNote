import{_ as n,o as s,c as e,e as a}from"./app-ab31641a.js";const i={},c=a(`<h1 id="路由器配置" tabindex="-1"><a class="header-anchor" href="#路由器配置" aria-hidden="true">#</a> 路由器配置</h1><p>##路由器基本配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router<span class="token operator">&gt;</span> <span class="token builtin class-name">enable</span>
Router<span class="token comment"># config</span>
Router_config<span class="token comment"># int f 0/0</span>
Router_config_f0/0<span class="token comment"># ip address 10.1.1.1 255.255.255.0  /*配置路由器端口地址*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器telnet登录" tabindex="-1"><a class="header-anchor" href="#路由器telnet登录" aria-hidden="true">#</a> 路由器Telnet登录：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># ip telnet access-class [策略名] /*设定telnet使用ACL过滤*/</span>
Router_config<span class="token comment"># username admin password 0 admin /*创建用户名与密码*/</span>
Router_config<span class="token comment"># enable password 0 enable /*设定enable密码*/</span>
Router_config<span class="token comment"># aaa authen enable def enable /*设定enable密码验证方式*/</span>
Router_config<span class="token comment"># aaa authen login def local /*设定用户名本地认证*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器ssh登录" tabindex="-1"><a class="header-anchor" href="#路由器ssh登录" aria-hidden="true">#</a> 路由器SSH登录:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># ip sshd enable  /*开启SSH登录*/</span>
Router_config<span class="token comment"># ip sshd access-class [策略名]  /*设定SSH使用ACL过滤*/</span>
Router_config<span class="token comment"># username admin password 0 admin  /*创建用户名与密码*/</span>
Router_config<span class="token comment"># enable password 0 enable  /*设定enable密码*/</span>
Router_config<span class="token comment"># aaa authen enable def enable  /*设定enable密码验证方式*/</span>
Router_config<span class="token comment"># aaa authen login def local  /*设定用户名本地认证*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器静态路由" tabindex="-1"><a class="header-anchor" href="#路由器静态路由" aria-hidden="true">#</a> 路由器静态路由：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># ip route 10.1.2.0  (目标网段) 255.255.255.0（子网掩码） 10.1.1.2（转发地址）</span>
Router_config<span class="token comment"># ip route 0.0.0.0 (目标网段) 0.0.0.0（子网掩码） 10.1.1.2（转发地址）/*默认静态路由*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器rip动态路由" tabindex="-1"><a class="header-anchor" href="#路由器rip动态路由" aria-hidden="true">#</a> 路由器RIP动态路由:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># router rip  /*创建并启用 RIP路由*/</span>
Router_config_rip<span class="token comment"># version 2  /*设置RIP路由版本号 2*/</span>
Router_config_rip<span class="token comment"># no auto-summary  /*关闭路由自动汇总功能*/</span>
Router_config_rip<span class="token comment"># network 10.1.1.0 255.255.255.0  /*宣告网段*/</span>
Router_config_rip<span class="token comment"># network 10.1.2.0 255.255.255.0</span>
Router_config_rip<span class="token comment"># redistribute connect  /*引入直连路由*/</span>
Routter_config_rip<span class="token comment"># default-information originate  /*下发默认路由*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器ospf动态路由" tabindex="-1"><a class="header-anchor" href="#路由器ospf动态路由" aria-hidden="true">#</a> 路由器OSPF动态路由：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># router ospf 1  /*启动 ospf进程 进程号为 1*/</span>
Router_config_ospf_1<span class="token comment"># router-id 1.1.1.1   /*设置路由router-id*/</span>
Router_config_ospf_1<span class="token comment"># netword 10.1.1.0 255.255.255.0 ar 0  /*宣告网段*/</span>
Router_config_ospf_1<span class="token comment"># network 10.1.2.0 255.255.255.0 ar 0  /*区域号为 0 */</span>
Router_config_ospf<span class="token comment"># redistribute connect  /*引入直连路由*/</span>
Router_config_ospf<span class="token comment"># default-information originate  /*下发默认路由*/</span>
Router_config<span class="token comment"># int g 0/3   /*进入G0/3端口*/</span>
Router_config_ospf<span class="token comment"># area X[区域号] virtual-link X.X.X.X[对端路由ID]  /*设定虚链路*/</span>
Router_config_g0/3<span class="token comment"># ip ospf priority 0  /*设置不参与OSPF选举*/</span>
Router_config_g0/3<span class="token comment"># ip ospf passive  /*设置为被动接口,不发送更新报文*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器单臂路由" tabindex="-1"><a class="header-anchor" href="#路由器单臂路由" aria-hidden="true">#</a> 路由器单臂路由:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Router_config<span class="token comment"># int g 0/3.1  /*进入G0/3的子端口1*/</span>
Router_config_g0/3.1<span class="token comment"># encapsulation dot1q 10  /*配置为802.1Q局域网*/</span>
Router_config_g0/3.1<span class="token comment"># ip address 192.168.10.1 255.255.255.0  /*绑定IP地址*/</span>
Router_config_g0/3.1<span class="token comment"># no shut   /*非关闭*/</span>
Router_config<span class="token comment"># int g 0/3.2   /*进入G0/3的子端口2*/</span>
Router_config_g0/3.2<span class="token comment"># encapsulation dot1q 20   /*配置为802.1Q局域网*/</span>
Router_config_g0/3.2<span class="token comment"># ip address 192.168.20.1 255.255.255.0   /*绑定IP地址*/</span>
Router_config_g0/3.2<span class="token comment"># no shut   /*非关闭*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器背靠背线缆" tabindex="-1"><a class="header-anchor" href="#路由器背靠背线缆" aria-hidden="true">#</a> 路由器背靠背线缆:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RT1_config<span class="token comment">#int multilink 1  /*进入Multilink 1*/</span>
RT1_config_m1<span class="token comment">#ip add 10.10.255.21 255.255.255.252   /*配置Multilink1的ip为10.10.255.21/30*/</span>
RT1_config_m1<span class="token comment">#ppp multilink   /*启用多链路ppp*/</span>
RT1_config_m1<span class="token comment">#multilink-group 1  /*将Multilink 1加入到Multilink聚合组1 */</span>
RT1_config_s0/1<span class="token comment">#exi       </span>
RT1_config<span class="token comment">#int se0/1             /*进入串口0/1*/</span>
RT1_config_s0/1<span class="token comment">#enc ppp          /*指定封装协议为ppp*/</span>
RT1_config_s0/1<span class="token comment">#ppp multilink    /*启用多链路ppp*/</span>
RT1_config_s0/1<span class="token comment">#multilink-group 1   /*将接口进入到聚合1*/</span>
RT1_config_s0/1<span class="token comment">#exi</span>
RT1_config<span class="token comment">#int se0/2             /*进入串口0/2*/</span>
RT1_config_s0/2<span class="token comment">#enc ppp         /*指定封装协议为ppp*/</span>
RT1_config_s0/2<span class="token comment">#ppp multilink        /*启用多链路ppp*/</span>
RT1_config_s0/2<span class="token comment">#multilink-group 1   /*将接口进入到聚合1*/</span>
RT1_config_s0/2<span class="token comment">#physical-layer speed 2048000   /*配置se0/2的物理层的波特率为2048000（与对端0/2接口的波特率要一致）*/</span>

RT2
RT2_config<span class="token comment">#int multilink 1      /*进入Multilink 1*/</span>
RT2_config_m1<span class="token comment">#ip add 10.10.255.22 255.255.255.252   /*配置Multilink1的ip为10.10.255.22/30*/</span>
RT2_config_m1<span class="token comment">#ppp multilink   /*启用多链路ppp*/</span>
RT2_config_m1<span class="token comment">#multilink-group 1    /*将Multilink 1加入到Multilink聚合组1*/</span>
RT2_config_m1<span class="token comment">#exit </span>
RT2_config_m1<span class="token comment">#int se0/1         /*进入串口0/1*/</span>
RT2_config_s0/1<span class="token comment">#enc ppp         /*指定封装协议为ppp*/</span>
RT2_config_s0/1<span class="token comment">#ppp multilink   /*启用多链路ppp*/</span>
RT2_config_s0/1<span class="token comment">#multilink-group 1   /*将接口进入到聚合1*/</span>
RT2_config_s0/1<span class="token comment">#exi</span>
RT2_config<span class="token comment">#int se0/2            /*进入串口0/2*/</span>
RT2_config_s0/2<span class="token comment">#enc ppp         /*指定封装协议为ppp*/</span>
RT2_config_s0/2<span class="token comment">#ppp multilink        /*启用多链路ppp*/</span>
RT2_config_s0/2<span class="token comment">#multilink-group 1    /*将接口进入到聚合1*/</span>
RT2_config_s0/2<span class="token comment">#phy spee 2048000     /*配置se0/2的物理层的波特率为2048000*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器bai配置" tabindex="-1"><a class="header-anchor" href="#路由器bai配置" aria-hidden="true">#</a> 路由器bai配置:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s0/0 ；进入Serail接口bai</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shutdown ；激活当前接bai口</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#clock rate 64000 ；设置同步时钟</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip address ；设置IP地址bai</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip address second ；设置第二个IP</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int f0/0.1 ；进入子接口</span>
router<span class="token punctuation">(</span>config-subif.1<span class="token punctuation">)</span><span class="token comment">#ip address ；设置子接口IP</span>
router<span class="token punctuation">(</span>config-subif.1<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1q ；绑定vlan中继协议</span>
router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#config-register 0x2142 ；跳过配置文件</span>
router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#config-register 0x2102 ；正常使用配置文件</span>
router<span class="token comment">#reload :重新引导</span>
Address pool range:地址池范
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="神州数码路由器清空数据" tabindex="-1"><a class="header-anchor" href="#神州数码路由器清空数据" aria-hidden="true">#</a> 神州数码路由器清空数据:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Ctrl+Break
monitor<span class="token comment">#del</span>
this <span class="token function">file</span> will be erased,are you sure?<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>y
monitor<span class="token comment">#reboot</span>
Do you want to <span class="token function">reboot</span> the router<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>?y
Please wait<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[c];function l(t,p){return s(),e("div",null,o)}const r=n(i,[["render",l],["__file","index.html.vue"]]);export{r as default};
