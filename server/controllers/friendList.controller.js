const console = require("console");
const db = require("../models/friendList.model.js");
const MovieList = db.movieList;

exports.findOne = (req, res) => {
    const id = req.params.id;
    MovieList.findByPk(id)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving friends with id=" + id
        });
        });
    }

exports.update = (req, res) => {
    const id = req.params.id;
    MovieList.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Friend was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update friend with id=${id}. Maybe friend was not found or req.body is empty!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating MovieList with id=" + id
        });
        });
    }

exports.delete = (req, res) => {
    const id = req.params.id;
    MovieList.destroy({
        where: { id_friend: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "MovieList was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete MovieList with id=${id}. Maybe MovieList was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete MovieList with id=" + id
        });
        });
    }

    exports.deleteAll = (req, res) => {
    MovieList.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
        res.send({ message: `${nums} Friends were deleted successfully!` });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all friends."
        });
        });
    }

    exports.findAll = (req, res) => {
    MovieList.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving friends."
        });
        });
    }

    exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a Friend
    const friend = {
        id_user : req.body.id_user,
        id_friend : req.body.id_friend,
    };
    // Save Friend in the database
    MovieList.create(friend)
        .then(data => {
        res.send(data);
        }
        )
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Friend."
        });
        }
        );
    };

    exports.findAllPublished = (req, res) => {
    MovieList.findAll({ where: { published: true } })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving friends."
        });
        });
    }
