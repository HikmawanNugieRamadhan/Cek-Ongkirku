import React from 'react';
import { useProvinces } from '../hooks/useProvinces';

const ProvinceSelect = ({ onChange }) => {
  const { data, isLoading, error } = useProvinces();

  if (isLoading) return <p className="text-sm text-gray-500">Loading provinsi...</p>;
  if (error) return <p className="text-sm text-red-500">Gagal memuat provinsi</p>;

  return (
    <div className="mb-4">
      <label className="flex items-center text-gray-700 font-medium mb-1">
        <img src="./assets/logos/map.svg" alt="map icon" className="w-5 h-5 mr-2" />
        Provinsi
      </label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Pilih Provinsi</option>
        {data.map((prov) => (
          <option key={prov.province_id} value={prov.province_id}>
            {prov.province}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelect;