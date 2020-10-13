# AC/AP 配置

## ap上线:
```shell script
config)#vlan 10
config)#int vlan 10
config)#ip add 192.168.10.254 255.255.255.0
config)#int e1/0/1
config)#swi mode trunk 
config)#swi trunk native vlan 10      /*指定VLAN10通过*/
config)#exit
config)#wireless                      /*进入无线设置*/
config)#enable                        /*开启无线功能*/
config)#discovery vlan-list 10        /*设置ACvlan10二层发现*/
config)#ap database 00-03-0f-78-d8-00 /*绑定AP的mac地址*/
```
## ①AP管理:
```shell script
AC发现AP
二层发现
DCWS-6028(P)(config-wireless)#discovery vlan-list 1 //指定VLAN发现列表
DCWS-6028(P)(config-wireless)# ap database xx-xx-xx-xx-xx-xx  //添加AP MAC地址

AP发现AC

AP配置
DCN-WLAN-AP# set management static-ip 192.168.2.1  //配置静态IP
DCN-WLAN-AP# set management static-mask 255.255.255.0  //配置掩码
DCN-WLAN-AP# set static-ip-route gateway 192.168.2.2   //配置默认网关
AC配置
DCWS-6028(P)(config-wireless)# discovery ip-list 192.168.2.1  //指定AP IP
DCWS-6028(P)(config-wireless)# ap database xx-xx-xx-xx-xx-xx  //添加AP MAC地址

AP静态发现
DCN-WLAN-AP# set managed-ap switch-address-1 192.168.1.1	//设置第一个AC地址
DCN-WLAN-AP# set managed-ap switch-address-2 192.168.2.2	//设置第二个AC地址
Option下发AC地址
DCWS(config)#ip dhcp pool ap
DCWS(dhcp-ap-config)#option 43 hex 01040A090005	//0104为固定值，后接IP地址16进制
```
## ②AP认证:
```shell script
无验证
DCWS(config-wireless)#ap authentication none

MAC地址验证
DCWS(config-wireless)#ap authe mac //设置AP验证方式为mac地址验证
DCWS(config-wireless)#ap database xx-xx-xx-xx-xx-xx //手动添加AP database 条目

密码验证
AP配置
AP# set managed-ap pass-phrase 12345678	//设置认证密码
AC配置
DCWS(config-wireless)#ap authentication pass-phrase 
DCWS(config-wireless)#ap database xx-xx-xx-xx-xx-xx            
DCWS(config-ap)#password plain 12345678	//设置AP认证密码

序列号认证

AP操作
AP# get system 
Property          Value
---------------------------------------------------------------
model             Wireless Infrastructure Platform Reference AP
version           2.0.20.15
altversion        2.0.20.15
protocol-version  2
base-mac          xx:xx:xx:xx:xx:xx
serial-number     WL013210FA24000118	//序列号
system-name       
system-contact    
system-location   
apmode            fit
AC操作
AC(config)#wireless 
AC(config-wireless)# ap authentication serial-num
AC(config-wireless)# ap database xx-xx-xx-xx-xx-xx 
AC(config-ap)#serial-num WL013210FA24000118

AP逃生
DCWS(config-wireless)#ap prof 1
DCWS(config-ap-profile)#ap escape //开启AP逃生模式
修改AP配置文件
AC(config-ap)#profile 3 //在AP配置模式下()
修改AP管理VLAN
AC(config-ap-profile)#management vlan 4094 
AC(config-ap-profile)#wireless ap profile apply 1
```
## 本地Portal认证:
```sh
 AC(config)#captive-portal    //进入captive-portal模式
  AC(config-cp)#enable    //开启Protal功能
  AC(config-cp)#authentication-type internal    //认证类型为内置Protal
  AC(config-cp)#user user1    //创建并设置用户 user1
  AC(config-cp-local-user)#password 123456    //设置账户的密码为 123456
  AC(config-cp-local-user)#group 0    //用户加入组 group 0
  AC(config-cp-local-user)#!
  AC(config-cp)#configuration 1    //进入captive-portal 配置1
  AC(config-cp-instance)#enable    //开启此配置
  AC(config-cp-instance)#verification local    //设置验证模式为本地
  AC(config-cp-instance)#group 0    //绑定Group 0 组
  AC(config-cp-instance)#auth-method mac-ip-based    //设置认证方式为基于MAC-IP
  AC(config-cp-instance)#interface ws-network 1    //绑定无线网络 (对应配置下发时的 Network 对应一个VAP)
```
## ARP抑制:
```sh
AC(config)# wireless 
AC(config-wireless)#network 1 
AC(config-network)# arp-suppression
```   
## 设置IP地址信息:
```shell script
AP# set management static-ip 192.168.2.1 //设置IP
AP# set static-ip-route management gateway 192.168.2.254    //配置网关
AP# set management static-mask 255.255.255.0  //设置掩码
AP# set management dhcp-status down //关闭DHCP
AP# set management dhcp-status up   //开启DHCP
AP# set managed-ap switch-address-1 1.1.1.1 //设置主AC地址
AP# set managed-ap switch-address-2 2.2.2.2 //设置备用AC地址
AP# set managed-ap switch-address-2 3.3.3.3 //设置备用AC地址
AP# set management vlan-id 1  //设置管理VLAN

DCN-WLAN-AP# factory-reset   //重置AP

AP#switch-apmode fat   //瘦AP转胖AP

AP#switch-apmode fit    //胖AP转瘦AP
```