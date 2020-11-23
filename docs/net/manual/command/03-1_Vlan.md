# VLAN 配置

## Vlan 配置命令

### 1.1.1 `debug gvrp event`

- 命令：`debug gvrp event interface (ethernet | port-channel | ) IFNAME no debug gvrp event interface (ethernet | port-channel | ) IFNAME`
- 功能：开启/关闭 GVRP 事件调试信息开关，包括状态机的转移以及定时器到期等信息。
- 参数：
  + ethernet：物理端口
  + port-channel：汇聚端口
  + IFNAME：端口名
- 命令模式：特权配置模式缺省情况：默认事件调试信息开关关闭。
- 使用指南：把 GVRP 事件调试信息开关打开。
- 举例：显示 GVRP 事件调试信息。

  ```text
  Switch(config)#debug gvrp event interface ethernet 1/0/1
  %Jan 16 02:25:14 2006 GVRP EVENT: LO -> VO ，interface ethernet 1/0/1，vlan 100
  %Jan 16 02:35:15 2006 GVRP EVENT: join timer expire，interface ethernet 1/0/1
  ```

### 1.1.2 `debug gvrp packet`

- 命令：`debug gvrp packet (receive | send) interface (ethernet | port-channel | ) IFNAMEno debug gvrp packet (receive | send) interface (ethernet | port-channel | ) IFNAME`
- 功能：开启/关闭 GVRP 报文调试信息开关。
- 参数：
  + receive:打开收到 GVRP 报文调试开关
  + send:打开发送 GVRP 报文调试开关
  + ethernet:物理端口
  + port-channel:汇聚端口
  + IFNAME:端口名
- 命令模式：特权配置模式
- 缺省情况：默认报文调试信息开关关闭。
- 使用指南：把 GVRP 报文调试信息开关打开。
- 举例：显示 GVRP 报文收发信息。

  ```text
  Switch(config)#debug gvrp packet receive interface ethernet 1/0/1
  Receive packet, smac 00-21-27-aa-0f-46, dmac 01-80-C2-00-00-21,
  
  length 90, protocol ID:1, attribute type:0x01,
  Attribute Index Length Event Value
  ----  -----   -------     -------
  1     10      joinIn      100
  2     10      joinEmpty   140
  3     10      leaveIn     150
  4     10      leaveEmpty  180
  ```
 
### 1.1.3 `dot1q-tunnel enable`

- 命令：`dot1q-tunnel enable no dot1q-tunnel enable `
- 功能： 使交换机的access端口进入dot1q-tunnel
- 模式；本命令的no命令为恢复缺省值。
- 参数： 无。 
- 命令模式：端口配置模式。
- 缺省情况：端口缺省为没有使能 dot1q-tunnel 功能。
- 使用指南：
  端口使能 dot1q-tunnel 后，对于从该端口进入的无 VLAN tag（以下简称tag）的数据包打上一层 tag；
  对于已经有 tag 的数据包打上外层 tag，tag 中的 TPID 为 8100，VLAN ID 为该端口所属的 VLAN ID。
  带有双层 tag 的数据包由 MAC 地址与外层 tag 决策转发，直到从 access 端出去时去掉外层 tag。
  由于打上外层 tag 时可能会使数据包长度超过正常大小，故建议该命令与Jumbo功能一同使用。本命令在 access 端口上使用。
  该命令和 dot1q-tunnel tpid 互斥，并且与 vlan-translation enable 互斥。
- 举例： 将端口1加入 VLAN3 并启用 dot1q-tunnel 功能。

  ```text
  Switch(config)#vlan 3
  Switch(Config-Vlan3)#switchport interface ethernet 1/0/1
  Switch(Config-Vlan3)#exit
  Switch(config)#interface ethernet 1/0/1
  Switch(Config-If-Ethernet1/0/1)# dot1q-tunnel enable
  Switch(Config-If-Ethernet1/0/1)# exit
  Switch(config)#
  ```

### 1.1.4 `dot1q-tunnel untag add c-tag`

- S5750E 交换机不支持此命令

### 1.1.5 `dot1q-tunnel selective enable`

