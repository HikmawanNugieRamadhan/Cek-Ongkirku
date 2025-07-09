// src/api/rajaongkir.js
import { api } from './axios';

export const getProvinces = () => api.get('/province');
export const getCities = async (provinceId) => {
  const res = await api.get(`/city?province=${provinceId}`);
  return res.data.rajaongkir.results;
};
export const getCost = (data) => api.post('/cost', data);