import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import me from '../../assets/Nouur.png'
import mobile1 from '../../assets/mobile1.jpg'
import mobile2 from '../../assets/mobile2.jpg'
import mobile3 from '../../assets/mobile3.jpg'

import web1 from '../../assets/mdg.png'
import web2 from '../../assets/yaceramik.png'
import web3 from '../../assets/expertlegal.png'


import { Link } from 'react-router-dom'



const Projets = () => {
  return (
    <misepage> 
    <h1>
        
        <Titreanimproj> Portflio  </Titreanimproj>
        <Couleurgrisproj>
            <Typewriter 
            words={[
                     "M E S - REALISATIONS"  
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

         
           <a className='btn2' href='/ajouterprojet'> CMS</a>
           <a className='btn2' href='/ajouterprojet'> Design</a>
           <a className='btn2' href='/ajouterprojet'> Dev - web </a>


           <Travorg> 
           <img className='imgtrav'src={mobile1} href='/pageprojet' alt='mobile1'/>
           <img className='imgtrav'src={mobile2} alt='mobile2'/>
           <img className='imgtrav'src={mobile3} alt='mobile3'/>
           </Travorg>


           <Travorg> 
           <img className='imgtrav'src={web1} alt='web1'/>
           <img className='imgtrav'src={web2} alt='web2'/>
           <img className='imgtrav'src={web3} alt='web3'/>
          

           </Travorg>


           <Textp> <a className='btn3' href='/ajouterprojet'>  Create Project </a> </Textp>
                       
         




    </h1>
    </misepage>
  )
}

export default Projets


export const Titreanimproj = styled.div`
font-family : 'hello_santtinyregular';
margin-top: 5rem;
margin-bottom: 3rem;
font-size: 50px;
`


export const Textp =styled.div`
margin-top: 5rem;
margin-bottom: 5rem;
font-size: 20px;
text-align: center;
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

export const misepage = styled.div`
margin-left : 50rem;
`

export const btnmarg = styled.div`
padding: 0.75rem 2rem;
border-radius: 1.875rem;
border: 1px solid transparent;
color: #fff;
background-color : #FBA9A3;
font-weight : 500;
text-align : center; 
margin-right : 3rem ; 
margin-left : 3rem ; 
`

export const Travorg  = styled.div `
display: flex;
justify-content: space-around;
margin-top : 3rem;
margin-bottom : 1.5rem;
margin-left : 5rem;
margin-right : 3rem;


.imgtrav{
    margin-top : 3.5rem;
    margin-bottom : 1.5rem;
    height: 35%;
    border-radius: 10%;
    max-width: 25%;
   
 
}

.imgtrav:hover{
    border-radius: 0%;
    opacity : 0.55;
}
`


