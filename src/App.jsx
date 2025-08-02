import React from "react";
import Navbar from './components/Navbar';
import '../scss/main.scss';
import Hero from './components/Hero';
import About from './components/About';



function App(){
    return(
        <>
           <Navbar/>
           <Hero/>
           <About/>
        </>
   )
}
export default App;