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

  MANAGE: {
    PROFILE: {
      VIEW: '/manage/profile',
      EDIT: '/manage/profile/edit',
    },
  },
};
