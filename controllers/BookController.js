/**
 * Created by Rmbp_Nathan on 29/12/2017.
 */
const Sequelize = require('sequelize');
const Book = require('../models/Book');

class BookController {

    // 插入书籍信息，内部接口
    async addBook(ctx,next) {
        var book = await Book.create({
            ISBN: ctx.request.body.ISBN,
            bookName: ctx.request.body.bookName,
            authorName: ctx.request.body.authorName,
            price: ctx.request.body.price,
            remainNum: ctx.request.body.remainNum,
            soldNum: 0,
            image_url: ctx.request.body.image_url,
            description: ctx.request.body.description
        });

        var response = {
            'code': '200',
            'book': book
        };
        ctx.response.type = 'application/json';
        ctx.response.body = response;
    }

    // 精确查询书籍基本信息  By ISBN
    async detail(ctx,next) {
        console.log(`查询书籍${ctx.request.query.ISBN}`);
        var book = await Book.findAll({
            where: {
                ISBN: ctx.request.query.ISBN
            }
        });

        if (book.length == 0) {
            ctx.response.status = 404;
        } else {
            ctx.response.type = 'application/json';
            ctx.response.body = book[0];
        }
    }

    // 模糊查询书籍基本信息 By authorName、Title、ISBN
    async query(ctx,next) {
        const Op = Sequelize.Op;
        console.log(Op);
        console.log(`模糊查询书籍`);
        var book = await Book.findAll({
            where: {
                ISBN: {
                    $like: `%${ctx.request.query.ISBN}`
                },
                authorName: {
                    $like: `%${ctx.request.query.authorName}`
                },
                bookName: {
                    $like: `%${ctx.request.query.bookName}`
                }
            }
        });

        if (book.length == 0) {
            ctx.response.status = 404;
        } else {
            ctx.response.type = 'application/json';
            var response = {
                'totalCount': book.length,
                'books': book
            };
            ctx.response.body = response;
        }
    }
}

module.exports = new BookController();