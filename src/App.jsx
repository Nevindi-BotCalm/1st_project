import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import MobileSection from './Components/MobileSection';
import WebSection from './Components/WebSection';
import VRSection from './Components/VRSection';
import MoreDetails from './Components/MoreDetails';
import Sponsors from './Components/Sponsors';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MobileSection />
      <WebSection />
      <VRSection />
      <MoreDetails />
      <Sponsors />
      <Subscribe />
      <Footer />
    </div>

  );
}

export default App;