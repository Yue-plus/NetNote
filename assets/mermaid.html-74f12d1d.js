import{_ as r,r as t,o,c as l,a as e,b as n,d as s,e as i}from"./app-ab31641a.js";const d={},c=e("h1",{id:"mermaid-语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid-语法","aria-hidden":"true"},"#"),n(" mermaid 语法")],-1),m={href:"https://github.com/eFrane/vuepress-plugin-mermaidjs",target:"_blank",rel:"noopener noreferrer"},p={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"支持：",-1),b={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},w={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},y={href:"https://baijiahao.baidu.com/s?id=1666117882411053133",target:"_blank",rel:"noopener noreferrer"},q={id:"流程图",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#",-1),R={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},j=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token text string">[Hard edge]</span> <span class="token arrow operator">--&gt;</span><span class="token label property">|Link text|</span> B<span class="token text string">(Round edge)</span>
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">{Decision}</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|One|</span> D<span class="token text string">[Result one]</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|Two|</span> E<span class="token text string">[Result two]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
    A[Hard edge] --&gt;|Link text| B(Round edge)
    B --&gt; C{Decision}
    C --&gt;|One| D[Result one]
    C --&gt;|Two| E[Result two]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={id:"序列图",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#序列图","aria-hidden":"true"},"#",-1),E={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},J=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">autonumber</span>
    Alice<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Hello John, how are you?
    <span class="token keyword">loop</span> Healthcheck
        John<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Fight against hypochondria
    <span class="token keyword">end</span>
    <span class="token keyword">Note right of</span> John<span class="token operator">:</span> Rational thoughts!
    John<span class="token arrow operator">--&gt;&gt;</span>Alice<span class="token operator">:</span> Great!
    John<span class="token arrow operator">-&gt;&gt;</span>Bob<span class="token operator">:</span> How about you?
    Bob<span class="token arrow operator">--&gt;&gt;</span>John<span class="token operator">:</span> Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequenceDiagram
    autonumber
    Alice-&gt;&gt;John: Hello John, how are you?
    loop Healthcheck
        John-&gt;&gt;John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John--&gt;&gt;Alice: Great!
    John-&gt;&gt;Bob: How about you?
    Bob--&gt;&gt;John: Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B={id:"类图",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#类图","aria-hidden":"true"},"#",-1),L={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},I=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
classA <span class="token arrow operator">--|&gt;</span> classB <span class="token operator">:</span> Inheritance
classC <span class="token arrow operator">--*</span> classD <span class="token operator">:</span> Composition
classE <span class="token arrow operator">--o</span> classF <span class="token operator">:</span> Aggregation
classG <span class="token arrow operator">--&gt;</span> classH <span class="token operator">:</span> Association
classI <span class="token arrow operator">--</span> classJ <span class="token operator">:</span> Link<span class="token text string">(Solid)</span>
classK <span class="token arrow operator">..&gt;</span> classL <span class="token operator">:</span> Dependency
classM <span class="token arrow operator">..|&gt;</span> classN <span class="token operator">:</span> Realization
classO <span class="token arrow operator">..</span> classP <span class="token operator">:</span> Link<span class="token text string">(Dashed)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classDiagram
classA --|&gt; classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --&gt; classH : Association
classI -- classJ : Link(Solid)
classK ..&gt; classL : Dependency
classM ..|&gt; classN : Realization
classO .. classP : Link(Dashed)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G={id:"状态图",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#状态图","aria-hidden":"true"},"#",-1),T={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},O=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code>    <span class="token keyword">stateDiagram-v2</span>
        State1<span class="token operator">:</span> The state with a note
        <span class="token keyword">note right of</span> State1
            Important information! You can write
            notes.
        <span class="token keyword">end note</span>
        State1 <span class="token arrow operator">--&gt;</span> State2
        <span class="token keyword">note left of</span> State2 <span class="token operator">:</span> This is the note to the left.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    stateDiagram-v2
        State1: The state with a note
        note right of State1
            Important information! You can write
            notes.
        end note
        State1 --&gt; State2
        note left of State2 : This is the note to the left.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Y={id:"实体关系图",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#实体关系图","aria-hidden":"true"},"#",-1),F={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},P=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">erDiagram</span>
    CUSTOMER <span class="token arrow operator">||--o{</span> ORDER <span class="token operator">:</span> places
    ORDER <span class="token arrow operator">||--|{</span> LINE-ITEM <span class="token operator">:</span> contains
    CUSTOMER <span class="token arrow operator">}|..|{</span> DELIVERY-ADDRESS <span class="token operator">:</span> uses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V={id:"用户旅程图",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#用户旅程图","aria-hidden":"true"},"#",-1),K={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},U=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">journey</span>
    title My working day
    section Go to work
      Make tea<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Go upstairs<span class="token operator">:</span> 3<span class="token operator">:</span> Me
      Do work<span class="token operator">:</span> 1<span class="token operator">:</span> Me, Cat
    section Go home
      Go downstairs<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Sit down<span class="token operator">:</span> 5<span class="token operator">:</span> Me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),W={id:"甘特图",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#甘特图","aria-hidden":"true"},"#",-1),Q={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},Z=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           <span class="token operator">:</span>a1, 2014-01-01, 30d
    Another task     <span class="token operator">:</span>after a1  , 20d
    section Another
    Task in sec      <span class="token operator">:</span>2014-01-12  , 12d
    another task      <span class="token operator">:</span> 24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$={id:"指令图",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#指令图","aria-hidden":"true"},"#",-1),ne={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},ae=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token comment">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%</span>
<span class="token keyword">sequenceDiagram</span>
<span class="token comment">%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%</span>
Alice<span class="token arrow operator">-&gt;&gt;</span>Bob<span class="token operator">:</span> Hi Bob
Bob<span class="token arrow operator">-&gt;&gt;</span>Alice<span class="token operator">:</span> Hi Alice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%
sequenceDiagram
%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%
Alice-&gt;&gt;Bob: Hi Bob
Bob-&gt;&gt;Alice: Hi Alice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),se={id:"饼图",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#饼图","aria-hidden":"true"},"#",-1),re={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},te=i(`<blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">pie</span>
    title Key elements in Product X
    <span class="token string">&quot;Calcium&quot;</span> <span class="token operator">:</span> 42.96
    <span class="token string">&quot;Potassium&quot;</span> <span class="token operator">:</span> 50.05
    <span class="token string">&quot;Magnesium&quot;</span> <span class="token operator">:</span> 10.01
    <span class="token string">&quot;Iron&quot;</span> <span class="token operator">:</span>  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pie
    title Key elements in Product X
    &quot;Calcium&quot; : 42.96
    &quot;Potassium&quot; : 50.05
    &quot;Magnesium&quot; : 10.01
    &quot;Iron&quot; :  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function oe(le,de){const a=t("ExternalLinkIcon");return o(),l("div",null,[c,e("p",null,[n("该项目通过 "),e("a",m,[n("vuepress-plugin-mermaidjs"),s(a)]),n(" 插件来支持使用 "),e("a",p,[n("mermaid-js"),s(a)]),n("（"),e("a",u,[n("GitHub"),s(a)]),n("）绘制各种图表。")]),v,e("ul",null,[e("li",null,[e("a",b,[n("流程图"),s(a)])]),e("li",null,[e("a",h,[n("序列图"),s(a)])]),e("li",null,[e("a",g,[n("类图"),s(a)])]),e("li",null,[e("a",k,[n("状态图"),s(a)])]),e("li",null,[e("a",_,[n("实体关系图"),s(a)])]),e("li",null,[e("a",f,[n("用户旅程图"),s(a)])]),e("li",null,[e("a",x,[n("甘特图"),s(a)])]),e("li",null,[e("a",w,[n("指令图"),s(a)])]),e("li",null,[e("a",D,[n("饼图"),s(a)])])]),e("blockquote",null,[e("p",null,[e("a",y,[n("关于写作那些事之快速上手Mermaid流程图"),s(a)])])]),e("h2",q,[M,n(),e("a",R,[n("流程图"),s(a)])]),j,e("h2",A,[S,n(),e("a",E,[n("序列图"),s(a)])]),J,e("h2",B,[C,n(),e("a",L,[n("类图"),s(a)])]),I,e("h2",G,[H,n(),e("a",T,[n("状态图"),s(a)])]),O,e("h2",Y,[N,n(),e("a",F,[n("实体关系图"),s(a)])]),P,e("h2",V,[z,n(),e("a",K,[n("用户旅程图"),s(a)])]),U,e("h2",W,[X,n(),e("a",Q,[n("甘特图"),s(a)])]),Z,e("h2",$,[ee,n(),e("a",ne,[n("指令图"),s(a)])]),ae,e("h2",se,[ie,n(),e("a",re,[n("饼图"),s(a)])]),te])}const me=r(d,[["render",oe],["__file","mermaid.html.vue"]]);export{me as default};
