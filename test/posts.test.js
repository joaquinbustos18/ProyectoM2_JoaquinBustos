const request = require("supertest");
const app = require("../src/app");

describe("Posts API", () => {
  test("GET /posts debe devolver 200", async () => {
    const response = await request(app).get("/posts");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("DELETE recurso inexistente devuelve 404", async () => {
    const response = await request(app).delete("/posts/99999");

    expect(response.statusCode).toBe(404);
  });
});
