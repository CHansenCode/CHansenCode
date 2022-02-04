import { TOAST, DELETE_TOAST } from 'actions';

const initProps = [];

const toast = (toasts = initProps, action) => {
  switch (action.type) {
    case TOAST:
      return [...toasts, action.payload];
    case DELETE_TOAST:
      return toasts.filter((t, i) => !(i === 0));
    default:
      return toasts;
  }
};

export default toast;
