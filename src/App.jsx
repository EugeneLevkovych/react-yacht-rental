import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Hero from './components/Hero';
import OurYachts from './components/OurYachts';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutUs />
      <OurYachts />
    </div>
  );
}
