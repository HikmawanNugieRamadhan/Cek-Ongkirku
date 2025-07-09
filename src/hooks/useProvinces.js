import { useQuery } from '@tanstack/react-query';
import { api } from '../api/axios';

export const useProvinces = () => {
  return useQuery({
    queryKey: ['provinces'],
    queryFn: async () => {
      const res = await api.get('/province');
      return res.data.rajaongkir.results;
    },
  });
};