import { GET_CONTACTS, DELETE_CONTACT } from 'actions';

const initialProps = [];

const contactForm = (posts = initialProps, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload;
    case DELETE_CONTACT:
      return posts.filter(p => !(p._id === action.payload));
    default:
      return posts;
  }
};

export default contactForm;
