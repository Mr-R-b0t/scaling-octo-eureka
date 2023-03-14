module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: { type : DataTypes.STRING, allowNull: false },
        id : { type : DataTypes.INTEGER, allowNull: false, primaryKey: true},
        lastname:{type : DataTypes.INTEGER, allowNull :false},
        mail : { type : DataTypes.STRING, allowNull: false },
        password : { type : DataTypes.STRING, allowNull: false },
        phone : { type : DataTypes.STRING, allowNull: false },

    }, {});
    Users.associate = function(models) {
        // associations can be defined here
    };
    return Users;
    }