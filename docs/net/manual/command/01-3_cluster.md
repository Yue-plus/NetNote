# 集群配置命令
## clear cluster nodes

- 命令：`clear cluster nodes [nodes-sn <candidate-sn-list> | mac-address <mac-addr>]`
- 功能：清除命令交换机发现的候选交换机列表中的节点。
- 参数说明:  candidate-sn-list：candidate 交换机编号，支持同时选择多个 candidate 。范围为 1～256。不输入参数表示清除所有交换机信息。 mac-address：交换机的 mac 地址（交换机包括所有的 candidate，member 和 other 交换机）。
- 缺省情况：不输入参数表示清除所有交换机信息。
- 命令模式：特权模式。
- 使用指南：执行该命令后，该节点的信息将从 commander 保存的链表中删除。在30 秒之内 commander 会重建 cluster 拓扑，然后重新加入此节点。但重新加入后，其 candidate 编号可能发生变化。此命令只能在 commander 上执行。
- 举例: 清除命令交换机发现的所有候选交换机列表。
  ```text
  Switch#clear cluster nodes
  ```

## cluster auto-add

- 命令：
  + `cluster auto-add`
  + `no cluster auto-add`
- 功能：在命令交换机上使能该命令以后，可以把新发现的候选交换机自动加入集群，成为集群的成员交换机；该命令的 no 操作禁止该操作。
- 参数说明：无。
- 缺省情况：系统默认禁止该功能，即不自动把候选交换机加入集群。
- 命令模式：全局配置模式。
- 使用指南：在命令交换机上使能该命令以后，把候选交换机自动加为 member 。
- 举例：在命令交换机上打开集群自动加入功能。
  ```text
  Switch(config)#cluster auto-add
  ```

## cluster commander

- 命令：
  + `cluster commander [<cluster-name>]`
  + `no cluster commander`
- 功能：设置交换机为命令交换机，并创建一个集群。
- 参数：`<cluster-name>`是创建的集群的名字，不超过32 个字符。
- 缺省情况：默认为非 commander 交换机。 cluster_name 默认为 null 。
- 命令模式：全局配置模式。
- 使用指南：本命令指定该交换机的角色为命令交换机，创建一个集群。此命令只能在非 commander 上执行。在成为 commander 之后 cluster_name 不可更改。若需要更改，必须先执行 no cluster commander 。该命令的 no 操作，取消交换机的 commander 配置。
- 举例：在本交换机上指定为命令交换机,集群的名字为 switch 。
  ```text
  Switch(config)#cluster commander switch
  ```

## cluster ip-pool

- 命令：
  + `cluster ip-pool <commander-ip>`
  + `no cluster ip-pool`
- 功能：配置集群中成员设备使用的私有 IP 地址池。
- 参数：commander-ip：cluster IP 地址池，用于分配 cluster 的内部 IP 地址。 commander-ip 为地址池的首地址。
  有效地址的形式为 10.x.x.x ，点分十进制格式；地址池必须足够大，使得能够容纳128 个 member ，
  即地址最后的一个字节必须小于 126（254 – 128 = 126）。在配置 commander 后 IP 地址池不能改变。
  若需要改变，必须先执行 no cluster commander 命令。
- 缺省情况：默认地址池为 10.254.254.1 。
- 命令模式：全局配置模式。
- 使用指南：当候选交换机加入集群时，命令交换机为每个成员分配一个可以在集群范围内使用的私有 IP 地址，
  并分发给成员交换机，用于集群内部的通讯，以实现命令交换机对成员交换机的管理和维护。
  该命令只能在非 commander 上使用。若集群已经建立，则用户不能修改 IP 地址池。
  此命令的 NO 命令恢复地址池为默认值，默认地址池为 10.254.254.1 。
- 举例：配置集群中成员设备使用的私有 IP 地址池 ip-pool 为 10.254.254.10 。
  ```text
  Switch(config)#cluster ip-pool 10.254.254.10
  ```

## cluster keepalive interval

- 命令：
  + `cluster keepalive interval <second>`
  + `no cluster keepalive interval`
- 功能：配置 cluster 内部的 keepalive 报文时间间隔。
- 参数说明：`<second>：keepalive` 时间间隔，以秒为单位。范围 3～30 秒。
- 缺省情况：默认为 30 秒。
- 命令模式：全局配置模式。
- 使用指南：在 commander 上配置此命令后，会将此参数通过 commander 和 member 之间的 TCP 连接分发给各 member 交换机。
  在非 commander 上配置此命令后，配置值会被保存，等自己成为 commander 后使用。
  而在此之前，使用的 keepalive interval 为自己所属的 commander 下发的值。
  commander 在每一个 keepalive interval 内在 cluster 内发送一次 DP 报文。 member 收到 DP 报文后回复 DR 报文。
  该命令的 no 操作恢复 cluster 内部的 keepalive 报文时间间隔为默认值。
