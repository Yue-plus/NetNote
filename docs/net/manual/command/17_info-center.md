# `Info-center`（信息中心）命令

## Info-center enable

- 命令：
  + `info-center enable`
  + `no info-center enable`
- 功能：该命令负责开启信息中心输出的功能。无论是否开启输出功能，信息中心仍然可以正常配置。也就是说，该命令是信息中心控制的信息输出的一个开关。去使能可以关闭正在输出的信息，使能后原有的配置仍然生效。
- 参数：无。
- 缺省情况：缺省关闭。
- 命令模式：全局配置模式。
- 使用指南：全局模式下开启/关闭信息中心输出的功能。
- 举例：
  ```text
  Switch(config)#info-center enable
  Switch(config)#no info-center enable
  ```

## Terminal monitor

  + `命令：terminal monitor`
  + `no terminal monitor`
- 功能：该命令的功能和info-center enable 相同地方是能开关信息中心命令输出，但也有区别。
- info-center enable 仅仅是开关，关闭后能保存当时三种信息源的开关状态，而terminal monitor
- Info-center 命令第1 章Info-center（信息中心）命令
- 2
- 开启与关闭将对三种信息源统一开启或关闭。比如如果仅仅打开了debug 信息源输出，no
- info-center enable 将不会有输出，info-center enable 将仍然只有debug 信息源输出；但如果
- no terminal monitor 之后再terminal monitor 则三种信息源都有输出。
- 参数：无。
- 缺省情况：缺省关闭。
- 命令模式：全局配置模式。
- 使用指南：全局模式下开启/关闭信息中心输出使能。
- 举例：
 ```text
Switch(config)# terminal monitor
Switch(config)#no terminal monitor
 ``` 
## Terminal debug

+ `命令：terminal debug`
+ `no terminal debug`
- 功能：该命令的功能和terminal monitor 类似，但这个命令仅仅控制debug 信息源是否输出。
- 参数：无。
- 缺省情况：缺省关闭。
- 命令模式：全局配置模式。
- 使用指南：全局模式下开启/关闭信息中心信息源debug 输出使能。
- 举例：
```text
Switch(config)# terminal debug
Switch(config)#no terminal debug
```

## Terminal logging

+ `命令：terminal logging`
+ `no terminal logging`
- 功能：该命令的功能和terminal monitor 类似，但这个命令仅仅控制log 信息源是否输出。
- 参数：无。
- 缺省情况：缺省关闭。
- 命令模式：全局配置模式。
- 使用指南：全局模式下开启/关闭信息中心信息源log 输出使能。
举例：
```text
Switch(config)# terminal logging
Switch(config)#no terminal logging
```

## Terminal trapping

+ `命令：terminal trapping`
+ `no terminal trapping`
- 功能：该命令的功能和terminal monitor 类似，但这个命令仅仅控制trap 信息源是否输出。
- 参数：无。
- 缺省情况：缺省关闭。
- 命令模式：全局配置模式。
- 使用指南：全局模式下开启/关闭信息中心信息源trap 输出使能。
- 举例：
```text
Switch(config)# terminal trapping
Switch(config)#no terminal trapping
```
## show info-center

+ `命令：`
+ `盒式设备支持：`
+ `show info-center `
+ `机架式设备支持：`
+ `show info-center slot {<slot ID>}`
- 功能：该命令主要用于显示信息中心包含哪些可以配置的资源。包含了所有信息源、通道以及
- 输出方向各项资源名称信息等。需要注意的是，snmp 输出方向虽然显示了，但并不支持，也
- 不能配置。
- 缺省情况：缺省关闭。
- 命令模式：所有模式。
- 使用指南：显示信息中心所包含的信息源、通道以及输出方向名称信息。
- 举例：
```text
Sysname#show info-center
card name master card
sources
debug log trap
channels
channel 0 name console
channel 1 name monitor
channel 2 name loghost
channel 3 name trapbuffer
Info-center 命令第1 章Info-center（信息中心）命令
4
channel 4 name logbuffer
channel 5 name channel5
channel 6 name channel6
channel 7 name channel7
channel 8 name channel8
channel 9 name channel9
directions
console monitor loghost trapbuffer logbuffer snmpagent logfile
显示结果各域说明：
域描述
Card name 需要查看信息中心配置的板卡名称，在盒式设备上固定内容为master
card。机架式设备相关说明待后续提交机架式功能时补充。
Sources 所有信息源名称
Channels 所有通道名称及编号
Directions 所有方向名称（snmpagent 未使用）
Slot ID 板卡标识，1，2，3...M1,M2
```
## show info-center source

