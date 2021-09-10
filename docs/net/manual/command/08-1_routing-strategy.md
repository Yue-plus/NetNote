# IP 路由策略命令

## `ip prefix-list description`

- 命令：
  + `ip prefix-list <list_name> description <description>`
  + `no ip prefix-list <list_name> description`
- 功能：配置前缀列表的描述文字，本命令的 no 操作为删除描述文字
- 参数： `<list _name>`为前缀列表名称，`< description >`为描述文字
- 缺省情况：无
- 命令模式：全局配置模式
- 使用指南：可以使用本命令为一个 prefix-list 进行说明、描述，例如 prefix-list 的用途、注意事项等
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#ip prefix-list 3 description This list is used by BGP
  ```

## `ip prefix-list seq`

- 命令：
  + `ip prefix-list <list_name> [seq <sequence_number>] <deny | permit> < any | ip_addr/mask_length [ge <min_prefix_len>] [le <max_prefix_len>]>`
  + `no ip prefix-list <list_name> [seq <sequence_number>] [<deny | permit> < any | ip_addr/mask_length [ge <min_prefix_len>] [le <max_prefix_len>]>]`
- 功能：配置前缀列表，本命令的 no 操作为删除前缀列表
- 参数：
  + `<list _name>` 为前缀列表名称
  + `seq` 表示后面所接的参数为序列号
  + `<sequence_number>`为序列号
  + `deny` 表示拒绝该路由
  + `permit` 表示接受该路由
  + `any` 表示适用于所有前缀及掩码长度的报文
  + `ip_addr/mask_length` 表示前缀地址（点分十进制）及掩码长度
  + `ge` 表示大于、等于 `<min_prefix_len>` 为要匹配的最小前缀长度（范围为 0～32 ）
  + `le` 表示小于、等于 `<max_prefix_len>` 为要匹配的最大前缀长度（范围为 0～32 ）
- 缺省情况：无。
- 命令模式：全局配置模式。
- 使用指南：
  一个 prefix-list 由前缀列表名标识，每个前缀列表可以包含多个表项，每个表项可以独立指定一个网络前缀形式的匹配范围， 并用一个 sequence-number 来标识， sequence-number 指明了在 prefix-list 中进行匹配检查的顺序
  在匹配的过程中，交换机按升序依次检查由  sequence -number 标识的各个表项，只要有某一表项满足条件就意味着通过该 prefix-list 的过滤（不会进入下一个表项的测试）需要注意的是，如果定义了一个以上的前缀列表表项，那么至少应该有一个表项的匹配模式是 permit 模式 deny 模式的表项可以先被定义，以快速的过滤掉不符合条件的路由信息，但如果所有表项都是 deny 模式，则任何路由都不会通过该地址前缀列表的过滤可以在定义了多条 deny 模式的表项后定义一条 `permit 0.0.0.0/0 ge 0 le 32` 的表项,以允许其它所有路由信息通过
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#ip prefix-list mylist seq 12345 deny 10.0.0.0/8 le 22 ge 14
  ```

## `ip prefix-list sequence-number`

- 命令：
  + `ip prefix-list sequence-number`
  + `no ip prefix-list sequence-number`
- 功能：启动序号自动生成功能，本命令的 no 操作为关闭前缀列表条目序号
- 参数：无
- 缺省情况：启动序号自动生成功能
- 命令模式：全局配置模式
- 使用指南：可以使用本命令的 no 操作来关闭前缀列表条目序号
- 举例：

  ```text
  switch(config)#no ip prefix-list sequence-number
  ```

## `match as-path`

- 命令：
  + `match as-path <list-name>`
  + `no match as-path [<list-name>]`
