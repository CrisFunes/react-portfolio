import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import React from 'react';

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero/>
    </section>
    <section id="About">
      <Services/>
    </section>
      <Projects/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
