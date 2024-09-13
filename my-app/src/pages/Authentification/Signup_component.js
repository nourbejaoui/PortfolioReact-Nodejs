import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from '@mui/material';

export default class signup_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);

    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert("inscription successful");
        window.location.href = "./login";
      });
  }

  render() {
    return ( 

      <Cardd> 
      <Card style={{ width: '60rem'}} variant="outlined" >
      <form form onSubmit={this.handleSubmit}>
       <h1> <marg>  <Titreanimuser> Sign up </Titreanimuser>  </marg> </h1>
       

        <Textp>
        <div className="mb-3">
          <input
            type="text"
            className="btn3"
            placeholder="Enter First name"
            onChange={(e) => this.setState({ fname: e.target.value })} />
        </div>
        </Textp>

        <Textp>
        <div className="mb-3">
          <input
            type="text"
            className="btn3"
            placeholder="Enter Last name"
            onChange={(e) => this.setState({ lname: e.target.value })} />
        </div>
        </Textp> 

        <Textp>
        <div className="mb-3">
          <input
            type="email"
            className="btn3"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}  />
        </div>
        </Textp>

        <Textp>
        <div className="mb-3">
          <input
            type="password"
            className="btn3"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        </Textp>

        <Btnp> 
        <div className="d-grid"> <button type="submit" className="btn btn-primary">  Sign Up </button> </div>
        </Btnp>

      </form>
      </Card>
      </Cardd>
  )
}
}

export const Textp =styled.div`
margin-top: 2rem;
margin-bottom: 1rem;
font-size: 20px;
text-align: center;
`
export const Titreanimuser = styled.div`
font-family : 'hello_santtinyregular';
margin-top: 3rem;
margin-bottom: 3rem;
font-size: 50px;
`

export const marg = styled.div`
margin-top: 5rem;
font-size: 100px;
`

export const Cardd =styled.div`
margin-top: 2rem;
margin-bottom: 5rem;
padding-top: 15px;
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
margin-bottom: 2rem;
`