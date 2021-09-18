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

## 构建工具
### Apache Maven

::: tip
Maven 是流行的 Java 项目构建系统，Maven 项目对象模型(POM)，可以通过一小段描述信息来管理项目的构建，报告和文档的软件项目管理工具。

[Apache Maven 官网](https://maven.apache.org/)
:::

- [Maven 教程_w3cschool](https://www.w3cschool.cn/maven/)

#### 将 Maven 项目转换为 Gradle 项目

参考 [执行自动转换](https://docs.gradle.org/current/userguide/migrating_from_maven.html#migmvn:automatic_conversion)

```sh
gradle init --type pom
```

### Apache Ant

::: tip
Apache Ant，是一个将软件编译、测试、部署等步骤联系在一起加以自动化的一个工具，大多用于 Java 环境中的软件开发。

[Apache Ant 官网](https://ant.apache.org/)
:::

- [Apache Ant 教程_w3cschool](https://www.w3cschool.cn/ant/)

### Gradle

::: tip
Gradle 是一个基于 Apache Ant 与 Apache Maven 概念的项目自动化构建开源工具。

[Gradle 官网](https://gradle.org/)
:::

- [Gradle 教程_w3cschool](https://www.w3cschool.cn/gradle/)

#### Gradle 配置

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

#### Gradle 编译出来的 `.jar` 无法运行

```bash
$ java -jar ./app.jar
./app.jar中没有主清单属性
$ java ./app.jar
错误：找不到或无法加载主类 ./app.jar
原因：java.lang.ClassNotFoundException: /\app/jar
```

##### 解决方法

参考：[Building Java & JVM projects Packaging and publishing - Gradle Docs](https://docs.gradle.org/current/userguide/building_java_projects.html#sec:jar_manifest)

###### Java & Groovy

修改项目中的 `build.gradle` 文件：

```diff {2,7-11}
  plugins {
+     id 'java'
  }
 
 ……中间省略……
 
+ jar {
+    manifest {
+        attributes 'Main-Class': 'Start'
+    }
+ }
```

###### Kotlin

修改项目中的 `` 文件：

```diff {2,7-11}
  plugins {
+     id("java")
  }
 
 ……中间省略……
 
+ tasks.jar {
+    manifest {
+        attributes("Main-Class" to "gradleKT")
+    }
+ }
```

