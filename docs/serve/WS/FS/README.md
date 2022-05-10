# 文件和储存服务

::: tip
Windows Server 中的存储为专注虚拟化工作负载的软件定义数据中心 (SDDC) 客户提供了新的和改进的功能。
Windows Server 还为使用文件服务器处于现有工作负荷的企业客户提供广泛的支持。

[Windows Server 存储文档 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-server/storage/storage)
:::

## 基本磁盘管理

Windows 10 右键 **此电脑** -> **管理** -> **储存** -> **磁盘管理**

Windows Server 点击 **服务器管理器** 右上角的 *工具* -> **计算机管理** -> **储存** -> **磁盘管理**

![计算机管理 -> 磁盘管理](./img/01.jpg)

[磁盘管理概述 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-server/storage/disk-management/overview-of-disk-management)

## 配置储存池

## 配置 RAID 10

参考：
- [2020中职网搭国赛 故障转移群集配置_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/BV1h54y1j7zS)
  [00:00 ~ 01:39]
- [Windows磁盘管理、动态磁盘、RAID10_razorx的博客-CSDN博客](https://blog.csdn.net/weixin_42747982/article/details/83685711)
- [RAID0 RAID1 RAID5 RAID10区别_c1052981766的专栏-CSDN博客](https://blog.csdn.net/c1052981766/article/details/49612793)

RAID 10 至少需要使用 4 块硬盘。

先新建两个储存池（两个硬盘组一个储存池）：

![新建储存池](./img/02.jpg)
![新建储存池向导](./img/03.jpg)

然后从储存池创建虚拟磁盘：

![新建虚拟磁盘](./img/04.jpg)

**选择储存数据布局** 选择 `Simple`（简单，也就是带区卷，`RAID 0`）：

![选择储存数据布局](./img/05.jpg)

**指定虚拟磁盘大小** 选择 **最大大小**：

![指定虚拟磁盘大小](./img/06.jpg)

建立完两个虚拟磁盘后，**计算机管理** -> **储存** -> **磁盘管理** 内应该有两个未分配的磁盘。
右键其中一个 **新建带区卷**（`RAID 1`）：

![新建带区卷向导](./img/07.jpg)

添加另一块未分配的磁盘

![选择磁盘](./img/08.jpg)

接下来分配驱动器号；
格式化卷时：
  文件系统：`NTFS`；
  分配单元大小：`4096`；
  勾选 **执行快速格式化**

> Yue_plus: 是的，没错。`RAID 1` + `RAID 0` = `RAID 10`。23333

## 配置卷影副本

在计算机中右键要创建卷影副本的磁盘，点击“配置卷影副本”

![](./img/12.jpg)
![](./img/13.jpg)

## 文件服务资源管理器

### 配额管理

![](./img/QQ%E6%88%AA%E5%9B%BE20220510091327.png)
![](./img/QQ%E6%88%AA%E5%9B%BE20220510091538.png)
![](./img/QQ%E6%88%AA%E5%9B%BE20220510091655.png)
![](./img/QQ%E6%88%AA%E5%9B%BE20220510091936.png)
