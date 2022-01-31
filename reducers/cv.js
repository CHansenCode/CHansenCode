import { GET_CV, CREATE_CV, PATCH_CV, DELETE_CV } from 'actions';

const init = [];

const cvs = (cvs = init, action) => {
  switch (action.type) {
    case GET_CV:
      return action.payload;
    case CREATE_CV:
      return [...cvs, action.payload];
    case PATCH_CV:
      return cvs.map(p => (p._id === action.payload._id ? action.payload : p));
    case DELETE_CV:
      return cvs.filter(p => !(p._id === action.payload));
    default:
      return cvs;
  }
};

export default cvs;
