const console = require('console');
const db = require('../models');


const MovieList = db.movieList;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_list) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a MovieList
    const movieList = {
        id_list: req.body.id_list,
        id_movie: req.body.id_movie,
        id_user: req.body.id_user,
        name: req.body.name,
        description: req.body.description,
        watched: req.body.watched
    };

    // Save MovieList in the database
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

// Retrieve all MovieLists from the database.

exports.findAll = (req, res) => {
    const id_list = req.query.id_list;
    var condition = id_list ? { id_list: { [Op.like]: `%${id_list}%` } } : null;

    MovieList.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movieLists."
            });
        });
}

// Find a single MovieList with an id

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


// Update a MovieList by the id in the request

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

// Delete a MovieList with the specified id in the request

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

// Delete all MovieLists from the database.

exports.deleteAll = (req, res) => {
    MovieList.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} MovieLists were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all movieLists."
            });
        });
}

// Find all published MovieLists

exports.findAllPublished = (req, res) => {
    MovieList.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movieLists."
            });
        });
}

