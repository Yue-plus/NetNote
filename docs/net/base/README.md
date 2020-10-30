# 网络基础

## 常用软件下载

- [SecureCRT（配置终端软件）](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt)
- [Z-TEK 官网（串口转 USB 口线驱动）](http://www.z-tek.com.cn/index.php?catid=13)

## 网线接法

![rj45](./img/rj45.jpg)

## 使用设备列表

- [DCN S4600 系列全千兆绿色智能安全接入交换机](http://www.dcnetworks.com.cn/goods/43.html)
- [DCN S5750E 系列绿色智能万兆安全汇聚接入交换机](http://www.dcnetworks.com.cn/goods/24.html)
  + 开机时间：约 4m35s  
- [DCN DCFW-1800E-N3002-Pro下一代防火墙](http://www.dcnetworks.com.cn/goods/148.html)
- [DCN DCR-2655 模块化路由器](http://www.dcnetworks.com.cn/goods/131.html)
- [DCN DCWS-6028 无线控制器](http://www.dcnetworks.com.cn/goods/120.html)
- [DCN WL8200-I2 室内放装型无线AP](http://www.dcnetworks.com.cn/goods/26.html)

> [DCC-CRL 1000 云服务实训平台](/serve/VM/Cloud/)

## 使用 SecureCRT

从[常用软件下载](#常用软件下载)，前往官网下载并安装 SecureCRT 软件（可免费试用 30 天）与串口转 USB 口线驱动。

### 连接网络设备

协议（Protocol）一般为 `Serial`。
波特率（Baud rate）一般为 `9600` 或 `115200`

![crt-01](./img/crt-01.jpg)

### 设置中文

在网络设备上输入以下指令切换到中文帮助：

```sh
language chinese
```

设置 SecureCRT 软件的文本编码为 `简体中文 GB2312`，**防止乱码**：

![crt-02](./img/crt-02.jpg)

## 使用 CLI 进行配置管理

### 配置模式介绍

```mermaid
graph TD
  A["一般用户配置模式"]
  -->|"> enable"|B["特权用户配置模式"]
  -->|"# config"|C["全局配置模式"]
  C-->C1["接口配置模式"]
  C-->C2["VLAN 配置模式"];
  C-->C3["DHCP 地址池配置模式"];
  C-->C4["路由配置模式"];
  C-->C5["访问列表配置模式"];
```

#### 一般用户模式

进入 CLI 界面，首先进入的就是 **一般用户模式**，提示符为 `Switch>`，符号 `>` 为 **一般用户模式** 的提示符。
当从 **特权用户模式** 使用命令 `exit` 退出时，可以回到一般用户模式。

#### 特权用户模式
在 **一般用户模式** 使用 `enable` 命令，如果已经配置了进入特权用户的口令，则输入相应的特权用户口令，即可进入 **特权用户模式** “Switch#”。
当从 **全局配置模式** 使用 `exit` 退出时，也可以回到 **特权用户模式**。
另外交换机提供 <kbd>Ctrl</kbd> + <kbd>z</kbd> 的快捷键，使得交换机在任何配置模式（一般用户模式除外），都可以退回到 **特权用户模式**。

在 **特权用户模式** 下，可以查询交换机配置信息、各个端口的连接情况、收发数据统计等。
而且进入 **特权用户模式** 后，可以进入到全局模式对交换机的各项配置进行修改，因此进入 **特权用户模式** 后必须要设置特权用户口令，防止非特权用户的非法使用，对交换机配置进行恶意修改，造成不必要的损失。

#### 全局配置模式

进入 **特权用户模式** 后，只需使用命令 `config`，即可进入 **全局配置模式** `Switch(config)#`。
当在其他配置模式，如接口配置模式、VLAN 配置模式时，可以使用命令 `exit` 退回到全局配置模式。

在 **全局配置模式** 可以对交换机进行全局性的配置，如对 MAC 地址表、端口镜像、创建 VLAN、启动 IGMP Snooping、STP 等。
在 **全局配置模式** 还可通过命令进入到接口配置模式对各个接口进行配置。

##### 接口配置模式

在全局配置模式，使用命令 `interface` 就可以进入到相应的接口配置模式。
交换机操作系统提供了三种端口类型，因此有三种接口的配置模式：

1. **VLAN 接口**
   - 在 **全局配置模式** 下，输入命令：`interface vlan <Vlan-id>`
   - 可配置交换机的 IP 等
  
2. **以太网端口**
   - 在 **全局配置模式** 下，输入命令：`interface ethernet <interface-list>`
   - 可配置交换机提供的以太网接口的双工模式、速率等

3. **port-channel**
   - 在 **全局配置模式** 下，输入命令：`interface port-channel <port-channel-number>`
   - 可配置 port-channel 有关的双工模式、速率等。

***使用 `exit` 命令退回全局配置模式***

##### VLAN 配置模式

在 **全局配置模式**，使用命令 `vlan <vlan-id>` 就可以进入到相应的 VLAN 配置模式。
在 **VLAN 配置模式**，可以配置属于本 VLAN 的成员端口。
执行 `exit` 命令即可从 VLAN 配置模式退回到全局配置模式。

##### DHCP 地址池配置模式

在 **全局配置模式** 下用 `ip dhcp pool <name>` 命令进入到 **DHCP 地址池配置模式** `Switch(Config-<name>-dhcp)#`。
在 **DHCP 地址池配置模式** 下可以配置 DHCP 地址池的属性。
执行 `exit` 命令即可从 DHCP 地址池配置模式退回到全局配置模式。

##### 路由配置模式

- **RIP 路由协议**
  + 在全局配置模式下输入 `router rip` 命令，可配置 RIP 协议参数

- **OSPF 路由协议**
  + 在全局配置模式下输入 `router ospf` 命令，可配置 OSPF 协议参数

- **BGP 路由协议**
  + 在全局配置模式下输入 `router bgp <AS number>` 命令，可配置 BGP 协议参数

***使用 `exit` 命令退回全局配置模式***

##### 访问列表配置模式

- **命名标准 IP 访问列表配置模式**
  + 在全局配置模式下输入 `ipaccess-list standard` 命令，可配置扩展访问列表配置模式。

- **命名扩展 IP 访问列表配置模式**
  + 在全局配置模式下输入 `ipaccess-list extanded` 命令，可配置扩展访问列表配置模式。

***使用 `exit` 命令退回全局配置模式***

### CLI 配置语法

交换机提供的配置命令形式不完全一样，但都遵循交换机配置命令的语法。
以下是交换机提供的通用命令格式：

```text
cmdtxt <variable> {enum1 | … | enumN} [option1 | … | optionN]
```

语法说明：
- `cmdtxt` 表示命令关键字
- `<variable>` 表示参数为变量
- `{enum1 | … |enumN }` 表示在参数集 enum1 ~ enumN 中必须选一个参数
- `[option1 | … | optionN]` 表示该参数可选择一个或者不选

在各种命令中还会出现 `< >`、`{ }`、`[ ]` 符号的组合使用，如：

`[<variable>]`、`{enum1 <variable> | enum2}`、`[option1 [option2]]` 等等。

下面是几种配置命令语法的具体分析：
- `show version`，没有任何参数，属于只有关键字没有参数的命令，直接输入命令即可；
- `vlan <vlan-id>`，输入关键字后，还需要输入相应的参数值；
- `firewall {enable | disable}`，此类命令用户可以输入 `firewall enable` 或者 `firewall disable`；
- `snmp-server community {ro | rw} <string>`，出现以下几种输入情况：
  + `snmp-server community ro <string>`
  + `snmp-server community rw <string>`