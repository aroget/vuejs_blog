import appStorage, { STORAGE_KEYS } from '../shared/utils/storage';

const loginUrl = '/login';

const authGuard = router =>
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !appStorage.get(STORAGE_KEYS.SESSION)) {
      next(loginUrl);
    } else {
      next();
    }
  });

export default authGuard;
