const request = require("supertest");
const app = require("../app");
const { realUser, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Signup a user", async () => {
  await request(app)
    .post("/users")
    .send({
      fullName: "Hossam Hassan",
      email: "hoss@gmail.com",
      password: "123456789aA@",
    })
    .expect(201);
});

test("Login user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: realUser.email,
      password: realUser.password,
    })
    .expect(200);
});

test("Should fail to login a user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: realUser.email,
      password: "thisIsWrongPassword",
    })
    .expect(401);
});
