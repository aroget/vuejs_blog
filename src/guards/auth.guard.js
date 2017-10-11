import appStorage, { STORAGE_KEYS } from '../shared/utils/storage';

import ROUTES from '../router/app.routes';

const authGuard = router =>
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !appStorage.get(STORAGE_KEYS.SESSION)) {
      next(ROUTES.LOGIN);
    } else {
      next();
    }
  });

export default authGuard;
