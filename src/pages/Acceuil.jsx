import React from 'react'
import ImageSlider from '../component/navbar'
import StyledSection from '../component/Navbar2'
import LegalStatsSectionFR from '../component/Navbar3'
import CabinetCostas from '../component/Navbar4'
import Contact from '../component/Email'
import RendezVousBanner from '../component/RendezvousBanner'
import { useAuth } from '../contexts/AuthContext'


export default function Acceuil() {
  const{user}=useAuth()
  console.log(user)
  return (
    <div>
        <ImageSlider/>
        <RendezVousBanner/>
        <StyledSection/>
        <LegalStatsSectionFR/>
        <CabinetCostas/>
        <Contact/>
      
    </div>
  )
}