- 功能：配置匹配 BGP 路由信息的 AS 路径域，本命令的 no 操作为删除配置
- 参数： < list-name > 为 access-list 名称
- 命令模式：route-map 配置模式
- 使用指南：本命令按 as-path list 中指定的规则对 BGP 路由信息的 AS 路径域进行匹配，如匹配成功，则执行 route-map 中的 permit 或 deny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match as-path 60
  ```

## `match community`

- 命令：
  +  `match community <community-list-name | community-list-num > [exact-match] `
  +  `no match community [<community-list-name | community-list-num > [exact-match]] `
  +  `功能：配置匹配 BGP 路由信息的团体属性，本命令的 no 操作为删除配置`
- 参数： `< community-list-name >` 为 community-list 名称， `<community-list-num >` 为 community-list序号，取值范围为 1～99（标准ACL）或 100～199（扩展ACL），`[exact-match]`表示精确匹配
- 命令模式：`route-map` 配置模式
- 使用指南：
  本命令按 community list 中指定的规则对 BGP 路由信息的团体属性进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作。
  团体属性通过 match 和 set 可以提供对大量路由应用策略的能力
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match community 100 exact-match
  ```

## `match interface`

- 命令：
  + `match interface < interface-name >`
  + `no match interface [< interface-name >]`
- 功能：配置对接口匹配，本命令的 no 操作为删除配置。
- 参数：`< interface-name >`为接口名称。
- 命令模式：route-map 配置模式。
- 使用指南：本命令按路由中的下一跳接口信息进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作。本命令仅用于 RIP 和OSPF 协议。
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match interface vlan1
  ```

## `match ip`

- 命令：
  + `match ip <address | next-hop> <ip-acl-name | ip-acl-num | prefix-list list-name>`
  + `no match ip <address | next-hop> [<ip-acl-name | ip-acl-num | prefix-list list-name>]`
- 功能：配置匹配路由前缀或下一跳，本命令的 no 操作为删除配置
- 参数： 
  + `< address >`表示匹配的是路由前缀，
  + `< next-hop >` 表示匹配的是路由下一跳，
  + `< ip-acl-name >` 为 `ip access-list` 名称，
  + `< ip-acl-num >`为 `ip access-list` 序号，取值范围为 1～199 或 1300～2699（扩展范围）
  + `prefix-list` 表示要按前缀列表规则进行匹配，`list-name` 为前缀列表名称
- 命令模式：route-map 配置模式
- 使用指南：本命令按路由中的路由前缀或下一跳信息进行匹配，如果匹配成功，则执行 `route-map` 中的 `permit` 或 `deny` 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match ip address prefix-list mylist
  ```

## `match ipv6 address`

- 命令：
  + `match ipv6 address <ipv6-acl-name | prefix-list list-name>`
  + `no match ipv6 address [<ipv6-acl-name | prefix-list list-name>]`
- 功能：配置匹配 ipv6 路由前缀，本命令的 no 操作为删除配置
- 参数：`address` 表示匹配的是路由前缀，`<ipv6-acl-name>` 为 ipv6 access-list 名称，prefix-list 表示要按前缀列表规则进行匹配， list-name 为前缀列表名称
- 命令模式： `route-map` 配置模式
- 使用指南：本命令按路由中的路由前缀进行匹配，如果匹配成功，则执行 route-map 中 permitdeny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match ipv6 address prefix-list mylist
  ```

## `match ipv6 next-hop`

- 命令：
  + `match ipv6 next-hop <ipv6-address>`
  + `no match ipv6 next-hop [<ipv6-address>]`
- 功能：配置匹配 ipv6 路由下一跳，本命令的 no 操作为删除配置
- 参数： next-hop 表示匹配的是路由下一跳， ipv6-address 表示下一跳的接口 ipv6 地址
- 命令模式： route-map 配置模式。
- 使用指南：本命令按路由中的下一跳信息进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作
- 举例：

```text
Switch#config terminal
Switch(config)#route-map r1 permit 5
Switch(config-route-map)# match ipv6 next-hop 2000::1
```

## `match metric` 

- 命令：
  + `match metric <metric-val>`
  + `no match metric [<metric-val>]`
- 功能：配置匹配路由信息的度量值，本命令的 no 操作为删除配置
- 参数： `<metric-val >`为度量值，范围为 0～4294967295
- 命令模式： route-map 配置模式
- 使用指南：本命令按路由中的度量值进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match metric 60
  ```

