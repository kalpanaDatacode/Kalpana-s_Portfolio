import React from "react";
import Navbar from './components/Navbar';
import '../scss/main.scss';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';



function App(){
    return(
        <>
           <Navbar/>
           <Hero/>
           <About/>
           <Services/>
           <Projects/>
           < Testimonials/>
        </>
   )
}
export default App;