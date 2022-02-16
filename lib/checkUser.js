import axios from 'axios';

export async function checkUser(mutate) {
  const { data } = await axios.get('/api/user');
  if (data.isLoggedIn) {
    mutate(data);
  }
}
