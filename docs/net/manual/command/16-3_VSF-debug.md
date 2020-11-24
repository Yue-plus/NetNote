# VSF 调试命令

## `show running-config`
- 命令：
  + `show running-config`
- 功能：查看当前所有配置信息。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：独立运行模式，VSF 运行模式。
-  VSF 角色：VSF 主控。
- 使用指南：实现 VSF 功能后，该命令把 VSF 相关的配置信息，集中在所有配置信息的最前端显示。

## ·show vsf·
- 命令：
  + `show vsf`
- 功能：显示 VSF 中所有成员设备的的相关信息，包括 VSF 的主控、备份主控，VSF 组的 CPU-MAC、VSF 的桥MAC、对设备的描述、成员优先级。是否使能检测版本同步、桥MAC地址保留功能的配置信息、VSF 合并自动重启功能是否使能、VSF 域，等等。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：该命令只在 VSF 模式下可用，通过 VSF 协议获得角色选举信息，通过读每台设备的 VSF 配置文件 vsf.cfg 获得VSF 配置信息，获得桥 MAC、CPU-MAC 等信息并显示。
- 举例：

```text
Switch# sho vsf
Switch  SlotID   Role   Priority   CPU-Mac   Description
------------------------------------------------

2    M1    M    1                   00-03-0f-0f-66-b4 (null)
2    7     S    1                    00-03-0f-0f-66-b4 (null)
The Bridge Mac of the VSF is: 00-03-0f-0f-66-b4
Auto Merge: yes
Mac Persistent: off
```

## `show vsf topology`
- 命令：
  + `show vsf topology`
- 功能：显示当前 vsf 拓扑信息。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南： VSF 合并或者有成员离开 VSF，都会触发 VSF 协议运行，计算新的拓扑结构，通过该命令及时获得当前的拓扑信息。
- 举例：

```text
Switch# show vsf topology
Switch VSF-Port1 Neighbor VSF-Port2 Neighbor
2 Ethernet2/7/3(inactive)   --    --    --
```



## `show vsf-config`
- 命令：
  + `show vsf-config`
- 功能：按设备的顺序显示 VSF 的配置信息，成员编号、成员优先级、成员 VSF 口的信息。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：当 VSF 组由单台设备构成，则收集本台机器 VSF 配置；若 VSF 组包含多台设备，则向其他设备发送收集配置请求，收集整个 VSF 组配置信息。
- 举例：
```text
Switch#   show   vsf   config
MemberID    Priority    VSF-Port1        VSF-Port2
2              1      Ethernet2/7/3      --
```



## `show mad config`
- 命令：
  + `show mad config`
- 功能：检查当前VSF 的 mad 检测配置。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：该命令只在 VSF 模式下可用。显示 LACP、BFD 是否开启，并获取哪些端口开启了这些功能。
- 举例：
```text
Switch# show mad config
Current lacp MAD status: Disable
Current bfd MAD status: Detecting
Reserved ports:
Reserved ports(defaults):
interface Ethernet2/7/3
MAD lacp enabled aggregation port:
MAD BFD enabled interface:
Interface Vlan10
vsf mad ip address 10.1.1.1 255.255.255.0 member 1
vsf mad ip address 10.1.1.2 255.255.255.0 member 2
```


|显示信息|解释|
|  :----:  | :----:  |
|Current lacp MAD status|显示 lacp MAD 当前的状态|
|Current bfd MAD status| 显示 BFD MAD 当前的状态|
|Reserved ports |用户配置的保留接口|
|Reserved ports(defaults) |统默认保留的接口（不需要用户配置，自动保留）|
|MAD lacp enabled aggregation port| 使能 LACP MAD 的聚合口|
|MAD BFD enabled interface |使能BFD MAD 的接口|



## `show vsf cpu-database all-member brief-information`
- 命令：
  + `show vsf cpu-database all-member brief-information`
- 功能：显示 CPU 数据库中所有成员简要信息。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式： VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：显示CPU 数据库中全部VSF 成员的简要信息。
- 举例：
```text
Switch# show vsf cpu-database all-member brief-information
Vsf cpu database include 1 member:
Member 2 : cpu key:00-03-0f-0f-66-b4, PRI:1
Master is : 2, Standby is : 0
```



