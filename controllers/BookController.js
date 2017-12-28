/**
 * Created by Rmbp_Nathan on 29/12/2017.
 */

const Book = require('../models/Book');

class BookController {

    // 插入书籍信息，内部接口
    async addBook(ctx,next) {

    }

    // 精确查询书籍基本信息  By ISBN
    async detail(ctx,next) {

    }

    // 模糊查询书籍基本信息 By authorName、Title、ISBN
    async query(ctx,next) {

    }

}

module.exports = new BookController();