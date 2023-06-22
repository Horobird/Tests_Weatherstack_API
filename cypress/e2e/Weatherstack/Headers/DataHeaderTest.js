//Здесь данные и функция для выполнени тестов Headers
//В arrreyHeaders заполняем ключи и имена Headers
export const arrreyHeaders = [
  { key: "Connection", value: "keep-alive" },
  { key: "accept-encoding", value: "gzip, deflate" },
  { key: "accept", value: "*/*" },
];
//Эта функция формирует request
export function tests(key, value) {
  const test = {
    request: {
      url: "http://api.weatherstack.com/current",
      headers: {
        key: value,
      },
    },
    failOnStatusCode: false,
  };
  return test;
}
//Эта функция формирует тесты. Первый тест My agent-user.
export function testing(test) {
  describe("Тесты headers", () => {
    it("My test user-agent", () => {
      tests("user-agent", "My test user-agent");
      cy.request(tests().request).then((response) => {
        assert.equal(200, response.status);
        assert("My test user-agent", response.requestHeaders["user-agent"]);
      });
    });

    for (let header of arrreyHeaders) {
      it(`Header ${header.key}`, () => {
        tests(header.key, header.value);
        cy.request(tests().request).then((response) => {
          assert.equal(200, response.status);
          assert.equal(header.value, response.requestHeaders[`${header.key}`]);
        });
      });
    }
  });
}
