const app = require("./app");

const request = require("supertest");

it("Route / should return status 200 and message : Server running", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe("Server running");
      return done();
    });
});

it("Route /g10 should return status 200 and message : Hello G10", (done) => {
  request(app)
    .get("/g10")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe("Hello G12");
      return done();
    });
});

it("sum function will return 3 if first argument =1 and second = 2", () => {
  expect(1 + 2).toBe(3);
});
