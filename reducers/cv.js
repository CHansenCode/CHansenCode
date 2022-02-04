import { GET_CV, CREATE_CV, PATCH_CV, DELETE_CV } from 'actions';

const initialProps = [];

const cvs = (cvPosts = initialProps, action) => {
  switch (action.type) {
    case GET_CV:
      return action.payload;
    case CREATE_CV:
      return [...cvPosts, action.payload];
    case PATCH_CV:
      return cvPosts.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );
    case DELETE_CV:
      return cvPosts.filter(p => !(p._id === action.payload));
    default:
      return cvPosts;
  }
};

export default cvs;
