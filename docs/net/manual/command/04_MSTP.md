# MSTP 命令

## 1.1 MSTP配置命令介绍

### 1.1.1 abort

- 命令：`abort`
- 功能：放弃本次对 MSTP 域的配置，并且退出 MST 配置模式回到全局配置模式。
- 命令模式：MSTP 域配置模式。
- 使用指南：当使用本命令退出 MST 配置模式时，本次对 MSTP 域做的配置不生效，生效的仍然是前一次保留 MSTP 域配置。
- 举例：退出 MST 配置模式，并且不保留本次配置。

  ```text
  Switch(Config-Mstp-Region)#abort 
  Switch(config)#
  ```
  
### 1.1.2 exit

- 命令：`exit` 
- 功能：保存本次对 MSTP 域的配置，并且退出 MSTP 域配置模式回到全局配置模式。
- 命令模式：MSTP 域配置模式。
- 使用指南：当使用本命令退出MST配置模式时，本次对 MSTP 域做的配置即时生效。
- 举例：退出 MST 配置模式，并且保留本次配置。

  ```text
  Switch(Config-Mstp-Region)#exit 
  Switch(config)#
  ```
  
### 1.1.3 instance vlan

- 命令：`instance <instance-id> vlan <vlan-list> no instance <instance-id> [vlan <vlan-list>]` 
- 功能：在 MSTP 域配置模式下，创建 Instance 及配置 VLAN 与 Instance 的映射关系或添加 VLAN 表项与指定 Instance 映射关系；本命令的 no 操作为删除指定的 Instance 或删除某些 VLAN 表项与指定 Instance 的映射关系。
- 参数：对于非 no 命令，`<instance-id>`为 Instance 号，取值范围为0~64；对于 no 命令，`<instance-id>`为 Instance 号，取值范围为0~64。`<vlan-list>`为连续的或不连续的 VLAN 号，支持表示连续的“-”符号和不连续的“;”符号。
- 命令模式：MSTP 域配置模式。
- 缺省情况：在没有创建任何 Instance 时，交换机只有 Instance 0 ，且 VLAN1~4094 均属于 Instance 0。
- 使用指南：本命令用于设置 VLAN 与 Instance 的映射关系，只有所有的映射关系都相同且其他 MSTP 域的参数也相同，交换机才能认为彼此是在相同的 MSTP 域中。在没有配置任何 Instance 时，所有的 VLAN 都属于 Instance 0 。MSTP最多支持64个 MSTI（除了CIST
          之外）。可以把 CIST 理解为 MSTI0 ，其余实例为 MSTI1～64 。具体个数依照产品规格而定，64只是最大的规格值。
- 举例：配置 VLAN1-10;100-110与Instance 1 的映射关系。

  ```text
  Switch(config)#spanning-tree mst configuration 
  Switch(Config-Mstp-Region)#instance 1 vlan 1-10;100-110
  ```
  
### 1.1.4 name

- 命令：`name <name> no name`
- 功能：在 MSTP 域配置模式下，配置 MSTP 域的名字；本命令的 no 操作为删除 MSTP 域的名字。
- 参数：`<name>`为 MSTP 域名字，取值范围不超过32字节的字符串。
- 命令模式：MSTP 域配置模式。
- 缺省情况：缺省 MSTP 域的名字为该交换机网桥 MAC 。
- 使用指南：本命令用于设置 MSTP 域的名字，只有 MSTP 域的名字相同且其他 MSTP 域的参数也相同，交换机才能认为彼此是在相同的 MSTP 域中。
- 举例：配置MSTP域的名字为 mstp-test。

  ```text
  Switch(config)#spanning-tree mst configuration 
  Switch(Config-Mstp-Region)#name mstp-test
  ```
  
### 1.1.5 no

- 命令：`no <instance-id> | <name> | <revision-level>` 
- 功能： 取消一条命令或设置为初始值。
- 参数： `<instance-id>` instance号，`<name>` mstp 域名，`<revision-level>` 用于计算MST配置标识的修正数值。
- 命令模式： MSTP 域配置模式。
- 使用指南： 本命令可以删除指定的 instance ,删除 MSTP 域的 name ,恢复修正数值的缺省值为0。
- 举例： 删除 instance 1。

  ```text
  Switch(Config-Mstp_Region)#no instance 1
  ```

