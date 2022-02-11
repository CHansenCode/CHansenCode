import {
  GET_SLIDES,
  GET_SLIDE,
  CREATE_SLIDE,
  PATCH_SLIDE,
  DELETE_SLIDE,
} from 'actions';

const initialProps = [];

const planningApp = (slides = initialProps, action) => {
  switch (action.type) {
    case GET_SLIDES:
      return action.payload;
    case GET_SLIDE:
      return plans.map(p => p._id === payload._id);
    case CREATE_SLIDE:
      return [...slides, action.payload];
    case PATCH_SLIDE:
      return slides.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );
    case DELETE_SLIDE:
      return slides.filter(p => !(p._id === action.payload));
    default:
      return slides;
  }
};

export default planningApp;
