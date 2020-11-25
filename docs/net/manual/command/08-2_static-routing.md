# + 静态路由命令

## `ip route`

- 命令：
  + `ip route {<ip-prefix> <mask> | <ip-prefix>/<prefix-length>} {<gateway-address> |`
  + `<gateway-interface>} [<distance>]`
  + `no ip route {<ip-prefix> <mask> | <ip-prefix>/<prefix-length>} [<gateway-address> |`
  + `<gateway-interface>] [<distance>]`
- 功能：配置静态路由；本命令的no 操作为删除静态路由。
- 参数：`<ip-prefix>`和`<mask>`分别为目的 IP 地址和子网掩码，点分十进制格式；`<ip-prefix>`和`<prefix-length>`分别为目的 IP 地址和前缀长度；`<gateway-address>`为下一跳的 IP 地址，点分十进制格式；`<gateway-interface>`为下一跳接口，`< distance >`为路由管理距离值，取值范围为 1～255 
- 缺省情况：静态路由缺省管理距离值为 1 
- 命令模式：全局配置模式
- 使用指南：在配置静态路由的下一跳时，可采用指定路由数据包发送下一跳 IP 地址或者出接口方式
- 神州数码三层交换机的各种路由类型缺省的 distance 值为：
    |路由类型|Distance 值|
    |----|----|
    |直连路由|0|
    |静态路由|1|
    |OSPF|110|
    |RIP|120|
    |IBGP|200|
    |EBGP|20|
    在不改变各种路由管理距离值的情况下，直连路由优先级最高，依次是静态路由、EBGP、OSPF、RIP、IBGP
- 举例：
  ```text
    例1．添加一条静态路由。
      Switch(config)#ip route 1.1.1.0 255.255.255.0 2.1.1.1
    例2．添加缺省路由。
      Switch(config)#ip route 0.0.0.0 0.0.0.0 2.2.2.1
  ```

## `ip route vrf`

- 命令： 
  + `ip route vrf <vrf-name> {<ip-prefix> <mask>|<ip-prefix/prefix-length>}{<gateway-address>|null0} [<1-255>]`
  + `no ip route vrf <vrf-name> {<ip-prefix> <mask>|<ip-prefix/prefix-length>}{<gateway-address>|null0} [<1-255>]`
- 功能：为指定 VRF 配置静态路由。使用本命令前必须先配置成功 VPN 路由转发实例； no 命令删除已配置静态路由
- 参数：
  +  `<vrf-name>`：指定的 VRF 名称；
  +  `<ip-prefix>`：为目的IP 地址；
  +  `<mask>`：子网掩码，点分十进制格式；
  +  `<prefix-length>`：前缀长度；
  +  `<gateway-address>`：下一条地址；
  +  `null0`：黑洞路由；
  +  `<1-255>`：管理距离
- 缺省情况：默认不配置
- 命令模式：全局配置模式
- 举例：

 ```text
    配置 VRF-A 的静态路由，目的 IP 为 10.1.1.10 ，掩码 24 位，下一跳为 10.1.1.1 
    管理距离默认：
      Switch(config)# ip route vrf VRF-A 10.1.1.10 255.255.255.0 10.1.1.1
      Switch(config)#
  ```

## `show ip route`

- 命令：
  + `show ip route [<destination>|<destination >/<length>|connected | static | rip| ospf | bgp |isis| kernel| statistics| database [connected | static | rip| ospf | bgp | isis| kernel] |fib [statistics]]`
- 功能：显示路由表
- 参数：`<destination>`为目标网络地址；`<destination >/<length>`为目标网络地址加上前缀长度； connected 为直连路由；static 为静态路由；rip 为 RIP 路由；ospf 为 OSPF 路由； bgp 为
 BGP 路由； isis 为 ISIS 路由；kernel 为核心路由；statistics 显示路由条数；database 为路由数据库；fib 为核心路由表
- 命令模式： 所有模式
- 使用指南：显示路由表的内容，包括：路由类型、目的网络、掩码、下一跳地址、接口等
- 举例：

  ```text
  switch#show ip route
    Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
      O - OSPF, IA - OSPF inter area
      N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
      E1 - OSPF external type 1, E2 - OSPF external type 2
      i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
      * - candidate default
   Gateway of last resort is 210.0.0.3 to network 0.0.0.0
   S* 0.0.0.0/0 [1/0] via 210.0.0.3, Vlan1
   C 127.0.0.0/8 is directly connected, Loopback
   O IA 172.16.11.0/24 [110/40] via 210.14.0.1, Vlan3014, 00:00:47
   O IA 172.16.12.0/24 [110/40] via 210.14.0.1, Vlan3014, 00:00:47
   O IA 172.16.13.0/24 [110/40] via 210.14.0.1, Vlan3014, 00:00:47
   O IA 172.16.14.0/24 [110/40] via 210.14.0.1, Vlan3014, 00:00:47
   O IA 172.16.15.0/24 [110/50] via 210.14.0.1, Vlan3014, 00:00:47
   O E2 172.16.100.0/24 [110/0] via 210.14.0.1, Vlan3014, 00:00:46
  ```
  |显示信息|解释|
  |----|----|
|C - connected|直连路由，即与三层交换机直接相连的网段|
|S – static|静态路由，由用户手工配置的路由|
|R - RIP derived RIP|路由，三层交换机通过 RIP 协议得到的|
|O - OSPF derived OSPF|路由，三层交换机通过 OSPF 协议得到的|
|A- OSPF ASE OSPF|引入的路由|
|B- BGP derived BGP|路由，路由通过BGP 协议得到|
|Destination|目标网络|
|Mask|目标网络的掩码|
|Nexthop|下一跳IP 地址|
|Interface|下一跳经过的三层交换机接口|
|Preference|路由的优先级，如果到达目标网络还有其它类型的路由，在核心路由表中只显示优先级高的路由信息|

## `show ip route vrf`

- 命令：
  + `show ip route vrf <name> [connected | static | rip| ospf | bgp | isis| kernel|statistics|database[connected | static | rip| ospf | bgp | isis|kernel] ]`
  + `show ip route fib vrf <name> [default|main|local]`
- 功能：显示路由表
- 参数：`<name>` 是 VPN 路由转发实例的名称；`<destination>` 为目标网络地址；`<destination >/<length>`为目标网络地址加上前缀长度； connected 为直连路由；static 为静态路由；rip 为 RIP 路由； ospf 为 OSPF 路由； bgp 为 BGP 路由；isis 为 ISIS 路由； kernel 为核心路由；statistics 显示路由条数；database 为路由数据库；fib 为核心路由表。
- 命令模式：所有模式
- 使用指南：显示 VPN 路由表的内容，包括：路由类型、目的网络、掩码、下一跳地址、接口等

## `show ip route fib`

- 本型号交换机不支持该命令
