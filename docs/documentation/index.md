# Про документування

## Загальні відомості

У процесі розробки, постачання та супроводження програмного продукту обов'язково додається супутня документація або надається доступ до актуальної інформації:

- призначення, функції, ресурси, що підтримуються, необхідні для його використання
- порядок встановлення та оновлення
- шляхи вирішення знайомих проблем
- зв'язок для подання повідомлень про проблеми, пропозиції та отримання консультацій
- можливо та інша

При цьому вищезгадана інформація повинна завжди перебувати в актуальному стані за підтримуваними версіями продукту.

Задовольнити вищезгадані вимоги з можливістю мінімізувати витрати на її коригування дозволяють генератори документації, що підтримують прості мови розмітки. При цьому бажано мати можливість встановити генератор локально або отримати віддалену послугу з розробки, генерації документів та їх публікації в Інтернеті.

:::info Приклад документації

Прекрасний приклад документації та навчальних ресурсів Майкрософт для розробників та технічних фахівців [Microsoft Learn. Блестящие возможности — learn.microsoft.com](https://learn.microsoft.com/ru-ru/).

Можна також брати участь у розробці вище вказаної документації згідно з [Посібником для учасників](https://learn.microsoft.com/ru-ru/contribute/).

:::

## Генератори документації

В якості генераторів документації часто використовуються:

- [Docusaurus](https://docusaurus.io/) - створено з використанням React та дозволяє вбудовувати компоненти React у вашу документацію Markdown завдяки можливості підтримки формату MDX.
  - [Порівняння з іншими генераторами](https://docusaurus.io/docs#comparison-with-other-tools)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - напишіть свою документацію в Markdown і створіть професійний статичний сайт за лічені хвилини — з можливістю пошуку, який налаштовується більш ніж на 60 мовах, для всіх пристроїв
- [DocFX](https://dotnet.github.io/docfx/) - cтворює свій сайт технічної документації за допомогою docfx. Перетворює збірку .NET, коментар до коду XML, файли Swagger REST API та уцінку в оброблені HTML-сторінки, модель JSON або PDF-файли.
- [Sphinx](https://www.sphinx-doc.org/en/) - дозволяє легко створювати інтелектуальну та красиву документацію. Sphinx за умовчанням використовує мову розмітки reStructuredText і може читати MyST-markdown через сторонні розширення.

Як редактор документації чудово підходить [Visual Studio Code] (https://code.visualstudio.com/).
Цей редактор при першому створенні файлу певного типу сам і підкаже, які розширення можна встановити для автоматичної перевірки синтаксису та форматування.

## Публікація документації

Є багато сервісів, де можна розмістити свою документацію в Інтернеті:

- [GitHub](https://github.com/) - розміщення документації у своєму репозиторії разом із вашим проектом
- [GitHub Pages](https://pages.github.com/) - сайти для вас та ваших проектів 
- [Read Docs](https://readthedocs.org/) - платформа для розміщення документації з програмного забезпечення
