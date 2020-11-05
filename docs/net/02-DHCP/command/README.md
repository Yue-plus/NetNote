# 目录



<!--
- 1.1.14 ip dhcp conflict logging
- 1.1.15 ip dhcp disable
- 1.1.16 ip dhcp excluded-address
- 1.1.17 ip dhcp pool
- 1.1.18 ip dhcp conflict ping-detection enable
- 1.1.19 ip dhcp ping packets
- 1.1.20 ip dhcp ping timeout
- 1.1.21 lease
- 1.1.22 max-lease-time
- 1.1.23 netbios-name-server
- 1.1.24 netbios-node-type
- 1.1.25 network-address
- 1.1.26 next-server
- 1.1.27 option
- 1.1.28 service dhcp
- 1.1.29 show ip dhcp binding
- 1.1.30 show ip dhcp conflict
- 1.1.31 show ip dhcp relay information option
- 1.1.32 show ip dhcp server statistics
- 1.2 DHCP中继配置命令
- 1.2.1 ip dhcp broadcast suppress
- 1.2.2 ip dhcp relay share-vlan <vlanid> sub-vlan <vlanlist>
- 1.2.3 ip forward-protocol udp bootps
- 1.2.4 ip helper-address
- 1.2.5 show ip forward-protocol
- 1.2.6 show ip helper-address

## 第2章 DHCPV6配置命令
  2-12.1 clear ipv6 dhcp binding
  2-12.2 clear ipv6 dhcp conflict
  2-12.3 clear ipv6 dhcp statistics
  2-12.4 debug ipv6 dhcp client packet
  2-22.5 debug ipv6 dhcp detail
  2-22.6 debug ipv6 dhcp relay packet
  2-22.7 debug ipv6 dhcp server
  2-22.8 dns-server
  2-32.9 domain-name
  2-32.10 excluded-address
  2-32.11 ipv6 address
  2-42.12 ipv6 dhcp client pd
  2-42.13 ipv6 dhcp client pd hint
  2-52.14 ipv6 dhcp pool
  2-52.15 ipv6 dhcp relay destination
  2-52.16 ipv6 dhcp server
  2-62.17 ipv6 general-prefix
  2-62.18 ipv6 local pool
  2-72.19 lifetime
  2-72.20 network-address
  2-72.21 prefix-delegation
  2-82.22 prefix-delegation add static route
  2-82.23 prefix-delegation pool
  2-92.24 service dhcpv6
  2-92.25 show ipv6 dhcp
  2-102.26 show ipv6 dhcp binding
  2-102.27 show ipv6 dhcp conflict
  2-102.28 show ipv6 dhcp interface
  2-11
2.29 show ipv6 dhcp pool
  2-112.30 show ipv6 dhcp statistics
  2-112.31 show ipv6 general-prefix
  2-132.32 show ipv6 local pool
  2-13
## 第3章 DHCP OPTION 82配置命令
  3-13.1 debug ip dhcp relay packet
  3-13.2 ip dhcp relay information option
  3-13.3 ip dhcp relay information option delimiter
  3-13.4 ip dhcp relay information option remote-id
  3-23.5 ip dhcp relay information option remote-id format
  3-23.6 ip dhcp relay information option self-defined remote-id
  3-33.7 ip dhcp relay information option self-defined remote-id format
  3-33.8 ip dhcp relay information option self-defined subscriber-id
  3-33.9 ip dhcp relay information option self-defined subscriber-id format 
  3-43.10 ip dhcp relay information option subscriber-id
  3-43.11 ip dhcp relay information option subscriber-id format
  3-53.12 ip dhcp relay information policy
  3-53.13 ip dhcp server relay information enable
  3-63.14 show ip dhcp relay information option
  3-6
## 第4章 DHCPV6 OPTION37，38配置命令
  4-14.1 DHCPv6 option37，38配置命令
  4-14.1.1 address range
  4-14.1.2 class
  4-14.1.3 ipv6 dhcp class
  4-24.1.4 ipv6 dhcp relay remote-id
  4-24.1.5 ipv6 dhcp relay remote-id option
  4-24.1.6 ipv6 dhcp relay subscriber-id
  4-34.1.7 ipv6 dhcp relay subscriber-id option
  4-34.1.8 ipv6 dhcp relay subscriber-id select delimiter
  4-44.1.9 ipv6 dhcp server remote-id option
  4-44.1.10 ipv6 dhcp server select relay-forw
  4-44.1.11 ipv6 dhcp server subscriber-id option
  4-54.1.12 ipv6 dhcp snooping remote-id
  4-5
4.1.13 ipv6 dhcp snooping remote-id option
  4-54.1.14 ipv6 dhcp snooping remote-id policy
  4-64.1.15 ipv6 dhcp snooping subscriber-id
  4-64.1.16 ipv6 dhcp snooping subscriber-id option
  4-74.1.17 ipv6 dhcp snooping subscriber-id policy
  4-74.1.18 ipv6 dhcp snooping subscriber-id select delimiter
  4-84.1.19 ipv6 dhcp use class
  4-84.1.20 remote-id subscriber-id
  4-84.2 监测和调试命令
  4-94.2.1 debug ipv6 dhcp detail
  4-94.2.2 debug ipv6 dhcp relay packet
  4-104.2.3 debug ipv6 dhcp snooping packet
  4-104.2.4 show ipv6 dhcp relay option
  4-114.2.5 show ipv6 dhcp snooping option
  4-11
## 第5章 DHCP SNOOPING 配置命令
  5-15.1 debug ip dhcp snooping binding
  5-15.2 debug ip dhcp snooping event
  5-15.3 debug ip dhcp snooping packet interface
  5-15.4 debug ip dhcp snooping packet
  5-15.5 debug ip dhcp snooping update
  5-25.6 enable trustview key
  5-25.7 ip dhcp snooping
  5-25.8 ip dhcp snooping action
  5-25.9 ip dhcp snooping action MaxNum
  5-35.10 ip dhcp snooping binding
  5-35.11 ip dhcp snooping binding arp
  5-45.12 ip dhcp snooping binding dot1x
  5-45.13 ip dhcp snooping binding user
  5-45.14 ip dhcp snooping binding user-control
  5-55.15 ip dhcp snooping binding user-control max-user
  5-55.16 ip dhcp snooping information enable
  5-65.17 ip dhcp snooping information option allow-untrusted
  5-65.18 ip dhcp snooping information option delimiter
  5-75.19 ip dhcp snooping information option remote-id
  5-7
5.20 ip dhcp snooping information option self-defined remote-id
  5-75.21 ip dhcp snooping information option self-defined remote-id 
format
  5-85.22 ip dhcp snooping information option self-defined subscriber-id
  5-85.23 ip dhcp snooping information option self-defined subscriber-id 
format
  5-95.24 ip dhcp snooping information option subscriber-id
  5-95.25 ip dhcp snooping information option subscriber-id format
  5-105.26 ip dhcp snooping limit-rate
  5-105.27 ip dhcp snooping trust
  5-115.28 ip user helper-address
  5-115.29 ip user private packet version two
  5-125.30 show ip dhcp snooping
  5-125.31 show ip dhcp snooping binding all
  5-145.32 show trustview status
  5-15
## 第6章 DHCP OPTION 60和OPTION 43命令
  6-16.1 option 43 ascii LINE
  6-16.2 option 43 hex WORD
  6-16.3 option 43 ip A.B.C.D
  6-16.4 option 60 ascii LINE
  6-26.5 option 60 hex WORD
  6-26.6 option 60 ip A.B.C.D
  
# 第2章 DHCPv6配置命令 

2.1 clear ipv6 dhcp binding 

命令：clear ipv6 dhcp binding [<ipv6-address>] [pd <ipv6-prefix|prefix-length>] 
功能：删除某指定DHCPv6分配地址或前缀的绑定记录或所有IPv6地址和前缀的绑定记录。 
参数：<ipv6-address>为指定的有绑定记录的IPv6地址；<ipv6-prefix|prefix-length>为指定的
有绑定记录的IPv6前缀；没有指定参数时认为清除所有IPv6地址和前缀的绑定记录。 
命令模式：特权用户配置模式。 
使用指南：通过show ipv6 dhcp binding命令可以查看IPv6地址和前缀与相应的DHCPv6
绑定信息，当DHCPv6服务器得知某DHCPv6客户机因为特殊原因没有使用分配的IPv6地
址或前缀但规定的租期未到，DHCPv6服务器不会自动解除该绑定信息，此时系统管理员可
以使用本命令手工删除该IP地址或前缀与客户机硬件地址的自动绑定；如果没有任何参数，
本命令将删除所有自动绑定记录，这样DHCPv6地址池中的所有地址和前缀将被重新分配。 
举例：删除所有IPv6地址和前缀的绑定记录。 
Switch#clear ipv6 dhcp binding 
相关命令：show ipv6 dhcp binding 

2.2 clear ipv6 dhcp conflict 

命令：clear ipv6 dhcp conflict [<address> ] 
功能：删除在地址冲突日志中有冲突记录的地址。 
参数：<address>为某指定的有冲突记录的地址；不指定地址则清除所有冲突记录。 
命令模式：特权用户配置模式。 
使用指南：通过show ipv6 dhcp conflict命令可以查看哪些IP地址在使用上有冲突，使用本
命令可以删除某一地址的冲突记录，如果不指定具体地址则是删除日志中所有地址的冲突记
录。在日志中删除冲突记录后，这些地址可被DHCPv6服务器重新使用。 
举例：网络管理员查看冲突日志，发现有冲突记录的2001::1地址现已无人使用，将该地址
的记录从地址冲突文件中删除。 
Switch#clear ipv6 dhcp conflict 2001::1 

2.3 clear ipv6 dhcp statistics 

命令：clear ipv6 dhcp statistics 
功能：删除DHCPv6报文统计记录，将DHCPv6报文统计计数器清零。 
参数：无。 
命令模式：特权用户配置模式。 
使用指南：通过show ipv6 dhcp statistics命令可以查看DHCPv6报文计数器的统计信息，
所有的统计信息都是一个累计值，使用本命令可以将计数器清零，方便调试查看。 
举例：将DHCPv6报文计数器清零。 
Switch#clear ipv6 dhcp statistics 


相关命令：show ipv6 dhcp statistics 

2.4 debug ipv6 dhcp client packet 

命令：debug ipv6 dhcp client { event | packet } 
no debug ipv6 dhcp client { event | packet } 
功能： 显示DHCPv6前缀请求客户端收发报文的debug显示，本命令的no操作关闭DHCPv6
前缀请求客户端的debug显示信息。 
缺省情况：缺省调试开关是关闭的。 
命令模式：特权用户配置模式。 
举例： 
Switch# debug ipv6 dhcp client packet 

2.5 debug ipv6 dhcp detail 

命令：debug ipv6 dhcp detail 
no debug ipv6 dhcp detail 
功能： 显示DHCPv6收发各类报文详细内容的debug显示，本命令的no操作关闭DHCPv6
收发报文内容的debug显示信息。 
缺省情况：缺省调试开关是关闭的。 
命令模式：特权用户配置模式。 
举例： 
Switch# debug ipv6 dhcp detail 

2.6 debug ipv6 dhcp relay packet 

命令：debug ipv6 dhcp relay packet 
no debug ipv6 dhcp relay packet 
功能：显示DHCPv6中继代理收发报文的debug显示，本命令的no操作关闭DHCPv6中继
代理的debug显示信息。 
缺省情况：缺省调试开关是关闭的。 
命令模式：特权用户配置模式。 
举例： 
Switch# debug ipv6 dhcp relay packet 

2.7 debug ipv6 dhcp server 

命令：debug ipv6 dhcp server {event | packet} 
no debug ipv6 dhcp server {event | packet} 
功能：显示DHCPv6服务器的事件和收发报文的情况，本命令的no操作关闭DHCPv6服务
器的debug显示信息。 

参数：event表示开启/关闭DHCPv6服务器事件的debug显示，如地址分配情况；packet表


示开启/关闭DHCPv6服务器收发报文的debug显示。 
缺省情况：缺省调试开关是关闭的。 
命令模式：特权用户配置模式。 
举例： 
Switch#debug ipv6 dhcp server packet 

2.8 dns-server 

命令：dns-server <ipv6-address> 
no dns-server <ipv6-address> 
功能：为DHCPv6客户机配置DNS服务器IPv6地址；本命令的no操作为删除DNS服务
器IPv6地址。 
参数：<ipv6-address>为DNS服务器的IPv6地址。 
缺省情况：系统默认没有配置地址池的DNS服务器地址。 
命令模式：DHCPv6地址池模式。 
使用指南：本命令最多可配置3次，即每个地址池最多允许3个DNS服务器地址，而且服
务器地址只能是IPv6地址。 
举例：设置DHCPv6客户机的DNS服务器的地址为2001:da8::1。 
Switch(dhcp-1-config)#dns-server 2001:da8::1 

2.9 domain-name 

命令：domain-name <domain-name> 
no domain-name <domain-name> 
功能：为DHCPv6客户机配置域名；本命令的no操作为删除域名。 
参数：<domain-name>为域的名称，最长不超过32字符。 
命令模式：DHCPv6地址池模式。 
缺省情况：系统默认没有配置地址池的域名参数。 
使用指南：本命令最多可配置3次，即每个地址池最多允许3个域名参数。 
举例：指定DHCPv6客户机的域名为test.com.cn 
Switch(dhcp-1-config)#domain-name test.com.cn 

2.10 excluded-address 

命令：excluded-address <ipv6-address> 
no excluded-address <ipv6-address> 
功能：配置地址池中不用于动态分配的IPv6地址，以避免某些专用地址不被分配；本命令
的no操作为取消该项配置。 
参数：<ipv6-address>为不用于动态分配的地址池中的某个IPv6地址。 
缺省情况：地址池缺省没有配置不用于动态分配的IPv6地址。 
命令模式：DHCPv6地址池模式。 
使用指南：使用本命令可以将地址池中的一个或多个地址排除不做DHCPv6分配，这些地
址由系统管理员留作其它用途。本命令在一个地址池中可以配置多次。 


举例：将2001:da8:123::1地址保留，不用于动态分配。 
Switch(config)#excluded-address 2001:da8:123::1 

2.11 ipv6 address 

