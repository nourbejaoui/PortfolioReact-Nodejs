import styled from "styled-components" ; 
import { fontbold, h1fontSize, textColor } from "./GlobalStyle";

export const Container = styled.section`
         width: 90%;
         padding-top: 0rem;
         padding-bottom: 0.1rem;

         p,span{
            color : ${textColor};
         }
`

export const TitleSection = styled.h1`
         margin: 3rem 0 2rem 0rem;
         font-weight: ${fontbold};
         font-size: ${h1fontSize};

         &::before{
           content: '';
           height: 2.25rem;
           width: 2.25rem;
           position: relative ;
           left: -0.875rem;
           top: -0.875rem;
         }
`

