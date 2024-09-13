import React from 'react'
import { HomeContainer, HomeIntro, Name } from './StyleHome'
import { Typewriter } from 'react-simple-typewriter'

import HomeSocials from './HomeSocials'

const Home = () => {
  return (
    <HomeContainer> 
    
    <HomeIntro>
        <Name> Nour Bejaoui  </Name>
        <span> I'm a web Developper </span> 
        <h1> and I'm </h1>
        <h1> 
            <Typewriter 
            words={[
                "Designer",
                "CMS Developper",
                "Font-End Developper",
                "Symfony Developper",
      
            ]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            />

        </h1> 
        <HomeSocials/>
        <a className='btn btn-contactme'> Contactez moi </a>
        
    </HomeIntro>
    </HomeContainer>
  )
}

export default Home