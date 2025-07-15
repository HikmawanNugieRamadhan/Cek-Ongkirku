import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-2">
          <img
            src="./assets/logos/logo-cekongkirku.svg"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-indigo-600 select-none">
            Cek Ongkirku
          </h1>
        </div>

        {/* Navigasi */}
        <div className="space-x-6 text-sm text-slate-600 font-medium">
          <a href="#home" className="hover:text-indigo-600">Beranda</a>
          <a href="#form" className="hover:text-indigo-600">Cek Ongkir</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;