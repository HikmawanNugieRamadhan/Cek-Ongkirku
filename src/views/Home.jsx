import React, { useState } from 'react';
import AddressSelector from '../components/AddressSelector';
import CourierSelect from '../components/CourierSelect';
import CostResult from '../components/CostResult';
import useShippingCost from '../hooks/useShippingCost';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';

const Home = () => {
  const [originProvince, setOriginProvince] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [destinationProvince, setDestinationProvince] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [courier, setCourier] = useState('');
  const [weight, setWeight] = useState('');
  const [results, setResults] = useState([]);

  const shippingCost = useShippingCost();

  const addDestination = () => {
    if (!destinationCity || destinations.some((d) => d.city_id === destinationCity.city_id)) return;
    setDestinations([...destinations, destinationCity]);
    setDestinationCity('');
  };

  const removeDestination = (id) => {
    setDestinations(destinations.filter((d) => d.city_id !== id));
  };

  const isFormValid = () => originCity && courier && weight && destinations.length > 0;

  const fetchAllCosts = async () => {
    if (!isFormValid()) return;

    setResults([]);
    const fetches = destinations.map((dest) => {
      const payload = {
        origin: originCity.city_id,
        destination: dest.city_id,
        weight: parseInt(weight),
        courier,
      };

      return shippingCost
        .mutateAsync(payload)
        .then((res) => {
          const result = res.data.rajaongkir.results[0];
          const cost = result.costs[0]?.cost[0];
          return {
            to: dest.label,
            service: result.costs[0]?.service || '-',
            price: cost?.value || 0,
            etd: cost?.etd || '-',
          };
        })
        .catch(() => ({
          to: dest.label,
          service: '-',
          price: 0,
          etd: 'Gagal fetch',
        }));
    });

    const allResults = await Promise.all(fetches);
    setResults(allResults);
  };

  return (
    <>
      <Navbar />
      <Landing />
      <main id="form" className="bg-slate-50 min-h-screen px-4 sm:px-6 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 sm:p-10">
          <header className="mb-4 flex items-center gap-3">
            <img src="./assets/logos/box.svg" alt="box icon" className="w-6 h-6" />
            <h1 className="text-2xl font-bold text-indigo-700">Cek Ongkir Multi Tujuan</h1>
          </header>

          <AddressSelector
            title="Asal Pengiriman"
            province={originProvince}
            setProvince={setOriginProvince}
            city={originCity}
            setCity={setOriginCity}
          />

          <AddressSelector
            title="Tujuan"
            province={destinationProvince}
            setProvince={setDestinationProvince}
            city={destinationCity}
            setCity={setDestinationCity}
          />

          <button
            onClick={addDestination}
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition-all mb-4"
          >
            + Tambah Tujuan
          </button>

          {destinations.length > 0 && (
            <ul className="mb-8 space-y-2 text-sm text-slate-700">
              {destinations.map((d, idx) => (
                <li key={idx} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded border">
                  <span>{d.label}</span>
                  <button
                    onClick={() => removeDestination(d.city_id)}
                    className="text-red-600 hover:text-red-800 text-xs"
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          )}

          <section className="mb-6 grid sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm mb-0 text-slate-600"></label>
              <CourierSelect onChange={setCourier} />
            </div>
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-1">
                <img src="./assets/logos/heavy.svg" alt="icon berat" className="w-5 h-5 mr-2" />
                Berat (gram)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Contoh: 1700"
                className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-400"
              />
            </div>
          </section>

          <button
            onClick={fetchAllCosts}
            disabled={shippingCost.isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition-all w-full disabled:opacity-50"
          >
            {shippingCost.isLoading ? 'Mengambil Ongkir...' : 'Cek Semua Ongkir'}
          </button>

          <div className="mt-10">
            <CostResult data={results} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;