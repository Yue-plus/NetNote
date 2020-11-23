# VLAN 配置

## Vlan 配置命令



### debug gvrp event

- 命令：`debug gvrp event interface (ethernet | port-channel | ) IFNAME no debug gvrp event interface (ethernet | port-channel | ) IFNAME`
- 功能：开启/关闭 GVRP 事件调试信息开关，包括状态机的转移以及定时器到期等信息。
- 参数：
  + ethernet：物理端口
  + port-channel：汇聚端口
  + IFNAME：端口名
- 命令模式：特权配置模式缺省情况：默认事件调试信息开关关闭。
- 使用指南：把GVRP事件调试信息开关打开。
- 举例：显示GVRP事件调试信息。

  ```text
  Switch(config)#debug gvrp event interface ethernet 1/0/1
  %Jan 16 02:25:14 2006 GVRP EVENT: LO -> VO ，interface ethernet 1/0/1，vlan 100
  %Jan 16 02:35:15 2006 GVRP EVENT: join timer expire，interface ethernet 1/0/1
  ```

### debug gvrp packet
### dot1q-tunnel enable
### dot1q-tunnel untag add c-tag .......... 
### dot1q-tunnel selective enable ......... 1-21.1.6 
### dot1q-tunnel selective s-vlan .......... 1-21.1.7 
### dot1q-tunnel tpid ........ 1-31.1.8 
garp timer join . 1-31.1.9 
garp timer leave .......... 1-31.1.10 
garp timer leaveAll ... 1-41.1.11 
gvrp（全局） .. 1-41.1.12 gvrp（端口） .. 1-41.1.13 no garp timer . 1-51.1.14 name .... 1-51.1.15 private-vlan .... 1-51.1.16 private-vlan association ..... 1-61.1.17 show dot1q-tunnel ... 1-61.1.18 show garp timer ....... 1-71.1.19 show gvrp fsm information  1-71.1.20 show gvrp leaveAll fsm information ....... 1-81.1.21 show gvrp leavetimer running information ....... 1-81.1.22 show gvrp port-member ..... 1-91.1.23 show gvrp port registerd vlan ...... 1-91.1.24 show gvrp timer running information ..... 1-91.1.25 show gvrp vlan registerd port ....1-101.1.26 show vlan .....1-101.1.27 show vlan-translation .......1-121.1.28 switchport access vlan .....1-121.1.29 switchport dot1q-tunnel ...1-121.1.30 switchport forbidden vlan 1-121.1.31 switchport hybrid allowed vlan ..1-131.1.32 switchport hybrid native vlan .....1-141.1.33 switchport interface ..........1-141.1.34 switchport mode ....1-141.1.35 switchport mode trunk allow-null .........1-151.1.36 switchport trunk allowed vlan ....1-151.1.37 switchport trunk native vlan .......1-16
1.1.38 vlan ....1-161.1.39 vlan internal .1-171.1.40 vlan ingress enable 1-171.1.41 vlan-translation ......1-181.1.42 vlan-translation enable .....1-181.1.43 vlan-translation miss drop ..........1-181.2 动态vlan配置命令 ........ 1-191.2.1 dynamic-vlan mac-vlan prefer ......1-191.2.2 dynamic-vlan subnet-vlan prefer .1-191.2.3 mac-vlan .........1-201.2.4 mac-vlan vlan 1-201.2.5 protocol-vlan .1-201.2.6 show dynamic-vlan prefer ..1-211.2.7 show mac-vlan .........1-211.2.8 show mac-vlan interface ....1-221.2.9 show protocol-vlan ..1-221.2.10 show subnet-vlan ...1-221.2.11 show subnet-vlan interface .........1-231.2.12 subnet-vlan ..1-231.2.13 switchport mac-vlan enable ........1-231.2.14 switchport subnet-vlan enable ...1-241.3 Voice VLAN配置命令 ... 1-241.3.1 show voice-vlan .......1-241.3.2 switchport voice-vlan enable ........1-251.3.3 voice-vlan .......1-251.3.4 voice-vlan vlan .........1-261.4 Multi-to-One VLAN translation配置命令 ..... 1-261.4.1 vlan-translation n-to-1 ........1-261.4.2 show vlan-translation n-to-1 .........1-271.5 Super VLAN配置命令 .. 1-271.5.1 supervlan .......1-271.5.2 subvlan 1-281.5.3 arp-proxy subvlan ....1-281.5.4 ip-addr-range subvlan ........1-281.5.5 ip-addr-range .1-291.5.6 show supervlan ........1-29
