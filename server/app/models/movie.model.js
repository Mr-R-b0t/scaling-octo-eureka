module.exports = (Sequelize, DataTypes) => {
    const Movie = Sequelize.define('Movie', {
        id_movie: { type : DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true },
        title : { type : DataTypes.STRING, allowNull: false },
        poster : { type : DataTypes.STRING, allowNull: false },
        runtime : { type : DataTypes.STRING, allowNull: false },
        release_date : { type : DataTypes.STRING, allowNull: false },
        country : { type : DataTypes.STRING, allowNull: false },
        rating : { type : DataTypes.STRING, allowNull: false },
        description : { type : DataTypes.TEXT, allowNull: false },
        status : { type : DataTypes.STRING, allowNull: false },
        genre : { type : DataTypes.STRING, allowNull: false },
        budget : { type : DataTypes.STRING, allowNull: false },
        revenue : { type : DataTypes.STRING, allowNull: false },
        language : { type : DataTypes.STRING, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    Movie.associate = function(models) {
        // associations can be defined here
    };
    return Movie;
}