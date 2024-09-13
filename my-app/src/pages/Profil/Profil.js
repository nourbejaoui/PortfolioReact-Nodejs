import React from 'react'
import { Titreanim , Couleurgris , Ligne,  Textp } from './ProfilStyle'
import { Typewriter } from 'react-simple-typewriter'



const Profil = () => {
  return (
    <h1> 
        <Titreanim>  Qui suis je ?     </Titreanim>
        
        
            <Couleurgris>
            <Typewriter 
            words={[
                     "P R E S E N T A T I O N"  
            ]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={120}
            delaySpeed={1500}
            />
            </Couleurgris>
           
           <Ligne></Ligne>


           
             <Textp>  Développeuse passionnée  dans le domaine du web depuis plus de 4 ans,  </Textp> 
             <Textp>  actuellement développeuse Web.</Textp> 
             <Textp>  Je conçois et réalise des sites web utilisant des CMS </Textp> 
             <Textp>Je developpe aussi avec Symfony, ce qui me permet de développer des applications web </Textp> 
         <Textp> J'ai quelques projets intéressants  à <a href=""> voir. </a> </Textp> 
             <Textp> Vous souhaitez avoir mon CV au format PDF c'est par <a href="">  ici. </a></Textp> 
        
        </h1> 
        
  
       
          

  )
}




export default Profil

