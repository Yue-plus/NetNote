# 交换机配置

## 使用设备

- [DCN S4600 系列全千兆绿色智能安全接入交换机](http://www.dcnetworks.com.cn/goods/43.html)
- [DCN S5750E 系列绿色智能万兆安全汇聚接入交换机](http://www.dcnetworks.com.cn/goods/24.html)



## 神州数码二层交换机划分vlan如下所示:

```text
S4600-28P-SI>enable
S4600-28P-SI#config
S4600-28P-SI(config)#vlan 10
S4600-28P-SI(config-vlan10)#interface ethernet 1/0/1-4
S4600-28P-SI(config-if-port-range)#switchport access vlan 10
Set the port Ethernet1/0/1 access vlan 10 successfully
Set the port Ethernet1/0/2 access vlan 10 successfully
Set the port Ethernet1/0/3 access vlan 10 successfully
Set the port Ethernet1/0/4 access vlan 10 successfully
S4600-28P-SI(config-if-port-range)#exit
S4600-28P-SI(config)#
如果还要改其他vlan和端口把上面的数字改一下就行了
```

## 神州数码交换机改名如下所示:
```sh
S4600-28P-SI#config
S4600-28P-SI#hostname xxx 
xxx(config)#exit
xxx#
名字在xxx里改
```
## telnet管理:
```sh
>config
#enable  特权
#config   全局
(config)#username li password admin  用户名为li 密码为admin
(config)#enable

 password admin  设置特权密码admin 
(config)#interface vlan 1   网络 vlan1
(config-if-vlan1)#ip address 192.168.10.200 255.255.255.0   设置VLAN1的IP以及子网掩码
(config-if-vlan1)#no shutdown   打开vlan1
#exit
(config)#telnet-server enable (启用telnet服务）
(config)#exit 退出
#write  保存
#set default 恢复出厂设置
#reload      重启交换机
```
##  创建vlan，分配端口:
```text
方法一：
(config)#vlan 10          创建vlan10
(config-vlan10)#exit      退出
(config)#interface1/0/1-2     进入1-2端口
(config-if-port-range)#switchport access vlan 10  分配1-2端口到vlan10
(config-if-port-range)#exit 退出
(config）#interface vlan 10     进入vlan10
(config-if-vlan10）ip address 192.168.10.1 255.255.255.0     设置vlan10的网关为192.168.10.1

方法二：
(config）#vlan 10          创建vlan10
(config-if-vlan10)switchport e1/0/1-2   分配1-2端口到vlan10
(config）#interface vlan 10     进入vlan10
(config-if-vlan10)ip address 192.168.10.1 255.255.255.0   设置vlan10的网关为192.168.10.1
```
## 三层交换机与路由互通:
```text
三层交换机fa0/1接口连接路由fa0/0接口
三层交换机
(config)#ip routing
(config)#interface e0/1
(config)#no switchport
(config)#ip address 192.168.1.253 255.255.255.0
路由
(config)#interface fa0/0
(config)#ip address 192.168.1.254 255.255.255.0
(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.253
```
## VRRP:
```text
(config)#router vrrp 10           /* 创建一个vrrp协议，标识为10 
```
## 二层隔离:
```text
(config)#isolate-port group 1          /*创建隔离组1*/
(config#)vlan 10
(config-vlan30)#isolate-port group 1 switchport access e1/0/1-2       /* 将1-2端口加入隔离组*/
```
## 环路检测:
```text
(config)#loopback-detection interval-time 10 10    /*配置环路检测的时间间隔为10s*/
(config)#loopback-detection control-recovery timeout 1800      /* 环路恢复时间为1800s */
(config)#interface e1/0/1                                            /*进入需要配置环路检测的端口/*
(config-if-ethernet1/0/1)#loopback-detection control block     /* 配置发现环路后的方式为阻塞该端口 */
(config-if-ethernet1/0/1)#loopback-detection specified-vlan 10     /*指定环路检测vlan*/
```
## vsf:
```text
(config)#vsf domain 1   /* 配置vsf域号为1(域号一致)*/
(config)#vsf member 1   /* 配置成员端口号为1（另一台为2）*/
(config)#vsf port-group 1   /*创建堆叠口*/
(config-vsf-port1)#vsf port-group interface1/0/25    /*将25端口加入堆叠*/
(config-vsf-port1)#vsf port-group interface1/0/26    /*将26端口加入堆叠*/
(config-vsf-port1)#exit
(config）#vsf priority 1             /* 配置vsf优先级为1（越大越优）*/
(config）#switchport convert mode vsf      /* 修改交换机为vsf模式 */

vsf LACP MAD分裂检测(vsf成员都需配置)
(config）#port-group 1           /*创建聚合组1*/
(config）#interfaceport-channel 1     /*进入聚合组1*/
(config-if-port-channel1)#vsf mad lacp enable    /*开启vsf lacp冲突检测*/
(config）#exit
(config）#vsf link delay 2000   /* 配置链路延迟上报为2000毫秒 */
(config）#vsf mac-address persistent timer  /* 打开vsf的mac计时 */
(config）#interfacee1/0/23;2/0/23     /*进入lacp检测端口（二层方向）*/
(config-if-port-range）#swi mode trunk    /* 配置干道 */
(config-if-port-range）#port-group 1 mode active   /* 将端口加入聚合组1，方式为主动 */
(config-if-port-range）#lacp timeout short  /* 配置lacp快速检测 */

vsf BFD MAD分裂检测(vsf成员都需配置)
(config）#vlan 111        /* 创建用于bfd mad检测的vlan */
(config-vlan111)#switch interface1/0/24      /* 将两台三层之间用于检测的端口加入检测vlan（需物理连线） */
(config-vlan111)#exit
(config）#int vlan 111     /* 进入vlan111*/
(config-if-vlan111)#vsf mad ip address 192.168.1.1 255.255.255.0 member 1   /* 配置bfd的检测vlan ip（另一台需同一网段） */
(config-if-vlan111)#vsf mad bfd enable   /*开启bfd mad检测*/

删除vsf
(config）#switch convert mode stand-alone    /* 配置交换机为独立模式 */
(config）#exit
(config)#dir                 /* 查看配置文件*/
(config)#delete vsf.cfg
(config)#delete vsf_startup.cfg 
```
## pbr:
```sh
(config)#ip access-list extended internet  /* 创建一个名为“internet”的扩展控制列表 */
(config-ip-ext-nacl-internet)#permit ip 10.10.0.0 0.0.255.255 202.99.192.0 0.0.0.15   /* 允许10.10.0.0/16访问202.99.192.0/20 */
(config-ip-ext-nacl-internet)#permit ip 10.100.100.0 0.0.0.255 202.99.192.0 0.0.0.15  /* 允许10.100.100.0/24访问202.99.192.0/20 */
(config)#class-map 1        /* 创建分类匹配表1 */
(config-classmap-1)#match access-group internet     /*在分类匹配表中添加“internet”ACL列表 */
(config)#policy-map 1       /* 创建策略表1 */
(config-policymap-1)#class 1       /* 策略表1匹配分类表1 */
(config-policymap-1-class-1)#set ip nexthop 10.10.255.2      /*设置qos流量下一跳的IP地址10.10.255.2（设置数据流需要经过哪个ip）*/
(config)#int e1/0/23       /*进入需要控制的ip的入接口 */
(config-if-ethernet1/0/23)#service-policy input 1      /* 挂载入口策略1 */

三步，一挂载
第一步，创建acl
第二步，创建分类匹配表，匹配acl
第三步，创建策略，匹配分类匹配表，设置下一跳
挂载，将策略表挂载到访问端口
```
## 发送免费arp报文:
```sh
(config)#ip gratuitous-arp 400  /*设置免费发送arp报文，间隔为400s*/
```
## sflow采样:
```shell script
(config)#sflow agent-address 10.10.200.254     /*设置采样的代理（源）地址为10.10.200.254*/
(config)#sflow destination 10.10.200.50        /*采样后发送到分析器10.10.200.50*/
(config)#sflow priority 1                      /*设置收报文的优先级为1（越大越优先，尽量配小）*/
(config)#int e1/0/1
(config-if-ethernet1/0/1)#sflow rate input 1000 /*设置采样的输入速率为1000pps*/
(config-if-ethernet1/0/1)#sflow rate output 1000 /*设置采样的输出速率为1000pps*/
(config-if-ethernet1/0/1)#sflow counter-interval 60   /*设置采样的最大间隔为60s*/
```
## 配置显示的帮助信息的语言类型:
```shell script
SWITCH#language ?
   chinese Set language Chinese
   english set language English
SWITCH#language chinese
SWITCH#language ?     !请注意使用“？”时，帮助信息已经成为了中文
   chinese 设置语言为中文
   english 设置语言为英文
```





