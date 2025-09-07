import { User } from '@definitions/user';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>('/users');
  return data;
};
