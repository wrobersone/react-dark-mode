import React from 'react'
import { ContactIcons, HeroContent, HeroSection, ImageContainer, StyledButtons } from '../../../styles/HeroStyles'
import heroImg from '../../../images/osmusa.png'
import { FaPhone, FaRegEdit } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  const HeroItems = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1, 
        transition: {
            delay: 2,
            staggerChildren: 0.3, // decide on whether to use this animation
        }, 
    },
  };

  return (
    <div>
      <HeroSection initial='hidden' 
            animate='visible' 
            variants={HeroItems}>
        <HeroContent>
          <h2>Spring in <span>WoodFood</span></h2>
          <p>The most delicious outdoor food</p>
          <StyledButtons>
            <button>Capacity</button>
            <button>Location</button>
            <button>Seat Type</button>
          </StyledButtons>
        </HeroContent>
        <ImageContainer>
          <img src={heroImg} alt="" />
        </ImageContainer>
        <ContactIcons>
          <a href="">
            <FaRegEdit />
          </a>
          <a href="">
            <FaPhone />
          </a>
        </ContactIcons>
      </HeroSection>
    </div>
  )
}

export default Hero