- S5750E 交换机不支持此命令。

### 1.1.6 `dot1q-tunnel selective s-vlan`

- S5750E 交换机不支持此命令。

### 1.1.7 `dot1q-tunnel tpid`

- 命令：`dot1q-tunnel tpid {0x8100 | 0x9100 | 0x9200 | <1-65535> } `
- 功能：设置交换机 trunk 端口的协议类型（TPID）。
- 参数：无。
- 命令模式：端口配置模式。
- 缺省情况：端口缺省 TPID 为 0x8100。
- 使用指南：
  该功能是为了方便与其它厂商的设备进行互连。
  与交换机 trunk 端口连接的设备如果发送 TPID 为 0x9100 的数据包，则将该端口的 TPID 设置为 0x9100，这样交换机就可以正常接收并处理收到的数据包。
  该命令和 dot1q-tunnel enable 互斥。
- 举例：将交换机的端口 10 设置为 trunk 端口，并设置其 TPID 为 0x9100。
  ```text
  Switch(config)#interface ethernet 1/0/10
  Switch(Config-If-Ethernet1/0/10)#switchport mode trunk
  Switch(Config-If-Ethernet1/0/10)#dot1q-tunnel tpid 0x9100
  Switch(Config-If-Ethernet1/0/10)#exit
  Switch(config)#
  ```

### 1.1.8 `garp timer join`

- 命令：`garp timer join <200-500>`
- 功能：设置 garp join 定时器的时间，注意 join timer 必须小于 leave timer 的 1/2。
- 参数：`<200-500>`:定时器时间（ms） 
- 命令模式：全局配置模式缺省情况：join 定时器的默认值为 200（ms）。
- 使用指南：检查设置值是否满足范围要求，满足则把 garp 定时器时间修改为设置值，否则返回配置错误。
- 举例：将 garp join 定时器的时间设置为 200ms。

  ```text
  Switch(config)#garp timer join 200
  ```

### 1.1.9 `garp timer leave` 

- 命令：`garp timer leave <500-1200> `
- 功能：设置 garp leave 定时器的时间，注意 leave timer 必须大于 join timer 的2倍，并且小于 leaveAll timer。
- 参数：`<500-1200>`:定时器时间（ms） 
- 命令模式：全局配置模式缺省情况：leave 定时器的默认值为 600（ms）。
- 使用指南：检查设置值是否满足范围要求，满足则把 garp 定时器时间修改为设置值，否则返回配置错误。
- 举例：将 garp leave 定时器的时间设置为 600ms。

  ```text
  Switch (config)#garp timer leave 600
  ```

### 1.1.10 `garp timer leaveAll`

- 命令：`garp timer leaveall <5000-60000> `
- 功能：设置 garp leaveAll 定时器的时间，注意 leaveAll timer 必须大于 leave timer。
- 参数：`<5000-60000>`:定时器时间（ms） 
- 命令模式：全局配置模式缺省情况：leaveAll 定时器默认值为 10000（ms）。
- 使用指南：检查设置值是否满足范围要求，满足则把 GARP 的 leaveAll 定时器修改为设置值，否则返回配置错误。
- 举例：将 garp leaveAll 定时器的时间设置为 20000ms

  ```text
  Switch(config)# garp timer leaveall 20000
  ```

### 1.1.11 `gvrp`（全局)

- 命令：
  + `gvrp `
  + `no gvrp` 
- 功能：全局开启/关闭 GVRP 功能。
- 参数：无。
- 命令模式：全局配置模式
- 缺省情况：默认关闭 GVRP 全局功能。
- 使用指南：开启全局 GVRP 功能，只有开启全局 GVRP 功能 GVRP 模块才能正常工作。
- 举例：显示开启全局 GVRP 功能。

  ```text
  Switch(config)#gvrp
  ```

### 1.1.12 `gvrp`（端口）

- 命令：
  + `gvrp`
  + `no gvrp` 
