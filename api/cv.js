import axios from 'axios';

import {
  GET_CV,
  GET_ONE_CV,
  CREATE_CV,
  PATCH_CV,
  DELETE_CV,
  TOAST,
} from 'actions';

const url = './api/cv';

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_CV, payload: data });
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

    dispatch({ type: CREATE_CV, payload: data });
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

export const findOneByWhom = pid => async dispatch => {
  try {
    const { data } = await axios.get(`${url}/${pid}`);

    if (!data) throw new Error(`No post matched key: _ ${pid} _`);

    dispatch({
      type: GET_ONE_CV,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: error.message },
    });
  }
};

export const patchOne = (id, formData) => async dispatch => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);

    dispatch({ type: PATCH_CV, payload: data });

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

    dispatch({ type: DELETE_CV, payload: data._id });
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

// const { data } = await axios.patch(`${url}?pid=${pid ? pid : 'cow'}`);
