import ROUTES from '../../router/app.routes';

import Login from './Login';
import Logout from './Logout';
// import Register from './Register';

export default [
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
];
