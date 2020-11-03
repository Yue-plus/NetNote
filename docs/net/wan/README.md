# 广域网基础

## 交换机配置

### 进入特权模式
```sh
eanble
```

### Telnet方式管理交换机.

#### 进入全局配置模式



```sh
enable password 0 [密码]

Line 0 4

Password 0 [密码]
```

### 交换机文件备份、升级、还原

```sh
1) rgnos.bin系统文件

2) config.text配置文件
```

### Enable密码丢失的解决办法

```sh
1) 重启

2) CTRL+C

3) 选择 4 （file）

4) 1 (移除)

5) Config.text

6) Laod （重启）
```

### 交换机Vlan的划分
```sh 

1) Vlan 10

2) In vlan 10

3) Ip add [IP] [子网掩码]

```

### 交换机端口与Mac绑定和过滤

```sh

1) //进入串口

2) sw mode trunk
 sw port-security
3) sw port-security mac-address [MAC] 
 mac-address-table static address [MAC] vlan-ID interface ethernet [要绑定的端口]

```

### 生成树实验

```sh
1) spanning-tree
2）spanning-tree mstp config 进入MSTP生成树

```
### 交换机链路聚合

```sh

1) Int aggregateport 1

2) sw mode trunk

3) //进入串口

4) port-group 1
```

### 交换机端口镜像
```sh

1) monitor session 1 source interface fastEthernet 0/2 both //被镜像的

2) monitor session 1 destination interface fastEthernet 0/3 //镜像端口

```
### 多层交换机静态路由实验
```sh
1) ip route [存在的IP段] [子网掩码] [下一跳IP]
```
### RIP动态路由
```sh
1) router rip

2) version 2

3) network [IP段]

4) no auto-summary
```

### 端口安全
```sh
1) //进入端口

2) switchport port-security //开启端口安全

3) switchport port-security maximum 5 //最大连接5.

4) sw port-security violation shutdown //超出就shudown
```
### OSPF动态路由
```sh
1) router ospf

2) network [IP段] [反码] area 0
```
### 标准ACL实验
```sh
1) access-list 1 deny 192.168.1.0 0.0.0.255 //拒绝访问的IP段

2) access-list 1 permit 192.168.1.0 0.0.0.255 //允许的IP段

3) //进入端口

4) ip access-group 1 in //把控制列表1 配入 端口，进入控制

5) ip access-group 1 out //把控制列表1 配入 端口，输出控制

```
### 扩展ACL实验
```sh
1) access-list 101 deny tcp A.B.C.D 255.255.255.0 A.B.C.D 255.255.255.0 eq ftp(WWW)// 禁止前面个网段访问后面个网段的FTP或者WWW
```

### 交换机单向访问控制
```sh
1) //使用标准ACL

2) access-list 1 deny 192.168.1.0 0.0.0.255

3) //进入端口

4) ip access-group 1 in
```
### 交换机DHCP服务器配置
```sh
1) service dhcp

2) ip dhcp ping packets 1

3) ip dhcp excluded-address [ip1] [IP 2] //设置排斥的IP地址从1到2开始

4) ip dhcp pool [名字]

5) lease infinite //永久租用

6) network [IP段] [子网掩码]

7) default-router [网关IP]

8) dns-server [NDS IP]
```

