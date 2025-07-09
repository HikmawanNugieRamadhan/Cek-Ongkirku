import axios from 'axios';

export const api = axios.create({
  baseURL: '/', // proxy ke package.json
  headers: {
    key: process.env.REACT_APP_RAJAONGKIR_API_KEY, // ✅ pakai env asli
  },
});