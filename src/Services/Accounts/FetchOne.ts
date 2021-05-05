import api from '..';
import handleError from '../utils/handleError';

export default async (accountId: number) => {
  if (!accountId) {
    return handleError({ message: 'Account ID is required' });
  }
  const response = await api.get(`accounts/${accountId}`);
  return response.data;
};
