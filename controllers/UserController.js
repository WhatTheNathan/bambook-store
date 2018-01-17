/**
 * Created by Rmbp_Nathan on 21/12/2017.
 * 用户逻辑控制器(router + db accesser)
 * 写得很丑，以后有空再重构(合并函数接口吧)
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
        console.log(`用户登出${ctx.request.query.id}`);
        var user = await User.findAll({
           where:{
               id: ctx.request.query.id,
               password: ctx.request.query.password
           }
        });

        if(user.length == 0){
            ctx.response.status = 404;
        }else {
            var response = {
                'code' : '200'
            }
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
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
        console.log(`更新用户${ctx.request.body.id}信息`);
        var user = await User.findAll({
            where: {
                id: ctx.request.body.id
            }
        });
        if (user.length == 0) {
            ctx.response.status = 404;
        } else {
            if (ctx.request.body.username.length != 0) {
                user[0].username = ctx.request.body.username;
            }
            if (ctx.request.body.password.length != 0){
                user[0].password = ctx.request.body.password;
            }
            if (ctx.request.body.address.length != 0){
                user[0].address = ctx.request.body.address;
            }
            if (ctx.request.body.phoneNumber.length != 0){
                user[0].phoneNumber = ctx.request.body.phoneNumber;
            }
            if (ctx.request.body.creditCard.length != 0){
                user[0].creditCard = ctx.request.body.creditCard;
            }
            await user[0].save();
            var response = {
                'code': '200',
                'user': user[0]
            };
            ctx.response.type = 'application/json';
            ctx.response.body = response;
        }
    }

}

module.exports = new UserController();