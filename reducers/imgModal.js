import { POPULATE_MODAL, DEPOPULATE_MODAL } from 'actions';

const init = [];

const imgModal = (img = init, action) => {
  switch (action.type) {
    case POPULATE_MODAL:
      return [action.payload];
    case DEPOPULATE_MODAL:
      return init;
    default:
      return img;
  }
};

export default imgModal;
