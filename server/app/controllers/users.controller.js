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

exports.create = async (req, res) => {
   if (!req.body.lastname || !req.body.email || !req.body.password || !req.body.name) {
    res.status(400).send({
      message: "User must have name, email !",
    });
    return;
  } 
  if ( await users.findOne({ where: { mail: req.body.email } })) {
    res.status(511).send({
        message: "User already exists !",
        });
    return;
    } 
  await users
    .create({
      name: req.body.name,
      lastname: req.body.lastname,
      mail: req.body.email,
      password: req.body.password,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not insert the data",
      });
    });
};

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
