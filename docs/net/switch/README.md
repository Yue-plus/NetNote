# 神州数码交换机配置

## 神州数码二层交换机划分vlan如下所示:

``` sh
S4600-28P-SI>ena
S4600-28P-SI#conf
S4600-28P-SI(config)#vlan 10
S4600-28P-SI(config-vlan10)#interface ethernet 1/0/1-4
S4600-28P-SI(config-if-port-range)#switchport access vlan 10
Set the port Ethernet1/0/1 access vlan 10 successfully
Set the port Ethernet1/0/2 access vlan 10 successfully
Set the port Ethernet1/0/3 access vlan 10 successfully
Set the port Ethernet1/0/4 access vlan 10 successfully
S4600-28P-SI(config-if-port-range)#exi
S4600-28P-SI(config)#
如果还要改其他vlan和端口把上面的数字改一下就行了
```
## 神州数码交换机改名如下所示:
```sh
S4600-28P-SI#conf
S4600-28P-SI#hostname xxx 
xxx(config)#exi
xxx#
名字在xxx里改
```




