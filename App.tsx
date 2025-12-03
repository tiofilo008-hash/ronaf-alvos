import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <LocationContact />
      </main>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;