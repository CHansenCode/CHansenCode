import axios from 'axios';

//#region   MEDIA
const url = './api/media';

export const getMedia = async dispatch => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(`Error fetching posts from media db`);
  }
};
export const postMedia = async formData => {
  try {
    const { data } = await axios.post(url, formData);

    return data;
  } catch (error) {
    console.log(`Error creating post in media db =>`, error);
  }
};

export const getMediaPost = async id => {
  try {
    const res = await axios.get(`${url}/id=${id}`);

    return res.data;
  } catch (error) {
    console.log(`Error fetching post ${id} from media db`);
  }
};

export const patchMedia = async (id, formData) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);
    return data;
  } catch (error) {
    console.log(`Error patching post ${id} from media db`);
  }
};

export const deleteMedia = async id => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(`Error deleting post ${id} from media db`);
  }
};
//#endregion
