import ENV from './api.environment';
import RESOURCES from './api.resources';

export default {
  RESOURCES: {
    ...RESOURCES,
  },
  ENV: {
    ...ENV,
  },
};