- 举例:设置集群内部的 keepalive 报文间隔为 10 。
  ```text
  Switch(config)#cluster keepalive interval 10
  ```

## cluster keepalive loss-count

- 命令：
  + `cluster keepalive loss-count <loss-count>`
  + `no cluster keepalive loss-count`
- 功能：配置 cluster 内部的 keepalive 报文的允许的最大丢失报文个数。
- 参数说明：loss-count：允许的最大丢失报文个数。范围 1～10 个。
- 缺省情况：默认值为 3 个。
- 命令模式：全局配置模式。
- 使用指南：在 commander 上配置此命令后，会将此参数通过 commander 和 member 之间的 TCP 连接分发给各 member 交换机。
  在非 commander 上配置此命令后，配置值会被保存，等自己成为 commander 后使用。
  而在此之前，使用的 loss-count 为自己所属的 commander 下发的值。
  commander 发送 DP 报文后，启动 loss-count 计数。每发送一个报文，将所有交换机
  的 loss-count 计数加 1 ；但当收到交换机发送的 DR 报文后，将此交换机对应的 loss-count 清 0 。
  当 loss-count 到达配置的值后（默认 3 个）还没有收到 DR 报文，将此交换机从 candidate 表中删除。
  如果 member 连续 loss-count 次没有收到 commander 发送的 DP 报文，则将自己的状态置为 candidate 。
  该命令的 no 操作将 cluster 内部的 keepalive 报文允许的最大丢失报文个数恢复为默认值 3 个。
- 举例: 设置 cluster 内部的 keepalive 报文的允许的最大丢失报文个数为 5 。
  ```text
  Switch(config)#cluster keepalive loss-count 5
  ```

## cluster member

- 命令: 
  + `cluster member {nodes-sn <candidate-sn-list> | mac-address <mac-addr> [id<member-id>]}`
  + `no cluster member {id <member-id> | mac-address <mac-addr>}`
- 功能：在命令交换机上，手动把候选交换机加入命令交换机创建的集群；该命令的 no 操作删除指定的 member 交换机，使其转变为 candidate 。
  参数说明： nodes-sn：集群内所有交换机都保存在一个链表上，每个交换机都有一个 nodes 编号可以通过命令 show cluster candidates 查看。
  可以同时将一个或多个 candidate 加为 member 。candidate-sn-list 的有效范围为 1~256。 mac-address ：candidate 交换机的 CPU Mac 。
  member-id：可以将 candidate 加入为 member 时对其指定一个 member 编号，范围为 1～128，默认为从 1 开始递增。
  nodes-sn 为自动生成的编号， candidate 状态变为 member 之后，此值可能会发生变化。
  以此方式加为 member 实际上也会转化为 以mac-addr 的方式加为 member。配置文件也都是以 mac-addr 的方式保存的。
  若同时指定多个交换机加为 member ，则不能指定 member-id ；以 nodes-sn 的方式加入 member，不能指定 member-id 。
- 缺省情况：无。
- 命令模式：全局配置模式。
- 使用指南：命令交换机执行该命令后，把`<nodes-sn>`或`<mac-address>`标示的交换机加入命令交换机所在的集群。
  可以同时将一个或多个 candidate 加为 member，以‘-’或者‘；’连接。
  已经成为 member 或者 commander 的不能再成为其他 cluster 的 member 。如果在非命令交换机上运行该命令时，返回错误。
- 举例: 在命令交换机上把编号为 1 的候选交换机加入到集群中；在命令交换机上把 mac 地址为 11-22-33-44-55-66 的交换机加为 member，并且指定加入后的 member-id 为 5。
  ```text
  Switch(config)#cluster member nodes-sn 1
  Switch(config)#cluster member mac-address 11-22-33-44-55-66 id 5
  ```

## cluster member auto-to-user.

- 命令：`cluster member auto-to-user`
- 功能：在配置 no cluster auto-add 时会将所有自动加为 member 的交换机删除。若需要保留这些 member，
  可将自动加为 member 的交换机转化为手动加为 member 的交换机。
