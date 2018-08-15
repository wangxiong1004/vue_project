import router from './index';

router.beforeEach((to, from, next) => {
//  console.log(to);
    if (to.meta.title) {
        document.title = to.meta.title;
        next();
    }
});
