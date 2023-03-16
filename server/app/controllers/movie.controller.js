const console = require('console');
const db = require('../models/movie.model');
const Sequelize = require('sequelize');



const movie = db.MovieList;
const Op = Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_list) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a movie
    const movie = {
        id_list: req.body.id_list,
        id_movie: req.body.id_movie,
        id_user: req.body.id_user,
        name: req.body.name,
        description: req.body.description,
        watched: req.body.watched
    };

    // Save movie in the database
    movie.create(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the movie."
            });
        });
    
}

// Retrieve all movies from the database.

exports.findAll = (req, res) => {
    const id_list = req.query.id_list;
    var condition = id_list ? { id_list: { [Op.like]: `%${id_list}%` } } : null;

    movie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
}

// Find a single movie with an id

exports.findOne = (req, res) => {
    const id = req.params.id;

    movie.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with id=" + id
            });
        });
}


// Update a movie by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    movie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "movie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update movie with id=${id}. Maybe movie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating movie with id=" + id
            });
        });
}

// Delete a movie with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    movie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete movie with id=${id}. Maybe movie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            });
        });
}

// Delete all movies from the database.

exports.deleteAll = (req, res) => {
    movie.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} movies were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all movies."
            });
        });
}

// Find all published movies

exports.findAllPublished = (req, res) => {
    movie.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
}