- 功能：开启/关闭端口 GVRP 功能。
- 注意：可以在没有开启全局 GVRP 功能前先开启端口 GVRP 功能，但是不生效，只有当开启全局 GVRP 功能后才生效。
- 参数：无。
- 命令模式：端口配置模式
- 缺省情况：默认关闭 GVRP 端口功能。
- 使用指南：只有在 trunk 端口和 hybrid 端口上才能开启 GVRP 功能，在 access 端口开启 GVRP 功能会返回一个不能在 access 端口 开启 GVRP 的错误，在端口上开启 GVRP 功能后会把该端口添加到 GVRP 中（即给该端口在 GVRP 中添加相应状态机等结构）。
- 举例：显示开启端口 GVRP 功能。

  ```text
  Switch(config-if-ethernet1/0/1)#gvrp
  ```

### 1.1.13 `no garp timer`

- 命令：`no garp timer (join | leave | leaveall)`
- 功能：把 `garp join|leave|leaveAll` 定时器恢复成默认值
- 参数：
 +  join: join定时器
 +  leave: leave定时器
 +  leaveAll: leaveAll定时器
- 命令模式：全局配置模式
- 缺省情况：`join|leave|leaveAll` 定时器的默认值为 `200|600|10000`（ms）
- 使用指南：检查相应 timer 设置成默认值后是否满足范围要求，满足则把 GARP 的 `join|leave|leaveAll` 定时器时间还原为默认值，否则返回配置错误。
- 举例：GARP 定时器时间还原到默认值

  ```text
  Switch(config)#no garp timer leaveal
  ```

### 1.1.14 `name`

- 命令：`name <vlan-name> no name`
- 功能：为 VLAN 指定名称，VLAN 的名称是对该 VLAN 一个描述性字符串；本命令的 no 操作为删除 VLAN 的名称
- 参数：`<vlan-name>` 为指定的 vlan 名称字符串
- 命令模式：VLAN 配置模式。缺省情况：VLAN 缺省名称为 vlanXXX，其中 XXX 为 VID
- 使用指南：交换机提供为不同的 VLAN 指定名称的功能，有助于用户记忆 VLAN，方便管理
- 举例：为 VLAN100 指定名称为 TestVlan

  ```text
  Switch(Config-Vlan100)#name TestVlan
  ```

### 1.1.15 `private-vlan`

- 命令：`private-vlan {primary | isolated | community} no private-vlan`
- 功能： 将当前 VLAN 设置为 Private VLAN，该命令的 no 操作为取消 Private VLAN 设置
- 参数： 
  + `primary` 将当前 VLAN 设置为 Primary VLAN
  + `isolated` 将当前 VLAN 设置为 Isolated VLAN
  + `community` 将当前 VLAN 设置 为 Community VLAN
- 命令模式：VLAN 配置模式
- 缺省情况：缺省没有 Private VLAN 配置。
- 使用指南：Private VLAN 分为三种：
  + Primary VLAN，Isolated VLAN 和 Community VLAN。
  + Primary VLAN 内的端口可以和关联到该 Primary VLAN 的 Isolated VLAN 和 Community VLAN 中的端口进行通信；
  + Isolated VLAN 内的端口之间是隔绝的，它们只可以和其相关联的 Primary VLAN 内的端口通信；
  + Community VLAN 内的端口相互之间可以通信，也可以和其相关联的 Primary VLAN 内的端口通信；
  + 在Isolated VLAN内的端口和在Community VLAN内的端口之间不能通信。
  + 只有不包含任何以太网端口的 VLAN 才能被设置为 Private VLAN；
  + 只有设置了关联关系的 Private VLAN 才能将 Access 类型的以太网端口设置为成员端口，Isolate VLAN 的成员端口应该关闭 ingress 功能，否则无法通讯；
  + 普通 VLAN 若被设置成 Private VLAN 后，会自动将所属以太网端口清空。
  + 另外注意 GVRP 不传播 Private VLAN 的信息。
