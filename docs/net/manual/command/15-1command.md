# PoE命令

## ·power inline enable(全局)·
- 命令：
  + `power inline enable no power inline enable` 
- 功能：打开/关闭全局 PoE 供电。
- 参数：无。
- 命令模式：全局配置模式。
- 缺省情况：全局供电状态为关闭。
- 使用指南：全局关闭后，不论端口的供电状态是打开还是关闭，均不会对外供电。
- 举例：关闭全局供电。
```
Switch(config)#no power inline enable
```


- power inline enable(端口)
- 命令：
  + `power inline enable no power inline enable `
- 功能：打开/关闭端口 PoE 供电。
- 参数：无。
- 命令模式：端口配置模式。
- 缺省情况：端口供电状态为打开。
- 使用指南：
+  `使能时：自动检测。处于该状态时，PSE 自动检测 PD，并自动进行分类，然后根据分类进行供电。当 PSE 检测到有 PD 连接时，如果此时有足够的剩余功率，则给该 PD 指定的输出功率，并更新 LED 的指示；如果没有足够的功率，则由功率分配机制决定是否供电。当在该状态正常供电过程中，PD 有额外申请功率并超过最高设定阈值，则断开对该 PD 的供电，并更新 LED 的指示。当正常断开 PD 与 PSE 的连接时，则 PSE停止对外供电，并更新 LED 的指示。`  
  + `关闭时：禁止供电。关闭 PSE 供电功能，无论是否有 PD 连接都不对其进行供电。此时端口为普通以太网的数据端口，不影响数据的转发。
全局关闭后，不论端口的供电状态是打开还是关闭，均不会对外供电` 
- 举例：关闭端口1、3、4、5、6的供电。
```
Switch(config)#interface ethernet 1/0/1;3-6 Switch(Config-If-Port-Range)#no power inline enable
```

## `power inline high-inrush`
- 命令：
  + `power inline high-inrush enable no power inline high-inrush enable `
- 功能：使能允许上电瞬间高冲击电流，关闭允许上电瞬间高冲击电流。
- 参数：无。
- 命令模式：全局配置模式。
- 缺省情况：未使能允许上电瞬间高冲击电流。
- 使用指南：非标准 PD 在上电瞬间会产生高冲击电流，导致 PSE 侧自我保护从而将 PD 断电，在这种情况下，若一定要给该非标准 PD 供电，需要允许上电瞬间的高冲击电流。
- 举例：使能允许上电瞬间高冲击电流
```
。Switch(config)#power inline high-inrush enable
```

## `power inline legacy`
- 命令：
  + `power inline legacy enable no power inline legacy enable `
- 功能：设定是否对非 IEEE 标准 PD 进行供电。
- 参数：无。
- 命令模式：全局配置模式。
- 缺省情况：不对非 IEEE 标准 PD 供电。
- 使用指南：打开该功能时，交换机可以兼容非 IEEE 标准的 PD ，并对其进行正常供电。
举例：设置交换机可对非标准 PD 供电。
```
Switch(config)#power inline legacy enable
```


## `power inline max(全局)`
- 命令：
  + `power inline max <max-wattage> no power inline max `
- 功能：设定 PoE 电源的全局最大输出功率。
- 参数：max-wattage: 最大功率值。单位为 W，粒度为 1W，全局可设置范围 DCRS-5960-52T-POE 和 DCRS-5960-28T-POE 为 37~740W。
- 命令模式：全局配置模式。
- 缺省情况：全局最大输出功率 DCRS-5960-52T-POE 和 DCRS-5960-28T-POE 为 740W。no 命令将恢复到缺省配置。
- 使用指南：设定 PoE 电源的全局最大输出功率，以保证电源供电安全，也可用于有效控制下联设备的消耗功率。
- 举例：设置全局最大可输出功率为 50W。
```
Switch(config)#power inline max 50
```


## `power inline max(端口)`
- 命令：
  + `power inline max <max-wattage> no power inline max `
- 功能：设定端口最大输出功率。
- 参数：max-wattage：最大功率值。单位为 mW，粒度为1 00mW，端口可设置范围为 1~15400mW (802.3af)/1~3000mW (802.3at)。不足 100mW以 100mW 计，即1~100均为 100，15301~15400 均为 15400，同时保持用户配置的值不变，不进行归整处理。
- 命令模式：端口配置模式。
- 缺省情况：端口最大输出功率为 15400mW (802.3af)/3000mW (802.3at)。
- 使用指南：在与全局最大功率的配合下，有效控制各个端口的输出功率。
- 举例：设定端口1的最大输出功率为0.8W。
```
Switch(config)#interface ethernet 1/0/1 Switch(Config-If-Ethernet1/0/1)#power inline max 800
```

## `power inline police`
- 命令：
  + `power inline police enable no power inline police enable `
- 功能：打开/关闭功率优先级管理策略模式。
- 参数：无。
- 命令模式：全局配置模式。
- 缺省情况：功率优先级管理策略模式关闭。
- 使用指南：功率管理策略是否使用优先级策略。使能命令使用优先级策略， no 命令恢复先到先得策略。当打开优先级策略时，可对端口的优先级进行单独配置。在优先级模式下，当 PSE 剩余功率不足时，将自动关闭低优先级的端口，保证高优先级端口的正常供电，而与 PD 接入的时间无关。若端口的优先级相同，则序号小的端口的优先级较高。在先到先得模式下，当 PSE 剩余功率不足时，不能对新接入的 PD 进行供电。
- 举例：
```
打开功率优先级策略模式。Switch(config)#power inline police enable
```


## `power inline priority`
- 命令：
  + `power inline priority {critical | high | low} `
- 功能：设置端口供电优先级。
- 参数：critical：极高优先级；high：高优先级；low：低优先级。
- 命令模式：端口配置模式。
- 缺省情况：端口优先级为low。
- 使用指南：在 power inline police enable 状态下生效，在剩余功率不足以对新接入的PD供电时，对高优先级的端口优先供电。
- 举例：调整端口 1 的优先级为 high，2的优先级为 critical。
```
Switch(config)#interface ethernet 1/0/1 Switch(Config-If-Ethernet1/0/1)#power inline priority high Switch(config)#interface ethernet 1/0/2 Switch(Config-If-Ethernet1/0/2)#power inline priority critical
```
