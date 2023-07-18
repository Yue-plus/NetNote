import{_ as a,r as o,o as d,c as t,a as e,b as n,d as s,e as r}from"./app-ab31641a.js";const l="/assets/message-flow-simple-broker-b099d061.png",c="/assets/message-flow-broker-relay-8ffe0031.png",v={},u=e("h1",{id:"_4-websockets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-websockets","aria-hidden":"true"},"#"),n(" 4. WebSockets")],-1),p={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"此部分参考文档涵盖对 Servlet 堆栈的支持，包括原始 WebSocket 交互的 WebSocket 消息传递，通过 SockJS 进行 WebSocket 仿真以及通过 STOMP 作为 WebSocket 的子协议进行发布、订阅消息传递。",-1),m=e("h2",{id:"_4-1-websocket-概论",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-1-websocket-概论","aria-hidden":"true"},"#"),n(" 4.1. WebSocket 概论")],-1),g={href:"https://tools.ietf.org/html/rfc6455",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>WebSocket 交互始于一个 HTTP 请求，该请求使用 HTTP <code>Upgrade</code> 标头进行升级，或者在这种情况下切换到 WebSocket 协议。 以下示例展示了这种交互：</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>GET /spring-websocket-portfolio/portfolio HTTP/1.1
Host: localhost:8080
Upgrade: websocket 
Connection: Upgrade 
Sec-WebSocket-Key: Uc9l9TMkWGbHFD2qnFHltg==
Sec-WebSocket-Protocol: v10.stomp, v11.stomp
Sec-WebSocket-Version: 13
Origin: http://localhost:8080
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>Upgrade</code> 标头。</li><li>使用 <code>Upgrade</code> 连接。</li></ol><p>具有 WebSocket 支持的服务端代替通常的 200 状态代码，返回类似于以下内容的输出：</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>HTTP/1.1 101 Switching Protocols 
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: 1qVdfYHU9hPOl4JYYNXF623Gzn0=
Sec-WebSocket-Protocol: v10.stomp
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>协议切换</li></ol><p>握手成功后，HTTP 升级请求的基础 TCP 套接字将保持打开状态，客户端与服务端均可继续发送与接收消息。</p><p>WebSockets 的工作原理的完整介绍超出了本文档的范围。 请参阅 RFC 6455，HTML5 的 WebSocket 章节，或 Web 上的许多简介和教程中的任何一个。</p><p>请注意，如果 WebSocket 服务端在 Web 服务器（例如 nginx）后面运行，那么可能需要对其进行配置，以将 WebSocket 升级请求传递到 WebSocket 服务端。 同样，如果应用程序在云环境中运行，请检查与 WebSocket 支持相关的云提供商的说明。</p><h3 id="_4-1-1-http-对比-websocket" tabindex="-1"><a class="header-anchor" href="#_4-1-1-http-对比-websocket" aria-hidden="true">#</a> 4.1.1. HTTP 对比 WebSocket</h3><p>尽管 WebSocket 被设计为与 HTTP 兼容并以 HTTP 请求开头，但重要的是要了解这两个协议导致了截然不同的体系结构与应用程序编程模型。</p><p>在 HTTP 与 REST 中，应用程序被建模为许多 URL。 为了与应用程序交互，客户端访问那些 URL，即请求 - 响应风格。 服务端根据 HTTP URL、方法与标头将请求路由到适当的处理程序。</p><p>相比之下，在 WebSockets 中，初始连接通常只有一个 URL。 随后，所有应用程序消息都在同一 TCP 连接上流动。 这指向了一个完全不同的异步、事件驱动的消息传递体系结构。</p><p>WebSocket 也是一种低级传输协议，与 HTTP 不同，它不对消息的内容规定任何语义。 这意味着除非客户端与服务端就消息语义达成一致，否则就无法路由或处理消息。</p><p>WebSocket 客户端与服务端可以通过 HTTP 握手请求上的 <code>Sec-WebSocket-Protocol</code> 标头协商使用更高级别的消息协议（例如 STOMP）。 在这种情况下，它们需要提出自己的约定。</p><h3 id="_4-1-2-何时使用-websockets" tabindex="-1"><a class="header-anchor" href="#_4-1-2-何时使用-websockets" aria-hidden="true">#</a> 4.1.2. 何时使用 WebSockets</h3><p>WebSockets 可以使网页具有动态性与交互性。 但是，在许多情况下，结合使用 Ajax 与 HTTP 流或长时间轮询可以提供一种简单有效的解决方案。</p><p>例如，新闻、邮件与社交订阅源需要动态更新，但是每几分钟进行一次更新可能是完全可以的。 另一方面，协作、游戏与金融应用程序需要更接近实时。</p><p>仅延迟并不是决定因素。 如果消息量相对较少（例如，监视网络故障），那么 HTTP 流或轮询可以提供有效的解决方案。 低延迟，高频率与高音量的结合才是使用 WebSocket 的最佳案例。</p><p>还请记住，在 Internet 上，不受控制的代理可能会阻止 WebSocket 交互，这可能是因为未将它们配置为传递 <code>Upgrade</code> 标头，或者是因为它们关闭了长期处于空闲状态的连接。 这意味着与面向公众的应用程序相比，将 WebSocket 用于防火墙内部的应用程序是一个更直接的决定。</p><h2 id="_4-2-websocket-api" tabindex="-1"><a class="header-anchor" href="#_4-2-websocket-api" aria-hidden="true">#</a> 4.2. WebSocket API</h2>`,21),S={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket-server-handler",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"Spring 框架提供了一个 WebSocket API，可用于编写处理 WebSocket 消息的客户端与服务端应用程序。",-1),w=e("h3",{id:"_4-2-1-websockethandler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-2-1-websockethandler","aria-hidden":"true"},"#"),n(" 4.2.1. "),e("code",null,"WebSocketHandler")],-1),f={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket-server-handler",target:"_blank",rel:"noopener noreferrer"},_=r(`<p>创建 WebSocket 服务端就像实现 <code>WebSocketHandler</code> 一样简单，或者更可能地，扩展 <code>TextWebSocketHandler</code> 或 <code>BinaryWebSocketHandler</code>。 下面的示例使用 <code>TextWebSocketHandler</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;

public class MyHandler extends TextWebSocketHandler {

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        // ...
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有专用的 WebSocket Java 配置与 XML 命名空间支持，用于将前面的 WebSocket 处理程序映射到特定的 URL，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(myHandler(), &quot;/myHandler&quot;);
    }

    @Bean
    public WebSocketHandler myHandler() {
        return new MyHandler();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:handlers&gt;
        &lt;websocket:mapping path=&quot;/myHandler&quot; handler=&quot;myHandler&quot;/&gt;
    &lt;/websocket:handlers&gt;

    &lt;bean id=&quot;myHandler&quot; class=&quot;org.springframework.samples.MyHandler&quot;/&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),M={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-servlet",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"DispatcherServlet",-1),q={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/web/socket/server/support/WebSocketHttpRequestHandler.html",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"WebSocketHttpRequestHandler",-1),x=e("code",null,"WebSocketHandler",-1),W=e("h3",{id:"_4-2-2-websocket-握手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-2-2-websocket-握手","aria-hidden":"true"},"#"),n(" 4.2.2. WebSocket 握手")],-1),J={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket-server-handshake",target:"_blank",rel:"noopener noreferrer"},P=r(`<p>定制初始 HTTP WebSocket 握手请求的最简单方法是通过 <code>HandshakeInterceptor</code>，它公开了“握手之前”与“握手之后”的方法。 可以使用此类拦截器来阻止握手或使任何属性对 <code>WebSocketSession</code> 可用。 以下示例使用内置的拦截器将 HTTP 会话属性传递到 WebSocket 会话：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new MyHandler(), &quot;/myHandler&quot;)
            .addInterceptors(new HttpSessionHandshakeInterceptor());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:handlers&gt;
        &lt;websocket:mapping path=&quot;/myHandler&quot; handler=&quot;myHandler&quot;/&gt;
        &lt;websocket:handshake-interceptors&gt;
            &lt;bean class=&quot;org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor&quot;/&gt;
        &lt;/websocket:handshake-interceptors&gt;
    &lt;/websocket:handlers&gt;

    &lt;bean id=&quot;myHandler&quot; class=&quot;org.springframework.samples.MyHandler&quot;/&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个更高级的选项是扩展 <code>DefaultHandshakeHandler</code>，它执行 WebSocket 握手的步骤，包括验证客户端来源、协商子协议以及其他详细信息。 如果应用程序需要配置自定义 <code>RequestUpgradeStrategy</code> 以便适应尚不支持的 WebSocket 服务端引擎与版本，那么可能还需要使用此选项 （有关此主题的更多信息，请参阅 <a href="#_4-2-3-%E9%83%A8%E7%BD%B2">部署</a>）。 Java 配置与 XML 命名空间都使配置自定义 <code>HandshakeHandler</code> 成为可能。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Spring 提供了一个 <code>WebSocketHandlerDecorator</code> 基类，可用于装饰 <code>WebSocketHandler</code> 并具有其他行为。 使用 WebSocket Java 配置或 XML 命名空间时，默认情况下会提供并添加日志记录与异常处理实现。 <code>ExceptionWebSocketHandlerDecorator</code> 捕获由任何 <code>WebSocketHandler</code> 方法引起的所有未捕获的异常，并关闭状态为 <code>1011</code>（指示服务端错误）的 WebSocket 会话。</p></div><h3 id="_4-2-3-部署" tabindex="-1"><a class="header-anchor" href="#_4-2-3-部署" aria-hidden="true">#</a> 4.2.3. 部署</h3><p>Spring WebSocket API 易于集成到 Spring MVC 应用程序中，在该应用程序中，<code>DispatcherServlet</code> 同时提供 HTTP WebSocket 握手与其他 HTTP 请求。 通过调用 <code>WebSocketHttpRequestHandler</code>，也很容易集成到其他 HTTP 处理方案中。 这是方便且易于理解的。 但是，对于 JSR-356 运行时，需要特别注意。</p><p>Java WebSocket API（JSR-356）提供了两种部署机制。 首先涉及启动时的 Servlet 容器类路径扫描（Servlet 3 特性）。 另一个是在 Servlet 容器初始化时使用的注册 API。 这两种机制均无法使用单个“前端控制器”进行所有 HTTP 处理（包括 WebSocket 握手与所有其他 HTTP 请求，例如：Spring MVC 的 <code>DispatcherServlet</code>）。</p><p>这是 JSR-356 的一个重大限制，即使在 JSR-356 运行时中运行，Spring 的 WebSocket 支持也可以通过服务端特定的 <code>RequestUpgradeStrategy</code> 实现解决。 Tomcat、Jetty、GlassFish、WebLogic、WebSphere 与 Undertow（与 WildFly）目前存在此类策略。</p>`,10),H={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),E={href:"https://github.com/eclipse-ee4j/websocket-api/issues/211",target:"_blank",rel:"noopener noreferrer"},O=r(`<p>第二个考虑因素是，希望支持 JSR-356 的 Servlet 容器执行 <code>ServletContainerInitializer</code>（SCI）扫描，这可能会减慢应用程序的启动速度，在某些情况下会大大降低速度。 如果在升级到具有 JSR-356 支持的 Servlet 容器版本后观察到重大影响，那么应该可以通过使用 <code>web.xml</code> 中的 <code>&lt;absolute-ordering /&gt;</code> 元素有选择地启用或禁用 Web 片段（和 SCI 扫描）,如以下示例所示：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;web-app xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xsi:schemaLocation=&quot;
        http://java.sun.com/xml/ns/javaee
        https://java.sun.com/xml/ns/javaee/web-app_3_0.xsd&quot;
    version=&quot;3.0&quot;&gt;

    &lt;absolute-ordering/&gt;

&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，可以按名称选择性地启用 Web 片段，例如 Spring 自己的 <code>SpringServletContainerInitializer</code>，它提供对 Servlet 3 Java 初始化 API 的支持。 以下示例展示了如何执行此操作：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;web-app xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xsi:schemaLocation=&quot;
        http://java.sun.com/xml/ns/javaee
        https://java.sun.com/xml/ns/javaee/web-app_3_0.xsd&quot;
    version=&quot;3.0&quot;&gt;

    &lt;absolute-ordering&gt;
        &lt;name&gt;spring_web&lt;/name&gt;
    &lt;/absolute-ordering&gt;

&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-服务端配置" tabindex="-1"><a class="header-anchor" href="#_4-2-4-服务端配置" aria-hidden="true">#</a> 4.2.4. 服务端配置</h3>`,5),B={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket-server-config",target:"_blank",rel:"noopener noreferrer"},A=r(`<p>每个基础的 WebSocket 引擎都公开配置属性，这些属性控制运行时特征，例如消息缓冲区大小的大小、空闲超时等。</p><p>对于 Tomcat、WildFly 与 GlassFish，可以将 <code>ServletServerContainerFactoryBean</code> 添加到 WebSocket Java 配置中，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Bean
    public ServletServerContainerFactoryBean createWebSocketContainer() {
        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
        container.setMaxTextMessageBufferSize(8192);
        container.setMaxBinaryMessageBufferSize(8192);
        return container;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;bean class=&quot;org.springframework...ServletServerContainerFactoryBean&quot;&gt;
        &lt;property name=&quot;maxTextMessageBufferSize&quot; value=&quot;8192&quot;/&gt;
        &lt;property name=&quot;maxBinaryMessageBufferSize&quot; value=&quot;8192&quot;/&gt;
    &lt;/bean&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>对于客户端 WebSocket 配置，应使用 <code>WebSocketContainerFactoryBean</code>（XML）或 <code>ContainerProvider.getWebSocketContainer()</code>（Java 配置）。</p></div><p>对于 Jetty，需要提供一个预先配置的 Jetty <code>WebSocketServerFactory</code>，然后通过 WebSocket Java 配置将其注入 Spring 的 <code>DefaultHandshakeHandler</code> 中。 以下示例展示了如何执行此操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(echoWebSocketHandler(),
            &quot;/echo&quot;).setHandshakeHandler(handshakeHandler());
    }

    @Bean
    public DefaultHandshakeHandler handshakeHandler() {

        WebSocketPolicy policy = new WebSocketPolicy(WebSocketBehavior.SERVER);
        policy.setInputBufferSize(8192);
        policy.setIdleTimeout(600000);

        return new DefaultHandshakeHandler(
                new JettyRequestUpgradeStrategy(new WebSocketServerFactory(policy)));
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:handlers&gt;
        &lt;websocket:mapping path=&quot;/echo&quot; handler=&quot;echoHandler&quot;/&gt;
        &lt;websocket:handshake-handler ref=&quot;handshakeHandler&quot;/&gt;
    &lt;/websocket:handlers&gt;

    &lt;bean id=&quot;handshakeHandler&quot; class=&quot;org.springframework...DefaultHandshakeHandler&quot;&gt;
        &lt;constructor-arg ref=&quot;upgradeStrategy&quot;/&gt;
    &lt;/bean&gt;

    &lt;bean id=&quot;upgradeStrategy&quot; class=&quot;org.springframework...JettyRequestUpgradeStrategy&quot;&gt;
        &lt;constructor-arg ref=&quot;serverFactory&quot;/&gt;
    &lt;/bean&gt;

    &lt;bean id=&quot;serverFactory&quot; class=&quot;org.eclipse.jetty...WebSocketServerFactory&quot;&gt;
        &lt;constructor-arg&gt;
            &lt;bean class=&quot;org.eclipse.jetty...WebSocketPolicy&quot;&gt;
                &lt;constructor-arg value=&quot;SERVER&quot;/&gt;
                &lt;property name=&quot;inputBufferSize&quot; value=&quot;8092&quot;/&gt;
                &lt;property name=&quot;idleTimeout&quot; value=&quot;600000&quot;/&gt;
            &lt;/bean&gt;
        &lt;/constructor-arg&gt;
    &lt;/bean&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-5-允许的来源" tabindex="-1"><a class="header-anchor" href="#_4-2-5-允许的来源" aria-hidden="true">#</a> 4.2.5. 允许的来源</h3>`,11),L={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-websocket-server-cors",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"Origin",-1),I={href:"https://tools.ietf.org/html/rfc6454",target:"_blank",rel:"noopener noreferrer"},X=r(`<p>三种可能的行为是：</p><ul><li><p>仅允许相同来源的请求（默认）： 在此模式下，启用 SockJS 后，Iframe HTTP 响应标头 <code>X-Frame-Options</code> 设置为 <code>SAMEORIGIN</code>，并且 JSONP 传输被禁用，因为它不允许检查请求的来源。 因此，启用此模式时，不支持 IE6 与 IE7。</p></li><li><p>允许指定来源列表： 每个允许的来源必须以 <code>http://</code> 或 <code>https://</code> 开头。 在此模式下，启用 SockJS 后，将禁用 IFrame 传输。 因此，启用此模式时，不支持 IE6 到 IE9。</p></li><li><p>允许所有来源： 要启用此模式，应提供 <code>*</code> 作为允许的来源值。 在这种模式下，所有传输都可用。</p></li></ul><p>可以配置 WebSocket 与 SockJS 允许的来源，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(myHandler(), &quot;/myHandler&quot;).setAllowedOrigins(&quot;https://mydomain.com&quot;);
    }

    @Bean
    public WebSocketHandler myHandler() {
        return new MyHandler();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:handlers allowed-origins=&quot;https://mydomain.com&quot;&gt;
        &lt;websocket:mapping path=&quot;/myHandler&quot; handler=&quot;myHandler&quot; /&gt;
    &lt;/websocket:handlers&gt;

    &lt;bean id=&quot;myHandler&quot; class=&quot;org.springframework.samples.MyHandler&quot;/&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-sockjs-回退" tabindex="-1"><a class="header-anchor" href="#_4-3-sockjs-回退" aria-hidden="true">#</a> 4.3. SockJS 回退</h2><p>在公共互联网上，控件外部的限制性代理可能会阻止 WebSocket 交互，这可能是因为未将它们配置为传递 <code>Upgrade</code> 标头，或者是因为它们关闭了长期处于空闲状态的连接。</p><p>解决此问题的方法是 WebSocket 模拟，即先尝试使用 WebSocket，然后再尝试使用基于 HTTP 的技术来模拟 WebSocket 交互并公开相同的应用程序级 API。</p><p>在 Servlet 技术栈上，Spring 框架为 SockJS 协议提供服务端与客户端支持。</p><h3 id="_4-3-1-概览" tabindex="-1"><a class="header-anchor" href="#_4-3-1-概览" aria-hidden="true">#</a> 4.3.1. 概览</h3><p>SockJS 的目标是让应用程序使用 WebSocket API，但在运行时的必要时刻回退到非 WebSocket 替代方案，而无需更改应用程序代码。</p><p>SockJS 包含：</p>`,13),j={href:"https://github.com/sockjs/sockjs-protocol",target:"_blank",rel:"noopener noreferrer"},N={href:"https://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[e("p",null,[n("SockJS 服务端实现，包含一个 Spring 框架的 "),e("code",null,"spring-websocket"),n(" 模块。")])],-1),U=e("li",null,[e("p",null,[e("code",null,"spring-websocket"),n(" 模块中的 SockJS Java 客户端（从 4.1 版开始）。")])],-1),V={href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://spring.io/blog/2012/05/08/spring-mvc-3-2-preview-techniques-for-real-time-updates/",target:"_blank",rel:"noopener noreferrer"},z=r(`<p>SockJS 客户端首先发送 <code>GET/info</code> 以从服务端获取基本信息。 在那之后，它必须决定使用哪种传输方式。 如果可能，将使用 WebSocket。 如果没有，在大多数浏览器中，至少有一个 HTTP 流选项。 如果不是，则使用 HTTP（长）轮询。</p><p>所有传输请求都具有以下 URL 结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://host:port/myApp/myEndpoint/{server-id}/{session-id}/{transport}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处：</p><ul><li><p><code>{server-id}</code> 用于在集群中路由请求，但在其他情况下不使用。</p></li><li><p><code>{session-id}</code> 用于关联属于 SockJS 会话的 HTTP 请求。</p></li><li><p><code>{transport}</code> 用于指示传输类型（例如：websocket、xhr-streaming、等）。</p></li></ul><p>WebSocket 传输仅需要单个 HTTP 请求即可进行 WebSocket 握手。 此后所有消息在该套接字上交换。</p><p>HTTP 传输需要更多请求。 例如，Ajax/XHR 流依赖于对服务端到客户端消息的一个长时间运行的请求，以及对客户端到服务端消息的其他 HTTP POST 请求。 长轮询与此类似，不同之处在于长轮询在每次服务端到客户端发送后结束当前请求。</p><p>SockJS 增加了最小消息帧。 例如，服务端最初发送字母 <code>o</code>（“开启”帧），消息以 <code>a[&quot;message1&quot;,&quot;message2&quot;]</code>（JSON 编码数组）发送，如果 25 秒内（默认）没有消息，那么发送字母 <code>h</code>（“心跳”帧），最后使用字母 <code>c</code>（“关闭”帧）关闭会话。</p>`,8),Y=e("code",null,"org.springframework.web.socket",-1),Q=e("code",null,"TRACE",-1),K={href:"https://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html",target:"_blank",rel:"noopener noreferrer"},Z=r(`<h3 id="_4-3-2-使能-sockjs" tabindex="-1"><a class="header-anchor" href="#_4-3-2-使能-sockjs" aria-hidden="true">#</a> 4.3.2. 使能 SockJS</h3><p>可以通过 Java 配置启用 SockJS，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(myHandler(), &quot;/myHandler&quot;).withSockJS();
    }

    @Bean
    public WebSocketHandler myHandler() {
        return new MyHandler();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:handlers&gt;
        &lt;websocket:mapping path=&quot;/myHandler&quot; handler=&quot;myHandler&quot;/&gt;
        &lt;websocket:sockjs/&gt;
    &lt;/websocket:handlers&gt;

    &lt;bean id=&quot;myHandler&quot; class=&quot;org.springframework.samples.MyHandler&quot;/&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),$={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-servlet",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"DispatcherServlet",-1),ne={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/web/socket/server/support/WebSocketHttpRequestHandler.html",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,"WebSocketHttpRequestHandler",-1),se=e("code",null,"WebSocketHandler",-1),re={href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"sockjs-client",-1),oe={href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"},de=e("h3",{id:"_4-3-3-ie-8-与-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-3-ie-8-与-9","aria-hidden":"true"},"#"),n(" 4.3.3. IE 8 与 9")],-1),te=e("p",null,"Internet Explorer 8 与 9 仍在使用。 它们是拥有 SockJS 的关键原因。 本节涵盖有关在这些浏览器中运行的重要注意事项。",-1),le={href:"https://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx",target:"_blank",rel:"noopener noreferrer"},ce=e("code",null,"XDomainRequest",-1),ve=e("p",null,[n("SockJS 客户端的第一个 "),e("code",null,"/info"),n(" 请求是对详细信息的请求，这些信息可以影响客户端对传输方式的选择。 这些详细信息之一是服务端应用程序是否依赖 Cookie（例如，出于身份验证目的或使用粘性会话进行群集）。 Spring 对 SockJS 的支持包括一个名为 "),e("code",null,"sessionCookieNeeded"),n(" 的属性。 由于大多数 Java 应用程序都依赖 "),e("code",null,"JSESSIONID"),n(" cookie，因此默认情况下启用该功能。 如果应用程序不需要它，那么可以关闭此选项，然后 SockJS 客户端应在 IE 8 与 9 中选择 "),e("code",null,"xdr-streaming"),n("。")],-1),ue=e("code",null,"X-Frame-Options",-1),pe=e("code",null,"DENY",-1),be=e("code",null,"SAMEORIGIN",-1),me=e("code",null,"ALLOW-FROM <origin>",-1),ge={href:"https://www.owasp.org/index.php/Clickjacking",target:"_blank",rel:"noopener noreferrer"},he={class:"custom-container tip"},Se=e("p",{class:"custom-container-title"},"TIP",-1),ke=e("p",null,[n("Spring Security 3.2+ 提供了对每个响应设置 "),e("code",null,"X-Frame-Options"),n(" 的支持。 默认情况下，Spring Security Java 配置将其设置为 "),e("code",null,"DENY"),n("。 在 3.2 中，Spring Security XML 命名空间默认情况下不设置该标头，但可以配置为这样做。 将来，它可能会成为默认设置。")],-1),we=e("code",null,"X-Frame-Options",-1),fe={href:"https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#headers",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://jira.spring.io/browse/SEC-2501",target:"_blank",rel:"noopener noreferrer"},Me=r(`<p>如果应用程序添加了 <code>X-Frame-Options</code> 响应标头（应该如此！）并依赖于基于 iframe 的传输，那么需要将标头值设置为 <code>SAMEORIGIN</code> 或 <code>ALLOW-FROM &lt;origin&gt;</code>。 Spring SockJS 支持还需要知道 SockJS 客户端的位置，因为它是从 iframe 加载的。 默认情况下，iframe 设置为从 CDN 位置下载 SockJS 客户端。 最好将此选项配置为使用与应用程序源相同的 URL。</p><p>以下示例展示了如何在 Java 配置中执行此操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/portfolio&quot;).withSockJS()
                .setClientLibraryUrl(&quot;http://localhost:8080/myapp/js/sockjs-client.js&quot;);
    }

    // ...

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>XML 命名空间通过 <code>&lt;websocket:sockjs&gt;</code> 元素提供了类似的选项。</p>`,4),Te={class:"custom-container tip"},qe=e("p",{class:"custom-container-title"},"TIP",-1),Ce={href:"https://github.com/sockjs/sockjs-client/",target:"_blank",rel:"noopener noreferrer"},xe=e("h3",{id:"_4-3-4-心跳",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-4-心跳","aria-hidden":"true"},"#"),n(" 4.3.4. 心跳")],-1),We=e("code",null,"heartbeatTime",-1),Je={href:"https://tools.ietf.org/html/rfc6202",target:"_blank",rel:"noopener noreferrer"},Pe=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"在 WebSocket 与 SockJS 上使用 STOMP 时，如果 STOMP 客户端与服务端协商要交换的心跳，将会禁用 SockJS 心跳。")],-1),He=e("p",null,[n("Spring SockJS 支持还允许配置 "),e("code",null,"TaskScheduler"),n(" 来计划心跳任务。 任务调度程序由线程池支持，其默认设置基于可用处理器的数量。 应该考虑根据特定需求自定义设置。")],-1),ye=e("h3",{id:"_4-3-5-客户端挂断",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-5-客户端挂断","aria-hidden":"true"},"#"),n(" 4.3.5. 客户端挂断")],-1),Ee={href:"https://spring.io/blog/2012/05/08/spring-mvc-3-2-preview-techniques-for-real-time-updates/",target:"_blank",rel:"noopener noreferrer"},Oe=e("p",null,"在 Servlet 容器中，这是通过 Servlet 3 异步支持完成的，该支持允许退出 Servlet 容器线程，处理请求并继续写入另一个线程的响应。",-1),Be={href:"https://github.com/eclipse-ee4j/servlet-api/issues/44",target:"_blank",rel:"noopener noreferrer"},Ae=r(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>结果，由于客户端已断开连接，可能会发生网络 I/O 故障，这可能会在日志中填充不必要的堆栈跟踪。 Spring 会尽最大努力找出代表客户端断开连接（特定于每个服务器）的网络故障，并通过使用专用日志类别 <code>DISCONNECTED_CLIENT_LOG_CATEGORY</code>（在 <code>AbstractSockJsSession</code> 中定义）来记录一条最小的消息。 如果需要查看堆栈跟踪，可以将该日志类别设置为 <code>TRACE</code>。</p></div><h3 id="_4-3-6-sockjs-与-cors" tabindex="-1"><a class="header-anchor" href="#_4-3-6-sockjs-与-cors" aria-hidden="true">#</a> 4.3.6. SockJS 与 CORS</h3><p>如果允许跨域请求（请参阅“<a href="#_4-2-5-%E5%85%81%E8%AE%B8%E7%9A%84%E6%9D%A5%E6%BA%90">允许的来源</a>”），那么 SockJS 协议使用 CORS 在 XHR 流与轮询传输中提供跨域支持。 因此，除非在响应中检测到 CORS 标头的存在，否则将自动添加 CORS 标头。 因此，如果已经将应用程序配置为提供 CORS 支持（例如，通过 Servlet 过滤器），那么 Spring 的 <code>SockJsService</code> 会跳过这一部分。</p><p>也可以通过在 Spring 的 SockJsService 中设置 <code>suppressCors</code> 属性来禁止添加这些 CORS 标头。</p><p>SockJS 需要以下标头与值：</p><ul><li><p><code>Access-Control-Allow-Origin</code>：从 <code>Origin</code> 请求标头的值初始化。</p></li><li><p><code>Access-Control-Allow-Credentials</code>：始终设置为 <code>true</code>。</p></li><li><p><code>Access-Control-Request-Headers</code>：从等效请求标头中的值初始化。</p></li><li><p><code>Access-Control-Allow-Methods</code>：传输支持的 HTTP 方法（请参见 <code>TransportType</code> 枚举）。</p></li><li><p><code>Access-Control-Max-Age</code>：设置为 31536000（1 年）。</p></li></ul><p>有关确切的实现，请参见 <code>AbstractSockJsService</code> 中的 <code>addCorsHeaders</code> 与源代码中的 <code>TransportType</code> 枚举。</p><p>另外，如果 CORS 配置允许，请考虑排除带有 SockJS 端点前缀的 URL，从而让 Spring 的 <code>SockJsService</code> 处理它。</p><h3 id="_4-3-7-sockjsclient" tabindex="-1"><a class="header-anchor" href="#_4-3-7-sockjsclient" aria-hidden="true">#</a> 4.3.7. <code>SockJsClient</code></h3><p>Spring 提供了一个 SockJS Java 客户端，无需使用浏览器即可连接到远程 SockJS 端点。 当需要通过公共网络在两个服务器之间进行双向通信时（这是网络代理可以阻止使用 WebSocket 协议的地方），这特别有用。 SockJS Java 客户端对于测试目的（例如，模拟大量并发用户）也非常有用。</p><p>SockJS Java 客户端支持 <code>websocket</code>、<code>xhr-streaming</code> 与 <code>xhr-polling</code> 传输。 其余的仅在浏览器中有意义。</p><p>可以使用以下命令配置 <code>WebSocketTransport</code>：</p><ul><li><p>JSR-356 运行时的 <code>StandardWebSocketClient</code></p></li><li><p>通过使用 Jetty 9+ 本机 WebSocket API 来创建 <code>JettyWebSocketClient</code>。</p></li><li><p>Spring 的 <code>WebSocketClient</code> 的任何实现。</p></li></ul><p>根据定义，<code>XhrTransport</code> 支持 <code>xhr-streaming</code> 与 <code>xhr-polling</code>，因为从客户端的角度来看，除了用于连接服务器的 URL 之外没有其他区别。 当前有两种实现：</p><ul><li><p><code>RestTemplateXhrTransport</code> 使用 Spring 的 <code>RestTemplate</code> 进行 HTTP 请求。</p></li><li><p><code>JettyXhrTransport</code> 使用 Jetty 的 <code>HttpClient</code> 进行 HTTP 请求。</p></li></ul><p>以下示例展示了如何创建 SockJS 客户端并连接到 SockJS 端点：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;Transport&gt; transports = new ArrayList&lt;&gt;(2);
transports.add(new WebSocketTransport(new StandardWebSocketClient()));
transports.add(new RestTemplateXhrTransport());

SockJsClient sockJsClient = new SockJsClient(transports);
sockJsClient.doHandshake(new MyWebSocketHandler(), &quot;ws://example.com:8080/sockjs&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>SockJS 对消息使用 JSON 格式的数组。 默认情况下，使用 Jackson 2，并且需要在类路径上。 或者，可以配置 <code>SockJsMessageCodec</code> 的自定义实现，并在 <code>SockJsClient</code> 上对其进行配置。</p></div><p>要使用 <code>SockJsClient</code> 模拟大量并发用户，需要配置基础 HTTP 客户端（用于 XHR 传输）以允许足够数量的连接与线程。 以下示例展示了如何使用 Jetty 进行操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>HttpClient jettyHttpClient = new HttpClient();
jettyHttpClient.setMaxConnectionsPerDestination(1000);
jettyHttpClient.setExecutor(new QueuedThreadPool(1000));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示了与服务端 SockJS 相关的属性（有关详细信息，请参见 javadoc），还应该考虑自定义：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
public class WebSocketConfig extends WebSocketMessageBrokerConfigurationSupport {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/sockjs&quot;).withSockJS()
            .setStreamBytesLimit(512 * 1024) 
            .setHttpMessageCacheSize(1000) 
            .setDisconnectDelay(30 * 1000); 
    }

    // ...
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>将 <code>streamBytesLimit</code> 属性设置为 512KB（默认值为 128KB——<code>128 * 1024</code>）。</p></li><li><p>将 <code>httpMessageCacheSize</code> 属性设置为 1,000（默认值为 <code>100</code>）。</p></li><li><p>将断开连接延迟属性设置为 30 个属性秒（默认值为 5 秒——<code>5 * 1000</code>）。</p></li></ol><h2 id="_4-4-stomp" tabindex="-1"><a class="header-anchor" href="#_4-4-stomp" aria-hidden="true">#</a> 4.4. STOMP</h2><p>WebSocket 协议定义了两种消息类型（文本消息与二进制消息），但是其内容未定义。 该协议定义了一种机制，供客户端与服务端协商用于在 WebSocket 之上使用的子协议（即高级消息协议），以定义每条消息可以发送的类型、格式是什么、每条消息的内容，等等。 子协议的使用是可选的，但是无论哪种方式，客户端和服务端都需要就定义消息内容的某种协议达成共识。</p><h3 id="_4-4-1-概览" tabindex="-1"><a class="header-anchor" href="#_4-4-1-概览" aria-hidden="true">#</a> 4.4.1. 概览</h3>`,26),Le={href:"https://stomp.yueplus.ink/stomp-specification-1.2.html#Abstract",target:"_blank",rel:"noopener noreferrer"},Re=r(`<p>STOMP 是基于帧的协议，其帧是基于 HTTP 的。 以下清单显示了 STOMP 帧的结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COMMAND
header1:value1
header2:value2

Body^@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端可以使用 <code>SEND</code> 或 <code>SUBSCRIBE</code> 命令发送或订阅消息，以及描述消息的内容与接收者的 <code>destination </code> 标头。 这启用了一种简单的发布 - 订阅机制，可以使用该机制通过代理将消息发送到其他连接的客户端，或者将消息发送到服务端以请求执行某些工作。</p><p>使用 Spring 的 STOMP 支持时，Spring WebSocket 应用程序将充当客户端的 STOMP 代理。 消息被路由到 <code>@Controller</code> 消息处理方法或简单的内存中代理，该代理跟踪订阅并向订阅的用户广播消息。 还可以将 Spring 配置为与专用的 STOMP 代理（例如：RabbitMQ、ActiveMQ 与其他代理）一起使用，以实际广播消息。 在那种情况下，Spring 维护与代理的 TCP 连接，将消息中继给它，并将消息从它传递到连接的 WebSocket 客户端。 因此，Spring Web 应用程序可以依靠基于 HTTP 的统一安全性，通用验证以及用于消息处理的熟悉的编程模型。</p><p>以下示例展示了一个客户订阅的股票报价，服务端可能会定期发出该股票报价（例如：通过计划的任务，该任务通过 <code>SimpMessagingTemplate</code> 将消息发送给代理）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SUBSCRIBE
id:sub-1
destination:/topic/price.stock.*

^@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下示例展示了一个发送交易请求的客户端，服务端可以通过 <code>@MessageMapping</code> 方法处理该请求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SEND
destination:/queue/trade
content-type:application/json
content-length:44

{&quot;action&quot;:&quot;BUY&quot;,&quot;ticker&quot;:&quot;MMM&quot;,&quot;shares&quot;,44}^@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，服务端可以向客户广播交易确认消息与详细信息。</p><p>在 STOMP 规范中，目的地的含义是故意不透明的。 它可以是任何字符串，并且完全由 STOMP 服务端定义它们支持的目的地的语义和语法。 但是，目的地通常是类似路径的字符串，其中 <code>/topic/..</code> 表示发布 - 订阅（一对多），而 <code>/queue/</code> 表示点对点（一对一）消息交流。</p><p>STOMP 服务端可以使用 <code>MESSAGE</code> 命令向所有订阅者广播消息。 以下示例展示了服务端向订阅的客户端发送股票报价：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MESSAGE
message-id:nxahklf6-1
subscription:sub-1
destination:/topic/price.stock.MMM

{&quot;ticker&quot;:&quot;MMM&quot;,&quot;price&quot;:129.45}^@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端无法发送未经请求的消息。 来自服务端的所有消息都必须响应特定的客户端订阅，并且服务端消息的 <code>subscription-id</code> 标头必须与客户端订阅的 <code>id</code> 标头匹配。</p>`,13),Ie={href:"https://stomp.yueplus.ink/stomp-specification-1.2.html",target:"_blank",rel:"noopener noreferrer"},Xe=e("h3",{id:"_4-4-2-优点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-4-2-优点","aria-hidden":"true"},"#"),n(" 4.4.2. 优点")],-1),je=e("p",null,"与使用原始 WebSocket 相比，使用 STOMP 作为子协议使 Spring Framework 与 Spring Security 提供了更丰富的编程模型。 关于 HTTP 与原始 TCP 以及它如何让 Spring MVC 与其他 Web 框架提供丰富的功能，可以得出相同的观点。 以下是优点列表：",-1),Ne=e("li",null,[e("p",null,"无需发明自定义消息协议与消息格式。")],-1),De={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#websocket-stomp-client",target:"_blank",rel:"noopener noreferrer"},Fe=e("li",null,[e("p",null,"可以（可选）使用消息代理（例如：RabbitMQ、ActiveMQ 与其他代理）来管理订阅与广播消息。")],-1),Ue=e("li",null,[e("p",null,[n("可以在任意数量的 "),e("code",null,"@Controller"),n(" 实例中组织应用程序逻辑，并且可以基于 STOMP 目的地标头将消息路由到它们，而不是通过给定连接使用单个 "),e("code",null,"WebSocketHandler"),n(" 处理原始 WebSocket 消息。")])],-1),Ve=e("li",null,[e("p",null,"可以使用 Spring Security 基于 STOMP 目的地与消息类型来保护消息。")],-1),Ge=r(`<h3 id="_4-4-3-启用-stomp" tabindex="-1"><a class="header-anchor" href="#_4-4-3-启用-stomp" aria-hidden="true">#</a> 4.4.3. 启用 STOMP</h3><p><code>spring-messaging</code> 与 <code>spring-websocket</code> 模块中提供了 STOMP 通过 WebSocket 支持。 一旦有了这些依赖关系，就可以使用 <a href="#_4-3-sockjs-%E5%9B%9E%E9%80%80">SockJS 回退</a> 通过 WebSocket 公开 STOMP 端点，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/portfolio&quot;).withSockJS();  
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes(&quot;/app&quot;); 
        config.enableSimpleBroker(&quot;/topic&quot;, &quot;/queue&quot;); 
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p><code>/portfolio</code> 是 WebSocket（或 SockJS）客户端为了 WebSocket 握手需要连接到的端点的 HTTP URL。</p></li><li><p>其目的地标头以 <code>/app</code> 开头的 STOMP 消息被路由到 <code>@Controller</code> 类中的 <code>@MessageMapping</code> 方法。</p></li><li><p>使用内置的消息代理进行订阅与广播，以及将目的地标头以 <code>/topic</code> 或 <code>/queue</code> 开头的消息路由到代理。</p></li></ol><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker application-destination-prefix=&quot;/app&quot;&gt;
        &lt;websocket:stomp-endpoint path=&quot;/portfolio&quot;&gt;
            &lt;websocket:sockjs/&gt;
        &lt;/websocket:stomp-endpoint&gt;
        &lt;websocket:simple-broker prefix=&quot;/topic, /queue&quot;/&gt;
    &lt;/websocket:message-broker&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>对于内置的简单代理，<code>/topic</code> 与 <code>/queue</code> 前缀没有任何特殊含义。 它们仅是区分发布订阅消息传递与点对点消息传递的约定（即，许多订阅者与一个消费者）。 使用外部代理时，请检查代理的 STOMP 页面以了解其支持哪种 STOMP 目标与前缀。</p></div>`,7),ze={href:"https://github.com/sockjs/sockjs-client",target:"_blank",rel:"noopener noreferrer"},Ye=e("code",null,"sockjs-client",-1),Qe={href:"https://github.com/jmesnil/stomp-websocket",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://github.com/JSteunou/webstomp-client",target:"_blank",rel:"noopener noreferrer"},Ze=r(`<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var socket = new SockJS(&quot;/spring-websocket-portfolio/portfolio&quot;);
var stompClient = webstomp.over(socket);

stompClient.connect({}, function(frame) {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，前面示例中的 <code>stompClient</code> 不需要指定 <code>login</code> 与 <code>password</code> 标头。 即使这样做，它们也会在服务器端被忽略（或更确切地说，被覆盖）。 有关身份验证的更多信息，请参见<a href="#_4-4-10-%E8%BF%9E%E6%8E%A5%E5%88%B0%E4%BB%A3%E7%90%86">连接到代理</a>与<a href="#_4-4-12-%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81">身份验证</a>。</p><p>有关更多示例代码，请参见：</p>`,3),$e={href:"https://spring.io/guides/gs/messaging-stomp-websocket/",target:"_blank",rel:"noopener noreferrer"},en={href:"https://github.com/rstoyanchev/spring-websocket-portfolio",target:"_blank",rel:"noopener noreferrer"},nn=r(`<h3 id="_4-4-4-websocket-服务端" tabindex="-1"><a class="header-anchor" href="#_4-4-4-websocket-服务端" aria-hidden="true">#</a> 4.4.4. WebSocket 服务端</h3><p>要配置基础 WebSocket 服务器，请应用“<a href="#_4-2-4-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE">服务端配置</a>”中的信息。 但是对于Jetty，需要通过 <code>StompEndpointRegistry</code> 设置 <code>HandshakeHandler</code> 与 <code>WebSocketPolicy</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/portfolio&quot;).setHandshakeHandler(handshakeHandler());
    }

    @Bean
    public DefaultHandshakeHandler handshakeHandler() {

        WebSocketPolicy policy = new WebSocketPolicy(WebSocketBehavior.SERVER);
        policy.setInputBufferSize(8192);
        policy.setIdleTimeout(600000);

        return new DefaultHandshakeHandler(
                new JettyRequestUpgradeStrategy(new WebSocketServerFactory(policy)));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-5-消息流" tabindex="-1"><a class="header-anchor" href="#_4-4-5-消息流" aria-hidden="true">#</a> 4.4.5. 消息流</h3><p>公开 STOMP 端点后，Spring 应用程序将成为已连接客户端的 STOMP 代理。 本节描述服务端的消息流。</p>`,5),sn=e("code",null,"spring-messaging",-1),rn={href:"https://spring.io/spring-integration",target:"_blank",rel:"noopener noreferrer"},an={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/Message.html",target:"_blank",rel:"noopener noreferrer"},on={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/MessageHandler.html",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/MessageChannel.html",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/SubscribableChannel.html",target:"_blank",rel:"noopener noreferrer"},ln=e("code",null,"MessageHandler",-1),cn=e("code",null,"MessageChannel",-1),vn={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/support/ExecutorSubscribableChannel.html",target:"_blank",rel:"noopener noreferrer"},un=e("code",null,"Executor",-1),pn=e("code",null,"SubscribableChannel",-1),bn=r('<p>Java 配置（即 <code>@EnableWebSocketMessageBroker</code>）与 XML 命名空间配置（即 <code>&lt;websocket：message-broker&gt;</code>）都使用前面的组件来组装消息工作流。 下图展示了启用简单内置消息代理时使用的组件：</p><p><img src="'+l+'" alt="消息流简单代理"></p><p>上图展示了三个消息通道：</p><ul><li><p><code>clientInboundChannel</code>：用于传递从 WebSocket 客户端收到的消息。</p></li><li><p><code>clientOutboundChannel</code>：用于向 WebSocket 客户端发送服务端消息。</p></li><li><p><code>brokerChannel</code>：用于从服务端应用程序代码内将消息发送到消息代理。</p></li></ul><p>下图展示了将外部代理（例如 RabbitMQ）配置为用于管理订阅与广播消息时使用的组件：</p><p><img src="'+c+`" alt="消息流代理转发"></p><p>前面两个图之间的主要区别是使用“代理中继”将消息通过 TCP 传递到外部 STOMP 代理，以及将消息从代理传递到订阅的客户端。</p><p>从 WebSocket 连接接收到消息后，它们将被解码为 STOMP 帧，转换为 Spring 消息表示形式，然后发送到 <code>clientInboundChannel</code> 进行进一步处理。 例如：目的地标头以 <code>/app</code> 开头的 STOMP 消息可以路由到控制器中带 <code>@MessageMapping</code> 注解的方法，而 <code>/topic</code> 与 <code>/queue</code> 消息可以直接路由到消息代理。</p><p>处理来自客户端的 STOMP 消息的带注解的 <code>@Controller</code> 可以通过 <code>brokerChannel</code> 将消息发送到消息代理，并且代理通过 <code>clientOutboundChannel</code> 将消息广播给匹配的订阅者。 相同的控制器还可以响应 HTTP 请求执行相同的操作，因此客户端可以执行 HTTP POST，然后 <code>@PostMapping</code> 方法可以将消息发送到消息代理，以广播到订阅的客户端。</p><p>可以通过一个简单的示例跟踪流程。 考虑以下示例，该示例设置了服务器：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/portfolio&quot;);
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes(&quot;/app&quot;);
        registry.enableSimpleBroker(&quot;/topic&quot;);
    }
}

@Controller
public class GreetingController {

    @MessageMapping(&quot;/greeting&quot;) {
    public String handle(String greeting) {
        return &quot;[&quot; + getTimestamp() + &quot;: &quot; + greeting;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面的示例支持以下流程：</p>`,12),mn={href:"http://localhost:8080/portfolio",target:"_blank",rel:"noopener noreferrer"},gn=r("<li><p>客户端发送 SUBSCRIBE 帧，其目的地标头为 <code>/topic/greeting</code>。 接收并解码后，该消息将发送到 <code>clientInboundChannel</code>，然后路由到消息代理，该代理存储客户端订阅。</p></li><li><p>客户端向 <code>/app/greeting</code> 发送一个 aSEND 帧。 <code>/app</code> 前缀有助于将其路由到带注解的控制器。 删除 <code>/app</code> 前缀后，目标的其余 <code>/greeting</code> 部分将映射到 <code>GreetingController</code> 中的 <code>@MessageMapping</code> 方法。</p></li><li><p>从 <code>GreetingController</code> 返回的值被转换为带有有效负载的 Spring 消息，该有效负载基于返回值和 <code>/topic/greeting</code> 的默认目的地标头（从输入目的地派生，其中 <code>/app</code> 替换为 <code>/topic</code>）。 结果消息将发送到 <code>brokerChannel</code> 并由消息代理处理。</p></li><li><p>消息代理查找所有匹配的订阅者，并通过 <code>clientOutboundChannel</code> 向每个消息订阅者发送一个 MESSAGE 帧，消息在该消息中被编码为 STOMP 帧并通过 WebSocket 连接发送。</p></li>",4),hn=r(`<p>下一节将提供有关带注解方法的更多详细信息，包括支持的参数类型与返回值。</p><h3 id="_4-4-6-带注解的控制器" tabindex="-1"><a class="header-anchor" href="#_4-4-6-带注解的控制器" aria-hidden="true">#</a> 4.4.6. 带注解的控制器</h3><p>应用程序可以使用带注解的 <code>@Controller</code> 类来处理来自客户端的消息。 这样的类可以声明 <code>@MessageMapping</code>、<code>@SubscribeMapping</code> 与 <code>@ExceptionHandler</code> 方法，如以下主题所述：</p><ul><li><p><a href="#messagemapping"><code>@MessageMapping</code></a></p></li><li><p><a href="#subscribemapping"><code>@SubscribeMapping</code></a></p></li><li><p><a href="#exceptionhandler"><code>@ExceptionHandler</code></a></p></li></ul><h4 id="messagemapping" tabindex="-1"><a class="header-anchor" href="#messagemapping" aria-hidden="true">#</a> <code>@MessageMapping</code></h4><p>可以使用 <code>@MessageMapping</code> 来注解基于目的地路由消息的方法。 在方法级与类型级都支持它。 在类级，<code>@MessageMapping</code> 用于表示控制器中所有方法之间的共享映射。</p><p>默认情况下，映射值是 Ant 风格的路径模式（例如：<code>/thing*</code>、<code>/thing/**</code>），包括对模板变量（例如：<code>/thing/{id}</code>）的支持。 可以通过 <code>@DestinationVariable</code> 方法参数引用这些值。 应用程序还可以切换到以点分隔的映射的目标约定，如“<a href="#_4-4-11-%E5%B0%86%E7%82%B9%E4%BD%9C%E4%B8%BA%E5%88%86%E9%9A%94%E7%AC%A6">将点作为分隔符</a>”中所述。</p><h5 id="支持的方法参数" tabindex="-1"><a class="header-anchor" href="#支持的方法参数" aria-hidden="true">#</a> 支持的方法参数</h5><p>下表描述了方法参数：</p><table><thead><tr><th>方法参数</th><th>描述</th></tr></thead><tbody><tr><td><code>Message</code></td><td>用于访问完整的消息。</td></tr><tr><td><code>MessageHeaders</code></td><td>用于访问 <code>Message</code> 中的标头。</td></tr><tr><td><code>MessageHeaderAccessor</code>、<code>SimpMessageHeaderAccessor</code>、<code>StompHeaderAccessor</code></td><td>用于通过类型化访问器方法访问标头。</td></tr><tr><td><code>@Payload</code></td><td>为了访问消息的有效负载，由配置的 <code>MessageConverter</code> 转换（例如，从 JSON）。<br>不需要此注解，因为默认情况下会假定没有其它自变量匹配。<br>可以使用 <code>@javax.validation.Valid</code> 或 Spring 的 <code>@Validated</code> 注解有效负载参数，以自动验证有效负载参数。</td></tr><tr><td><code>@Header</code></td><td>为了访问特定的标头值——以及必要时使用 <code>org.springframework.core.convert.converter.Converter</code> 进行类型转换。</td></tr><tr><td><code>@Headers</code></td><td>用于访问消息中的所有标头。此参数必须可分配给 <code>java.util.Map</code>。</td></tr><tr><td><code>@DestinationVariable</code></td><td>用于访问从消息目的地中提取的模板变量。根据需要将值转换为声明的方法参数类型。</td></tr><tr><td><code>java.security.Principal</code></td><td>反映在 WebSocket HTTP 握手时登录的用户。</td></tr></tbody></table><h5 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h5><p>默认情况下，<code>@MessageMapping</code> 方法的返回值通过匹配的 <code>MessageConverter</code> 序列化为有效负载，并作为消息发送到 <code>brokerChannel</code>，并从该消息广播到订阅者。 出站邮件的目的地与入站邮件的目的地相同，但以 <code>/topic</code> 为前缀。</p><p>可以使用 <code>@SendTo</code> 与 <code>@SendToUser</code> 注解来自定义输出消息的目的地。 <code>@SendTo</code> 用于自定义目标位置或指定多个目标。 <code>@SendToUser</code> 用于将输出消息定向到仅与输入消息关联的用户。 请参阅<a href="#_4-4-14-%E7%94%A8%E6%88%B7%E7%9B%AE%E7%9A%84%E5%9C%B0">用户目的地</a>。</p><p>可以在同一方法上同时使用 <code>@SendTo</code> 与 <code>@SendToUser</code>，并且两者在类级都受支持，在这种情况下，它们充当类中方法的默认值。 但是，请记住，任何方法级的 <code>@SendTo</code> 或 <code>@SendToUser</code> 注解都会在类级别覆盖所有此类批注。</p><p>消息可以异步处理，<code>@MessageMapping</code> 方法可以返回 <code>ListenableFuture</code>、<code>CompletableFuture</code> 或 <code>CompletionStage</code>。</p><p>请注意，<code>@SendTo</code> 与 <code>@SendToUser</code> 只是一种便利，等同于使用 <code>SimpMessagingTemplate</code> 发送消息。 如有必要，对于更高级的方案，可以直接使用 <code>SimpMessagingTemplate</code> 来使用 <code>@MessageMapping</code> 方法。 这可以代替返回值，也可以附加于返回值。 请参阅<a href="#_4-4-7-%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF">发送消息</a>。</p><h4 id="subscribemapping" tabindex="-1"><a class="header-anchor" href="#subscribemapping" aria-hidden="true">#</a> <code>@SubscribeMapping</code></h4><p><code>@SubscribeMapping</code> 与 <code>@MessageMapping</code> 相似，但是将映射范围缩小到仅订阅消息。 它支持与 <code>@MessageMapping</code> 相同的<a href="#messagemapping">方法参数</a>。 但是，在默认情况下对于返回值，消息直接发送到客户端（通过 <code>clientOutboundChannel</code>，作为对订阅的响应），而不发送到代理（通过 <code>brokerChannel</code>，作为对匹配订阅的广播）。 添加 <code>@SendTo</code> 或 <code>@SendToUser</code> 会覆盖此行为，而是发送给代理。</p><p>什么时候有用？ 假定代理映射到 <code>/topic</code> 与 <code>/queue</code>，而应用程序控制器映射到 <code>/app</code>。 在此设置中，代理将存储 <code>/topic</code> 与 <code>/queue</code> 的所有订阅，这些订阅旨在进行重复广播，并且不需要应用程序参与。 客户端还可以订阅某个 <code>/app</code> 目的地，并且控制器可以响应该订阅而返回一个值，而无需代理，而无需再次存储或使用该订阅（实际上是一次请求 - 答复交换）。 一个用例是在启动时用初始数据填充 UI。</p><p>什么时候没用？ 不要尝试将代理与控制器映射到相同的目标前缀，除非出于某种原因希望两者都独立处理消息（包括订阅）。 入站消息是并行处理的。 不能保证代理或控制器首先处理给定的消息。 如果要在存储订阅并准备广播时通知目标，那么客户端应询问服务端是否支持收据（简单代理不支持）。 例如，对于 Java <a href="#_4-4-18-stomp-%E5%AE%A2%E6%88%B7%E7%AB%AF">STOMP 客户端</a>，可以执行以下操作添加收据：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Autowired
private TaskScheduler messageBrokerTaskScheduler;

// During initialization..
stompClient.setTaskScheduler(this.messageBrokerTaskScheduler);

// When subscribing..
StompHeaders headers = new StompHeaders();
headers.setDestination(&quot;/topic/...&quot;);
headers.setReceipt(&quot;r1&quot;);
FrameHandler handler = ...;
stompSession.subscribe(headers, handler).addReceiptTask(() -&gt; {
    // Subscription ready...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端的一种选择是在 <code>brokerChannel</code> 上<a href="#_4-4-17-%E6%8B%A6%E6%88%AA">注册</a>一个 <code>ExecutorChannelInterceptor</code> 并实现 <code>afterMessageHandled</code> 方法，该方法在处理消息（包括订阅）之后被调用。</p><h4 id="exceptionhandler" tabindex="-1"><a class="header-anchor" href="#exceptionhandler" aria-hidden="true">#</a> <code>@ExceptionHandler</code></h4><p>应用程序可以使用 <code>@MessageExceptionHandler</code> 方法来处理 <code>@MessageMapping</code> 方法中的异常。 如果要访问异常实例，那么可以在注解本身中声明异常，也可以通过方法参数声明异常。 以下示例通过方法参数声明异常：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class MyController {

    // ...

    @MessageExceptionHandler
    public ApplicationError handleException(MyException exception) {
        // ...
        return appError;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@MessageExceptionHandler</code> 方法支持灵活的方法签名，并支持与 <code>@MessageMapping</code> 方法相同的方法参数类型与返回值。</p>`,26),Sn=e("code",null,"@MessageExceptionHandler",-1),kn=e("code",null,"@Controller",-1),wn=e("code",null,"@ControllerAdvice",-1),fn={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-controller-advice",target:"_blank",rel:"noopener noreferrer"},_n=r(`<h3 id="_4-4-7-发送消息" tabindex="-1"><a class="header-anchor" href="#_4-4-7-发送消息" aria-hidden="true">#</a> 4.4.7. 发送消息</h3><p>如果要从应用程序的任何部分向连接的客户端发送消息怎么办？ 任何应用程序组件都可以将消息发送到 <code>brokerChannel</code>。 最简单的方法是注入 <code>SimpMessagingTemplate</code> 并使用它发送消息。 通常，将按类型注入它，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class GreetingController {

    private SimpMessagingTemplate template;

    @Autowired
    public GreetingController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @RequestMapping(path=&quot;/greetings&quot;, method=POST)
    public void greet(String greeting) {
        String text = &quot;[&quot; + getTimestamp() + &quot;]:&quot; + greeting;
        this.template.convertAndSend(&quot;/topic/greetings&quot;, text);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果存在另一个相同类型的 bean，也可以通过其名称（<code>brokerMessagingTemplate</code>）对其进行限定。</p><h3 id="_4-4-8-简单代理" tabindex="-1"><a class="header-anchor" href="#_4-4-8-简单代理" aria-hidden="true">#</a> 4.4.8. 简单代理</h3><p>内置的简单消息代理处理来自客户端的订阅请求，将其存储在内存中，并将消息广播到具有匹配目的地的已连接客户端。 该代理支持类似路径的目的地，包括订阅 Ant 风格的目的地模式。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>应用程序还可以使用点分隔（而不是斜杠分隔）目的地。 请参阅<a href="#_4-4-11-%E5%B0%86%E7%82%B9%E4%BD%9C%E4%B8%BA%E5%88%86%E9%9A%94%E7%AC%A6">将点作为分隔符</a>。</p></div><p>如果配置了任务调度程序，那么简单代理支持 STOMP 心跳。 为此，可以声明自己的调度程序，也可以使用内部自动声明与使用的调度程序。 以下示例展示如何声明自己的调度程序：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private TaskScheduler messageBrokerTaskScheduler;

    @Autowired
    public void setMessageBrokerTaskScheduler(TaskScheduler taskScheduler) {
        this.messageBrokerTaskScheduler = taskScheduler;
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        registry.enableSimpleBroker(&quot;/queue/&quot;, &quot;/topic/&quot;)
                .setHeartbeatValue(new long[] {10000, 20000})
                .setTaskScheduler(this.messageBrokerTaskScheduler);

        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-9-外部代理" tabindex="-1"><a class="header-anchor" href="#_4-4-9-外部代理" aria-hidden="true">#</a> 4.4.9. 外部代理</h3><p>简单代理非常适合入门，但仅支持 STOMP 命令的子集（它不支持 ack、收据与其他一些特性），依赖于简单的消息发送循环，并且不适合于集群。 或者，可以升级应用程序以使用功能齐全的消息代理。</p>`,11),Mn={href:"https://www.rabbitmq.com/stomp.html",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://activemq.apache.org/stomp.html",target:"_blank",rel:"noopener noreferrer"},qn=r(`<p>以下示例配置启用了功能齐全的代理：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(&quot;/portfolio&quot;).withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableStompBrokerRelay(&quot;/topic&quot;, &quot;/queue&quot;);
        registry.setApplicationDestinationPrefixes(&quot;/app&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker application-destination-prefix=&quot;/app&quot;&gt;
        &lt;websocket:stomp-endpoint path=&quot;/portfolio&quot; /&gt;
            &lt;websocket:sockjs/&gt;
        &lt;/websocket:stomp-endpoint&gt;
        &lt;websocket:stomp-broker-relay prefix=&quot;/topic,/queue&quot; /&gt;
    &lt;/websocket:message-broker&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Cn={href:"https://docs.spring.io/spring-framework/docs/5.3.4/javadoc-api/org/springframework/messaging/MessageHandler.html",target:"_blank",rel:"noopener noreferrer"},xn=e("code",null,"MessageHandler",-1),Wn=r(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>将 <code>io.projectreactor.netty:reactor-netty</code> 与 <code>io.netty:netty-all</code> 所有依赖项添加到项目中以进行 TCP 连接管理。</p></div><p>此外，应用程序组件（例如 HTTP 请求处理方法、业务服务等）还可以将消息发送到代理中继，如“<a href="#_4-4-7-%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF">发送消息</a>”中所述，将消息广播到订阅的 WebSocket 客户端。</p><p>实际上，代理中继可实现健壮且可伸缩的消息广播。</p><h3 id="_4-4-10-连接到代理" tabindex="-1"><a class="header-anchor" href="#_4-4-10-连接到代理" aria-hidden="true">#</a> 4.4.10. 连接到代理</h3><p>STOMP 代理中继器维护与代理的单个“系统”TCP 连接。 此连接仅用于源自服务端应用程序的消息，而不用于接收消息。 可以为此连接配置 STOMP 凭据（即 STOMP 帧 <code>login</code> 与 <code>passcode</code> 标头）。 这在 XML 命名空间与 Java 配置中都以 <code>systemLogin</code> 与 <code>systemPasscode</code> 属性（默认值为 <code>guest</code> 与 <code>guest</code>）公开。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>STOMP 代理中继始终在代表客户端转发给代理的每个 <code>CONNECT</code> 帧上设置 <code>login</code> 与 <code>passcode</code> 标头。 因此，WebSocket 客户端无需设置这些标头。 它们将被忽略。 如“<a href="#_4-4-12-%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81">身份验证</a>”部分所述，WebSocket 客户端应改为依靠 HTTP 身份验证来保护 WebSocket 端点并建立客户端身份。</p></div><p>STOMP 代理中继还通过“系统” TCP 连接向消息代理发送与从消息代理接收心跳。 可以配置发送与接收心跳的间隔（默认间隔为 10 秒）。 如果与代理的连接断开，那么代理中继每 5 秒继续尝试重新连接，直到成功。</p><p>当与代理的“系统”连接丢失并重新建立时，任何 Spring bean 都可以实现 <code>ApplicationListener&lt;BrokerAvailabilityEvent&gt;</code> 来接收通知。 例如，当没有活动的“系统”连接时，广播股票报价的股票报价服务可以停止尝试发送消息。</p><p>默认情况下，STOMP 代理中继始终连接到同一主机和端口，如果连接断开，那么根据需要重新连接。 如果希望提供多个地址，那么在每次尝试连接时，都可以配置地址供应商，而不是固定的主机与端口。 以下示例展示了如何执行此操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

    // ...

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableStompBrokerRelay(&quot;/queue/&quot;, &quot;/topic/&quot;).setTcpClient(createTcpClient());
        registry.setApplicationDestinationPrefixes(&quot;/app&quot;);
    }

    private ReactorNettyTcpClient&lt;byte[]&gt; createTcpClient() {
        return new ReactorNettyTcpClient&lt;&gt;(
                client -&gt; client.addressSupplier(() -&gt; ... ),
                new StompReactorNettyCodec());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用 <code>virtualHost</code> 属性配置 STOMP 代理中继。 此属性的值设置为每个 <code>CONNECT</code> 帧的 <code>host</code> 标头，这很有用（例如，在云环境中，建立 TCP 连接的实际主机与提供基于云的 STOMP 服务的主机是不同的）。</p><h3 id="_4-4-11-将点作为分隔符" tabindex="-1"><a class="header-anchor" href="#_4-4-11-将点作为分隔符" aria-hidden="true">#</a> 4.4.11. 将点作为分隔符</h3><p>将消息路由到 <code>@MessageMapping</code> 方法时，它们将与 <code>AntPathMatcher</code> 进行匹配。 默认情况下，模式应使用斜杠（<code>/</code>）作为分隔符。 这是 Web 应用程序中的一个良好约定，类似于 HTTP URL。 但是，如果更习惯于消息传递约定，那么可以切换为使用点（<code>.</code>）作为分隔符。</p><p>以下示例展示了如何在Java配置中执行此操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // ...

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setPathMatcher(new AntPathMatcher(&quot;.&quot;));
        registry.enableStompBrokerRelay(&quot;/queue&quot;, &quot;/topic&quot;);
        registry.setApplicationDestinationPrefixes(&quot;/app&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
        xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
        xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
        xsi:schemaLocation=&quot;
                http://www.springframework.org/schema/beans
                https://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/websocket
                https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker application-destination-prefix=&quot;/app&quot; path-matcher=&quot;pathMatcher&quot;&gt;
        &lt;websocket:stomp-endpoint path=&quot;/stomp&quot;/&gt;
        &lt;websocket:stomp-broker-relay prefix=&quot;/topic,/queue&quot; /&gt;
    &lt;/websocket:message-broker&gt;

    &lt;bean id=&quot;pathMatcher&quot; class=&quot;org.springframework.util.AntPathMatcher&quot;&gt;
        &lt;constructor-arg index=&quot;0&quot; value=&quot;.&quot;/&gt;
    &lt;/bean&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，控制器可以使用点（<code>.</code>）作为 <code>@MessageMapping</code> 方法中的分隔符，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
@MessageMapping(&quot;red&quot;)
public class RedController {

    @MessageMapping(&quot;blue.{green}&quot;)
    public void handleGreen(@DestinationVariable String green) {
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端现在可以将消息发送到 <code>/app/red.blue.green123</code>。</p><p>在前面的示例中，没有更改“代理中继”上的前缀，因为这些前缀完全取决于外部消息代理。 有关使用的代理的信息，请参见 STOMP 文档页面，以查看其对目的地标头支持的约定。</p><p>另一方面，“简单代理”确实依赖于已配置的 <code>PathMatcher</code>，因此，如果切换分隔符，该更改也将应用于代理，以及代理将目的地从消息匹配到订阅中的模式的方式。</p><h3 id="_4-4-12-身份验证" tabindex="-1"><a class="header-anchor" href="#_4-4-12-身份验证" aria-hidden="true">#</a> 4.4.12. 身份验证</h3><p>每个通过 WebSocket 进行的 STOMP 消息传递会话均以 HTTP 请求开头。 这可以是升级到 WebSockets 的请求（即 WebSocket 握手），或者在 SockJS 回退的情况下，可以是一系列 SockJS HTTP 传输请求。</p><p>许多 Web 应用程序已经具有身份验证和授权来保护 HTTP 请求。 通常，使用某种机制（例如：登录页面、HTTP 基本认证或其他方式）通过 Spring Security 对用户进行认证。 经过身份验证的用户的安全性上下文保存在 HTTP 会话中，并与同一基于 cookie 的会话中的后续请求相关联。</p><p>因此，对于 WebSocket 握手或 SockJS HTTP 传输请求，通常已经有一个可以通过 <code>HttpServletRequest#getUserPrincipal()</code> 访问的经过身份验证的用户。 Spring 会自动将该用户与为其创建的 WebSocket 或 SockJS 会话相关联，并随后与通过该用户标头在该会话上传输的所有 STOMP 消息相关联。</p><p>简而言之，一个典型的 Web 应用程序除了已经为安全性做的事情之外，不需要做任何其他事情。 通过基于 cookie 的 HTTP 会话（然后与为该用户创建的 WebSocket 或 SockJS 会话相关联）维护的安全上下文在 HTTP 请求级别对用户进行身份验证，并导致在流经应用程序的每个 <code>Message</code> 上加盖用户标头。</p><p>请注意，STOMP 协议在 <code>CONNECT</code> 帧上确实具有 <code>login</code> 与 <code>passcode</code> 标头。 它们最初是为 TCP 设计的，现在仍然需要它们，例如：基于 TCP 的 STOMP。 但是，对于基于 WebSocket 的 STOMP，默认情况下，Spring 会忽略 STOMP 协议级别的授权标头，假定用户已经在 HTTP 传输级别进行了身份验证，并期望 WebSocket 或 SockJS 会话包含已通过身份验证的用户。</p>`,28),Jn={class:"custom-container tip"},Pn=e("p",{class:"custom-container-title"},"TIP",-1),Hn={href:"https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#websocket",target:"_blank",rel:"noopener noreferrer"},yn=e("code",null,"ChannelInterceptor",-1),En={href:"https://docs.spring.io/spring-session/docs/current/reference/html5/#websocket",target:"_blank",rel:"noopener noreferrer"},On=e("h3",{id:"_4-4-13-令牌-token-验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-4-13-令牌-token-验证","aria-hidden":"true"},"#"),n(" 4.4.13. 令牌（Token）验证")],-1),Bn={href:"https://github.com/spring-projects/spring-security-oauth",target:"_blank",rel:"noopener noreferrer"},An=e("p",null,"同时，基于 cookie 的会话并非总是最合适的（例如，在不维护服务端会话的应用程序中或在通常使用标头进行身份验证的移动应用程序中）。",-1),Ln={href:"https://tools.ietf.org/html/rfc6455#section-10.5",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://github.com/sockjs/sockjs-client/issues/196",target:"_blank",rel:"noopener noreferrer"},In=r(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>前述限制适用于基于浏览器的客户端，不适用于基于 Spring Java 的 STOMP 客户端，该客户端确实支持通过 WebSocket 与 SockJS 请求发送标头。</p></div><p>因此，希望避免使用 cookie 的应用程序可能没有在 HTTP 协议级别进行身份验证的任何好的替代方案。 他们可能更喜欢在 STOMP 消息传递协议级别使用标头进行身份验证，而不是使用 cookie。 这样做需要两个简单的步骤：</p><ol><li><p>使用 STOMP 客户端在连接时传递身份验证标头。</p></li><li><p>使用 <code>ChannelInterceptor</code> 处理身份验证标头。</p></li></ol><p>下一个示例使用服务器端配置来注册自定义身份验证拦截器。 请注意，拦截器仅需要认证并在 CONNECT <code>Message</code> 上设置用户标头。 Spring 记录并保存经过身份验证的用户，并将其与同一会话上的后续 STOMP 消息相关联。 以下示例展示了如何注册自定义身份验证拦截器：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class MyConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message&lt;?&gt; preSend(Message&lt;?&gt; message, MessageChannel channel) {
                StompHeaderAccessor accessor =
                        MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
                if (StompCommand.CONNECT.equals(accessor.getCommand())) {
                    Authentication user = ... ; // access authentication header(s)
                    accessor.setUser(user);
                }
                return message;
            }
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，请注意，目前，当使用 Spring Security 的消息授权时，需要确保在 Spring Security 之前订阅了 <code>ChannelInterceptor</code> 身份验证配置。 最好通过在其自己的 <code>WebSocketMessageBrokerConfigurer</code> 实现中声明自定义拦截器来完成，该实现用 <code>@Order(Ordered.HIGHEST_PRECEDENCE + 99)</code> 标记。</p><h3 id="_4-4-14-用户目的地" tabindex="-1"><a class="header-anchor" href="#_4-4-14-用户目的地" aria-hidden="true">#</a> 4.4.14. 用户目的地</h3><p>应用程序可以发送针对特定用户的消息，并且 Spring 的 STOMP 支持可以识别以 <code>/user/</code> 为前缀的目的地。 例如，客户端可能订阅了 <code>/user/queue/position-updates</code> 目的地。 该目的地由 <code>UserDestinationMessageHandler</code> 处理，并转换为用户会话唯一的目的地（例如 <code>/queue/position-updates-user123</code>）。 这提供了订阅通用命名目的地的便利，同时确保与订阅相同目的地的其他用户不发生冲突，以便每个用户都可以接收唯一的持仓更新。</p><p>在发送方，可以将消息发送到一个目的地，例如 <code>/user/{username}/queue/position-updates</code>，然后将其由 <code>UserDestinationMessageHandler</code> 转换为一个或多个目的地，每个与用户关联的会话一个目的地。 这样，应用程序中的任何组件都可以发送针对特定用户的消息，而不必知道他们的姓名与通用目的地。 注解与消息传递模板也支持此特性。</p><p>消息处理方法可以通过 <code>@SendToUser</code> 注解将消息发送给与正在处理的消息相关联的用户（在类级上也支持共享公共目标），如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class PortfolioController {

    @MessageMapping(&quot;/trade&quot;)
    @SendToUser(&quot;/queue/position-updates&quot;)
    public TradeResult executeTrade(Trade trade, Principal principal) {
        // ...
        return tradeResult;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户具有多个会话，那么默认情况下，所有订阅给定目标的会话都将成为目的地。 但是，有时可能仅需要将发送正在处理的消息的会话作为目的地。 可以通过将 <code>broadcast</code> 属性设置为 <code>false</code> 来做到这一点，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class MyController {

    @MessageMapping(&quot;/action&quot;)
    public void handleAction() throws Exception{
        // raise MyBusinessException here
    }

    @MessageExceptionHandler
    @SendToUser(destinations=&quot;/queue/errors&quot;, broadcast=false)
    public ApplicationError handleException(MyBusinessException exception) {
        // ...
        return appError;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>尽管用户目的地通常暗指经过身份验证的用户，但这并不是严格要求的。 与已认证用户不关联的 WebSocket 会话可以订阅用户目的地。 在这种情况下，<code>@SendToUser</code> 注解的行为与 <code>broadcast=false</code> 完全相同（也就是说，仅针对发送正在处理的消息的会话）。</p></div><p>可以从任何应用程序组件向用户目的地发送消息，例如，注入由 Java 配置或 XML 命名空间创建的 <code>SimpMessagingTemplate</code>。 （如果需要使用 <code>@Qualifier</code> 进行限定，那么 bean 名称为 <code>brokerMessagingTemplate</code>。） 下面的示例演示了如何执行此操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Service
public class TradeServiceImpl implements TradeService {

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public TradeServiceImpl(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    // ...

    public void afterTradeExecuted(Trade trade) {
        this.messagingTemplate.convertAndSendToUser(
                trade.getUserName(), &quot;/queue/position-updates&quot;, trade.getResult());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),Xn={class:"custom-container tip"},jn=e("p",{class:"custom-container-title"},"TIP",-1),Nn=e("code",null,"/exchange/amq.direct/position-updates",-1),Dn=e("code",null,"/user/exchange/amq.direct/position-updates",-1),Fn={href:"https://activemq.apache.org/delete-inactive-destinations.html",target:"_blank",rel:"noopener noreferrer"},Un=r(`<p>在多应用程序服务器方案中，由于用户连接到其他服务器，因此用户目的地可能无法解析。 在这种情况下，可以配置目的地以广播未解决的消息，以便其他服务器可以尝试。 这可以通过 Java 配置中 <code>MessageBrokerRegistry</code> 的 <code>userDestinationBroadcast</code> 属性以及 XML 中 <code>message-broker</code> 元素的 <code>user-destination-broadcast</code> 属性来完成。</p><h3 id="_4-4-15-消息顺序" tabindex="-1"><a class="header-anchor" href="#_4-4-15-消息顺序" aria-hidden="true">#</a> 4.4.15. 消息顺序</h3><p>来自代理的消息被发布到 <code>clientOutboundChannel</code>，从那里被写入 WebSocket 会话。 由于该通道由 <code>ThreadPoolExecutor</code> 支持，因此消息在不同的线程中处理，并且客户端接收到的结果序列可能与发布的确切顺序不匹配。</p><p>如果这是一个问题，请启用 <code>setPreservePublishOrder</code> 标志，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class MyConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    protected void configureMessageBroker(MessageBrokerRegistry registry) {
        // ...
        registry.setPreservePublishOrder(true);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker preserve-publish-order=&quot;true&quot;&gt;
        &lt;!-- ... --&gt;
    &lt;/websocket:message-broker&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置该标志后，同一客户端会话中的消息将一次一个地发布到 <code>clientOutboundChannel</code>，这样可以保证发布顺序。 请注意，这会产生较小的性能开销，因此，只有在需要时启用它。</p><h3 id="_4-4-16-事件" tabindex="-1"><a class="header-anchor" href="#_4-4-16-事件" aria-hidden="true">#</a> 4.4.16. 事件</h3><p>几个 <code>ApplicationContext</code> 事件被发布，并且可以通过实现 Spring 的 <code>ApplicationListener</code> 接口来接收：</p><ul><li><p><code>BrokerAvailabilityEvent</code>： 指示代理何时可用或不可用。 虽然“简单”代理在启动时立即可用，并在应用程序运行时保持可用，但 STOMP“代理中继”可能会失去与全功能代理的连接（例如，重新启动代理）。 代理中继具有重新连接逻辑，并在代理返回时重新建立与代理的“系统”连接。 结果，只要状态从已连接变为断开，就会发布此事件，反之亦然。 使用 <code>SimpMessagingTemplate</code> 的组件应订阅此事件，并避免在代理不可用时发送消息。 在任何情况下，当发送消息时，都应该准备好处理 <code>MessageDeliveryException</code>。</p></li><li><p><code>SessionConnectEvent</code>： 在收到新的 STOMP CONNECT 帧时发布，以指示新的客户端会话的开始。 该事件包含代表连接的消息，包括：会话 ID、用户信息（如果有）与客户端发送的所有自定义标头。 这对于跟踪客户端会话很有用。 订阅此事件的组件可以使用 <code>SimpMessageHeaderAccessor</code> 或 <code>StompMessageHeaderAccessor</code> 包装包含的消息。</p></li><li><p><code>SessionConnectedEvent</code>： 当代理发送了一个 STOMP CONNECTED 帧来响应 CONNECT 时，在 <code>SessionConnectEvent</code> 之后不久发布。 此时，可以认为 STOMP 会话已完全建立。</p></li><li><p><code>SessionSubscribeEvent</code>： 在收到新的 STOMP SUBSCRIBE 帧时发布。</p></li><li><p><code>SessionUnsubscribeEvent</code>： 在收到新的 STOMP UNSUBSCRIBE 帧时发布。</p></li><li><p><code>SessionDisconnectEvent</code>： 在 STOMP 会话结束时发布。 DISCONNECT 帧可能是从客户端发送的，也可能是在 WebSocket 会话关闭时自动生成的。 在某些情况下，这个事件在每个会话中发布不止一次。 组件对于多个断开连接事件应该是幂等的。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当使用全功能代理时，如果代理暂时不可用，那么 STOMP“代理中继”会自动重新连接“系统”连接。 但是，客户端连接不会自动重新连接。 假设启用了心跳，那么客户端通常会注意到代理在 10 秒内没有响应。 客户需要实现自己的重新连接逻辑。</p></div><h3 id="_4-4-17-拦截" tabindex="-1"><a class="header-anchor" href="#_4-4-17-拦截" aria-hidden="true">#</a> 4.4.17. 拦截</h3><p><a href="#_4-4-16-%E4%BA%8B%E4%BB%B6">事件</a>提供有关 STOMP 连接生命周期的通知，但不提供每条客户端消息的通知。 应用程序还可以注册一个 <code>ChannelInterceptor</code> 来拦截处理链中任何部分的任何消息。 以下示例展示了如何拦截来自客户端的入站消息：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new MyChannelInterceptor());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义 <code>ChannelInterceptor</code> 可以使用 <code>StompHeaderAccessor</code> 或 <code>SimpMessageHeaderAccessor</code> 访问相关消息的信息，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyChannelInterceptor implements ChannelInterceptor {

    @Override
    public Message&lt;?&gt; preSend(Message&lt;?&gt; message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        StompCommand command = accessor.getStompCommand();
        // ...
        return message;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用程序还可以实现 <code>ExecutorChannelInterceptor</code>，它是 <code>ChannelInterceptor</code> 的子接口，在处理消息的线程中具有回调。 对于发送到频道的每个消息，<code>ChannelInterceptor</code> 都会被一次调用，但 <code>ExecutorChannelInterceptor</code> 会在订阅来自该频道的消息的每个 <code>MessageHandler</code> 的线程中都提供钩子。</p><p>请注意，与前面所述的 <code>SessionDisconnectEvent</code> 一样，DISCONNECT 消息可以来自客户端，也可以在 WebSocket 会话关闭时自动生成。 在某些情况下，对于每个会话，拦截器可能会多次拦截此消息。 组件对于多个断开连接事件应该是幂等的。</p><h3 id="_4-4-18-stomp-客户端" tabindex="-1"><a class="header-anchor" href="#_4-4-18-stomp-客户端" aria-hidden="true">#</a> 4.4.18. STOMP 客户端</h3><p>Spring 提供了 WebSocket 客户端与 TCP 客户端。</p><p>首先，可以创建并配置 <code>WebSocketStompClient</code>，如下面的示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>WebSocketClient webSocketClient = new StandardWebSocketClient();
WebSocketStompClient stompClient = new WebSocketStompClient(webSocketClient);
stompClient.setMessageConverter(new StringMessageConverter());
stompClient.setTaskScheduler(taskScheduler); // for heartbeats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),Vn=e("code",null,"SockJsClient",-1),Gn=e("code",null,"StandardWebSocketClient",-1),zn=e("code",null,"WebSocketClient",-1),Yn=e("code",null,"SockJsClient",-1),Qn={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#websocket-fallback-sockjs-client",target:"_blank",rel:"noopener noreferrer"},Kn=r(`<p>接下来，可以建立连接并为 STOMP 会话提供处理程序，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String url = &quot;ws://127.0.0.1:8080/endpoint&quot;;
StompSessionHandler sessionHandler = new MyStompSessionHandler();
stompClient.connect(url, sessionHandler);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当会话准备好使用时，将通知处理程序，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyStompSessionHandler extends StompSessionHandlerAdapter {

    @Override
    public void afterConnected(StompSession session, StompHeaders connectedHeaders) {
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦建立会话，就可以发送任何有效负载，并使用配置的 <code>MessageConverter</code> 对其进行序列化，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>session.send(&quot;/topic/something&quot;, &quot;payload&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以订阅目的地。 <code>subscribe</code> 方法需要一个用于订阅中消息的处理程序，并返回可用于取消订阅的 <code>Subscription</code> 句柄。 对于每个收到的消息，处理程序可以指定应将有效负载反序列化到的目标对象类型，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>session.subscribe(&quot;/topic/something&quot;, new StompFrameHandler() {

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return String.class;
    }

    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
        // ...
    }

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要启用 STOMP 心跳，可以使用 <code>TaskScheduler</code> 配置 <code>WebSocketStompClient</code> 并有选择地自定义心跳间隔（10 秒未写发送心跳，10 秒未读关闭连接）。</p><p><code>WebSocketStompClient</code> 仅在不活动的情况下（即未发送其他消息时）发送心跳。 使用外部代理时，这可能会带来挑战，因为带有非代理目的地的消息表示活动，但实际上不会转发到代理。 在这种情况下，可以在初始化<a href="#_4-4-9-%E5%A4%96%E9%83%A8%E4%BB%A3%E7%90%86">外部代理</a>时配置 <code>TaskScheduler</code>，以确保即使仅发送具有非代理目标的消息，也可以将心跳转发到代理。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当使用 <code>WebSocketStompClient</code> 进行性能测试，以模拟同一台计算机上的数千个客户端时，请考虑关闭心跳，因为每个连接都计划自己的心跳任务，并且并未针对在同一台计算机上运行的大量客户端进行优化。</p></div><p>STOMP 协议还支持收据，客户端必须在其中添加一个 <code>receipt</code> 标头，在发送或订阅处理之后，服务器以 RECEIPT 帧作为响应标头。 为此，<code>StompSession</code> 提供了 <code>setAutoReceipt(boolean)</code>，它会在每个后续发送或订阅事件上添加一个 <code>receipt</code> 报头。 或者，也可以手动将收据标头添加到 <code>StompHeaders</code>。 发送与订阅都返回一个 <code>Receiptable</code> 实例，可以使用该实例注册接收成功与失败的回调。 要使用此特性，必须为客户端配置 <code>TaskScheduler</code> 以及收据过期之前的时间（默认为 15 秒）。</p><p>请注意，<code>StompSessionHandler</code> 本身是一个 <code>StompFrameHandler</code>，它除了处理来自消息处理的异常的 <code>handleException</code> 回调与处理包括 <code>ConnectionLostException</code> 的传输级错误的 <code>handleTransportError</code> 之外，还可以处理 ERROR 帧。</p><h3 id="_4-4-19-websocket-作用域" tabindex="-1"><a class="header-anchor" href="#_4-4-19-websocket-作用域" aria-hidden="true">#</a> 4.4.19. WebSocket 作用域</h3><p>每个 WebSocket 会话都有一个属性映射。 该映射作为标头附加到入站客户端消息，可以通过控制器方法进行访问，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Controller
public class MyController {

    @MessageMapping(&quot;/action&quot;)
    public void handle(SimpMessageHeaderAccessor headerAccessor) {
        Map&lt;String, Object&gt; attrs = headerAccessor.getSessionAttributes();
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 <code>websocket</code> 作用域内声明一个 Spring 托管的 Bean。 可以将 WebSocket 作用域的 Bean 注入控制器以及在 <code>clientInboundChannel</code> 上注册的任何通道拦截器中。 这些都是典型的单例对象，并且比任何单独的 WebSocket 会话寿命更长。 因此，需要对作用域 WebSocket 的 Bean 使用作用域代理模式，如以下示例所示：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Component
@Scope(scopeName = &quot;websocket&quot;, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class MyBean {

    @PostConstruct
    public void init() {
        // 注入依赖项后调用
    }

    // ...

    @PreDestroy
    public void destroy() {
        // WebSocket 会话结束时调用
    }
}

@Controller
public class MyController {

    private final MyBean myBean;

    @Autowired
    public MyController(MyBean myBean) {
        this.myBean = myBean;
    }

    @MessageMapping(&quot;/action&quot;)
    public void handle() {
        // 当前 WebSocket 会话中的 this.myBean
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与任何自定义范围一样，Spring 首次在控制器中对其进行访问时会初始化一个新的 <code>MyBean</code> 实例，并将该实例存储在 WebSocket 会话属性中。 随后将返回相同的实例，直到会话结束。 WebSocket 作用域的 Bean 调用了所有 Spring 生命周期方法，如前面的示例所示。</p><h3 id="_4-4-20-性能" tabindex="-1"><a class="header-anchor" href="#_4-4-20-性能" aria-hidden="true">#</a> 4.4.20. 性能</h3><p>关于性能，没有万灵药。 影响它的因素很多，包括消息的大小与数量，应用程序方法是否执行需要阻止的工作以及外部因素（例如网络速度与其他问题）。 本部分的目的是提供可用配置选项的概述，以及有关如何进行扩展的一些想法。</p><p>在消息传递应用程序中，消息通过频道传递以进行异步执行，并由线程池支持。 配置这样的应用程序需要对频道与消息流有充分的了解。 因此，建议查看<a href="#_4-4-5-%E6%B6%88%E6%81%AF%E6%B5%81">消息流</a>。</p><p>最明显的起点是配置支持 <code>clientInboundChannel</code> 与 <code>clientOutboundChannel</code> 的线程池。 默认情况下，两者都配置为可用处理器数量的两倍。</p><p>如果带注解的方法中的消息处理主要是受 CPU 限制的，那么 <code>clientInboundChannel</code> 的线程数应保持接近处理器数。 如果它们所做的工作更多地受到 IO 限制，并且需要阻塞或等待数据库或其他外部系统，那么可能需要增加线程池大小。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>ThreadPoolExecutor</code> 具有三个重要属性：核心线程池大小、最大线程池大小以及队列存储没有可用线程的任务的容量。</p><p>常见的混淆点是，配置核心池大小（例如 10）与最大池大小（例如 20）会导致线程池具有 10 到 20 个线程。 实际上，如果将容量保留为其默认值 Integer.MAX_VALUE，那么由于所有其他任务都已排队，因此线程池永远不会超过核心池的大小。</p><p>请参阅 <code>ThreadPoolExecutor</code> 的 JavaDoc，以了解这些属性如何工作并了解各种排队策略。</p></div><p>在 <code>clientOutboundChannel</code> 方面，所有关于向 WebSocket 客户端发送消息。 如果客户端位于快速网络上，那么线程数应保持接近可用处理器数。 如果客户端很慢或带宽很低，那么将花费更长的时间来消耗消息并给线程池增加负担。 因此，必须增加线程池的大小。</p><p>虽然 <code>clientInboundChannel</code> 的工作量可以预测——毕竟，它是基于应用程序的工作——但是，如何配置“clientOutboundChannel”却比较困难，因为它基于应用程序无法控制的因素。 因此，还有两个与消息发送有关的属性：<code>sendTimeLimit</code> 与 <code>sendBufferSizeLimit</code>。 可以使用这些方法来配置发送消息到客户端时允许发送多长时间以及可以缓冲多少数据。</p><p>通常的想法是，在任何给定时间，只能使用单个线程将其发送给客户端。 同时，所有其他消息都将被缓冲，可以使用这些属性来决定允许发送消息花费多长时间以及在此期间可以缓冲多少数据。 有关其他重要信息，请参见 XML 模式的 JavaDoc 与文档。</p><p>以下示例展示了可能的配置：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registration) {
        registration.setSendTimeLimit(15 * 1000).setSendBufferSizeLimit(512 * 1024);
    }

    // ...

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker&gt;
        &lt;websocket:transport send-timeout=&quot;15000&quot; send-buffer-size=&quot;524288&quot; /&gt;
        &lt;!-- ... --&gt;
    &lt;/websocket:message-broker&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),Zn={href:"https://github.com/JSteunou/webstomp-client",target:"_blank",rel:"noopener noreferrer"},$n=r(`<p>Spring 的 STOMP-over-WebSocket 支持可以做到这一点，因此应用程序可以为 STOMP 消息配置最大大小，而与 WebSocket 服务器特定的消息大小无关。 请记住，如有必要，将自动调整 WebSocket 消息的大小，以确保它们最多可以承载 16K WebSocket 消息。</p><p>以下示例展示了一种可能的配置：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registration) {
        registration.setMessageSizeLimit(128 * 1024);
    }

    // ...

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例展示与前面的示例等效的 XML 配置：</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:websocket=&quot;http://www.springframework.org/schema/websocket&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/websocket
        https://www.springframework.org/schema/websocket/spring-websocket.xsd&quot;&gt;

    &lt;websocket:message-broker&gt;
        &lt;websocket:transport message-size=&quot;131072&quot; /&gt;
        &lt;!-- ... --&gt;
    &lt;/websocket:message-broker&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于扩展的重要一点涉及使用多个应用程序实例。 当前，不能使用简单的代理来做到这一点。 但是，当使用全功能代理（例如 RabbitMQ）时，每个应用程序实例都连接到代理，并且从一个应用程序实例广播的消息可以通过代理广播到通过任何其他应用程序实例连接的 WebSocket 客户端。</p><h3 id="_4-4-21-监控" tabindex="-1"><a class="header-anchor" href="#_4-4-21-监控" aria-hidden="true">#</a> 4.4.21. 监控</h3><p>当使用 <code>@EnableWebSocketMessageBroker</code> 或 <code>&lt;websocket:message-broker&gt;</code> 时，关键基础结构组件会自动收集统计信息与计数器，这些统计信息与计数器可提供对应用程序内部状态的重要了解。 该配置还声明了一个 <code>WebSocketMessageBrokerStats</code> 类型的 Bean，该 Bean 将所有可用信息收集到一个位置，并且默认情况下每 30 分钟在 <code>INFO</code> 级别记录一次。 该 Bean 可以通过 Spring 的 <code>MBeanExporter</code> 导出到 JMX，以便在运行时查看（例如，通过 JDK 的 <code>jconsole</code>）。 以下列表总结了可用的信息：</p><ul><li><strong>Client WebSocket Sessions</strong><ul><li><strong>Current</strong> 指示当前有多少个客户端会话，计数进一步分解为 WebSocket、HTTP 流与轮询 SockJS 会话。</li><li><strong>Total</strong> 指示已建立的会话总数。</li><li><strong>Abnormally Closed</strong><ul><li><strong>Connect Failures</strong> 已建立但在 60 秒内未收到任何消息后关闭的会话。 这通常表示代理或网络问题。</li><li><strong>Send Limit Exceeded</strong> 超过配置的发送超时或发送缓冲区限制后，会话将关闭，缓慢的客户端可能会发生该会话（请参阅上一节）。</li><li><strong>Transport Errors</strong> 传输错误（例如无法读取或写入 WebSocket 连接或 HTTP 请求或响应）后，会话关闭。</li></ul></li><li><strong>STOMP Frames</strong> 已处理的 CONNECT、CONNECTED 与 DISCONNECT 帧的总数，指示在 STOMP 级别上连接了多少个客户端。 请注意，当会话异常关闭或客户端未发送 DISCONNECT 帧而关闭时，DISCONNECT 计数可能会偏低。</li></ul></li><li><strong>STOMP Broker Relay</strong><ul><li><strong>TCP Connections</strong> 指示与代理建立了代表客户端 WebSocket 会话的 TCP 连接数。 这应该等于客户端 WebSocket 会话的数量 +1 个用于从应用程序内部发送消息的附加共享“系统”连接。</li><li><strong>STOMP Frames</strong> 代表客户转发到代理或从代理接收的 CONNECT、CONNECTED 与 DISCONNECT 帧的总数。 请注意，无论客户端 WebSocket 会话如何关闭，DISCONNECT 帧都会发送到代理。 因此，偏低的 DISCONNECT 帧计数表示代理正在主动关闭连接（可能是由于未及时到达的心跳、无效的输入帧或其他问题）。</li></ul></li><li><strong>Client Inbound Channel</strong> 来自支持 <code>clientInboundChannel</code> 的线程池的统计信息，可深入了解传入消息处理的运行状况。 此处排队的任务表明该应用程序可能太慢而无法处理消息。 如果存在 I/O 绑定的任务（例如：缓慢的数据库查询、对第三方 REST API 的 HTTP 请求等），请考虑增加线程池的大小。</li><li><strong>Client Outbound Channel</strong> 来自支持 <code>clientOutboundChannel</code> 的线程池的统计信息，该统计信息提供了对向客户端广播消息的运行状况的深入了解。 此处排队的任务表明客户端太慢而无法消费消息。 解决此问题的一种方法是增加线程池大小，以容纳并发慢速客户端的预期数量。 另一个选择是减少发送超时与发送缓冲区大小限制（请参阅上一节）。</li><li><strong>SockJS Task Scheduler</strong> 来自 SockJS 任务调度程序的线程池的统计信息，用于发送心跳。 请注意，在 STOMP 级别协商心跳时，将禁用 SockJS 心跳。</li></ul><h3 id="_4-4-22-测试" tabindex="-1"><a class="header-anchor" href="#_4-4-22-测试" aria-hidden="true">#</a> 4.4.22. 测试</h3><p>当使用 Spring 的 STOMP-over-WebSocket 支持时，主要有两种方法来测试应用程序。 第一种是编写服务端测试，以验证控制器及其带注解的消息处理方法的功能性。 第二种是编写涉及运行客户端与服务端的完整的端到端测试。</p><p>两种方法不是互斥的。 相反，每一种都在整体测试策略中占有一席之地。 服务端测试更加集中，更易于编写和维护。 另一方面，端到端集成测试，更完整并且测试更多，但也更涉及到编写与维护。</p><p>服务端测试的最简单形式是编写控制器单元测试。 但是，这还不够有用，因为控制器所做的很多事情都取决于其注释。 纯单元测试根本无法测试。</p><p>理想情况下，应该像在运行时那样调用被测控制器，就像使用 Spring MVC Test 框架测试处理 HTTP 请求的控制器的方法一样，即不运行 Servlet 容器而是依靠 Spring 框架来调用被测控制器。 带注解的控制器。 与 Spring MVC Test 一样，有两种可能的选择，要么使用“基于上下文的”设置，要么使用“独立的”设置：</p><ul><li><p>在 Spring TestContext 框架的帮助下加载实际的 Spring 配置，将 <code>clientInboundChannel</code> 注入为测试字段，并使用它发送消息以由控制器方法处理。</p></li><li><p>手动设置调用控制器（即 <code>SimpAnnotationMethodMessageHandler</code>）所需的最小 Spring 框架基础设施，并将控制器的消息直接传递给它。</p></li></ul>`,15),ei={href:"https://github.com/rstoyanchev/spring-websocket-portfolio/tree/master/src/test/java/org/springframework/samples/portfolio/web",target:"_blank",rel:"noopener noreferrer"},ni={href:"https://github.com/rstoyanchev/spring-websocket-portfolio/tree/master/src/test/java/org/springframework/samples/portfolio/web",target:"_blank",rel:"noopener noreferrer"};function ii(si,ri){const i=o("ExternalLinkIcon");return d(),t("div",null,[u,e("p",null,[e("a",p,[n("WebFlux"),s(i)])]),b,m,e("p",null,[n("WebSocket 协议 "),e("a",g,[n("RFC 6455"),s(i)]),n(" 提供了一种标准化方法，可通过单个 TCP 连接在客户端与服务端之间建立全双工双向通信通道。 它是与 HTTP 不同的 TCP 协议，但旨在通过端口 80 与 443 在 HTTP 上工作，并允许重复使用现有的防火墙规则。")]),h,e("p",null,[e("a",S,[n("WebFlux"),s(i)])]),k,w,e("p",null,[e("a",f,[n("WebFlux"),s(i)])]),_,e("p",null,[n("前面的示例用于 Spring MVC 应用程序，应该包含在 "),e("a",M,[T,s(i)]),n(" 的配置中。 但是，Spring 的 WebSocket 支持不依赖于 Spring MVC。 在 "),e("a",q,[C,s(i)]),n(" 的帮助下将 "),x,n(" 集成到其他 HTTP 服务环境中相对简单。")]),W,e("p",null,[e("a",J,[n("WebFlux"),s(i)])]),P,e("div",H,[y,e("p",null,[n("已经创建了克服 Java WebSocket API 中的上述限制的请求，可以在 "),e("a",E,[n("eclipse-ee4j/websocket-api#211"),s(i)]),n(" 中进行跟踪。 Tomcat、Undertow 与 WebSphere 提供了自己的 API 替代方案，使之可以做到这一点，而 Jetty 也可以实现。 我们希望更多的服务端可以做到这一点。")])]),O,e("p",null,[e("a",B,[n("WebFlux"),s(i)])]),A,e("p",null,[e("a",L,[n("WebFlux"),s(i)])]),e("p",null,[n("从 Spring Framework 4.1.5 开始，WebSocket 与 SockJS 的默认行为是仅接受同源请求。 也可以允许所有或指定的来源列表。 此检查主要用于浏览器客户端。 没有任何措施可以阻止其他类型的客户端修改 "),R,n(" 标头值（有关更多详细信息，请参阅 "),e("a",I,[n("RFC 6454: Web 源概念"),s(i)]),n("）。")]),X,e("ul",null,[e("li",null,[e("p",null,[e("a",j,[n("SockJS 协议"),s(i)]),n("以可执行 "),e("a",N,[n("叙述性测试"),s(i)]),n(" 的形式定义。")])]),e("li",null,[e("p",null,[e("a",D,[n("SockJS JavaScript 客户端"),s(i)]),n("——一种在浏览器中使用的客户端库。")])]),F,U]),e("p",null,[n("SockJS 设计用于浏览器。 它使用多种技术来支持各种浏览器版本。 有关 SockJS 传输类型与浏览器的完整列表，请参见 "),e("a",V,[n("SockJS 客户端"),s(i)]),n("页面。 传输分为三大类：WebSocket、HTTP 流与 HTTP 长轮询。 有关这些类别的概述，请参阅"),e("a",G,[n("此博客文章"),s(i)]),n("。")]),z,e("p",null,[n("要了解更多信息，请在浏览器中运行示例并查看 HTTP 请求。 SockJS 客户端允许修复传输列表，因此可以一次查看每个传输。 SockJS 客户端还提供了调试标志，该标志可在浏览器控制台中支持有用的消息。 在服务端，可以为 "),Y,n(" 启用 "),Q,n(" 日志记录。 有关更多详细信息，请参见 SockJS 协议"),e("a",K,[n("叙述测试"),s(i)]),n("。")]),Z,e("p",null,[n("前面的示例用于 Spring MVC 应用程序，应该包含在 "),e("a",$,[ee,s(i)]),n(" 的配置中。 但是，Spring 的 WebSocket 支持不依赖于 Spring MVC。 在 "),e("a",ne,[ie,s(i)]),n(" 的帮助下将 "),se,n(" 集成到其他 HTTP 服务环境中相对简单。")]),e("p",null,[n("在浏览器端，应用程序可以使用 "),e("a",re,[ae,s(i)]),n("（版本 1.0.x）。 它模拟 W3C WebSocket API，并与服务端通信以选择最佳的传输选项，具体取决于运行它的浏览器。 请参阅 "),e("a",oe,[n("sockjs-client"),s(i)]),n(" 页面与浏览器支持的传输类型列表。 客户端还提供了几个配置选项，例如用于指定要包含的传输。")]),de,te,e("p",null,[n("SockJS 客户端通过使用 Microsoft 的 "),e("a",le,[ce,s(i)]),n(" 在 IE 8 与 9 中支持 Ajax/XHR 流。 跨域有效，但不支持发送 Cookie。 Cookies 对于 Java 应用程序通常是必不可少的。 但是，由于 SockJS 客户端可用于多种服务端类型（而不仅仅是 Java 类型），因此它需要知道 cookie 是否重要。 如果是这样，那么 SockJS 客户端更倾向 Ajax/XHR 进行流传输。 否则，它依赖于基于 iframe 的技术。")]),ve,e("p",null,[n("如果确实使用基于 iframe 的传输，请记住，可以通过将 HTTP 响应标头 "),ue,n(" 设置为 "),pe,n("、"),be,n(" 或 "),me,n(" 来指示浏览器阻止在给定页面上使用 iframe。 这用于防止"),e("a",ge,[n("点击劫持"),s(i)]),n("。")]),e("div",he,[Se,ke,e("p",null,[n("有关如何配置 "),we,n(" 标头设置的详细信息，请参见 Spring Security 文档的"),e("a",fe,[n("默认安全标头"),s(i)]),n("。 也可以查看 "),e("a",_e,[n("SEC-2501"),s(i)]),n(" 以获取更多背景信息。")])]),Me,e("div",Te,[qe,e("p",null,[n("在初始开发过程中，请启用 SockJS 客户端开发模式，以防止浏览器缓存本应缓存的 SockJS 请求（如 iframe）。 有关如何启用它的详细信息，请参见 "),e("a",Ce,[n("SockJS 客户端"),s(i)]),n(" 页面。")])]),xe,e("p",null,[n("SockJS 协议要求服务端发送心跳消息，以防止代理断定连接挂起。 Spring SockJS 配置具有一个名为 "),We,n(" 的属性，可用于自定义频率。 默认情况下，假设没有其他消息在该连接上发送，那么心跳将在 25 秒后发送。 这个 25 秒的值符合以下对公共互联网应用程序的 "),e("a",Je,[n("IETF 建议"),s(i)]),n("。")]),Pe,He,ye,e("p",null,[n("HTTP 流与 HTTP 长轮询 SockJS 传输要求连接保持打开的时间比平常更长。 有关这些技术的概述，请参见"),e("a",Ee,[n("此博客文章"),s(i)]),n("。")]),Oe,e("p",null,[n("一个特定的问题是，Servlet API 不会为已离开的客户端提供通知。 请参阅 "),e("a",Be,[n("eclipse-ee4j/servlet-api#44"),s(i)]),n("。 但是，Servlet 容器在随后尝试写入响应时会引发异常。 由于 Spring 的 SockJS 服务支持服务端发送的心跳信号（默认情况下，每 25 秒发送一次），这意味着通常会在该时间段内（如果消息发送频率更高将更早）检测到客户端断开连接。")]),Ae,e("p",null,[e("a",Le,[n("STOMP"),s(i)]),n("（面向简单文本的消息传递协议）最初是为脚本语言（例如：Ruby、Python 与 Perl）创建的，以连接到企业消息代理。 它旨在解决常用消息传递模式的最小子集。 STOMP 可以在任何可靠的双向流网络协议上使用，例如 TCP 与 WebSocket。 尽管 STOMP 是面向文本的协议，但是消息有效负载可以是文本或二进制。")]),Re,e("p",null,[n("前面的概述旨在提供对 STOMP 协议的最基本的了解。 建议全面阅读协议 "),e("a",Ie,[n("规范"),s(i)]),n("。")]),Xe,je,e("ul",null,[Ne,e("li",null,[e("p",null,[n("可以使用 STOMP 客户端，包括 Spring Framework 中的 "),e("a",De,[n("Java 客户端"),s(i)]),n("。")])]),Fe,Ue,Ve]),Ge,e("p",null,[n("要从浏览器连接 SockJS，可以使用 "),e("a",ze,[Ye,s(i)]),n("。 对于 STOMP，许多应用程序都使用了 "),e("a",Qe,[n("jmesnil/stomp-websocket"),s(i)]),n(" 库（也称为 stomp.js），该库功能齐全，已在生产中使用多年，但不再维护。 目前，"),e("a",Ke,[n("JSteunou/webstomp-client"),s(i)]),n(" 是该库中最活跃且发展最快的后继程序。 以下示例代码基于此：")]),Ze,e("ul",null,[e("li",null,[e("p",null,[e("a",$e,[n("使用 WebSocket 构建交互式 Web 应用程序"),s(i)]),n("——入门指南。")])]),e("li",null,[e("p",null,[e("a",en,[n("Stock Portfolio"),s(i)]),n("——一个示例应用程序。")])])]),nn,e("p",null,[sn,n(" 模块包含对起源于 "),e("a",rn,[n("Spring Integration"),s(i)]),n(" 的消息传递应用程序的基础支持，后来被提取并合并到 Spring Framework 中，以在许多 Spring 项目与应用程序场景中更广泛地使用。 下面的列表简要描述了一些可用的消息传递抽象：")]),e("ul",null,[e("li",null,[e("p",null,[e("a",an,[n("Message"),s(i)]),n("： 消息的简单表示，包括标题和有效负载。")])]),e("li",null,[e("p",null,[e("a",on,[n("MessageHandler"),s(i)]),n("： 处理消息的契约。")])]),e("li",null,[e("p",null,[e("a",dn,[n("MessageChannel"),s(i)]),n("： 发送消息的契约，这使消息在生产者和消费者之间的松耦合成为可能。")])]),e("li",null,[e("p",null,[e("a",tn,[n("SubscribableChannel"),s(i)]),n("： 带有 "),ln,n(" 订阅者的 "),cn,n("。")])]),e("li",null,[e("p",null,[e("a",vn,[n("ExecutorSubscribableChannel"),s(i)]),n("： 使用 "),un,n(" 传递消息的 "),pn,n("。")])])]),bn,e("ol",null,[e("li",null,[e("p",null,[n("客户端连接到 "),e("a",mn,[n("http://localhost:8080/portfolio"),s(i)]),n("，一旦建立了 WebSocket 连接，STOMP 帧就开始在其上流动。")])]),gn]),hn,e("p",null,[n("通常，"),Sn,n(" 方法适用于声明它们的 "),kn,n(" 类（或类层次结构）。 如果希望此类方法在全局范围内（跨控制器）应用，那么可以在标有 "),wn,n(" 的类中声明它们。 这与 Spring MVC 中可用的"),e("a",fn,[n("类似支持"),s(i)]),n("相当。")]),_n,e("p",null,[n("请参阅 STOMP 文档以了解选择的消息代理（例如 "),e("a",Mn,[n("RabbitMQ"),s(i)]),n("、"),e("a",Tn,[n("ActiveMQ"),s(i)]),n(" 与其它），安装代理，并在启用 STOMP 支持的情况下运行它。 然后，可以在 Spring 配置中启用 STOMP 代理中继（而不是简单代理）。")]),qn,e("p",null,[n("先前配置中的 STOMP 代理中继是一个 Spring "),e("a",Cn,[xn,s(i)]),n("，它通过将消息转发到外部消息代理来处理消息。 为此，它建立到代理的 TCP 连接，将所有消息转发给代理，然后通过客户端的 WebSocket 会话将从代理收到的所有消息转发给客户端。 本质上，它充当双向转发消息的“中继”。")]),Wn,e("div",Jn,[Pn,e("p",null,[n("Spring Security 提供了 "),e("a",Hn,[n("WebSocket 子协议授权"),s(i)]),n("，该授权使用 "),yn,n(" 来基于消息中的用户标头对消息进行授权。 而且，Spring Session 提供了 "),e("a",En,[n("WebSocket 集成"),s(i)]),n("，以确保当 WebSocket 会话仍处于活动状态时，用户 HTTP 会话不会过期。")])]),On,e("p",null,[e("a",Bn,[n("Spring Security OAuth"),s(i)]),n(" 支持基于令牌的安全支持，包括 JSON Web 令牌（JWT）。 可以将其用作 Web 应用程序中的身份验证机制，包括上一节中所述的 WebAPI 交互中的 STOMP（即通过基于 cookie 的会话维护身份）。")]),An,e("p",null,[e("a",Ln,[n("WebSocket 协议 RFC 6455"),s(i)]),n("中“在 WebSocket 握手过程中，服务端没有指定任何特定的方式来验证客户端。” 然而，在实践中，浏览器客户端只能使用标准的身份验证标头（即基本 HTTP 身份验证）或 cookie，而不能（例如）提供自定义的标头。 同样，SockJS JavaScript 客户端也不提供通过 SockJS 传输请求发送 HTTP 标头的方法。 请参阅 "),e("a",Rn,[n("sockjs-client 问题 196"),s(i)]),n("。 相反，它确实允许发送可用于发送令牌的查询参数，但是有其自身的缺点（例如，令牌可能会无意中与服务器日志中的 URL 一起记录）。")]),In,e("div",Xn,[jn,e("p",null,[n("将用户目标与外部消息代理一起使用时，应查看代理文档以了解如何管理非活动队列，以便在用户会话结束时，将删除所有唯一的用户队列。 例如，当使用诸如 "),Nn,n(" 之类的目的地时，RabbitMQ 会创建自动删除队列。 因此，在这种情况下，客户端可以订阅 "),Dn,n("。 同样，ActiveMQ 具有用于清除非活动目标的"),e("a",Fn,[n("配置选项"),s(i)]),n("。")])]),Un,e("p",null,[n("在前面的示例中，可以用 "),Vn,n(" 替换 "),Gn,n("，因为这也是 "),zn,n(" 的实现。 "),Yn,n(" 可以使用 WebSocket 传输或回退基于 HTTP 传输。 有关更多详细信息，请参见 "),e("a",Qn,[n("SockJsClient"),s(i)]),n("。")]),Kn,e("p",null,[n("还可以使用前面显示的 WebSocket 传输配置来配置传入 STOMP 消息的最大允许大小。 从理论上讲，WebSocket 消息的大小几乎是无限的。 实际上，WebSocket 服务端会施加限制，例如：Tomcat 8K 与 Jetty 64K。 因此，STOMP 客户端（例如 JavaScript "),e("a",Zn,[n("webstomp-client"),s(i)]),n(" 等）在 16K 边界处拆分较大的 STOMP 消息，并将其作为多个 WebSocket 消息发送，这需要服务器进行缓冲与重新组装。")]),$n,e("p",null,[n("在 "),e("a",ei,[n("tests for the stock portfolio"),s(i)]),n(" 示例应用中演示了这两种设置方案。")]),e("p",null,[n("第二种方法是创建端到端集成测试。 为此，需要以嵌入式模式运行 WebSocket 服务器，并将其作为 WebSocket 客户端连接到该服务器，该客户端发送包含 STOMP 帧的 WebSocket 消息。 在 "),e("a",ni,[n("tests for the stock portfolio"),s(i)]),n(" 示例应用中，还通过将 Tomcat 用作嵌入式 WebSocket 服务器与用于测试目的的简单 STOMP 客户端来演示此方法。")])])}const oi=a(v,[["render",ii],["__file","4.WebSockets.html.vue"]]);export{oi as default};
