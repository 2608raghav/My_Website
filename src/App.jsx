import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Achievements from './Components/Achievements/Achievements';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero_Section/Hero';
const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;