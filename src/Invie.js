import React from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada'
import Guitarras from './components/Guitarras'
import Footer from './components/Footer'

import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'

// const data = {
//   menu: [
//     {
//       href: 'index.html',
//       title: 'Home'
//     },
//     {
//       href: '#guitarras',
//       title: 'Guitarras'
//     },
//     {
//       href: 'precios.html',
//       title: 'Precios'
//     }
//   ],

//   logoPortada: logoPortada,

//   guitarras: [
//     {
//       image: acustica,
//       alt: 'Guitarra Invie Acustica',
//       name: 'Invie Acustica',
//       features: [
//         'Estilo vintage',
//         'Madera pura',
//         'Incluye estuche invisible de alumnio'
//       ]
//     },
//     {
//       image: classic,
//       alt: 'Guitarra Invie Classic',
//       name: 'Invie Classic',
//       features: [
//         'Estilo vintage',
//         'Liviana',
//         'Empieza tu camino como Rockstar'
//       ]
//     }
//   ]
// }


function App() {
  return (
    <section className="Invie">
      {/* Portada */}
      {/* <Portada menu={data.menu} logo={data.logoPortada} /> */}
      <Portada />
      {/* Guitarras */}
      {/* <Guitarras guitarras={data.guitarras} /> */}
      <Guitarras />
      {/* Footer */}
      <Footer />
    </section>
  );
}

export default App;
