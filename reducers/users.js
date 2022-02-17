import { GET_USERS, CREATE_USER, PATCH_USER, DELETE_USER } from 'actions';

const init = [];

const users = (users = init, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    case CREATE_USER:
      return [...users, action.payload];

    case PATCH_USER:
      return users.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );

    case DELETE_USER:
      return users.filter(p => !(p._id === action.payload));

    default:
      return users;
  }
};

export default users;