## `match origin`

- 命令：
  + `match origin <egp | igp | incomplete>`
  + `no match origin <egp | igp | incomplete>`
- 功能：配置匹配 BGP 路由信息的源，本命令的no操作为删除配置。
- 参数：egp 表示路由学习自外部网关协议，igp 表示路由学习自内部网关协议，incomplete
- 表示路由源不能确定
- 命令模式：route-map 配置模式
- 使用指南：本命令按BGP 路由中的源信息进行匹配，如果匹配成功，则执行route-map 中的permit 或deny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match origin egp
  ```

## `match route-type`

- 命令：
  + `match route-type external <type-1 | type-2>`
  + `no match route-type external  [<type-1 | type-2>]`
- 功能：配置匹配 OSPF 路由信息的路由类型，本命令的 no 操作为删除配置
- 参数：type-1 表示匹配 OSPF 类型 1 外部路由，type-2 表示匹配 OSPF 类型 2 外部路由
- 命令模式： route-map 配置模式
- 使用指南：本命令按 OSPF 路由的类型进行匹配（OSPF AS-external LSA 类型为 type 1 或 type2），如果匹配成功，则执行 route-map 中的 permit 或deny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match route-type external type-1
  ```

## `match tag`

- 命令：
  + `match tag <tag-val>`
  + `no match tag [<tag-val>]`
- 功能：配置匹配 OSPF 路由信息的 tag 域，本命令的 no 操作为删除配置
- 参数： `<tag-val >` 为 tag 值，范围为 0～4294967295 
- 命令模式：route-map 配置模式
- 使用指南：本命令按 OSPF 路由中的 tag 值进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match tag 60
  ```

## `route-map`

- 命令：
  + `route-map <map_name> {deny | permit} <sequence_num>`
  + `no route-map <map_name> [{deny | permit} <sequence_num>]`
- 功能：配置 route-map ，并且进入 route-map 模式，本命令的 no 操作为删除 route-map
- 参数：
  + `<map_name>`为 route-map 名称， permit 指定所定义的 route-map 的匹配模式为允许模式， deny 指定所定义的 route-map 的匹配模式为拒绝模式（此模式下set子句不会被执行），
  + `<sequence_num>` 为 route-map 序列号，取值范围为 1～65535 
- 缺省情况：无
- 命令模式：全局配置模式。
- 使用指南：
  + 一个 route-map 可由多个节点构成，每个节点是进行匹配检查的一个单元，节点间依据顺序号 sequence-number 标识检查顺序。
  + permit 表示当路由项满足该节点的所有 match 子句时，认为通过该节点的过滤，并执行该节点的 set 子句，不进入下一个节点的测试；
  + 如路由项不满足该节点的 match 子句将进入下一个节点继续测试。 
  + deny 表示 set 子句不会被执行，当路由项满足该节点的所有 match 子句时被拒绝通过该节点，不进入下一个节点的测试；如路由项不满足该节点的 match 子句，将进入下一个节点继续测试。
  + 不同节点间是或的关系，即交换机依次检查 route-map 的各个节点, 通过 route-map 的某一节点就意味着通过该 route-map 过滤。
  + 需要注意的是，如果定义了一个以上的 route-map 节点， route-map 的各个节点中至少应该有一个节点的匹配模式是 permit。
  + 当一个 route-map 用于路由信息过滤时，如果某路由信息没有通过任一节点，则认为该路由信息没有通过该 route-map。
  + 当 route-map 的所有节点都是 deny 模式时，所有路由信息都不会通过该 route-map 
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#match as-path 60
  Switch(config-route-map)#set weight 30
  ```

## `set aggregator`

- 命令：
  + `set aggregator as <as-number> <ip_addr>`
  + `no set aggregator as [<as-number> <ip_addr>]`
