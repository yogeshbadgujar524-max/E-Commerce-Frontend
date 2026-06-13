import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeaturedProducts from '../Components/FeaturedProducts'
import HomeProducts from '../Components/HomeProducts'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <HomeProducts/>
    </div>
  )
}

export default Home