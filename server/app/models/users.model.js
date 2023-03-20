module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
      "Users",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        name: { type: DataTypes.STRING, allowNull: true },
        lastname: { type: DataTypes.STRING, allowNull: true },
        mail: { type: DataTypes.STRING, allowNull: true },
        password: { type: DataTypes.STRING, allowNull: true },
        /* createAt : { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.NOW },
        updateAt : { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.NOW }, */
      },
      { timestamps: true }
    );
    Users.associate = function(models) {
        // associations can be defined here
    };
    return Users;
    }