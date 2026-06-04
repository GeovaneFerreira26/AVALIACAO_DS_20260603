import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutMae from './sections/AboutMae';
import AboutPai from './sections/AboutPai';
import AboutPet from './sections/AboutPet';
import Gallery from './sections/Gallery';
import Videos from './sections/Videos';
import Homenagens from './Homenagens';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutMae />
        <AboutPai />
        <AboutPet />
        <Gallery />
       
        <Homenagens />
      </main>
      <Footer />
    </div>
  );
}

export default App;