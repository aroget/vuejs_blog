import Vue from 'vue';
import API from '../api';
import ROUTES from '../router/app.routes';
import BaseService from '../base/base.service';
import ErrorService from '../shared/services/error.service';
import appStorage, { STORAGE_KEYS } from '../shared/utils/storage';

const loadUser = id => BaseService.get(`${API.RESOURCES.USERS}/${id}`);

const authGuard = router =>
  router.beforeEach((to, from, next) => {
    const session = Vue.prototype.$session;
    const sessionKey = appStorage.get(STORAGE_KEYS.SESSION);

    if (to.name === 'Login' || to.name === 'Register') {
      next();
      return;
    }

    if (sessionKey) {
      if (!(session.g.size)) {
        loadUser(sessionKey)
          .then((user) => {
            session.g.set('user', user.data);
            next();
          })
          .catch((err) => {
            ErrorService.handle(err);
            next(ROUTES.LOGIN);
          });
      } else {
        next();
      }
    } else {
      next(ROUTES.LOGIN);
    }
  });

export default authGuard;
