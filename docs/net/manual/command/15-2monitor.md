# PoE监控和调试命令


## `show power inline`
- 命令：
  + `show power inline `
- 功能：显示全局 PoE 设置与状态。
- 参数：无。命令模式：特权用户模式。
- 缺省情况：无。
- 使用指南：各显示字段含义如下表


|字段 | 描述 |
|:---:|:---:|
|   Power Inline Status|全局功能开关状态|
|   Power Avaliable    |全局可用功率上限值|
|   Power Used         |全局功率已使用值|
|   Power Remaining    |全局剩余可用功率|
|   Min Voltage        |全局欠压阈值|
|   Max Voltage        |全局过压阈值|
|   Police             |功率优先策略开关状态|
|   Legacy             |检测非标准PD开关状态|
|   Disconnect         |断开PD的方式|
|   HW Version         |PoE模块硬件版本号|
|   SW Version         |PoE模块软件版本号|
|   Mode               |供电模式 signal：信号线供电（Alternative A） spare：空闲线供电（Alternative B）|

 - 举例： 显示当前PoE的全局状态。
```
 Switch#show power inline Power Inline Status: On Power Available: 370 W Power Used: 0 W Power Remaining: 370 W
 Min Voltage: 44 V 
 Max Voltage: 57 V 
 Police: Off 
 Legacy: Off 
 Disconnect: Ac 
 Mode: Signal HW 
 Version: 30 
 SW Version: 05.0.5
 ```
 ## `show power inline interface ethernet`
- 命令：
  + `show power inline interface [ethernet <interface-number> | <interface-name>] `
- 功能：显示端口 PoE 的配置与状态。
- 参数：interface-list：端口列表。若缺省该参数则显示所有端口。
- 命令模式：特权用户模式。
- 缺省情况：无。
- 使用指南：各字段含义如下表字段

|字段|描述|
|:---:|:---:|
| Interface   |以太网端口号|
| Status      |供电状态 enable：使能disable：关闭供电功能|
| Oper        |工作状态 on：PD连接并正常受电off：PD未连接faulty：PD检测出错deny：可用功率不够或PD申请功率过大|
| Power       |端口当前使用的功率|
| Max         |端口最大分配的功率|
| Current     |端口当前的电流|
| Volt        |端口当前的电压|

```
Priority            供电优先级 
                    critical：
                    极高优先级high：
                    高优先级low：低优先级

Class               分类    用途    PD输入功率（W）
                     0     缺省     0.44~12.95
                     1     可选     0.44~3.84
                     2     可选     3.84~6.49
                     3     可选     6.49~12.95
                     4     为未来用途预留 
                     被视为类别0 为未来用途预留。 一个兼容受电设备不可能提供一个四类信号
```

- 举例：`显示当前PoE设备1到6端口的状态。`
```
Switch#show power inline interface ethernet1/0/1-6

Interface Status Oper Power(mW) Max(mW) Current(mA) Volt(V) Priority Class
------------ ------- ------ --------- ------- ----------- ------- -------- -----
Ethernet1/0/1    enable    off    0    15400    0    0    high   0 
Ethernet1/0/2    enable    off    0    15400    0    0    low    0 
Ethernet1/0/3    enable    off    0    15400    0    0    low    0 
Ethernet1/0/4    enable    off    0    15400    0    0    low    0 
Ethernet1/0/5    enable    off    0    15400    0    0    low    0 
Ethernet1/0/6    enable    off    0    15400    0    0    low    0
```


## `debug power inline`
- 命令：
   +   `debug power inline no debug power inline `
- 功能：PoE 功能排错开关。
- 参数：无。
- 命令模式：特权用户模式。
- 缺省情况：无。
- 使用指南：当打开该排错开关后，命令执行时的关键过程都会有相关打印信息，便于在出错时进行排错。使用 no 命令可关闭该排错功能。
- 举例：打开 PoE 的排错功能。
```
Switch#debug power inline
```






