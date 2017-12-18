/**
 * Created by Rmbp_Nathan on 18/12/2017.
 */

var Koa = require('koa');
var app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello World';
});
app.listen(3000);