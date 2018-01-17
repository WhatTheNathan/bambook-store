/**
 * Created by Rmbp_Nathan on 29/12/2017.
 */

const Order = require('../models/Order');
const Book = require('../models/Book');

class OrderController {

    // 增加订单
    async addOrder(ctx,next) {
        var order = await Order.create({
            userID: ctx.request.body.userID,
            bookID: ctx.request.body.bookID,
            orderNum: ctx.request.body.orderNum,
            orderStatus: 'unprocessed',
            bookPrice: ctx.request.body.bookPrice
        });

        var response = {
            'order': order
        };
        ctx.response.type = 'application/json';
        ctx.response.body = response;
    }

    // 根据用户ID查询订单
    async query(ctx,next) {
        console.log(`查询订单${ctx.request.query.userID}`);
        var orders = await Order.findAll({
            where: {
                userID: ctx.request.query.userID
            }
        });

        if (orders.length == 0) {
            // ctx.response.status = 404;
            var response = {
                'error' : 'OrderNotFound'
            };
            ctx.response.body = response;
        } else {
            var response = {
                'totalCount': orders.length,
                'orders': orders
            };
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
    }

    async deleteOrder(ctx,next) {
        console.log(`删除订单${ctx.request.query.id}`);
        var order = await Order.findAll({
            where: {
                id: ctx.request.query.id
            }
        });
        if (order.length == 0){
            // ctx.response.status = 404;
            var response = {
                'error' : 'OrderNotFound'
            };
            ctx.response.body = response;
        }else{
            var response = {
                'order': order[0]
            };
            await order[0].destroy();
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
    }

    async checkout(ctx,next) {
        console.log(`处理订单${ctx.request.body.id}`);
        var order = await Order.findAll({
            where: {
                id: ctx.request.body.id
            }
        });
        if (order.length == 0){
            // ctx.response.status = 404;
            var response = {
                'error' : 'OrderNotFound'
            };
            ctx.response.body = response;
        }else{
            order[0].orderStatus = 'finished';
            var book = await Book.findAll({
                where: {
                    ISBN: order[0].bookID
                }
            });
            book[0].remainNum -= order[0].orderNum;
            book[0].soldNum += order[0].orderNum;
            await book[0].save();
            order[0].orderStatus = 'finished';
            await order[0].save();
            var response = {
                'order': order[0]
            };
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
    }

    async update(ctx,next){
        console.log(`更新订单${ctx.request.body.id}信息`);
        var order = await Order.findAll({
            where: {
                id: ctx.request.body.id
            }
        });
        if (order.length == 0) {
            // ctx.response.status = 404;
            var response = {
                'error' : 'OrderNotFound'
            };
            ctx.response.body = response;
        } else {
            if (ctx.request.body.orderNum.length != 0) {
                order[0].orderNum = ctx.request.body.orderNum;
            }
            await order[0].save();
            var response = {
                'order': order[0]
            };
            ctx.response.body = response;
        }
        ctx.response.type = 'application/json';
    }

}

module.exports = new OrderController();
