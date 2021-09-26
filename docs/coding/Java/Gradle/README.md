# Gradle

::: tip
Gradle 是一个基于 Apache Ant 与 Apache Maven 概念的项目自动化构建开源工具。

[Gradle 官网](https://gradle.org/)
:::

- [Gradle 教程_w3cschool](https://www.w3cschool.cn/gradle/)

## Gradle 配置

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

## Error 001：IDEA 控制台 GBK 乱码，且无法编译

### 解决方法

在 `IDEA 设置` -> `编辑器` -> `文件编码` 中，设置项目编码为 `UTF-8`。

![GBK 乱码](./img/GBK乱码.jpg)

## Error 002：Gradle 编译出来的 `.jar` 无法运行

```bash
$ java -jar ./app.jar
./app.jar中没有主清单属性
$ java ./app.jar
错误：找不到或无法加载主类 ./app.jar
原因：java.lang.ClassNotFoundException: /\app/jar
```

### 解决方法

参考：[Building Java & JVM projects Packaging and publishing - Gradle Docs](https://docs.gradle.org/current/userguide/building_java_projects.html#sec:jar_manifest)

#### Java & Groovy

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

#### Kotlin

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
