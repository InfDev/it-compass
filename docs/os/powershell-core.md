# PowerShell Core

## Загальні відомості

[PowerShell Core](https://learn.microsoft.com/ru-ru/powershell/) — це кросплатформовий (Windows, Linux та macOS) інструмент/середовище для автоматизації та налаштування, який добре працює з існуючими інструментами та оптимізований для роботи зі структурованими даними (наприклад, JSON, CSV, XML тощо), API-інтерфейсами REST та моделями. Він включає оболонку командного рядка, пов'язану мову сценаріїв та інфраструктуру для обробки командлетів.

PowerShell є засобом автоматизації, що розширюється, від Microsoft з відкритим вихідним кодом. У [галереї PowerShell](https://www.powershellgallery.com/) можна знайти корисні модулі PowerShell, що містять команди PowerShell та ресурси Desired State Configuration (DSC). Ви також можете знайти сценарії PowerShell, деякі з яких можуть містити робочі процеси PowerShell і які визначають набір завдань та забезпечують послідовність цих завдань. Деякі з цих пакетів створені Microsoft, інші - спільнотою PowerShell.

- [PowerShell Core Unleashed: Harnessing Command-Line Power — marketsplash.com](https://marketsplash.com/tutorials/powershell/powershell-core/) - PowerShell Core: розкрийте потенціал майстерності командного рядка, автоматизації та міжплатформної гнучкості. Підвищіть ефективність за допомогою універсальних сценаріїв та потужних можливостей автоматизації завдань.

## Концепція

PowerShell ґрунтується на таких концептуальних речах:

- У PowerShell існують
  - **аліаси (alias)** - служать для спрощення введення команд (наприклад, `clc` - це аліас команди `Clear-Content`)
  - **командлети (cmdlet)** - є реалізацією всіх вбудованих в PowerShell команд
  - **провайдери (provider)** - забезпечують доступ до файлової системи, реєстру, сховища сертифікатів тощо.
  - **довідкові файли (helpfile)** - використовуються для отримання додаткової інформації.


- Основою PowerShell є об'єкт, а чи не текст. Вихідні дані команди – це об'єкт. За допомогою конвеєра вихідний об'єкт можна відправити в іншу команду як вхідні дані.
- PowerShell та його неймовірно гнучка система легко виявляються за допомогою `Get-Command`. Навіть для досвідчених експертів PowerShell `Get-Command` є безцінною, тому що вона працює у всіх системах, не вимагає додаткового вмісту і збереже ваш дорогоцінний час. Крім того, ніхто навіть не в змозі знати всі існуючі cmdlet - іноді вам лише потрібно швидко поглянути на їх синтаксис.

  Результат команди `Get-Command` може фільтруватися за допомогою символів маски для виявлення cmdlet, що мають певну мету, наприклад, `*Process` перерахує всі cmdlet, які мають щось для роботи з процесами.

- PowerShell використовує в іменах зв'язку "дієслово - іменник". Ім'я кожного командлета складається зі стандартного дієслова та певного іменника, розділеного дефісом. Дієслова, що використовуються в PowerShell (не тільки англійські) виражають певну дію. Іменники також використовуються як і в будь-якій мові. Вони описують об'єкти певних типів, необхідні системного адміністрування. Нижче наведені приклади демонструють, наскільки такі парні імена полегшують запам'ятовування.

  PowerShell має рекомендований список стандартних дієслів. Використання іменників негаразд обмежене, але завжди повинні позначати об'єкти, куди спрямовано дію дієслова. Ось приклади команд PowerShell: `Get-Process`, `Stop-Process`, `Get-Service`,`Stop-Service`.

## Редактор скриптів

[Visual Studio Code](https://learn.microsoft.com/ru-ru/powershell/scripting/dev-cross-plat/vscode/using-vscode) — це крос-платформний редактор сценаріїв (Windows, macOS та Linux), створений корпорацією Майкрософт. Поряд із розширенням PowerShell він надає широкі інтерактивні можливості редагування сценаріїв, спрощуючи написання надійних сценаріїв PowerShell. Також за допомогою Visual Studio Code можна і налагоджувати ці сценарії.

## Додаткові матеріали

- [PowerShell — learn.microsoft.com](https://learn.microsoft.com/ru-ru/powershell/scripting/overview)
- [Working with the PowerShell Pipeline — techthoughts.info](https://techthoughts.info/working-with-the-powershell-pipeline/)
- [PowerShell Input & Output — techthoughts.info](https://techthoughts.info/powershell-input-output/)
- [PowerShell Scripts — techthoughts.info](https://techthoughts.info/powershell-scripts/)
- [Шпаргалка по командам PowerShell — comparitech.com](https://www.comparitech.com/net-admin/powershell-cheat-sheet/) или [Компактная шпаргалка (PDF)](https://cdn.comparitech.com/wp-content/uploads/2018/08/Comparitech-Powershell-cheatsheet.pdf)
- [Примеры кода командлетов — learn.microsoft.com](https://learn.microsoft.com/ru-ru/powershell/scripting/developer/cmdlet/examples-of-cmdlet-code)
