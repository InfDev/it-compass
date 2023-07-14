# Шаблони проектування

## Загальні відомості

Шаблони (або патерни) проектування описують типові способи вирішення проблем, що часто зустрічаються при проектуванні програм і програмних систем.

Основна користь від використання шаблонів полягає у зниженні складності розробки за рахунок готових абстракцій на вирішення цілого класу проблем. Шаблон дає рішенню своє ім'я, що полегшує комунікацію між розробниками, дозволяючи посилатися на відомі шаблони. Таким чином, за рахунок шаблонів проводиться уніфікація деталей рішень: модулів, елементів проекту, знижується кількість помилок.

Шаблони проектування поділяються як за рівнями застосування, так і за типами, які застосовуються на конкретному рівні застосування.

- [Шаблони проєктування: їх види, особливості й переваги — highload.today](https://highload.today/uk/shabloni-proyektuvannya-yih-vidi-osoblivosti-j-perevagi/)

## Архітектурні шаблони

Архітектурні шаблони є ширшим поняттям, ніж шаблони проєктування, які охоплюють компоненти або частини програми. В архітектурних шаблонах можуть використовуватися декілька шаблонів проєктування.

- [Top 10 Architectural Patterns — newsletter.techworld-with-milan.com(https://newsletter.techworld-with-milan.com/p/top-10-architectural-patterns)
- [10 Most Popular Software Architecture Patterns — echoinnovateit.com](https://echoinnovateit.com/software-architecture-patterns/)
- [Стили архитектуры — learn.microsoft.com](https://learn.microsoft.com/ru-ru/azure/architecture/guide/architecture-styles/)
- [Самые важные архитектурные шаблоны, которые нужно знать — habr.com](https://habr.com/ru/companies/alconost/articles/522662/)
- [Краткий обзор 10 популярных архитектурных шаблонов приложений — medium.com](https://medium.com/nuances-of-programming/краткий-обзор-10-популярных-архитектурных-шаблонов-приложений-81647be5c46f)

## Класичні шаблони проектування

### Таблиця за групами

|      |Породжувальні, [*Creational*](https://dotnettutorials.net/lesson/creational-design-pattern/)  |Структурні, [*Structural*](https://dotnettutorials.net/lesson/structural-design-pattern/)     |Поведінкові, [*Behavioral*](https://dotnettutorials.net/lesson/behavioral-design-pattern/)        |
|------|------------------|----------------|-------------------|
|      |                  |                |                   |
|Клас  |Фабричний метод, [*Factory method*](https://dotnettutorials.net/lesson/factory-design-pattern-csharp/)    |Адаптер (клас), [*Adapter*](https://dotnettutorials.net/lesson/adapter-design-pattern/)  |Інтерпретатор, [*Interpreter*](https://dotnettutorials.net/lesson/interpreter-design-pattern/)      |
|      |                  |                |    |
|Об’єкт|Абстрактна фабрика, [*Abstract Factory*](https://dotnettutorials.net/lesson/abstract-factory-design-pattern-csharp/)|Адаптер (об’ект), [*Adapter*](https://dotnettutorials.net/lesson/adapter-design-pattern/)|Ланцюжок обов’язків, [*Chain of Responsibility*](https://dotnettutorials.net/lesson/chain-of-responsibility-design-pattern/)|
|      |Будівельник, [*Builder*](https://dotnettutorials.net/lesson/builder-design-pattern/)       |Міст, [*Bridge*](https://dotnettutorials.net/lesson/bridge-design-pattern/)            |Команда, [*Command*](https://dotnettutorials.net/lesson/command-design-pattern/)            |
|      |Прототип, [*Prototype*](https://dotnettutorials.net/lesson/prototype-design-pattern/)          |Компонувальник, [*Composite*](https://dotnettutorials.net/lesson/composite-design-pattern/)  |Ітератор, [*Iterator*](https://dotnettutorials.net/lesson/iterator-design-pattern/)           |
|      |Одинак, [*Singleton*](https://dotnettutorials.net/lesson/singleton-design-pattern/)        |Декоратор, [*Decorator*](https://dotnettutorials.net/lesson/decorator-design-pattern/)       |Посередник, [*Mediator*](https://dotnettutorials.net/lesson/mediator-design-pattern/)         |
|      |Текучий інтерфейс, [*Fluent Interface*](https://dotnettutorials.net/lesson/fluent-interface-design-pattern/)                  |Фасад, [*Facade*](https://dotnettutorials.net/lesson/facade-design-pattern/)           |Знімок, [*Memento*](https://dotnettutorials.net/lesson/memento-design-pattern/)             |
|      |                  |Легковаговик, [*Flyweight*](https://dotnettutorials.net/lesson/flyweight-design-pattern/)    |Спостерігач, [*Observer*](https://dotnettutorials.net/lesson/observer-design-pattern/)        |
|      |                  |Замісник, [*Proxy*](https://dotnettutorials.net/lesson/proxy-design-pattern/)        |Стан, [*State*](https://dotnettutorials.net/lesson/state-design-pattern/)               |
|      |                  |                |Стратегія, [*Strategy*](https://dotnettutorials.net/lesson/strategy-design-pattern/)          |
|      |                  |                |Відвідувач, [*Visitor*](https://dotnettutorials.net/lesson/visitor-design-pattern/)         |
|      |                  |                |Шаблонний метод, [*Template Method*](https://dotnettutorials.net/lesson/template-method-design-pattern/)                   |

### Про шаблони класів

Шаблони класів визначають відносини між класами та їх підкласами.

Отже, шаблони класів мають тенденцію використовувати успадкування встановлення відносин. На відміну від шаблонів об'єктів та відносин між об'єктами, шаблони класів зазвичай фіксують відносини під час компіляції.
Вони менш гнучкі та динамічні та менш підходять для поліморфних підходів.

### Про шаблони об'єктів

Шаблони об'єктів визначають відносини між об'єктами.

Загалом, мета шаблону об'єкта полягає в тому, щоб дозволити використання екземплярів різних класів в тому самому місці шаблону. Шаблони об'єктів дозволяють уникнути фіксації класу, що виконує це завдання під час компіляції.
Натомість фактичний клас об'єкта може бути обраний під час виконання. Шаблони об'єктів переважно використовують композицію або агрегацію об'єктів встановлення відносин між об'єктами.

### Популярні шаблони

- *Породжувальні*:
  - Одинак ​​(Singleton)
  - Фабричний метод (Factory Method)
  - Будівельник (Builder)
  - Текучий інтерфейс (Fluent Interface)
- *Структурні*:
  - Фасад (Facade)
  - Адаптер (Adapter)
- *Поведінкові*:
  - Спостерігач (Observer)
  - Стратегія (Strategy)


- [Design Patterns in C# With Real-Time Examples — dotnettutorials.net](https://dotnettutorials.net/course/dot-net-design-patterns/)
- [Паттерны проектирования в C# и .NET — metanit.com](https://metanit.com/sharp/patterns/)
- [Патерни проектування — refactoring.guru](https://refactoring.guru/uk/design-patterns)
