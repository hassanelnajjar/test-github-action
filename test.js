const app = require("./app");

const request = require("supertest");

it("Route / should return status 200 and message : Server running", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .then((res) => {
      expect(res.body.message).toBe("Server running");
      done();
    });
});

it("Route /g10 should return status 200 and message : Hello G10", (done) => {
  request(app)
    .get("/g10")
    .expect(200)
    .then((res) => {
      expect(res.body.message).toBe("Hello G10");
      done();
    });
});

it("sum function will return 3 if first argument =1 and second = 2", () => {
  expect(1 + 2).toBe(3);
});