- 功能：配置为 BGP 聚合者分配一个 AS 号，本命令的 no 操作为删除配置
- 参数：`<as-number >` 为 AS 号，`<ip_addr>` 为聚合者的 ip 地址，点分十进制形式
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set aggregator as 200 10.1.1.1
  ```

## `set as-path`

- 命令：
  + `set as-path prepend <as-num>`
  + `no set as-path prepend [<as-num>]`
- 功能：配置在 BGP 路由信息的 AS 路径域增加 AS 号，本命令的 no 操作为删除配置
- 参数：`< as-num >` 为 AS 号，取值范围为 1-4294967295 。可用十进制表示，如 6553700 ；也可用分隔符方式表示，如 100.100 。可连续循环输入多个
- 命令模式： route-map 配置模式
- 使用指南：通过在 BGP 的 AS 域增加 AS 号，可以增加 AS 路径长度，从而影响邻居最佳路径的选择。要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set as-path prepend 200 100.100
  ```

## `set atomic-aggregate`

- 命令：
  + `set atomic-aggregate`
  + `no set atomic-aggregate`
- 功能：配置 BGP 路由信息的原子聚合属性，本命令的 no 操作为删除配置
- 参数：无
- 命令模式： route-map 配置模式
- 使用指南：BGP 使用原子聚合属性告知其它 BGP 发言者，本地系统选择了一个次具体的路由，而没有选择包含在其内的更具体的路由。要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set atomic-aggregate
  ```

## `set comm-list`

- 命令：
  + `set comm-list <community-list-name | community-list-num > delete`
  + `no set comm-list <community-list-name | community-list-num > delete`
- 功能：配置 BGP 从入站或出站路由信息中删除团体属性，本命令的 no 操作为删除配置
- 参数：`< ommunity-list-name >` 为团体列表名称， `< community-list-num >`为团体列表序号，取值范围为 1～99（标准团体列表）或 100～199（扩展团体列表）
- 命令模式： route-map 配置模式
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set comm-list 100 delete
  ```

## `set community`

- 命令： 
  + `set community [AA:NN] [internet] [local-AS] [no-advertise] [no-export] [none][additive]`
  + `no set community [AA:NN] [internet] [local-AS] [no-advertise] [no-export] [none][additive]`
- 功能：配置 BGP 路由信息的团体属性，本命令的 no 操作为删除配置
- 参数：
  + `[AA:NN]`为团体属性值，
  + `[internet]`表示因特网范围，
  + `[local-AS]`表示本路由不发送到 local AS 外（可以在联盟的子 AS 之间发布），
  + `[no-advertise]`表示本路由不发送给任何邻居，
  + `[no-export]`表示本路由不发送给EBGP 邻居，
  + `[none]`表示从本路由前缀中删除团体属性，
  + `[additive]`表示添加在已有团体属性后。
命令模式：route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set community local-as additive
  ```

## `set extcommunity`

- 命令：
  + `set extcommunity <rt | soo> <AA:NN>`
  + `no set extcommunity <rt | soo> [<AA:NN>]`
- 功能：配置 BGP 路由信息的扩展团体属性，本命令的 no 操作为删除配置
- 参数：
  + `<rt>` 为路由目标（ route target ），
  + `<soo>`为源站点（ site of origin ），
  + `<AA:NN>`为团体属性值，其中 AA 为 AS 号，取值范围为 1-4294967295 。
  + 可用十进制表示，如 6553700 ；也可用分隔符方式表示，如 100.100 。
  + NN 为任意两字节数字
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：设置 rt 为 100:10

  ```text
  Switch#config terminal
  Switch(config)#route-map r1 permit 5
  Switch(config-route-map)#set extcommunity rt 100:10
  设置soo 为200.200:10
  Switch(config)#route-map r1 permit 10
  Switch(config-route-map)#set extcommunity soo 200.200:10
  ```

## `set ip next-hop` 

- 命令：
  + `set ip next-hop <ip_addr> no` 
  + `set ip next-hop [<ip_addr>] `
- 功能：配置路由的下一跳，本命令的 no 操作为删除配置。
- 参数：`< ip_addr >`为下一跳的 ip 地址，点分十进制形式。
- 命令模式： route-map 配置模式。
- 举例： 
  
  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set ip next-hop 10.2.2.2
  ```

## `set local-preference`

