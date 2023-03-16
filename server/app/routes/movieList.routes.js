module.exports = app => {
    const movie_list = require("../controllers/movielist.controller");
    var router = require("express").Router();

    //Create a new Movie List

    router.post("/", movie_list.create);

    //Retrieve all Movie Lists

    router.get("/", movie_list.findAll);

    //Retrieve a single Movie List with id

    router.get("/:id", movie_list.findOne);

    //Update a Movie List with id

    router.put("/:id", movie_list.update);

    //Delete a Movie List with id

    router.delete("/:id", movie_list.delete);

    //Delete all Movie Lists

    router.delete("/", movie_list.deleteAll);

    app.use('/api/movie_lists', router);

};