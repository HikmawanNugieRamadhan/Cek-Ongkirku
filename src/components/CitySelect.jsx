import React from 'react';
import useCities from '../hooks/useCities';

const CitySelect = ({ provinceId, onChange }) => {
  const { data, isLoading, error } = useCities(provinceId);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (!provinceId) {
      alert('Silakan pilih provinsi terlebih dahulu');
      return;
    }

    const selectedCity = data?.find((city) => city.city_id === selectedId);
    if (selectedCity) {
      const label = `${selectedCity.type} ${selectedCity.city_name}, ${selectedCity.province}`;
      onChange({
        city_id: selectedCity.city_id,
        label,
      });
    }
  };

  return (
    <div className="mb-2">
      <label className="flex items-center text-gray-700 font-medium mb-1">
        <img src="./assets/logos/city.svg" alt="location icon" className="w-5 h-5 mr-2" />
        Kota/Kabupaten
      </label>
      <select
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        disabled={!provinceId}
      >
        <option value="">
          {provinceId ? 'Pilih Kota/Kabupaten' : 'Pilih Provinsi terlebih dahulu'}
        </option>

        {provinceId && !isLoading && !error && data?.map((city) => (
          <option key={city.city_id} value={city.city_id}>
            {city.type} {city.city_name}
          </option>
        ))}
      </select>

      {provinceId && isLoading && (
        <p className="text-sm text-gray-500 mt-1">Loading kota...</p>
      )}
      {provinceId && error && (
        <p className="text-sm text-red-500 mt-1">Gagal memuat kota</p>
      )}
    </div>
  );
};

export default CitySelect;