### 交换机DHCP中继功能
```sh
1) service dhcp

2) //进入VLAN

3) ip helper-address [DHCP的网管]
```
### 交换机VRRP实验
```sh
1) //进入VLAN

2) vrrp 10 ip [IP] //设置vrrp虚拟网关

3) vrrp 10 priority 150 //设置优先级为150（默认100）
```
### 交换机QOS实验 
```sh
1) //1.扩展控制列表，2策略，3方法 4配入端口

2) access-list 101 permit ip host A.B.C.D any //定义要限速的IP

3) class-map xiansu1 //创建class-map 名字为xiansu1

4) match access-group 101 //把控制列表套入策略xiansu1

5) policy-map pozz 创建policy-map名字为pozz

6) class xiansu1

7) police 8000 512 exceed-action drop //限速值为8000 kbit ,512KB

8) //进入端口

9) service-policy input pozz
```
## 路由器
### 路由器telnet
```sh
a) //进入全局配置模式

b) config

c) enable password 0 [密码]

d) Line vty 0 4 

e) Password 0 [密码]
```
### Login路由器 
```sh
a) //先建立用户密码

b) Ip http port 80 //开启web端口为80
```
### 路由器广域网HDLC封装配置
```sh
a) encapsulation hdlc
```
### 路由器广域网PPP封装配置
```sh 
a) encapsulation ppp
```
### 路由器广域网PPP封装PAP配置
```sh
a) encapsulation ppp

b) ppp authentication pap

c) ppp pap sent-username [用户] password 0 [密码] //验证方

d) username [用户名] password 0 [密码] //被验证方
```
### 路由器广域网PPP封装CHAP配置
```sh
a) encapsulation ppp

b) ppp authentication CHAP
```
### ppp chap hostname [对方电脑]
```sh
- 8. ppp chap password 0 12345687

a) Ip nat Inside 设置为内网接口 

b) ip nat outside 设置为外网接口

c) access-list 10 permit A.B.C.D 0.0.0.255 //配置允许访问的ACL

d) ip nat inside source list 10 interface serial 1/0 overload //允许访问外网的ACL
```
### NAT内网映射
```sh 
a) ip nat inside source static tcp 192.168.1.1 80 interface s4/0 //把IP的80端口射到s4/0端口
```
### 策略路由（PBR）配置
```sh
Access-list 101 permit ip host A.B.C.D any //定义ACL

Route-map test permit 10 ..\\定义策略

Match ip add0020

//匹配ACL

Set int null 0 //如果匹配就丢弃

Set ip next-hop A.B.C.D //如果匹配就放到下一条

Route-map test permit 20 //如果不匹配执行默认路由

Int f 0/1 //进入端口

Ip policy route-map test //关联策略
```

### 路由在发布
```sh
a) 当出现多动态路由的时候，一个网段只声明一次，要和下一条的协议一样

b) Re

redistribute rip subnets 重分布RIP路由

redistribute static subnets 重分布静态路由

5650S-1(config)#router rip

5650S-1(config-router)#version 2

5650S-1(config-router)#redistribute ospf

5650S-1(config-router)#redistribute stati
```
### 配置QOS
```sh
a) //1.扩展控制列表，2策略，3方法 4配入端口

b) access-list 101 permit ip host A.B.C.D any //定义要限速的IP

c) class-map xiansu1 //创建class-map 名字为xiansu1

d) match access-group 101 //把控制列表套入策略xiansu1

e) policy-map pozz 创建policy-map名字为pozz

f) class xiansu1

g) police 8000 512 exceed-action drop //限速值为8000 kbit ,512KB

h) //进入端口

i) service-policy input pozz
```
### VPN，pptp
```sh
a) ip local pool text 192.168.2.2 192.168.2.20 //定义获取VPN的地址池，

b) interface Virtual-Template 1 //进入虚接口1

c) ppp authentication pap //配置认证方式

d) ip unnumbered FastEthernet 1/0 //继承接口IP

e) peer default ip address pool pptp //关联地址池

f) //进入全局模式

g) vpdn enable //开启VPN

h) vpdn-group PPTP //定义组名称

i) accept-dialin //允许拨入访问

j) protocol pptp //允许拨入访问得协议

k) virtual-template 1 //关联虚接口，拨入时候分配给用户得虚接口
```
****

