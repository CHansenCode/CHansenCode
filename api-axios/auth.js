import axios from 'axios';

const url = '/api/auth';

export const postOne = async formData => {
  try {
    const { data } = await axios.post(url, formData);
    return data;
  } catch (error) {
    console.log(`Error: postOne to "${url}" in "./api-axios/x.js"`, error);
  }
};