命令：ipv6 address <prefix-name> <ipv6-prefix/prefix-length> 
no ipv6 address <prefix-name> <ipv6-prefix/prefix-length> 
功能：在指定接口上配置使用代理前缀生成的IPv6地址。本命令的no操作在指定接口上删
除使用代理前缀生成的IPv6地址。 
参数：<prefix-name>是一个长度小于32的字符串，表示前缀请求客户端获得前缀或手动配
置而保存在通用前缀池中的前缀名。<ipv6-prefix/prefix-length>表示IPv6地址中排除
<prefix-name>前缀部分的后续地址位。 
命令模式：接口配置模式。 
缺省情况：系统默认不在接口配置全局地址。 
使用指南：接口IPv6地址将由<prefix-name>和<ipv6-prefix/prefix-length>组合而成，最终
IPv6地址的前缀长度将由<prefix-length>指定。如果开启了路由器公告，将公告前64位前
缀。系统在接口上删除由<prefix-name>和<ipv6-prefix/prefix-length>组合而成的IPv6地址，
并停止公告该前缀。一个接口的一个前缀名只能配置唯一的<ipv6-prefix/prefix-length>. 
举例：如果前缀名my-prefix表示2001:da8:221::/48，本命令将在Vlan1接口生成
2001:da8:221:2008::2008。 
Switch(Config-if-Vlan1)# ipv6 address my-prefix 0:0:0:2008::2008/64 

2.12 ipv6 dhcp client pd 

命令：ipv6 dhcp client pd <prefix-name> [rapid-commit] 
no ipv6 dhcp client pd 
功能：在指定接口上启动客户端前缀代理请求功能。本命令的no操作在指定接口上关闭客
户端前缀代理请求功能，并删除获得的前缀。 
参数：<prefix-name>是一个长度小于32的字符串，表示成功获得代理前缀后，使用该名称
保存在通用前缀池中。如果指定了rapid-commit选项，且前缀代理服务器端也使能了
rapid-commmit功能，则前缀代理服务器将向前缀请求客户端直接发出REPLY报文，通过一
次消息交换完成前缀代理请求过程。 
命令模式：接口配置模式。 
缺省情况：系统默认不启动客户端前缀代理请求功能。 
使用指南：系统在接口上启动客户端前缀代理请求功能，发出SOLICIT报文，希望从服务器
获得代理前缀。一旦获得了前缀，就可以通过其他命令（比如 ipv6 address 命令）引用通用
前缀池中的这个前缀。本命令与ipv6 dhcp server和ipv6 dhcp relay destination命令互斥。如
果系统在接口上关闭客户端前缀代理请求功能，则从通用前缀池中删除获得的前缀，同时删
除使用该前缀生成的接口地址，不再使用该前缀进行路由公告。如果已经通过ipv6 
general-prefix命令配置了同一通用前缀名，则不能注册此通用前缀名。 
举例： 
Switch(Config-if-Vlan1)#ipv6 dhcp client pd ClientA rapid-commit 



2.13 ipv6 dhcp client pd hint 

命令：ipv6 dhcp client pd hint <prefix|prefix-length> 
no ipv6 dhcp client pd hint <prefix|prefix-length> 
功能：在指定接口上指定客户端希望获取的前缀和前缀长度的功能。本命令的no操作在指
定接口上删除客户端希望获取的前缀和前缀长度。 
参数：<prefix|prefix-length>表示客户端希望获取的前缀和前缀长度。 
命令模式：接口配置模式。 
缺省情况：系统默认不指定客户端希望获取的前缀和前缀长度的功能。 
使用指南：系统在接口上为客户端指定了其希望获取的前缀和前缀长度，如果在接口上启动
了客户端前缀代理请求功能且前缀服务器使能了hint功能，则服务器端优先把客户端希望
获取得前缀和前缀长度分配给客户端。系统目前只允许配置一个hint前缀。 
举例： 
Switch(vlan-1-config)#ipv6 dhcp client pd hint 2001::/48 

2.14 ipv6 dhcp pool 

命令：ipv6 dhcp pool <poolname> 
no ipv6 dhcp pool <poolname> 
功能：配置DHCPv6地址池，进入DHCPv6地址池模式，在此模式下配置可分配给客户端
的地址前缀、DNS服务器、域名等信息；本命令的no操作为删除该地址池。 
参数：< poolname>为DHCPv6地址池名，最长不超过32个字符。 
缺省情况：系统默认不配置任何DHCPv6地址池。 
命令模式：全局配置模式。 
使用指南：在全局模式下定义一个DHCPv6地址池，进入到DHCPv6地址池配置模式。如
果想要删除一个地址池，则需要先解除与该地址相关的接口绑定，并且清除所有相关的地址
绑定。 
举例：定义一个地址池，取名1。 
Switch(config)#ipv6 dhcp pool 1 

2.15 ipv6 dhcp relay destination 

命令：ipv6 dhcp relay destination { [<ipv6-address>] [ interface { <interface-name> | vlan 
<1-4096> } ] } 
no ipv6 dhcp relay destination { [<ipv6-address>] [ interface { <interface-name> | vlan 
<1-4096> } ] } 
功能：配置DHCPv6接口中继代理为客户端递交中继报文的目的IPv6地址，可以是另外的
DHCPv6中继代理的地址也可以是DHCPv6服务器的地址。本命令的no操作取消该项配置。 

参数：<ipv6-address>为DHCPv6中继代理转发中继报文的目的IPv6地址；<interface-name>
或vlan参数是转发出报文的交换机接口名或接口号，<interface-name>只能为三层接口vlan
名称，vlan接口号的取值范围为1～4096。当<ipv6-address>为全球单播地址时，不配置转发
的接口参数；当<ipv6-address>为本地链路地址时，必须配置转发的接口名称；当只配置报


文转发出的接口名称时，此时默认转发目的地址为所有DHCPv6服务器的本地站点多播地
址All_DHCP_Servers (FF05::1:3)。 
命令模式：接口配置模式。 
缺省情况：系统默认没有配置DHCPv6中继代理的目的IPv6地址。 
使用指南：配置本命令指示本接口启用DHCPv6中继代理功能，以后把配置的地址作为
RELAY-FORWARD报文的目的地址，该地址可以是另外的DHCPv6中继代理的地址也可以
是DHCPv6服务器的地址。系统最多允许配置3个中继代理的目的地址。注意只有该接口
所有DHCPv6中继代理的目的地址都被删除，该接口的DHCPv6中继代理功能才不可用。
本命令与ipv6 dhcp server和ipv6 dhcp client pd命令互斥。 
举例： 
Switch(Config-if-Vlan1)#ipv6 dhcp relay destination 2001:da8::1 


2.16 ipv6 dhcp server 

命令：ipv6 dhcp server <poolname> [preference <value>] [rapid-commit] [allow-hint] 
no ipv6 dhcp server <poolname> 
功能：配置本命令绑定了DHCPv6服务器在接口使用的DHCPv6地址池。本命令的no操作
删除指定接口上的DHCPv6地址池，停止本接口的DHCPv6服务。 
参数：<poolname>是一个长度小于32的字符串，表示与本接口关联的DHCPv6地址池名称。 
如果指定了rapid-commit选项，则DHCPv6服务器收到客户端的SOLICIT报文后，向客户
端直接发出REPLY报文，通过一次消息交换完成地址或前缀请求过程。如果指定了
preference选项，则<value>表示本服务器的优先值，取值范围是0～255，默认值是0，值
越大服务器优先级越高。如果指定了allow-hint选项，表示优先满足客户端期望分配的配置
参数，这些期望参数在客户端发出的请求报文中给出。 
命令模式：接口配置模式。 
缺省情况：系统默认没有配置接口的DHCPv6地址池。 
使用指南：配置本命令记录了DHCPv6服务器在接口使用的DHCPv6地址池，及在该接口
提供DHCPv6服务的相关参数。一个接口上可以绑定多个DHCPv6地址池，可以同时为直
连链路的DHCPv6请求以及来自中继代理的DHCPv6请求报文分配地址。 
举例： 
Switch(Config-if-Vlan1)#ipv6 dhcp server PoolA preference 80 rapid-commit allow-hint 

2.17 ipv6 general-prefix 

命令：ipv6 general-prefix <prefix-name> <ipv6-prefix/prefix-length> 
no ipv6 general-prefix <prefix-name> 
功能：定义一个IPv6 通用前缀。本命令的no操作取消该项配置。 
参数：<prefix-name>是一个长度小于32的字符串，表示IPv6 通用前缀名称。
<ipv6-prefix/prefix-length>表示定义的IPv6通用前缀。 
命令模式：全局配置模式。 
缺省情况：系统默认没有配置IPv6 通用前缀。 

使用指南：定义了IPv6通用前缀后，在接口上可以引用该通用前缀生成接口IPv6地址。在


使用上通用前缀一般表示企业级的IPv6前缀，这样在接口上输入地址时只需要给出通用前
缀名加上接口前缀后续部分，简化了用户书写。定义的通用前缀将保存在通用前缀池中。系
统最多可配置8个通用前缀。当删除指定的通用前缀名称时，如果有接口引用了这个通用前
缀，本命令执行不成功。一个通用前缀名只能配置一个通用前缀。如果有接口使能IPv6 dhcp
前缀代理客户端占用了通用前缀名，则不能使用此命令配置相同的通用前缀名。 
举例：把2001:da8:221::/48前缀分配给通用前缀名my-prefix。 
Switch(config)# ipv6 general-prefix my-prefix 2001:da8:221::/48 

2.18 ipv6 local pool 

命令：ipv6 local pool <poolname> <prefix/prefix-length> <assigned-length> 
no ipv6 local pool <poolname> 
功能：配置IPv6代理前缀池。本命令的no操作删除IPv6代理前缀池。 
参数：<poolname>表示IPv6代理前缀池的名字，它是长度小于32的字符串。
<prefix/prefix-length>表示分配给这个代理前缀池的前缀和前缀长度。<assigned-length>表示
分配给使用这个代理前缀池的前缀请求客户端的前缀长度，它不能小于<prefix-length>。 
命令模式：全局配置模式。 
缺省情况：系统默认没有配置IPv6代理前缀池。 
使用指南：本命令将与prefix-degation pool命令配合使用，向前缀请求客户端分配前缀。删
除IPv6代理前缀池后，地址池中与之关联的prefix-delegation命令将无效。 

2.19 lifetime 

命令：lifetime {<valid-time> | infinity} {<preferred-time> | infinity} 
no lifetime 
功能：配置DHCPv6地址池动态分配地址或前缀的生存期。本命令的no操作恢复默认配置。 
参数：<valid-time> 和<preferred-time>分别为本地址池分配IPv6地址的有效生存期和优选
生存期，单位为秒，取值范围是1-31536000，但<preferred-time>必须不大于<valid-time>。
参数infinity表示生存期为无限值。 
命令模式：DHCPv6地址池模式。 
缺省情况：地址池有效生存期和优选生存期默认为2592000秒(30天)和604800秒(7天)。 
举例：配置有效生存期为1000秒，优选生存期为600秒。 
Switch(config)#lifetime 1000 600 

2.20 network-address 

命令：network-address <ipv6-pool-start-address> {<ipv6-pool-end-address> | <prefix-length>} 
[eui-64] 
no network-address 
功能：配置DHCPv6地址池可分配的IPv6地址范围；本命令的no操作为取消该项配置。 

参数：<ipv6-pool-start-address>为地址池IPv6起始地址；<ipv6-pool-end-address>为地址池
IPv6终止地址；<prefix-length>为前缀长度，取值范围为3-128，建议配置为64，依据
<prefix-length>计算出地址池IPv6终止地址。<ipv6-pool-end-address> 和<prefix-length>二


者取其一。如果配置的<prefix-length>为64，同时配置了eui-64选项，则DHCPv6服务器向
客户端分配基于EUI-64规范的IPv6地址，否则将按自然顺序为客户端分配地址。 
缺省情况：DHCPv6地址池默认没有配置可分配的IPv6地址范围。 
命令模式：DHCPv6地址池模式。 
使用指南：DHCPv6服务器使用本命令配置可分配的IPv6地址范围，一个地址池只能分配
一个地址范围。注意在使用DHCPv6服务器并配置前缀长度的时候，应该使地址池中前缀
长度大于或等于交换机上对应网段的三层接口IPv6地址的前缀长度。如果
<ipv6-pool-end-address>比<ipv6-pool-start-address>大，本命令立即返回。 
举例：地址池1的可分配的地址范围为2001:da8:123::100-2001:da8:123::200。 
Switch(dhcp-1-config)#network-address 2001:da8:123::100 2001:da8:123::200 
相关命令：excluded-address 

2.21 prefix-delegation 

命令：prefix-delegation <ipv6-prefix/prefix-length> <client-DUID> [iaid <iaid>] [lifetime 
{<valid-time> | infinity} {<preferred-time> | infinity}] 
no prefix-delegation <ipv6-prefix/prefix-length> <client-DUID> [iaid <iaid>] 
功能：配置分配给特定前缀请求客户端的代理前缀。本命令的no操作删除分配给特定前缀
请求客户端的代理前缀。 
参数：<ipv6-prefix/prefix-length>为分配给特定前缀请求客户端的代理前缀。<client-DUID>
为指定前缀请求客户端的DUID，本文支持DUID-LLT类型的DUID，它是长度为14的字
符串， 同时支持DUID-LL类型的DUID。<iaid>是客户端请求报文中IA_PD选项中指定的IAID
值。<valid-time> 和<preferred-time>分别为客户分配IPv6前缀的有效生存期和优选生存期，
单位为秒，取值范围是1-31536000，但<preferred-time>必须不大于<valid-time>，如果不配
置，默认的值<valid-time>为2592000，<preferred-time>为604800。参数infinity表示生存期
为无限值。 
命令模式：DHCPv6地址池配置模式。 
缺省情况：系统默认没有配置分配给特定前缀请求客户端的代理前缀。 
使用指南：本命令指定IPv6前缀与某个前缀请求客户端静态绑定。如果没有配置IAID则客
户端的任何IA都可以获取此前缀。一个地址池最多可以配置8个静态绑定的代理前缀。在
前缀代理服务中，静态绑定前缀优先于前缀池被使用。 
举例：以下命令把2001:da8::/48分配给DUID为0001000600000005000BBFAA2408，IAID
为12的前缀请求客户端。 
Switch(dhcp-1-config)#prefix-delegation 2001:da8::/48 0001000600000005000BBFAA2408 
iaid 12 

2.22 prefix-delegation add static route 

命令：prefix-delegation add static route 
no prefix-delegation add static route 
功能：DHCPv6 server在分配ipv6 前缀时，根据分配的prefix，client link address, interface vlan
下发一条ipv6静态路由。 
参数：无。 