### 1.1.6 revision-level

- 命令：`revision-level <level> no revision-level `
- 功能：在 MST 配置模式下，配置用于计算 MST 配置标识的修正数值；本命令的 no 操作为恢复修正数值的缺省值0。
- 参数：`<level>`为修正数值，取值范围为0~65535。
- 命令模式：MSTP 域配置模式。缺省情况：缺省修正数值为0。
- 使用指南：本命令用于设置计算MST配置标识时用到的修正数值，只有修正数值相同且其他 MSTP 域的参数也相同，交换机才能认为彼此是在相同的 MSTP 域中。
- 举例：配置修正数值为2000。

  ```text
  Switch(config)#spanning-tree mst configuration 
  Switch(Config-Mstp-Region)# revision-level 2000
  ```
  
### 1.1.7 show

- 命令：`show` 
- 功能： 显示当前运行系统的信息。 
- 命令模式： MSTP 域配置模式。
- 使用指南： 使用本命令，可以详细的查看当前系统的信息。
- 举例： 显示当前运行系统的信息。

  ```text
  Switch(Config-Mstp-Region)#show
  ```
  
### 1.1.8 spanning-tree

- 命令：`spanning-tree no spanning-tree` 
- 功能：在交换机的全局配置模式和端口配置模式下分别启动 MSTP 协议的命令；本命令的 no 操作为关闭 MSTP 协议。
- 命令模式：全局配置模式和端口配置模式。
- 缺省情况：系统缺省不运行 MSTP 协议。
- 使用指南：如果在全局配置模式下启动了 MSTP 协议，除了在端口上打开与 MSTP 应用互斥的端口外，所有的端口缺省都打开 MSTP 协议。
- 举例：在全局模式打开 MSTP ，并且在端口1/0/2模式上关闭 MSTP 。

  ```text
  Switch(config)#spanning-tree 
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#no spanning-tree
  ```
  
### 1.1.9 spanning- tree cost

- 命令：`spanning-tree cost <cost> no spanning-tree cost` 
- 功能：设置当前以太网端口的路径代价；本命令的 no 操作为恢复缺省值。
- 参数：`<cost>` 为路径代价值，取值范围为1~200,000,000。
- 命令模式：端口配置模式。 
- 缺省情况：缺省情况下，端口的路径代价与端口的带宽相关。

| 端口类型 | 缺省路径开销 |   建议取值范围   |
| :------: | :----------: | :--------------: |
|  10Mbps  |   2000000    | 2000000~20000000 |
| 100Mbps  |    200000    |  200000~2000000  |
|  1Gbps   |    20000     |   20000~200000   |
|  10Gbps  |     2000     |    2000~20000    |

- 对汇聚端口，端口缺省路径代价如下：

| 端口类型 | 汇聚端口个数（在允许汇聚的个数范围内） | 缺省路径开销 |
| :------: | :------------------------------------: | :----------: |
|  10Mbps  |                   N                    |  2000000/N   |
| 100Mbps  |                   N                    |   200000/N   |
|  1Gbps   |                   N                    |   20000/N    |
|  10Gbps  |                   N                    |   20000/N    |
- 使用指南： 通过配置端口路径代价可以控制端口到根网桥的根路径代价，从而控制该端口、指定端口等的选举。
- 举例： 在端口1/0/2上设置端口路径代价为3000000。

  ```text
  Switch(Config-If-Ethernet1/0/2)#spanning-tree cost 3000000
  ```

### 1.1.10 spanning-tree digest-snooping

