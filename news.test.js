const request = require("supertest");
const app = require("../app");
const { token, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("get news", async () => {
  await request(app).get("/news/1").set("Authorization", token).expect(200);
});

test("should fail to get news", async () => {
  await request(app)
    .get("/news/1")
    .set("Authorization", "ThisIsInvalidToken")
    .expect(401);
});

test("get sources", async () => {
  await request(app).get("/sources").set("Authorization", token).expect(200);
});
