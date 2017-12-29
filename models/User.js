/**
 * Created by Rmbp_Nathan on 22/12/2017.
 * 用户模型
 */

const Sequelize = require('sequelize');
const db = require('../db');

var User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING(50),
    password: Sequelize.STRING(50),
    address: Sequelize.STRING(100),
    phoneNumber: Sequelize.STRING(11),
    creditCard: Sequelize.STRING(30)
}, {
    timestamps: false
});

module.exports = User;