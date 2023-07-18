import{_ as s,r as d,o as c,c as r,a as e,b as i,d as n,e as o}from"./app-ab31641a.js";const a="/assets/see_windows_version-80e15470.jpg",t="/assets/see_windows_HV-7ead7b5c.jpg",u="/assets/docker_desktop-543f7e3e.jpg",v={},m=e("h1",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),i(" Docker")],-1),p={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"TIP",-1),h=e("p",null,"Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。 容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。",-1),k={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#教程","aria-hidden":"true"},"#"),i(" 教程")],-1),w=e("iframe",{src:"//player.bilibili.com/player.html?aid=838132893&bvid=BV1og4y1q7M4&cid=191591478&page=2",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),D={href:"https://www.runoob.com/docker/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.runoob.com/docker/docker-install-redis.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.w3cschool.cn/docker/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.w3cschool.cn/reqsgr/",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),i(" 安装")],-1),C={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),i(" Windows")],-1),q={href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"首先，确保满足先决条件：",-1),P=e("strong",null,"- Windows 10 64 位 专业版、企业版、教育版",-1),T=e("img",{src:a,alt:"查看 Windows 版本"},null,-1),O=e("li",null,[e("s",null,"Yue_plus：“如果是家庭版建议重装系统”"),i(),e("code",null,"→_→")],-1),G={href:"https://docs.docker.com/docker-for-windows/install-windows-home/",target:"_blank",rel:"noopener noreferrer"},R=e("li",null,[e("strong",null,"已开启 Windows 虚拟化"),e("img",{src:t,alt:"查看是否开启虚拟化"})],-1),A={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},E=e("abbr",{title:"适用于 Linux 的 Windows 子系统"},"WSL",-1),U={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package",target:"_blank",rel:"noopener noreferrer"},L=o(`<div class="language-ps line-numbers-mode" data-ext="ps"><pre class="language-ps"><code>wsl --set-default-version 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后重启计算机即可。</p><p><strong>安装完成：</strong><img src="`+u+'" alt="主界面"></p><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> <code>Dockerfile</code></h2>',4),W={class:"custom-container tip"},B=e("p",{class:"custom-container-title"},"TIP",-1),V=e("p",null,"Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。",-1),H={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"Dockerfile",-1),K={href:"https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"Dockerfile",-1),Y={href:"https://www.runoob.com/docker/docker-dockerfile.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.w3cschool.cn/reqsgr/redknozt.html",target:"_blank",rel:"noopener noreferrer"},Q=e("h2",{id:"常用命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用命令","aria-hidden":"true"},"#"),i(" 常用命令")],-1),Z={href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"},J=o(`<blockquote><p>可以使用 <kbd>Ctrl</kbd> + <kbd>F</kbd> 在页面中快速搜索</p></blockquote><h3 id="docker-version" tabindex="-1"><a class="header-anchor" href="#docker-version" aria-hidden="true">#</a> <code>docker version</code></h3><p>查看 Docker 版本</p><details class="custom-container details"><summary>示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Client: Docker Engine - Community
 Cloud integration: <span class="token number">1.0</span>.7
 Version:           <span class="token number">20.10</span>.2
 API version:       <span class="token number">1.41</span>
 Go version:        go1.13.15
 Git commit:        2291f61
 Built:             Mon Dec <span class="token number">28</span> <span class="token number">16</span>:14:16 <span class="token number">2020</span>
 OS/Arch:           windows/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.2
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.13.15
  Git commit:       8891c58
  Built:            Mon Dec <span class="token number">28</span> <span class="token number">16</span>:15:28 <span class="token number">2020</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.4</span>.3
  GitCommit:        269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc:
  Version:          <span class="token number">1.0</span>.0-rc92
  GitCommit:        ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="docker-info" tabindex="-1"><a class="header-anchor" href="#docker-info" aria-hidden="true">#</a> <code>docker info</code></h3><p>查看 Docker 的系统信息</p><details class="custom-container details"><summary>示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Client:
 Context:    default
 Debug Mode: <span class="token boolean">false</span>
 Plugins:
  app: Docker App <span class="token punctuation">(</span>Docker Inc., v0.9.1-beta3<span class="token punctuation">)</span>
  buildx: Build with BuildKit <span class="token punctuation">(</span>Docker Inc., v0.5.1-docker<span class="token punctuation">)</span>
  scan: Docker Scan <span class="token punctuation">(</span>Docker Inc., v0.5.0<span class="token punctuation">)</span>

Server:
 Containers: <span class="token number">1</span>
  Running: <span class="token number">1</span>
  Paused: <span class="token number">0</span>
  Stopped: <span class="token number">0</span>
 Images: <span class="token number">1</span>
 Server Version: <span class="token number">20.10</span>.2
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: <span class="token boolean">true</span>
  Native Overlay Diff: <span class="token boolean">true</span>
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: <span class="token number">1</span>
 Plugins:
  Volume: <span class="token builtin class-name">local</span>
  Network: bridge <span class="token function">host</span> ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file <span class="token builtin class-name">local</span> logentries splunk syslog
 Swarm: inactive
 Runtimes: runc io.containerd.runc.v2 io.containerd.runtime.v1.linux
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc version: ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 init version: de40ad0
 Security Options:
  seccomp
   Profile: default
 Kernel Version: <span class="token number">5.4</span>.72-microsoft-standard-WSL2
 Operating System: Docker Desktop
 OSType: linux
 Architecture: x86_64
 CPUs: <span class="token number">8</span>
 Total Memory: <span class="token number">6</span>.126GiB
 Name: docker-desktop
 ID: GEVB:2QBS:GAWG:ZFNQ:7ITG:VHFB:MP2G:CKI4:7RTO:2E2M:H6SH:KQKO
 Docker Root Dir: /var/lib/docker
 Debug Mode: <span class="token boolean">false</span>
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: <span class="token boolean">false</span>
 Insecure Registries:
  <span class="token number">127.0</span>.0.0/8
 Live Restore Enabled: <span class="token boolean">false</span>

WARNING: No blkio weight support
WARNING: No blkio weight_device support
WARNING: No blkio throttle.read_bps_device support
WARNING: No blkio throttle.write_bps_device support
WARNING: No blkio throttle.read_iops_device support
WARNING: No blkio throttle.write_iops_device support
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="docker-命令-help" tabindex="-1"><a class="header-anchor" href="#docker-命令-help" aria-hidden="true">#</a> <code>docker &lt;命令&gt; --help</code></h3><p>查看 Docker 命令帮助</p><details class="custom-container details"><summary>示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default
                           &quot;C:\\\\Users\\\\Yue_plus\\\\.docker&quot;)
  -c, --context string     Name of the context to use to connect to the
                           daemon (overrides DOCKER_HOST env var and
                           default context set with &quot;docker context use&quot;)
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level
                           (&quot;debug&quot;|&quot;info&quot;|&quot;warn&quot;|&quot;error&quot;|&quot;fatal&quot;)
                           (default &quot;info&quot;)
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default
                           &quot;C:\\\\Users\\\\Yue_plus\\\\.docker\\\\ca.pem&quot;)
      --tlscert string     Path to TLS certificate file (default
                           &quot;C:\\\\Users\\\\Yue_plus\\\\.docker\\\\cert.pem&quot;)
      --tlskey string      Path to TLS key file (default
                           &quot;C:\\\\Users\\\\Yue_plus\\\\.docker\\\\key.pem&quot;)
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  app*        Docker App (Docker Inc., v0.9.1-beta3)
  builder     Manage builds
  buildx*     Build with BuildKit (Docker Inc., v0.5.1-docker)
  config      Manage Docker configs
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  scan*       Docker Scan (Docker Inc., v0.5.0)
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container&#39;s changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container&#39;s filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container&#39;s filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run &#39;docker COMMAND --help&#39; for more information on a command.