缺省情况：缺省情况下不下发静态路由。 
命令模式：ipv6地址池配置模式。 
使用指南：该命令在地址池模式下配置，同时要求该地址池已经关联了ipv6 local pool，即
前缀地址池。 
举例：在dhcpv6 server上配置静态路由功能。 
Switch(config)# service dhcpv6 
Switch(config)# ipv6 local pool client-prefix-pool 2001:da8:1800::/40 48 
Switch(config)# ipv6 dhcp pool dhcp-pool 
Switch(dhcpv6- dhcp-pool-config)#dot1x enable 
Switch(dhcpv6- dhcp-pool-config)# prefix-delegation pool client-prefix-pool 
Switch(dhcpv6- dhcp-pool-config)#prefix-delegation add static route 

2.23 prefix-delegation pool 

命令：prefix-delegation pool <poolname> [lifetime {<valid-time> | infinity} 
{<preferred-time> | infinity}] 
no prefix-delegation pool <poolname> 
功能：配置DHCPv6地址池使用的代理前缀池名称。本命令的no操作删除DHCPv6地址池
使用的代理前缀池名称。 
参数：<poolname>为代理前缀池的名称，它是长度小于32的字符串。<valid-time> 和
<preferred-time>分别为从该前缀池分配IPv6前缀的有效生存期和优选生存期，单位为秒，
取值范围是1-31536000，但<preferred-time>必须不大于<valid-time>，如果不配置，默认的
值<valid-time>为2592000，<preferred-time>为604800。参数infinity表示生存期为无限值。 
命令模式：DHCPv6地址池配置模式。 
缺省情况：系统默认没有配置DHCPv6地址池使用的代理前缀池名称。 
使用指南：本命令指定DHCPv6地址池使用的代理前缀池名称，服务器提供代理前缀服务
时将从该前缀池中分配可用的前缀给客户端。本命令与ipv6 local pool命令配合使用。一个
地址池最多可以绑定1个代理前缀池。在删除DHCPv6地址池使用的代理前缀池名称时，
如果地址池已不关联代理前缀池，也没有配置静态绑定代理前缀，则服务器的前缀代理服务
将不可用。 
举例： 
Switch(dhcp-1-config)#prefix-delegation pool abc 

2.24 service dhcpv6 

命令：service dhcpv6 
no service dhcpv6 
功能：启动DHCPv6服务器功能；本命令的no操作为关闭DHCPv6服务。 
参数：无。 
缺省情况：DHCPv6服务缺省是关闭的。 
命令模式：全局配置模式。 

使用指南：DHCPv6服务包括DHCPv6服务器功能、DHCPv6中继的功能和DHCPv6前缀
代理功能。DHCPv6服务器功能、DHCPv6中继功能和DHCPv6前缀代理功能配置在接口上。


只有打开DHCPv6服务器功能，交换机才能在接口上给DHCPv6客户机分配IP地址、开启
DHCPv6的RELAY功能以及开启DHCPv6前缀代理功能。 
举例：打开DHCPv6服务器。 
Switch(config)#service dhcpv6 

2.25 show ipv6 dhcp 

命令：show ipv6 dhcp 
功能：显示交换机DHCPv6服务的使能开关以及DUID。 
命令模式：特权和配置模式。 
使用指南：显示交换机DHCPv6服务的使能开关以及DUID，服务器标识符选项只会使用
DUID-LLT类型的DUID。 
举例： 
Switch#show ipv6 dhcp 
DHCPv6 is enabled 
LLT DUID is <00:01:00:01:43:b7:1b:81:00:03:0f:01:5f:9d> 
LL DUID is <00:03:00:01:00:03:0f:01:5f:9d> 

2.26 show ipv6 dhcp binding 

命令：show ipv6 dhcp binding [<ipv6-address> | pd <ipv6-prefix|prefix-length> | count] 
功能：显示DHCPv6所有的地址或前缀绑定信息。 
参数：<ipv6-address>为某指定的IPv6地址；count表示显示DHCPv6地址绑定表项数量信
息。 
命令模式：特权和配置模式。 
使用指南：显示DHCPv6所有的地址或前缀绑定信息，包括类型、DUID、IAID、前缀、超
时时间等。 
举例: 
Switch#show ipv6 dhcp binding 
Client: iatype IANA, iaid 0x0e001d92 
DUID: 00:01:00:01:0f:55:82:4f:00:19:e0:3f:d1:83 
IANA leased address: 2001:da8::10 
Preferred lifetime 604800 seconds, valid lifetime 2592000 seconds 
Lease obtained at %Jan 01 01:34:44 1970 
Lease expires at %Jan 31 01:34:44 1970 (2592000 seconds left) 
The number of DHCPv6 bindings is 1 

2.27 show ipv6 dhcp conflict 

命令：show ipv6 dhcp conflict 
功能：显示有冲突记录的地址的日志信息。 
命令模式：特权和配置模式。 
举例： 


Switch#show ipv6 dhcp conflict 

2.28 show ipv6 dhcp interface 

命令：show ipv6 dhcp interface [<interface-name>] 
功能：显示交换机DHCPv6接口的信息。 
参数：<interface-name>为交换机接口名称及接口号，如果没有提供<interface-name>参数，
则系统显示当前所有DHCPv6接口的信息。 
命令模式：特权和配置模式。 
使用指南：显示交换机DHCPv6接口的信息，包括接口工作模式（Prefix delegation client、
DHCPv6 server、DHCPv6 relay），以及各种模式下的相关配置信息。 
举例： 
Switch#show ipv6 dhcp interface vlan10 
Vlan10 is in server mode 
Using pool: poolv6 
Preference value: 20 
Rapid-Commit is disabled 

2.29 show ipv6 dhcp pool 

命令：show ipv6 dhcp pool [<poolname>] 
功能：显示DHCPv6地址池的信息。 
参数：<poolname>为系统当前已配置DHCPv6地址池名称，长度小于32个字符。如果不提
供<poolname>参数，则系统显示所有DHCPv6地址池的信息。 
命令模式：特权和配置模式。 
使用指南：显示交换机DHCPv6地址池的配置信息以及动态分配信息，包括DHCPv6地址
池的名称，DHCPv6地址池的前缀信息，排除地址，DNS server等配置信息，以及关联的前
缀池信息。对于用作地址分配服务器模式的地址池，显示已经分配的地址绑定个数。对于用
作前缀代理服务器模式的地址池，显示已分配的前缀个数。 
举例： 
Switch#show ipv6 dhcp pool poolv6 

2.30 show ipv6 dhcp statistics 

命令：show ipv6 dhcp statistics 
功能：显示DHCPv6服务器的对各种DHCPv6数据包的统计信息。 
命令模式：特权和配置模式。 
举例： 
Switch#show ipv6 dhcp statistics 
Address pools 1 
Active bindings 0 
Expiried bindings 0 
Malformed message 0 


 Message Recieved 
DHCP6SOLICIT 0 
DHCP6ADVERTISE 0 
DHCP6REQUEST 0 
DHCP6REPLY 0 
DHCP6RENEW 0 
DHCP6REBIND 0 
DHCP6RELEASE 0 
DHCP6DECLINE 0 
DHCP6CONFIRM 0 
DHCP6RECONFIGURE 0 
DHCP6INFORMREQ 0 
DHCP6RELAYFORW 0 
DHCP6RELAYREPLY 0 
Message Send 
DHCP6SOLICIT 0 
DHCP6ADVERTISE 0 
DHCP6REQUEST 0 
DHCP6REPLY 0 
DHCP6RENEW 0 
DHCP6REBIND 0 
DHCP6RELEASE 0 
DHCP6DECLINE 0 
DHCP6CONFIRM 0 
DHCP6RECONFIGURE 0 
DHCP6INFORMREQ 0 
DHCP6RELAYFORW 0 
DHCP6RELAYREPLY 0 


显示信息 

解释 

Address pools 

配置的DHCPv6地址池个数； 

Active bindings 

自动分配地址的个数； 

Expiried bindings 

绑定超期的个数； 

Malformed message 

错误信息的个数； 

Message Recieved 

接收DHCPv6数据包的统计 

DHCP6SOLICIT 

其中DHCPv6 SOLICIT报文个数 

DHCP6ADVERTISE 

其中DHCPv6 ADVERTISE报文个数 

DHCPv6REQUEST 

其中DHCPv6 REQUEST报文个数 

DHCP6REPLY 

其中DHCPv6 REPLY报文个数 

DHCP6RENEW 

其中DHCPv6 RENEW报文个数 

DHCP6REBIND 

其中DHCPv6 REBIND报文个数 

DHCP6RELEASE 

其中DHCPv6 RELEASE报文个数 




DHCP6DECLINE 

其中DHCPv6 DECLINE报文个数 

DHCP6CONFIRM 

其中DHCPv6 CONFIRM报文个数 

DHCP6RECONFIGURE 

其中DHCPv6 RECONFIGURE报文个数 

DHCP6INFORMREQ 

其中DHCPv6 INFORMREQ报文个数 

DHCP6RELAYFORW 

其中DHCPv6 RELAYFORW报文个数 

DHCP6RELAYREPLY 

其中DHCPv6 RELAYREPLY报文个数 

Message Send 

发送DHCPv6数据包的统计 

DHCP6SOLICIT 

其中DHCPv6 SOLICIT报文个数 

DHCP6ADVERTISE 

其中DHCPv6 ADVERTISE报文个数 

DHCPv6REQUEST 

其中DHCPv6 REQUEST报文个数 

DHCP6REPLY 

其中DHCPv6 REPLY报文个数 

DHCP6RENEW 

其中DHCPv6 RENEW报文个数 

DHCP6REBIND 

其中DHCPv6 REBIND报文个数 

DHCP6RELEASE 

其中DHCPv6 RELEASE报文个数 

DHCP6DECLINE 

其中DHCPv6 DECLINE报文个数 

DHCP6CONFIRM 

其中DHCPv6 CONFIRM报文个数 

DHCP6RECONFIGURE 

其中DHCPv6 RECONFIGURE报文个数 

DHCP6INFORMREQ 

其中DHCPv6 INFORMREQ报文个数 

DHCP6RELAYFORW 

其中DHCPv6 RELAYFORW报文个数 



2.31 show ipv6 general-prefix 

命令：show ipv6 general-prefix 
功能：显示IPv6通用前缀池的信息。 
命令模式：特权和配置模式。 
使用指南：显示IPv6通用前缀池的信息，包括通用前缀池中的前缀数目，每个前缀的名称，
获取该前缀的接口，具体的前缀值。 
举例： 
Switch#show ipv6 general-prefix 

2.32 show ipv6 local pool 

命令：show ipv6 local pool 
功能：显示DHCPv6前缀池的信息和统计。 
命令模式：特权和配置模式。 
使用指南：显示DHCPv6前缀池的信息和统计，包括前缀池的名称，DHCPv6池中的前缀、
前缀长度、分配的前缀长度，可以自由分配前缀的个数，已经分配的前缀的个数和前缀信息。 
举例： 
Switch#show ipv6 local pool 
Pool Prefix Free In use 
a 2010::1/48 65536 0 


 


# 第3章 DHCP option 82配置命令 

3.1 debug ip dhcp relay packet 

命令：debug ip dhcp relay packet 
功能：使用本命令显示DHCP中继代理处理数据包的信息，包括option 82选项的添加和剥
离动作信息。 
参数：无 
命令模式：特权配置模式 
使用指南：运行时使用本命令显示中继代理处理中继数据包的过程，并显示相应的option82
动作信息。 
举例：配置显示DHCP中继代理处理数据包的信息。 
Switch#debug ip dhcp relay packet 

3.2 ip dhcp relay information option 

命令：ip dhcp relay information option 
no ip dhcp relay information option 
功能：设置本命令启用交换机中继代理的option82功能，本命令的no操作关闭交换机中继
代理的option82功能。 
参数：无 
缺省情况：系统默认关闭option82功能。 
命令模式：全局配置模式 
使用指南：只有配置本命令DHCP中继代理才能在DHCP请求报文中添加option82选项交
给服务器处理。启用本功能之前确保系统已经使能DHCP服务并配置转发目的端口67的udp
广播报文。 
举例：开启交换机中继代理的option82功能 
Switch(config)#service dhcp 
Switch(config)#ip forward-protocol udp bootps 
Switch(config)#ip dhcp relay information option 

3.3 ip dhcp relay information option delimiter 

命令：ip dhcp relay information option delimiter [colon | dot | slash | space] 
no ip dhcp relay information option delimiter 
功能：该命令用来配置用户在全局定义的用来生成option82子选项的各参数的分隔符，该
命令的no形式恢复分隔符为默认值，即slash。 
参数：无 
缺省情况：系统默认分隔符为slash (“/”)。 
命令模式：全局配置模式 

使用指南：当用户在全局自定义了用来生成option82子选项（remote-id，circuit-id）的各参


数后，该命令配置的分隔符用来分隔这些参数。 
举例：配置option82子选项各参数分隔符为dot（“.”）。 
Switch(config)#ip dhcp relay information option delimiter dot 

3.4 ip dhcp relay information option remote-id 

命令：ip dhcp relay information option remote-id {standard | <remote-id>} 
no ip dhcp relay information option remote-id 
功能：本命令用于设置从接口接收的DHCP请求报文添加option 82子选项2(远程ID选项)
的具体内容。本命令的no操作把添加option 82子选项2(远程ID选项)的形式设置为standard。 
参数：standard表示默认的交换机VLAN MAC格式，<remote-id>为用户自己指定的option 82
的remote-id内容，它是一个长度小于等于64的字符串。 
命令模式：全局配置模式 
缺省情况：系统默认使用standard形式设置option 82中的remote-id。 
使用指南：因为交换机添加的option 82信息要配合第三方的DHCP服务器使用，在交换机
的标准remote-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情况自己
指定remote-id的内容。 
举例：设置DHCP option82选项的子选项remote-id为street-1-1。 
Switch(config)# ip dhcp relay information option remote-id street-1-1 

3.5 ip dhcp relay information option remote-id format 

命令：ip dhcp relay information option remote-id format {default | vs-hp} 
功能：本命令设置交换机中继代理的option82功能remote-id默认格式。 
参数：default表示remote-id为十六进制格式的交换机VLAN MAC地址，vs-hp表示remote-id
兼容设备厂商HP的remote-id格式。 
缺省情况：系统默认option82功能remote-id格式为default。 
命令模式：全局配置模式 
使用指南：默认remote-id格式定义如下： 
其中MAC为交换机VLAN MAC地址。 
兼容设备厂商HP的remote-id格式定义如下： 
Remote option26MAC1 byte1 byte6bytetypeLengthRemote option24IP1 byte1 byte4 bytetypeLength


其中IP为DHCP报文来自三层接口的主IP地址。 
举例：配置交换机中继代理option82功能remote-id为兼容设备厂商HP格式。 
Switch(config)#ip dhcp relay information option remote-id format vs-hp 

