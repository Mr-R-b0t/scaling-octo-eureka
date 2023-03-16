const console = require('console');
const db = require('../models');
const users = db.users;

exports.findOne = (req, res) => {
    const id = req.params.id;
    users.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving users with id=" + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;
    users.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating users with id=" + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    users.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "users was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete users with id=${id}. Maybe users was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete users with id=" + id
            });
        });
}

exports.findAll = (req, res) => {
    users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const users = {
        name: req.body.name,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
    users.create(users)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the users."
            });
        });
}

exports.findAllPublished = (req, res) => {
    users.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.deleteAll = (req, res) => {
    users.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
}
