# mallvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```bash
# 第二节
 使用babel-plugin-import 进行vant按需引入。<br>使用时先在.babelrc文件中的plugin中进行设置,再去main.js中引入button。<br>再使用Vue.use(Button);这样子就可以在项目中使用button。按需引入。
 \<br>npm i babel-plugin-import -D

 # 第三节
设置rem，项目中字体大小等使用rem。iphone5 根字体大小16px; 320 / 20  = 16px;

# 第四节
首页布局，通过按需加载引入需要用的组件，再通过use()使用。参考main.js第11行

```