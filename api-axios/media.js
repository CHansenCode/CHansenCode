import axios from 'axios';

const url = './api/media';

export const getAll = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(`Error: fetchAll from "${url}" in "./api-axios/x.js"`);
  }
};
export const postOne = async formData => {
  try {
    const { data } = await axios.post(url, formData);
    return data;
  } catch (error) {
    console.log(`Error: postOne to "${url}" in "./api-axios/x.js"`);
  }
};
export const getOne = async id => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(`Error: getOne from "${url}" in "./api-axios/x.js"`);
  }
};
export const patchOne = async (id, formData) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, formData);
    return data;
  } catch (error) {
    console.log(`Error: patchOne in "${url}" in "./api-axios/x.js"`);
  }
};
export const deleteOne = async id => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(`Error: delete in "${url}" in "./api-axios/x.js"`);
  }
};
