const console = require('console');
const db = require('../models/movie.model');
const Sequelize = require('sequelize');

const friends = db.friends;

const Op = Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.id_friend) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const friends = {
        id_friend: req.body.id_friend,
        id_user: req.body.id_user,
        name: req.body.name,
        description: req.body.description,
        watched: req.body.watched
    };

    friends.create(friends)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the friends."
            });
        });
}

exports.findAll = (req, res) => {

    friends.findAll()
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    friends.findByPk(id)
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

    friends.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "friends was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update friends with id=${id}. Maybe friends was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating friends with id=" + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    friends.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "friends was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete friends with id=${id}. Maybe friends was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete friends with id=" + id
            });
        });
}

exports.deleteAll = (req, res) => {
    friends.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} friends were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all friends."
            });
        });
}

exports.findAllPublished = (req, res) => {
    friends.findAll({ where: { published: true } })
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

exports.findAllByUser = (req, res) => {

    friends.findAll({ where: { id_user: req.params.id } })
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

exports.findAllByFriend = (req, res) => {

        friends.findAll({ where: { id_friend: req.params.id } })
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