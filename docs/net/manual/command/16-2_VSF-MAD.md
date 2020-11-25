# VSF 冲突检测配置与调试命令

## `vsf mad lacp enable`
- 命令：
  + `vsf mad lacp enable`
  + `no vsf mad lacp enable`
- 功能：打开指定 port-channel  端口支持 LACP  MAD 检测功能。该命令的no 命令为关闭 port-channel 口上的 LACP MAD 检测功能。
- 参数：无。
- 缺省情况：LACP MAD 检测功能关闭。。
- 命令模式： port-channel 端口配置模式。
- 运行模式： VSF  运行模式。
- VSF 角色： VSF  主控。
- 使用指南：处于VSF 模式的设备才能配置该命令，配置指定的port-channel 为 LACP MAD
冲突检测组，组成员发送带 MAD 的 TLV 报文。


## `vsf mad bfd enable`
- 命令：
  + `vsf mad bfd enable`
  + `no vsf mad bfd enable`
- 功能：打开指定三层接口支持BFD MAD 检测功能。该命令的no 命令为关闭指定三层接口的BFD MAD 检测功能。
- 参数：无。
- 缺省情况：BFD MAD 检测功能关闭。
- 命令模式：接口配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：处于VSF 模式的设备才能配置该命令，配置指定的接口支持BFD MAD 检测功能。


## `vsf mad ip address`
- 命令：
  + `vsf mad ip address <ip-address> <ip-mask> member <member-number>`
  + `no vsf mad ip address <ip-address> <ip-mask> member <member-number>`
- 功能：指定接口创建成员设备对应的BFD 会话。
- 参数：`<ip-address>`：IP 地址。`<ip-mask>`：ip 地址掩码。`<member-number>`：成员设备编号，范围为：1-16。
- 缺省情况：接口未配置MAD 地址。
- 命令模式：接口配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：处于VSF 模式的设备才能配置该命令，配置该命令的同时创建以配置地址为远端地址的会话。


## `vsf mad exclude`
- 命令：
  + `vsf mad exclude`
  + `no vsf mad exclude`
- 功能：当设备进入 recovery 状态后，配置该命令的端口可以不被关闭，继续正常转发。该命令的 no 命令为取消 MAD 保留端口配置。
- 参数：无。
- 缺省情况：设备没有配置 MAD 保留端口。
- 命令模式：端口配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：VSF 链路断开后，网络中会存在两台全局配置完全相同的设备，这些设备连接到网络时可能会引起网络故障。为了防止这种情况发生，系统会进行多 Active 检测，最终只保留一台 Active 设备，其它设备都进入 Recovery 状态，并且关闭 Recovery 状态设备上的所有业务接口。使用该命令可以让指定的端口不被关闭，具体哪些接口需要保留由用户决定。

## `vsf mad restore`
- 命令：
  + `vsf mad restore`
- 功能：本命令将处于 Recovery 状态的 VSF 恢复到正常工作状态。
- 参数：无。
- 缺省情况：VSF 没有配置 restore。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：VSF 链路断裂发生多 Active 冲突，原 VSF 分裂为两个状态为 Active 的 VSF，为了防止网络中配置冲突，VSF 系统会通过多Active 检测机制，将其中一个VSF 的状态保持为 Active（让它继续正常工作），其它 VSF 的状态修改为 Recovery（处于该状态的VSF 不能处理业务报文）。如果处于 Active 状态的 VSF 发生故障不能工作，此时可以通过本命令将处于 Recovery 状态的VSF 恢复到正常工作状态。


## `show mad config`
- 命令：
  + `show mad config`
- 功能：显示 VSFMAD 的配置情况，通过该命令可以查看 LACP  MAD 和 BFD  MAD 的配置。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式和配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：无。