# mermaid 语法

该项目通过 [mermaid-js](http://mermaid-js.github.io/mermaid/)（[GitHub](https://github.com/mermaid-js/mermaid)）绘制各种图表。

支持：
- [流程图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/flowchart.html)
- [序列图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/sequenceDiagram.html)
- [类图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/classDiagram.html)
- [状态图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/stateDiagram.html)
- [实体关系图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/entityRelationshipDiagram.html)
- [用户旅程图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/user-journey.html)
- [甘特图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/gantt.html)
- [指令图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html)
- [饼图](http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/pie.html)

> [关于写作那些事之快速上手Mermaid流程图](https://baijiahao.baidu.com/s?id=1666117882411053133)

## 流程图

> ```mermaid
> graph LR
>     A[Hard edge] -->|Link text| B(Round edge)
>     B --> C{Decision}
>     C -->|One| D[Result one]
>     C -->|Two| E[Result two]
> ```

```text
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

## 序列图

> ```mermaid
> sequenceDiagram
>     autonumber
>     Alice->>John: Hello John, how are you?
>     loop Healthcheck
>         John->>John: Fight against hypochondria
>     end
>     Note right of John: Rational thoughts!
>     John-->>Alice: Great!
>     John->>Bob: How about you?
>     Bob-->>John: Jolly good!
> ```

```text
sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## 类图

> ```mermaid
> classDiagram
> classA --|> classB : Inheritance
> classC --* classD : Composition
> classE --o classF : Aggregation
> classG --> classH : Association
> classI -- classJ : Link(Solid)
> classK ..> classL : Dependency
> classM ..|> classN : Realization
> classO .. classP : Link(Dashed)
> ```

```text
classDiagram
classA --|> classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --> classH : Association
classI -- classJ : Link(Solid)
classK ..> classL : Dependency
classM ..|> classN : Realization
classO .. classP : Link(Dashed)
```

## 状态图

> ```mermaid
>     stateDiagram-v2
>         State1: The state with a note
>         note right of State1
>             Important information! You can write
>             notes.
>         end note
>         State1 --> State2
>         note left of State2 : This is the note to the left.
> ```

```text
    stateDiagram-v2
        State1: The state with a note
        note right of State1
            Important information! You can write
            notes.
        end note
        State1 --> State2
        note left of State2 : This is the note to the left.
```

## 实体关系图

> ```mermaid
> erDiagram
>     CUSTOMER ||--o{ ORDER : places
>     ORDER ||--|{ LINE-ITEM : contains
>     CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
> ```

```text
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

## 用户旅程图

> ```mermaid
> journey
>     title My working day
>     section Go to work
>       Make tea: 5: Me
>       Go upstairs: 3: Me
>       Do work: 1: Me, Cat
>     section Go home
>       Go downstairs: 5: Me
>       Sit down: 5: Me
> ```

```text
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```

## 甘特图

> ```mermaid
> gantt
>     title A Gantt Diagram
>     dateFormat  YYYY-MM-DD
>     section Section
>     A task           :a1, 2014-01-01, 30d
>     Another task     :after a1  , 20d
>     section Another
>     Task in sec      :2014-01-12  , 12d
>     another task      : 24d
> ```

```html
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```

```

## 指令图

> ```mermaid
> %%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
> sequenceDiagram
> %%{config: { 'fontFamily': 'Menlo', 'fontSize': 18, 'fontWeight': 400} }%%
> Alice->>Bob: Hi Bob
> Bob->>Alice: Hi Alice
> ```

```text
%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
sequenceDiagram
%%{config: { 'fontFamily': 'Menlo', 'fontSize': 18, 'fontWeight': 400} }%%
Alice->>Bob: Hi Bob
Bob->>Alice: Hi Alice
```

## 饼图

> ```mermaid
> pie
>     title Key elements in Product X
>     "Calcium" : 42.96
>     "Potassium" : 50.05
>     "Magnesium" : 10.01
>     "Iron" :  5
> ```

```text
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```