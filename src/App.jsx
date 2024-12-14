import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App