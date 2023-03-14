const users = require("../controllers/users.controller");
module.exports = app => {
    const movie = require("../controllers/movie.controller.js");
    var router = require("express").Router();

    //Create a new Movie

    router.post("/", movie.create);

    //Retrieve all Movies

    router.get("/", movie.findAll);

    //Retrieve a single Movie with id

    router.get("/:id", movie.findOne);

    //Update a Movie with id

    router.put("/:id", movie.update);

    //Delete a Movie with id

    router.delete("/:id", movie.delete);

    //Delete all Movies

    router.delete("/", movie.deleteAll);

    app.use('/api/movies', router);

};