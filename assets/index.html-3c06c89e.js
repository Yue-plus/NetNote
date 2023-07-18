import{_ as o,r as i,o as d,c as l,a as s,b as e,d as n,w as t,e as c}from"./app-ab31641a.js";const u={},p=s("h1",{id:"e-mail-电子邮件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#e-mail-电子邮件","aria-hidden":"true"},"#"),e(" E-Mail（电子邮件）")],-1),h=s("h2",{id:"链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),e(" 链接")],-1),v={href:"https://wiki.archlinux.org/title/Virtual_user_mail_system_with_Postfix,_Dovecot_and_Roundcube_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},b={id:"postfix",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#postfix","aria-hidden":"true"},"#",-1),_={id:"dovecot",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#dovecot","aria-hidden":"true"},"#",-1),w=c(`<h2 id="新建邮箱用户且不允许本地登入" tabindex="-1"><a class="header-anchor" href="#新建邮箱用户且不允许本地登入" aria-hidden="true">#</a> 新建邮箱用户且不允许本地登入</h2><p>新建不可登入用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin stu1
<span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin stu2
<span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin stu3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改用户密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu1</span>
Changing password <span class="token keyword">for</span> user stu1.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
<span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu2</span>
Changing password <span class="token keyword">for</span> user stu2.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
<span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu3</span>
Changing password <span class="token keyword">for</span> user stu3.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(g,x){const r=i("ExternalLinkIcon"),a=i("RouterLink");return d(),l("div",null,[p,h,s("ul",null,[s("li",null,[s("a",v,[e("Virtual user mail system with Postfix, Dovecot and Roundcube (简体中文) - ArchWiki"),n(r)])])]),s("h2",b,[m,e(),n(a,{to:"/serve/CentOS/E-Mail/Postfix.html"},{default:t(()=>[e("Postfix")]),_:1})]),s("h2",_,[k,e(),n(a,{to:"/serve/CentOS/E-Mail/Dovecot.html"},{default:t(()=>[e("Dovecot")]),_:1})]),w])}const y=o(u,[["render",f],["__file","index.html.vue"]]);export{y as default};
