import { combineReducers } from 'redux';

// ** BASE
// import users from './users';
// import texts from './texts';
// import intercom from './intercom';
// import meta from './meta';
// import tickets from './tickets';
// import planning from './planningApp';
// import presentation from './presentation';

// ** DOMAIN
// import errorHandler from './errorHandler';
// import imageModal from './imageModal';

import toast from './toast';
import cv from './cv';
import media from './media';
import contact from './contact';

export const reducers = combineReducers({
  contact,
  toast,
  cv,
  media,
});
