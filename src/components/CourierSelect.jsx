import React from 'react';

const CourierSelect = ({ onChange }) => {
  const couriers = [
    { code: 'jne', label: 'JNE' },
    { code: 'tiki', label: 'TIKI' },
    { code: 'pos', label: 'POS Indonesia' },
  ];

  return (
    <div className="mb-4">
      <label className="flex items-center text-gray-700 font-medium mb-1">
        <img src="./assets/logos/courier.svg" alt="courier icon" className="w-5 h-5 mr-2" />
        Kurir
      </label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">Pilih Kurir</option>
        {couriers.map((c) => (
          <option key={c.code} value={c.code}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourierSelect;