import { combineReducers } from 'redux';

// ** BASE
// import users from './users';
// import texts from './texts';
// import intercom from './intercom';
// import meta from './meta';
// import tickets from './tickets';
// import presentation from './presentation';

// ** DOMAIN
// import imageModal from './imageModal';

import toast from './toast';
import cv from './cv';
import media from './media';
import contact from './contact';
import planningApp from './planningApp';

export const reducers = combineReducers({
  planningApp,
  contact,
  toast,
  cv,
  media,
});
