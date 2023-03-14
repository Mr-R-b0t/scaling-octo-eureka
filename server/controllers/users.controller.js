const console = require('console');
const db = require('../models');
const MovieList = db.movieList;

exports.findOne = (req, res) => {
    const id = req.params.id;
    MovieList.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving MovieList with id=" + id
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
                    message: "MovieList was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update MovieList with id=${id}. Maybe MovieList was not found or req.body is empty!`
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
        where: { id: id }
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

exports.findAll = (req, res) => {
    MovieList.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving MovieList."
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
    const movieList = {
        name: req.body.name,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
    MovieList.create(movieList)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MovieList."
            });
        });
}