To get more help with docker, check out our guides at https://docs.docker.com/go/guides/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="docker-search" tabindex="-1"><a class="header-anchor" href="#docker-search" aria-hidden="true">#</a> <code>docker search</code></h3>`,11),X={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},$=o('<p>语法：<code>docker search [OPTIONS] TERM</code></p><p>选项：</p><ul><li><code>--filter , -f</code><ul><li>根据提供的条件过滤输出</li></ul></li><li><code>--format</code><ul><li>使用Go模板进行漂亮的打印搜索</li></ul></li><li><code>--limit</code><ul><li>默认为 <code>25</code></li><li>最多搜索结果数</li></ul></li><li><code>--no-trunc</code><ul><li>不截断输出</li></ul></li></ul><h3 id="docker-pull" tabindex="-1"><a class="header-anchor" href="#docker-pull" aria-hidden="true">#</a> <code>docker pull</code></h3><p>从仓库拉取镜像。</p><p>语法：<code>docker pull [OPTIONS] NAME[:TAG|@DIGEST]</code></p>',6),ee={href:"https://docs.docker.com/engine/reference/commandline/pull/",target:"_blank",rel:"noopener noreferrer"},ie=o('<p>选项：</p><ul><li><code>--all-tags , -a</code><ul><li>下载仓库中所有标记的镜像</li></ul></li><li><code>--disable-content-trust</code><ul><li>默认为：<code>true</code></li><li>跳过镜像验证</li></ul></li><li><code>--platform</code><ul><li><code>1.32+</code> 可用</li><li>如果服务器支持多平台，则设置平台</li></ul></li><li><code>--quiet , -q</code><ul><li>禁止详细输出</li></ul></li></ul><h3 id="docker-run" tabindex="-1"><a class="header-anchor" href="#docker-run" aria-hidden="true">#</a> <code>docker run</code></h3><p>在新容器中运行命令。</p><p>语法：<code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</code></p>',5),le={href:"https://docs.docker.com/engine/reference/commandline/run/",target:"_blank",rel:"noopener noreferrer"},ne=o('<p>选项：</p><ul><li><code>--add-host</code><ul><li>添加自定义主机到 IP 映射（主机：ip）</li></ul></li><li><code>--attach , -a</code><ul><li>连接到 STDIN、STDOUT 或 STDERR</li></ul></li><li><code>--blkio-weight</code><ul><li>块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）</li></ul></li><li><code>--blkio-weight-device</code><ul><li>块 IO 权重（相对设备重量）</li></ul></li><li><code>--cap-add</code><ul><li>添加 Linux 功能</li></ul></li><li><code>--cap-drop</code><ul><li>放弃 Linux 功能</li></ul></li><li><code>--cgroup-parent</code><ul><li>容器的可选父 cgroup</li></ul></li><li>`--cgroupns <ul><li><code>1.41+</code> 可用</li><li>要使用的 C组命名空间（主机|私有）&quot;主机&quot;： 在 Docker 主机的 cgroup 命名空间&quot;私有&quot;中运行容器： 在其自己的专用 cgroup 命名空间中运行容器&#39;： 使用由守护程序上的默认 cgroupns 模式选项配置的 cgroup 命名空间（默认）</li></ul></li><li><code>--cidfile</code><ul><li>将容器 ID 写入文件</li></ul></li><li><code>--cpu-count</code><ul><li>CPU 计数（仅窗口）</li></ul></li><li><code>--cpu-percent</code><ul><li>CPU 百分比（仅窗口）</li></ul></li><li><code>--cpu-period</code><ul><li>限制 CPU CFS（完全公平的调度程序）周期</li></ul></li><li><code>--cpu-quota</code><ul><li>限制 CPU CFS（完全公平的调度程序）配额</li></ul></li><li><code>--cpu-rt-period</code><ul><li><code>1.25+</code> 可用</li><li>以微秒为单位限制 CPU 实时周期</li></ul></li><li><code>--cpu-rt-runtime</code><ul><li><code>1.25+</code> 可用</li><li>以微秒为单位限制 CPU 实时运行时间</li></ul></li><li><code>--cpu-shares , -c</code><ul><li>CPU 共享（相对权重）</li></ul></li><li><code>--cpus</code><ul><li><code>1.25+</code> 可用</li><li>CPU 数量</li></ul></li><li><code>--cpuset-cpus</code><ul><li>允许执行的 CPU （0-3， 0，1）</li></ul></li><li><code>--cpuset-mems</code><ul><li>允许执行的 MEM （0-3， 0，1）</li></ul></li><li><code>--detach , -d</code><ul><li>在后台运行容器并打印容器 ID</li></ul></li><li><code>--detach-keys</code><ul><li>覆盖分离容器的键序列</li></ul></li><li><code>--device</code><ul><li>将主机设备添加到容器</li></ul></li><li><code>--device-cgroup-rule</code><ul><li>将规则添加到 cGroup 允许的设备列表</li></ul></li><li><code>--device-read-bps</code><ul><li>限制设备读取速率（字节/秒）</li></ul></li><li><code>--device-read-iops</code><ul><li>限制设备读取速率（IO/秒）</li></ul></li><li><code>--device-write-bps</code><ul><li>将写入速率（字节/秒）限制为设备</li></ul></li><li><code>--device-write-iops</code><ul><li>将写入速率（IO/秒）限制为设备</li></ul></li><li><code>--disable-content-trust</code><ul><li>默认为：<code>true</code></li><li>跳过镜像验证</li></ul></li><li><code>--dns</code><ul><li>设置自定义 DNS 服务器</li></ul></li><li><code>--dns-opt</code><ul><li>设置 DNS 选项</li></ul></li><li><code>--dns-option</code><ul><li>设置 DNS 选项</li></ul></li><li><code>--dns-search</code><ul><li>设置自定义 DNS 搜索域</li></ul></li><li><code>--domainname</code><ul><li>容器 NIS 域名</li></ul></li><li><code>--entrypoint</code><ul><li>覆盖图像的默认入口点</li></ul></li><li><code>--env , -e</code><ul><li>设置环境变量</li></ul></li><li><code>--env-file</code><ul><li>在环境变量文件中读取</li></ul></li><li><code>--expose</code><ul><li>暴露端口或一系列端口</li></ul></li><li><code>--gpus</code><ul><li><code>1.40+</code> 可用</li><li>要添加到容器的 GPU 设备（&quot;全部&quot;通过所有 GPU）</li></ul></li><li><code>--group-add</code><ul><li>添加要加入的其他组</li></ul></li><li><code>--health-cmd</code><ul><li>命令运行以检查运行状况</li></ul></li><li><code>--health-interval</code><ul><li>运行检查之间的时间（ms | s | h）（默认 0s）</li></ul></li><li><code>--health-retries</code><ul><li>报告不正常行为所需的连续故障</li></ul></li><li><code>--health-start-period</code><ul><li><code>1.29+</code> 可用</li><li>容器的开始周期在开始运行状况重倒数之前初始化（ms | s | h）（默认 0s）</li></ul></li><li><code>--health-timeout</code><ul><li>允许运行一次检查的最大时间（ms | s | h）（默认 0s）</li></ul></li><li><code>--help</code><ul><li>输出帮助</li></ul></li><li><code>--hostname , -h</code><ul><li>容器主机名</li></ul></li><li><code>--init</code><ul><li><code>1.25+</code> 可用</li><li>在容器内运行一个 init，该容器转发信号并收获进程</li></ul></li><li><code>--interactive , -i</code><ul><li>即使未连接，也保持 STDIN 打开</li></ul></li><li><code>--io-maxbandwidth</code><ul><li>系统驱动器的最大 IO 带宽限制（仅窗口）</li></ul></li><li><code>--io-maxiops</code><ul><li>系统驱动器的最大 IOps 限制（仅 Windows）</li></ul></li><li><code>--ip</code><ul><li>IPv4 地址（例如：<code>172.30.100.104</code>）</li></ul></li><li><code>--ip6</code><ul><li>IPv6 地址（例如：<code>2001:db8::33</code>）</li></ul></li><li><code>--ipc</code><ul><li>要使用的 IPC 模式</li></ul></li><li><code>--isolation</code><ul><li>容器隔离技术</li></ul></li><li><code>--kernel-memory</code><ul><li>内核内存限制</li></ul></li><li><code>--label , -l</code><ul><li>在容器上设置元数据</li></ul></li><li><code>--label-file</code><ul><li>在标签的行分隔文件中读取</li></ul></li><li><code>--link</code><ul><li>将链接添加到另一个容器</li></ul></li><li><code>--link-local-ip</code><ul><li>容器 IPv4/IPv6 链路本地地址</li></ul></li><li><code>--log-driver</code><ul><li>容器的日志记录驱动程序</li></ul></li><li><code>--log-opt</code><ul><li>日志驱动程序选项</li></ul></li><li><code>--mac-address</code><ul><li>容器 MAC 地址（例如：<code>92:d0:c6:0a:29:33</code>）</li></ul></li><li><code>--memory , -m</code><ul><li>内存限制</li></ul></li><li><code>--memory-reservation</code><ul><li>内存软限制</li></ul></li><li><code>--memory-swap</code><ul><li>交换限制等于内存加交换：&#39;-1&#39;，支持无限制交换</li></ul></li><li><code>--memory-swappiness</code><ul><li>默认为：<code>-1</code></li><li>调整容器内存交换（0 到 100）</li></ul></li><li><code>--mount</code><ul><li>将文件系统装载附加到容器</li></ul></li><li><code>--name</code><ul><li>为容器分配名称</li></ul></li><li><code>--net</code><ul><li>将容器连接到网络</li></ul></li><li><code>--net-alias</code><ul><li>为容器添加网络范围别名</li></ul></li><li><code>--network</code><ul><li>将容器连接到网络</li></ul></li><li><code>--network-alias</code><ul><li>为容器添加网络范围别名</li></ul></li><li><code>--no-healthcheck</code><ul><li>禁用任何容器指定的运行状况检查</li></ul></li><li><code>--oom-kill-disable</code><ul><li>禁用 OOM 杀手</li></ul></li><li><code>--oom-score-adj</code><ul><li>调整主机的 OOM 首选项 （-1000 到 1000）</li></ul></li><li><code>--pid</code><ul><li>要使用的 PID 命名空间</li></ul></li><li><code>--pids-limit</code><ul><li>调整容器皮斯限制（设置为 -1 无限制）</li></ul></li><li><code>--platform</code><ul><li><code>1.32+</code> 可用</li><li>设置平台，如果服务器是多平台功能</li></ul></li><li><code>--privileged</code><ul><li>向此容器授予扩展权限</li></ul></li><li><code>--publish , -p</code><ul><li>将容器的端口发布到主机</li></ul></li><li><code>--publish-all , -P</code><ul><li>将所有公开端口发布到随机端口</li></ul></li><li><code>--pull missing</code><ul><li>运行前拉图像（&quot;始终&quot;|&quot;缺少&quot;|&quot;从不&quot;）</li></ul></li><li><code>--read-only</code><ul><li>将容器的根文件系统装载为只读</li></ul></li><li><code>--restart no</code><ul><li>重新启动策略，在容器退出时应用</li></ul></li><li><code>--rm</code><ul><li>容器退出时自动移除容器</li></ul></li><li><code>--runtime</code><ul><li>用于此容器的运行时</li></ul></li><li><code>--security-opt</code><ul><li>安全选项</li></ul></li><li><code>--shm-size</code><ul><li>大小 /开发/shm</li></ul></li><li><code>--sig-proxy</code><ul><li>默认为 <code>true</code></li><li>代理接收到进程的信号</li></ul></li><li><code>--stop-signal</code><ul><li>SIGTERM 停止容器的信号</li></ul></li><li><code>--stop-timeout</code><ul><li><code>1.25+</code> 可用</li><li>停止容器的超时（以秒为单位）</li></ul></li><li><code>--storage-opt</code><ul><li>容器的存储驱动程序选项</li></ul></li><li><code>--sysctl</code><ul><li>Sysctl 选项</li></ul></li><li><code>--tmpfs</code><ul><li>装载 tmpfs 目录</li></ul></li><li><code>--tty , -t</code><ul><li>分配伪 TTY</li></ul></li><li><code>--ulimit</code><ul><li>极限选项</li></ul></li><li><code>--user , -u</code><ul><li>用户名或 UID（格式：<code>&lt;name|uid&gt;[:&lt;group|gid&gt;]</code>）</li></ul></li><li><code>--userns</code><ul><li>要使用的用户名空间</li></ul></li><li><code>--uts</code><ul><li>要使用的 UTS 命名空间</li></ul></li><li><code>--volume , -v</code><ul><li>绑定装载卷</li></ul></li><li><code>--volume-driver</code><ul><li>容器的可选卷驱动程序</li></ul></li><li><code>--volumes-from</code><ul><li>从指定的容器中装载卷</li></ul></li><li><code>--workdir , -w</code><ul><li>容器内的工作目录</li></ul></li></ul><h3 id="docker-exec" tabindex="-1"><a class="header-anchor" href="#docker-exec" aria-hidden="true">#</a> <code>docker exec</code></h3><p>在正在运行的容器中执行命令。</p><p>语法：<code>docker exec [OPTIONS] CONTAINER COMMAND [ARG...]</code></p>',5),oe={href:"https://docs.docker.com/engine/reference/commandline/exec/",target:"_blank",rel:"noopener noreferrer"},se=o("<p>选项：</p><ul><li><code>--detach , -d</code><ul><li>分离模式：在后台运行命令</li></ul></li><li><code>--detach-keys</code><ul><li>覆盖分离容器的键序列</li></ul></li><li><code>--env , -e</code><ul><li><code>1.25+</code> 以上可用</li><li>设置环境变量</li></ul></li><li><code>--env-file</code><ul><li><code>1.25+</code> 以上可用</li><li>在环境变量文件中读取</li></ul></li><li><code>--interactive , -i</code><ul><li>即使未连接，也保持 STDIN 打开</li></ul></li><li><code>--privileged</code><ul><li>向命令授予扩展权限</li></ul></li><li><code>--tty , -t</code><ul><li>分配伪 TTY</li></ul></li><li><code>--user , -u</code><ul><li>用户名或 UID（格式：<code>&lt;name|uid&gt;[:&lt;group|gid&gt;]</code>）</li></ul></li><li><code>--workdir , -w</code><ul><li><code>1.35+</code> 以上可用</li><li>容器内的工作目录</li></ul></li></ul>",2);function de(ce,re){const l=d("ExternalLinkIcon");return c(),r("div",null,[m,e("div",p,[b,h,e("p",null,[e("a",k,[i("Docker 官网"),n(l)]),e("a",g,[i("Docker 官方文档"),n(l)]),e("a",f,[i("Docker Hub"),n(l)])])]),_,w,e("ul",null,[e("li",null,[e("a",D,[i("Docker 教程 | 菜鸟教程"),n(l)]),e("ul",null,[e("li",null,[e("a",x,[i("Docker 安装 Redis | 菜鸟教程"),n(l)])])])]),e("li",null,[e("a",y,[i("Docker 教程 | w3cschool"),n(l)])]),e("li",null,[e("a",S,[i("Docker 从入门到实践 | w3cschool"),n(l)])])]),I,e("p",null,[i("推荐参考官方文档："),e("a",C,[i("安装 Docker 引擎（英文）"),n(l)])]),N,e("p",null,[i("推荐参考官方文档 "),e("a",q,[i("在 Windows 上安装 Docker Desktop（英文）"),n(l)])]),M,e("ul",null,[e("li",null,[P,T,e("blockquote",null,[e("ul",null,[O,e("li",null,[e("a",G,[i("在 Windows 10 家庭版上安装 Docker Hub（英文）"),n(l)])])])])]),R]),e("p",null,[i("然后，"),e("a",A,[i("从官网下载 Docker Desktop 安装包"),n(l)])]),e("p",null,[i("安装时会自动打开 Windows 功能——虚拟机平台，如果勾选了 "),E,i(" 可能会要求安装 "),e("a",U,[i("适用于 x64 计算机的 WSL2 Linux 内核更新包"),n(l)]),i(" 下载安装后在 PowerShell 中使用以下指令将 WSL2 设为默认：")]),L,e("div",W,[B,V,e("p",null,[i("官方文档： "),e("a",H,[j,i(" 文档（英文）"),n(l)]),e("a",K,[F,i(" 最佳实践（英文）"),n(l)])])]),e("ul",null,[e("li",null,[e("a",Y,[i("Dockerfile | 菜鸟教程"),n(l)])]),e("li",null,[e("a",z,[i("Dockerfile基本结构 | w3cschool"),n(l)])])]),Q,e("p",null,[i("可以在官网找到 "),e("a",Z,[i("所有命令"),n(l)])]),J,e("p",null,[i("在 "),e("a",X,[i("Docker Hub"),n(l)]),i(" 上搜索镜像。")]),$,e("blockquote",null,[e("p",null,[e("a",ee,[i("参考官网手册"),n(l)])])]),ie,e("blockquote",null,[e("p",null,[e("a",le,[i("参考官方手册"),n(l)])])]),ne,e("blockquote",null,[e("p",null,[e("a",oe,[i("参考官网手册"),n(l)])])]),se])}const te=s(v,[["render",de],["__file","index.html.vue"]]);export{te as default};
