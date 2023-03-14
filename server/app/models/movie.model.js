module.exports = (Sequelize, DataTypes) => {
    const Movie = Sequelize.define('Movie', {
        id_movie: { type : DataTypes.INTEGER, allowNull: false, primaryKey: true },
        title : { type : DataTypes.STRING, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    Movie.associate = function(models) {
        // associations can be defined here
    };
    return Movie;
}