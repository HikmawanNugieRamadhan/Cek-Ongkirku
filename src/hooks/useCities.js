import { useQuery } from '@tanstack/react-query';
import { getCities } from '../api/rajaongkir';

const useCities = (provinceId) => {
  return useQuery({
    queryKey: ['cities', provinceId],
    queryFn: () => getCities(provinceId),
    enabled: !!provinceId, // hanya jalan jika ada provinceId
  });
};

export default useCities;