/**
 * Created by Rmbp_Nathan on 29/12/2017.
 */

const Sequelize = require('sequelize');
const db = require('../db');

var Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userID: Sequelize.INTEGER,
    bookID: Sequelize.STRING(50),
    orderNum: Sequelize.INTEGER,
    orderStatus: Sequelize.STRING(20),
    bookPrice: Sequelize.DOUBLE()
}, {
    timestamps: true
});

module.exports = Order;