3.6 ip dhcp relay information option self-defined 
remote-id 

命令：ip dhcp relay information option self-defined remote-id {hostname | mac | string 
WORD} 
no ip dhcp relay information option self-defined remote-id 
功能：该命令用来配置option82的生成方式，用户可以自定义用来生成option82子选项
remote-id的参数（集）。 
参数： WORD 自定义的remote-id字符串，最大长度为64。 
缺省情况：缺省采用标准生成方式。 
命令模式：全局配置模式 
使用指南：配置本命令后，若用户没有在接口上配置remote-id，则根据本命令的自定义生
成方式来生成option82子选项remote-id。对于mac，如果是用ascii的形式填到报文中则采
用形如00-02-d1-2e-3a-0d的形式。对于mac，如果是用ascii的形式填到报文中则采用形如
00-02-d1-2e-3a-0d的形式，如果是hex形式则占6个字节。各个选项按照命令配置的顺序填
入报文，中间用分隔符分隔（分隔符为ip dhcp relay information option delimiter配置）。 
举例：配置option82子选项remote-id的生成方式为hostname和字符串“abc”。 
Switch(config)#ip dhcp relay information option self-defined remote-id hostname string abc 

3.7 ip dhcp relay information option self-defined 
remote-id format 

命令：ip dhcp relay information option self-defined remote-id format [ascii | hex] 
功能：该命令用来配置relay option82中remote-id的生成格式。 
参数：无。 
缺省情况：系统默认生成格式为ascii。 
命令模式：全局配置模式 
使用指南：本命令的生成格式指定了用命令ip dhcp relay information option type self-defined 
remote-id生成remote-id的格式。 
举例：配置relay option82中remote-id的生成格式为hex。 
Switch(config)# ip dhcp relay information option self-defined remote-id format hex 

3.8 ip dhcp relay information option self-defined 
subscriber-id 

命令：ip dhcp relay information option self-defined subscriber-id {vlan | port | id (switch-id 


(mac | hostname)| remote-mac)| string WORD } 
no ip dhcp relay information option self-defined subscriber-id 
功能：该命令用来配置option82的生成方式，用户可以自定义用来生成option82子选项
circuit-id的参数（集）。 
参数：WORD 自定义的circuit-id字符串，最大长度为64。 
缺省情况：缺省采用标准生成方式。 
命令模式：全局配置模式 
使用指南：配置本命令后，若用户没有在接口上配置circuit-id，则根据本命令的自定义生成
方式来生成option82子选项circuit-id。用该命令生成的circuit-id的格式为：若self-defined 
format为ascii，则填入的vlan选项形如“Vlan2”，port选项形如“Ethernet1/0/1”，mac选项
和remote-mac选项形如“00-02-d1-2e-3a-0d”；若self-defined format为hex，则填入的vlan
选项占两个字节，port选项占4个字节，一个字节表示slot（对于机架式交换机，表示插槽
号；对于盒式交换机，为1），一个字节表示Module（默认为0），两个字节表示端口号，从
1开始，mac选项和remote-mac选项占6个字节。各个选项按照命令配置的顺序填入报文，
中间用分隔符分隔（分隔符为ip dhcp relay information option delimiter配置）。 
举例：配置生成option82子选项circuit-id的生成方式为port，mac。 
Switch(config)# ip dhcp relay information option self-defined subscriber-id port id switch-id mac 

3.9 ip dhcp relay information option self-defined 
subscriber-id format 

命令：ip dhcp relay information option self-defined subscriber-id format [ascii | hex] 
功能：该命令用来配置relay option82中circuit-id的生成格式。 
参数：无。 
缺省情况：系统默认生成格式为ascii。 
命令模式：全局配置模式 
使用指南：本命令的生成格式指定了用命令ip dhcp relay information option type self-defined 
subscriber-id生成circuit-id的格式。 
举例：配置relay option82中circuit-id的生成格式为hex。 
Switch(config)# ip dhcp relay information option self-defined subscriber-id format hex 

3.10 ip dhcp relay information option subscriber-id 

命令：ip dhcp relay information option subscriber-id {standard | <circuit-id>} 
no ip dhcp relay information option subscriber-id 
功能：本命令用于设置从接口接收的DHCP请求报文添加option 82子选项1(电路ID选项)
的形式，standard表示标准的vlan名加物理端口名形式，如“Vlan2+Ethernet1/0/12”，
<circuit-id>为用户自己指定的option 82的circuit-id内容，它是一个长度小于64的字符串。
本命令的no操作把添加option 82子选项1(电路ID选项)的形式设置为standard形式。 
参数：无 
命令模式：接口配置模式 
缺省情况：系统默认使用standard形式设置option 82中的circuit-id。 


使用指南：因为交换机添加的option 82信息要配合第三方的DHCP服务器使用，在交换机
的标准circuit-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情况自己
指定circuit-id的内容。 
举例：设置DHCP option82选项的子选项circuit-id为foobar 
Switch(config-if-vlan1)#ip dhcp relay information option subscriber-id foobar 

3.11 ip dhcp relay information option subscriber-id 
format 

命令：ip dhcp relay information option subscriber-id format {hex | acsii | vs-hp} 
功能：本命令设置交换机中继代理的option82功能subscriber-id默认格式。 
参数：hex表示subscriber-id为十六进制格式的VLAN和端口信息，acsii表示subscriber-id
为ACSII格式的VLAN和端口信息，vs-hp表示subscriber-id兼容设备厂商HP的格式。 
缺省情况：系统默认option82功能subscriber-id格式为acsii。 
命令模式：全局配置模式 
使用指南：ASCII格式的VLAN和端口信息形如“Vlan1+Ethernet1/0/11”。十六进制格式的
VLAN和端口信息定义如下： 
其中，VLAN字段填写交换机VLAN ID。Slot对于机架式交换机，表示插槽号；对于盒式
交换机，为1。Module默认为0。Port表示端口号，从1开始。 
兼容设备厂商HP的subscriber-id格式定义如下： 
其中Port表示端口号，从1开始。 
举例：配置交换机中继代理option82功能subscriber-id格式为十六进制格式。 
Switch(config)#ip dhcp relay information option subscriber-id format hex 
1806VLANSlotModulePort1 byte1 byte1 byte1 byte2 byte1 byte1 byte2 byteSuboptiontypeLengthCircuit 
ID typeLength12Port1 byte1 byte2 byteSuboptiontypeLength

3.12 ip dhcp relay information policy 

命令：ip dhcp relay information policy {drop | keep | replace} 
no ip dhcp relay information policy 

功能：本命令用于设置系统对于接收到的含有option82选项的DHCP请求报文的重转发策


略，其中drop模式表示如果报文中含有option82选项，则系统丢弃该DHCP报文不作处理；
keep模式表示系统保持现有报文中的option82选项不变转发给服务器处理；replace模式表
示系统使用自己的option82选项替换现有报文中的option82选项，然后转发给服务器处理。
本命令的no操作设置option82选项DHCP报文的重转发策略为replace。 
参数：无 
命令模式：接口配置模式 
缺省情况：系统默认使用replace模式使用本系统的option82选项替换现有报文中的option
选项。 
使用指南：由于DHCP客户端报文向DHCP服务器传递的过程中可能经过多个DHCP中继
代理，该路径上后续中继需要设置策略决定如何对先前中继添加的option82选项进行处理。
Option 82重转发策略的选择要配合DHCP服务器的配置策略而定。 
举例：设置DHCP报文option82选项的重转发策略为keep 
Switch(config-if-vlan1)#ip dhcp relay information policy keep 

3.13 ip dhcp server relay information enable 

命令：ip dhcp server relay information enable 
no ip dhcp server relay information enable 
功能：本命令用于设置交换机DHCP服务器支持对option82选项的识别。本命令的no操作
使服务器忽略处理option 82选项。 
参数：无 
命令模式：全局配置模式 
缺省情况：系统默认不启用option82选项识别功能。 
使用指南：如果希望交换机DHCP服务器识别option82选项并在应答报文中返回option 82
信息，需要配置本命令，否则交换机DHCP服务器会忽视option82选项的存在。 
举例：设置DHCP服务器支持option82选项 
Switch(config)# ip dhcp server relay information enable 

3.14 show ip dhcp relay information option 

命令：show ip dhcp relay information option 
功能：本命令显示系统DHCP option 82的状态信息，包括option82使能开关，接口重转发
策略，接口电路ID模式，以及交换机DHCP服务器option82使能开关。 
参数：无 
命令模式：特权和全局配置模式 
使用指南：运行时使用本命令检查中继代理option82状态信息。 
举例： 

Switch#show ip dhcp relay information option 
ip dhcp server relay information option(i.e. option 82) is disabled 
ip dhcp relay information option(i.e. option 82) is enabled 
Vlan2: 
ip dhcp relay information policy keep 


 ip dhcp relay information option subscriber-id standard 
Vlan3: 
ip dhcp relay information policy replace 
ip dhcp relay information option subscriber-id foobar 


 


# 第4章 DHCPv6 option37，38配置命令 

4.1 DHCPv6 option37，38配置命令 

4.1.1 address range 

命令：address range <start-ip> <end-ip> 
no address range <start-ip> <end-ip> 
功能：本命令在DHCPv6地址池配置模式下用来为DHCPv6服务器地址池中的一个DHCPv6 
class设置一个地址范围，no命令用来移除这个地址范围。不支持prefix/plen形式。 
参数：start-ip：定义地址池中地址范围的起始地址。 
end-ip：定义地址池中地址范围的结束地址。 
缺省情况：无。 
命令模式：DHCPv6地址池class配置模式 
使用指南：使用该命令为class分配的地址范围应做地址检查，保证分配到的地址范围不超
出所在地址池的地址范围。一个class仅分配一段地址范围，在同一地址池中的多个class
所分配的地址范围是可以有重叠的。如果不用该命令为一个DHCPv6 class在DHCPv6服务
器地址池中分配地址范围，那么默认这个class的地址范围是地址池中的整个子网。 
举例：将名为CLASS1的DHCPv6 class 关联到dhcpv6 pool 1中，为CLASS1分配地址范
围为2001:da8:100:1::2 到2001:da8:100:1::30。 
Switch(Config)#ipv6 dhcp pool 1 
Switch(dhcp-1-config)#class CLASS1 
Switch(dhcp-1-class-CLASS1-config)#address range 2001:da8:100:1::2 2001:da8:100:1::30 

4.1.2 class 

命令：class <class-name> 
no class <class-name> 
功能：本命令在DHCPv6地址池配置模式下将class关联到地址池中，并进入地址池中class
的配置模式，用no命令删除这种关联。 
参数：class-name：DHCPv6 class的名字。 
缺省情况：无。 
命令模式：DHCPv6地址池配置模式 
使用指南：应该首先用IPv6 DHCP Class全局配置命令定义好这个class。如果用class命令
输入了一个尚不存在的class名，那么将不创建该class。 
举例：将名为CLASS1的DHCPv6 class 关联到dhcpv6 pool 1中。 
Switch(Config)#ipv6 dhcp pool 1 
Switch(dhcp-1-config)#class CLASS1 


4.1.3 ipv6 dhcp class 

命令：ipv6 dhcp class <class-name> 
no ipv6 dhcp class <class-name> 
功能：本命令用于定义一个DHCPv6 class并进入DHCPv6 class配置模式，no命令用于删除
这个DHCPv6 class。 
参数：class-name：DHCPv6 class的名字，它是一个长度小于32的字符串。 
缺省情况：无。 
命令模式：全局配置模式 
使用指南：在一个DHCPv6 class中可以配置一组option 37或者option 38选项内容，或者同
时配置option 37和option 38选项内容。该命令当服务器端支持DHCPv6 class的时候才能使
用。 
举例：定义一个名为CLASS1的DHCPv6 class。 
Switch(Config)# ipv6 dhcp class CLASS1 

4.1.4 ipv6 dhcp relay remote-id 

命令：ipv6 dhcp relay remote-id <remote-id> 
no ipv6 dhcp relay remote-id 
功能：本命令用于设置从接口接收的DHCPv6请求报文添加option 37选项的形式，
<remote-id>为用户自定义的option 37的remote-id内容，它是一个长度小于128的字符串。
本命令的no操作恢复option 37 的remote-id选项的形式为默认的enterprise-number和vlan 
MAC地址。 
参数：remote-id：用户自定义的option 37的内容。 
缺省情况：系统默认使用vlan MAC地址作为remote-id的内容，vlan MAC形式如
“00-01-ac-12-23”，中间的连字符为‘-’。 
命令模式：接口配置模式 
使用指南：因为交换机添加的option 37信息有可能配合第三方的DHCPv6服务器使用，在
交换机的默认remote-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情
况自己指定remote-id的内容。系统默认使用enterprise-number和vlan MAC地址作为
remote-id的内容。 
举例：设置DHCPv6 option 37选项的remote-id为abc。 
Switch(Config-if-vlan1)# ipv6 dhcp relay remote-id abc 

4.1.5 ipv6 dhcp relay remote-id option 

命令：ipv6 dhcp relay remote-id option 
no ipv6 dhcp relay remote-id option 
功能：设置本命令允许交换机中继支持option 37选项功能，本命令的no操作关闭交换机中
继的option 37选项功能。 
参数：无。 
缺省情况：系统默认关闭交换机中继的option 37选项功能。 


命令模式：全局配置模式 
使用指南：只有配置本命令DHCPv6中继代理才能在DHCPv6请求报文中添加option 37选
项交给服务器或下一级中继代理处理。执行本命令之前确保系统已经使能DHCPv6服务。 
举例：开启交换机中继支持option 37选项功能。 
Switch(Config)#service dhcpv6 
Switch(Config)#ipv6 dhcp relay remote-id option 

4.1.6 ipv6 dhcp relay subscriber-id 

命令：ipv6 dhcp relay subscriber-id <subscriber-id> 
no ipv6 dhcp relay subscriber-id 
功能：本命令用于设置从接口接收的DHCPv6请求报文添加option 38选项的形式，
<subscriber-id>为用户自定义的option 38的subscriber-id内容，它是一个长度小于128的字
符串。本命令的no操作恢复option 38 的subscriber-id选项的形式为默认的VLAN名加物理
端口名形式，如“Vlan2+Ethernet1/0/2”。 
参数：subscriber-id：用户自定义的option 38的内容。 
缺省情况：系统默认使用VLAN名加物理端口名形式的形式设置option 38中的subscriber-id。 
命令模式：接口配置模式 
使用指南：因为交换机添加的option 38信息有可能配合第三方的DHCPv6服务器使用，在
交换机的标准subscriber-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器
情况自己指定subscriber-id的内容。系统默认使用VLAN名加物理端口名形式的形式设置
option 38中的subscriber-id。 
举例：设置DHCPv6 option 38选项的subscriber-id为abc。 
Switch(Config-if-vlan1)# ipv6 dhcp relay subscriber-id abc 

