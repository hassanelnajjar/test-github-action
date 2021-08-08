const app = require("./app");

const request = require("supertest");

it("Route / should return status 200 and message : Server running", async () => {
  const {
    body: { message },
  } = await request(app).get("/").expect(200);
  return expect(message).toBe("Server running");
});

it("Route /g10 should return status 200 and message : Hello G10", async () => {
  const {
    body: { message },
  } = await request(app).get("/g10").expect(200);
  return expect(message).toBe("Hello G10");
});
