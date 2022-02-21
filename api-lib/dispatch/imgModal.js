import { POPULATE_MODAL, DEPOPULATE_MODAL } from 'actions';

export const dePopulateModal = () => async dispatch => {
  // flushes modal to empty default value
  dispatch({ type: DEPOPULATE_MODAL });
};

export const populateModal = data => async dispatch => {
  // ** data can be either array or object.
  // If array: modal behaves like a library with pagination

  dispatch({ type: POPULATE_MODAL, payload: data });
};
