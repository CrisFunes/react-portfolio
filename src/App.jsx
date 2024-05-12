import "./app.scss";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navBar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero/>
    </section>
    <section id="Services0"><Parallax type="services"/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
  </div>;
};

export default App;
