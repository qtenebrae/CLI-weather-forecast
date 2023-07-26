# CLI application

The app is designed to get the weather in a particular city today.

## Running the app

Usage without parameters outputs today's weather for the saved city.

```bash
$ npm start

 WEATHER  Погода в городе Москва
☁️ пасмурно
Температура: 21.74 (ощущается как 21.41)
Влажность: 55%
Скорость ветра: 7.35
```

Usage with parameters.

```bash
# set the city
$ npm start -- -s [CITY]

# set token 
$ npm start -- -t [API_KEY]

# output help
$ npm start -- -h

```

## Description

To use the CLI application, you must obtain an API_KEY from the OpenWeather website.