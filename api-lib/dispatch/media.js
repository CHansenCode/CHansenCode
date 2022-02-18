import axios from 'axios';

import {
  GET_MEDIA,
  CREATE_MEDIA,
  PATCH_MEDIA,
  DELETE_MEDIA,
  TOAST,
} from 'actions';

const url = '/api/media';

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_MEDIA, payload: data });
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

    dispatch({ type: CREATE_MEDIA, payload: data });
    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Successfully created post!' },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Failed to post' },
    });
  }
};

export const patchOne = (id, formData) => async dispatch => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);

    dispatch({ type: PATCH_MEDIA, payload: data });

    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Updated post in db' },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Failed to update post' },
    });
  }
};

export const deleteOne = id => async dispatch => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);

    dispatch({ type: DELETE_MEDIA, payload: data._id });
    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Deleted post from db' },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Failed to delete post' },
    });
  }
};
