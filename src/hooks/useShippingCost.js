// src/hooks/useShippingCost.js
import { useMutation } from '@tanstack/react-query';
import { getCost } from '../api/rajaongkir';

const useShippingCost = () => {
  return useMutation({
    mutationFn: (data) => getCost(data),
  });
};

export default useShippingCost;