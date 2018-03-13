const express=require('express')

const app=express();

app.get('/',function (req, res,next) {
    res.send('hello word');
})
app.all('user',function (req, res, next) {
    res.send('user');
})

app.listen(9090,function () {
    console.log('服务启动了')
})