- 命令：`spanning-tree digest-snooping no spanning-tree digest-snooping` 
- 功能：配置端口使用对端的认证字，本命令的 no 形式配置端口不使用对端认证字。 
- 参数：无。 
- 命令模式：端口配置模式。
- 缺省情况：不使用对端认证字。 
- 使用指南：MSTP 协议使用指定的密钥，对 INSTANCE 和 VLAN 的对应关系使用 MD5 算法生成区域的认证字，由于个别厂商没有遵守协议的要求使用指定的密钥，而使用了私有的密钥，导致其设备与其它厂商设备无法通过配置实现域内互通，通过该命令可以在指定的端口上使用对方的认证字以实现与其的域间互通。注意：这种配置可能导致 INSTANCE  与 VLAN 对应关系不同的相邻设备认为对端是同一区域，因此使用该功能时要由管理员保证其对应关系一致。并且要保证设备间所有的端口都进行该配置，以避免不希望的后果。
- 举例：配置端口使用对端的认证字。

  ```text
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#spanning-tree digest-snooping 
  Switch(Config-If-Ethernet1/0/2)#
  ```
  
### 1.1.11 spanning-tree format

- 命令：`spanning-tree format {standard | privacy | auto} no spanning-tree format` 
- 功能：配置端口报文格式，以便于与其它厂商产品互通。本命令的 no 操作恢复格式为默认的格式。 
- 参数：
    + standard：IEEE 规定的报文格式； 
    + privacy：私有报文格式，与 CISCO 设备兼容的格式； 
    + auto：自动识别报文格式，即通过查看收到的报文的格式决定自己的报文格式。
- 命令模式：端口配置模式。
- 缺省情况：自动识别报文格式。
- 使用指南：由于 CISCO 使用了与 IEEE 规定的报文格式不同的格式，而很多厂家为了与 CISCO 兼容也采用了与 CISCO 相同的格式，
        因此我们要同时支持这两种格式。其中标准格式 （standard）是完全按照 IEEE 规定的格式，私有报文格式（privacy）是与 CISCO 兼
        容的格式，另外，如果我们不清楚对端是何种格式，可以配置为 AUTO，我们可以根据对方发出的报文识别对方支持何种格式。为了与过往
        产品和主流厂家的更好的兼容，我们默认的形式是自动识别报文，在配置为AUTO时，在收到对方发出的报文前也认为是私有报文格式。如果
        我们配置的格式不是 AUTO，而对端与我们规定的格式不匹配，我们在收到对端的报文后，会设置收到报文的端口状态为 DISCARDING 以避免
        双方都认为自己是根而造成环路。如果我们配置的格式是 AUTO，而端口外连接了互不兼容的超过1个设备（例如通过 HUB 或透传 BPDU 的设备连
        接了多个运行 MSTP 的设备），我们会统计一段时间内端口格式改变的次数，超过该次数（250秒内改变10次）后，端口将被关闭，只有管理员
        的干预才能再把端口打开。
- 举例：配置端口报文格式为 IEEE 规定的报文格式。

  ```text
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#spanning-tree format standard 
  Switch(Config-If-Ethernet1/0/2)#
  ```

### 1.1.12 spanning-tree forward-time

- 命令：`spanning-tree forward-time <time> no spanning-tree forward-time` 
- 功能：设置交换机转发延时的时间值；本命令的 no 操作为恢复缺省值。
- 参数：`<time>`为转发延时的时间值，单位为秒，取值范围为4~30。
- 命令模式：全局配置模式。
- 缺省情况：转发延时缺省为15秒。
- 使用指南：当网络拓扑发生变换时，端口状态从阻塞状态转变到监听状态的这段延时称为转发延时。转发延时和 Hello 时间值、最大老化时间之间是有关联的，用户在配置 MSTP 时间参数时必须满足如下条件，否则会影响 MSTP 的正确工作： 
          2×(Bridge_Forward_Delay – 1.0 seconds) >= Bridge_Max_Age 
          Bridge_Max_Age >= 2 ×(Bridge_Hello_Time + 1.0 seconds) 
- 举例：在全局模式配置 MSTP 转发延时时间为20秒。

  ```text
  Switch(config)#spanning-tree forward-time 20
  ```
  
### 1.1.13 spanning-tree hello-time

