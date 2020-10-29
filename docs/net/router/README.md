# 路由器配置

##路由器基本配置：
```shell script
Router> enable
Router# config
Router_config# int f 0/0
Router_config_f0/0# ip address 10.1.1.1 255.255.255.0  /*配置路由器端口地址*/
```

## 路由器Telnet登录：
```shell script
Router_config# ip telnet access-class [策略名] /*设定telnet使用ACL过滤*/
Router_config# username admin password 0 admin /*创建用户名与密码*/
Router_config# enable password 0 enable /*设定enable密码*/
Router_config# aaa authen enable def enable /*设定enable密码验证方式*/
Router_config# aaa authen login def local /*设定用户名本地认证*/
```

## 路由器SSH登录:
```shell script
Router_config# ip sshd enable  /*开启SSH登录*/
Router_config# ip sshd access-class [策略名]  /*设定SSH使用ACL过滤*/
Router_config# username admin password 0 admin  /*创建用户名与密码*/
Router_config# enable password 0 enable  /*设定enable密码*/
Router_config# aaa authen enable def enable  /*设定enable密码验证方式*/
Router_config# aaa authen login def local  /*设定用户名本地认证*/
```
## 路由器静态路由：
```shell script
Router_config# ip route 10.1.2.0  (目标网段) 255.255.255.0（子网掩码） 10.1.1.2（转发地址）
Router_config# ip route 0.0.0.0 (目标网段) 0.0.0.0（子网掩码） 10.1.1.2（转发地址）/*默认静态路由*/
```

## 路由器RIP动态路由:
```shell script
Router_config# router rip  /*创建并启用 RIP路由*/
Router_config_rip# version 2  /*设置RIP路由版本号 2*/
Router_config_rip# no auto-summary  /*关闭路由自动汇总功能*/
Router_config_rip# network 10.1.1.0 255.255.255.0  /*宣告网段*/
Router_config_rip# network 10.1.2.0 255.255.255.0
Router_config_rip# redistribute connect  /*引入直连路由*/
Routter_config_rip# default-information originate  /*下发默认路由*/
```

## 路由器OSPF动态路由：
```shell script
Router_config# router ospf 1  /*启动 ospf进程 进程号为 1*/
Router_config_ospf_1# router-id 1.1.1.1   /*设置路由router-id*/
Router_config_ospf_1# netword 10.1.1.0 255.255.255.0 ar 0  /*宣告网段*/
Router_config_ospf_1# network 10.1.2.0 255.255.255.0 ar 0  /*区域号为 0 */
Router_config_ospf# redistribute connect  /*引入直连路由*/
Router_config_ospf# default-information originate  /*下发默认路由*/
Router_config# int g 0/3   /*进入G0/3端口*/
Router_config_ospf# area X[区域号] virtual-link X.X.X.X[对端路由ID]  /*设定虚链路*/
Router_config_g0/3# ip ospf priority 0  /*设置不参与OSPF选举*/
Router_config_g0/3# ip ospf passive  /*设置为被动接口,不发送更新报文*/
```

## 路由器单臂路由:
```shell script
Router_config# int g 0/3.1  /*进入G0/3的子端口1*/
Router_config_g0/3.1# encapsulation dot1q 10  /*配置为802.1Q局域网*/
Router_config_g0/3.1# ip address 192.168.10.1 255.255.255.0  /*绑定IP地址*/
Router_config_g0/3.1# no shut   /*非关闭*/
Router_config# int g 0/3.2   /*进入G0/3的子端口2*/
Router_config_g0/3.2# encapsulation dot1q 20   /*配置为802.1Q局域网*/
Router_config_g0/3.2# ip address 192.168.20.1 255.255.255.0   /*绑定IP地址*/
Router_config_g0/3.2# no shut   /*非关闭*/
```

## 路由器背靠背线缆:
```shell script
RT1_config#int multilink 1  /*进入Multilink 1*/
RT1_config_m1#ip add 10.10.255.21 255.255.255.252   /*配置Multilink1的ip为10.10.255.21/30*/
RT1_config_m1#ppp multilink   /*启用多链路ppp*/
RT1_config_m1#multilink-group 1  /*将Multilink 1加入到Multilink聚合组1 */
RT1_config_s0/1#exi       
RT1_config#int se0/1             /*进入串口0/1*/
RT1_config_s0/1#enc ppp          /*指定封装协议为ppp*/
RT1_config_s0/1#ppp multilink    /*启用多链路ppp*/
RT1_config_s0/1#multilink-group 1   /*将接口进入到聚合1*/
RT1_config_s0/1#exi
RT1_config#int se0/2             /*进入串口0/2*/
RT1_config_s0/2#enc ppp         /*指定封装协议为ppp*/
RT1_config_s0/2#ppp multilink        /*启用多链路ppp*/
RT1_config_s0/2#multilink-group 1   /*将接口进入到聚合1*/
RT1_config_s0/2#physical-layer speed 2048000   /*配置se0/2的物理层的波特率为2048000（与对端0/2接口的波特率要一致）*/

RT2
RT2_config#int multilink 1      /*进入Multilink 1*/
RT2_config_m1#ip add 10.10.255.22 255.255.255.252   /*配置Multilink1的ip为10.10.255.22/30*/
RT2_config_m1#ppp multilink   /*启用多链路ppp*/
RT2_config_m1#multilink-group 1    /*将Multilink 1加入到Multilink聚合组1*/
RT2_config_m1#exit 
RT2_config_m1#int se0/1         /*进入串口0/1*/
RT2_config_s0/1#enc ppp         /*指定封装协议为ppp*/
RT2_config_s0/1#ppp multilink   /*启用多链路ppp*/
RT2_config_s0/1#multilink-group 1   /*将接口进入到聚合1*/
RT2_config_s0/1#exi
RT2_config#int se0/2            /*进入串口0/2*/
RT2_config_s0/2#enc ppp         /*指定封装协议为ppp*/
RT2_config_s0/2#ppp multilink        /*启用多链路ppp*/
RT2_config_s0/2#multilink-group 1    /*将接口进入到聚合1*/
RT2_config_s0/2#phy spee 2048000     /*配置se0/2的物理层的波特率为2048000*/
```
## 路由器bai配置:
```shell script
router(config)#int s0/0 ；进入Serail接口bai
router(config-if)#no shutdown ；激活当前接bai口
router(config-if)#clock rate 64000 ；设置同步时钟
router(config-if)#ip address ；设置IP地址bai
router(config-if)#ip address second ；设置第二个IP
router(config-if)#int f0/0.1 ；进入子接口
router(config-subif.1)#ip address ；设置子接口IP
router(config-subif.1)#encapsulation dot1q ；绑定vlan中继协议
router(config)#config-register 0x2142 ；跳过配置文件
router(config)#config-register 0x2102 ；正常使用配置文件
router#reload :重新引导
Address pool range:地址池范
```
## 神州数码路由器清空数据:
```shell script
Ctrl+Break
monitor#del
this file will be erased,are you sure?(y/n)y
monitor#reboot
Do you want to reboot the router(y/n)?y
Please wait..
```
