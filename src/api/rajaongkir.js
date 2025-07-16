import { api } from './axios';

export const getProvinces = async () => {
  const res = await api.get('/api/province');
  return res.data.rajaongkir.results;
};

export const getCities = async (provinceId) => {
  const res = await api.get(`/api/city?province=${provinceId}`);
  return res.data.rajaongkir.results;
};

export const getCost = async (data) => {
  const res = await api.post('/api/cost', data);
  return res.data.rajaongkir.results;
};