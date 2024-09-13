import React, { Component } from "react";
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'


export default class Userdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        };
      }
    componentDidMount() {
        fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({ userData : data.data});
          });
      }




    render() {
        return (

    <h1>

<Titreanimuser> Votre portflio en ligne </Titreanimuser> 
      <marg> 
    <Typewriter 
    words={[
             "W E L C O M E "  
    ]}
    loop={true}
    cursor
    cursorStyle='_'
    typeSpeed={80}
    deleteSpeed={120}
    delaySpeed={1500}
    />

   </marg>

<Titreanimuser> {this.state.userData.fname}  {this.state.userData.lname} </Titreanimuser> 

<Textp> <a className='btn3' href="/ajouterprojet"> Ajouter un projet </a> </Textp>
<Textp>  <a className='btn2' href='/ajouterinfopers'> Consulter votre compte </a> </Textp>
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

export const Textp =styled.div`
margin-top: 3rem;
margin-bottom: 3rem;
font-size: 20px;
text-align: center;
`