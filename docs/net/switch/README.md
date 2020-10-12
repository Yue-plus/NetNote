# 神州数码交换机配置

## 神州数码二层交换机划分vlan如下所示:

``` sh
S4600-28P-SI>ena
S4600-28P-SI#conf
S4600-28P-SI(config)#vlan 10
S4600-28P-SI(config-vlan10)#interface ethernet 1/0/1-4
S4600-28P-SI(config-if-port-range)#switchport access vlan 10
Set the port Ethernet1/0/1 access vlan 10 successfully
Set the port Ethernet1/0/2 access vlan 10 successfully
Set the port Ethernet1/0/3 access vlan 10 successfully
Set the port Ethernet1/0/4 access vlan 10 successfully
S4600-28P-SI(config-if-port-range)#exi
S4600-28P-SI(config)#
如果还要改其他vlan和端口把上面的数字改一下就行了
```
## 神州数码交换机改名如下所示:
```sh
S4600-28P-SI#conf
S4600-28P-SI#hostname xxx 
xxx(config)#exi
xxx#
名字在xxx里改
```
## telnet管理:
```sh
>ena     特权
#conf    全局
(config)#username li pass admin  用户名为li 密码为admin
(config)#ena pass admin  设置特权密码admin 
(config)#int vlan 1   网络 vlan1
(config-if-vlan1)#ip add 192.168.10.200 255.255.255.0   设置VLAN1的IP以及子网掩码
(config-if-vlan1)#no shutdown   打开vlan1
#exit
(config)#telnet-server enable (启用telnet服务）
(config)#exit 退出
#write  保存
#set default 恢复出厂设置
#wri         保存
#reload      重启交换机
```
##  创建vlan，分配端口:
```text
方法一：
(config)#vlan 10          创建vlan10
(config-vlan10)#exit      退出
(config)#int e1/0/1-2     进入1-2端口
(config-if-port-range)#swi acc vlan 10  分配1-2端口到vlan10
(config-if-port-range)#exit 退出
(config）#int vlan 10     进入vlan10
(config-if-vlan10）ip add 192.168.10.1 255.255.255.0     设置vlan10的网关为192.168.10.1

方法二：
(config）#vlan 10          创建vlan10
(config-if-vlan10)swi int e1/0/1-2   分配1-2端口到vlan10
(config）#int vlan 10     进入vlan10
(config-if-vlan10)ip add 192.168.10.1 255.255.255.0   设置vlan10的网关为192.168.10.1
```
## 三层交换机与路由互通:
```text
三层交换机fa0/1接口连接路由fa0/0接口
三层交换机
(config)#ip routing
(config)#int fa0/1
(config)#no switchport
(config)#ip add 192.168.1.253 255.255.255.0
路由
(config)#int fa0/0
(config)#ip add 192.168.1.254 255.255.255.0
(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.253
```






