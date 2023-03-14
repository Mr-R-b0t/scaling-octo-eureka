module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id_movie: { type : sequelize.INTEGER, allowNull: false },
        title : { type : sequelize.STRING, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    Movie.associate = function(models) {
        // associations can be defined here
    };
    return Movie;
}