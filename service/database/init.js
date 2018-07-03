const mongoose = require('mongoose');
const db = "mongodb://localhost/mallvue";

exports.connect = ()=>{
  mongoose.connect(db);
  mongoose.connection.on('disconnected',()=>{
    mongoose.connect(db);
  });
  mongoose.connection.on('error',err=>{
    console.log('数据库连接错误');
    mongoose.connect(db);
  });
  mongoose.connection.once('open',()=>{
    console.log('数据库连接成功啦');
  })
};
