/**
 * Created by Rmbp_Nathan on 21/12/2017.
 * 用户逻辑控制器(router + db accesser)
 */

const User = require('../models/User');

class UserController {

    // 用户注册
    async register(ctx,next) {
        var user = await User.create({
            username: ctx.request.body.username,
            password: ctx.request.body.password
        });

        var response = {
            'code': '200',
            'user': user
        };
        ctx.response.type = 'application/json';
        ctx.response.body = response;
    }

    // 用户登录
    async login(ctx,next) {
        console.log(`用户登录${ctx.request.query.id}`);
        var user = await User.findAll({
            where: {
                id: ctx.request.query.id,
                password: ctx.request.query.password
            }
        });

        if(user.length == 0){
            ctx.response.status = 404;
        }else{
            var response = {
                'code': '200',
                'user': user
            };
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
    }

    // 用户退出
    async logout(ctx,next) {
        ctx.response.type = 'application/json';
        ctx.response.body = '<h1>logout</h1>';
        // await next;
    }

    // 用户基本信息
    async detail(ctx,next) {
        console.log(`查询用户${ctx.request.query.id}`);
        var user = await User.findAll({
            where: {
                id: ctx.request.query.id
            }
        });

        if (user.length == 0) {
            ctx.response.status = 404;
        } else {
            ctx.response.type = 'application/json';
            ctx.response.body = user[0];
        }
    }

    // 更新用户信息
    async update(ctx,next) {

    }

}

module.exports = new UserController();