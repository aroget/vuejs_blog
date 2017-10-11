import Vue from 'vue';
import VueRouter from 'vue-router';

import PostList from '@/containers/posts/PostList';
import PostCreate from '@/containers/posts/PostCreate';

import Login from '@/containers/auth/Login';
import Logout from '@/containers/auth/Logout';
import ProfileList from '@/containers/profile/ProfileList';

import authGuard from '../guards/auth.guard';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList,
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: PostCreate,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileList,
    },
  ],
});

authGuard(router);

export default router;
