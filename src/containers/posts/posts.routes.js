import ROUTES from '../../router/app.routes';

import PostCreate from './PostCreate';
// import PostDelete from './PostDelete';
import PostList from './PostList';
import PostSingle from './PostSingle';

export default [
  {
    path: ROUTES.HOME,
    name: 'PostList',
    component: PostList,
  },
  {
    path: ROUTES.POSTS.CREATE,
    name: 'PostCreate',
    component: PostCreate,
  },
  {
    path: ROUTES.POSTS.DETAILS,
    name: 'PostSingle',
    component: PostSingle,
  },
  // {
  //   path: ROUTES.POSTS.DELETE,
  //   name: 'PostDelete',
  //   component: PostDelete,
  // },
];
