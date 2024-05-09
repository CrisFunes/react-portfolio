import "./app.scss";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navBar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero/>
    </section>
    <section id="Services">Services</section>
    <section id="Portfolio">Portfolio</section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
  </div>;
};

export default App;