- 参数说明：无。
- 缺省情况：无。
- 命令模式：全局配置模式。
- 使用指南：在命令交换机上运行该命令，使自动加为 member 的交换机变成手动加为 member 的交换机。
- 举例：使自动加为 member 的交换机变成手动加为 member 的交换机。
  ```text
  Switch(config)#cluster member auto-to-user
  ```

## cluster reset member

- 命令：`cluster reset member [id <member-id> | mac-address <mac-addr>]`
- 功能：在命令交换机上使用该命令重启成员交换机。
- 参数说明： member-id： 取值范围： 1-128 ，可以使用连接号“-”和分号“；”同时选择多个 member 。若不输此参数，表示重启所有 member 交换机。
- 缺省情况：启动所有成员交换机。
- 命令模式：特权模式。
- 使用指南：本命令使命令交换机分发重启命令到成员交换机，成员交换机重启。如果在非命令交换机上运行该命令，返回错误。
- 举例: 在命令交换机上重启成员交换机 1 。
  ```text
  Switch#cluster reset member 1
  ```

## cluster run

- 命令：
  + `cluster run [key <WORD>] [ vid <VID>]`
  + `no cluster run`
- 功能：启动集群功能，该命令的 no 操作停止集群功能。
- 参数：key：一个 cluster 内的 key 必须一致，不超过16 个字符。vid：cluster 的 vlan id ，值的范围是 1-4094。
- 缺省情况：默认关闭集群功能， key：NULL（\0） vid：1 。
- 命令模式：全局配置模式。
- 使用指南: 本命令启动集群任务，只有集群功能开启，才能执行一切集群相关命令。执行 no 命令，将关闭本设备集群功能。建议用户划分一个专门的 vlan （比如 vlan100 ）来给 cluster  使用。
- 注意：在 cluster vlan 所在的三层接口不要起路由协议，以避免将 cluster 的私有路由广播出去。
- 举例：本地交换机上关闭集群任务。
  ```text
  Switch(config)#no cluster run
  ```

## cluster update member

命令：cluster update member <member-id> <src-url> <dst-filename> [ascii | binary]
功能：命令交换机上对成员交换机进行远程升级。
参数说明：member-id：取值范围：1-128，可以使用连接号“-”和分号“；”同时选择多个
member；
src-url：被拷贝的源文件的位置；
dst-filename：文件存放在交换机flash 中的文件名；
ascii 表示文件传输使用ASCII 标准；binary 表示文件传输使用二进制标准，缺省
为binary 方式。
当src-url 是FTP 地址时的格式为：
ftp://<username>:<password>@<ipadress>/<filename>，其中<username>为FTP 用户名，<password>为FTP 用户口令，<ipadress>为FTP 服务器的IP 地址，<filename>为
FTP 下载文件名。
当src-url 是TFTP 地址时的格式为：tftp://<ipadress>/<filename>，其中<ipadress>为
TFTP 服务器的IP 地址，<filename>为TFTP 下载文件名。
filename 的特殊关键字：


## debug cluster

- 命令：
  + `debug cluster {statemachine | application | tcp}`
  + `no debug cluster {statemachine | application | tcp}`
- 功能：打开 `cluster` 应用调试开关；本命令的 no 操作为关闭打开的相应的调试开关。
- 参数：`statemachine`交换机状态发生变化时打印 debug 信息。
  `application`有用户通过 SNMP，WEB 登陆交换机进行配置管理时打印debug 信息。
  `Tcp：commander` 和 `member` 之间的 TCP 连接信息。
- 缺省情况：无。
- 命令模式：特权用户配置模式。
- 实用指南：无。
- 举例：打开交换机状态发生变化时的 debug 开关。
  ```text
  Switch#debug cluster statemachine
  ```

## debug cluster packets

- 命令：
  + `debug cluster packets {DP | DR | CP} {receive | send}`
  + `no debug cluster packets {DP | DR | CP} {receive | send}`
- 功能：打开 cluster 应用调试开关；本命令的 no 操作为关闭打开的相应的调试开关。
- 参数：DP 发现报文。 DR：回应报文。 CP：命令报文。 receive：接收报文。 send：发送报文。
- 缺省情况：无。
- 命令模式：特权用户配置模式。
- 实用指南：打开集群报文调试开关，分组开关打开后， cluster 内发送或接收 DP 、 DP 、 CP 
- 报文都会打印出来。
- 举例：打开接收 DP 报文的 debug 开关。
  ```text
  Switch#debug cluster packets DP receive
  ```

## show cluster