+ `命令：`
+ `盒式设备支持：`
+ `show info-center source {debug | log | trap}`
+ `机架式设备支持：`
+ `show info-center source {debug | log | trap} slot {<slot ID>}`
- 功能：显示信息中心指定信息源配置信息。
- 缺省情况：缺省关闭。
- 命令模式：所有模式。
- 使用指南：该命令主要用于显示信息中心指定信息源配置信息。包含信息源名称、时间戳格式
- 以及该信息源绑定的通道配置信息。
- 举例：
```text
Sysname#show info-center source debug
card name master card
source debug
time stamp format DATE
channels
channel 0 name console level debugging prefix off
Info-center 命令第1 章Info-center（信息中心）命令
5
channel 1 name monitor level debugging prefix off
channel 4 name logbuffer level errors prefix on
channel 9 name channel9 level errors prefix on
Card name 需要查看信息中心配置的板卡名称，在盒式设备上固定内容为master
card。机架式设备相关说明待后续提交机架式功能时补充。
Source 指定信息源名称
Time stamp 时间戳格式，时间戳相关说明可以参考信息源信息的格式章节。
Channels 指定信息源绑定的通道名称以及配置。
其中：
level 表示允许显示的信息安全级别。
Prefix 表示输出的信息是否包含前缀。前缀信息即信息源信息的格式
除content 外的其他内容。如果prefix 状态为on 则包含这些前缀信息，
如果为off 则仅输出content。
Slot ID 板卡标识，1，2，3...M1,M2rrr,k
```
## show info-center channel

+ `命令：`
+ `盒式设备支持：`
+ `show info-center channel {<channel ID>|<channel name>}`
+ `机架式设备支持：`
+ `show info-center channel {<channel ID>|<channel name>} slot{<slot ID>}`
- 功能：显示信息中心指定通道的配置信息。
- 缺省情况：缺省关闭。
- 命令模式：所有模式。
- 使用指南：该命令主要用于显示信息中心指定通道配置信息。包含绑定的信息源、安全级别、
- 前缀开关以及该信息源绑定的输出方向配置信息。
- 举例：显示信息中心指定通道channel 0 的配置信息。
```text
Sysname#show info-center channel 0
card name master card
channel 0 name console
sources
source debug level debugging prefix off
source log level debugging prefix on
source trap level debugging prefix on
Info-center 命令第1 章Info-center（信息中心）命令
6
directions
direction console
console has no special config
```

## show info-center direction

+ `命令：`
+ `盒式设备支持：`
+ `show info-center direction {<direction name>} [channel {<channel ID> | <channel`
+ `name>}] `
+ `机架式设备支持：`
+ `show info-center direction {<direction name>} [channel {<channel ID> | <channel`
+ `name>}][slot <slot ID>]`
- 功能：显示信息中心指定输出方向的配置信息。
- 参数：
- 参数描述
- Direction name
- 输出方向的名称目前包含console，monitor，logbuffer，trapbuffer，
- loghost，logfile
- Channel
- 目前loghost，logfile 两个输出方向支持绑定多个通道，每个绑定的通
- 道可以有不同的配置信息，所以当指定的输出方向为loghost 以及
- logfile 时需要指定通道才能查看具体配置信息。
- Slot ID 板卡标识，1，2，3...M1,M2,仅loghost 以及logfile 支持
- 缺省情况：缺省关闭。
- 命令模式：所有模式。
- 使用指南：该命令主要用于显示信息中心指定输出方向配置信息。每种输出方向的配置信息不
- 尽相同。
- Info-center 命令第1 章Info-center（信息中心）命令
- 举例：显示信息中心指定输出方向的配置信息。
```text
Sysname#show info-center direction logfile channel 9
path /mnt/flash/logfile.log
size 1000
```
## show info-center logbuffer
## show info-center trapbuffer
## show info-center logfile
## info-center channel
## info-center source
## info-center console
## info-center monitor
## info-center logbuffer
## info-center trapbuffer
## info-center loghost
## info-center logfile
## info-center reset
## info-center save all
## info-center list all disk
## info-center timestamp
## info-center test
