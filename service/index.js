const Koa = require('koa');
const app = new Koa();
const { connect } = require('./database/init.js');

app.use(async(ctx) => {
  ctx.body = '<h1>hello</h1>'
});


app.listen(3000,()=>{
  console.log('服务已经启动');
});

;(async()=>{
  await connect();
});
