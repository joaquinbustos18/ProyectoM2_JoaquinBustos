const request = require("supertest");
const app = require("../src/app");

describe("Authors API", () => {
  test("GET /authors debe devolver 200", async () => {
    const response = await request(app).get("/authors");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /authors/1 debe devolver un author", async () => {
    const response = await request(app).get("/authors/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });
});
