/**
 * Created by Rmbp_Nathan on 18/12/2017.
 * 主入口
 */

var Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const nunjucks = require('nunjucks');
const app = new Koa();

const usercontroller = require('./controllers/UserController');
const bookcontroller = require('./controllers/BookController');
const ordercontroller = require('./controllers/OrderController');

router
/// 用户模块api
    .get('/api/v1/user/login',usercontroller.login)         // 用户登录
    .post('/api/v1/user/register',usercontroller.register)   // 用户注册
    .post('api/v1/user/update',usercontroller.update)        // 更新用户信息
    .get('/api/v1/user/',usercontroller.detail)              // 用户信息,参数为用户id
    .get('/api/v1/user/logout',usercontroller.logout)        // 用户退出
/// 书籍模块api
    .post('/api/v1/book/add',bookcontroller.addBook)         // 插入书籍信息
    .get('/api/v1/book/',bookcontroller.detail)              // 书籍信息，参数为ISBN
    .get('api/v1/book/q',bookcontroller.query)               // 模糊查询书籍信息
/// 订单模块api
    .post('/api/v1/order/add',ordercontroller.addOrder)      // 增加订单
    .get('/api/v1/order/q',ordercontroller.query);           // 根据用户ID查询订单


app.use(bodyParser());
app.use(router.routes());
app.listen(3000);