- 命令：`spanning-tree hello-time <time> no spanning-tree hello-time`
- 功能：设置交换机 Hello 时间值；本命令的 no 操作为恢复缺省值。
- 参数：`<time>`为 Hello time 的时间值，单位为秒，取值范围为1~10。
- 命令模式：全局配置模式。
- 缺省情况：Hello 时间缺省为2秒。
- 使用指南：交换机发送 BPDU 的时间间隔称为 Hello 时间。Hello 时间和转发延时、最大老化时间之间是有关联的，用户在配置 MSTP 时间参数时必须满足如下条件，否则会影响 MSTP 的正确工作： 2×(Bridge_Forward_Delay – 1.0 seconds) >= Bridge_Max_Age Bridge_Max_Age >= 2 ×(Bridge_Hello_Time + 1.0 seconds) 
- 举例：在全局模式配置 MSTP Hello 时间为5秒

  ```text
  Switch(config)#spanning-tree hello-time 5
  ```
  
### 1.1.14 spanning-tree link-type p2p

- 命令：`spanning-tree link-type p2p {auto | force-true | force-false} no spanning-tree link-type` 
- 功能：设置与当前端口相连的链路类型；本命令的 no 操作恢复当前端口的链路类型为自动检测。
- 参数：
    + auto 表示由系统自动检测链路类型，
    + force-true 表示强制为点对点类型，
    + force-false 表示强制为非点对点类型。
- 命令模式：端口配置模式。
- 缺省情况：缺省情况下为 auto ，MSTP 协议会自动检测端口相连的链路类型。
- 使用指南：当端口工作在全双工模式下，MSTP 协议会自动认为与该端口相连的链路类型为点对点类型；当端口工作在半双工模式下，MSTP 协议会自动认为与该端口相连的链路类型为共享型。
- 举例：强制交换机的端口1/0/7-8为点到点连接。

  ```text
  witch(config)#interface ethernet 1/0/7-8 
  witch(Config-If-Port-Range)#spanning-tree link-type p2p force-true
  ```
  
### 1.1.15 spanning-tree maxage

- 命令：`spanning-tree maxage <time> no spanning-tree maxage` 
- 功能：设置交换机 BPDU 信息的最大老化时间值；本命令的 no 操作为恢复缺省值。
- 参数：`<time>` 为最大老化时间值，单位为秒，取值范围为6~40。
- 命令模式：全局配置模式。
- 缺省情况：最大老化时间缺省为20秒。
- 使用指南：BPDU 的生命周期称为最大老化时间。最大老化时间和转发延时、Hello 时间之间是有关联的，用户在配置 MSTP 时间参数时必须满足如下条件，否则会影响 MSTP 的正确工作： 2×(Bridge_Forward_Delay – 1.0 seconds) >= Bridge_Max_Age Bridge_Max_Age >= 2 ×(Bridge_Hello_Time + 1.0 seconds)
- 举例：在全局模式配置 maxage 时间为25秒。

  ```text
  Switch(config)#spanning-tree maxage 25
  ```
  
### 1.1.16 spanning-tree max-hop

- 命令：`spanning-tree max-hop <hop-count> no spanning-tree max-hop` 
- 功能：设置 BPDU 支持在 MSTP 域中传输的最大跳数；本命令的 no 操作为恢复缺省值。
- 参数：`<hop-count>`为最大跳数，取值范围为1~40。
- 命令模式：全局配置模式。
- 缺省情况：最大跳数缺省为20。
- 使用指南：在 MSTP 协议中不仅保留 Max-age 表示 BPDU 的生命周期，在 MSTP 域中还增加了 Max-hop
        表示 BPDU 的生命周期，Max-hop 在网络中的传输呈递减状态。从 MSTI 的根网桥发出时 Max-hop 为最
        大值，BPDU 每被接收一次，该 BPDU 的 Max-hop 值就减少一跳，当交换机端口接收到 Max-hop 为0的
        BPDU 时，该端口就会丢弃该 BPDU，并且将本端口作为指定端口发送 BPDU。
举例：设置最大跳数为32。

  ```text
  Switch(config)#spanning-tree max-hop 32
  ```
  
### 1.1.17 spanning-tree mcheck

