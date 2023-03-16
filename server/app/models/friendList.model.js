module.exports = (sequelize, DataTypes) => {
    const FriendList = sequelize.define('FriendList', {
        id_user : { type : DataTypes.INTEGER, allowNull: false, PrimaryKey: true},
        id_friend : { type : DataTypes.INTEGER, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    FriendList.associate = function(models) {
        // associations can be defined here
    };
    return FriendList;
}