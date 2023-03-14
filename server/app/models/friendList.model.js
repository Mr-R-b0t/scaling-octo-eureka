module.export = (sequelize, DataTypes) => {
    const FriendList = sequelize.define('FriendList', {
        id_user : { type : sequelize.INTEGER, allowNull: false },
        id_friend : { type : sequelize.INTEGER, allowNull: false },
        //date : { type : sequelize.DATE, allowNull: false },
    }, {});
    FriendList.associate = function(models) {
        // associations can be defined here
    };
    return FriendList;
}