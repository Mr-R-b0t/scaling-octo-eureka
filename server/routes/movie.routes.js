module.exports = app => {
    const movie = require("../controllers/movie.controller.js");
    var router = require("express").Router();
    // Create a new MovieList
    router.post("/", movie.create);
    // Retrieve all MovieLists
    router.get("/", movie.findAll);
    // Retrieve a single MovieList with id
    router.get("/:id", movie.findOne);
    // Update a MovieList with id
    router.put("/:id", movie.update);
    // Delete a MovieList with id
    router.delete("/:id", movie.delete);
    // Delete all MovieLists
    router.delete("/", movie.deleteAll);
    app.use('/api/movie', router);
}
