const Home = resolve => require(['@/views/Home/Home'], resolve);
const Product = resolve => require(['@/views/Product/Product'], resolve);
const User = resolve => require(['@/views/User/User'], resolve);
const More = resolve => require(['@/views/More/More'], resolve);

const routes = [{
    path: '/home',
//  alias: ['/index', '/'],
    name: 'home',
    component: Home,
    meta: {
        title: '多啦首页',
        checkToken: false
    }
}, {
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
        title: '多啦理财页',
        checkToken: false
    }
}, {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
        title: '多啦个人中心',
        checkToken: true
    }
}, {
    path: '/more',
    name: 'more',
    component: More,
    meta: {
        title: '多啦更多资讯',
        checkToken: false
    }
}];

export default routes;
