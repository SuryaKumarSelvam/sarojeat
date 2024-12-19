import React from 'react'
import Hero from '../../components/Hero/Hero'
import Product from '../../components/Products/Product'
import About from '../../components/About/About'

const Home = () => {


  
  return (
    <div className='home-container'>
    <Hero/>
    <Product isHomePage={true}/>
    <About/>    
    </div>
  )
}

export default Home