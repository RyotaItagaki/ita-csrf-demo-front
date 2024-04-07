import axios from 'axios';

type Post = {
  id: number;
  text: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
};

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

export const listPosts = async () => {
  const response = await axios.get<Post[]>('/post/list');
  return response.data;
};

export const createPost = async (body: {
  userId: number;
  text: string;
}) => {
  const response = await axios.post('/post/create', body);
  return response.data;
};