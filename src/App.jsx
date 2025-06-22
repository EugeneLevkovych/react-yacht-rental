import AboutUs from './components/AboutUs';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import OurYachts from './components/OurYachts';
import Rent from './components/Rent';
import Reviews from './components/Reviews';
import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(open => !open);
  };

  return (
    <div>
      {isOpen && <MobileMenu onToggleMenu={toggleMenu} />}
      <Hero onToggleMenu={toggleMenu} />
      <AboutUs />
      <OurYachts />
      <Advantages />
      <Rent />
      <Reviews />
      <Footer />
    </div>
  );
}
