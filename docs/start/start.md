# 开始项目

## 下载沙拉查词

前往[沙拉查词官网](https://saladict.crimx.com/)下载插件。

## 注册 GitHub 账号

前往~~全球最大的同性交友网站~~ [GitHub](https://github.com/) 注册并登入账号。

前往本项目地址 <https://github.com/Yue-plus/NetNote>，点击 Watch、Star、Fork。

## 本地安装 Git

前往 [Git 官网](https://git-scm.com/) 下载安装包，下一步到底。

> [Git - 菜鸟教程](https://www.runoob.com/git/git-tutorial.html)

### 配置 Git

桌面右键点击 [Git Bash Here]，输入以下指令：

```sh
# "username" 为 GitHub 账号，用户名
git config --global user.name "username"

# xxxxxxxxxx@mail.com 为 GitHub 账号，注册时的用的邮箱
git config --global user.email xxxxxxxxxx@mail.com
```

### 生成自己的 SSH Key

Git Bash 终端中，输入 `ssh-keygen`

```bash {1,3-5}
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Yue_p/.ssh/id_rsa): yes
Enter passphrase (empty for no passphrase):    # 直接回车
Enter same passphrase again:                   # 直接回车
Your identification has been saved in yes
Your public key has been saved in yes.pub
The key fingerprint is:
SHA256:xuvPaGeJuufX6k4oiufALDHD7PCfZxkfXQxjCBElkCA Yue_p@DESKTOP-SQLFD1T
The key's randomart image is:
+---[RSA 3072]----+
|E ...o==..       |
| .  .  .. +      |
|         . +     |
|o      .    o    |
|=o      S. .     |
|oB    ...o.      |
|..=   .+oo.o     |
| . +.o+o=+= .    |
|  .o=oo*+B*.     |
+----[SHA256]-----+
```

现在，`<个人文件夹>/.ssh/` 中应该有 `id_rsa`（私钥）与 `id_rsa.pub`（公钥）两个文件。

## GitHub 添加 SSH Key

用 **记事本打开** `<个人文件夹>/.ssh/id_rsa.pub` 文件。

打开 [GitHub.com](https://github.com/) 参照以下截图添加 SSH Key：

![添加 SSH Key 01](./img/01.png)

![添加 SSH Key 02](./img/02.png)

最后点击 **[Add SSH Key]**

## 本地安装 NodeJS

前往 [NodeJS 官网](https://nodejs.org/en/download/) 下载安装包，下一步到底。

## 本地安装 Yarn

前往 [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) 下载安装包，下一步到底。

## 拉取项目

找一个合适的路径，执行以下指令：

```sh
# 克隆仓库（注意替换 <username>）
git clone git@github.com:<username>/NetNote.git

cd NetNote

# 安装依赖
yarn
```

## 运行项目

在项目路径下执行：

```
yarn docs:dev
```

通过浏览器访问：<http://127.0.0.1:8080/>

> 更多配置可参考 **[VuePress 介绍](https://vuepress.vuejs.org/zh/guide/)**

## 部署

复制 `deploy.sh.examples` 文件，并重命名为 `deploy.sh` 并适当修改 `<USERNAME>/<REPO>`。
