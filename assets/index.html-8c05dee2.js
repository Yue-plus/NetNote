import{_ as t,r as i,o as p,c,a as n,b as s,d as e,e as l}from"./app-ab31641a.js";const o={},u=n("h1",{id:"ca-证书颁发机构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ca-证书颁发机构","aria-hidden":"true"},"#"),s(" CA（证书颁发机构）")],-1),r=n("h2",{id:"链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),s(" 链接")],-1),d={href:"https://baike.baidu.com/item/CA%E8%AF%81%E4%B9%A6/10028741?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/26859843",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/bigdevilking/p/9434444.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="安装-openssl" tabindex="-1"><a class="header-anchor" href="#安装-openssl" aria-hidden="true">#</a> 安装 openssl</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-etc-pki-tls-misc-ca-来创建-ca-认证中心" tabindex="-1"><a class="header-anchor" href="#使用-etc-pki-tls-misc-ca-来创建-ca-认证中心" aria-hidden="true">#</a> 使用 <code>/etc/pki/tls/misc/CA</code> 来创建 CA 认证中心</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-100 ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/pki/tls/misc/</span>
<span class="token punctuation">[</span>root@host-192-168-30-100 misc<span class="token punctuation">]</span><span class="token comment"># ./CA -newcert</span>
Generating a <span class="token number">2048</span> bit RSA private key
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>+++
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.+++
writing new private key to <span class="token string">&#39;newkey.pem&#39;</span>
Enter PEM pass phrase:                                                        <span class="token comment"># 2021Netw@rk</span>
Verifying - Enter PEM pass phrase:                                            <span class="token comment"># 2021Netw@rk</span>
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter <span class="token string">&#39;.&#39;</span>, the field will be left blank.
-----
Country Name <span class="token punctuation">(</span><span class="token number">2</span> letter code<span class="token punctuation">)</span> <span class="token punctuation">[</span>XX<span class="token punctuation">]</span>:CN                                          <span class="token comment"># 国家/地区</span>
State or Province Name <span class="token punctuation">(</span>full name<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:GD                                      <span class="token comment"># 省/市/自治区</span>
Locality Name <span class="token punctuation">(</span>eg, city<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default City<span class="token punctuation">]</span>:GZ                                    <span class="token comment"># 城市/地点</span>
Organization Name <span class="token punctuation">(</span>eg, company<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default Company Ltd<span class="token punctuation">]</span>:xxzx                    <span class="token comment"># 组织</span>
Organizational Unit Name <span class="token punctuation">(</span>eg, section<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:DCN                                 <span class="token comment"># 组织单位</span>
Common Name <span class="token punctuation">(</span>eg, your name or your server&#39;s <span class="token function">hostname</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:xxzx.skillschina.com <span class="token comment"># 通用名称</span>
Email Address <span class="token punctuation">[</span><span class="token punctuation">]</span>:                                                             <span class="token comment"># 电子邮件</span>
Certificate is <span class="token keyword">in</span> newcert.pem, private key is <span class="token keyword">in</span> newkey.pem
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完成后将证书复制到指定位置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/pki/tls/misc/newcert.pem /etc/pki/CA/cacert.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-ssl-证书" tabindex="-1"><a class="header-anchor" href="#创建-ssl-证书" aria-hidden="true">#</a> 创建 SSL 证书</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> openssl
<span class="token builtin class-name">cd</span> /etc/pki/tls/certs/
<span class="token function">sudo</span> openssl genrsa <span class="token parameter variable">-out</span> server.key <span class="token number">1024</span> <span class="token comment"># 生成私钥</span>
<span class="token function">sudo</span> openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr <span class="token comment"># 用私钥生成证书请求文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时要求输入证书信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>yueplus@localhost certs<span class="token punctuation">]</span>$ <span class="token function">sudo</span> openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter <span class="token string">&#39;.&#39;</span>, the field will be left blank.
-----

<span class="token comment"># 国家/地区</span>
Country Name <span class="token punctuation">(</span><span class="token number">2</span> letter code<span class="token punctuation">)</span> <span class="token punctuation">[</span>XX<span class="token punctuation">]</span>:CN

<span class="token comment"># 省/市/自治区</span>
State or Province Name <span class="token punctuation">(</span>full name<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:GD

<span class="token comment"># 城市/地点</span>
Locality Name <span class="token punctuation">(</span>eg, city<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default City<span class="token punctuation">]</span>:GZ

<span class="token comment"># 组织</span>
Organization Name <span class="token punctuation">(</span>eg, company<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default Company Ltd<span class="token punctuation">]</span>:market

<span class="token comment"># 组织单位</span>
Organizational Unit Name <span class="token punctuation">(</span>eg, section<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:DCN

<span class="token comment"># 通用名称</span>
Common Name <span class="token punctuation">(</span>eg, your name or your server<span class="token string">&#39;s hostname) []:market.skillschina.com

# 之后全部按回车跳过
Email Address []:

Please enter the following &#39;</span>extra&#39; attributes
to be sent with your certificate request
A challenge password <span class="token punctuation">[</span><span class="token punctuation">]</span>:
An optional company name <span class="token punctuation">[</span><span class="token punctuation">]</span>:
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用私钥、签名证书请求文件颁发证书，证书的申请机构和颁发机构都是自己：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> openssl x509 <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function b(h,g){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,r,n("ul",null,[n("li",null,[n("a",d,[s("CA证书_百度百科"),e(a)])]),n("li",null,[n("a",m,[s("数字证书、CA、CA证书，傻傻分不清楚？这一篇看懂！ - 知乎"),e(a)])]),n("li",null,[n("a",k,[s("CentOS 7 搭建CA认证中心实现https取证 - damowang~ - 博客园"),e(a)])])]),v])}const y=t(o,[["render",b],["__file","index.html.vue"]]);export{y as default};