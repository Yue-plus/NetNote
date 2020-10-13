# 路由器配置

## 路由器背靠背线缆:
```shell script
RT1
RT1_config#int multilink 1  /*进入Multilink 1*/
RT1_config_m1#ip add 10.10.255.21 255.255.255.252   /*配置Multilink1的ip为10.10.255.21/30*/
RT1_config_m1#ppp multilink   /*启用多链路ppp
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
