/**
 * Created by Rmbp_Nathan on 21/12/2017.
 */
const Sequelize = require('sequelize');

// 给ctx.response.body赋值一个js对象，koa会自动序列化为JSON
class UserController {

    // 用户注册
    async register(ctx,next) {
        // await ……
    }

    // 用户登录
    async login(ctx,next) {
        // await ……
    }

    // 用户退出
    async logout(ctx,next) {
        ctx.response.body = '<h1>Hello</h1>';
        // await next;
    }
}

module.exports = new UserController();