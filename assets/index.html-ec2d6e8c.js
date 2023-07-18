import{_ as n,o as s,c as a,e}from"./app-ab31641a.js";const i="/assets/ap_status-750172ae.jpg",t={},c=e('<h1 id="ac-ap-配置" tabindex="-1"><a class="header-anchor" href="#ac-ap-配置" aria-hidden="true">#</a> AC/AP 配置</h1><h2 id="ap-指示灯状态" tabindex="-1"><a class="header-anchor" href="#ap-指示灯状态" aria-hidden="true">#</a> AP 指示灯状态</h2><p><img src="'+i+`" alt="AP 指示灯状态"></p><h2 id="ap上线" tabindex="-1"><a class="header-anchor" href="#ap上线" aria-hidden="true">#</a> ap上线:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config<span class="token punctuation">)</span><span class="token comment">#vlan 10</span>
config<span class="token punctuation">)</span><span class="token comment">#int vlan 10</span>
config<span class="token punctuation">)</span><span class="token comment">#ip add 192.168.10.254 255.255.255.0</span>
config<span class="token punctuation">)</span><span class="token comment">#int e1/0/1</span>
config<span class="token punctuation">)</span><span class="token comment">#swi mode trunk </span>
config<span class="token punctuation">)</span><span class="token comment">#swi trunk native vlan 10      /*指定VLAN10通过*/</span>
config<span class="token punctuation">)</span><span class="token comment">#exit</span>
config<span class="token punctuation">)</span><span class="token comment">#wireless                      /*进入无线设置*/</span>
config<span class="token punctuation">)</span><span class="token comment">#enable                        /*开启无线功能*/</span>
config<span class="token punctuation">)</span><span class="token comment">#discovery vlan-list 10        /*设置ACvlan10二层发现*/</span>
config<span class="token punctuation">)</span><span class="token comment">#ap database 00-03-0f-78-d8-00 /*绑定AP的mac地址*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1ap管理" tabindex="-1"><a class="header-anchor" href="#_1ap管理" aria-hidden="true">#</a> ①AP管理:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AC发现AP
二层发现
DCWS-6028<span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#discovery vlan-list 1 //指定VLAN发现列表</span>
DCWS-6028<span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># ap database xx-xx-xx-xx-xx-xx  //添加AP MAC地址</span>

AP发现AC

AP配置
DCN-WLAN-AP<span class="token comment"># set management static-ip 192.168.2.1  //配置静态IP</span>
DCN-WLAN-AP<span class="token comment"># set management static-mask 255.255.255.0  //配置掩码</span>
DCN-WLAN-AP<span class="token comment"># set static-ip-route gateway 192.168.2.2   //配置默认网关</span>
AC配置
DCWS-6028<span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># discovery ip-list 192.168.2.1  //指定AP IP</span>
DCWS-6028<span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># ap database xx-xx-xx-xx-xx-xx  //添加AP MAC地址</span>

AP静态发现
DCN-WLAN-AP<span class="token comment"># set managed-ap switch-address-1 192.168.1.1	//设置第一个AC地址</span>
DCN-WLAN-AP<span class="token comment"># set managed-ap switch-address-2 192.168.2.2	//设置第二个AC地址</span>
Option下发AC地址
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip dhcp pool ap</span>
DCWS<span class="token punctuation">(</span>dhcp-ap-config<span class="token punctuation">)</span><span class="token comment">#option 43 hex 01040A090005	//0104为固定值，后接IP地址16进制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2ap认证" tabindex="-1"><a class="header-anchor" href="#_2ap认证" aria-hidden="true">#</a> ②AP认证:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>无验证
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap authentication none</span>

MAC地址验证
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap authe mac //设置AP验证方式为mac地址验证</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap database xx-xx-xx-xx-xx-xx //手动添加AP database 条目</span>

密码验证
AP配置
AP<span class="token comment"># set managed-ap pass-phrase 12345678	//设置认证密码</span>
AC配置
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap authentication pass-phrase </span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap database xx-xx-xx-xx-xx-xx            </span>
DCWS<span class="token punctuation">(</span>config-ap<span class="token punctuation">)</span><span class="token comment">#password plain 12345678	//设置AP认证密码</span>

序列号认证

AP操作
AP<span class="token comment"># get system </span>
Property          Value
---------------------------------------------------------------
model             Wireless Infrastructure Platform Reference AP
version           <span class="token number">2.0</span>.20.15
altversion        <span class="token number">2.0</span>.20.15
protocol-version  <span class="token number">2</span>
base-mac          xx:xx:xx:xx:xx:xx
serial-number     WL013210FA24000118	//序列号
system-name       
system-contact    
system-location   
apmode            fit
AC操作
AC<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#wireless </span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># ap authentication serial-num</span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># ap database xx-xx-xx-xx-xx-xx </span>
AC<span class="token punctuation">(</span>config-ap<span class="token punctuation">)</span><span class="token comment">#serial-num WL013210FA24000118</span>

AP逃生
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap prof 1</span>
DCWS<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#ap escape //开启AP逃生模式</span>
修改AP配置文件
AC<span class="token punctuation">(</span>config-ap<span class="token punctuation">)</span><span class="token comment">#profile 3 //在AP配置模式下()</span>
修改AP管理VLAN
AC<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#management vlan 4094 </span>
AC<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#wireless ap profile apply 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地portal认证" tabindex="-1"><a class="header-anchor" href="#本地portal认证" aria-hidden="true">#</a> 本地Portal认证:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> AC<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#captive-portal    //进入captive-portal模式</span>
  AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#enable    //开启Protal功能</span>
  AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#authentication-type internal    //认证类型为内置Protal</span>
  AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#user user1    //创建并设置用户 user1</span>
  AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#password 123456    //设置账户的密码为 123456</span>
  AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#group 0    //用户加入组 group 0</span>
  AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#!</span>
  AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#configuration 1    //进入captive-portal 配置1</span>
  AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#enable    //开启此配置</span>
  AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#verification local    //设置验证模式为本地</span>
  AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#group 0    //绑定Group 0 组</span>
  AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#auth-method mac-ip-based    //设置认证方式为基于MAC-IP</span>
  AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#interface ws-network 1    //绑定无线网络 (对应配置下发时的 Network 对应一个VAP)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arp抑制" tabindex="-1"><a class="header-anchor" href="#arp抑制" aria-hidden="true">#</a> ARP抑制:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AC<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># wireless </span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1 </span>
AC<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment"># arp-suppression</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置ip地址信息" tabindex="-1"><a class="header-anchor" href="#设置ip地址信息" aria-hidden="true">#</a> 设置IP地址信息:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AP<span class="token comment"># set management static-ip 192.168.2.1 //设置IP</span>
AP<span class="token comment"># set static-ip-route management gateway 192.168.2.254    //配置网关</span>
AP<span class="token comment"># set management static-mask 255.255.255.0  //设置掩码</span>
AP<span class="token comment"># set management dhcp-status down //关闭DHCP</span>
AP<span class="token comment"># set management dhcp-status up   //开启DHCP</span>
AP<span class="token comment"># set managed-ap switch-address-1 1.1.1.1 //设置主AC地址</span>
AP<span class="token comment"># set managed-ap switch-address-2 2.2.2.2 //设置备用AC地址</span>
AP<span class="token comment"># set managed-ap switch-address-2 3.3.3.3 //设置备用AC地址</span>
AP<span class="token comment"># set management vlan-id 1  //设置管理VLAN</span>

DCN-WLAN-AP<span class="token comment"># factory-reset   //重置AP</span>

AP<span class="token comment">#switch-apmode fat   //瘦AP转胖AP</span>

AP<span class="token comment">#switch-apmode fit    //胖AP转瘦AP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wep认证" tabindex="-1"><a class="header-anchor" href="#wep认证" aria-hidden="true">#</a> WEP认证:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#Sec mode static-wep 	//设置认证方式为WEP</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#wep key length 64		//设置key长度，64为5位，128为13位</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#wep key type ascii		//设置WEP密钥类型</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#wep key  1 12345		//设置WEP密钥</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wpa个人版" tabindex="-1"><a class="header-anchor" href="#wpa个人版" aria-hidden="true">#</a> WPA个人版:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#Sec mode wpa-per 	//设置认证方式为WPA个人版</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#wpa ciphers tkip 	//设置WPA加密方式为Tkip</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#wpa key tikp123456789	//设置WPA密钥</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ac配置" tabindex="-1"><a class="header-anchor" href="#ac配置" aria-hidden="true">#</a> AC配置:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#dot1x enable      //开启dot1x认证</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#radius-server authentication host 172.16.5.164 key 0 123 //设置服务器地址和key</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#radius source-ipv4 172.16.5.233  //设置源地址</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#radius nas-ipv4 172.16.5.233     //设置NAS地址</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#aaa enable</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#!</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#aaa group server radius 2012    //设置AAA组</span>
DCWS<span class="token punctuation">(</span>config-sg-radius<span class="token punctuation">)</span><span class="token comment"># server 172.16.5.164    //添加服务器</span>
DCWS<span class="token punctuation">(</span>config-sg-radius<span class="token punctuation">)</span><span class="token comment">#!</span>
DCWS<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#wireless</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># radius server-name auth 2012 //调用AAA服务器组</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># network 1</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#  radius server-name auth 2012    //调用AAA服务器组</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#  security mode wpa-enterprise    //设置无线企业认证</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#  ssid radius</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#  vlan 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地portal认证-1" tabindex="-1"><a class="header-anchor" href="#本地portal认证-1" aria-hidden="true">#</a> 本地Portal认证:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AC<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#captive-portal    //进入captive-portal模式</span>
AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#enable    //开启Protal功能</span>
AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#authentication-type internal    //认证类型为内置Protal</span>
AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#user user1    //创建并设置用户 user1</span>
AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#password 123456    //设置账户的密码为 123456</span>
AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#group 0    //用户加入组 group 0</span>
AC<span class="token punctuation">(</span>config-cp-local-user<span class="token punctuation">)</span><span class="token comment">#!</span>
AC<span class="token punctuation">(</span>config-cp<span class="token punctuation">)</span><span class="token comment">#configuration 1    //进入captive-portal 配置1</span>
AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#enable    //开启此配置</span>
AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#verification local    //设置验证模式为本地</span>
AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#group 0    //绑定Group 0 组</span>
AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#auth-method mac-ip-based    //设置认证方式为基于MAC-IP</span>
AC<span class="token punctuation">(</span>config-cp-instance<span class="token punctuation">)</span><span class="token comment">#interface ws-network 1    //绑定无线网络 (对应配置下发时的 Network 对应一个VAP)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态黑名单" tabindex="-1"><a class="header-anchor" href="#动态黑名单" aria-hidden="true">#</a> 动态黑名单:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#dynamic-blacklist //开启动态黑名单功能</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#mac authentication local //开启MAC本地验证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mac认证" tabindex="-1"><a class="header-anchor" href="#mac认证" aria-hidden="true">#</a> MAC认证:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>只允许已添加MAC的终端连接AP，或阻止已添加MAC的终端连接AP

只允许已添加MAC的终端连接AP
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#mac-authentication-modewhite-list	//开启MAC白名单模式</span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#known-client 00-11-11-11-11-11 action global-action	//添加MAC地址</span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS-6028<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#mac authentication local	//开启MAC本地认证</span>

阻止已添加MAC的终端连接AP
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#mac-authentication-modeblack-list	//开启黑名单模式</span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#known-client 00-22-22-22-22-22action global-action	//添加MAC地址</span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS-6028<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#mac authentication local	//开启MAC本地认证</span>

配置完成后需下发AP生效
DCWS-6028<span class="token comment">#wireless approfile apply 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最大接入用户数" tabindex="-1"><a class="header-anchor" href="#最大接入用户数" aria-hidden="true">#</a> 最大接入用户数:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#max-clients 10  //最大接入10个用户</span>

DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#offline-detect idle-timeout 300  //用户老化时间为300秒</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="限制接入时间" tabindex="-1"><a class="header-anchor" href="#限制接入时间" aria-hidden="true">#</a> 限制接入时间:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#time-limit from 09:00 to 18:00 weekday monday  //星期一 09:00 到 18:00 不允许接入无线网络</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="arp抑制-1" tabindex="-1"><a class="header-anchor" href="#arp抑制-1" aria-hidden="true">#</a> ARP抑制:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AC<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment"># wireless </span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1 </span>
AC<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment"># arp-suppression</span>

Anti-flood
防止AP泛洪攻击，检测时间为10分钟，最大连接次数为5次，老化时间为60分钟
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># wireless ap anti-flood</span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># wireless ap anti-flood interval 10</span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># wireless ap anti-flood max-conn-count 5</span>
AC<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment"># wireless ap anti-flood agetime 60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏ssid" tabindex="-1"><a class="header-anchor" href="#隐藏ssid" aria-hidden="true">#</a> 隐藏SSID:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#hide-ssid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="射频管理" tabindex="-1"><a class="header-anchor" href="#射频管理" aria-hidden="true">#</a> 射频管理:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>调整射频工作模式
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap profile 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#radio 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#mode bg-n</span>

设置AP的功率和信道
调整完需重启AP生效
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap database 00-03-0f-19-71-e0</span>
DCWS-6028<span class="token punctuation">(</span>config-ap<span class="token punctuation">)</span><span class="token comment">#radio 1 channel 11</span>
The valid AP entry is updated. This AP is already managed, to update the managed AP configuration with the new value<span class="token punctuation">(</span>s<span class="token punctuation">)</span> you need to reset the AP.
DCWS-6028<span class="token punctuation">(</span>config-ap<span class="token punctuation">)</span><span class="token comment">#radio 1 power 50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动信道调整" tabindex="-1"><a class="header-anchor" href="#自动信道调整" aria-hidden="true">#</a> 自动信道调整:</h2><blockquote><p>自动信道调整有三种方式：手动触发、周期性触发和固定时间触发 如果为AP设置了固定信道，则不能对此AP进行自动信道调整 自动信道调整功能默认是开启的</p></blockquote><blockquote><p>手动触发方式 DCWS-6028(config-wireless)#channel-planbgn mode manual DCWS-6028#wireless channel-plan bgnstart wirelessCalculate80211ChannelAdjustment successfuly added proposed entry to ap=00-03-0f-19-71-e0 DCWS-6028#wirelesschannel-plan bgn apply 周期性触发方式 DCWS-6028(config-wireless)#channel-plan bgnmode interval DCWS-6028(config-wireless)#channel-plan bgninterval 720 固定时间触发方式 DCWS-6028(config-wireless)#channel-plan bgnmode time DCWS-6028(config-wireless)#channel-plan bgntime 23:00</p></blockquote><blockquote><p>自动功率调整 自动功率调整有两种方式：手动触发和周期性触发 如果为AP配置了固定功率，则不能对此AP进行自动功率调整</p></blockquote><h2 id="手动触发方式" tabindex="-1"><a class="header-anchor" href="#手动触发方式" aria-hidden="true">#</a> 手动触发方式:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap profile 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#radio 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#power auto </span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#power-plan mode manual</span>
DCWS-6028<span class="token comment">#wireless power-plan start</span>
DCWS-6028<span class="token comment">#wireless power-plan apply</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="周期性触发方式" tabindex="-1"><a class="header-anchor" href="#周期性触发方式" aria-hidden="true">#</a> 周期性触发方式:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#approfile 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#radio 1</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#power auto </span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#exit</span>
DCWS-6028<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#exit</span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#power-plan mode interval </span>
DCWS-6028<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#power-plan interval 720</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持速率集" tabindex="-1"><a class="header-anchor" href="#支持速率集" aria-hidden="true">#</a> 支持速率集:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AC<span class="token punctuation">(</span>config- ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#mode bg </span>
AC<span class="token punctuation">(</span>config- ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#rate basic 54 //设置基本速率集</span>
DCWS<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#rate supported 54 //设置支持速率集</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无线隔离" tabindex="-1"><a class="header-anchor" href="#无线隔离" aria-hidden="true">#</a> 无线隔离</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#station-isolation</span>

同一radio下用户隔离
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap profile 1</span>
DCWS<span class="token punctuation">(</span>config-ap-profile<span class="token punctuation">)</span><span class="token comment">#radio 1</span>
DCWS<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#station-isolation</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无线强制漫游" tabindex="-1"><a class="header-anchor" href="#无线强制漫游" aria-hidden="true">#</a> 无线强制漫游:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming mode auto //开启自动强制漫游功能</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming mode auto interval 15  //自动强制漫游功能的执行周期为15分钟。</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming rssi-threshold 10   //设置RSSI阈值，为10%</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming denial-count 5       //设置自动强制漫游拒绝次数门限为5次</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming denial-timeout 1  //设置拒绝次数门限老化为1小时</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#force-roaming hysteresis 4    //设置符合强制漫游的信号强度差值为4%.</span>
DCWS<span class="token comment">#wireless force-roaming client aa-aa-aa-aa-aa-aa start  //手动发起漫游功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式转发" tabindex="-1"><a class="header-anchor" href="#分布式转发" aria-hidden="true">#</a> 分布式转发:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS-6028<span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#dist-tunnel //该Network的流量开启分布式转发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="集中转发" tabindex="-1"><a class="header-anchor" href="#集中转发" aria-hidden="true">#</a> 集中转发:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#l2tunnel vlan-list add 10;20	//设置VLAN10 VLAN20的流量为集中转发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="限速" tabindex="-1"><a class="header-anchor" href="#限速" aria-hidden="true">#</a> 限速:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#ap client-qos	//开启AP QoS</span>
DCWS<span class="token punctuation">(</span>config-wireless<span class="token punctuation">)</span><span class="token comment">#network 1</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#client-qos bandwidth-limit down 5120	//限速下行速率为5Mb/s</span>
DCWS<span class="token punctuation">(</span>config-network<span class="token punctuation">)</span><span class="token comment">#client-qos bandwidth-limit up 2048		//限速上行速率为2Mb/s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时空公平调度" tabindex="-1"><a class="header-anchor" href="#时空公平调度" aria-hidden="true">#</a> 时空公平调度:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DCWS<span class="token punctuation">(</span>config-ap-profile-radio<span class="token punctuation">)</span><span class="token comment">#schedule-mode preferred	//开启时空公平调度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用维护命令-ac常用维护命令" tabindex="-1"><a class="header-anchor" href="#常用维护命令-ac常用维护命令" aria-hidden="true">#</a> 常用维护命令 AC常用维护命令:</h2><blockquote><p>DCWS-6028#show wireless ap status //查看AP的注册和配置状态 MAC Address Configuration<br> (*) Peer Managed IP Address Profile Status Status Age<br> ------------------ --------------- ------- ------- ------------- -------------- ------------- 00-03-0f-19-71-e0 192.168.1.10 1 Managed Success d:00:00:01 Total Access Points............................ 1</p></blockquote><p>DCWS-6028#show wireless ap failure status //查看AP的注册失败信息</p><p>DCWS-6028#wireless approfile apply 1 //下发配置</p><p>DCWS(config-ap-profile)#hwtype 29 //设置硬件类型</p><p>DCWS(config-ap-profile)#show wir ap 00-03-0f-5b-f0-e0 status | i Type //查看硬件版本1 Hardware Type.................................. 29 - WL8200-I2, Indoor Dual Radio a/n/ac, b/g/n CPU Type....................................... AR9344-533</p><p>DCWS#show vendor | i WL8200-I2 //查看硬件版本2 29 WL8200-I2 R1 WL8200-I2, Indoor Dual Radio a/n/ac, b/g/n</p><p>DCWS-6028# show wireless //查看AC的无线状态，可以看到无线功能是否开启，无线IP地址信息，国家代码信息，管理的AP数量等 DCWS-6028# show wireless status //查看AC的无线状态，可以看到无线功能是否开启，无线IP地址信息，国家代码信息，管理的AP数量等</p><p>DCWS-6028#showwireless ap 00-03-0f-19-71-e0 status //查看AP的详细信息，可以看到AP的MAC地址、IP地址、硬件类型及型号、软件版本、序列号等 MACaddress.................................... 00-03-0f-19-71-e0 Location....................................... IPAddress..................................... 192.168.1.10 IP SubnetMask................................. 255.255.255.0 … …</p><p>DCWS-6028#show wireless ap radio status //查看AP的射频信息 DCWS-6028#show wireless ap 00-03-0f-19-71-e0 radio status MAC Address Transmit Auth. (*) Peer Managed Location Radio Channel Power (%) Clients ------------------ ----------- ----- ------- -------- ------- 00-03-0f-19-71-e0 1 11 100 0<br> 2 149 100 0</p><p>DCWS-6028#show wireless client status //查看无线终端信息 MAC Address<br> (*) Peer Managed VAP MAC Address SSID Status Network Time ------------------ ----------------- ------- --------- ----------- 00-1c-bf-21-85-90 00-03-0f-19-71-e1 wlan Auth 0d:00:00:05 Total Clients Associated To Local Switch....... 1 Total Clients Associated To Peer Switches...... 0</p><p>重启AP，可以重启所有AP，也可以单独重启某一台AP DCWS-6028#wireless ap reset DCWS-6028#wireless ap reset 00-03-0f-19-71-e0</p><h2 id="ap常用维护命令获取地址信息ap-get-managementproperty-value" tabindex="-1"><a class="header-anchor" href="#ap常用维护命令获取地址信息ap-get-managementproperty-value" aria-hidden="true">#</a> AP常用维护命令 获取地址信息 AP# get management Property Value</h2><p>vlan-id 1 interface brvlan1 static-ip 192.168.2.1 static-mask 255.255.255.0 ip 192.168.2.1 mask 255.255.255.0 ipv6<br> ipv6-prefix-length 0 mac xx:xx:xx:xx:xx:xx dhcp-status up dhcpv6-status up ipv6-status up ipv6-autoconfig-status up static-ipv6<br> static-ipv6-prefix-length 0</p><h2 id="设置ip地址信息-1" tabindex="-1"><a class="header-anchor" href="#设置ip地址信息-1" aria-hidden="true">#</a> 设置IP地址信息:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AP<span class="token comment"># set management static-ip 192.168.2.1 //设置IP</span>
AP<span class="token comment"># set static-ip-route management gateway 192.168.2.254    //配置网关</span>
AP<span class="token comment"># set management static-mask 255.255.255.0  //设置掩码</span>
AP<span class="token comment"># set management dhcp-status down //关闭DHCP</span>
AP<span class="token comment"># set management dhcp-status up   //开启DHCP</span>
AP<span class="token comment"># set managed-ap switch-address-1 1.1.1.1 //设置主AC地址</span>
AP<span class="token comment"># set managed-ap switch-address-2 2.2.2.2 //设置备用AC地址</span>
AP<span class="token comment"># set managed-ap switch-address-2 3.3.3.3 //设置备用AC地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),p=[c];function o(l,u){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
