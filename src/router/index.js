import Vue from 'vue';
import VueRouter from 'vue-router';

import PostList from '@/containers/posts/PostList';
import PostCreate from '@/containers/posts/PostCreate';

import Login from '@/containers/auth/Login';
import Logout from '@/containers/auth/Logout';
import ProfileList from '@/containers/profile/ProfileList';

import authGuard from '../guards/auth.guard';

import ROUTES from './app.routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: ROUTES.HOME,
      name: 'PostList',
      component: PostList,
    },
    {
      path: ROUTES.POST_CREATE,
      name: 'PostCreate',
      component: PostCreate,
    },
    {
      path: ROUTES.LOGIN,
      name: 'Login',
      component: Login,
    },
    {
      path: ROUTES.LOGOUT,
      name: 'Logout',
      component: Logout,
    },
    {
      path: ROUTES.PROFILE,
      name: 'Profile',
      component: ProfileList,
    },
  ],
});

authGuard(router);

export default router;
