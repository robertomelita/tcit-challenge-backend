const { DataTypes } = require("sequelize")
const { sequelize } = require("../database")

const Posts = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
},{
    timestamps: false,
});

exports.Posts = Posts;
