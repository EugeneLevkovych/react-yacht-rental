import AboutUs from './components/AboutUs';
import Advantages from './components/Advantages';
import Footer from './components/Footer';
import Header from './components/Headache';
import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import OurYachts from './components/OurYachts';
import Rent from './components/Rent';
import Reviews from './components/Reviews';

export default function App() {
  return (
    <div>
      <MobileMenu />
      <Hero />
      <AboutUs />
      <OurYachts />
      <Advantages />
      <Rent />
      <Reviews />
      <Footer />
    </div>
  );
}
