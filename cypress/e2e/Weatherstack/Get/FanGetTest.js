//Это функция для запуска тестов валидной авторизации и проверки кодов ошибок.
export function testing(tests) {
  describe("Тесты валидной авторизации и кодов ошибки", () => {
    for (let test of tests) {
      it(`${test.name} status код`, () => {
        cy.request(test.request).then((response) => {
          assert.equal(test.request.status, response.status);

          if (typeof test.errorCode === "string") {
            //Для валидного теста сравниваем код status и наличие в body error

            assert.isNotOk(response.body.error);

            //Для невалидного (негативного) сравниваем код status и ошибки в body
          } else {
            assert.equal(test.errorCode, response.body.error.code);
          }
        });
      });
    }
  });
}
