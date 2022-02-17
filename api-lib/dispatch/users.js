import axios from 'axios';

import {
  GET_USERS,
  CREATE_USER,
  PATCH_USER,
  DELETE_USER,
  TOAST,
} from 'actions';

const url = '/api/users';

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    console.log(error);

    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Error fetching data' },
    });
  }
};

export const postOne = formData => async dispatch => {
  //auth
  let user = await axios.get('./api/user');

  formData = {
    ...formData,
    addBy: user.data.username,
    createdAt: new Date(),
  };

  try {
    const { data } = await axios.post(url, formData);

    dispatch({ type: CREATE_USER, payload: data });
    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Successfully created user!' },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Failed to create user' },
    });
  }
};

export const patchOne = (id, formData) => async dispatch => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);

    dispatch({ type: PATCH_USER, payload: data });

    dispatch({
      type: TOAST,
      payload: { type: 'success', message: 'Updated user in db' },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Failed to update user' },
    });
  }
};

export const deleteOne = id => async dispatch => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);

    dispatch({ type: DELETE_USER, payload: data._id });
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
