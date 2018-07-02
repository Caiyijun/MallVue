// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'Vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant);
//以上是全局引入
//一下是使用babel-plugin-import  按需引入... 去babellrc看
import {Button, Row, Col, Swipe, SwipeItem, Lazyload, List} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