- 命令：
  + `set local-preference <pre_val> no` 
  + `set local-preference [<pre_val>] `
- 功能：配置 BGP 路由的本地优先级，本命令的 no 操作为删除配置
- 参数：`< pre_val >`为本地优先级值，范围为 0～4294967295 。命令模式： route-map 配置模式
- 使用指南：
  本地优先级属性是给予一个路由的优先程度，并使其与同一目的地的其它路由比较，较高的本地优先级表示该路由更为优选。
  本地优先级只在本 AS 内有效，不会传送给 EBGP 邻居。
  要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set local-preference 60
  ```

## `set metric`

- 命令：
  + `set metric < metric_val> no `
  + `set metric [<metric_val>] `
- 功能：配置路由的度量值，本命令的 no 操作为删除配置
- 参数：`< metric_val >`为度量值，范围为 1～4294967295 
- 命令模式： route-map 配置模式
- 使用指南：度量值可以影响外部邻居到本 AS 的路径选择。度量值越小，优先程度越高。一般情况下，只比较同一 AS 内的邻居的路径的度量值。要扩展比较不同 AS 邻居路径的度量值，需配置命令 bgp always-compare-med 。要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set metric 60
  ```

## `set metric-type` 

- 命令：
  + `set metric-type <type-1 | type-2> no` 
  + `set metric-type [<type-1 | type-2>]`
- 功能：配置 OSPF 路由信息的度量类型，本命令的 no 操作为删除配置
- 参数： type-1 表示匹配 OSPF 类型 1 外部路由， type-2 表示匹配 OSPF 类型 2 外部路由
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set metric-type type-1
  ```

## `set origin`

- 命令：
  + `set origin <egp | igp | incomplete > no` 
  + `set origin [<egp | igp | incomplete >]`
- 功能：配置 BGP 路由信息的源码，本命令的 no 操作为删除配置
- 参数： egp 表示路由学习自外部网关协议， igp 表示路由学习自内部网关协议， incomplete 表示路由源不能确定
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set origin egp
  ```

## `set originator-id`

- 命令：
  + `set originator-id <ip_addr> no` 
  + `set originator-id [<ip_addr>]` 
- 功能：配置 BGP 路由信息的源 ip 地址，本命令的 no 操作为删除配置
- 参数：`<ip_addr>`为路由的源 ip 地址，点分十进制形式
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set originator-id 10.1.1.1
  ```

## `set tag`

- 命令：
  + `set tag <tag_val> no` 
  + `set tag [<tag_val>]`
- 功能：配置 OSPF 路由信息的 tag 域，本命令的 no 操作为删除配置
- 参数：`< tag-val >`为 tag 值，范围为 0～4294967295 
- 命令模式： route-map 配置模式
- 使用指南： AS-external-LSA 类型的 LSA 有一个 route-tag 域，该域一般是由其它路由协议标记的。要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set tag 60
  ```

## `set vpnv4 next-hop` 

- 命令：
  + `set vpnv4 next-hop <ip_addr> no` 
  + `set vpnv4 next-hop [<ip_addr>]` 
