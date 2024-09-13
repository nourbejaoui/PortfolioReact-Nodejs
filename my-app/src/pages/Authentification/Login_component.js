import React, { Component } from "react";
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { Card } from '@mui/material';
export default class Login_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userdetails";
        }
      });
  }

  render() {
  return (
    <div> 


   <Cardd> 
   <Card style={{ width: '60rem'}} variant="outlined" >
   <h1> <marg>  <Titreanimuser> Login </Titreanimuser>  </marg> </h1>

    <form onSubmit={this.handleSubmit}>
   
    
    <Textp>
    <div className="mb-3">
      <input
        type="email"
        className="btn3"
        placeholder="Enter email"
        onChange={(e) => this.setState({ email: e.target.value })}
      />
    </div>
    </Textp>
   


    <Textp>
    <div className="mb-3">
      <input
        type="password"
        className="btn3"
        placeholder="Enter password"
        onChange={(e) => this.setState({ password: e.target.value })}
        
      />
    </div>
    </Textp>

    <Textpp> Forget password ? </Textpp>
    
    <Btnp>
    <div className="d-grid"> <button type="submit" className="btn btn-primary"> Login </button> </div>
    </Btnp>

  </form>
  </Card>
  </Cardd>
  </div> 
  );
}
}



export const Textp =styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
font-size: 20px;
text-align: center;
`
export const Textpp =styled.div`
margin-bottom: 1rem;
font-size: 15px;
text-align: center;
color : #808080;
`

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

export const Cardd =styled.div`
margin-top: 3rem;
margin-bottom: 8rem;
padding-top: 20px;
margin-right: auto;
margin-left: auto;
width: 500px;
text-align: center;
display : flex; 
justify-content: center ; 
align-items:center ;
`
export const Btnp =styled.div`
margin-top: 1rem;
margin-bottom: 4rem;
`