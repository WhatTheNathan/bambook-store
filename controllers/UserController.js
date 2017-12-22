/**
 * Created by Rmbp_Nathan on 21/12/2017.
 * 用户逻辑控制器(router + db accesser)
 */

const User = require('../models/User');

// 给ctx.response.body赋值一个js对象，koa会自动序列化为JSON
class UserController {


    // 用户注册
    async register(ctx,next) {
        var user = await User.create({
            username: ctx.request.body.username,
            password: ctx.request.body.password
        });
        // console.log('created: ' + JSON.stringify(user));
        ctx.response.type = 'application/json';
        var response = {
            'code': '200',
            'user': user
        };
        ctx.response.type = 'application/json';
        ctx.response.body = response;
    }

    // 用户登录
    async login(ctx,next) {
        ctx.response.type = 'application/json';
        // await ……
    }

    // 用户退出
    async logout(ctx,next) {
        ctx.response.type = 'application/json';
        ctx.response.body = '<h1>logout</h1>';
        // await next;
    }

    // 用户基本信息
    async detail(ctx,next) {
        console.log(`查询${ctx.request.query.id}`);
        var user = await User.findAll({
            where: {
                id: ctx.request.query.id
            }
        });
        ctx.response.type = 'application/json';
        ctx.response.body = user;
    }

}

module.exports = new UserController();