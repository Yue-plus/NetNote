import{_ as l,r as d,o as c,c as r,a,b as e,d as n,e as i}from"./app-ab31641a.js";const t={},o=i(`<h1 id="samba-服务" tabindex="-1"><a class="header-anchor" href="#samba-服务" aria-hidden="true">#</a> Samba 服务</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> samba samba-client <span class="token comment"># 安装</span>
<span class="token function">sudo</span> systemctl start smb.service <span class="token comment"># 启动</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> smb.service <span class="token comment"># 开机启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="本地配置" tabindex="-1"><a class="header-anchor" href="#本地配置" aria-hidden="true">#</a> 本地配置</h3><ol><li><p>创建本地用户帐户</p><ul><li><p>临时切换到 root 账号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加 Linux 主机用户组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> samba
<span class="token function">groupadd</span> jwc
<span class="token function">groupadd</span> zsb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加 Linux 主机用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-g</span> samba <span class="token parameter variable">-s</span> /sbin/nologin smb
<span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-g</span> jwc <span class="token parameter variable">-G</span> samba <span class="token parameter variable">-s</span> /sbin/nologin cici
<span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-g</span> jwc <span class="token parameter variable">-G</span> samba <span class="token parameter variable">-s</span> /sbin/nologin vega
<span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-g</span> zsb <span class="token parameter variable">-G</span> samba <span class="token parameter variable">-s</span> /sbin/nologin lily
<span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-g</span> zsb <span class="token parameter variable">-G</span> samba <span class="token parameter variable">-s</span> /sbin/nologin lisa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将账户添加到 Samba 数据库；密码设为 <code>2020Netw@rk</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>smbpasswd <span class="token parameter variable">-a</span> smb
smbpasswd <span class="token parameter variable">-a</span> cici
smbpasswd <span class="token parameter variable">-a</span> vega
smbpasswd <span class="token parameter variable">-a</span> lily
smbpasswd <span class="token parameter variable">-a</span> lisa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>建立共享目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /share/public /share/jwc /share/zsb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改共享目录组权限：</p><ul><li><p>修改文件夹所有组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chgrp</span> <span class="token parameter variable">-R</span> samba /share/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改文件夹权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">2775</span> /share/public/
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">2770</span> /share/jwc/ /share/zsb/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="samba-配置" tabindex="-1"><a class="header-anchor" href="#samba-配置" aria-hidden="true">#</a> Samba 配置</h3><ol><li><p>备份配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/samba/
<span class="token function">sudo</span> <span class="token function">mv</span> smb.conf smb.conf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新建配置文件</p><ul><li><p>在 <code>/etc/samba/</code> 目录下新建 <code>smb.conf</code> 文件内容如下：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[global]
        workgroup = WORKGROUP
        security = user
        include = /etc/samba/%G.smb.conf

        passdb backend = tdbsam

[public]
        comment = 公共文件夹
        path = /share/public
        public = yes
        read only = yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>/etc/samba/</code> 目录下新建 <code>jwc.smb.conf</code> 文件内容如下：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[jwc]
      comment = 教务处
      path = /share/jwc
      browseable = yes
      vaild users = @jwc
      write list = @jwc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>/etc/samba/</code> 目录下新建 <code>zsb.smb.conf</code> 文件内容如下：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[zsb]
        comment = 招生办
        path = /share/zsb
        browseable = yes
        vaild users = @zsb
        write list = @zsb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>重启 Samba 服务使配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart smb.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,8),p=a("p",null,"参考：",-1),u=a("li",null,[e("可以使用 "),a("code",null,"man smb.conf"),e(" 指令查看详细配置方法")],-1),b={href:"https://wiki.samba.org/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"},v={href:"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server",target:"_blank",rel:"noopener noreferrer"},m={href:"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_Windows_ACLs",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/kevingrace/p/8662088.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/fatt/p/5856892.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://linux.vbird.org/linux_basic/0410accountmanager.php",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><ul><li><p>在用户目录下建立一个 <code>putTest.txt</code> 测试文件</p></li><li><p>使用以下指令查看服务器资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> <span class="token string">&#39;&lt;用户名&gt;&#39;</span>%<span class="token string">&#39;&lt;密码&gt;&#39;</span> <span class="token parameter variable">-L</span> //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用以下指令访问目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> <span class="token string">&#39;&lt;用户名&gt;&#39;</span>%<span class="token string">&#39;&lt;密码&gt;&#39;</span> //127.0.0.1/<span class="token string">&#39;&lt;目录&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>smb</code>（普通用户）用户测试：</p><ul><li><p>只能看见 <code>public</code> 文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> smb%2020Netw@rk <span class="token parameter variable">-L</span> //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> yueplus 的密码：

	Sharename       Type      Comment
	---------       ----      -------
	public          Disk      公共文件夹
	IPC$            IPC       IPC Service <span class="token punctuation">(</span>Samba <span class="token number">4.10</span>.4<span class="token punctuation">)</span>
Reconnecting with SMB1 <span class="token keyword">for</span> workgroup listing.

	Server               Comment
	---------            -------

	Workgroup            Master
	---------            -------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试上传文件：</p><p>连接 <code>public</code> 文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> smb%2020Netw@rk //127.0.0.1/public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>试图上传文件（没有权限所以上传失败，测试成功）：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>smb: \\&gt; put putTest.txt 
NT_STATUS_ACCESS_DENIED opening remote file \\putTest.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>cici</code>（<code>jwc</code> 组）用户测试：</p><ul><li><p>能看见 <code>public</code> 与 <code>jwc</code> 文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> cici%2020Netw@rk <span class="token parameter variable">-L</span> //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	Sharename       Type      Comment
 	---------       ----      -------
 	public          Disk      公共文件夹
 	IPC$            IPC       IPC Service <span class="token punctuation">(</span>Samba <span class="token number">4.10</span>.4<span class="token punctuation">)</span>
 	jwc             Disk      教务处
 Reconnecting with SMB1 <span class="token keyword">for</span> workgroup listing.
 
 	Server               Comment
 	---------            -------
 
 	Workgroup            Master
 	---------            -------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试上传文件：</p><p>连接 <code>jwc</code> 文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient <span class="token parameter variable">-U</span> cici%2020Netw@rk //127.0.0.1/jwc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上传文件测试：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>smb: \\&gt; put putTest.txt 
putting file putTest.txt as \\putTest.txt (0.0 kb/s) (average 0.0 kb/s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>ls</code> 指令查看当前目录文件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>smb: \\&gt; ls
  .                                   D        0  Wed Sep  2 19:41:56 2020
  ..                                  D        0  Sun Aug 30 16:22:03 2020
  putTest.txt                         A        0  Wed Sep  2 19:41:56 2020

		52403200 blocks of size 1024. 48121024 blocks available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>使用 <code>lily</code> 或 <code>lisa</code> 重复以上测试（测试 <code>zsb</code> 组）</p></li></ul>`,2);function _(x,w){const s=d("ExternalLinkIcon");return c(),r("div",null,[o,a("blockquote",null,[p,a("ul",null,[u,a("li",null,[a("a",b,[e("Smaba Wiki (en)"),n(s)]),a("ul",null,[a("li",null,[a("a",v,[e("将 Samba 设置为独立服务器 (en)"),n(s)])]),a("li",null,[a("a",m,[e("使用 Windows ACL 设置共享 (en)"),n(s)])])])]),a("li",null,[a("a",h,[e("Samba服务的配置总结 - 散尽浮华 - 博客园"),n(s)])]),a("li",null,[a("a",g,[e("Linux Samba服务主配文件smb.conf中文详解"),n(s)])]),a("li",null,[a("a",k,[e("鳥哥的 Linux 私房菜 -- 第十三章、Linux 帳號管理與 ACL 權限設定"),n(s)])])])]),f])}const y=l(t,[["render",_],["__file","index.html.vue"]]);export{y as default};
