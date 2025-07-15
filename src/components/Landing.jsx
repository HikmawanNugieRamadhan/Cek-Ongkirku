import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [animateLogo, setAnimateLogo] = useState(false);

  const handleLogoClick = () => {
    setAnimateLogo(true);
  };

  useEffect(() => {
    if (!animateLogo) return;
    const timeout = setTimeout(() => setAnimateLogo(false), 3000);
    return () => clearTimeout(timeout);
  }, [animateLogo]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-4 text-center overflow-hidden"
    >
      {/* Logo + Heading - Satu Baris */}
      <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
        <img
          onClick={handleLogoClick}
          src="./assets/logos/logo-cekongkirku.svg"
          alt="logo"
          className={`w-16 h-16 sm:w-20 sm:h-20 cursor-pointer transition-transform ${
            animateLogo ? 'animate-walk' : ''
          }`}
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 select-none">
          Selamat Datang di <span className="text-indigo-600">Cek Ongkirku</span>
        </h1>
      </div>

      <p className="text-slate-600 text-lg mb-6 max-w-3xl">
        Cek ongkir pengiriman barangmu dengan cepat, akurat, dan bisa ke banyak tujuan sekaligus!
      </p>

      <a
        href="#form"
        className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition text-base shadow-lg"
      >
        Mulai Cek Ongkir
      </a>
    </section>
  );
};
export default Landing;