const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')

const node = express();

node.use(bodyParser.json());
node.use(bodyParser.urlencoded({extended:false}))

node.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

node.post('/login',function(req,res){
　　var user={
　　　　name:'admin',
　　　　password:'123'
　　};
var result = {};

console.log('user.name'+user.name)
console.log('req.body.name'+req.body.name)
console.log('user.password'+user.password)
console.log('123'+req.body.password)

　　if(req.body.name != user.name || req.body.password != user.password) {
　　　　result.status = 0
        result.message = "不正确"
        console.log('123'+result.status)
　　}else{
　　　　result = {status:1,message:"登录成功"}
console.log('456'+result.status)
　　}
    res.send(result)
});

node.listen(3000,'192.168.0.130',(err)=>{
    if(err) console.log(err)
        console.log('start ok')
})

