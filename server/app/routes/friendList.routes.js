module.exports = app => {
    const friend = require("../controllers/friendList.controller.js");
    var router = require("express").Router();

    router.post("/", friend.create);

    router.get("/", friend.findAll);

    router.get("/:id", friend.findOne);

    router.put("/:id", friend.update);

    router.delete("/:id", friend.delete);

    router.delete("/", friend.deleteAll);

    app.use('/api/friends', router);

};