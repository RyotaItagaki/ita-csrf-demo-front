import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

export const signIn = async (email: string, password: string) => {
  const response = await axios.post('/auth/signin', { email, password });
  return response.data;
};

export const hello = async () => {
  const response = await axios.get('/hello');
  console.log(response.data);
}