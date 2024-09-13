import React from 'react'
import { Link } from 'react-router-dom'
import { Copyright, NavList, SideContainer , SideLogo } from './SideStyle'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt , FaLayerGroup} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import {MdMessage} from 'react-icons/md'
import logosh from '../../assets/Nouur.png'

const Sidebar = () => {
  return (
    <SideContainer>
     <SideLogo>
        <img src={logosh} alt ='mon logo'/>
     </SideLogo>
     <nav> 
        <NavList> 
            <li>
                <Link to="/home" className='nav-link'> 
                <HiHome size={30} color='white'/>
                </Link>
            </li>
            <li>
                <Link to="/signup" className='nav-link'> 
                <FaUserAlt size={25} color='white'/>
                </Link>
            </li>
            <li>
                <Link to="/projets" className='nav-link'> 
                <FaLayerGroup size={28} color='white'/>
                </Link>
            </li>
            <li>
                <a href="/profil" className='nav-link'> 
                <GiGraduateCap size={35} color='white'/>
                </a>
            </li>
            <li>
                <a href='#services' className='nav-link'> 
                <BsBriefcaseFill size={28} color='white'/>
                </a>
            </li>
            <li>
                <a href='#message' className='nav-link'> 
                <MdMessage size={30} color='white'/>
                </a>
            </li>

        </NavList>
     </nav> 

     <Copyright> <span> © 2022 - 2023 </span></Copyright>
    </SideContainer>
  )
}

export default Sidebar