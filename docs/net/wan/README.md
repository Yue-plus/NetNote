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

#### 交换机文件备份、升级、还原

1) rgnos.bin系统文件

2) config.text配置文件

- 4 Enable密码丢失的解决办法

1) 重启

2) CTRL+C

3) 选择 4 （file）

4) 1 (移除)

5) Config.text

6) Laod （重启）

- 5交换机Vlan的划分

1) Vlan 10

2) In vlan 10

3) Ip add [IP] [子网掩码]

- 6交换机端口与Mac绑定和过滤

1) //进入串口

2) sw mode trunk
 sw port-security
3) sw port-security mac-address [MAC] 
 mac-address-table static address [MAC] vlan-ID interface ethernet [要绑定的端口]

- 7 生成树实验

1) spanning-tree
2）spanning-tree mstp config 进入MSTP生成树

- 8 交换机链路聚合

1) Int aggregateport 1

2) sw mode trunk

3) //进入串口

4) port-group 1

- 9交换机端口镜像

1) monitor session 1 source interface fastEthernet 0/2 both //被镜像的

2) monitor session 1 destination interface fastEthernet 0/3 //镜像端口

- 10多层交换机静态路由实验

1) ip route [存在的IP段] [子网掩码] [下一跳IP]

- 11RIP动态路由

1) router rip

2) version 2

3) network [IP段]

4) no auto-summary

- 12 端口安全

1) //进入端口

2) switchport port-security //开启端口安全

3) switchport port-security maximum 5 //最大连接5.

4) sw port-security violation shutdown //超出就shudown

- 13 OSPF动态路由

1) router ospf

2) network [IP段] [反码] area 0

- 14 标准ACL实验

1) access-list 1 deny 192.168.1.0 0.0.0.255 //拒绝访问的IP段

2) access-list 1 permit 192.168.1.0 0.0.0.255 //允许的IP段

3) //进入端口

4) ip access-group 1 in //把控制列表1 配入 端口，进入控制

5) ip access-group 1 out //把控制列表1 配入 端口，输出控制


- 15  扩展ACL实验

1) access-list 101 deny tcp A.B.C.D 255.255.255.0 A.B.C.D 255.255.255.0 eq ftp(WWW)// 禁止前面个网段访问后面个网段的FTP或者WWW


- 16 交换机单向访问控制

1) //使用标准ACL

2) access-list 1 deny 192.168.1.0 0.0.0.255

3) //进入端口

4) ip access-group 1 in

17. 交换机DHCP服务器配置

1) service dhcp

2) ip dhcp ping packets 1

3) ip dhcp excluded-address [ip1] [IP 2] //设置排斥的IP地址从1到2开始

4) ip dhcp pool [名字]

5) lease infinite //永久租用

6) network [IP段] [子网掩码]

7) default-router [网关IP]

8) dns-server [NDS IP]

18. 交换机DHCP中继功能

1) service dhcp

2) //进入VLAN

3) ip helper-address [DHCP的网管]

- 19  交换机VRRP实验

1) //进入VLAN

2) vrrp 10 ip [IP] //设置vrrp虚拟网关

3) vrrp 10 priority 150 //设置优先级为150（默认100）

- 20 交换机QOS实验 

1) //1.扩展控制列表，2策略，3方法 4配入端口

2) access-list 101 permit ip host A.B.C.D any //定义要限速的IP

3) class-map xiansu1 //创建class-map 名字为xiansu1

4) match access-group 101 //把控制列表套入策略xiansu1

5) policy-map pozz 创建policy-map名字为pozz

6) class xiansu1

7) police 8000 512 exceed-action drop //限速值为8000 kbit ,512KB

8) //进入端口

9) service-policy input pozz

*******

## 路由器

- 1. 路由器telnet

a) //进入全局配置模式

b) 

c) enable password 0 [密码]

d) Line vty 0 4 

e) Password 0 [密码]

- 2. Login路由器 

a) //先建立用户密码

b) Ip http port 80 //开启web端口为80

- 3. 路由器广域网HDLC封装配置

a) encapsulation hdlc

- 4. 路由器广域网PPP封装配置

a) encapsulation ppp

- 5. 路由器广域网PPP封装PAP配置

a) encapsulation ppp

b) ppp authentication pap

c) ppp pap sent-username [用户] password 0 [密码] //验证方

d) username [用户名] password 0 [密码] //被验证方

- 6. 路由器广域网PPP封装CHAP配置

a) encapsulation ppp

b) ppp authentication CHAP

- 7. ppp chap hostname [对方电脑]

- 8. ppp chap password 0 12345687

a) Ip nat Inside 设置为内网接口 

b) ip nat outside 设置为外网接口

c) access-list 10 permit A.B.C.D 0.0.0.255 //配置允许访问的ACL

d) ip nat inside source list 10 interface serial 1/0 overload //允许访问外网的ACL

- 9. NAT内网映射

a) ip nat inside source static tcp 192.168.1.1 80 interface s4/0 //把IP的80端口射到s4/0端口

- 10. 策略路由（PBR）配置

Access-list 101 permit ip host A.B.C.D any //定义ACL

Route-map test permit 10 ..\\定义策略

Match ip add0020

101 .//匹配ACL

Set int null 0 //如果匹配就丢弃

Set ip next-hop A.B.C.D //如果匹配就放到下一条

Route-map test permit 20 //如果不匹配执行默认路由

Int f 0/1 //进入端口

Ip policy route-map test //关联策略

- 11. 路由在发布

a) 当出现多动态路由的时候，一个网段只声明一次，要和下一条的协议一样

b) Re

redistribute rip subnets 重分布RIP路由

redistribute static subnets 重分布静态路由

5650S-1(config)#router rip

5650S-1(config-router)#version 2

5650S-1(config-router)#redistribute ospf

5650S-1(config-router)#redistribute stati

- 12. 配置QOS

a) //1.扩展控制列表，2策略，3方法 4配入端口

b) access-list 101 permit ip host A.B.C.D any //定义要限速的IP

c) class-map xiansu1 //创建class-map 名字为xiansu1

d) match access-group 101 //把控制列表套入策略xiansu1

e) policy-map pozz 创建policy-map名字为pozz

f) class xiansu1

g) police 8000 512 exceed-action drop //限速值为8000 kbit ,512KB

h) //进入端口

i) service-policy input pozz

- 13. VPN，pptp

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
****
## IPV6 配置隧道
** 配置隧道 **
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
****