## IPV6 配置隧道
** 配置隧道 **\
```sh
- SW1 (config)# interface tunnel 1
SW1(config-if-Tunnel1)#ipv6 address 2001::1/64
SW1 (Config-if-Tunnel1)#tunnel source 2.2.2.1
SW1 (Config-if-Tunnel1)#tunnel destination 3.3.3.2
SW1 (Config-if-Tunnel1)#tunnel mode ipv6ip
SW1 (config)#ipv6 route 2001:2::/64 tunnel1
- SW2 (Config)#interface tunnel 1
SW2(Config-if-Tunnel1)#ipv6 address 2001::2/64
SW2 (Config-if-Tunnel1)#tunnel source 3.3.3.2
SW2 (Config-if-Tunnel1)#tunnel destination 2.2.2.1
SW2 (Config-if-Tunnel1)#tunnel mode ipv6ip
SW2 (config)#ipv6 route 2001:1::/64 tunnel1
```
****
## 基础操作
```sh
woSpanning Tree Protocol（生成树协议）                                                                               1.在交换机sw1中创建vlan，将接口分配到vlan中
                                                                                                                                              2.跨交换机之间的通信vlan，交换机之间的相连的两个端口开启trunk
switch(config)#spanning-tree                                                                                                 3.单臂路由：在路由上创建子接口【在路由器中一定不要配置fa0/0接口，路由上的
（通过此命令开启STP协议）                                                                                                     所以ip地址出个自vlan的网关】
                                                                                                                                              4. SVL【SVL————三加二】三层交换机配置vlan和IP          
switch#show spanning-tree(通过此命令看生成树）                                                                    5.                          【SPA】 
                                                                                                                                               
switch(config)# spanning-tree mst configuration
（进入MSTP配置模式）

switch(config-Mstp-Region)#name mst-pname
（为MST域配置名字，所有开启多实例MST的交换机的域名必须相同）

switch(config-Mstp-Region)#instance 1 vlan 10
switch(config-Mstp-Region)#instance 2 vlan 20
（将vlan加入实例）

switch(config)#spanning-tree mst 1 priority 28672 
（通过该命令修改实例的BID）

switch(config-Ethernet0/0/2 )#spanning-tree mst 1 cost 300000
（通过该命令修改端口的路径成本）

switch(config-Ethernet0/0/2)#spanning-tree mst 1 port-priority 144
（通过该命令修改实例的端口ID）
```

## 交换机的链路聚合与端口镜像
```sh
                  链路聚合

switch(config)#interface ethernet 0/0/1-2
switch(config-Port-Range)#port-group 1 mode on
switch(config-Port-Range)#exit
（通过此命令将选定接口进行静态链路聚合）
switch(config)#interface ethernet 0/0/1-2
switch(config-Port-Range)#port-group 1 mode active
（通过此命令将选定接口配置为动态主动协商模式）
switch(config)#interface ethernet 0/0/1-2
switch(config-Port-Range)#port-group 1 mode passive
（通过此命令将选定接口配置为动态被动协商模式）
 ```
