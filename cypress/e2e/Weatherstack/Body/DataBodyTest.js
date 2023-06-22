export const bodyData = [
  { query: "New York", bodyA: "request", bodyB: "type", value: "City" },
  { query: "Paris", bodyA: "request", bodyB: "type", value: "City" },
  { query: "New York", bodyA: "request", bodyB: "language", value: "en" },
  {
    query: "193.0.218.238",
    bodyA: "location",
    bodyB: "region",
    value: "Kyyivs'ka Oblast'",
  },
  {
    query: "40.7831,-73.9712",
    bodyA: "request",
    bodyB: "type",
    value: "LatLon",
  },
  {
    query: "fetch:ip",
    bodyA: "location",
    bodyB: "timezone_id",
    value: "Europe/Kiev",
  },
];

export function tests(query) {
  const test = {
    request: {
      method: "GET",
      url: "http://api.weatherstack.com/current",
      qs: {
        access_key: "35986f8285b7f73e5e4f9939d070f5df",
        query,
      },
      access_key: "35986f8285b7f73e5e4f9939d070f5df",

      failOnStatusCode: false,
    },
  };
  return test;
}
export function testing(tests) {
  describe("Тесты Body", () => {
    for (let bodyDat of bodyData) {
      it(`Тест Body ${bodyDat.bodyA} > ${bodyDat.bodyB} `, () => {
        cy.request(tests(bodyDat.query).request).then((response) => {
          assert.equal(200, response.status);
          assert.equal(
            bodyDat.value,
            response.body[`${bodyDat.bodyA}`][`${bodyDat.bodyB}`]
          );
        });
      });
    }
  });
}
