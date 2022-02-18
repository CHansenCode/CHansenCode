import axios from 'axios';
import { uniqueIdGenerator } from 'lib';

import {
  GET_SLIDES,
  CREATE_SLIDE,
  PATCH_SLIDE,
  DELETE_SLIDE,
  TOAST,
} from 'actions';

const url = '/api/slides';

export const getAll = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_SLIDES, payload: data });
  } catch (error) {
    console.log(error);

    dispatch({
      type: TOAST,
      payload: { type: 'alert', message: 'Error fetching data' },
    });
  }
};

export const postOne = formData => async dispatch => {
  let user = await axios.get('/api/user');

  formData = {
    title: formData,
    createdBy: user.data.username,
    group: [user.data.group],
    users: [user.data.username],
    owner: [user.data.username],
    createdAt: new Date(),
  };

  try {
    const { data } = await axios.post(url, formData);

    dispatch({ type: CREATE_SLIDE, payload: data });
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

export const patchOne = (formData, title) => async dispatch => {
  try {
    const { data } = await axios.patch(`${url}/${formData._id}`, formData);

    dispatch({ type: PATCH_SLIDE, payload: data });

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

    dispatch({ type: DELETE_SLIDE, payload: data._id });
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

export const createSlide = (formData, title) => async dispatch => {
  let newSlide = {
    title: title,
    id: uniqueIdGenerator(),
    subtitle: '',
    objectFit: 'cover',
    rich: [{ type: 'paragraph', children: [{ text: '' }] }],
  };

  formData.slides = [...formData.slides, newSlide];

  try {
    const { data } = await axios.patch(`${url}/${formData._id}`, formData);

    dispatch({ type: PATCH_SLIDE, payload: data });

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

export const deleteSlide = (formData, slideId) => async dispatch => {
  let filter = await formData.slides.filter(s => !(s.id === slideId));
  formData.slides = filter;

  try {
    const { data } = await axios.patch(`${url}/${formData._id}`, formData);

    dispatch({ type: PATCH_SLIDE, payload: data });

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
