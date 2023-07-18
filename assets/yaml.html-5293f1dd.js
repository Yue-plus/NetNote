import{_ as e,r as l,o as t,c as p,a as n,b as a,d as i,e as c}from"./app-ab31641a.js";const o={},u=n("h1",{id:"yaml-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#yaml-语法","aria-hidden":"true"},"#"),a(" YAML 语法")],-1),d=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,`YAML 是 "YAML Ain't a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。`),n("p",null,"YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和 YAML 非常接近）。"),n("p",null,[a("YAML 的配置文件后缀为 "),n("code",null,".yml"),a("，如："),n("code",null,"config.yml"),a(" 。")])],-1),r={href:"https://www.runoob.com/w3cnote/yaml-intro.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><ul><li>大小写敏感</li><li>使用缩进表示层级关系</li><li>缩进不允许使用 <kbd>Tab</kbd>，只允许空格</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li><code>#</code> 表示注释</li></ul><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>YAML 支持以下几种数据类型：</p><ul><li>对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）</li><li>数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）</li><li>纯量（scalars）：单个的、不可再分的值</li></ul><h2 id="yaml-对象" tabindex="-1"><a class="header-anchor" href="#yaml-对象" aria-hidden="true">#</a> YAML 对象</h2><p>对象键值对使用冒号结构表示 <strong><code>key: value</code></strong>，冒号后面要加一个空格。</p><p>也可以使用 <strong><code>key:{key1: value1, key2: value2, ...}</code></strong>。</p><p>还可以使用缩进表示层级关系；</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> 
    <span class="token key atrule">child-key</span><span class="token punctuation">:</span> value
    <span class="token key atrule">child-key2</span><span class="token punctuation">:</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">?</span>
    <span class="token punctuation">-</span> complexkey1
    <span class="token punctuation">-</span> <span class="token key atrule">complexkey2</span>
<span class="token punctuation">:</span>
    <span class="token punctuation">-</span> complexvalue1
    <span class="token punctuation">-</span> complexvalue2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思即对象的属性是一个数组 <code>[complexkey1,complexkey2]</code>，对应的值也是一个数组 <code>[complexvalue1,complexvalue2]</code></p><h2 id="yaml-数组" tabindex="-1"><a class="header-anchor" href="#yaml-数组" aria-hidden="true">#</a> YAML 数组</h2><p>以 <code>-</code> 开头的行表示构成一个数组：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> A
<span class="token punctuation">-</span> B
<span class="token punctuation">-</span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML 支持多维数组，可以使用行内表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span>
  <span class="token punctuation">-</span> A
  <span class="token punctuation">-</span> B
  <span class="token punctuation">-</span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个相对复杂的例子：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">companies</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span>
        <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> company1
        <span class="token key atrule">price</span><span class="token punctuation">:</span> 200W
    <span class="token punctuation">-</span>
        <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> company2
        <span class="token key atrule">price</span><span class="token punctuation">:</span> 500W
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思是 <code>companies</code> 属性是一个数组，每一个数组元素又是由 <code>id</code>、<code>name</code>、<code>price</code> 三个属性构成。</p><p>数组也可以使用流式(flow)的方式表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">companies</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token key atrule">name</span><span class="token punctuation">:</span> company1<span class="token punctuation">,</span><span class="token key atrule">price</span><span class="token punctuation">:</span> 200W<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token key atrule">name</span><span class="token punctuation">:</span> company2<span class="token punctuation">,</span><span class="token key atrule">price</span><span class="token punctuation">:</span> 500W<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="复合结构" tabindex="-1"><a class="header-anchor" href="#复合结构" aria-hidden="true">#</a> 复合结构</h2><p>数组和对象可以构成复合结构，例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Ruby
  <span class="token punctuation">-</span> Perl
  <span class="token punctuation">-</span> Python 
<span class="token key atrule">websites</span><span class="token punctuation">:</span>
  <span class="token key atrule">YAML</span><span class="token punctuation">:</span> yaml.org 
  <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> ruby<span class="token punctuation">-</span>lang.org 
  <span class="token key atrule">Python</span><span class="token punctuation">:</span> python.org 
  <span class="token key atrule">Perl</span><span class="token punctuation">:</span> use.perl.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为 json 为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
  languages<span class="token operator">:</span> <span class="token punctuation">[</span> &#39;Ruby&#39;<span class="token punctuation">,</span> &#39;Perl&#39;<span class="token punctuation">,</span> &#39;Python&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
  websites<span class="token operator">:</span> <span class="token punctuation">{</span>
    YAML<span class="token operator">:</span> &#39;yaml.org&#39;<span class="token punctuation">,</span>
    Ruby<span class="token operator">:</span> &#39;ruby-lang.org&#39;<span class="token punctuation">,</span>
    Python<span class="token operator">:</span> &#39;python.org&#39;<span class="token punctuation">,</span>
    Perl<span class="token operator">:</span> &#39;use.perl.org&#39; 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纯量" tabindex="-1"><a class="header-anchor" href="#纯量" aria-hidden="true">#</a> 纯量</h2><p>纯量是最基本的，不可再分的值，包括：</p><ul><li>字符串</li><li>布尔值</li><li>整数</li><li>浮点数</li><li>Null</li><li>时间</li><li>日期</li></ul><p>使用一个例子来快速了解纯量的基本使用：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">boolean</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token boolean important">TRUE</span>  <span class="token comment"># true\\True 都可以</span>
    <span class="token punctuation">-</span> <span class="token boolean important">FALSE</span>  <span class="token comment"># false\\False 都可以</span>
<span class="token key atrule">float</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token number">3.14</span>
    <span class="token punctuation">-</span> <span class="token number">6.8523015e+5</span>  <span class="token comment"># 可以使用科学计数法</span>
<span class="token key atrule">int</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token number">123</span>
    <span class="token punctuation">-</span> 0b1010_0111_0100_1010_1110    <span class="token comment"># 二进制表示</span>
<span class="token key atrule">null</span><span class="token punctuation">:</span>
    <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> <span class="token string">&#39;node&#39;</span>
    <span class="token key atrule">parent</span><span class="token punctuation">:</span> <span class="token null important">~</span>  <span class="token comment"># 使用 ~ 表示 null</span>
<span class="token key atrule">string</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 哈哈
    <span class="token punctuation">-</span> <span class="token string">&#39;Hello world&#39;</span>  <span class="token comment"># 可以使用双引号或者单引号包裹特殊字符</span>
    <span class="token punctuation">-</span> newline
      newline2    <span class="token comment"># 字符串可以拆成多行，每一行会被转化成一个空格</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token datetime number">2018-02-17</span>    <span class="token comment"># 日期必须使用 ISO 8601 格式，即 yyyy-MM-dd</span>
<span class="token key atrule">datetime</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span>  <span class="token datetime number">2018-02-17T15:02:31+08:00</span>    <span class="token comment"># 时间使用 ISO 8601 格式，时间和日期之间使用 T 连接，最后使用 + 代表时区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p><code>&amp;</code> 锚点和 <code>*</code> 别名，可以用来引用:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span> <span class="token important">&amp;defaults</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span>  postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span>     localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;</code> 用来建立锚点（defaults），<code>&lt;&lt;</code> 表示合并到当前数据，<code>*</code> 用来引用锚点。</p><p>下面是另一个例子:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token important">&amp;showell</span> Steve 
<span class="token punctuation">-</span> Clark 
<span class="token punctuation">-</span> Brian 
<span class="token punctuation">-</span> Oren 
<span class="token punctuation">-</span> <span class="token important">*showell</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转为 JavaScript 代码如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token string">&#39;Steve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Clark&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Brian&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Oren&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Steve&#39;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,45);function v(m,b){const s=l("ExternalLinkIcon");return t(),p("div",null,[u,d,n("blockquote",null,[n("p",null,[a("本文来自："),n("a",r,[a("YAML 教程 - 菜鸟教程"),i(s)])])]),k])}const g=e(o,[["render",v],["__file","yaml.html.vue"]]);export{g as default};
