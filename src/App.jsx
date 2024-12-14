import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id/:productName' element={<ProductDetail/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App