import React from 'react'
import styled from 'styled-components'
import {BsFacebook} from 'react-icons/bs'
import { titleColor } from '../../Styles/GlobalStyle'
import {AiFillInstagram,AiFillBehanceCircle} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'


const HomeSocials = () => {
  return (
    <HomeSocialcontainer> 
        <ul className='social-ul'> 
            <li> <a className='social-link'  href='#facebook'>
                    <BsFacebook className='social-icon'/> 
                  </a>
             </li>
             <li> <a className='social-link' href='#instagram'>
                    <AiFillInstagram className='social-icon'/> 
                  </a>
             </li>
             <li> <a className='social-link' href='#linkedin'>
                    <IoLogoLinkedin className='social-icon'/> 
                  </a>
             </li>
             <li> <a className='social-link' href='#behance'>
             <AiFillBehanceCircle className='social-icon'/> 
                   </a>
             </li>
        </ul>
    </HomeSocialcontainer>
  )
}

export default HomeSocials

const HomeSocialcontainer= styled.div`
 dispaly: flex;
column-gap: 1.75rem;
margin: 1.5rem 0;
justify-content: center;

.social-ul{
    display: flex;
    margin-bottom: 20px;
}
.social-link{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border : 2px solid #FBA9A3;
    display : flex;
    align-items :center;
    justify-content: center;
    margin: 5px;
    transition: all 0.5s linear;
    cursor: pointer;
}

.social-link:hover{
  background-color: #FBA9A3;
  border: 2px solid transparent;
}

.social-icon{
  font-size: 25px;
  color: ${titleColor};
}
`