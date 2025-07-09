// src/components/AddressSelector.jsx
import React from 'react';
import ProvinceSelect from './ProvinceSelect';
import CitySelect from './CitySelect';

const AddressSelector = ({ title, province, setProvince, city, setCity }) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-2 text-slate-700">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm mb-1 block text-slate-600">Provinsi</label>
          <ProvinceSelect
            onChange={(val) => {
              setProvince(val);
              setCity('');
            }}
          />
        </div>
        <div>
          <label className="text-sm mb-1 block text-slate-600">Kota</label>
          <CitySelect provinceId={province} onChange={setCity} />
        </div>
      </div>
    </section>
  );
};

export default AddressSelector;