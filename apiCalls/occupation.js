import axios from 'axios';
const url = './api/occupation';

import { GET_OCCU, CREATE_OCCU, PATCH_OCCU, DELETE_OCCU } from 'actions';

export const getOccupations = async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({ type: GET_OCCU, payload: data });
  } catch (error) {
    console.log(
      `Error om ./apiCall fetching posts from occupation db: ${error}`,
    );
  }
};

// export const getMedia = () => async dispatch => {
//     try {
//       const { data } = await api.getMe(url);

//       dispatch({ type: GET_MEDIA, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const postOccupation = async data => {
  try {
    const res = await axios.post(url, data);

    return res.data;
  } catch (error) {
    console.log(`Error creating post in occupation db`);
  }
};

export const getOccupation = async id => {
  try {
    const res = await axios.get(`${url}/id=${id}`);

    return res.data;
  } catch (error) {
    console.log(`Error fetching post ${id} from occupation db`);
  }
};
export const patchOccupation = async (id, data) => {
  try {
    const res = await axios.patch(`${url}/id=${id}`, data);

    return res.data;
  } catch (error) {
    console.log(`Error patching post ${id} from occupation db`);
  }
};
export const deleteOccupation = async id => {
  console.log('delete request');
  try {
    const res = await axios.delete(`${url}/id=${id}`);
    return res.data;
  } catch (error) {
    console.log(`Error deleting post ${id} from occupation db`);
  }
};
