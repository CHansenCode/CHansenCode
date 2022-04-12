import { combineReducers } from 'redux';

// ** BASE
// import users from './users';
// import texts from './texts';
// import intercom from './intercom';
// import meta from './meta';
// import tickets from './tickets';
// import presentation from './presentation';

//  **  forms / consumer
import cv from './cv';
import media from './media';
import contactForm from './contactForm';
import planningApp from './planningApp';
import slides from './slides';
import users from './users';

//  **  modals
import toast from './toast';
import imgModal from './imgModal';

export const reducers = combineReducers({
  planningApp,
  contactForm,
  toast,
  cv,
  media,
  slides,
  users,
  imgModal,
});
