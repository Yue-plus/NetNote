# VSF 冲突检测配置与调试命令

## `vsf mad lacp enable`
- 命令：
  + `vsf mad lacp enable`
  + `no vsf mad lacp enable`
- 功能：打开指定 port-channel  端口支持 LACP  MAD 检测功能。该命令的no 命令为关闭 port-channel 口上的 LACP MAD 检测功能。
- 参数：无。
- 缺省情况：LACP MAD 检测功能关闭。。
- 命令模式：port-channel 端口配置模式。
- 运行模式： VSF  运行模式。
- VSF 角色： VSF  主控。
- 使用指南：处于VSF 模式的设备才能配置该命令，配置指定的port-channel 为 LACP MAD
冲突检测组，组成员发送带 MAD 的 TLV 报文。
## `switch convert mode`
- 命令：
  + `switch convert mode ( stand-alone | vsf )`
- 功能：令设备由独立运行模式转换到VSF 模式，或由VSF 模式转到独立运行模式。
- 参数： `<stand-alone>`：独立运行模式，`<vsf>`：VSF 模式。
- 缺省情况：启动时根据 VSF 配置文件 vsf.cfg 判断设备应进入的模式。
- 命令模式：全局配置模式。
- 运行模式：独立运行模式，VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：设备支持两种运行模式：独立运行模式、VSF 模式。处于独立运行模式下的设
备只能单机运行，处于 VSF 模式下的设备可以与其他设备形成VSF。两种模式通过命令行
进行切换。
- 举例：设备处于独立运行模式时，配置设备进入VSF 模式。

  ```text
  Switch#config
  Switch(config)#switch convert mode vsf
  ```

## `vsf port-group`
- 命令：
  + `vsf port-group <port-number>`
  + `no vsf port-group <port-number>`

- 功能：配置逻辑VSF 口。no 命令为删除 VSF 口。
- 参数： `<port-number>`：逻辑VSF 口编号，取值1-2。
- 缺省情况：未配置。
- 命令模式：全局配置模式。运行模式：独立运行模式，VSF 运行模式。VSF 角色：VSF 主控。使用指南：配置逻辑VSF 口，同一台设备只能配置两个     vsfport-group， vsf  port-group1 和 vsf port-group2。
- 举例：配置逻辑 VSF 口。

  ```text
  Switch(config)#vsf port-group 1
  ```

## `vsf port-group interface ethernet`
- 命令：
  + `vsf port-group interface Ethernet <interface-list>`
  + `no vsf port-group interface Ethernet <interface-list>`
- 功能：建立逻辑VSF 口后，在VSF 口模式下，绑定实际物理端口。No 命令是去除物理端
口与逻辑VSF 口的绑定。
- 参数：`<interface-list>`：物理端口号。
- 缺省情况：缺省未绑定物理端口。
- 命令模式：VSF 口模式。
- 运行模式：独立运行模式，VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：一个vsf port-group 最多绑定8 个物理端口，端口加入vsf port-group 模式为on。
当多于8 个端口进行绑定的时候，提示用户不能绑定。支持跨板绑定物理端口。目前只支
持万兆口与逻辑VSF 口进行绑定。
- 举例：建立逻辑VSF 口，并进入 VSF 口配置模式，将物理端口1/0/1 与逻辑VSF 口绑定。

  ```text
  Switch(config)# vsf port-group 1
  Switch(config)# vsf port-group interface ethernet 1/0/1
  ```

## `vsf domain`
- 命令：
  + `vsf domain <domain-id>`
  + `no vsf domain`
- 功能：配置VSF 所在逻辑域，no 命令为恢复默认域号，默认域号为 1。设备处于独立运行模式时，vsf 域的配置立即生效，设备处于 VSF 模式时，配置vsf domain 后，running-config 中显示为最新的配置，但该配置在保存并重启后生效。
- 参数： `<domain-id>`：域号，取值范围1-32。
- 缺省情况：设备处于domain 1 中。
- 命令模式：全局配置模式。
- 运行模式：独立运行模式，VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：域是一个逻辑概念，设备通过VSF 链路连接在一起就组成一个VSF，这些成员设备的集合就是一个VSF 域。为了适应各种组网应用，同一个网络里可以部署多个VSF，VSF 之间使用域编号来以示区别。同一域内的设备可以形成VSF，不同域的设备或VSF 组不能形成VSF，在形成VSF 前要进行域号的冲突判断。域号的默认值为1。

