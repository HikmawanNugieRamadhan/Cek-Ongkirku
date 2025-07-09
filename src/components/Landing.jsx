import React from 'react';

const Landing = () => {
    return (
        <section
            id="home"
            className="pt-28 pb-16 bg-gradient-to-b from-indigo-50 to-white text-center"
        >
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <img
                        src="./assets/logos/logo-cekongkirku.svg"
                        alt="logo"
                        className="w-10 h-10"
                    />
                    <h2 className="text-3xl font-bold text-slate-800">
                        Selamat Datang di <span className="text-indigo-600">Cek Ongkirku</span>
                    </h2>
                </div>
                <p className="text-slate-600 text-lg mb-6">
                    Cek ongkir pengiriman dengan mudah dan bandingkan berbagai tujuan sekaligus.
                </p>
                <a
                    href="#form"
                    className="inline-block bg-indigo-600 text-white py-2 px-5 rounded-lg hover:bg-indigo-700 transition"
                >
                    Mulai Cek Ongkir
                </a>
            </div>
        </section>
    );
};

export default Landing;