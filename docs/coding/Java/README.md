# Java

:::tip
- Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。
- Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。
- 本教程通过简单的实例将让大家更好的了解 Java 编程语言。
- 移动操作系统 Android 大部分的代码采用 Java 编程语言编程。
:::

## 链接

### 教程

- [Java 教程 - 菜鸟教程](https://www.runoob.com/java/java-tutorial.html)
- [Java 教程 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1252599548343744)

### 下载

- [OpenJDK](http://openjdk.java.net/)
- [OpenJFX (JavaFX) 中文网](https://openjfx.cn/)

## 推荐阅读

- [《Java核心技术·卷 I 》（原书第11版）](https://book.douban.com/subject/34898994/)
  + ![《Java核心技术-卷1》](/img/book/《Java核心技术-卷1》.jpg)
- [《Java核心技术·卷 II》（原书第11版）](https://book.douban.com/subject/34935138/)
  + ![《Java核心技术-卷2》](/img/book/《Java核心技术-卷2》.jpg)

## 配置环境变量

### Windows 10

01. 前往 [OpenJDK 官网](http://openjdk.java.net/) 下载 JDK。

    ![下载 JDK](./img/01-Path/01.jpg)

02. 配置 **环境变量**：

    ![新建/修改 环境变量](./img/01-Path/02.jpg)

    添加以下环境变量：

    - `JAVA_HOME` : `<JDK 解压路径>`
    - `CLASSPATH` : `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`

    编辑 `Path` 变量：

    ![编辑 Path 变量](./img/01-Path/03.jpg)

    点击 `新建`，添加：

    - `%JAVA_HOME%\bin`
    - `%JAVA_HOME%\jre\bin`

03. 输入 `java -version` 验证配置。

    ```bash {1}
    $ java -version
    openjdk version "15.0.1" 2020-10-20
    OpenJDK Runtime Environment (build 15.0.1+9-18)
    OpenJDK 64-Bit Server VM (build 15.0.1+9-18, mixed mode, sharing)
    ```

## Gradle 构建工具

::: tip
Gradle 是一个基于 Apache Ant 与 Apache Maven 概念的项目自动化构建开源工具。

[Gradle 官网](https://gradle.org/)
:::

### Gradle 配置

1. 可以使用 [阿里巴巴开源镜像站 - Maven 镜像](https://developer.aliyun.com/mirror/maven)。

   `build.gradle.kts` 配置示例：
   
   ```kts
   repositories {
       maven { setUrl("https://maven.aliyun.com/repository/public/") }
       maven { setUrl("https://maven.aliyun.com/repository/spring/") }
       mavenCentral()
   }
   ```

2. 配置 Gradle 网络代理

   > 参考 [配置构建环境](https://docs.gradle.org/current/userguide/build_environment.html#sec:accessing_the_web_via_a_proxy)

   可以在 `GRADLE_USER_HOME`、项目根目录下、Gradle 安装目录下，创建 `gradle.properties` 文件：

   配置 HTTP 代理：

   ```properties
   systemProp.http.proxyHost=www.somehost.org
   systemProp.http.proxyPort=8080
   systemProp.http.proxyUser=userid
   systemProp.http.proxyPassword=password
   systemProp.http.nonProxyHosts=*.nonproxyrepos.com|localhost
   ```

   配置 HTTPS 代理：

   ```properties
   systemProp.https.proxyHost=www.somehost.org
   systemProp.https.proxyPort=8080
   systemProp.https.proxyUser=userid
   systemProp.https.proxyPassword=password
   systemProp.http.nonProxyHosts=*.nonproxyrepos.com|localhost
   ```

   ![Gradle 设置代理](./img/gradle-proxy.jpg)