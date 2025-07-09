import React from 'react';

const CostResult = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="flex items-center mb-3">
        <img src="./assets/logos/rupiah.svg" alt="result icon" className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-semibold text-slate-700">Hasil Ongkir</h3>
      </div>

      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-indigo-50 text-indigo-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-2 text-left border-b">Tujuan</th>
              <th className="px-4 py-2 text-left border-b">Layanan</th>
              <th className="px-4 py-2 text-left border-b">Estimasi</th>
              <th className="px-4 py-2 text-left border-b">Harga</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="even:bg-gray-50 hover:bg-indigo-50 transition-colors duration-200"
              >
                <td className="px-4 py-2 border-b">{item.to}</td>
                <td className="px-4 py-2 border-b">{item.service}</td>
                <td className="px-4 py-2 border-b">{item.etd} hari</td>
                <td className="px-4 py-2 border-b font-semibold text-indigo-700">
                  Rp {item.price.toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostResult;