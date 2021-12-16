import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSectionTwo/Data'
import InfoSection from '../components/InfoSection/Index'
import InfoSectionTwo from '../components/InfoSectionTwo/Index'
import Navbar from '../components/Navbar'
// import Services1 from '../components/Services'
import Services2 from '../components/ServicesTwo'
import Sidebar from '../components/sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <Services1 /> */}
      <InfoSectionTwo {...homeObjTwo} />
      <Services2 />
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  )
}

export default Home
