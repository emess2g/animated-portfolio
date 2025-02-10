import  './app.scss';
import Navbar from './components/navbar/Navbar';


const App = () => {
  return <div>
    {/* <Text/> */}
    <section id='Homepage'><Navbar/></section>
    <section id='Services'>parallax</section>
    <section id='Portfolio'>Services</section>
    <section id='About'>Parallax</section>
    <section id='Contact'>Portfolio1</section>
  </div>;
};

export default App;