## `vsf member`
- 命令：
  +  `vsf member <member-id>`
  +  `no vsf member <member-id>`
- 功能：设置 VSF 成员编号，no 命令为删除设备 VSF 成员编号。
- 参数： `<member-id>`：成员编号，取值范围是`<1-16>`。
- 缺省情况：设备没有成员编号。
- 命令模式：全局配置模式。
- 运行模式：独立运行模式。
- 使用指南：成员编号标识每台设备，VSF 组中，每台设备都拥有唯一的成员编号。配置该编号后才能进入 VSF 模式，配置多次该命令，最后一次生效。初始化状态，没有成员编号。设备进入 VSF 模式后，端口格式根据成员编号进行修改。成员编号的冲突，不能形成 VSF。

## `vsf non-wait port-inactive`
- 命令：
  + `vsf non-wait port-inactive`
  + `no vsf non-wait port-inactive`
- 功能：快速检测 VSF 链路状态变化，用于需要快速发现 vsf 分裂的场景。该命令的 no 命令将恢复检测 VSF 链路状态为默认方式。
- 参数：无。
- 缺省情况：未配置快速检测 VSF 链路状态功能。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- 使用指南：配置该命令后，如果 VSF 链路状态发生变化，系统会立刻收到并确认 VSF 链路状态，快速检测 VSF 拓扑变化。该命令配置后立即生效，建议在 VSF  物理链路稳定的情况下使用。

## `vsf priority`
- 命令：
  + `vsf priority <priority>`
  + `no vsf priority`
- 功能：配置 VSF 成员在 VSF 组中的优先级，该命令的 no 命令为恢复为默认优先级，默认优先级为1。设备处于独立运行模式时，vsf 成员优先级的配置立即生 效，设备处于 VSF 模式时，配置 vsf 成员优先级后，running-config 中显示为最新的配置，但该配置在保存并重启后生效。
- 参数： `< priority >`：VSF 成员优先级值，取值范围1~32。
- 缺省情况：设备默认优先级为1。
- 命令模式：全局配置模式。
- 运行模式：独立运行模式，VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：
  独立运行模式下，配置成员优先级。
  成员优先级用于角色选举，成员优先级值越大表示优先级越高，优先级高的设备竞选时，成为 Master 的可能性越大。
  通过给不同的设备配置不同的优先级，可以指定某一设备作为 VSF 的 Master。

## `vsf auto-merge enable`
- 命令：
  + `vsf auto-merge enable`
  + `no vsf auto-merge enable`
- 功能：使能VSF 组自动合并功能，该命令的no 命令去除自动合并功能。
- 参数： 无
- 缺省情况：默认没有开启自动合并功能。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：
  当两 VSF 组由于某种原因具备了正确的物理连接，且连接方式为使用各自的VSF口进行连接，并且未出现 vsf domain、vsf member id 冲突，则连接过程中，端口的 up、VSF 口的建立和绑定等操作，会触发两 VSF 组进行自动合并。
  合并过程中，通过优先级和 member id 的比较，竞选失败的VSF 组将会进行重启，重启后加入到竞选胜利的 VSF 组中。

## `vsf member description`
- 命令：
  + `vsf member <member-id> description <text>`
  + `no vsf member <member-id> description`
- 功能：对VSF 成员进行描述，此描述信息只写入VSF 主控配置文件中。该命令的no 命令为删除对应VSF 成员的描述信息。
- 参数： `<member-id>`：VSF 成员编号，`<text>`：用户自定义描述信息。
- 缺省情况：VSF 成员没有任何描述信息。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控使用指南：在 VSF 模式下，添加对设备的描述信息。方便对设备进行管理，比如，一个网络中存在多个VSF，或者一个 VSF 的成员物理位置比较分散时，则可通过添加描述的方法来明确网络拓扑中各设备角色以及其他用户自定义信息。

