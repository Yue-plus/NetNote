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

## Spring 框架

::: tip
- Spring 是最受欢迎的企业级 Java 应用程序开发框架，数以百万的来自世界各地的开发人员使用 Spring 框架来创建性能好、易于测试、可重用的代码。
- Spring 框架是一个开源的 Java 平台，它最初是由 Rod Johnson 编写的，并且于 2003 年 6 月首次在 Apache 2.0 许可下发布。
- Spring 是轻量级的框架，其基础版本只有 2 MB 左右的大小。
- Spring 框架的核心特性是可以用于开发任何 Java 应用程序，但是在 Java EE 平台上构建 web 应用程序是需要扩展的。
  Spring 框架的目标是使 J2EE 开发变得更容易使用，通过启用基于 POJO 编程模型来促进良好的编程实践。

[Spring 官网](https://spring.io/)
:::

### Spring 项目

::: tip
从配置到安全性，从 Web 应用程序到大数据——无论应用程序的基础结构需求是什么，都有一个 Spring 项目可以帮助构建。
从小开始并按需使用——Spring是模块化设计的。

[Spring 项目概览](https://spring.io/projects)
:::

- [Spring Boot](https://spring.io/projects/spring-boot) **【启动】**
  + Spring Boot 可以很容易地创建独立的、基于 Spring 的生产级应用程序，只需“启动(boot)”即可。
  + 对 Spring 平台与第三方库有自己的看法，所以可以毫不费力地开始。
    大多数 Spring Boot 应用程序需要最少的 Spring 配置。
  + 特性：
    * 创建独立的 Spring 应用程序
    * 直接嵌入 Tomcat、Jetty 或 Undertow（无需部署 WAR 文件）
    * 提供有针对性的“起步”依赖项以简化构建配置
    * 尽可能自动配置 Spring 与第三方库
    * 提供可用于生产的功能，例如指标，运行状况检查和外部化配置
    * 完全没有代码生成，也不需要 XML 配置
- [Spring Framework](https://spring.io/projects/spring-framework) **【框架】**
  + Spring 框架为现代基于 Java 的企业级应用程序提供了一个全面的编程与配置模型——适用于任何类型的部署平台。
  + Spring 的一个关键元素是在应用程序级别的基础架构支持：
    Spring 专注于企业应用程序的“管道”，以便团队可以专注于应用程序级别的业务逻辑，而不必与特定的部署环境建立不必要的联系。
  + 特性：
    * [核心技术](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html)：
      依赖项注入、事件、资源、国际化、验证、数据绑定、类型转换、SpEL、AOP。
    * [测试](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/testing.html)：
      模拟对象、TestContext 框架、Spring MVC 测试、`WebTestClient`。
    * [数据访问](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/data-access.html)：
      事务、DAO 支持、JDBC、ORM、编组 XML。
    * [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html)与
      [Spring WebFlux](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html) Web 框架。
    * [集成](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/integration.html)：
      远程处理、JMS、JCA、JMX、电子邮件、任务、调度、缓存。
    * [编程语言](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/languages.html)：
      Kotlin、Groovy、动态语言。
- [Spring Data](https://spring.io/projects/spring-data) **【数据】**
  + Spring Data 的任务是为数据访问提供一个熟悉的、一致的、基于 Spring 的编程模型，同时仍然保留底层数据存储的特殊特性。
  
  + Spring Data 使得数据访问技术、关系型与非关系型数据库、map-reduce 框架以及基于云的数据服务的使用变得容易。
    这是一个伞形项目，包含许多特定于给定数据库的子项目。
    这些项目是通过与这些令人兴奋的技术背后的许多公司和开发人员一起工作来开发的。
    
  + 特性：
    * 强大的存储库与自定义对象映射抽象
    * 从存储库方法名称动态查询
    * 提供基本属性的实现域基类
    * 支持透明审核（已创建的、最后更改的）
    * 集成自定义存储库代码的可能性
    * 通过 Java 配置与自定义 XML 命名空间轻松进行 Spring 集成
    * 与 Spring MVC 控制器的高级集成
    * 实验性支持跨商店持久性
  ::: details Spring Data 模块
  + 主要模块
    * [Spring Data Commons](https://github.com/spring-projects/spring-data-commons)：
      支撑起每个 Spring Data 模块的核心 Spring 概念。
    * [Spring Data JDBC](https://spring.io/projects/spring-data-jdbc)：
      Spring Data 对 JDBC 的支持。
    * [Spring Data JDBC Ext](https://spring.io/projects/spring-data-jdbc-ext)：
      对标准 JDBC 的特定数据库扩展的支持，包括对 Oracle RAC 快速连接故障转移的支持、AQ JMS 支持以及对使用高级数据类型的支持。
    * [Spring Data JPA](https://spring.io/projects/spring-data-jpa)：
      Spring Data 对 JPA 的支持。
    * [Spring Data KeyValue](https://github.com/spring-projects/spring-data-keyvalue)：
      基于映射(`Map`)与 SPI，可以轻松地为键值存储构建 Spring Data 模块。
    * [Spring Data LDAP](https://spring.io/projects/spring-data-ldap)：
      Spring Data 对 [Spring LDAP](https://github.com/spring-projects/spring-ldap) 的支持。
    * [Spring Data MongoDB](https://spring.io/projects/spring-data-mongodb)：
      基于 Spring 的对象文档支持与 MongoDB。
    * [Spring Data Redis](https://spring.io/projects/spring-data-redis)：
      轻松配置并从 Spring 应用程序访问 Redis。
    * [Spring Data REST](https://spring.io/projects/spring-data-rest)：
      将 Spring Data 导出为超媒体驱动的 RESTful 资源。
    * [Spring Data for Apache Cassandra](https://spring.io/projects/spring-data-cassandra)：
      轻松配置并访问 Apache Cassandra 或大规模、高可用性、面向数据的 Spring 应用程序。
    * [Spring Data for Apache Geode](https://spring.io/projects/spring-data-geode)：
      轻松配置并访问 Apache Geode，以实现高度一致、低延迟、面向数据的 Spring 应用程序。
    * [Spring Data for Pivotal GemFire](https://spring.io/projects/spring-data-gemfire)：
      轻松配置并访问 Pivotal GemFire，以实现高度一致、低延迟/高吞吐量的面向数据的 Spring 应用程序。
  + 社区模块
    * [Spring Data Aerospike](https://github.com/aerospike-community/spring-data-aerospike)
    * [Spring Data ArangoDB](https://github.com/arangodb/spring-data)
    * [Spring Data Couchbase](https://spring.io/projects/spring-data-couchbase)
    * [Spring Data Azure Cosmos DB](https://github.com/Azure/azure-sdk-for-java/tree/master/sdk/cosmos/azure-spring-data-cosmos)
    * [Spring Data Cloud Datastore](https://github.com/spring-cloud/spring-cloud-gcp)
    * [Spring Data Cloud Spanner](https://github.com/spring-cloud/spring-cloud-gcp)
    * [Spring Data DynamoDB](https://github.com/boostchicken/spring-data-dynamodb)
    * [Spring Data Elasticsearch](https://spring.io/projects/spring-data-elasticsearch)
    * [Spring Data Hazelcast](https://github.com/hazelcast/spring-data-hazelcast)：
      为 Hazelcast 提供 Spring Data 支持。
    * [Spring Data Jest](https://github.com/VanRoy/spring-data-jest):
      基于 Jest REST 客户端的 Elasticsearch 的 Spring Data 模块。
    * [Spring Data Neo4j](https://spring.io/projects/spring-data-neo4j)：
      Neo4j 的基于 Spring 的对象图支持。
    * [Spring Data for Apache Solr](https://spring.io/projects/spring-data-solr)：
      轻松配置并为面向搜索的 Spring 应用程序访问Apache Solr。
    * [Spring Data Vault](https://spring.io/projects/spring-vault/)：
      基于 [Spring Data KeyValue](https://github.com/spring-projects/spring-data-keyvalue) 构建的保管库。
  :::
- [Spring Cloud](https://spring.io/projects/spring-cloud) **【云】**
  + Spring Cloud 为开发人员提供了工具，以快速构建分布式系统中的某些常见模式
    （例如：配置管理、服务发现、断路器、智能路由、微代理、控制总线、一次性令牌、全局锁、领导选举、分布式会话、群集状态）。
    分布式系统的协调导致了样板代码，并且使用 Spring Cloud 开发人员可以快速建立实现这些模式的服务与应用程序。
    Spring Cloud 可以在任何分布式环境中正常工作，包括开发人员自己的笔记本电脑、裸机数据中心以及 Cloud Foundry 等托管平台。
  + 特性：
    Spring Cloud 着重于为典型用例提供良好的开箱即用体验，以及覆盖其他用例的扩展机制。
    * 分布式/版本化配置
    * 服务注册和发现
    * 路由
    * 服务到服务的呼叫
    * 负载均衡
    * 断路器
    * 全局锁
    * 领导选举和集群状态
    * 分布式消息传递
- [Spring Cloud Data Flow](https://spring.io/projects/spring-cloud-dataflow) **【云数据流】**
  + 用于 Cloud Foundry 与 Kubernetes 的基于微服务的流式处理与批处理数据。
  + Spring Cloud Data Flow 提供了用于为流处理与批处理数据管道创建复杂拓扑的工具。
    数据管道包含使用 [Spring Cloud Stream](https://cloud.spring.io/spring-cloud-stream)
    或 [Spring Cloud Task](https://cloud.spring.io/spring-cloud-task/) 微服务框架构建的
    [Spring Boot](https://projects.spring.io/spring-boot/) 应用程序。
  + Spring Cloud Data Flow 支持一系列数据处理用例，从 ETL 到导入/导出、事件流与预测分析。
  + 特性：
    * Spring Cloud Data Flow 服务器使用 [Spring Cloud Deployer](https://github.com/spring-cloud/spring-cloud-deployer/)
      将由Spring Cloud Stream 或 Spring Cloud Task 应用程序组成的数据管道部署到 Cloud Foundry 与 Kubernetes 等现代平台上。
- [Spring Security](https://spring.io/projects/spring-security) **【安全】**
  + Spring Security 是一个功能强大且高度可定制的身份验证与访问控制框架。
    是用于保护基于 Spring 的应用程序的实际标准。
  + 特性：
    * 全面且可扩展的身份验证与授权支持
    * 防御会话固定、点击劫持、跨站点请求伪造等攻击
    * Servlet API 集成
    * 与 Spring Web MVC 的可选集成
    * 以及更多……
- [Spring Session](https://spring.io/projects/spring-session) **【会话】**
  + Spring Session 提供了用于管理用户会话信息的 API 与实现。
  + 特性：
    * Spring Session 使支持集群会话变得很简单，而不必依赖于特定于应用程序容器的解决方案。
    * Spring Session 还提供了透明的集成：
      - `HttpSession`：允许以中性的方式替换应用程序容器（即 Tomcat）中的 HttpSession，
        并支持在标头中提供会话 ID 以与 RESTful API 一起使用
      - `WebSocket`：提供了在接收WebSocket消息时保持HttpSession存活的功能
      - `WebSession`：允许以与应用程序容器无关的方式替换Spring WebFlux的WebSession
  + 模块：
    Spring Session 由以下模块组成：
    * Spring Session Core：提供核心的 Spring Session 功能与 API
    * Spring Session Data Redis：提供由 Redis 支持的 SessionRepository 与 ReactiveSessionRepository 实现以及配置支持
    * Spring Session JDBC：提供由关系数据库支持的 SessionRepository 实现与配置支持
    * Spring Session Hazelcast：提供由 Hazelcast 支持的 SessionRepository 实现与配置支持
- [Spring Integration](https://spring.io/projects/spring-integration) **【集成】**
  + 扩展 Spring 编程模型以支持著名的 [企业集成模式(Enterprise Integration Patterns)](http://www.eaipatterns.com/)。
    Spring Integration 支持在基于 Spring 的应用程序中进行轻量级消息传递，并通过声明性适配器支持与外部系统的集成。
    这些适配器提供了 Spring 对远程、消息传递与调度支持的更高级别的抽象。
    Spring Integration 的主要目标是为构建企业集成解决方案提供一个简单的模型，同时保持关注点的分离，这对于生成可维护、可测试的代码至关重要。
  + 简介：
    * 使用 Spring 框架鼓励开发人员使用接口进行编码，并使用依赖注入(DI)为普通旧 Java 对象(POJO)提供执行任务所需的依赖项。
      Spring Integration 使这一概念更进一步，其中 POJO 使用消息传递范例连接在一起，并且各个组件可能不知道应用程序中的其他组件。
      通过组装细粒度的可重用组件以形成更高级别的功能来构建这样的应用程序。
      通过精心设计，这些流程可以模块化，并且可以在更高的层次上重复使用。
    * 除了将细粒度的组件连接在一起之外，Spring Integration 还提供了多种通道适配器与网关来与外部系统进行通信。
      通道适配器用于单向集成（发送或接收）。
      网关用于请求/答复方案（入站或出站）。
    * Spring Cloud Stream 项目基于 Spring Integration，其中 Spring Integration 用作消息驱动的微服务的引擎。
  ::: details Spring Integration 特性
  + 特性：
    * 实现大多数企业集成模式
      - 端点
      - 渠道(点对点与发布/订阅)
      - 聚合器
      - 过滤器
      - 变压器
      - 控制总线
    * 与外部系统集成
      - ReST / HTTP
      - FTP / SFTP
      - 推特
      - WebServices (SOAP 与 ReST)
      - TCP / UDP
      - JMS
      - RabbitMQ
      - 电子邮件
    * 该框架具有广泛的 JMX 支持
    * 将框架组件公开为 MBean
    * 适配器从 MBean 获取属性、调用操作、发送/接收通知
  :::
- [Spring HATEOAS](https://spring.io/projects/spring-hateoas)
  ~~超级赛亚人~~ 
  <abbr title="HATEOAS - Hypermedia as the engine of application state">
    **【超媒体作为应用程序状态的引擎】**
  </abbr>
  + 当使用 Spring 特别是 Spring MVC 时，Spring HATEOAS 提供了一些 API 来简化创建遵循 HATEOAS 原理的 REST 表示形式的 API。
    试图解决的核心问题是链接创建与表示组装。
  + 特性：
    * 链接、资源表示模型的模型类
    * 链接构建器 API，用于创建指向 Spring MVC 控制器方法的链接
    * 支持 HAL 等超媒体格式
- [Spring REST Docs](https://spring.io/projects/spring-restdocs) **REST 文档**
  + Spring REST Docs 可帮助记录 [RESTful](https://www.zhihu.com/question/28557115) 服务。
  + Spring REST Docs 结合了用 [Asciidoctor](http://asciidoctor.org/) 编写的手写文档与
    [Spring MVC Test](https://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle#spring-mvc-test-framework)
    生成的自动生成的代码片段。
    这种方式可以从诸如 [Swagger](http://swagger.io/) 等工具生成的文档的限制中解放出来。
  + Spring REST Docs 可以帮助生成准确、简洁且结构合理的文档。
    然后，该文档可让用户以最少的麻烦获得他们所需的信息。
- [Spring Batch](https://spring.io/projects/spring-batch) **【批处理】**
  + 一个轻量级的，全面的批处理框架，旨在支持开发对企业系统的日常运行至关重要的强大的批处理应用程序。
  + Spring Batch 提供了可复用的功能，这些功能对于处理大量记录至关重要，
    包括日志记录/跟踪、事务管理、作业处理统计信息、作业重启、跳过与资源管理。
    还提供了更高级的技术服务和功能，这些功能和功能将通过优化和分区技术来实现极高容量和高性能的批处理作业。
    简单以及复杂的大批量批处理作业都能以高度可扩展的方式利用框架来处理大量信息。
  + 特性：
    * 事务管理
    * 基于区块的处理
    * 声明式 I/O
    * 启动/停止/重启
    * 重试/跳过
    * 基于 Web 的管理界面（[Spring Cloud Data Flow](https://cloud.spring.io/spring-cloud-dataflow)）
- [Spring AMQP](https://spring.io/projects/spring-amqp)
  <abbr title="AMQP - Advanced Message Queuing Protocol">
    **【高级消息队列协议】**
  </abbr>
  + Spring AMQP 项目将 Spring 的核心概念应用于基于 AMQP 的消息传递解决方案的开发。
    提供了一个“模板”作为用于发送和接收消息的高级抽象。
    还通过“监听器容器”为消息驱动的
    <abbr title="Plain Old Java Object">[POJO](https://zhuanlan.zhihu.com/p/49026165)</abbr> 提供支持。
    这些库促进了 AMQP 资源的管理，同时促进了对依赖项注入和声明性配置的使用。
    在所有这些情况下，将看到与 Spring Framework 中的 JMS 支持相似的地方。
  + 该项目包括两个部分；spring-amqp 是基础抽象、spring-rabbit 是 RabbitMQ 实现。
  + 特性：
    * 侦听器容器，用于异步处理入站消息
    * 用于发送和接收消息的 RabbitTemplate
    * RabbitAdmin 用于自动声明队列、交换与绑定
- [Spring for Android](https://spring.io/projects/spring-android)
  + Spring for Android 是一个框架，旨在提供用于 Android 应用程序的 Spring 项目系列的组件。
    与所有 Spring 项目一样，Android 的真正强大之处在于它的扩展容易程度。
  + 特性：
    * 适用于 Android 的 REST 客户端
    * 身份验证支持访问安全 API
- [Spring CredHub](https://spring.io/projects/spring-credhub)
  + Spring CredHub 提供客户端支持，用于从 [Cloud Foundry](https://www.cloudfoundry.org/)
    平台中运行的 [CredHub](https://github.com/cloudfoundry-incubator/credhub) 服务器存储、检索与删除凭据。
  + [CredHub](https://github.com/cloudfoundry-incubator/credhub) 提供了一个 [API](https://credhub-api.cfapps.io/)，
    可以安全地存储、生成、检索与删除各种类型的凭据。
    Spring CredHub 为 CredHub API 提供了 Java 绑定，可轻松将 Spring 应用程序与 CredHub 集成。
- [Spring Flo](https://spring.io/projects/spring-flo)
  + Spring Flo 是一个 JavaScript 库，为管道与简单图形提供了一个基本的可嵌入 HTML5 可视生成器。
    该库用作 [Spring Cloud Data Flow](https://cloud.spring.io/spring-cloud-dataflow/) 中流构建器的基础。
  + Flo 包含集成流设计器的所有基本元素，例如连接器、控制节点、调色板、状态转换与图形拓扑
    ——重要的是，它具有命令行界面、DSL 支持与设计用于创建与查看全面工作流程的图形画布。
  + 特性：
    * 使用 DSL 或图形画布创建、管理与监视流管道，或者两者兼用
    * 通过具有代码提示与自动补全功能的 DSL 编写管道
    * 看到分布式部署中模块的直观表示
    * 使用 GUI 中的自动调整与网格布局功能可以更简单、更高效地组织管道
- [Spring for Apache Kafka](https://spring.io/projects/spring-kafka)
  + 用于 Apache Kafka 的 Spring（spring-kafka）项目将 Spring 的核心概念应用到基于 Kafka 的消息解决方案的开发中。
    提供了一个“模板”作为发送消息的高级抽象。
    还通过 `@KafkaListener` 批注与“监听器容器”为消息驱动的
    <abbr title="Plain Old Java Object">[POJO](https://zhuanlan.zhihu.com/p/49026165)</abbr> 提供支持。
    这些库促进了依赖注入和声明式的使用。
    在所有这些情况下，将看到与 Spring 框架中的 JMS 支持以及 Spring AMQP 中的 RabbitMQ 支持相似。
  + 特性：
    * `KafkaTemplate`
    * `KafkaMessageListenerContainer`
    * `@KafkaListener`
    * `KafkaTransactionManager`
    * 带有嵌入式 kafka 服务器的 `spring-kafka-test` jar
- [Spring LDAP](https://spring.io/projects/spring-ldap)
  <abbr title="LDAP - Light Directory Access Portocol">
    [**【轻量级目录访问协议】**](https://www.cnblogs.com/wilburxu/p/9174353.html)
  </abbr>
  + Spring LDAP 是一个用于简化 Java 中 LDAP 编程的库，其建立原理与 Spring Jdbc 相同。
  + LdapTemplate 类封装了传统 LDAP 编程中涉及的所有管道工作，例如创建、遍历命名枚举、处理异常与清理资源。
    这使程序员可以处理重要的事情——在何处查找数据（DN 与过滤器）以及如何处理数据（与域对象进行映射、绑定、修改、取消绑定等），
    正如 JdbcTemplate 将程序员从实际的 SQL 中解放出来一样，以及数据如何映射到域模型。
  + 除此之外，Spring LDAP 还提供了从命名异常到未检查的异常层次结构的异常转换，以及用于处理过滤器，LDAP 路径与属性的多个实用程序。
- [Spring Mobile](https://spring.io/projects/spring-mobile) **【移动设备】**
  + Spring Mobile 是一个框架，该框架提供的功能可以检测向 Spring 网站发出请求的设备的类型，并基于该设备提供其他视图。
    像所有 Spring 项目一样，Spring Mobile 的真正强大之处在于它可以很容易地进行扩展。
  + 特性：
    * 设备解析器抽象，用于移动设备与平板设备的服务器端检测
    * 网站首选项管理，允许用户指示自己是否喜欢“正常”、“移动”或“平板电脑”体验
    * 站点切换器，能够根据用户的设备与可选的站点首选项，将用户切换到最适合的网站，无论是手机，平板电脑还是普通网站
    * 设备感知视图管理，用于组织与管理特定设备的不同视图
- [Spring Roo](https://projects.spring.io/spring-roo)
  + Spring Roo 是一个轻量级的开发人员工具，可快速轻松地交付即时结果。
    最重要的是，可以 100％ 用 Java 编写代码，并可以重用所有现有的 Java 知识、技能与经验。
- [Spring Shell](https://spring.io/projects/spring-shell) **【命令行】**
  + Spring Shell 项目的用户可以通过依赖于 Spring Shell jar 并添加自己的命令（在 Spring 容器中作为方法来提供）
    来轻松构建功能齐全的 shell（又名命令行）应用程序。
    创建命令行应用程序可能非常有用，例如：与项目的 REST API 进行交互，或使用本地文件内容。
  + 特性：
    * 一个简单的注释驱动的编程模型，可以贡献自定义命令
    * 使用 Spring Boot 自动配置功能作为命令插件策略的基础
    * 制表符完备，着色与脚本执行
    * 自定义命令提示符，shell 历史记录文件名，结果和错误处理
    * 根据域特定条件动态启用命令
    * 与容器验证 API 集成
    * 已经内置的命令，例如清晰的屏幕、漂亮的帮助、退出
    * ASCII 艺术表、具有格式、对齐方式、花式边框等
- [Spring Statemachine](https://spring.io/projects/spring-statemachine) **【状态机】**
  + Spring Statemachine 是一个框架，供应用程序开发人员在 Spring 应用程序中使用状态机概念。
  + 状态机之所以强大，是因为始终保证行为是一致的，因此调试起来相对容易。
    这是因为在启动机器时，操作规则是一成不变的。
    这个想法是，应用程序可能以有限数量的状态存在，并且某些预定义的触发器可以将应用程序从一种状态转移到另一种状态。
    这样的触发器可以基于事件或计时器。
  + 在应用程序外部定义高级逻辑，然后依靠状态机来管理状态要容易得多。
    可以通过发送事件，侦听更改或仅请求当前状态来与状态机进行交互。
  + 特性：
    * 易于使用的单层状态机，用于简单的用例。
    * 分层状态机结构可简化复杂的状态配置。
    * 状态机区域提供甚至更复杂的状态配置。
    * 触发器、过渡、防护与操作的使用。
    * 键入安全配置适配器。
    * 用于在 Spring 应用上下文之外使用的易于实例化的建造者模式
    * 常用案例食谱
    * 基于 Zookeeper 的分布式状态机
    * 状态机事件监听器。
    * UML Eclipse Papyrus 建模。
    * 将机器配置存储在持久性存储中。
    * Spring IOC 集成，将 Bean 与状态机关联。
- [Spring Vault](https://spring.io/projects/spring-vault) **【保险库】**
  + Spring Vault 为访问、存储与回收机密提供了熟悉的 Spring 抽象与客户端支持。
    为与 Vault 交互提供了低层和高层的抽象，将用户从基础设施的关注点中解放出来。
  + 使用 HashiCorp 的保险柜，可以在中心位置管理所有环境中应用程序的外部秘密数据。
    Vault 可以管理静态与动态机密，例如应用程序数据，远程应用程序/资源的用户名/密码，并为外部服务
    （例如MySQL、PostgreSQL、Apache Cassandra、Consul、AWS等）提供凭据。
  ::: details Spring Vault 特性
  + 特性：
    * 使用基于 Java 的 `@Configuration` 类的 Spring 配置支持。
    * VaultTemplate 帮助程序类，可提高执行常见 Mongo 操作的效率。
      包括文档与 <abbr title="Plain Old Java Object">[POJO](https://zhuanlan.zhihu.com/p/49026165)</abbr> 之间的集成对象映射。
    * 支持的身份验证机制：
      - Token
      - AppRole
      - AWS-EC2
      - AWS-IAM
      - Azure MSI
      - Certificates (PKI)
      - Cubbyhole
      - GCP-GCE
      - GCP-IAM
      - Kubernetes
      - Pivotal CloudFoundry
    * 基于注释的 `@VaultPropertySource` 集成
    * 支持可再生和循环的机密
    * 功能丰富的对象映射与 Spring 的转换服务集成
    * 与 Spring 转换服务集成的丰富对象映射特性
    * 存储库接口的自动实现，包括对自定义查询方法的支持。
  :::
- [Spring Web Flow](https://spring.io/projects/spring-webflow) **【Web 流】**
  + Spring Web Flow 建立在 Spring MVC 之上，并允许实现 Web 应用程序的“流”。
    流封装了指导用户完成某些业务任务的一系列步骤。
    跨越多个 HTTP 请求、具有状态、处理事务数据、可重用、并且本质上可以是动态的并且可以长期运行。
  + Spring Web Flow 的最佳应用是具有受控导航的有状态 Web 应用程序，如办理航班登记、申请贷款、购物车结帐，甚至向表单添加确认步骤。
    这些场景的共同之处在于以下一个或多个特征：
    * 有一个明确的起点和终点。
    * 用户必须按特定顺序浏览一组屏幕。
    * 直到最后一步，更改才能最终确定。
    * 完成后，就不能意外重复一个事务。
  + Spring Web Flow 提供了一种声明性的流程定义语言，用于在更高的抽象级别上创作流程。
    允许将其集成到各种应用程序中，而无需进行任何更改（对流编程模型）（包括 Spring MVC、JSF 甚至 Portlet Web 应用程序）。
    以下是在有导航要求的有状态 Web 应用程序中观察到的常见问题：
    * 可视化流程非常困难。
    * 该应用程序具有许多访问 HTTP 会话的代码。
    * 实施受控导航很重要，但不可能。
    * 适当的浏览器后退按钮支持似乎无法实现。
    * 浏览器和服务器与“返回”按钮的使用不同步。
    * 多个浏览器选项卡导致 HTTP 会话数据并发问题。
    * Spring Web Flow 提供了上述问题的解决方案。
- [Spring WebServices](https://spring.io/projects/spring-ws) **【Web 服务】**
  + Spring Web Services（Spring-WS）是 Spring 社区的产品，致力于创建文档驱动的 Web 服务。
    Spring Web Services 旨在促进合同优先 [SOAP](https://www.runoob.com/soap/soap-intro.html)
    服务的开发，从而允许使用多种处理 XML 有效负载的方式之一来创建灵活的 Web 服务。
    该产品基于 Spring 本身，这意味着可以将诸如依赖项注入之类的 Spring 概念用作 Web 服务的组成部分。
  + 人们使用 Spring-WS 的原因有很多，但是大多数人在找到了遵循 Web 服务最佳实践所缺乏的替代
    [SOAP](https://www.runoob.com/soap/soap-intro.html) 堆栈之后才开始使用它。
  + 特性：
    * 使最佳实践变得容易：
      Spring Web Services 使实施最佳实践更加容易。
      这包括诸如 WS-I 基本概要文件，合同优先开发之类的实践，以及合同与实施之间的松散耦合。
    * 强大的映射：可以根据消息有效负载，SOAP Action 标头或 XPath 表达式，将传入的 XML 请求分发到任何对象。
    * XML API 支持：
      可以使用标准的 JAXP API（例如 DOM、SAX 与 StAX）处理传入的 XML 消息，也可以使用 JDOM、dom4j、XOM 甚至是编组技术来处理。
    * 灵活的 XML 编组：
      Spring Web Services 发行版中的对象/XML 映射模块支持 JAXB 1和2、Castor、XMLBeans、JiBX 与 XStream。
      并且由于它是一个单独的模块，因此也可以在非 Web 服务代码中使用它。
    * 重用 Spring 专业知识：
      Spring-WS 使用 Spring 应用程序上下文进行所有配置，这将有助于 Spring 开发人员快速，良好地掌握最新信息。
      而且，Spring-WS 的体系结构类似于 Spring-MVC 的体系结构。
    * 支持 WS-Security：
      WS-Security 允​​许对 SOAP 消息进行签名、加密与解密，或针对它们进行身份验证。
    * 与 Acegi Security 集成：
      Spring Web Services 的 WS-Security 实现提供与 Spring Security 的集成。
      这意味着也可以将现有配置用于 SOAP 服务。
    * 由Maven构建：可以帮助在自己的基于 Maven 的项目中有效地重用 Spring Web Services 构件。
    * Apache许可证：可以放心地在项目中使用 Spring-WS。
