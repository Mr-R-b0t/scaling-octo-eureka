module.exports = (app) => {
  const movieList = require("../controllers/movielist.controller.js");
  const router = require("express").Router();

  router.get("/", movieList.findAll);

  router.post("/", movieList.create);

  router.get("/:id", movieList.findOne);

  router.delete("/:id", movieList.delete);

  router.put("/:id", movieList.update);

  app.use("/api/movieList", router);
};
