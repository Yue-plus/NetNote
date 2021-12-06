# iSCSI

## 什么是 iSCSI？

- [iSCSI 目标服务器概述 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-server/storage/iscsi/iscsi-target-server)
- [iSCSI的基本架构及操作简介 - 知乎](https://zhuanlan.zhihu.com/p/60986068)
- [iSCSI_百度百科](https://baike.baidu.com/item/iSCSI/2169135?fr=aladdin)

## 安装

![](./img/14.png)

## 新建 iSCSI 虚拟磁盘

![](./img/00.png)
![](./img/01.png)
![](./img/02.png)

## 新建 iSCSI 目标

![](./img/15.png)
![](./img/03.png)
![](./img/04.png)
![](./img/05.png)
![](./img/06.png)

## iSCSI 发起程序

## 配置 CHAP 双向认证

在 [新建 iSCSI 目标](#新建-iscsi-目标) 时可以配置 CHAP 身份验证；
也可以在 iSCSI 目标属性中更改认证密码。

![iSCSI 目标属性](./img/09.jpg)

## 连接时

![](./img/11.jpg)

如果开启了 **反向 CHAP** 认证，连接时需要到 **配置** 选项卡中设置反向 CHAP 密码：

![](./img/10.jpg)