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

import occupation from './occupation';
import media from './media';

export const reducers = combineReducers({
  occupation,
  media,
});
