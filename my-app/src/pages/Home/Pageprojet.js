import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import me from '../../assets/Nouur.png'


const Pageprojet = () => {
  return (
<h1> 
    <Titreanimproj2> Projet  </Titreanimproj2>
    <Couleurgrisproj>
        <Typewriter 
        words={[
                 "D E V - W E B "  
        ]}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={80}
        deleteSpeed={120}
        delaySpeed={1500}
        />
        </Couleurgrisproj>
       
       <Ligneproj> </Ligneproj>
       <Textp>  Une plateforme collaborative qui propose un service de mise en relation et de réservation d’activités   </Textp> 
      <Imgprojdiv> <img className='Imgproj'src={me} alt='moi'/> </Imgprojdiv> 
       </h1>

  )
}

export default Pageprojet


export const Titreanimproj2 = styled.div`
font-family : 'hello_santtinyregular';
margin-top: 5rem;
margin-bottom: 3rem;
font-size: 50px;
`

export const Couleurgrisproj = styled.div`
color : #C0C0C0 ;
`

export const Ligneproj = styled.div`
background: #C0C0C0;
width: 55px;
height: 1px;
margin: 20px auto;
margin-bottom: 50px;
`

export const Textp =styled.div`
margin-top: 1rem;
margin-bottom: 4rem;
font-size: 20px;
text-align: center;
`

export const Imgprojdiv = styled.div`
margin-top : 3.5rem;
margin-bottom : 5rem;

.Imgproj{ 
    margin-top : 3.5rem;
    margin-bottom : 1.5rem;
    height: 60%;
    max-width: 60%;
}
`