## `show vsf cpu-database member basic-information`
- 命令：
  + `show vsf cpu-database [member <1-16>| basic information]`
- 功能：显示整个vsf 或某个成员CPU 数据库基本信息。
- 参数：`< member >`：VSF 成员，`<1-16>` : VSF 成员 member id。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式： VSF 运行模式。
- VSF 角色： VSF 主控。
- 使用指南：该命令可显示 CPU 数据库中全部或者指定VSF 成员的基本信息。
- 举例：
```text
Switch# show vsf cpu-database member 2 basic-information
Vsf cpu database member 2 basic information:
Key: 00-03-0f-0f-66-b4
CPU-MAC: 00-03-0f-0f-66-b4
Member ID: 2
Domain ID: 1
Sequence Num: 4
Master Prioriy: 1
Units Num: 1
Dest unit: 1
Dest port: 0
Unit prefer module id: 2
Unit require module id num: 1
Vsf port num: 1
Flags: 131072
Vsf port index 1:
Unit: 0
port: 1
Weight: 0
Bflag: 1
```



## `show vsf cpu-database member running-information`
- 命令：
  + `show vsf cpu-database [member <1-16>| running-information]`
- 功能：显示 CPU 数据库中的运行信息。
- 参数：`< member >`：VSF 成员，`<1-16>`: VSF 成员 member id。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式： VSF 运行模式。
- VSF 角色： VSF 主控。
- 使用指南：显示 CPU 数据库中全部或者指定 VSF 成员的运行信息。
- 举例：
```text
Switch# show vsf cpu-database member 1 running-information
%Member 1 not exist in the cpu-database!
Switch# show vsf cpu-database member 2 running-information
Vsf cpu database member 2 running information:
Flags: 1
Tx unit: 0
Tx port: 0
Dest module: 2
Dest port: 0
Module ID: 2
Topo index: 0
Vsf port index 1 link info:
Flags: 0
Tx cpu key:
Tx port-group: 0
Rx cpu key:
Rx port-group: 0
```


## `show vsf cpu-database member port-information`
- 命令：
  + `show vsf cpu-database [member <1-16>| port-information]`
- 功能：显示 CPU 数据库中的 VSF 口基本信息。
- 参数：`< member >`：VSF 成员，`<1-16>`:VSF 成员 member id。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式： VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：显示 CPU 数据库中全部或者指定 VSF 成员的 VSF 口基本信息。
- 举例：
```text
Switch# show vsf cpu-database member 2 port-information
Vsf cpu database member 2 port information:
Vsf port index 1:
Unit: 0
port: 1
Weight: 0
Bflag: 1
```


## `show vsf cpu-database member port-link-information`
- 命令：
  + `show vsf cpu-database [member <1-16>| port-link-information]`
- 功能：显示CPU 数据库中的VSF 口连接信息。
- 参数：`< member >`：VSF 成员，`<1-16>`:VSF 成员member id。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：无。
- 举例：
```text
Switch# show vsf cpu-database port-link-information
Vsf cpu database member 1 include 2 vsf port:
Vsf port index 1 link info:
Flags:1
Tx cpu key:00-01-05-11-11-11
Tx stk idx:1
Rx cpu key: 00-01-05-11-11-11
Rx cpu key:1
Vsf port index 2 link info:
Flags:1
Tx cpu key:00-01-05-11-11-12
Tx stk idx:2
Rx cpu key: 00-01-05-11-11-12
Rx cpu key:2
```


## `show slot`
- 命令：
  + `show [member <member-id>] slot <slot-id>`
- 功能：显示各板卡基本信息。
- 参数：`<member-id>` 为 VSF 模式下，成员设备的编号,取值范围为1～16；`<slot-id>`为板
- 卡所在槽号，盒式机槽位都是1。
- 缺省情况：member-id 和 slot-id 如都不指定，缺省为列出 vsf 中所有板卡信息。
- 命令模式： 特权用户配置模式。
- 举例：
```text
Switch#show member 13 slot 1
--------------------member :13--------------------
Inserted : YES
Module type : Switch
Work mode : STANDBY MASTER
Work state : RUNNING
Software package version : 7.0.3.0(R0075.0011)
Bootrom version : 7.2.2
CPLD version : N/A
Hardware version : 1.0.1
Part number : N110900062
Manufacture date : 2011/03/10
Temperature : 39C/102F
Uptime : 0 weeks, 0 days, 1 hours, 37 minutes
```


