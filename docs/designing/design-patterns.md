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

### Таблиця шаблонів за групами

|      |Породжувальні, [*Creational*](https://dotnettutorials.net/lesson/creational-design-pattern/)  |Структурні, [*Structural*](https://dotnettutorials.net/lesson/structural-design-pattern/)     |Поведінкові, [*Behavioral*](https://dotnettutorials.net/lesson/behavioral-design-pattern/)        |
|------|------------------|----------------|-------------------|
|      |                  |                |                   |
|Клас  |Фабричний метод, [*Factory method*](https://dotnettutorials.net/lesson/factory-method-design-pattern-csharp/)    |Адаптер (клас), [*Adapter*](https://dotnettutorials.net/lesson/adapter-design-pattern/)  |Інтерпретатор, [*Interpreter*](https://dotnettutorials.net/lesson/interpreter-design-pattern/)      |
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

#### Шаблони класів

Шаблони класів визначають відносини між класами та їх підкласами.

Отже, шаблони класів мають тенденцію використовувати успадкування встановлення відносин. 
На відміну від шаблонів об'єктів та відносин між об'єктами, 
шаблони класів зазвичай фіксують відносини під час компіляції.
Вони менш гнучкі та динамічні та менш підходять для поліморфних підходів.

#### Шаблони об'єктів

Шаблони об'єктів визначають відносини між об'єктами.

Загалом, мета шаблону об'єкта полягає в тому, щоб дозволити використання екземплярів різних класів
в тому самому місці шаблону. Шаблони об'єктів дозволяють уникнути фіксації класу, 
що виконує це завдання під час компіляції.
Натомість фактичний клас об'єкта може бути обраний під час виконання. 
Шаблони об'єктів переважно використовують композицію або агрегацію об'єктів 
для встановлення відносин між об'єктами.

### Породжувальні шаблони

- **Фабричний метод ([Factory method](https://rookienerd.com/tutorial/design-pattern/factory-method-design-pattern))**
  > використовує фабричний метод для вирішення проблеми створення об'єктів без вказівки їх точних класів з посиланням на новостворений об'єкт за допомогою загального інтерфейсу.
- **Абстрактна фабрика ([Abstract Factory](https://rookienerd.com/tutorial/design-pattern/abstract-factory-design-pattern))**
  > суперфабрика, яка об'єднує окремі, але споріднені/залежні фабрики без вказівки їх конкретних класів..
- **Будівельник ([Builder](https://rookienerd.com/tutorial/design-pattern/builder-design-pattern))**
  > будує складний об'єкт з використанням безлічі простих об'єктів і покрокового підходу. 
  > Процес побудови складного об'єкта повинен бути настільки загальним, 
  > щоб один і той же процес побудови міг бути використаний для створення різних представлень одного і того ж складного об'єкта.
- **Прототип ([Prototype](https://rookienerd.com/tutorial/design-pattern/prototype-design-pattern))**
  > визначає тип об'єктів для створення за допомогою прототипного екземпляра
  > та створює нові об'єкти шляхом копіювання цього прототипу.
- **Одинак ([Singleton](https://rookienerd.com/tutorial/design-pattern/singleton-design-pattern))**
  > використовується для забезпечення того, щоб клас мав лише один екземпляр
  > і забезпечував глобальну точку доступу до нього.
- **Текучий інтерфейс ([Fluent Interface](https://medium.com/@nirajranasinghe/making-c-simple-with-fluent-techniques-9ed954ffaebe))**
  > метод проектування об'єктно-орієнтованих API, який забезпечує більш читабельний 
  > і легко підтримуваний код. Він заснований на концепціях ланцюжка методів, 
  > де кожен метод повертає сам об'єкт, дозволяючи викликати кілька дій в одній послідовності виразів.

### Структурні шаблони

- **Адаптер ([Adapter](https://rookienerd.com/tutorial/design-pattern/adapter-design-pattern)), реалізація через клас**
  > дозволяє об'єктам з несумісними інтерфейсами працювати разом, якщо можливе успадкування (в межах одного проекту і використовують одну і ту ж мову програмування)
- **Адаптер (Adapter), реалізація через об'єкт**
  > дозволяє об'єктам з несумісними інтерфейсами працювати разом, якщо не можливе успадкування.
- **Міст ([Bridge](https://rookienerd.com/tutorial/design-pattern/bridge-design-pattern))**
  > використовується для відокремлення абстракції від її реалізації, щоб обидва могли бути 
  > змінені незалежно один від одного.
Цей патерн включає інтерфейс, який виступає мостом між класом абстракції та класами-реалізаторами, а також робить функціональність класу реалізатора незалежною від класу абстракції. Обидва типи класів можуть бути модифіковані, не впливаючи один на одного.
- **Компонувальник ([Composite](https://rookienerd.com/tutorial/design-pattern/composite-design-pattern))**
  > компонує об'єкти в деревовидні структури для представлення ієрархій цілих частин. 
  > Композит дозволяє клієнтам однаково обробляти окремі об'єкти та композиції об'єктів.
- **Декоратор ([Decorator](https://rookienerd.com/tutorial/design-pattern/decorator-design-pattern))**
  > Патерн декоратора використовується для додавання нової функціональності до існуючого об'єкта
  > без зміни його структури.
  >
  > Цей шаблон створює клас-декоратор, який обгортає оригінальний клас і 
  > додає нові поведінки/операції до об'єкта під час виконання.  
- **Фасад ([Facade](https://rookienerd.com/tutorial/design-pattern/facade-design-pattern))**
  > забезпечує спрощений інтерфейс складної системи класів, бібліотек або фреймворків.
- **Легковаговик ([Flyweight](https://rookienerd.com/tutorial/design-pattern/flyweight-design-pattern))**
  > використовується для зменшення кількості створених об'єктів, для зменшення використання пам'яті та ресурсів. 
  > В результаті підвищується працездатність.
- **Замісник ([Proxy](https://rookienerd.com/tutorial/design-pattern/proxy-design-pattern))**
  > Замісник — це об’єкт, який виступає прошарком між клієнтом та реальним сервісним об’єктом. 
  > Замісник отримує виклики від клієнта, виконує свою функцію 
  > (контроль доступу, кешування, зміна запиту та інше), а потім передає виклик сервісному об’єктові.

### Поведінкові шаблони

- **Інтерпретатор [Interpreter](https://rookienerd.com/tutorial/design-pattern/interpreter-design-pattern)**
  > оцінює/інтерпретує інструкції, написані на мові, граматиці або нотаціях. 
  > Цей шаблон передбачає реалізацію інтерфейсу виразів, який повідомляє інтерпретувати певний контекст. 
  > Цей шаблон використовується в компіляторах або парсерах або розширеннях макросів.
- **Ланцюжок обов’язків [Chain of Responsibility](https://rookienerd.com/tutorial/design-pattern/chain-of-responsibility-design-pattern)**
  > дозволяє передавати запити по ланцюжку обробників. 
  > Замість того, щоб відправляти запит безпосередньо конкретному одержувачу, 
  > формується ланцюжок потенційних приймачів, і кожен обробник або обробляє запит, 
  > або передає його наступному обробнику в ланцюжку. 
  > Цей шаблон дозволяє декільком об'єктам обробляти запит без прив'язки класу відправника до конкретних класів одержувачів.
- **Команда [Command](https://rookienerd.com/tutorial/design-pattern/command-design-pattern)**
  > перетворює запит на самостійний об'єкт, який містить всю інформацію про запит. 
  > Це перетворення дозволяє параметризувати методи з різними запитами, 
  > затримувати або ставити в чергу виконання запиту, а також підтримувати нездійсненні операції. 
  > Це корисно в сценаріях, коли вам потрібно надсилати запити, 
  > нічого не знаючи про операцію, яку запитують, або одержувача запиту.
- **Ітератор [Iterator](https://rookienerd.com/tutorial/design-pattern/iterator-design-pattern)**
  > надає спосіб послідовного доступу до елементів об'єкта колекції без знання його базової структури.
- **Посередник [Mediator](https://rookienerd.com/tutorial/design-pattern/mediator-design-pattern)**
  > дозволяє декільком об'єктам спілкуватися один з одним, не знаючи структури один одного. 
  > Цей шаблон визначає об'єкт, який інкапсулює, як об'єкти будуть взаємодіяти один з одним, 
  > і підтримує легку ремонтопридатність коду за допомогою слабкого зчеплення.
- **Знімок [Memento](https://rookienerd.com/tutorial/design-pattern/memento-design-pattern)**
  > використовується для фіксації поточного стану об'єкта та його зберігання таким чином, 
  > щоб його можна було відновити пізніше, не порушуючи правил інкапсуляції.
- **Спостерігач [Observer](https://rookienerd.com/tutorial/design-pattern/observer-design-pattern)**
  > дозволяє одному об'єкту, відомому як суб'єкт, публікувати зміни свого стану, 
  > а інші об'єкти-спостерігачі, які залежать від суб'єкта, автоматично повідомляються про будь-які зміни в стані суб'єкта.
- **Стан [State](https://rookienerd.com/tutorial/design-pattern/state-design-pattern)**
  > використовується для зміни поведінки об'єкта при зміні його внутрішнього стану. 
  > У цьому патерні створюється об'єкт, який представляє різні стани, і контекстний об'єкт, 
  > поведінка якого змінюється при зміні його об'єкта стану.
  >
  > Цей патерн виглядає як динамічна версія патерну "Стратегія".
- **Стратегія [Strategy](https://rookienerd.com/tutorial/design-pattern/strategy-design-pattern)**
  > дозволяє клієнту вибрати алгоритм з сімейства алгоритмів під час виконання і надає йому простий спосіб доступу до нього.
  > 
  > Передбачає видалення алгоритму з його хост-класу і винесення його в окремий клас. 
- **Відвідувач [Visitor](https://rookienerd.com/tutorial/design-pattern/visitor-design-pattern)**
  > використовується для створення та виконання нових операцій над набором об'єктів 
  > без зміни структури об'єктів або класів. 
  > Цей патерн дозволяє слабке зчеплення та додавання нових операцій без зміни існуючої структури.
- **Шаблонний метод [Template Method](https://rookienerd.com/tutorial/design-pattern/template-method-design-pattern)**
  > використовується для визначення основних кроків алгоритму та дозволяє змінювати 
  > реалізацію окремих кроків. Цей патерн схожий на патерн проектування стратегії. 
  > Основна відмінність полягає в можливості змінювати частини алгоритму, а не замінювати весь алгоритм.

## Джерела інформації

- [Design Patterns in C# With Real-Time Examples — dotnettutorials.net](https://dotnettutorials.net/course/dot-net-design-patterns/)
- [Патерни проектування — refactoring.guru](https://refactoring.guru/uk/design-patterns)
- [GOF Design Patterns](https://rookienerd.com/tutorial/design-pattern/gof-design-patterns)
- [Паттерны проектирования в C# и .NET — metanit.com](https://metanit.com/sharp/patterns/)
