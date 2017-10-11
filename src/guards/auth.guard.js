// const loginUrl = '/login';

const authGuard = router =>
  router.beforeEach((to, from, next) => {
    // next({
    //   path: loginUrl,
    // });
    next();
  });

export default authGuard;
