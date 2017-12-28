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
    userID: Sequelize.STRING(50),
    bookID: Sequelize.STRING(50),
    orderNum: Sequelize.INTEGER,
    orderTime: Sequelize.DATE,
    orderStatus: Sequelize.STRING(10),
    bookPrice: Sequelize.DOUBLE()
}, {
    timestamps: false
});

module.exports = Order;