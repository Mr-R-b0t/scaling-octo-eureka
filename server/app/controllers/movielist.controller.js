const console = require('console');
const db = require('../models/movieList.model');
const Sequelize = require('sequelize');

const movieList = db.movieList;
const Op = Sequelize.Op;

exports.create = (req, res) => {
if (!req.body.id_list) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const movieList = {
        id_list: req.body.id_list,
        id_movieList: req.body.id_movieList,
        id_user: req.body.id_user,
        name: req.body.name,
        description: req.body.description,
        watched: req.body.watched
    };

    movieList.create(movieList)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the movieList."
            });
        });
}

exports.findAll = (req, res) => {
    const id_list = req.query.id_list;
    var condition = id_list ? { id_list: { [Op.like]: `%${id_list}%` } } : null;

    movieList.findAll({ where: condition })
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    movieList.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movieList with id=" + id
            });
        });

}

exports.update = (req, res) => {

    const id = req.params.id;

    movieList.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movieList was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update movieList with id=${id}. Maybe movieList was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating movieList with id=" + id
            });
        });

}

exports.delete = (req, res) => {
    const id = req.params.id;

    movieList.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "movieList was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete movieList with id=${id}. Maybe movieList was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movieList with id=" + id
            });
        });

}

exports.deleteAll = (req, res) => {
    movieList.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} movieLists were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all movieLists."
            });
        });
}

exports.findAllPublished = (req, res) => {
    movieList.findAll({ where: { published: true } })
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

exports.findAllByList = (req, res) => {
    const id_list = req.params.id_list;
    movieList.findAll({ where: { id_list: id_list } })
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

exports.findAllByUser = (req, res) => {
    const id_user = req.params.id_user;
    movieList.findAll({ where: { id_user: id_user } })
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

exports.findAllByListAndUser = (req, res) => {
    const id_list = req.params.id_list;
    const id_user = req.params.id_user;
    movieList.findAll({ where: { id_list: id_list, id_user: id_user } })
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

exports.findAllByListAndUserAndWatched = (req, res) => {
    const id_list = req.params.id_list;
    const id_user = req.params.id_user;
    const watched = req.params.watched;
    movieList.findAll({ where: { id_list: id_list, id_user: id_user, watched: watched } })
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

exports.findAllByListAndUserAndNotWatched = (req, res) => {
    const id_list = req.params.id_list;
    const id_user = req.params.id_user;
    const watched = req.params.watched;
    movieList.findAll({ where: { id_list: id_list, id_user: id_user, watched: watched } })
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

exports.findAllByListAndUserAndWatchedAndNotWatched = (req, res) => {
    const id_list = req.params.id_list;
    const id_user = req.params.id_user;
    const watched = req.params.watched;
    movieList.findAll({ where: { id_list: id_list, id_user: id_user, watched: watched } })
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

exports.findAllByListAndUserAndWatchedAndNotWatchedAndTitle = (req, res) => {
    const id_list = req.params.id_list;
    const id_user = req.params.id_user;
    const watched = req.params.watched;
    const title = req.params.title;
    movieList.findAll({ where: { id_list: id_list, id_user: id_user, watched: watched, title: title } })
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

exports.findAllbyUserAndFriend = (req, res) => {
    const id_user = req.params.id_user;
    const id_friend = req.params.id_friend;
    movieList.findAll({ where: { id_user: id_user, id_friend: id_friend } })
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