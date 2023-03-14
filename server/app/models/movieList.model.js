module.exports = (sequelize, DataTypes) => {
    const MovieList = sequelize.define('MovieList', {
        id_list : { type : sequelize.INTEGER, allowNull: false },
        id_movie : { type : sequelize.INTEGER, allowNull: false },
        id_user : { type : sequelize.INTEGER, allowNull: false },
        name : { type : sequelize.STRING, allowNull: false },
        description : { type : sequelize.STRING, allowNull: false },
        watched : { type : sequelize.BOOLEAN, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    MovieList.associate = function(models) {
        // associations can be defined here
    };
    return MovieList;
}