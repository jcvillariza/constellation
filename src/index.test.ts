import supertest from "supertest";
import { constellation } from "./index";

describe("Server", () => {
  const request = supertest.agent(constellation);

  afterAll((done) => {
    constellation.close(done);
  });

  it("should get /", async () => {
    const res = await request.get("/");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ data: "running" });
  });
});
