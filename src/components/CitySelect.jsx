import React from 'react';
import useCities from '../hooks/useCities';

const CitySelect = ({ provinceId, onChange }) => {
  const { data, isLoading, error } = useCities(provinceId);

  if (!provinceId) return null;
  if (isLoading) return <p className="text-sm text-gray-500">Loading kota...</p>;
  if (error) return <p className="text-sm text-red-500">Gagal memuat kota</p>;

  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedCity = data.find((city) => city.city_id === selectedId);

    if (selectedCity) {
      const label = `${selectedCity.type} ${selectedCity.city_name}, ${selectedCity.province}`;
      onChange({
        city_id: selectedCity.city_id,
        label,
      });
    }
  };

  return (
    <div className="mb-4">
      <label className="flex items-center text-gray-700 font-medium mb-1">
        <img src="./assets/logos/city.svg" alt="location icon" className="w-5 h-5 mr-2" />
        Kota/Kabupaten
      </label>
      <select
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Pilih Kota/Kabupaten</option>
        {data.map((city) => (
          <option key={city.city_id} value={city.city_id}>
            {city.type} {city.city_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;