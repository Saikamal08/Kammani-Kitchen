import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Branches from './components/Branches';
import Catering from './components/Catering';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Branches />
      <Catering />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