- 命令：`show cluster`
- 功能：显示交换机中 cluster 信息。
- 参数：无。
- 命令模式：特权和配置模式。
- 使用指南：无。
- 举例：在不同角色类型的交换机上运行该命令：
  ```text
  ----in a commander----------------------------
  Switch#show cluster
  Status: Enabled
  Cluster VLAN: 1
  Role: commander
  IP pool: 10.254.254.1
  Cluster name: MIS_zebra
  Keepalive interval: 30
  Keepalive loss-count: 3
  Auto add: Disabled
  Number of Members: 0
  Number of Candidates: 3
  ----in a member ----------------------------
  Switch#show cluster
  Status: Enabled
  Cluster VLAN: 1
  Role: Member
  Commander Ip Address: 10.254.254.1
  Internal Ip Address: 10.254.254.2
  Commamder Mac Address: 00-12-cf-39-1d-90
  ---- a candidate ----------------------------
  Switch#show cluster
  Status: Enabled
  Cluster VLAN: 1
  Role: Candidate
  ---- disabled ----------------------------
  Switch#show cluster
  Status: Disabled
  ```

## show cluster members

- 命令：`show cluster members [id <member-id> | mac-address <mac-addr>]`
- 功能：显示 cluster 中 member 信息，此命令只能在 commander 上执行。
- 参数： member-id：member 交换机的编号。
  mac-addr：member 交换机的 CPU Mac。
- 默认配置：不输入参数表示显示所有成员交换机。
- 命令模式：特权和配置模式。
- 使用指南：在命令交换机上执行该命令，可以显示加入集群的成员交换机的配置信息。
- 举例：在命令交换机运行该命令显示所有成员交换机和显示指定成员交换机的配置信息。
  ```text
  Switch#show cluster members
  Member From : User config(U); Auto member (A)
  ID From Status Mac Hostname Description Internal IP
  --- - ----------- ----------------- ------------ ------------ ---------------
  xxx x xxxxxxxxxx12 xx-xx-xx-xx-xx-xx xxxxxxxxxx12 xxxxxxxxxx12 xxx.xxx.xxx.xxx
  1 U Inactive  00-01-02-03-04-05   MIS_zebra DCRS-6804     10.254.254.2
  2 A Active    00-01-02-03-04-05   MIS_bison DCRS-6804     10.254.254.3
  3 U Active    00-01-02-03-04-05   SRD_jaguar DCRS-9808    10.254.254.4
  4 A Inactive  00-01-02-03-04-05   HRD_puma DCRS-5950-28T  10.254.254.5
  ----
  Switch#show cluster members id 1
  Cluster Members:
  ID: 1
  Member status: Inactive member (user_config)
  IP Address: 10.254.254.2
  MAC Address: 00-01-02-03-04-06
  Description: DCRS-9808
  Hostname: DSW102
  ```

## show cluster candidates

- 命令：`show cluster candidates [nodes-sn <candidate-sn-list> | mac-address <mac-addr>]`
- 功能：显示在命令交换机上的候选成员交换机的配置信息。
- 参数：`candidate-sn-list：candidate`交换机编号，支持选择多个 candidate 。范围为 1～256 。
- 不输入参数表示显示所有交换机信息。 mac-address：candidate 交换机的 mac 地址。
- 默认配置：不输入参数表示显示所有交换机信息。
- 命令模式：特权和配置模式。
- 使用指南：在命令交换机上执行该命令，可以显示尚未加入集群的候选成员交换机的配置信息。
- 举例：显示集群的所有候选交换机的配置信息。
  ```text
  Switch#show cluster candidates
  Cluster Candidates:
  SN Mac Description Hostname
  --- ----------------- ------------------------ ------------------------
  xxx xx-xx-xx-xx-xx-xx xxxxxxxxxxxxxxxxxxxxxx24 xxxxxxxxxxxxxxxxxxxxxx24
  1   00-01-02-03-04-06      ES3528M
  2   01-01-02-03-04-05      ES3528M              MIS_zebra
  ```

## show cluster topology

