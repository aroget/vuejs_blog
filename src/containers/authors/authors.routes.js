import ROUTES from '../../router/app.routes';

import AuthorsList from './AuthorsList';
import AuthorDetails from './AuthorDetails';

export default [
  {
    path: ROUTES.AUTHORS.LIST,
    name: 'AuthorsList',
    component: AuthorsList,
  },
  {
    path: ROUTES.AUTHORS.POSTS,
    name: 'AuthorDetails',
    component: AuthorDetails,
  },
];
