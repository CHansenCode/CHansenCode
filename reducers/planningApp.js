import {
  GET_PLANS,
  GET_PLAN,
  CREATE_PLAN,
  PATCH_PLAN,
  DELETE_PLAN,
} from 'actions';

const initialProps = [];

const planningApp = (plans = initialProps, action) => {
  switch (action.type) {
    case GET_PLANS:
      return action.payload;
    case GET_PLAN:
      return plans.map(p => p._id === payload._id);
    case CREATE_PLAN:
      return [...plans, action.payload];
    case PATCH_PLAN:
      return plans.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );
    case DELETE_PLAN:
      return plans.filter(p => !(p._id === action.payload));
    default:
      return plans;
  }
};

export default planningApp;