- 举例：将 VLAN100、200、300 设置为 private vlan，类型分别为 primary、Isolated、Community

  ```text
  Switch(config)#vlan 100
  Switch(Config-Vlan100)#private-vlan primary
  Note:This will remove all the ports from vlan 100
  Switch(Config-Vlan100)#exit
  Switch(config)#vlan 200
  Switch(Config-Vlan200)#private-vlan isolated
  Note:This will remove all the ports from vlan 200
  Switch(Config-Vlan200)#exit
  Switch(config)#vlan 300
  Switch(Config-Vlan300)#private-vlan community
  Note:This will remove all the ports from vlan 300
  Switch(Config-Vlan300)#exit
  ```

### 1.1.16 `private-vlan association`

- 命令：`private-vlan association <secondary-vlan-list> no private-vlan association`
- 功能： 设置 Private VLAN 的绑定操作，该命令的 no 操作为取消 Private VLAN 绑定
- 参数： `<secondary-vlan-list>` 为与指定 Primary VLAN 相关联的 Secondary VLAN 列表，Secondary VLAN 包括 Isolated VLAN 和 Community VLAN 两种，支持 `;` 连接多个 Secondary VLAN
- 命令模式：VLAN 配置模式。
- 缺省情况：缺省没有 Private VLAN 绑定。
- 使用指南：
  只有 Primary 类型的 VLAN 才能设置 Private VLAN 关联关系；
  被关联到 Primary VLAN 上的 Secondary VLANs 内的各个端口可以和关联的 Primary VLAN 内的各个端口进行通信。
  在设置 Private VLAN 关联前，三种类型的 Private VLAN 都没有以太网端口的成员端口；
  存在 Private VLAN 关联关系的 Primary VLAN 不能被删除；
  被解除关联关系的 Private VLANs 会自动将所属成员端口清空。
- 举例：将 Isolated VLAN200、Community VLAN300 关联到 Primary VLAN100 上。
  ```text
  Switch(Config-Vlan100)#private-vlan association 200;300
  ```

### 1.1.17 `show dot1q-tunnel`

- 命令：`show dot1q-tunnel`
- 功能：显示所有处于 dot1q-tunnel 状态的端口信息。
- 参数：无。 
- 命令模式：特权和配置模式。
- 使用指南：可使用该命令显示处于 dot1q-tunnel 状态的端口信息。
- 举例：显示当前 dot1q-tunnel 的状态信息。
  ```text
  Switch#show dot1q-tunnel 
  Interface Ethernet1/0/1: dot1q-tunnel is enable
  Interface Ethernet1/0/3: dot1q-tunnel is enable
  ```

### 1.1.18 `show garp timer`

- 命令：`show garp timer (join | leave | leaveall | )` 
- 功能：显示当前各个定时器的时间，注意这个时间不是定时器运行的剩余时间，而是每次开启定时器赋予的定时器初始值。
- 参数：
  + join: join 定时器
  + leave: leave 定时器
  + leaveAll: leaveAll 定时器
- 命令模式：特权配置模式
- 缺省情况：`join|leave|leaveAll` 定时器的默认值为 `200|600|10000`（ms）。
- 使用指南：根据命令中选择的定时器，输出相应定时器时间。
- 举例：显示出当前各个定时器的时间。
  ```text
  Switch#show garp timer join Garp join timer’s value is 200(ms)
  ```

### 1.1.19 `show gvrp fsm information`

- 命令：`show gvrp fsm information interface (ethernet | port-channel ) IFNAME`
- 功能：显示指定端口或所有端口当前所有属性注册状态机和请求状态机的状态。
- 参数：
  + ethernet: 物理端口
  + port-channel: 汇聚端口
  + IFNAME: 端口名
- 命令模式：特权配置模式
- 缺省情况：注册状态机默认状态是 MT，请求状态机默认状态是 VO。
- 使用指南：遍历端口的所有注册状态机和请求状态机，并显示出相应状态。
- 举例：显示所有状态机状态。
  ```text
  Switch#show gvrp fsm information interface ethernet 1/0/1 
  VA：Very anxious Active member，AA：Anxious Active member，QA：Quiet Active member 
  VP：Very anxious Passive member，AP：Anxious Passive member，QP：Quiet Passive member 
  VO：Very anxious Observer，AO：Anxious Observer，QO：Quiet Observer
  LA：Leaving Acitve member，LO：leaving Observer 
  Interface ethernet 1/0/1 gvrp fsm information:  
   Index VLANID     Applicant   Registrar
  ----   --------   ----------  --------- 
  1      100        VO          LV 
  2      300        VP          IN
  ```

