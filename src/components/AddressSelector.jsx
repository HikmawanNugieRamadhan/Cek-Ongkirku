import React from 'react';
import ProvinceSelect from './ProvinceSelect';
import CitySelect from './CitySelect';

const AddressSelector = ({ title, province, setProvince, city, setCity }) => {
  return (
    <section className="mb-4">
      <h2 className="text-lg font-semibold mb-2 text-slate-700">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-2">
        <ProvinceSelect
          onChange={(val) => {
            setProvince(val);
            setCity('');
          }}
        />
        <CitySelect provinceId={province} onChange={setCity} />
      </div>
    </section>
  );
};

export default AddressSelector;