- 功能：配置 BGP VPNv4 路由信息的下一跳，本命令的 no 操作为删除配置
- 参数：`<ip_addr>`为 VPNv4 路由的下一跳 ip 地址，点分十进制形式
- 命令模式： route-map 配置模式
- 使用指南：要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set vpnv4 next-hop 10.1.1.1
  ```

## `set weight`

- 命令：
  + `set weight <weight_val> no` 
  + `set weight [<weight_val>]` 
- 功能：配置 BGP 路由信息的权重值，本命令的 no 操作为删除配置
- 参数：`<weight_val>`为权重值，范围为 0～4294967295 
- 命令模式： route-map 配置模式
- 使用指南：权重值用于帮助最佳路径的选择，只在本交换机有效。在到同一目的地有多条路由的情况下，权重值越高越优先。要使用本命令，需首先定义一条 match 语句
- 举例：

  ```text
  Switch#config terminal 
  Switch(config)#route-map r1 permit 5 
  Switch(config-route-map)#set weight 60
  ```

## `show ip prefix-list <list-name>` 

- 命令：
  
  + `show ip prefix-list [<list-name> [<ip_addr/len> [first-match | longer] | seq <sequence-number>]] `
- 功能：按前缀列表名称进行显示
- 参数：`<list-name>`为前缀列表名称，`<ip_addr/len>`为前缀 ip 地址和掩码长度， first-match 表示显示对特定 ip 地址而言匹配的第一个路由表， longer 表示要查找更长的前缀， seq 表示按序列号进行显示，`<sequence-number>`为序列号，范围为 0～4294967295 
- 缺省情况：无
- 命令模式：特权和配置模式
- 使用指南：不指定前缀列表的名字时，会显示所有的前缀列表
- 举例： 

  ```text
  Switch#show 
  ip prefix-list ip prefix-list 1: 1 entries 
      deny any
  ip prefix-list mylist: 1 entries
      deny 1.1.1.1/8 
  Switch#show ip prefix-list mylist 1.1.1.1/8 
      seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0)
  ```

  + `ip prefix-list mylist: 1 entries`
    * 显示名称为 mylist 的前缀列表，该前缀列表包含 1 个实体
  + `seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0)`
    * 表示序列号为 5 的前缀列表内容，`hit count: 0` 表示被命中 0 次，`refcount: 0` 表示引用 0 次

## `show ip prefix-list <detail | summary>`

- 命令：
  
  + `show ip prefix-list [<detail | summary> [<list-name>] ] `
- 功能：显示前缀列表内容
- 参数：detail 表示显示详细信息， summary 表示显示摘要信息，`<list-name>`为前缀列表名称
- 缺省情况：无
- 命令模式：特权和配置模式
- 使用指南：不指定前缀列表的名字时，会显示所有的前缀列表
- 举例：

  ```text
  Switch#show ip prefix-list detail mylist 
  ip prefix-list mylist: 
    count: 2, range entries: 0, 
    sequences: 5 - 10 seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0) 
    seq 10 permit 2.2.2.2/8 (hit count: 0, refcount: 0) 
  Switch#show ip prefix-list summary mylist 
  ip prefix-list mylist: 
    count: 2, range entries: 0, sequences: 5 - 10
  ```

  + `ip prefix-list mylist`:
    * 显示名称为 mylist 的前缀列表
  + `count: 2, range entries: 0, sequences: 5 - 10`
    * `count: 2` 表示 2 个前缀列表实体，`sequences: 5 – 10` 显示序列号，5 为起始序列号，10 为尾序列号
  + `deny 1.1.1.1/8 (hit count: 0, refcount: 0)`
    * `deny 1.1.1.1/8` 为前缀列表实体具体内容，`hit count: 0` 表示被命中 0 次，`refcount: 0` 表示引用 0 次

## `show route-map`  33333333333333333333333

- 命令：
  
  + `show route-map `
- 功能：显示 route-map 内容
- 参数：无
- 缺省情况：无
- 命令模式：特权和配置模式
- 使用指南：无
- 举例： 

  ```text
  Switch# show route-map 
  route-map a, deny, sequence 10 
    Match clauses: 
      as-path 60 
    Set clauses: 
      metric 10
  ```

  + `route-map a, deny, sequence 10`
    * `route-map a`表示 oute-map 的名称为 a ， `deny` 表示模式为 deny ， `sequence 10` 表示序列号为 10 
  + `Match clauses:`
    * `Match` 子句
  + `as-path 60`
    * `Match` 子句的具体内容
  + `Set clauses:`
    * `Set` 子句
  + `metric 10`
    * `Set` 子句的具体内容


## `show router-id`
- 命令：
  + `show router-id`
- 功能：显示路由器的 router-id 信息
- 缺省情况：不显示
- 命令模式：特权和配置模式
- 举例： 

```text
例1：
Switch#show router-id 
Router ID: 20.1.1.1 (automatic) 
```

```text
例2： 
Switch#show router-id 
Router ID: 20.1.1.2 (config)
```
