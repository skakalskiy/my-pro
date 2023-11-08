import React from 'react';

import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ImageContent from './ImageContent/ImageContent';
import Life from './Life/Life';

import './App.scss';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Servies'>
        <ImageContent/>
      </section>
      <section>
        <Life/>
      </section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfilio3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App;