```sh
                   端口镜像
switch(config)# monitor session 1 source  int  e0/0/2-10  both
switch(config)# monitor session 1 destination  int  e0/0/1
（rx为接收） （tx为发出） （both为强制入和出）
switch#show monitor 
(通过show monitor查看端口镜像配置)
```
```sh
             设置交换机trunk端口

switchA(Config)#interface ethernet 0/0/24
switchA(Config-Ethernet0/0/24)#switchport mode trunk
Set the port Ethernet0/0/24 mode TRUNK successfully
switchA(Config-Ethernet0/0/24)#switchport trunk allowed vlan all
set the port Ethernet0/0/24 allowed vlan successfully
switchA(Config-Ethernet0/0/24)#exit
```
## 静态路由
```sh
先配置vlan 
配置交换机各个接口的vlan和ip地址
配置各PC的IP位址，注意配置网关
验证PC之间是否连通
DCRS-5650-A#show ip route(查看路由表）
                 配置静态路由
DCRS-5650-A(Config)#ip route 192.168.30.0 255.255.255.0 192.168.100.2
DCRS-5650-A(Config)#ip route 192.168.40.0 255.255.255.0 192.168.100.2
（跳过你前面的交换机）
验证配置：
DCRS-5650-A#show ip route
C       127.0.0.0/8 is directly connected, Loopback
C       192.168.10.0/24 is directly connected, Vlan10
C       192.168.20.0/24 is directly connected, Vlan20
S       192.168.30.0/24 [1/0] via 192.168.100.2, Vlan100
S       192.168.40.0/24 [1/0] via 192.168.100.2, Vlan100
C       192.168.100.0/24 is directly connected, Vlan100
（S代表静态配置的网段）
```
##  思科单臂路由
```sh
      1.  2成交换机单臂路由
在2成交换机里创建vlan，有几个网段就创建几个
将vlan划分进端口
0/0.10   0/0.20
如端口没亮要进入端口用no shut打开
      1.0 路由配置
在config里
int fa 0/0
no shut
int 0/0.10
int 1/0.10
........
id=int 0/0.10
int 1/0.10

encapsolution dot1p id
ip add  IP 地址
        
        交换机的路由route RIP
启动RIP协议
DCRS-5650-A(config)#router rip
DCRS-5650-A(config-router)#network vlan 10
DCRS-5650-A(config-router)#network vlan 20
DCRS-5650-A(config-router)#network vlan 100
DCRS-5650-A(config-router)#
DCRS-5650-A#show ip rip
Codes: R - RIP, K - Kernel, C - Connected, S - Static, O - OSPF, I - IS-IS,
       B - BGP

   Network            Next Hop         Metric From            If     Time
R  192.168.10.0/24                          1                 Vlan10
R  192.168.20.0/24                          1                 Vlan20 
R  192.168.30.0/24    192.168.100.2         2 192.168.100.2   Vlan100 02:36
R  192.168.40.0/24    192.168.100.2         2 192.168.100.2   Vlan100 02:36
R  192.168.100.0/24                         1                 Vlan100

DCRS-5650-A#show ip route
Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
       O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default

C       127.0.0.0/8 is directly connected, Loopback
C       192.168.10.0/24 is directly connected, Vlan10
C       192.168.20.0/24 is directly connected, Vlan20
R       192.168.30.0/24 [120/2] via 192.168.100.2, Vlan100, 00:03:00
R       192.168.40.0/24 [120/2] via 192.168.100.2, Vlan100, 00:03:00
C       192.168.100.0/24 is directly connected, Vlan100
（R表示rip协议学习到的网段）

DCRS-5650-B#show ip rip
Codes: R - RIP, K - Kernel, C - Connected, S - Static, O - OSPF, I - IS-IS,
       B - BGP

   Network            Next Hop         Metric From            If     Time
R  192.168.10.0/24    192.168.100.1         2 192.168.100.1   Vlan101 02:42
R  192.168.20.0/24    192.168.100.1         2 192.168.100.1   Vlan101 02:42
R  192.168.30.0/24                          1                 Vlan30
R  192.168.40.0/24                          1                 Vlan40
R  192.168.100.0/24                         1                 Vlan101
```
                            
##  多层交换机OSPF动态路由
```sh 
      DCRS-5656-A(config)#router ospf
DCRS-5656-A(config-router)#network 192.168.10.0/24 area 0
DCRS-5656-A(config-router)#network 192.168.20.0/24 area 0
DCRS-5656-A(config-router)#network 192.168.100.0/24 area 0
DCRS-5656-A(config-router)#exit
DCRS-5656-A#show ip route
Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
       O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default

C       127.0.0.0/8 is directly connected, Loopback
C       192.168.10.0/24 is directly connected, Vlan10
C       192.168.20.0/24 is directly connected, Vlan20
O       192.168.30.0/24 [110/20] via 192.168.100.2, Vlan100, 00:00:23
O       192.168.40.0/24 [110/20] via 192.168.100.2, Vlan100, 00:00:23
C       192.168.100.0/24 is directly connected, Vlan100
（O代表ospf学习到的路由网段）

                             ospf区域认证

router ospf 1                                 //创建一个ospf进程
area 0 authentication message-digest          //开启区域0的认证
int vlan 100                                  //进入路由之间连接的vlan或接口
ip ospf authentication message-digest         //开启该接口的ospf认证
ip ospf message-digest-key 1 md5 123456789    //配置md5认证，密钥为123456789

                          生成交换机数据参数
                    Switch#show running-config

                 how version    显示交换机版本信息
show flash    显示保存在 flash 中的文件及大小
show arp    显示 ARP 映射表
show history   显示用户最近输入的历史
show rom    显示启动文件及大小
show running-config    显示当前运行状态下生效的交换机参数配置
show startup-config    显示当前运行状态下写在 Flash Memory 中的交换机参数配置，
show version 命令：show version
功能：显示交换机版本信息。
命令模式：特权用户配置模式
```