### 1.1.20 `show gvrp leaveAll fsm information`

- 命令：`show gvrp leaveall fsm information interface (ethernet | port-channel ) IFNAME`
- 功能：显示指定端口或所有端口 leaveAll 状态机状态。
- 参数：
  + ethernet: 物理端口
  + port-channel: 汇聚端口
- IFNAME: 端口名命令模式：
- 特权配置模式缺省情况：leaveAll 注册状态机默认状态是 passive。
- 使用指南：查看端口 leaveAll 状态机状态。
- 举例：显示端口 leaveAll 状态机状态。

  ```text
  Switch#show gvrp leaveall fsm information interface ethernet 1/0/1 
  Interface         leaveAll fsm 
  ----------        ------------ 
  Ethernet1/0/1     passive
  ```

### 1.1.21 `show gvrp leavetimer running information`

- 命令：`show gvrp leavetimer running information (vlan <1-4094> |) interface (Ethernet | port-channel |) IFNAME`
- 功能：显示当前端口所有 leavetimer 运行信息。
- 参数：
  + `<1-4094>`：VLAN 标识
  + Ethernet：物理端口
  + port-channel：汇聚端口
  + IFNAME：端口名
  + 命令模式：特权配置模式
- 缺省情况：leavetimer 默认是关闭状态。
- 使用指南：遍历端口的所有注册状态机，显示出每个 leave 定时器的运行状态及到期时间。
- 举例：显示当前端口所有 leave 定时器的运行状态及到期时间。

  ```text
  Switch#show gvrp leavetimer running information interface ethernet 1/0/1 
  VLANID   running state    expired time 
  -------  ---------------  --------- 
  100      UP               0.2s 
  300      DOWN             non
  ```

### 1.1.22 `show gvrp port-member`

- 命令：`show gvrp (active |) port-member `
- 功能：显示当前所有开启 GVRP 的端口，active 表示开启 GVRP 并且处于活动状态的端口。
- 参数：Active：表示端口处于活动状态
- 命令模式：特权配置模式
- 缺省情况：默认端口关闭 GVRP 协议。
- 使用指南：遍历 GVRP 中保存的开启了 GVRP 协议或者开启协议并处于活动状态的端口，显示出来。
- 举例：显示所有开启 GVRP 协议（或者并处于活动状态）的端口。
  
  ```text
  Switch#show gvrp port member 
  Ports which were enabled gvrp included：
  Ethernet1/0/3（T） Ethernet1/0/4（T）
  Ethernet1/0/5（T） Ethernet1/0/6（T）
  Ethernet1/0/7（T） Ethernet1/0/8（T）
  Ethernet1/0/9（T） Ethernet1/0/10（T）
  ```

### 1.1.23 `show gvrp port registerd vlan`

- 命令：`show gvrp port (dynamic | static | ) registerd vlan interface (Ethernet | port-channel |) IFNAME` 
- 功能：显示当前端口所有动态注册或者静态注册的 VLAN。
- 参数：
    + dynamic：动态注册
    + static：静态注册
    + Ethernet:物理端口
    + ort-channel:汇聚端口
    + IFNAME：端口名
- 命令模式：特权配置模式
- 缺省情况：默认情况下端口动态或者静态注册的 VLAN 个数为零。
- 使用指南：遍历端口的注册状态机，把包含动态或者静态注册的注册状态机对应的 VLAN 显示出来。
- 举例：显示当前端口所有的动态注册或者静态注册的 VLAN。
  ```text
  Switch#show gvrp port registerd vlan interface ethernet 1/0/1 
  Current port dynamic registerd vlan included： 
  Vlan10 vlan20 
  Vlan40 vlan60 
  Current port static registerd vlan included：
  Vlan10 vlan30 
  Vlan40 vlan200
  ```