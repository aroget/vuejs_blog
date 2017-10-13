export default {
  HOME: '/',

  LOGIN: '/login',

  LOGOUT: '/logout',

  SIGNUP: '/register',

  POSTS: {
    LIST: '/posts/create',
    CREATE: '/posts/create',
    DETAILS: '/post/:post_id',
    DELETE: '/post/:post_id/delete',
  },

  AUTHORS: {
    LIST: '/authors',
    POSTS: '/authors/:author_id',
  },

  // TAGS: {
  //   LIST: '/tags/create',
  //   CREATE: '/tags/create',
  //   DETAILS: '/tag/:tag_id',
  //   DELETE: '/tag/:tag_id/delete',
  // },

  MANAGE: {
    PROFILE: {
      VIEW: '/manage/profile',
      EDIT: '/manage/profile/edit',
    },
  },
};
