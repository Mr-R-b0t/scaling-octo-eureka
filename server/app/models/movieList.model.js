module.exports = (sequelize, DataTypes) => {
    const MovieList = sequelize.define('MovieList', {
        id_list : { type : DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
        id_movie : { type : DataTypes.INTEGER, allowNull: false },
        id_user : { type : DataTypes.INTEGER, allowNull: false },
        name : { type : DataTypes.STRING, allowNull: false },
        description : { type : DataTypes.STRING, allowNull: false },
        watched : { type : DataTypes.BOOLEAN, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    MovieList.associate = function(models) {
        // associations can be defined here
    };
    return MovieList;
}