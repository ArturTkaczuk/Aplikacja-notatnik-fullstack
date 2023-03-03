// To start tests in /backend run "npm jest"

import app from "../app/app.js";
import request from "supertest";

let createdNotesIds = [];

describe("GET /notes", () => {
  it("Responds with json", function (done) {
    request(app)
      .get("/api/v1/notes")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe("POST /notes", () => {
  describe("Tests with correct data sent", () => {
    it("Creates test note one", function (done) {
      request(app)
        .post("/api/v1/notes")
        .send({
          title: "TEST NOTE ONE",
          description: "DESCRIPTION ONE",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          createdNotesIds.push(res.body._id);
          return done();
        });
    });

    it("Creates test note two", function (done) {
      request(app)
        .post("/api/v1/notes")
        .send({
          title: "TEST NOTE TWO",
          description: "DESCRIPTION TWO",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          createdNotesIds.push(res.body._id);
          return done();
        });
    });
  });

  describe("Tests with invalid data sent", () => {
    it("Doesn't create test note that has no description field", function (done) {
      request(app)
        .post("/api/v1/notes")
        .send({
          title: "TEST NOTE WITHOUT DESCRIPTION",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(422)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it("Doesn't create test note that has no title field", function (done) {
      request(app)
        .post("/api/v1/notes")
        .send({
          description: "TEST NOTE WITHOUT TITLE",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(422)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });
});

describe("PUT /notes/:id", () => {
  describe("Tests with correct data sent", () => {
    it("Updates test note one", function (done) {
      request(app)
        .put(`/api/v1/notes/${createdNotesIds[0]}`)
        .send({
          title: "TEST NOTE ONE (updated)",
          description: "DESCRIPTION ONE (updated)",
        })
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it("Updates test note two", function (done) {
      request(app)
        .put(`/api/v1/notes/${createdNotesIds[1]}`)
        .send({
          title: "TEST NOTE TWO (updated)",
          description: "DESCRIPTION TWO (updated)",
        })
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe("Tests with invalid data sent", () => {
    it("Doesn't update note with invalid id", function (done) {
      request(app)
        .put(`/api/v1/notes/12345}`)
        .send({
          title: "THIS SHOULD FAIL ONE",
          description: "THIS SHOULD FAIL ONE",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(422)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });
});

describe("DELETE /notes/:id", () => {
  describe("Tests with correct data sent", () => {
    it("Deletes test note one", function (done) {
      request(app)
        .delete(`/api/v1/notes/${createdNotesIds[0]}`)
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it("Deletes test note two", function (done) {
      request(app)
        .delete(`/api/v1/notes/${createdNotesIds[1]}`)
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });

    describe("Tests with invalid data sent", () => {
      it("Doesn't delete test note with wrong id", function (done) {
        request(app)
          .delete(`/api/v1/notes/1231231434`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(422)
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
      });
    });
  });
});
