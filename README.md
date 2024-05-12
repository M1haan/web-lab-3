# web-lab-3

Лабораторная работа № 3 по дисциплине 'Web-программирование'

Задание 1. Проверка наличия nodejs и npm
Запустите VSCode, откройте окно терминала и наберите команды
node -v
npm -v

Задание 2. Установка и настройка webpack

Инициализируйте npm в новой папке с помощью команды npm init (должен создаться
файл package.json).
Установите с помощью npm webpack и настройте его для вашего приложения,
например, следующим образом (возможны и другие варианты по вашему желанию):<br>
● команда npm build должна создавать собранное приложение в отдельной папке<
build или dist;<br>
● при сборке все js-файлы должны собираться в единый минифицированный
bundle.js;<br>
● команда npm start должна запускать webpack-dev-server с горячей
перезагрузкой приложения в браузере при любом сохранении файла;<br>
● css-файл(ы) должны собираться автоматически с помощью css-loader,
style-loader;<br>
● html-файл(ы) также должны попадать в сборку с помощью HtmlWebpackPlugin<br>

Задание 3. Миграция приложения из лабораторной 2
Перенесите слайдер или калькулятор из 2-й лабораторной работы в новое окружение
с webpack.

Задание 4. Использование REST API

Напишите простой виджет, отображающий результаты поиска вакансий на сайте hh.ru с
использованием его API: см. https://github.com/hhru/api/blob/master/docs/vacancies.md#search
Для получения данных используйте библиотеку axios (см. https://nodejs.dev/learn/making-http-requests-with-nodejs, https://github.com/axios/axios)
