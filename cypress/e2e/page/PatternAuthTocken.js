
export class CheckAuth {
  //Переменные параметров запроса
  testDatas = {
    validTocken: "06c3cb16ed56c0baf27b7c83578a6204",
    notValidTocken: "11111111111111111111111111111",
    validHttpsUrl: `http://api.weatherstack.com/current`,
    notValidHttpsUrl: `https://api.weatherstack.com/current`,
    validQuery: "New York",
    notValidQuery: "165gds",
    nallQuery: "",
  };

  //Параметры запроса
  request = {
    //Валидная авторизация
    requestValid: {
      url: this.testDatas.validHttpsUrl,

      qs: {
        access_key: this.testDatas.validTocken,
        query: this.testDatas.validQuery,
      },
      failOnStatusCode: false,
    },
    //Негативный тест - невалидный токен
    requestNotValidToken: {
      url: this.testDatas.validHttpsUrl,
      qs: {
        access_key: this.testDatas.notValidTocken,
        query: this.testDatas.validQuery,
      },
      failOnStatusCode: false,
    },
    //Негативный тест - шифрование HTTPS не входит в подписку
    requestNotValidHttpsUrl: {
      url: "https://api.weatherstack.com/current", //this.testDatas.notValidHttpsUrl,
      qs: {
        access_key: this.testDatas.validTocken,
        query: this.testDatas.validQuery,
      },
      failOnStatusCode: false,
    },
    //Негативный тест - oшибка запроса в query код 615
    requestNotValidQure: {
      url: this.testDatas.validHttpsUrl,

      qs: {
        access_key: this.testDatas.validTocken,
        query: this.testDatas.notValidQuery,
      },
      failOnStatusCode: false,
    },
    //Негативный тест - oтсутствует запрос в query код 601
    requestNallQure: {
      url: this.testDatas.validHttpsUrl,

      qs: {
        access_key: this.testDatas.validTocken,
        query: this.testDatas.nallQuery,
      },
      failOnStatusCode: false,
    },
  };

// БЛОК ТЕСТОВ

  //Валидная авторизация код 200

  auth() {
    cy.request(this.request.requestValid).then((response) => {
      assert.equal("200", response.status);
      assert.notStrictEqual("error", response.body);
       assert.notStrictEqual('error', response.body);
      // assert.notStrictEqual(601, response.body.error.code);
      // assert.notStrictEqual(615, response.body.error.code);
    });
  }
  // Негативный тест - невалидный токен код 101
  notAuthTocken() {
    cy.request(this.request.requestNotValidToken).then((response) => {
      assert.equal("200", response.status);
      assert.equal(101, response.body.error.code);
      assert.notStrictEqual(105, response.body.error.code);
      assert.notStrictEqual(601, response.body.error.code);
      assert.notStrictEqual(615, response.body.error.code);
    });
  }
  //Негативный тест - шифрование HTTPS не входит в подписку код 105
  notAuthHttps() {
    cy.request(this.request.requestNotValidHttpsUrl).then((response) => {
      assert.equal("200", response.status);
      assert.notStrictEqual(101, response.body.error.code);
      assert.equal(105, response.body.error.code);
      assert.notStrictEqual(601, response.body.error.code);
      assert.notStrictEqual(615, response.body.error.code);
    });
  }
  //Негативный тест - ошибка в запросе  query код 615
  notValidQuery() {
    cy.request(this.request.requestNotValidQure).then((response) => {
      assert.equal("200", response.status);
      assert.notStrictEqual(101, response.body.error.code);
      assert.notStrictEqual(105, response.body.error.code);
      assert.equal(601, response.body.error.code);
      assert.equal(615, response.body.error.code);
    });
  }
  //Негативный тест - отсутствует запрос в query код 601
  nallQuery() {
    cy.request(this.request.requestNallQure).then((response) => {
      assert.equal("200", response.status);
      assert.notStrictEqual(101, response.body.error.code);
      assert.notStrictEqual(105, response.body.error.code);
      assert.equal(601, response.body.error.code);
      assert.notStrictEqual(615, response.body.error.code);
    });
  }
}
