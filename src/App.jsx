import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import DynamicPageTitle from './components/DynamicPageTitle/DynamicPageTitle';





const App = () => {


  return (
   <>
   <BrowserRouter>
   <DynamicPageTitle/>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id/:productName' element={<ProductDetail/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App