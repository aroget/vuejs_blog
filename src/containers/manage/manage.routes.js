import ROUTES from '../../router/app.routes';

import Manage from './Manage';
import ProfileList from './profile/ProfileList';

export default [
  {
    path: ROUTES.MANAGE.HOME,
    name: 'Manage',
    component: Manage,
  },
  {
    path: ROUTES.MANAGE.PROFILE.VIEW,
    name: 'Profile',
    component: ProfileList,
  },
];
