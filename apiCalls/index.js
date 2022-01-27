import axios from 'axios';

//#region   MEDIA
const mediaPath = './api/media';

export const getMedia = async () => await axios.get(mediaPath);
export const postMedia = async data => await axios.post(mediaPath, data);
export const getMediaPost = async id =>
  await axios.get(`${mediaPath}/id?${id}`);
export const patchMedia = async (id, data) =>
  await axios.patch(`${mediaPath}/id?${id}`, data);
export const deleteMedia = async id =>
  await axios.delete(`${mediaPath}/id?${id}`);

//#endregion
