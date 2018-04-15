vue init webpack-simple xxx
cd xxx
npm i
npm run dev

解决css不能用
autoprefixer -- >解决浏览器不支持c3
npm install css-loader style-loader postcss-loader --save-dev  
npm install autoprefixer --save-dev 

图片的不同
test: /\.(png|jpg|gif|svg|ttf|woff)

增加路由
npm install vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

定义路由
const routes = [
  { path: '/', component: login },
  { path: '/index', component: login },
  { path: '/register',component:register}
]

创建路由
const router = new VueRouter({
  mode: 'history',
  routes
})

注册路由
new Vue({
  router
})

在这里面，.number可规定类型
<el-input type="number" v-model.number="ruleForm.phone" >

npm install jquery --save




