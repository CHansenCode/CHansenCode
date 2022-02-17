import axios from 'axios';

import { GET_CONTACTS, DELETE_CONTACT, TOAST } from 'actions';

const url = '/api/contact';

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_CONTACTS, payload: data });
  } catch (error) {
    console.log(error);

    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Error fetching data' },
    });
  }
};

export const postOne = formData => async dispatch => {
  try {
    const { data } = await axios.post(url, formData);

    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Message sent!' },
    });
  } catch (error) {
    console.log(`Error: postOne to "${url}" in "./api-axios/x.js"`);
    dispatch({
      type: TOAST,
      payload: {
        type: 'alert',
        message: 'Failed to post message, please try again',
      },
    });
  }
};

export const deleteOne = id => async dispatch => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);

    dispatch({ type: DELETE_CONTACT, payload: data._id });
    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Successfully deleted message' },
    });
  } catch (error) {
    console.log(`Error: delete in "${url}" in "./api-axios/x.js"`);
    dispatch({
      type: TOAST,
      payload: {
        type: 'alert',
        message: 'Failed to delete message',
      },
    });
  }
};
