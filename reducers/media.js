import {
  GET_MEDIA,
  GET_MEDIA_POST,
  CREATE_MEDIA,
  PATCH_MEDIA,
  DELETE_MEDIA,
} from 'actions';

const media = (media = initialProps, action) => {
  switch (action.type) {
    case GET_MEDIA:
      return action.payload;
    case GET_MEDIA_POST:
      return media.map(p => p._id === payload._id);
    case CREATE_MEDIA:
      return [...media, action.payload];
    case PATCH_MEDIA:
      return media.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );
    case DELETE_MEDIA:
      return media.filter(p => !(p._id === action.payload));
    default:
      return media;
  }
};

const initialProps = [];

export default media;
