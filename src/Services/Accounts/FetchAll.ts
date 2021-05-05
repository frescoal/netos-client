import api from '..';

export default async () => {
  const response = await api.get('meta_accounts');
  return response.data;
};