## `debug vsf packet detail <alive | all | config | member-infor | probe | routing | topo>`
- 命令：
  + `debug vsf packet detail <alive | all | config | member-infor | probe | routing | topo>`
  + `no debug vsf packet detail <alive | all | config | member-infor | probe | rrouting | topo>`
- 功能：开启各种VSF 协议报文查看开关。该命令的 no 命令为关闭相应报文的查看。
- 参数：`<alive>`：保活报文；`<all>`：打开所有 VSF 协议报文；`<config>`：配置信息报文，该参数指的是查看在 config 阶段中，VSF 成员间的报文交互。这一阶段主要是VSF 成员间通过报文交互，获取 master 选举的必要信息，进行 master、standby master 的选举；
`<member-infor>`：成员信息报文；`<probe>`：VSF 成员探测报文，其作用是探测到所有VSF口的连接信息；`<routing>`：VSF 成员信息传播报文，这些信息包括：本地 VSF 口信息，需要的 modid 信息，芯片个数信息，Master 选举优先级，CPUDB 的状态信息以及到达此 CPU的目的芯片号和端口号信息；`<topo>`：拓扑分析报文，拓扑分析阶段的任务是 Master 根据收集到拓扑信息计算出无环的网络，并且 Master 为所有成员分配Module ID，计算出每个成员 VSF 口和目的 Module ID 的对应关系，然后 Master 把这些结果分发给每个成员。
- 缺省情况：默认情况下未开启。
- 命令模式：特权模式。
- VSF 角色：VSF 主控、成员及线卡。
- 使用指南：VSF 组在形成过程中会经历discovery、topology analysis 等阶段，在不同阶段，设备会分别处于不同的状态，比如在discovery 阶段，设备分别经历probe、routing 和config三个子阶段，通过本debug 开关，可以有选择的查看在不同阶段的相应协议报文的细节情况。


## `debug vsf packet`
- 命令：
  +  `debug vsf packet <all | receive | send> vsf-port <vsf-port-number>`
  +  `no debug vsf packet <all | receive | send> vsf-port <vsf-port-number>`
- 功能：开启VSF 报文调试信息开关。该命令的 no 命令为关闭此 debug 功能。
- 参数：`<receive>`：打开收到 VSF 报文调试开关，`<send>`:打开发送 VSF 报文调试开关，
- `<all>`：接收和发送开同时打开，`<vsf-port-id>`：VSF 口号。
- 缺省情况：默认情况下未开启。
- 命令模式：特权模式。
- VSF 角色：VSF 主控、成员及线卡。
- 使用指南：开启 VSF 报文调试信息开关后，可以看到 VSF 协议报文的收发。


## `debug vsf event`
- 命令：
  + `debug vsf event`
  + `no debug vsf event`
- 功能：开启 VSF 事件调试信息开关。该命令的 no 命令为关闭此 debug 功能。
- 参数：无。
- 缺省情况：默认情况下未开启。
- 命令模式：特权模式。
- VSF 角色：VSF 主控、成员及线卡。
- 使用指南：开启 VSF 事件调试信息开关后，当 VSF 形运行各阶段中所定义的 event 事件发生后，可反馈给用户相应的输出。



## `debug vsf error`
- 命令：
  + `debug vsf error`
  + `no debug vsf error`
- 功能：开启 VSF 错误调试信息开关。该命令的no 命令为关闭此 debug 功能。
- 参数：无。
- 缺省情况：无。
- 缺省情况：默认情况下未开启。
- 命令模式：特权模式。
- VSF 角色：VSF 主控、成员及线卡。
- 使用指南：开启此 debug 后，可显示 VSF 形运行各阶段中各种出错信息。
