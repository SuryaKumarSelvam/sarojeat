import {React,useEffect} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import DynamicPageTitle from './components/DynamicPageTitle/DynamicPageTitle';
import CheckOut from './pages/Checkout/CheckOut';
import Product from './components/Products/Product';
import SignIn from './components/UserAuth/SignIn';
import Contact from './pages/Contact/Contact';
import About from './components/About/About';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  return null; 
};


const App = () => {
 

  return (
   <>
   <BrowserRouter>
   <ScrollToTop />
   <DynamicPageTitle/>
   <Nav/>
   <Routes>
    <Route path='/login' element={<SignIn/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product/:id/:productName' element={<ProductDetail/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<CheckOut/>}/>
    <Route path='/products' element={<Product enableFilter={true} enablePagination={true} isHomePage={false} />} />
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App