- 命令：`spanning-tree mcheck` 
- 功能：迫使交换机端口迁移到 MSTP 模式下运行。
- 命令模式：端口配置模式。
- 缺省情况：端口运行在 MSTP 模式下。
- 使用指南：如果在与当前以太网端口相连的网段内存在运行 IEEE 802.1D STP 协议的网桥，该端口会迁移到 STP 兼容模式下运行。
        在网络比较稳定的情况下，虽然网段内运行STP协议的网桥被拆离，但与之相连的运行 MSTP 协议的交换机的端口仍然会运行在 STP 兼
        容模式下，此时可以通过该命令迫使其迁移到 MSTP 模式下运行。端口迁移到 MSTP 模式下运行后，如果再次收到新的 STP 报文，端口
        又会回到 STP 兼容模式下。该命令必须在交换机运行在 IEEE802.1s MSTP 模式下时进行配置，如果交换机的协议运行模式被配置为
        IEEE802.1D STP 模式，则该命令无效。
- 举例：强制端口1/0/2迁移到 MSTP 模式下运行。

  ```text
  Switch(Config-If-Ethernet1/0/2)#spanning-tree mcheck
  ```
  
### 1.1.18 spanning-tree mode

- 命令：`spanning-tree mode {mstp | stp | rstp} no spanning-tree mode` 
- 功能：设置交换机运行 Spanning Tree 的模式；本命令的 no 操作为恢复交换机缺省的模式。
- 参数：mstp 为设置交换机运行 IEEE802.1s 的 MSTP 模式；stp 为设置交换机运行 IEEE802.1D STP 模式; rstp为设置交换机运行 IEEE802.1w RSTP 模式。
- 命令模式：全局配置模式。
- 缺省情况：交换机缺省运行 MSTP 模式。
- 使用指南：当交换机运行 IEEE802.1D STP 模式时，只能发送标准的 802.1D BPDU 帧和 TCN BPDU ，对接收到的任何 MSTP BPDU 都将丢弃。
- 举例：设置交换机运行 STP 模式。

  ```text
  Switch(config)#spanning-tree mode stp
  ```
  
### 1.1.19 spanning-tree mst configuration

- 命令：`spanning-tree mst configuration no spanning-tree mst configuration`

- 功能：进入交换机的 MST 配置模式，在交换机的 MST 配置模式下，可配置交换机有关 MSTP 域的参数；本命令的 no 操作为恢复交换机的 MSTP 域参数的缺省值。

- 命令模式：全局配置模式。

- 缺省情况：用户在没有进入MST配置模式之前，MSTP 域的参数缺省如下：

  | MSTP域参数 |                参数缺省值                |
  | :--------: | :--------------------------------------: |
  |  Instance  | 只有实例0存在，且VLAN1~4094均映射在实例0 |
  |    Name    |            取本交换机网桥MAC             |
  |  Revision  |                    0                     |

- 使用指南：无论交换机是否启动了 MSTP 协议，都可以进入 MSTP 域配置模式，并在配置后保存当前配置。当交换机运行 MSTP 模式时，系统会根据配置的 MSTP 域参数计算出本交换机的 MST 配置标识（MST Configuration Identifier），只有 MSTP 域配置标识相同的交换机才会认为是在同一个 MSTP 域中，且能进行 MSTI 的计算。
- 举例：进入交换机的 MST 配置模式。

  ```text
  Switch(config)#spanning-tree mst configuration 
  Switch(Config-Mstp-Region)# 
  ```
  
### 1.1.20 spanning-tree mst cost

- 命令：`spanning-tree mst <instance-id> cost <cost> no spanning-tree mst <instance-id> cost` 

- 功能：设置当前以太网端口在指定实例的端口路径代价；本命令的 no 操作为恢复缺省值。

- 参数：`<instance-id>` 为指定实例的实例 ID，取值范围为0~64；`<cost>` 为路径代价值，对于不同的 cost 格式，取值范围有所不同，对于默认 dot1t 模式，取值范围为1~200,000,000，对于 dot1d 模式，取值范围为1-65535。

- 命令模式：端口配置模式。

- 缺省情况：缺省情况下，端口的路径代价与端口的带宽相关。

  | 端口类型 | 缺省路径开销 |   建议取值范围   |
  | :------: | :----------: | :--------------: |
  |  10Mbps  |   2000000    | 2000000~20000000 |
  | 100Mbps  |    200000    |  200000~2000000  |
  |  1Gbps   |    20000     |   20000~200000   |
  |  10Gbps  |     2000     |   20000~200000   |

  对汇聚端口，端口缺省路径代价如下：

  | 端口类型 | 汇聚端口个数（在允许汇聚的个数范围内） | 缺省路径开销 |
  | :------: | :------------------------------------: | :----------: |
  |  10Mbps  |                   N                    |  2000000/N   |
  | 100Mbps  |                   N                    |   200000/N   |
  |  1Gbps   |                   N                    |   20000/N    |
  |  10Gbps  |                   N                    |    2000/N    |

  
