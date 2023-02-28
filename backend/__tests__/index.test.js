const app = require("../app/app");
const request = require("supertest");

describe("GET /notes", () => {
  it("Responds with json", function (done) {
    request(app)
      .get("/api/v1/notes")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
