# firewall（防火墙）

::: tip
Firewalld 提供了一种动态管理的防火墙，支持网络/防火墙区域，该区域定义网络连接或接口的信任级别。
它支持 IPv4、IPv6 防火墙设置，以太网桥和 IP 集。
运行时和永久配置选项分离。
它还为服务或应用程序提供了一个接口，可直接添加防火墙规则。

[官方文档](https://firewalld.org/)
:::

## 链接

- [CentOS 上的 FirewallD 简明指南 | 《Linux就该这么学》](https://www.linuxprobe.com/centos-firewalld-linux.html)
- [CentOS 7 firewalld 配置详解 (转) - vicowong - 博客园](https://www.cnblogs.com/vicowong/p/11210144.html)
- 

## 安装

CentOS 会默认安装。

手动安装：
```sh
yum install firewalld
```

## 设置服务

- 启动 `systemctl start firewalld`
- 查看状态 `systemctl status firewalld`
- 开机启动 `systemctl enable firewalld`
- 开机不启动 `systemctl disable firewalld`
- 停止运行 `systemctl stop firewalld`
