import axios from 'axios';

const url = './api/contactForm';

export const getAll = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(`Error: fetchAll from "${url}" in "./apiCalls/x.js"`);
  }
};

export const postOne = async formData => {
  try {
    const { data } = await axios.post(url, formData);
    return data;
  } catch (error) {
    console.log(`Error: postOne to "${url}" in "./apiCalls/x.js"`);
  }
};