- 使用指南：通过配置端口路径代价可以控制该实例端口到根网桥的根路径代价，从而控制该实例根端口、指定端口等的选举。
- 举例：在端口1/0/2上设置实例2对应的 MSTP 端口路径代价为3000000。

  ```text
  Switch(Config-If-Ethernet1/0/2)#spanning-tree mst 2 cost 3000000
  ```
  
### 1.1.21 spanning-tree cost-format

- 命令：`spanning-tree cost-format {dot1d | dot1t}`
- 功能：在交换机的全局配置模式下可修改路径开销值的表示方式，有 dot1d 和 dot1t 格式可选用，默认使用 dot1t 格式。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省使用 dot1t 格式计算路径开销值。
- 使用指南：cost 值的表示方法有两种，分别是 IEEE802.1d-2008 上标示的 dot1d 方式，和 IEEE802.1t 上标示的 dot1t 方式。两种方法定义的路径开销值的取值范围不同，dot1d 的取值范围是1-65535，dot1t的取值范围是1-200000000。若用户已使用 spanning-tree cost 命令手动配置过链路上的 cost 值，则使用 cost-format 命令修改 cost 表示方法的配置不能成功，除非用户将手动配置清除。
- 举例：在全局模式修改 cost 格式
 
  ```text
  Switch(config)#spanning-tree cost-format dot1d
  ```
  
### 1.1.22 spanning-tree mst loopguard

- 命令：`spanning-tree [mst <instance-id>] loopguard no spanning-tree [mst <instance-id>] loopguard`
- 功能：配置 spanning-tree 的指定实例上启动 loopguard 功能，本命令的 no 操作恢复为不在该实例下启动该功能。
- 参数：`<instance-id>` ：MSTP 实例ID。
- 缺省：不启动 loopguard 功能。
- 命令模式：端口模式
- 使用指南：通过配置该命令，可以避免单向链路失效导致 root 端口或 alternate 端口变成 designated 端口；在端口收包定时器到时时将配置了 loopguard 的端口置为 Block 状态。
- 举例：配置实例0的端口1/0/2为loopguard模式。

  ```text
  Switch(Config)#interface ethernet 1/0/2 
  Switch(Config-Ethernet-1/0/2)#spanning-tree mst 0 loopguard 
  Switch(Config-Ethernet-1/0/2)#
  ```
  
### 1.1.23 spanning-tree mst port-priority

- 命令：`spanning-tree mst <instance-id> port-priority <port-priority> no spanning-tree mst <instance-id> port-priority`
- 功能：设置当前端口在指定实例的优先级值；本命令的no操作为恢复缺省端口的优先级值。
- 参数：`<instance-id>` 为指定实例的实例 ID，取值范围为0~64；`<port-priority>` 为端口优先级值，取值范围为0~240之间的16倍数，即取值范围为0、16、32、48…240。
- 命令模式：端口配置模式。
- 缺省情况：端口缺省优先级值为128。
- 使用指南：通过配置端口优先级可以控制指定实例的端口ID，进而影响该实例的根端口、指定端口等选举。端口优先级值越小，优先级越高。
- 举例：在端口1/0/2设置实例1的端口优先级为32。

  ```text
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#spanning-tree mst 1 port-priority 32
  ```
  
### 1.1.24 spanning-tree mst priority

