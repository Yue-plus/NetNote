# Docker

::: tip
Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

[Docker 官网](https://www.docker.com/)
[Docker 官方文档](https://docs.docker.com/)
[Docker Hub](https://hub.docker.com/)
:::

<iframe src="//player.bilibili.com/player.html?aid=838132893&bvid=BV1og4y1q7M4&cid=191591478&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 380px;"> </iframe>

## 安装

推荐参考官方文档：[安装 Docker 引擎（英文）](https://docs.docker.com/engine/install/)

### Windows

推荐参考官方文档 [在 Windows 上安装 Docker Desktop（英文）](https://docs.docker.com/docker-for-windows/install/)

首先，确保满足先决条件：

- **- Windows 10 64 位 专业版、企业版、教育版**
  ![查看 Windows 版本](./img/see_windows_version.jpg)
  > + ~~Yue_plus：“如果是家庭版建议重装系统”~~ `→_→`
  > + [在 Windows 10 家庭版上安装 Docker Hub（英文）](https://docs.docker.com/docker-for-windows/install-windows-home/)
- **已开启 Windows 虚拟化**
  ![查看是否开启虚拟化](./img/see_windows_HV.jpg)

然后，[从官网下载 Docker Desktop 安装包](https://www.docker.com/products/docker-desktop)

安装时会自动打开 Windows 功能——虚拟机平台，如果勾选了
<abbr title="适用于 Linux 的 Windows 子系统">WSL</abbr>
可能会要求安装 [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)
下载安装后重启即可。

**安装完成：**
![主界面](./img/docker_desktop.jpg)

## 常用命令

可以在官网找到 [所有命令](https://docs.docker.com/reference/)

```sh
# 查看 Docker 版本
docker version

# 查看 Docker 的系统信息
docker info

# 查看 Docker 命令帮助
docker <命令> --help
```