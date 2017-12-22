/**
 * Created by Rmbp_Nathan on 22/12/2017.
 * 统一数据库配置
 */

const Sequelize = require('sequelize');
const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = sequelize;