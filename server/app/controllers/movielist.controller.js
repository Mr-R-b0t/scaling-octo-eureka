const db = require("../models");
const movieList = db.movieList;
const OP = db.Sequelize.Op;

exports.findAll = (req, res) => {
  movieList.findAll().then((data) => {
    res.send(data);
  });
};

exports.create = (req, res) => {
  //console.log(req.body)
  movieList
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: "Could not insert into the table",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  movieList
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: "Could not find the data",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  movieList
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "movieàList was deleted",
        });
      } else {
        res.send({
          message: "Could not delete",
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: "Database error",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  movieList
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "movieList was updatedd",
        });
      } else {
        res.send({
          message: "Could not update",
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: "Database error",
      });
    });
};
