import { createGlobalStyle } from "styled-components";

export const firstColor = ' hsl(353, 100%, 65%)';
export const secondColor = '#00bcd4';
export const titleColor = ' hsl(244, 74%, 26%)';
export const textColor = ' hsl(244, 16%, 43%)';
export const bodyColor = ' hsl(258, 60%, 98%)';
export const containerColor = '#fff';
 


export const h1fontSize = '3rem'; 
export const h2fontSize = '1.5rem'; 
export const h3fontSize = '1.25rem';
export const normalfontSize = '1rem'; 
export const smallfontSize = '0.875rem'; 
export const smallerfontSize = '0.71rem'; 

export const fontMedium = 500;
export const fontSemiBold = 500;
export const fontbold = 500;

export const shadow = "0px 0px 5px 1px rgb(69 67 96)"
export const borderRadius = '20px'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px; 
    box-sizing: border-box; 
}

html{
    scroll-behavior: smooth; 
}

body,button,input,textarea{
    font-family : 'Rubik',sans-serif;
    font-size : ${normalfontSize};
}

body{
    background-color: ${containerColor};
    line-height: 1.7;
    transition: .5s;
}

code{
    font-weight: bold;
    color: rgb(33,74,150);
    font-family: Tahoma,Verdana, sans-serif;
}

h1,h2,h3{
    color: ${textColor};
    font-weight: ${fontbold} ;
    line-height: 1.2;
}

ul{
    list-style : none; 
}

a{
    text-decoration: none;
}

button{
    cursor: pointer;
    border: none;
    outline: none;
}

img{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
}

.btn{
    padding: 0.75rem 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 1.875rem;
    border: 1px solid transparent;
    color: #fff;
    background-color : #FBA9A3;
    font-weight : ${fontbold};
    text-align : center; 
}



.btn3{
    padding: 0.75rem 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 1.875rem;
    border: 1px solid #FBA9A3;
    color: #FBA9A3;
    background-color : white;
    font-weight : ${fontbold};
    text-align : center; 
}

.btnicon{
    background:transparent;
}
@keyframes button-push {

    50%{
        transform: scale(0.8); 
    }
    100%{
        transform: scale(1); 
    }
}
.btn:hover{
     transform: scale(0.98);
}

.btn2{
    padding: 1rem 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
    font-size: 15px;
    border-radius: 1.875rem;
    border: 1px solid transparent;
    color: #fff;
    background-color : #FBA9A3;
    font-weight : ${fontbold};
    text-align : center; 
}

.btn2:hover{
    transform: scale(0.6);
    background-color : white;
    color: #FBA9A3;
   
}


@font-face {
    font-family: 'hello_santtinyregular';
    src: url('../../Styles/fonts/hellosanttiny-webfont.woff2') format('woff2'),
         url('../../Styles/fonts/hellosanttiny-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.font{
    font-family: 'hello_santtinyregular';

}

 
`
export default GlobalStyle ; 



