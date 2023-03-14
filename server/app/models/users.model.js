module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: { type : sequelize.STRING, allowNull: false },
        id : { type : sequelize.INTEGER, allowNull: false },
        lastname:{type : sequelize.INTEGER, allowNull :false},
        mail : { type : sequelize.STRING, allowNull: false },
        password : { type : sequelize.STRING, allowNull: false },
        phone : { type : sequelize.STRING, allowNull: false },

    }, {});
    Product.associate = function(models) {
        // associations can be defined here
    };
    return Users;
    }