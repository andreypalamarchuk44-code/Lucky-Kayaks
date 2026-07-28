import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Routes from './components/Routes/Routes';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Routes />
        <Gallery />
        <Reviews />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