- 命令：`spanning-tree mst <instance-id> priority <bridge-priority> no spanning-tree mst <instance-id> priority` 
- 功能：设置交换机在指定实例的网桥优先级；本命令的 no 操作为恢复交换机在指定实例的缺省优先级值。
- 参数：`<instance-id>` 为指定实例的实例ID，取值范围为0~64；`<bridge-priority>` 为交换机的优先级，取值范围为0~61440之间的4096的倍数，即取值范围为0、4096、8192…61440。
- 命令模式：全局配置模式。
- 缺省情况：交换机缺省的优先级为32768。
- 使用指南：通过配置交换机网桥优先级可以改变指定实例的网桥ID，进而用于该实例的根网桥、指定端口等选举。交换机网桥优先级值越小，优先级越高。
- 举例：配置交换机实例2的优先级为4096。

  ```text
  Switch(config)#spanning-tree mst 2 priority 4096
  ```
  
### 1.1.25 spanning-tree mst rootguard

- 命令： `spanning-tree mst <instance-id> rootguard no spanning-tree mst <instance-id> rootguard` 
- 功能：配置 spanning-tree 的指定实例上启动 rootguard 功能，本命令的 no 操作恢复为不在该实例下启动该功能。 
- 参数：`<instance-id>` ：MSTP 实例ID。 
- 命令模式：端口模式。
- 缺省情况：不启动 rootguard 功能
- 使用指南：根保护功能是基于端口配置的，不允许端口成为mstp 的根端口，也就是说端口要始终保持在指定端口状态。如果在配置了root guard 的端口接收到了更优的bpdu 报文，根保护功能会把该端口设置为root_inconsistent(blocked)状态，而不是根据该bpdu 重新计算，选择出一个新的根端口。当交换机不再接收更优的bpdu 报文，该端口就不会再阻塞，根据生成树协议，端口状态从discarding，learning，最后转变到forwarding状态。恢复是自动的，不需要人为干预。通过root guard 功能，能够很好的保护二层网络的拓扑结构，不会因为其它设备的加入而改变根网桥，从而不会改变现有网络用户数据所走的链路。
- 举例：配置spanning-tree的实例0启动rootguard功能。

  ```text
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#spanning-tree mst 0 rootguard 
  Switch(Config-If-Ethernet1/0/2)#
  ```
  
### 1.1.26 spanning-tree portfast

- 命令：`spanning-tree portfast [bpdufilter | bpduguard] [recovery <30-3600>] no spanning-tree portfast` 
- 功能：配置端口为边缘端口，并指定模式 BPDU filter、BPDU guard 或缺省模式（协议规定的模式，即收到 BPDU 报文后转为非边缘端口）。本命令的 no 操作配置端口为非边缘端口。 
- 参数：bpdufilter：配置边缘端口模式为 BPDU filter bpduguard：配置边缘端口模式为 BPDU guard recovery：配置边缘端口执行 bpduguard 违背操作后可以自动恢复`<30-3600>`：恢复时间，默认不进行恢复 
- 命令模式：端口模式。
- 缺省情况：非边缘端口。 
- 使用指南：对于边缘端口可以在变为指定端口时直接进入转发态，而对于边缘端口可以有三种模式，缺省模式下边缘端口收到 BPDU 后会转为非边缘端口。BPDU filter 模式下收到 BPDU 会丢弃该报文不处理，BPDU guard 模式下收到 BPDU 会丢弃报文并关闭端口。同时只能有一种模式。no 命令将端口恢复为非边缘端口。
- 举例：配置边缘端口模式为 BPDU guard，恢复时间为60s。

  ```text
  Switch(config)#interface ethernet 1/0/2 
  Switch(Config-If-Ethernet1/0/2)#spanning-tree portfast bpduguard recovery 60 
  Switch(Config-If-Ethernet1/0/2)#
  ```
  
### 1.1.27 spanning-tree port-priority

- 命令：`spanning-tree port-priority <port-priority> no spanning-tree port-priority` 
- 功能：配置端口的优先级。本命令的no操作为恢复缺省端口的优先级值。
- 参数：`<port-priority>` 为端口优先级值，取值范围为0~240之间的16倍数，即取值范围为0、16、32、48…240。
- 命令模式：端口模式。 
- 缺省情况：交换机缺省的优先级为32768。
- 使用指南：配置端口的优先级，可以用于端口的选举。优先级值越小，优先级越高。
- 举例：配置端口1的优先级为4096。

  ```text
  Switch(config-If-Ethernet1/0/1)#spanning-tree port-priority 4096
  ```
  
### 1.1.28 spanning-tree priority









 




