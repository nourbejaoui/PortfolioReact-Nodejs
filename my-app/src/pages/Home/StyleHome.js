import styled from "styled-components";
import { fontbold, h1fontSize, textColor } from "../../Styles/GlobalStyle";
export const HomeContainer = styled.div `
min-height: 80vh;
display: flex;
justify-content: space-around;
width: 100%;


img{
    margin-top : 3.5rem;
    margin-bottom : 1.5rem;
    margin-left : 11rem;
    height: 40%;
    border-radius: 50%;
    max-width: 40%;
}
`

export const HomeIntro = styled.div `
display: flex;
width: 65%;
flex-direction: column;
justify-content: center;
align-items:center;
span{
    font-size: 20px;
    color: ${textColor};
}
`


export const Name = styled.h1 `


font-size : ${h1fontSize};
font-family : 'hello_santtinyregular';
font-weight : ${fontbold};
color : ${textColor};
margin-bottom:1rem;
`