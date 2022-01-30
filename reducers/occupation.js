import { GET_OCCU, CREATE_OCCU, DELETE_OCCU, PATCH_OCCU } from 'actions';

const init = [];

const occupations = (occupation = init, action) => {
  switch (action.type) {
    case GET_OCCU:
      return action.payload;
    case CREATE_OCCU:
      return occupation;
    case DELETE_OCCU:
      return occupation;
    case PATCH_OCCU:
      return occupation;
    default:
      return occupation;
  }
};

export default occupations;
