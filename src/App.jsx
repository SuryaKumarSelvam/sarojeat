import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
   <>
   <Nav/>
   <Hero/>
   <Product/>
   <About/>
   <Footer/>
   </>
  )
}

export default App