## `vsf link delay`
- 命令：
  + `vsf link delay<interval>`
  + `no vsf link delay`
- 功能：配置VSF 链路down 延迟上报功能，用于避免因端口链路层状态在短时间内频繁改变，导致VSF 分裂、合并的频繁发生。该命令的no 命令为将延迟上报时间值恢复为默认值。
- 参数： `<interval>`：VSF 链路down 延迟上报时间值，默认值为0，即立即上报。
- 缺省情况：缺省未配置延迟上报时间值，该值为0。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：
  + 配置 vsf link delay 后，如果 VSF 链路状态从 up 变为 down，端口不会立即向系统报告链路状态变化。
  + 经过配置的时间间隔后，如果VSF 链路仍然处于down 状态，端口才向系统报告链路状态的变化，系统再作出相应的处理。
  + 如果 VSF 链路状态从 down 变为up，链路层会立即向系统报告。该命令配置后立即生效。

## `vsf mac-address persistent`
- 命令：
  + `vsf mac-address persistent <timer | always>`
  + `no vsf mac-address persistent`
- 功能：。配置VSF 分裂后VSF 组 MAC 地址保留时间。该命令的 no 命令为删除 VSF 组MAC地址保留时间的配置，即不保留。
- 参数： `<timer>`：配置VSF 桥 MAC 保留时间为6 分钟，即当Master 离开 VSF 时，VSF桥 MAC 地址6 分钟内保持不变，如果6 分钟后Master 没有回到VSF，则使用新选举的 Master 的桥 MAC 作为VSF 桥MAC；`<always>`：always 配置桥MAC 地址保留时间为永久，则不管 Master 设备是否离开VSF，VSF 桥MAC 始终保持不变。
- 缺省情况：默认没有配置桥MAC 保留时间。
- 命令模式：全局配置模式。
- 运行模式：VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：
  + VSF 作为一台虚拟设备与外界通信，也具有唯一的桥 MAC，成为 VSF 桥 MAC。
  + 通常情况下使用 Master 设备的桥 MAC 作为VSF 桥 MAC。
  + 桥 MAC 冲突会导致通信故障，桥 MAC 切换也会导致流量中断，因此需要配置桥MAC 的保留时间，以便在 VSF 组发生分裂后，不包含原 VSF 主控的那部分，按照用户配置来决定是否保留原 VSF 组桥M AC，以及保留时间。
  + 配置了 timer，VSF 主控离开了 VSF，6 分钟后 VSF 原主控没有回到 VSF 组，VSF 重启，VSF 桥 MAC 使用新选举出来的 VSF 主控的 CPU-MAC 作为VSF 桥 MAC；
  + 6 分钟之内 VSF 原主控回到 VSF 组，继续使用 VSF 原主控的 CPU-MAC 作为 VSF 的桥 MAC。
  + 配置了always，VSF 主控离开了 VSF，VSF 不重启，一直使用原有 VSF 主控的 CPU-MAC 作为 VSF 的桥 MAC，若 VSF 重启，则使用新选举出来的 VSF 主控的 CPU-MAC 作为 VSF 桥 MAC。
  + 设备重启后，该命令不在生效，需重新配置。

## `write`
- 命令：
  + `write`
- 功能：设备处于独立运行模式时，write 命令除具有保存当前running-config 的功能外，还将当前VSF 相关配置写入vsf.cfg；若设备处于VSF 模式，则write 操作会将当前running-config 保存在vsf_startup.cfg 中，并将当前VSF 相关配置保存到vsf.cfg 中。
- 参数：无。
- 缺省情况：running-config 和 vsf 相关配置未保存。
- 命令模式：特权模式。
- 运行模式：独立运行模式，VSF 运行模式。
- VSF 角色：VSF 主控。
- 使用指南：具备VSF 功能的设备，进行配置保存时，将当前配置信息分别写入 startup.cfg和 vsf.cfg。
- 举例：保存配置。

  ```text
  Switch#write
  ```

