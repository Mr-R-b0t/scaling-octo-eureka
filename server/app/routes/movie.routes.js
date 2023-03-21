module.exports = (app) => {
  const movies = require("../controllers/movie.controller.js");
  const router = require("express").Router();

  router.get("/", movies.findAll);

  router.post("/", movies.create);

  router.get("/:id", movies.findOne);

  router.delete("/:id", movies.delete);

  router.put("/:id", movies.update);

  app.use("/api/movies", router);
};