- 命令：`show cluster topology [root-sn <starting-node-sn> | nodes-sn <node-sn-list> |mac-address <mac-addr>]`
- 功能：显示 cluster topology 信息，此命令只能在 commander 上执行。
- 参数：`starting-node-sn`拓扑图的起始节点。`node-sn-list`交换机编号。`mac-addr`交换机 CPU Mac 。
- 若不输入参数，表示显示全部拓扑信息。
- 命令模式：特权和配置模式。
- 使用指南：在命令交换机上执行该命令，可以显示指定开始节点的拓扑信息。
- 举例：在命令交换机上运行该命令，显示各种情况的拓扑信息。
  ```text
  Switch#show cluster topology
  Role: commander(CM);Member(M);Candidate(CA);Other commander(OC);Other
  member(OM)
  LV SN Description Hostname Role MAC_ADDRESS Upstream Upstream leaf
  local-port remote-port node
  == ============ ============ == ================= ======================== =
  x xxx xxxxxxxxxx12 xxxxxxxxxx12 xx  xx-xx-xx-xx-xx-xx xxxxxxxxxx12 xxxxxxxxxx12 x
  1  1    ES4626H    LAB_SWITCH_1 CM  01-02-03-04-05-01   -root-       -root-     -
     2    ES4626H    LAB_SWITCH_2 M   01-02-03-04-05-02   eth 1/0/1    eth 1/0/2  N
     3    ES4626H    LAB_SWITCH_3 CA  01-02-03-04-05-03   eth 1/0/1    eth 1/0/3  Y
     4    ES4626H    LAB_SWITCH_4 CA  01-02-03-04-05-04   eth 1/0/1    eth 1/0/4  Y
  ................................................................................
  2  2    ES4626H    LAB_SWITCH_2 M   01-02-03-04-05-02   eth 1/0/1    eth 1/0/2  -
     5    ES3528M    LAB_SWITCH_1 OC  01-02-03-04-05-13   eth 1/0/1    eth 1/0/2  Y
     6    ES3528M    LAB_SWITCH_1 OM  01-02-03-04-05-14   eth 1/0/1    eth 1/0/3  Y
  ----------------------------------------------------------
  Switch#show cluster topology root-sn 2
  Role: commander(CM);Member(M);Candidate(CA);Other commander(OC);Other
  member(OM)
  SN Description Hostname Role MAC_ADDRESS Upstream Upstream leaf
  local-port remote-port node
  == ============ ============ == ================= ======================== =
  *  2    ES4626H    LAB_SWITCH_2 M   01-02-03-04-05-02   eth 1/0/1     eth 1/0/2  -
     5    ES3528M    LAB_SWITCH_1 OC  01-02-03-04-05-13   eth 1/0/1     eth 1/0/2  Y
     6    ES3528M    LAB_SWITCH_1 OM  01-02-03-04-05-14   eth 1/0/1     eth 1/0/3  Y
  ---------------------------------------------
  Switch#show cluster topology nodes-sn 2
  Toplogy role: Member
  Member status: Active member (user-config)
  SN: 2
  MAC Address: 01-02-03-04-05-02
  Description: ES4626H
  Hostname : LAB_SWITCH_2
  Upstream local-port: eth 1/0/1
  Upstream node: 01-02-03-04-05-01
  Upstream remote-port:eth 1/0/2
  Upstream speed: 100full
  Console#
  ----------------------------------------------
  Switch#show cluster topology mac-address 01-02-03-04-05-02
  Toplogy role: Member
  Member status: Active member (user-config)
  SN: 2
  MAC Address: 01-02-03-04-05-02
  Description: ES4626H
  Hostname : LAB_SWITCH_2
  Upstream local-port: eth 1/0/1
  Upstream node: 01-02-03-04-05-01
  Upstream remote-port:eth 1/0/2
  Upstream speed: 100full
  ```

## rcommand commander

- 命令：`rcommand commander`
- 功能：在成员交换机上使用该命令远程管理和配置命令交换机。
- 参数说明：无。
- 缺省情况：无。
- 命令模式：特权模式。
- 使用指南：执行该命令后可以对命令交换机进行远程管理和配置，但要通过命令交换机上的 telnet 用户名密码验证。
  使用 exit 退出命令交换机的配置界面。该命令只能在成员交换机上运行。
- 举例: 在成员交换机上使用该命令进入命令交换机的配置界面。
  ```text
  Switch#rcommand commander
  ```

## rcommand member

- 命令：`rcommand member <member-id>`
- 功能：在命令交换机上使用该命令对集群的成员交换机进行远程配置管理。
- 参数说明： member-id：commander 分配给每个 commander 的 member 编号。范围1～128。
- 缺省情况：无。
- 命令模式：特权模式。
- 使用指南：执行该命令后，远程登录到 member 上，进入 member 的特权模式。使用 exit 退出 member 的配置界面。
  由于使用的是内部私有 IP ，所以 member 交换机将跳过 telnet 认证。此命令只能在 commander 上执行。
- 举例: 在命令交换机上进入 member-id 为 1 的成员交换机的配置界面。
  ```text
  Switch#rcommand member 1
  ```
