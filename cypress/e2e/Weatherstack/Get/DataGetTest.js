//Здесь формируем сами данные для тестов валидации авторизации ...
export const tests = [
  {
    //Имя теста
    name: "Валидный токен",
    // Ожидаемый код status
    request: {
      status: 200,
      // Валидный url
      url: `http://api.weatherstack.com/current`,

      qs: {
        //валидный токен tocken
        access_key: "35986f8285b7f73e5e4f9939d070f5df",
        // валидный query
        query: "New York",
      },
    },
    //Код ошибки
    errorCode: "Нэту",
    failOnStatusCode: false,
  },

  //Имя теста nameTest
  {
    name: "Невалидный токен, код 101",
    request: {
      status: 200,
      url: `http://api.weatherstack.com/current`,
      qs: {
        access_key: "3d5bf887b153ab--;HFLKha97782238e412c11d2e11",
        // валидный query
        query: "New York",
      },
    },
    errorCode: 101,
    failOnStatusCode: false,
  },
  {
    name: "Невалидный https/ не соответствует подписке, код 105",
    request: {
      status: 200,
      url: `https://api.weatherstack.com/current`,
      qs: {
        access_key: "35986f8285b7f73e5e4f9939d070f5df",
        // валидный query
        query: "New York",
      },
    },
    errorCode: 105,
    failOnStatusCode: false,
  },
  // И так далее.
];
