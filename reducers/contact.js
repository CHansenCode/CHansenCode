import { GET_CONTACT, DELETE_CONTACT } from 'actions';

const initialProps = [];

const contact = (posts = initialProps, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return action.payload;
    case DELETE_CONTACT:
      return posts.filter(p => !(p._id === action.payload));
    default:
      return posts;
  }
};

export default contact;
