import axios from 'axios';
import handleError from './utils/handleError';
import { Config } from '../Config';

const instance = axios.create({
  baseURL: `${Config.API_URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status });
  }
);

export default instance;
