/**
 * Created by Rmbp_Nathan on 18/12/2017.
 * 主入口
 */

var Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const nunjucks = require('nunjucks');
const app = new Koa();

const userctroller = require('./controllers/UserController');   // 引入用户模块逻辑层

router
/// 用户模块api
    .post('/v1/user/login',userctroller.login)         // 用户登录
    .post('/v1/user/register',userctroller.register)   // 用户注册
    .get('/v1/user/',userctroller.detail)          // 用户信息,参数为用户id
    .get('/v1/user/logout',userctroller.logout);    // 用户退出
/// 书籍模块api

/// 订单模块api
app.use(bodyParser());
app.use(router.routes());
app.listen(3000);