4.1.7 ipv6 dhcp relay subscriber-id option 

命令：ipv6 dhcp relay subscriber-id option 
no ipv6 dhcp relay subscriber-id option 
功能：设置本命令允许交换机中继支持option 38选项功能，本命令的no操作关闭交换机中
继的option 38选项功能。 
参数：无。 
缺省情况：系统默认关闭交换机中继的option 38选项功能。 
命令模式：全局配置模式 
使用指南：只有配置本命令DHCPv6中继代理才能在DHCPv6请求报文中添加option 38选
项交给服务器或下一级中继代理处理。执行本命令之前确保系统已经使能DHCPv6服务。
系统默认关闭交换机中继的option 38选项功能。 
举例：开启交换机中继支持option 38选项功能。 
Switch(Config)#service dhcpv6 
Switch(Config)#ipv6 dhcp relay subscriber-id option 


4.1.8 ipv6 dhcp relay subscriber-id select delimiter 

命令：ipv6 dhcp relay subscriber-id select (sp | sv | pv | spv) delimiter WORD (delimiter 
WORD | ) 
no ipv6 dhcp relay subscriber-id select delimiter 
功能：配置用户配置选项来生成subscriber-id，no命令恢复为最初的默认配置即VLAN名加
端口名的形式。 
参数：(sp | sv | pv | spv)：此选项是对slot，port，vlan的组合形式的选择，sp代表slot和port，
sv代表slot和vlan，pv代表port和vlan，spv代表slot、port和vlan。 
WORD：slot，port，vlan分隔符，取值范围是(#|.|,|;|:|/|space)，注意，这里有两个delimiter 
WORD，第一个是slot和port间的分隔符，第二个是port和vlan间的分隔符。 
缺省情况：默认此配置为空。 
命令模式：全局配置模式 
使用指南：该命令对已经自定义subscriber-id的端口不起作用，如果配置该命令后，用户又
自定义端口的subscriber-id，则以用户自定义为准。默认此配置为空。 
举例： 
Swithc(config)# ipv6 dhcp relay subscriber-id select sp delimiter # 

4.1.9 ipv6 dhcp server remote-id option 

命令：ipv6 dhcp server remote-id option 
no ipv6 dhcp server remote-id option 
功能：本命令用于设置DHCPv6服务器支持对option 37选项的识别。本命令的no操作使系
统不支持option 37选项。 
参数：无。 
缺省情况：系统默认不支持option 37选项功能。 
命令模式：全局配置模式 
使用指南：如果希望交换机DHCPv6服务器识别option 37选项并做处理，需要配置本命令，
否则交换机DHCPv6服务器会忽视option 37选项的存在。系统默认不支持option 37选项功
能。 
举例：设置DHCPv6服务器支持option 37选项。 
Switch(Config)# ipv6 dhcp server remote-id option 

4.1.10 ipv6 dhcp server select relay-forw 

命令：ipv6 dhcp server select relay-forw 
no ipv6 dhcp server select relay-forw 
功能：本命令用于设置DHCPv6服务器支持对报文中存在多个option 37选项或者option38
选项时对其进行选择，选择最里层relay-forw中的option 37选项和option38选项。本命令
的no操作恢复默认设置，即选择原始报文中的option 37选项和option38选项。 
参数：无。 
缺省情况：系统默认选择原始报文中的option 37选项和option38选项。 


命令模式：接口配置模式 
使用指南：使用该命令前确定服务器端已开启对option 37选项和option38选项的支持。系
统默认选择原始报文中的option 37选项和option38选项。 
举例：设置DHCPv6服务器vlan1接口选择最里层relay-forw中的option 37和option38选项
选项。 
Switch(Config-if-vlan1)# ipv6 dhcp server select relay-forw 

4.1.11 ipv6 dhcp server subscriber-id option 

命令：ipv6 dhcp server subscriber-id option 
no ipv6 dhcp server subscriber-id option 
功能：本命令用于设置DHCPv6服务器支持对option 38选项的识别。本命令的no操作使系
统不支持option 38选项。 
参数：无。 
缺省情况：系统默认不支持option 38选项功能。 
命令模式：全局配置模式 
使用指南：如果希望交换机DHCPv6服务器识别option 38选项并做处理，需要配置本命令，
否则交换机DHCPv6服务器会忽视option 38选项的存在。系统默认不支持option 38选项功
能。 
举例：设置DHCPv6服务器支持option 38选项。 
Switch(Config)# ipv6 dhcp server subscriber-id option 

4.1.12 ipv6 dhcp snooping remote-id 

命令：ipv6 dhcp snooping remote-id <remote-id> 
no ipv6 dhcp snooping remote-id 
功能：本命令用于设置在接收的DHCPv6请求报文中添加option 37选项的形式，<remote-id>
为用户自定义的option 37中remote-id的内容，它是一个长度小于128的字符串。本命令的
no操作恢复option 37中remote-id的内容为默认的enterprise-number和vlan MAC地址。 
参数：remote-id：用户自定义的option 37的内容。 
缺省情况：系统默认使用vlan MAC地址作为remote-id的内容，vlan MAC形式如
“00-01-ac-12-23”，中间的连字符为‘-’。 
命令模式：端口配置模式 
使用指南：因为交换机添加的option 37信息有可能配合第三方的DHCPv6服务器使用，在
交换机的标准remote-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情
况自己指定remote-id的内容。系统默认使用enterprise-number和vlan MAC地址作为
remote-id的内容。 
举例：设置DHCPv6 option 37选项的remote-id为abc。 
Switch(Config-if-Ethernet1/0/1)#ipv6 dhcp snooping remote-id abc 

4.1.13 ipv6 dhcp snooping remote-id option 

命令：ipv6 dhcp snooping remote-id option 


 no ipv6 dhcp snooping remote-id option 
功能：设置本命令允许DHCPv6 SNOOPING支持option 37选项功能，本命令的no操作关
闭DHCPv6 SNOOPING的option 37选项功能。 
参数：无。 
缺省情况：系统默认关闭DHCPv6 SNOOPING中的option 37选项功能。 
命令模式：全局配置模式 
使用指南：只有配置本命令DHCPv6 SNOOPING才能在DHCPv6报文中添加option 37选项
交给中继代理或服务器。执行本命令之前确保系统已经使能DHCPv6 SNOOPING。系统默
认关闭DHCPv6 SNOOPING中的option 37选项功能。 
举例：开启DHCPv6 SNOOPING的option 37选项功能。 
Switch(Config)#ipv6 dhcp snooping enable 
Switch(Config)#ipv6 dhcp snooping remote-id option 

4.1.14 ipv6 dhcp snooping remote-id policy 

命令：ipv6 dhcp snooping remote-id policy {drop | keep | replace} 
no ipv6 dhcp snooping remote-id policy 
功能：本命令用于设置系统对于接收到的含有option 37选项的DHCPv6报文的重转发策略，
其中drop模式表示如果报文中含有option 37选项，则系统丢弃该DHCPv6报文不作处理；
keep模式表示系统保持现有报文中的option 37选项不变转发给服务器处理；replace模式表
示系统使用自己的option 37选项替换现有报文中的option 37选项，然后转发给服务器处理。
本命令的no操作设置option 37选项DHCPv6报文的重转发策略为replace。 
参数：无。 
缺省情况：系统默认使用replace模式使用本系统的option 37选项替换现有报文中的option
选项。 
命令模式：全局配置模式 
使用指南：由于DHCPv6客户端报文可能已经含有option 37选项信息，所以须制定DHCPv6 
SNOOPING对该信息的处理策略。如果重转发策略设置为replace，系统预先必须开启option 
37选项功能。系统默认使用replace模式使用本系统的option 37选项替换现有报文中的option
选项。 
举例：设置DHCPv6 SNOOPING对DHCPv6报文的option 37选项的重转发策略为keep。 
Switch(Config)# ipv6 dhcp snooping remote-id policy keep 

4.1.15 ipv6 dhcp snooping subscriber-id 

命令：ipv6 dhcp snooping subscriber-id <subscriber-id> 
no ipv6 dhcp snooping subscriber-id 
功能：本命令用于设置在接收的DHCPv6请求报文中添加option 38选项的形式，
<subscriber-id>为用户自定义的option 38中subscriber-id的内容，它是一个长度小于128的
字符串。本命令的no操作恢复option 38中subscriber-id的内容为默认的VLAN名加物理端
口名形式，如“Vlan2+Ethernet1/0/2”。 
参数：subscriber-id：用户自定义的option 38的内容。 
缺省情况：系统默认使用VLAN名加物理端口名形式的形式设置option 38中的subscriber-id。 


命令模式：端口配置模式 
使用指南：因为交换机添加的option 38信息有可能配合第三方的DHCPv6服务器使用，在
交换机的标准subscriber-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器
情况自己指定subscriber-id的内容。系统默认使用VLAN名加物理端口名形式的形式设置
option 38中的subscriber-id。 
举例：设置DHCPv6 option 38选项的subscriber-id为abc。 
Switch(Config-if-Ethernet1/0/1)#ipv6 dhcp snooping subscriber-id abc 

4.1.16 ipv6 dhcp snooping subscriber-id option 

命令：ipv6 dhcp snooping subscriber-id option 
no ipv6 dhcp snooping subscriber-id option 
功能：设置本命令允许DHCPv6 SNOOPING支持option 38选项功能，本命令的no操作关
闭DHCPv6 SNOOPING的option 38选项功能。 
参数：无。 
缺省情况：系统默认关闭DHCPv6 SNOOPING中的option 38选项功能。 
命令模式：全局配置模式 
使用指南：只有配置本命令DHCPv6 SNOOPING才能在DHCPv6报文中添加option 38选项
交给中继代理或服务器。执行本命令之前确保系统已经使能DHCPv6 SNOOPING。系统默
认关闭DHCPv6 SNOOPING中的option 38选项功能。 
举例：开启DHCPv6 SNOOPING的option 38选项功能。 
Switch(Config)#ipv6 dhcp snooping enable 
Switch(Config)#ipv6 dhcp snooping subscriber-id option 

4.1.17 ipv6 dhcp snooping subscriber-id policy 

命令：ipv6 dhcp snooping subscriber-id policy {drop | keep | replace} 
no ipv6 dhcp snooping subscriber-id policy 
功能：本命令用于设置系统对于接收到的含有option 38选项的DHCPv6报文的重转发策略，
其中drop模式表示如果报文中含有option 38选项，则系统丢弃该DHCPv6报文不作处理；
keep模式表示系统保持现有报文中的option 38选项不变转发给服务器处理；replace模式表
示系统使用自己的option 38选项替换现有报文中的option 38选项，然后转发给服务器处理。
本命令的no操作设置option 38选项DHCPv6报文的重转发策略为replace。 
参数：无。 
缺省情况：系统默认使用replace模式使用本系统的option 38选项替换现有报文中的option 
38选项。 
命令模式：全局配置模式 
使用指南：由于DHCPv6客户端报文可能已经含有option 38选项信息，所以须制定DHCPv6 
SNOOPING对该信息的处理策略。如果重转发策略设置为replace，系统预先必须开启option 
38选项功能。系统默认使用replace模式使用本系统的option 38选项替换现有报文中的option 
38选项。 
举例：设置DHCPv6 SNOOPING对DHCPv6报文的option 38选项的重转发策略为keep。 
Switch(Config)# ipv6 dhcp snooping subscriber-id policy keep 


4.1.18 ipv6 dhcp snooping subscriber-id select delimiter 

命令：ipv6 dhcp snooping subscriber-id select (sp | sv | pv | spv) delimiter WORD (delimiter 
WORD | ) 
no ipv6 dhcp snooping subscriber-id select delimiter 
功能：配置用户配置选项来生成subscriber-id，no命令恢复为最初的默认配置即VLAN名加
端口名的形式。 
参数：(sp | sv | pv | spv)：此选项是对slot，port，vlan的组合形式的选择，sp代表slot和port，
sv代表slot和vlan，pv代表port和vlan，spv代表slot、port和vlan。 
WORD：slot，port，vlan分隔符，取值范围是(#|.|,|;|:|/|space)，注意，这里有两个delimiter 
WORD，第一个是slot和port间的分隔符，第二个是port和vlan间的分隔符。 
缺省情况：默认此配置为空。 
命令模式：全局配置模式 
使用指南：该命令对已经自定义subscriber-id的端口不起作用，如果配置该命令后，用户又
自定义端口的subscriber-id，则以用户自定义为准。默认此配置为空。 
举例： 
Swithc(config)# ipv6 dhcp snooping subscriber-id select sv delimiter # 

4.1.19 ipv6 dhcp use class 

命令：ipv6 dhcp use class 
no ipv6 dhcp use class 
功能：本命令用于设置DHCPv6服务器在进行地址分配时支持使用DHCPv6 class，本命令
的no操作使服务器在进行地址分配时不支持使用DHCPv6 class，但是却并不删除已经配置
的有关DHCPv6 class的信息。 
参数：无。 
缺省情况：系统默认DHCPv6服务器在进行地址分配时支持使用DHCPv6 class。 
命令模式：全局配置模式 
使用指南：默认DHCPv6服务器在进行地址分配时支持使用DHCPv6 class，进行no命令操
作时并不删除已配置的DHCPv6 class信息。执行本命令之前确保系统已经使能DHCPv6服
务。系统默认DHCPv6服务器在进行地址分配时支持使用DHCPv6 class。 
举例：设置DHCPv6服务器在进行地址分配时支持使用DHCPv6 class。 
Switch(Config)# ipv6 dhcp use class 

4.1.20 remote-id subscriber-id 

命令：{remote-id [*] <remote-id> [*] | subscriber-id [*] <subscriber-id> [*]} 
no {remote-id [*] <remote-id> [*] | subscriber-id [*] < subscriber-id> [*]} 
功能：本命令在IPv6 DHCP Class配置模式下配置匹配该class的option37选项和option38
选项。 
参数：<remote-id>: 字符串，用来匹配37选项中remote-id的内容，范围在1-128字节。 
<subscriber-id>:字符串，用来匹配38选项中subscriber-id的内容，范围在1-128字节。 


 [*]:可匹配0个或多个字符。 
缺省情况：无。 
命令模式：IPv6 DHCP Class配置模式 
使用指南：该命令用来设置一个与已经定义的DHCPv6 class相匹配的模式。可以在一个
DHCPv6 class配置多条命令。如果忽略该命令，在IPv6 DHCP Class模式下不配置任何模式， 
那么就认为任何一个remote-id或者subscriber-id都与这个DHCPv6 class相匹配，但是这个
remote-id或者subscriber-id必须是在DHCPv6 packet中存在的。 
举例：在名为CLASS1的DHCPv6 class中配置若干属于该class的remote-id或者subscriber-id
内容。 
Switch(Config)# ipv6 dhcp class CLASS1 
Switch(Dhcpv6-class)#remote-id abc* subscriber-id bcd* 
Switch(Dhcpv6-class)#remote-id edf* 
Switch(Dhcpv6-class)#subscriber *mmn 

4.2 监测和调试命令 

4.2.1 debug ipv6 dhcp detail 

命令：debug ipv6 dhcp detail 
功能：显示DHCPv6收发各类报文详细内容的debug显示，如果报文中携带option 37、option 
38，其内容也会显示出来。这个命令在server端和relay端均适用。 
参数：无。 
命令模式：特权用户配置模式 
使用指南：开启/关闭DHCPv6收发报文详细内容的debug显示。 
举例： 
Switch# debug ipv6 dhcp detail 
%Jan 01 01:38:45 2006 DHCPv6 DETAILS: contents of SOLICIT packet 
%Jan 01 01:38:45 2006 transaction-ID: 0x00b2d47c 
%Jan 01 01:38:45 2006 elapsed time option(8), option-len 2 
%Jan 01 01:38:45 2006 elapsed time: 0 
%Jan 01 01:38:45 2006 client ID option(1), option-len 14 
%Jan 01 01:38:45 2006 DUID: 00:01:00:01:0f:55:82:4f:00:19:e0:3f:d1:83 
%Jan 01 01:38:45 2006 identity association option(3), option-len 12 
%Jan 01 01:38:45 2006 IANA: 0x0e001d92, T1 0, T2 0 
%Jan 01 01:38:45 2006 vendor class option(16), option-len 14 
%Jan 01 01:38:45 2006 enterprise number : 311 
%Jan 01 01:38:45 2006 option request option(6), option-len 6 
%Jan 01 01:38:45 2006 requested-option: domain search list 
%Jan 01 01:38:45 2006 requested-option: DNS server list 
%Jan 01 01:38:45 2006 requested-option: vendor specific info 
%Jan 01 01:38:45 2006 remote-id option(37), option-len 14 
%Jan 01 01:38:45 2006 remote-id : 0x0a0b0c 
%Jan 01 01:38:45 2006 subscriber-id option(38), option-len 16 


%Jan 01 01:38:45 2006 subscriber-id : 0x0a0b0c0d 

4.2.2 debug ipv6 dhcp relay packet 

命令：debug ip dhcp relay packet 
功能：使用本命令显示系统处理中继数据包的信息。 
参数：无。 
命令模式：特权配置模式 
使用指南：运行时使用本命令显示中继代理处理中继数据包的过程，并显示相应的option 37
和option 38的动作信息。 
举例： 
Switch# debug ip dhcpv6 relay packet 
%May 19 16:45:34 2010 DHCPv6 RELAY PACKET: received msg0 from 
<fe80::211:22ff:fe33:4455> on <Vlan8> 
%May 19 16:45:34 2010 DHCPv6 RELAY PACKET: add subscriber-id option 
“Vlan8+Ethernet1/0/12” 

4.2.3 debug ipv6 dhcp snooping packet 

命令：debug ipv6 dhcp snooping packet 
功能：调试DHCPv6 SNOOPING报文信息，如果添加、删除option37与option38，相应信
息也会显示。 
参数：无。 
命令模式：特权用户配置模式 
使用指南：开启/关闭DHCPv6 snooping 处理dhcpv6报文的信息，包括接收报文类型，报
文源MAC，目的MAC，客户端标识client DUID，IA地址，优先生存期（preferred lifetime），
有效生存期（valid lifetime），报文丢弃等。 
举例： 
switch#debug ipv6 dhcp snooping packet 
dhcpv6 snooping packet debug is on 
switch#%Jan 05 00:26:40 2006 DHCP6SNP EVENT: Parse packet SOLICIT from 
fe80::200:ff:fe00:1 
src MAC 00-00-00-00-00-01 interface Ethernet1/0/23 vlan 24 
%Jan 05 00:26:40 2006 DHCP6SNP PACKET: Receive DHCPv6 packet SOLICIT from 
fe80::200:ff:fe00:1 
src MAC 00-00-00-00-00-01, dst MAC 33-33-00-01-00-02, 
interface Ethernet1/0/23 vlan 24, 
transaction-ID 6137412, smac host flag 0, dmac host flag 0 
%Jan 05 00:26:40 2006 DHCP6SNP PACKET: Forward packet SOLICIT (protocol 0x37) 
%Jan 05 00:26:40 2006 DHCP6SNP PACKET: to vlan 24 except port Ethernet1/0/23 (designPort 
flag 0) 
%Jan 05 00:26:40 2006 DHCP6SNP PACKET: and return packet to network stack 
switch# 


4.2.4 show ipv6 dhcp relay option 

命令：show ipv6 dhcp relay option 
功能：本命令显示系统中继代理的配置信息，包括中继代理option 37和option 38使能开关。 
参数：无。 
命令模式：特权配置模式 
使用指南：运行时使用本命令检查中继代理对option 37和option 38选项的配置状态。 
举例： 
Switch#show ipv6 dhcp relay option 
remote-id option enable 
subscriber-id option enable 
Interface Vlan 1: remote-id option configure “abc” 

4.2.5 show ipv6 dhcp snooping option 

命令：show ipv6 dhcp snooping option 
功能：本命令显示系统snooping的配置信息，包括其中的option 37和option 38使能开关。 
参数：无。 
命令模式：特权配置模式 
使用指南：运行时使用本命令检查中snooping对option 37和option 38选项的配置状态。 
举例： 
Switch#show ipv6 dhcp snooping option 
remote-id option enable 
subscriber-id option enable 
The slot port vlan select option is : port and vlan 
The delimiter is : # 


 


# 第5章 DHCP Snooping 配置命令 

5.1 debug ip dhcp snooping binding 

命令：debug ip dhcp snooping binding 
no debug ip dhcp snooping binding 
功能：该命令用来打开DHCP snooping调试开关，调试DHCP snooping绑定数据的状态。 
命令模式：特权用户配置模式。 
使用指南：主要用于调试DHCP snooping任务根据绑定数据添加ARP表项，dot1x用户，信
任用户表项的状态。 

5.2 debug ip dhcp snooping event 

命令：debug ip dhcp snooping event 
no debug ip dhcp snooping event 
功能：该命令用来打开DHCP snooping调试开关，调试DHCP snooping任务的状态。 
命令模式：特权用户配置模式。 
使用指南：主要用于调试DHCP snooping任务状态，可以输出DHCP snooping检查绑定数
据，执行端口动作等状态。 


5.3 debug ip dhcp snooping packet interface 

命令：debug ip dhcp snooping packet interface {[ethernet] <InterfaceName>} 
no debug ip dhcp snooping packet {[ethernet] <InterfaceName>} 
功能：该命令用来打开DHCP snooping调试开关，调试DHCP snooping接收报文的消息。 
参数：<InterfaceName>：接口名称。 
命令模式：特权用户配置模式。 
使用指南： DHCP snooping从特定端口接收报文的消息。 

5.4 debug ip dhcp snooping packet 

命令：debug ip dhcp snooping packet 
no debug ip dhcp snooping packet 
功能：该命令用来打开DHCP snooping调试开关，调试DHCP snooping处理报文的流程。 
命令模式：特权用户配置模式。 
使用指南： DHCP snooping处理DHCP报文的调试信息。这些调试信息包括报文处理流程
的每个步骤：添加报警信息、添加绑定信息、转发DHCP报文、添加/剥离option 82等等。 


5.5 debug ip dhcp snooping update 

命令：debug ip dhcp snooping update 
no debug ip dhcp snooping update 
功能：该命令用来打开DHCP snooping调试开关，调试DHCP snooping和HELPER SERVER
之间的通讯信息。 
命令模式：特权配置模式。 
使用指南： 调试DHCP snooping接收、发送与HELPER SERVER之际的通讯报文消息。 

5.6 enable trustview key 

命令：enable trustview key {0|7} <password> 
no enable trustview key 
功能：配置私有报文的DES加密密钥，本命令同时也是交换机启用私有报文加密/散列功能
的开关。 
参数：<password>是长度小于16的字符串，用作DES加密密钥。0表示以明文方式显示密
钥，7表示以密文方式显示密钥。 
命令模式：全局配置模式。 
缺省情况：交换机默认没有配置DES加密密钥，即交换机默认不启用私有报文加密/散列功
能。 
使用指南：交换机与DCN内网安全管理后台系统通过私有报文进行私有信息的传输，在默
认情况下，私有报文是以明文传递的，为了防止私有报文被窃听破解，可选择对私有报文的
内容进行加密，同时，管理员也需要在DCN内网安全管理后台配置相同的密钥。 
举例：使能私有报文的加密/散列功能。 
Switch(config)#enable trustview key 0 digitalchina 


5.7 ip dhcp snooping 

命令：ip dhcp snooping enable 
no ip dhcp snooping enable 
功能：开启DHCP Snooping功能。 
参数：无。 
命令模式：全局配置模式。 
缺省情况：DHCP snooping默认关闭。 
使用指南： 开启后将监听所有非信任端口的DHCP Server包。 
举例：启动DHCP snooping功能。 
switch(config)#ip dhcp snooping enable 

5.8 ip dhcp snooping action 

命令：ip dhcp snooping action {shutdown|blackhole} [recovery <second>] 


 no ip dhcp snooping action 
功能：设置或删除端口上的自动防御动作。 
参数：shutdown: 端口检测到伪装DHCP Server时，将shutdown此端口。 
blackhole：端口检测到伪装DHCP Server时，将以伪装数据包的vid和源mac设置
blackhole来阻止此Mac的流量。 
recovery：用户可选设置自动防御动作执行后还可以自动恢复（no shut端口或删除相
应的blackhole）。 
<second>：用户指定多长时间后恢复防御动作，单位：秒，范围是 10-3600。 
命令模式：端口配置模式。 
缺省情况：没有默认的防御动作。 
使用指南：必须全局开启DHCP snooping，才能配置此命令。信任端口不会检测DHCP Server
伪装，所以永远不会触发相应的防御动作。当端口从非信任端口变更为信任端口时，端口上
原来的防御动作将自动去除。 
举例：设置端口ethernet1/0/1的DHCP snooping防御动作为设置blackhole，自动恢复时间为
30秒。 
switch(config)#interface ethernet 1/0/1 
switch(Config- Ethernet 1/0/1)#ip dhcp snooping action blackhole recovery 30 

5.9 ip dhcp snooping action MaxNum 

命令：ip dhcp snooping action {<maxNum>|default} 
功能： 设置端口上同时生效的防御动作数目。 
参数：<maxNum>: 每个端口的防御动作数目，范围是1-200，默认为10。 
default：恢复默认的防御动作数目。 
命令模式：全局配置模式。 
缺省情况：默认数目为10。 
使用指南：设置防御动作数目限制，是为了防止交换机被攻击而耗尽系统资源。如果报警信
息的数目大于了设置的值，那么最早的防御动作将被强行恢复，并下发新的防御动作。 
举例：配置端口防御动作数量为100。 
switch(config)#ip dhcp snooping action 100 

5.10 ip dhcp snooping binding 

命令：ip dhcp snooping binding enable 
no ip dhcp snooping binding enable 
功能：开启DHCP snooping绑定功能。 
参数：无。 
命令模式：全局配置模式。 
缺省情况：DHCP snooping绑定默认关闭。 
使用指南：开启后将记录所有信任端口的DHCP Server分配的绑定信息。只有启动DHCP 
snooping功能之后，才能启动绑定功能。 
举例：启动DHCP snooping绑定功能。 
switch(config)#ip dhcp snooping binding enable 


相关命令：ip dhcp snooping enable 

5.11 ip dhcp snooping binding arp 

命令：ip dhcp snooping binding arp 
no ip dhcp snooping binding arp 
功能： 开启DHCP snooping绑定ARP功能。 
参数： 无。 
命令模式： 全局配置模式。 
缺省情况： DHCP snooping绑定ARP功能默认关闭。 
使用指南： 开启后DHCP snooping将根据绑定信息添加绑定ARP表项，只有启动绑定功能
之后才能启动绑定ARP功能。绑定ARP表项为静态表项，但是没有配置保留，直接添加到
NEIGHBOUR表中。绑定ARP表项优先级低于管理员配置的静态ARP表项，可以被静态
ARP表项覆盖；但是当静态ARP表项被删除之后，绑定ARP表项不能恢复，直到DHCP 
snooping重新捕获到绑定信息。添加绑定ARP表项是为了防止这些表项被ARP欺骗行为攻
击，同时这些静态表项无需重认证，可以避免交换机受到ARP扫描攻击时重认证ARP失败。 
只有启动DHCP snooping绑定功能之后，才能配置绑定ARP功能。 
举例： 启动DHCP snooping绑定ARP功能。 
switch(config)#ip dhcp snooping binding arp 
相关命令：ip dhcp snooping binding enable 

5.12 ip dhcp snooping binding dot1x 

命令：ip dhcp snooping binding dot1x 
no ip dhcp snooping binding dot1x 
功能：开启DHCP snooping绑定DOT1X功能。 
参数：无。 
命令模式：端口配置模式。 
缺省情况：所有端口默认不启动绑定DOT1X功能。 
使用指南：开启后DHCP snooping将把捕获的绑定信息通知到DOT1X模块，作为DOT1X
受控用户。这个命令和ip dhcp snooping binding user-control命令互斥。 
只有启动DHCP snooping绑定功能之后，才能配置绑定DOT1X功能。 
举例：在端口ethernet1/0/1启动绑定DOT1X功能。 
switch(config)#interface ethernet 1/0/1 
switch(Config- Ethernet 1/0/1)# ip dhcp snooping binding dot1x 
相关命令：ip dhcp snooping binding enable 
ip dhcp snooping binding user-control 

5.13 ip dhcp snooping binding user 

命令：ip dhcp snooping binding user <mac> address <ipaddress> vlan <vid> interface 
[Ethernet] <ifname> 
no ip dhcp snooping binding user <mac> interface [Ethernet] <ifname> 


功能： 配置静态绑定用户信息。 
参数： 
<mac>：静态绑定用户的MAC地址，MAC地址是绑定用户的唯一索引值； 
<ipaddress>：静态绑定用户的IP地址； 
<vid>：静态绑定用户的所属VLAN ID； 
<ifname>：静态绑定用户的接入端口。 
命令模式：全局配置模式。 
缺省情况：DHCP snooping默认没有静态绑定表项。 
使用指南：静态绑定用户和DHCP snooping捕获的动态绑定用户一样处理，可以通知DOT1X
作为DOT1X的受控用户，可以直接添加信任用户表项，可以添加绑定ARP表项。静态绑
定用户永远不会被老化，并且优先级大于动态绑定用户。只有启动DHCP snooping绑定功能
之后，才能配置静态绑定用户。 
举例：配置静态绑定用户。 
switch(config)#ip dhcp snooping binding user 00-03-0f-12-34-56 address 192.168.1.16 interface 
Ethernet 1/0/16 
相关命令：ip dhcp snooping binding enable 

5.14 ip dhcp snooping binding user-control 

命令：ip dhcp snooping binding user-control 
no ip dhcp snooping binding user-control 
功能：开启DHCP snooping绑定用户功能。 
参数：无。 
命令模式：端口配置模式。 
缺省情况：所有端口默认不启动绑定用户功能。 
使用指南：开启后DHCP snooping将把捕获的绑定信息直接作为信任用户允许访问所有资
源。这个命令和ip dhcp snooping binding dot1x命令互斥。 
只有启动DHCP snooping绑定功能之后，才能配置绑定用户功能，这个命令不受基于
VLAN的ip dhcp snooping限制，只受全局ip dhcp snooping enable限制。 
举例：在端口ethernet1/0/1启动绑定USER功能。 
switch(config)#interface ethernet 1/0/1 
switch(Config- Ethernet 1/0/1)#ip dhcp snooping binding user-control 
相关命令：ip dhcp snooping binding enable 
ip dhcp snooping binding dot1x 

5.15 ip dhcp snooping binding user-control max-user 

命令：ip dhcp snooping binding user-control max-user <number> 
no ip dhcp snooping binding user-control max-user 
功能： 设置DHCP snooping绑定用户功能时指定端口最多允许接入的用户数；本命令的no
操作为恢复缺省值。 
参数：<number> 最多允许的接入用户数，取值范围为0~1024。 
命令模式：端口配置模式。 


缺省情况：每个端口缺省最多允许接入的用户数为1024。 
使用指南：这个命令限制在端口使能ip dhcp snooping binding user-contrl时，根据绑定信息
下发成信任用户的最大数目。在默认情况下，允许将绑定信息下发成信任用户的数目为
1024。由于交换机的硬件资源有限，真正下发为信任用户的数据取决于交换机的硬件资源。
在交换机存在空闲硬件资源的情况下，如果通过此命令调整最大用户数，如果调整后的最大
用户数大于调整前的用户数，则DHCP snooping将未能设置成信任用户的绑定信息下发到硬
件成为信任用户。如果将最大用户数调小，则DHCP snooping根据新的最大用户数值重新调
整下发到硬件的绑定信息数。当下发到硬件的绑定信息数达到最大值后，新的DHCP用户
无法成为信任用户，则无法通过交换机访问其他网络资源。 
举例：在端口Ethernet1/0/1启动绑定dhcp snooping binding user功能，设置端口Ethernet1/0/1
最多允许接入5个用户。 
Switch(Config-If-Ethernet1/0/1)#ip dhcp snooping binding user-control max-user 5 
相关命令：ip dhcp snooping binding user-control 

5.16 ip dhcp snooping information enable 

命令：ip dhcp snooping information enable 
no ip dhcp snooping information enable 
功能： 设置本命令启用交换机DHCP snooping的option 82功能，本命令的no操作关闭交
换机DHCP snooping的option 82功能。 
参数： 无。 
缺省情况： DHCP snooping默认关闭option 82功能。 
命令模式： 全局配置模式。 
使用指南： 只有配置本命令DHCP snooping才能在DHCP请求报文中添加标准的option 82
选项并转发。option 82子选项1(电路ID选项) 的形式为标准的vlan名加物理端口名形式，
如vlan1+ethernet1/0/12。option 82子选项2(远端ID选项) 的形式为交换机cpu mac，如
00030f023301。如果接收到的含有option 82选项的DHCP请求报文，DHCP snooping使用
自己的option 82选项替换现有报文中的option 82选项；如果接收到的含有option 82选项的
DHCP应答报文，则将报文中的option 82选项丢弃再转发DHCP报文。 
举例： 开启交换机dhcp snooping的option 82功能。 
Switch(config)#ip dhcp snooping enable 
Switch(config)#ip dhcp snooping binding enable 
Switch(config)#ip dhcp snooping information enable 

5.17 ip dhcp snooping information option 
allow-untrusted 

命令：ip dhcp snooping information option allow-untrusted 
no ip dhcp snooping information option allow-untrusted 
功能：本命令用于设置允许从DHCP snooping的非信任端口接收含有option82选项的DHCP
报文；关闭此命令时，所有非信任端口将丢弃含有option82选项的DHCP报文。 
参数：无。 


命令模式：全局配置模式 
缺省情况：系统默认丢弃非信任端口接收的含有option82选项的DHCP报文。 
使用指南：启用DHCP snooping功能的交换机一般来说直接连接最终用户，为了防止用户
私自添加option82选项，默认关闭allow-untrusted功能。启用DHCP snooping功能的交换机
级联时，请配置级联端口为信任端口。 
举例：全局打开允许接收含有option82选项的DHCP报文功能。 
Switch(config)#ip dhcp snooping information option allow-untrusted 

5.18 ip dhcp snooping information option delimiter 

命令：ip dhcp snooping information option delimiter [colon | dot | slash | space] 
no ip dhcp snooping information option delimiter 
功能：该命令用来配置用户在全局定义的用来生成option82子选项的各参数的分隔符，该
命令的no形式恢复分隔符为默认值，即slash。 
参数：无。 
缺省情况：系统默认分隔符为slash (“/”)。 
命令模式：全局配置模式 
使用指南：当用户在全局自定义了用来生成option82子选项（remote-id，circuit-id）的各参
数后，该命令配置的分隔符用来分隔这些参数。 
举例：配置option82子选项各参数分隔符为dot（“.”）。 
Switch(config)# ip dhcp snooping information option delimiter dot 

5.19 ip dhcp snooping information option remote-id 

命令：ip dhcp snooping information option remote-id {standard | <remote-id>} 
no ip dhcp snooping information option remote-id 
功能：本命令用于设置从端口接收的DHCP请求报文添加option 82子选项2(远程ID选项)
的具体内容。本命令的no操作把添加option 82子选项2(远程ID选项)的形式设置为standard。 
参数：standard表示默认的交换机VLAN MAC格式，<remote-id>为用户自己指定的option 
82的remote-id内容，它是一个长度小于等于64的字符串。 
命令模式：全局配置模式 
缺省情况：系统默认使用standard形式设置option 82中的remote-id。 
使用指南：因为交换机添加的option 82信息要配合第三方的DHCP服务器使用，在交换机
的标准remote-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情况自己
指定remote-id的内容。 
举例：设置DHCP option82选项的子选项remote-id为street-1-1。 
Switch(config)# ip dhcp snooping information option remote-id street-1-1 

5.20 ip dhcp snooping information option self-defined 
remote-id 

命令：ip dhcp snooping information option self-defined remote-id {hostname | mac | string 


WORD} 
no ip dhcp snooping information option self-defined remote-id 
功能：该命令用来配置option82的生成方式，用户可以自定义用来生成option82子选项
remote-id的参数（集）。 
参数： WORD 自定义的remote-id字符串，最大长度为64。 
缺省情况：缺省采用标准生成方式。 
命令模式：全局配置模式 
使用指南：配置本命令后，若用户没有在全局配置命令ip dhcp snooping information option 
remote-id则根据本命令的自定义生成方式来生成option82子选项remote-id。对于mac，如
果是用ascii的形式填到报文中则采用形如00-02-d1-2e-3a-0d的形式，如果是hex形式则占
6个字节。各个选项按照命令配置的顺序填入报文，中间用分隔符分隔（分隔符为ip dhcp 
snooping information option delimiter配置）。 
举例：配置option82子选项remote-id的生成方式为 mac和自定义的字符串“abc”。 
Switch(config)# ip dhcp snooping information option self-defined remote-id mac string abc 

5.21 ip dhcp snooping information option self-defined 
remote-id format 

命令：ip dhcp snooping information option self-defined remote-id format [ascii | hex] 
功能：该命令用来配置snooping option82中remote-id的生成格式。 
参数：无。 
缺省情况：系统默认生成格式为ascii。 
命令模式：全局配置模式 
使用指南：本命令的生成格式指定了用命令ip dhcp snooping information option type 
self-defined remote-id生成remote-id的格式。 
举例：配置snooping option82中remote-id的生成格式为hex。 
Switch(config)# ip dhcp snooping information option self-defined remote-id format hex 

5.22 ip dhcp snooping information option self-defined 
subscriber-id 

命令：ip dhcp snooping information option self-defined subscriber-id {vlan | port | id 
(switch-id (mac | hostname)| remote-mac) | string WORD} 
no ip dhcp snooping information option type self-defined subscriber-id 
功能：该命令用来配置option82的生成方式，用户可以自定义用来生成option82子选项
circuit-id的参数（集）。 
参数： WORD 自定义的circuit-id字符串，最大长度为64。 
缺省情况：缺省采用标准生成方式。 
命令模式：全局配置模式 

使用指南：配置本命令后，若用户没有在端口上配置circuit-id则根据本命令的自定义生成
方式来生成option82子选项circuit-id。用该命令生成的circuit-id的格式为：若self-defined 


subscriber-id format为ascii，则填入的vlan选项形如“Vlan2”，port选项形如“Ethernet1/0/1”，
mac选项和remote-mac选项形如“00-02-d1-2e-3a-0d”；若self-defined format为hex，则填
入的vlan选项占两个字节，port选项占4个字节，一个字节表示slot（对于机架式交换机，
表示插槽号；对于盒式交换机，为1），一个字节表示Module（默认为0），两个字节表示端
口号，从1开始，mac选项和remote-mac选项占6个字节。各个选项按照命令配置的顺序
填入报文，中间用分隔符分隔（分隔符为ip dhcp snooping information option delimiter配置）。 
举例：配置option82子选项circuit-id的生成方式为vlan，port和remote-mac。 
Switch(config)#ip dhcp snooping information option self-defined subscriber-id vlan port id 
remote-mac 

5.23 ip dhcp snooping information option self-defined 
subscriber-id format 

命令：ip dhcp snooping information option self-defined subscriber-id format [ascii | hex] 
功能：该命令用来配置snooping option82中circuit-id的生成格式。 
参数：无。 
缺省情况：系统默认生成格式为ascii。 
命令模式：全局配置模式 
使用指南：本命令的生成格式指定了用命令ip dhcp snooping information option type 
self-defined subscriber -id生成circuit-id的格式。 
举例：配置snooping option82中circuit-id的生成格式为hex。 
Switch(config)#ip dhcp snooping information option self-defined subscriber-id format hex 

5.24 ip dhcp snooping information option 
subscriber-id 

命令：ip dhcp snooping information option subscriber-id {standard | <circuit-id>} 
no ip dhcp snooping information option subscriber-id 
功能：本命令用于设置从端口接收的DHCP请求报文添加option 82子选项1(电路ID选项)
的具体内容。本命令的no操作把添加option 82子选项1(电路ID选项)的形式设置为standard。 
参数：standard表示标准的vlan名加物理端口名形式，如Vlan2+Ethernet1/0/12，<circuit-id>
为用户自己指定的option 82的circuit-id内容，它是一个长度小于等于64的字符串。 
命令模式：端口配置模式 
缺省情况：系统默认使用standard形式设置option 82中的circuit-id。 
使用指南：因为交换机添加的option 82信息要配合第三方的DHCP服务器使用，在交换机
的标准circuit-id形式不能满足服务器的要求时，提供一种手段由用户依据服务器情况自己
指定circuit-id的内容。 
举例：设置DHCP option82选项的子选项circuit-id为P2。 
Switch(config)# ip dhcp snooping information option subscriber-id P2 


5.25 ip dhcp snooping information option 
subscriber-id format 

命令：ip dhcp snooping information option subscriber-id format {hex | acsii | vs-hp} 
功能：本命令设置DHCP snooping option82功能subscriber-id默认格式。 
参数：hex表示subscriber-id为十六进制格式的VLAN和端口信息，acsii表示subscriber-id
为ACSII格式的VLAN和端口信息，vs-hp表示subscriber-id兼容设备厂商HP的格式。 
缺省情况：系统默认option82功能subscriber-id格式为acsii。 
命令模式：全局配置模式 
使用指南：ASCII格式的VLAN和端口信息形如Vlan1+Ethernet1/0/11。十六进制格式的
VLAN和端口信息定义如下： 
其中，VLAN字段填写交换机VLAN ID。Slot对于机架式交换机，表示插槽号；对于盒式
交换机，为1。Module默认为0。Port表示端口号，从1开始。 
兼容设备厂商HP的subscriber-id格式定义如下： 
其中Port表示端口号，从1开始。 
举例：配置交换机DHCP snooping option82功能subscriber-id格式为十六进制格式。 
Switch(config)#ip dhcp snooping information option subscriber-id format hex 
1806VLANSlotModulePort1 byte1 byte1 byte1 byte2 byte1 byte1 byte2 byteSuboptiontypeLengthCircuit 
ID typeLength12Port1 byte1 byte2 byteSuboptiontypeLength

5.26 ip dhcp snooping limit-rate 

命令：ip dhcp snooping limit-rate <pps> 
no ip dhcp snooping limit-rate 
功能：设置交换机DHCP报文最大转发速率。 
参数：<pps>：每秒钟转发的DHCP报文数量，范围是0-100，默认为100。 
命令模式：全局配置模式。 
缺省情况：默认数目为100。 
使用指南：启动DHCP snooping之后，交换机监控所有DHCP报文并执行软件转发，交换机
软件性能与交换机型号、当前负载状态等相关。 
举例：设置交换机DHCP报文转发速率为50pps。 


switch(config)#ip dhcp snooping limit-rate 50 

5.27 ip dhcp snooping trust 

命令：ip dhcp snooping trust 
no ip dhcp snooping trust 
功能：设置或删除端口的DHCP snooping信任属性。 
参数：无。 
命令模式：端口配置模式。 
缺省情况：所有端口默认为非信任端口。 
使用指南：必须全局开启DHCP snooping，才能配置此命令。当端口从非信任端口变更为信
任端口时，端口上原来的防御动作将自动去除，所有安全历史记录将清除（不会清除系统日
志中的信息）。 
举例：设置端口ethernet1/0/1为DHCP snooping信任端口。 
switch(config)#interface ethernet 1/0/1 
switch(Config- Ethernet 1/0/1)#ip dhcp snooping trust 

5.28 ip user helper-address 

命令：ip user helper-address <svr_addr> [port <udp_port> ] source <src_addr> [secondary] 
no ip user helper-address [secondary] 
功能： 设置HELPER SERVER地址和端口号。 
参数： <svr_addr>：HELPER SERVER的IP地址，点分十进制形式。 
udp_port：HELPER SERVER的UDP端口号，范围是1－65535，默认值是9119。 
src_addr：交换机本地管理IP地址，点分十进制形式。 
sencondary：是否为第二SERVER地址。 
命令模式： 全局配置模式。 
缺省情况： 没有HELPER SERVER地址。 
使用指南： DHCP snooping把监控到的绑定信息发送到HELPER SERVER保存，当交换机
异常启动之后，可以从HELPER SERVER恢复这些绑定数据。HELPER SERVER功能一般
集成到DCBI软件包中。DHCP snooping和HELPER SERVER通过UDP协议进行通讯，并
且通过重传保证数据可靠到达。HELPER SERVER配置还可以用于从服务器下发DOT1X用
户数据，具体用法见《dot1x配置》章节。 
可以配置两个HELPER SERVER地址，DHCP snooping尽量和PRIMARY SERVER创建连接；
只有PRIMARY SERVER不可达时，才和SECONDARY SERVER建立连接。 
请注意：source地址是交换机的有效管理IP地址，如果交换机管理IP地址更新，应该及时
更新此配置。 
举例： 配置本地管理IP地址为100.1.1.1，主HELPER SERVER地址为100.1.1.100，端口
号为默认值。 
switch(config)#interface vlan 1 
switch(Config- If-Vlan1)#ip address 100.1.1.1 255.255.255.0 
switch(Config-If-Vlan1)exit 
switch(config)#ip user helper-address 100.1.1.100 source 100.1.1.1 


5.29 ip user private packet version two 

命令：ip user private packet version two 
no ip user private packet version two 
功能：在交换机和DCN内网安全管理系统trustview系统之间选择版本2私有报文进行通信。 
参数：无。 
命令模式：全局配置模式。 
缺省情况：交换机和DCN接入管理系统DCBI之间选择使用版本1私有报文进行通信。 
使用指南：如果管理员使用DCN接入管理系统DCBI，则需要在交换机和DCBI间使用版
本1私有报文进行通信；如果使用DCN内网安全管理系统TrustView，则必须使用版本2
的私有报文。 
举例：交换机使用版本2私有报文与DCN内网安全管理后台系统通信。 
switch(config)#ip user private packet version two 
相关命令：ip user helper-address 


5.30 show ip dhcp snooping 

命令：show ip dhcp snooping [interface [ethernet] <interfaceName>] 
功能：显示当前DHCP snooping的配置信息，或显示指定端口的防御动作记录。 
参数：<interfaceName>：指定端口名称。 
命令模式：特权和全局配置模式。 
缺省情况：无。 
使用指南： 如果不指定端口，那么显示当前DHCP snooping的配置信息，如果指定端口，
那么显示指定端口的防御动作记录。 
举例： 
switch#show ip dhcp snooping 
DHCP Snooping is enabled 
DHCP Snooping binding arp: disabled 
DHCP Snooping maxnum of action info:10 
DHCP Snooping limit rate: 100(pps), switch ID: 0003.0F12.3456 
DHCP Snooping droped packets: 0, discarded packets: 0 
DHCP Snooping alarm count: 0, binding count: 0, 
expired binding: 0, request binding: 0 
interface trust action recovery alarm num bind num 
--------------- --------- --------- ---------- --------- ---------- 
Ethernet1/0/1 trust none 0second 0 0 
Ethernet1/0/2 untrust none 0second 0 0 
Ethernet1/0/3 untrust none 0second 0 0 
Ethernet1/0/4 untrust none 0second 0 1 
Ethernet1/0/5 untrust none 0second 2 0 


Ethernet1/0/6 untrust none 0second 0 0 
Ethernet1/0/7 untrust none 0second 0 0 
Ethernet1/0/8 untrust none 0second 0 1 
Ethernet1/0/9 untrust none 0second 0 0 
Ethernet1/0/10 untrust none 0second 0 0 
Ethernet1/0/11 untrust none 0second 0 0 
Ethernet1/0/12 untrust none 0second 0 0 
Ethernet1/0/13 untrust none 0second 0 0 
Ethernet1/0/14 untrust none 0second 0 0 
Ethernet1/0/15 untrust none 0second 0 0 
Ethernet1/0/16 untrust none 0second 0 0 
Ethernet1/0/17 untrust none 0second 0 0 
Ethernet1/0/18 untrust none 0second 0 0 
Ethernet1/0/19 untrust none 0second 0 0 
Ethernet1/0/20 untrust none 0second 0 0 
Ethernet1/0/21 untrust none 0second 0 0 
Ethernet1/0/22 untrust none 0second 0 0 
Ethernet1/0/23 untrust none 0second 0 0 
Ethernet1/0/24 untrust none 0second 0 0 


显示信息 

解释 

DHCP Snooping is enable 

DHCP Snooping全局开启或关闭状态。 

DHCP Snooping binding arp 

是否启动绑定ARP功能。 

DHCP Snooping maxnum of 
action info 

端口防御动作数量限制。 

DHCP Snooping limit rate 

收包速率限制。 

switch ID 

交换机ID用户标记交换机，一般直接
取CPU MAC地址。 

DHCP Snooping droped packets 

因为接收到的DHCP报文超越限速而丢
弃的报文数量。 

discarded packets 

因为系统内部任务之间通讯失败而丢
弃报文数量，出现这种丢包现象很可能
是因为交换机CPU太忙碌DHCP 
snooping任务得不到调度而无法处理接
收到的DHCP报文。 

DHCP Snooping alarm count: 

报警信息数量。 

binding count 

绑定信息数量。 

expired binding 

已经超时暂时还没有被删除的绑定信
息数量，没有立即删除超时绑定信息可
能是因为交换机需要向helper server通
告这些信息，而helper server暂时还没
有确认收到。 

request binding 

REQUEST信息数量。 

interface 

端口名称。 




trust 

端口的信任属性。 

action 

端口的自动防御动作。 

recovery 

端口自动防御动作的恢复时间。 

alarm num 

端口自动防御动作历史记录数目。 

bind num 

端口相关绑定信息数量。 



 
switch#show ip dhcp snooping int Ethernet1/0/1 
interface Ethernet1/0/1 user config: 
trust attribute: untrust 
action: none 
binding dot1x: disabled 
binding user: disabled 
recovery interval:0(s) 
Alarm info: 0 
Binding info: 0 
Expired Binding: 0 
Request Binding: 0 


显示信息 

解释 

interface 

端口名称。 

trust attribute 

端口的信任属性。 

action 

端口的自动防御动作。 

recovery interval 

端口自动防御动作的恢复时间。 

maxnum of alarm info 

端口可记录的自动防御动作最大数目。 

binding dot1x 

端口是否启动绑定dot1x功能。 

binding user 

端口是否启动绑定user功能。 

Alarm info 

报警信息。 

Binding info 

绑定信息。 

Expired Binding 

超时绑定信息。 

Request Binding 

REQUEST信息。 



5.31 show ip dhcp snooping binding all 

命令：show ip dhcp snooping binding all 
功能：显示当前DHCP snooping全局绑定信息。 
参数：无。 
命令模式：特权和全局配置模式。 
缺省情况：无。 

使用指南：该命令可查看DHCP Snooping全局绑定信息，每条显示表项包括DHCP Snooping
绑定对应的MAC地址，IP地址，所属端口名和Vlan ID，以及绑定状态标识。必须全局开


启DHCP snooping，才能配置此命令。 
举例： 
switch#show ip dhcp snooping binding all 
ip dhcp snooping static binding count:1169, dynamic binding count:0 
MAC IP address Interface Vlan ID Flag 
-------------------------------------------------------------------------- 
00-00-00-00-11-11 192.168.40.1 Ethernet1/0/1 1 S 
00-00-00-00-00-10 192.168.40.10 Ethernet1/0/2 1 D 
00-00-00-00-00-11 192.168.40.11 Ethernet1/0/4 1 D 
00-00-00-00-00-12 192.168.40.12 Ethernet1/0/4 1 D 
00-00-00-00-00-13 192.168.40.13 Ethernet1/0/4 1 SU 
00-00-00-00-00-14 192.168.40.14 Ethernet1/0/4 1 SU 
00-00-00-00-00-15 192.168.40.15 Ethernet1/0/5 1 SL 
00-00-00-00-00-16 192.168.40.16 Ethernet1/0/5 1 SL 
-------------------------------------------------------------------------- 
绑定状态flag 解释 
S 静态绑定由shell命令配置 
D 动态绑定类型 
U 绑定已上传至服务器 
R 静态绑定由服务器配置 
O DHCP应答带有option82选项 
L 绑定已通知硬件驱动 
X 绑定成功通知dot1x模块 
E 绑定通知dot1x模块失败 

5.32 show trustview status 

命令：show trustview status 
功能：显示交换机收发DCN内网安全管理后台系统TrustView各种类型私有报文的状态信
息。 
参数：无。 
命令模式：特权和全局配置模式。 
缺省情况：无。 
使用指南：管理员可以使用此命令来显示交换机收发TrustView系统各种类型私有报文的状
态信息，包括版本通知是否成功，私有报文加密是否协商成功，free resource，web重定向
网页地址，收到的强制下线报文数目，收到的强制计费报文数目。 
举例： 
Switch#show trustview status 
Primary TrustView Server 200.101.0.9:9119 
TrustView version2 message inform successed 
TrustView inform free resource successed 
TrustView inform web redirect address successed 
TrustView inform user binding data successed 


TrustView version2 message encrypt/digest enabled 
Key: 08:02:33:34:35:36:37:38 
Rcvd 106 encrypted messages, in which MD5-error 0 messages, DES-error 0 messages 
Sent 106 encrypted messages 
Free resource is 200.101.0.9/255.255.255.255 
Web redirect address for unauthencated users is <http://200.101.0.9:8080> 
Rcvd 0 force log-off packets 
Rcvd 19 force accounting update packets 
using version two private packet 

 


# 第6章 DHCP option 60和option 43命令 

6.1 option 43 ascii LINE 

命令：option 43 ascii LINE 
no option 43 
功能：在ip dhcp pool模式下以ascii格式配置option 43字符串。本命令的no操作为删除
配置的option 43。 
参数：LINE：以ascii格式配置的option 43字符串，字符串长度范围为1-255。 
缺省情况：默认没有配置option 43字符串。 
命令模式：ip dhcp pool模式 
使用指南：无。 
举例：以ascii格式配置option 43为"AP 1000"。 
switch(config)#ip dhcp pool a 
switch (dhcp-a-config)#option 43 ascii AP 1000 

6.2 option 43 hex WORD 

命令：option 43 hex WORD 
no option 43 
功能：在ip dhcp pool模式下以hex格式配置option 43字符串。本命令的no操作为删除
配置的option 43。 
参数：WORD：以hex格式配置的option 43字符串，如a1241b。 
缺省情况：默认没有配置option 43。 
命令模式：ip dhcp pool模式 
使用指南：当使用hex方式配置option 43时，字符串需要按照TLV（Type-Length-Value）
的格式填写。比如通过option 43下发ip地址10.1.1.1，则此处的hex字符串应该为
01040A010101，其中Type=0x01，表示IP地址；Length=0x04，即IP地址的长度为4字
节；Value=0x0A010101，即10.1.1.1的十六进制格式。 
举例：以hex格式配置option 43为"01040a010101"。 
switch(config)#ip dhcp pool a 
switch (dhcp-a-config)#option 43 hex 01040a010101 

6.3 option 43 ip A.B.C.D 

命令：option 43 ip A.B.C.D 
no option 43 
功能：在ip dhcp pool模式下以IP格式配置option 43字符串。本命令的no操作为删除配
置的option 43。 
参数：A.B.C.D：以IP格式配置的option 43，如192.168.1.1。 
缺省情况：默认没有配置option 43。 


命令模式：ip dhcp pool模式 
使用指南：用该命令配置形如"192.168.1.1"的option 43，则填入报文中的option 43为
"C0A80101"。 
举例：以IP格式配置option 43为"192.168.1.1"。 
switch(config)#ip dhcp pool a 
switch (dhcp-a-config)#option 43 ip 192.168.1.1 

6.4 option 60 ascii LINE 

命令：option 60 ascii LINE 
no option 60 
功能：在ip dhcp pool模式下以ascii格式配置option 60字符串。本命令的no操作为删除
配置的option 60。 
参数：LINE：以ascii格式配置的option 60字符串，字符串长度范围为1-255。 
缺省情况：默认没有配置option 60字符串。 
命令模式：ip dhcp pool模式 
使用指南：无。 
举例：以ascii格式配置option 60为"AP 1000"。 
switch(config)#ip dhcp pool a 
switch (dhcp-a-config)#option 60 ascii AP 1000 

6.5 option 60 hex WORD 

命令：option 60 hex WORD 
no option 60 
功能：在ip dhcp pool模式下以hex格式配置option 60字符串。本命令的no操作为删除
配置的option 60。 
参数：WORD：以hex格式配置的option 60字符串，如a1241b。 
缺省情况：默认没有配置option 60。 
命令模式：ip dhcp pool模式 
使用指南：无。 
举例：以hex格式配置option 60为"41502031303030"。 
switch(config)#ip dhcp pool a 
switch(dhcp-a-config)#option 60 hex 41502031303030 

6.6 option 60 ip A.B.C.D 

命令：option 60 ip A.B.C.D 
no option 60 
功能：在ip dhcp pool模式下以IP格式配置option 60字符串。本命令的no操作为删除配
置的option 60。 
参数：A.B.C.D：以IP格式配置的option 60，如192.168.1.1。 
缺省情况：默认没有配置option 60。 


命令模式：ip dhcp pool模式 
使用指南：用该命令配置形如"192.168.1.1"的option 60，则匹配报文中的option 60为
"C0A80101"。 
举例：以IP格式配置option 60为"192.168.1.1"。 
switch(config)#ip dhcp pool a 
switch (dhcp-a-config)#option 60 ip 192.168.1.1 



-->