##  一次连接多个接口
```sh
(conf)int range fa 0/0/1-8
(range)no shi acc vlan 
使用range参数
```

## 设置所有vlan进入trunk(交换机可用）
```sh 
          swi	trunk all vlan all
```       
## DHCP排除地址(分段，单一效果一样）
```sh
         ip dhcp excluded-address 
```
## 开启加密服务  
```sh      
#services password-encryption
```
## 光口改电口
``` sh
命令：media-type {copper | copper-preferred-auto | fiber | sfp-preferred-auto } 
功能：设置光电组合端口的组合模式（只对组合端口有效）。
 参数：copper 为强制电口； copper-preferred-auto 为电口优先；
fiber 为强制光口； sfp-preferred-auto 为光口优先
```

## 本地 OAM 实体发出远端环回请求
```sh
：ethernet-oam remote-loopback   
    no ethernet-oam remote-loopback 
Loopback Supported 是否支持环回：YES表示支持；NO表示不支持
```
## md5认证
```sh
   R1(config-router)#interface s0/0/0
R1(config-if)#ip ospf message-digest-key 1 md5 123
```

## 静态路由
```sh 
R1
enable　　进入特权模式　　
config　　进入全局模式
hostname R1　　修改名称
interface s0/1　　进入端口
physical-layer speed 64000　　设置同步时钟
ip address 192.168.1.1 255.255.255.0　　设置IP 地址
encapsulation ppp　　设置封装协议
no shutdown　　开启端口
exit　　返回上一级
ip route 192.168.2.0 255.255.255.0 192.168.1.2　　添加静态路由
```

## 路由重分布配置
```sh
 
R1
enable　　进入特权模式
config　　进入全局模式
hostname R1　　修改名称
interface l0　　进入端口
ip address 192.168.3.254 255.255.255.0　　设置IP地址
interface s0/1　　进入端口
ip address 192.168.1.1 255.255.255.0　　设置IP地址
physical-layer speed 64000　　设置同步时钟
exit　　返回上一级
router rip　　启动RIP协议
version 2　　选择版本
network 192.168.1.0　　添加直连网段到RIP
network 192.168.3.0　　添加直连网段到RIP
相关命令
redistribute connect 　　　　将直连网段重分布到协议中
redistribute rip 　　　　　　 将RIP重分布到协议中
redistribute ospf [进程号] 　   将OSPF重分布到协议
 ```
 
## ru邻居
```sh 
参数 参数说明 ip ospf authentication  配置 OSPF 接口收发包的认证方
式。 ip ospf cost cost 值 配置 OSPF 接口发送包的权值。 ip ospf retransmit-interval seconds 属于同一个 OSPF 接口的邻居之间重传 LSA 的秒数。 ip ospf transmit-delay seconds 配置在一个 OSPF 接口传输 LSA 的估计时间（秒为单位）。 ip ospf priority number 配置路由器成为 OSPF DR 路由器的优先值。 ip ospf hello-interval seconds 配置在 OSPF 接口发送 hello 包的时间间隔。 ip ospf dead-interval seconds 在这个规定的时间间隔内，未收到邻居的 hello 包，则认为 邻居路由器已关机。 ip ospf password key 为一个网段内的邻接路由的认证口令。它使用 OSPF 的简单的口令认证。 ip ospf message-digest-key keyid md5 key 要求 OSPF 使用 MD5 认证。 ip ospf passive 在端口上不发送 HELLO 报文。
dir
del
reboot

rou dhcp
```
 ## 防火墙热备份	
防火墙A/B
teack judy:建立一个监控组
interface Ethernet 0/0/1 weight 255:监控接口，监控权255
interface Ethernet 0/0/2 weight 255:监控接口，监控权255
 

