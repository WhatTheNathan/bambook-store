/**
 * Created by Rmbp_Nathan on 27/12/2017.
 */

const Sequelize = require('sequelize');
const db = require('../db');

var Book = db.define('book', {
    ISBN: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true
    },
    bookName: Sequelize.STRING(50),
    authorName: Sequelize.STRING(50),
    price: Sequelize.DOUBLE(),
    image_url: Sequelize.STRING(100),
    remainNum: Sequelize.INTEGER,
    soldNum: Sequelize.INTEGER,
    description: Sequelize.STRING(100)
}, {
    timestamps: false
});

module.exports = Book;
