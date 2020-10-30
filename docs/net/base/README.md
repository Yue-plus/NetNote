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