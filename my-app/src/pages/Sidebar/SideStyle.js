import styled from "styled-components";
import { fontbold, textColor } from "../../Styles/GlobalStyle";
export const SideContainer = styled.aside`
position: fixed;
left: 0;
top: 0;
background-color: #FBA9A3 ;
padding: 2rem;
width: 110px;
height: 100vh;
display: flex;
flex-direction: column; 
justify-content: space-between;
z-index: 10;
Transition: 0.5s;
`


export const SideLogo = styled.a`
width: 800px;
height: auto;
align-self: center;
position: relative;
top: -18px;
border-radius: 50%;

img{
    width: 120px;
    height: auto;
    border-radius: 50%;
}
`

export const NavList = styled.ul`
display: flex; 
flex-direction: column;
row-gap: 0.7rem;

.nav-link{
    font-size: 1.5rem;
    color: yellow;
    font-weight: 400;
}
`
export const Copyright = styled.div`
color: white;
font-size: 15px;
transform: rotate(360deg);
writing-mode: vertical-rl;
margin-right: 10px;
`
export const Name1 = styled.h1 `
font-size : 15px;
font-family : 'hello_santtinyregular';
font-weight : ${fontbold};
color : ${textColor};
margin-bottom:1rem;
`
