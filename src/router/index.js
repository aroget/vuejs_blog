import Vue from 'vue';
import VueRouter from 'vue-router';

import authGuard from '../guards/auth.guard';

import ROUTES from './app.routes';

import ProfileList from '../containers/manage/profile/ProfileList';

import authRoutes from '../containers/auth/auth.routes';
import authorRoutes from '../containers/authors/authors.routes';
import postsRoutes from '../containers/posts/posts.routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...authorRoutes,

    ...authRoutes,

    ...postsRoutes,

    {
      path: ROUTES.MANAGE.PROFILE.VIEW,
      name: 'Profile',
      component: ProfileList,
    },
  ],
});

authGuard(router);

export default router;
