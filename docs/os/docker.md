# Docker

## Загальні відомост

[Docker](https://www.docker.com/) - програмне забезпечення «платформа як сервіс» для автоматизації розгортання та керування програмами в середовищах з підтримкою контейнеризації, контейнеризатор додатків. Дозволяє «упакувати» додаток з усім його оточенням та залежностями у контейнер, який може бути розгорнутий на будь-якій системі (Linux, Windows, macOS та UNIX-подібні), а також надає набір команд для керування цими контейнерами.

## Реєстри образів

Реєстр - це система зберігання та доставки іменованих образів Docker різних версій та тегів.

[Docker Hub](https://hub.docker.com/) - це найпростіший у світі спосіб створення, управління та доставки контейнерних додатків.

Але в деяких випадках ви можете не захотіти робити свій образ загальнодоступним. Образи зазвичай містять весь необхідний запуску програми код, тому під час роботи з комерційним програмним забезпеченням переважно використовувати приватний реєстр.

Для створення приватного реєстру скористайтесь образом [registry](https://hub.docker.com/_/registry) - реалізація Docker Registry для зберігання та розповсюдження образів Docker.

- [Развертывание сервера реестра — docs.docker.com](https://docs.docker.com/registry/deploying/)
- [Настройка частного реестра Docker в Ubuntu 18.04 — digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-18-04-ru)

## Додаткові матеріали

### Про Docker

- [Почему разработчики .NET должны заботиться о Docker? — jetbrains.com](https://www.jetbrains.com/dotnet/guide/tutorials/docker-dotnet/why-care-about-docker/)
- [Docker для начинающих — docker-curriculum.com](https://docker-curriculum.com/)

### Установка та команди

- [Docker Desktop для Windows — hub.docker.com](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Docker Desktop для Windows. Руководство пользователя — docs.docker.com](https://docs.docker.com/desktop/windows/)
- [Команды Docker — docs.docker.com](https://docs.docker.com/engine/reference/commandline/)
- [Шпаргалка по Ultimate Docker — dockerlabs.collabnix.com](https://dockerlabs.collabnix.com/docker/cheatsheet/)

### Робота з Docker

- [.NET Core. Контейнеризация приложения .NET — learn.microsoft.com](https://learn.microsoft.com/ru-ru/dotnet/core/docker/build-container)
- [.NET Core. Cоздание многоконтейнерного приложения с помощью Docker Compose — learn.microsoft.com](https://learn.microsoft.com/en-us/visualstudio/containers/tutorial-multicontainer)
- [Краткое руководство: Compose и ASP.NET Core с SQL Server — docs.docker.com](https://docs.docker.com/samples/aspnet-mssql-compose/)
- [Разработка под Docker: Nginx + PHP + MySql + phpMyAdmin — habr.com](https://habr.com/ru/post/460173/)
  docker/)
- [Docker | DevOps: Автоматизация локального окружения — ru.hexlet.io](https://ru.hexlet.io/courses/devops-local-setup/lessons/docker/theory_unit)
