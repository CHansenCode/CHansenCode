export const getOccupations = async () => {
  try {
    const res = await axios.get('./api/occupation');

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
