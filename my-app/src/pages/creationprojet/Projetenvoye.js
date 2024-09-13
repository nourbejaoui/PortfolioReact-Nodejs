import React, { Component } from "react";
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import web3 from '../../assets/web3.jpg'


export default class  Projetenvoye extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projectData: "",
        };
      }
    componentDidMount() {
        fetch("http://localhost:5000/projectData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            tokenproject: window.localStorage.getItem("tokenproject"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "projectData");
            this.setState({ projectData : data.data});
          });
      }




    render() {
        return (

    <h1>

<Titreanimuser> Dev - Site web  </Titreanimuser> 
      <marg> 
    <Typewriter 
    words={[
             " W E L C O M E "
    ]}
    loop={true}
    cursor
    cursorStyle='_'
    typeSpeed={80}
    deleteSpeed={120}
    delaySpeed={1500}
    />

   </marg>

      <Ligneproj> </Ligneproj> 
      <Textp> Deluxe gifts is an e-commerce site that allows you to sell  , </Textp> 
      <Textp>  Unique gift ideas for yourself or any other gathering .  </Textp> 
      <Textp>   Custom blended sugar scrubs , body lotions , mists , shower gels </Textp> 
        <Textp>  and candles in a luxury packaging   </Textp> 
        <Textp>   2020  -  2021  </Textp> 
      <Imgprojdiv> <img className='Imgproj' src={web3} alt='web1'/> </Imgprojdiv> 
      <Textp> <a className='btn3' href='/projets'>  Voir plus </a> </Textp>


      <Textp>  {this.state.projectData.nameproject}  </Textp>
      <Titreanimuser>  {this.state.projectData.description} </Titreanimuser>






    </h1>
  );
}
}



export const Titreanimuser = styled.div`
font-family : 'hello_santtinyregular';
margin-top: 4rem;
margin-bottom: 3rem;
font-size: 50px;
`

export const marg = styled.div`
margin-top: 5rem;
font-size: 100px;
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
margin-bottom: 1rem;
font-size: 20px;
text-align: center;
`

export const Imgprojdiv = styled.div`
margin-top : 1rem;
margin-bottom : 5rem;

.Imgproj{ 
    margin-top : 3rem;
    margin-bottom : 1.5rem;
    height: 60%;
    max-width: 60%;
}
`