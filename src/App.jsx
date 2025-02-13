import  './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax';


const App = () => {
  return <div>
    {/* <Text/> */}
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section >Services</section>
    <section id='Portfolio'> <Parallax type="portfolio"/></section>
    <section id='Portfolio'>Services</section>
    <section id='About'>Parallax</section>
    <section id='Contact'>Portfolio1</section>
  </div>;
};

export default App;
