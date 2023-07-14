# Cron-вирази

## Стисло про Cron-вирази

Cron-вирази призначені для можливості задавати періодичність і час спрацьовування завдань планувальника. Cron-формат є простим, але потужним і гнучким способом опису часу і періодичності дій.

```txt
    * * * * *
    - - - - -
    | | | | |
    | | | | +----- день тижня (0-6) (неділя=0)
    | | | +------- місяць (1-12)
    | | +--------- день місяця (1-31)
    | +----------- година (0-23)
    +------------- минута (0-59)
```

Будь-яке з полів може містити символ \* (зірочка) в якості значень. Це означає повний діапазон можливих значень, наприклад, хвилину, кожен час і так далі.

Будь-яке з полів також може містити перелік значень, розділених комами (наприклад: 1,3,7) або інтервал значень через дефіс (наприклад: 1-5).

Після зірочки (\*) або інтервалу можна за допомогою символу / (коса риска) вказати крок значень.  
Наприклад, 0-23/2 може використовуватися в полі "Година" для вказівки того, що дія повинна відбуватися кожні дві години.

Приклади:

```csharp
// 0 12 * * 1-5  опівдні у робочі дні
// 9 1-7 * 1     перший понеділок кожного місяця, о 9 ранку


// Приклад класу, який визначає часто використовувані вирази Cron

public static class CronExpression
{
    /// <summary>
    /// Every minute. Щохвилини
    /// </summary>
    public const string Minutely = "* * * * *";

    /// <summary>
    /// Every hour. Щогодини
    /// </summary>
    public const string Hourly = "0 * * * *";

    /// <summary>
    /// Every day at 00:00. Щодня о 00:00
    /// </summary>
    public const string Daily = "0 0 * * *";

    /// <summary>
    /// Every Monday at 00:00. Кожного понеділка о в 00:00
    /// </summary>
    public const string Weekly = "0 0 * * 1";

    /// <summary>
    /// Every first day of the month at 00:00. Кожен перший день місяця о 00:00
    /// </summary>
    public const string Monthly = "0 0 1 * *";

    /// <summary>
    /// Every year on January 1st at 00:00. Щороку 1 січня о 00:00
    /// </summary>
    public const string Yearly = "0 0 1 1 *";
}
```

## Додаткові матеріали

- [Калькулятор CRON — ukraine.com.ua](https://www.ukraine.com.ua/info/tools/cron-editor/)
- [Формування крон-виразів онлайн — freeformatter.com](https://www.freeformatter.com/cron-expression-generator-quartz.html)
- [The quick and simple editor for cron schedule expressions — crontab.guru](https://crontab.guru/)
