import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Icon from '../Components/Iconbar/Icon'
import Hero from '../Components/Hero/Hero'
import Book from '../Components/Book/Book'
import Movies from '../Components/Movies/Movies'
import Option from '../Components/Option/Option'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Icon/>
      <Navbar/>
      <Hero/>
      <Book/>
      <Movies/>
      <Option/>
      <Footer/>
    </div>
  )
}

export default Home
