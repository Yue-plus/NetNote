# 网络安全策略

> DCFW-1800 系列下一代防火墙，可精确识别数千种网络应用，并提供详 尽的应用风险分析和灵活的策略管控。
> 内置先进的威胁检测引擎及专业的WEB服务防护，能够抵御病毒、木马、 SQL 注入、XSS 跨站脚本、CC 攻击等网络攻击，有效保护 WEB 服务器安全。
> 可广泛适用于教育、政府、企业等 行业，为网络提供基于角色、深度应用 安全的访问控制、IPSec/SSL...

> [DCN DCFW-1800E-N3002-Pro下一代防火墙](http://www.dcnetworks.com.cn/goods/148.html)

## 基础操作

### 连接防火墙

将 Console 配置线连接到防火墙 CON 口，波特率（Baud rate）为 **9600**。然后配置防火墙，配置代码如下：

```sh
login: admin
password: 
DCFW-1800# conf
DCFW-1800(config)# int
DCFW-1800(config)# interface e
DCFW-1800(config)# interface ethernet1/0/0
                             ^-----unrecognized keyword ethernet1/0/0
DCFW-1800(config)# int                    
DCFW-1800(config)# interface e
DCFW-1800(config)# interface ethernet0/0  
DCFW-1800(config-if-eth0/0)# ip add
DCFW-1800(config-if-eth0/0)# ip address 192.168.1.1 255.255.255.0
```

**右击左下角的网络配置**:

![04](.\img\04.jpg)

**点击更改适配器选项**:

![05](.\img\05.jpg)

**双击以太网**:

![06](.\img\06.jpg)

**点击属性**:

![07](.\img\07.jpg)

**点击IPv4**:

![08](.\img\08.jpg)

**将自动获得IP地址更改成使用下面的IP地址**

![image-20201028133527428](.\img\image-20201028133527428.png)

输入IP地址，子网掩码和默认网关即可

## 打开浏览器

> 输入防护墙默认IP地址：192.168.1.1 即可进入防火墙终端

## 应用识别

## 防火墙

## 攻击防护

## 入侵防御

## 病毒过滤

## 网页访问控制

## 带宽流量管理

## 链路负载均衡

## 服务器负载均衡

## VPN

## IPV6

## 高可用性 (HA)

## 虚拟系统 (VSYS)

## 日志报表