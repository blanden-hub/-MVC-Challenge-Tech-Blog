const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init({
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true,
    modelName: "comment",
});

module.exports = Comment;