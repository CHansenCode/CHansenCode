export const getAllContact = () => async dispatch => {
  try {
    const { data } = await axios.get(`${url}/${id}`);

    dispatch({ type: GET_MEDIA_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
