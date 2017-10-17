import Vue from 'vue';
import VueRouter from 'vue-router';

import authGuard from '../guards/auth.guard';

import authRoutes from '../containers/auth/auth.routes';
import postsRoutes from '../containers/posts/posts.routes';
import manageRoutes from '../containers/manage/manage.routes';
import authorRoutes from '../containers/authors/authors.routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...authorRoutes,

    ...authRoutes,

    ...postsRoutes,

    ...manageRoutes,
  ],
});

authGuard(router);

export default router;
