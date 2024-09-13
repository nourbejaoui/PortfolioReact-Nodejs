import React, { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import { Card } from '@mui/material';


export default class Ajouterprojet extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nameproject: "",
          description: "",
          dateproject: "",
          societe: "",
          picture: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        const { nameproject , description , dateproject , societe , picture } = this.state;
        console.log( nameproject , description , dateproject , societe , picture );


        fetch("http://localhost:5000/registerproject", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nameproject , 
        description ,
         dateproject ,
          societe ,
           picture ,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "projectRegister");
        alert("project create ! operation successful !");
        window.localStorage.setItem("tokenproject", data.data);
        window.location.href = "./projetenvoye";

      });

        }
    
    render() {
        return ( 
            <div>
            <h1>
            <h1> <marg>  <Titreanimuser> Add a project </Titreanimuser>  </marg> </h1>

            </h1>
            <Cardd> 
            <Card style={{ width: '60rem'}} variant="outlined" >
                <form form onSubmit={this.handleSubmit} >


                <div className="mb-5">
                        <Textp>
                            <input  
                            type="file" 
                            className="btn3"
                            onChange={(e) => this.setState({ picture: e.target.value })}  />
                        </Textp>
                    </div>
 

                    <div className="mb-5">
                        <Textp>
                            <input 
                              type="text"
                              className="btn3"
                              placeholder="Enter Name project"
                              onChange={(e) => this.setState({ nameproject: e.target.value })} />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input 
                             type="text" 
                             className="btn3" 
                             placeholder="Enter Description"
                             onChange={(e) => this.setState({ description: e.target.value })} />
                        </Textp>
                    </div>

                    <div className="mb-5">
                        <Textp>
                            <input  
                            type="text" 
                            className="btn3" 
                            placeholder="Enter name societe"
                            onChange={(e) => this.setState({ societe: e.target.value })} />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input  
                            type="date" 
                            className="btn3"
                            onChange={(e) => this.setState({ dateproject: e.target.value })}  />
                        </Textp>
                    </div>



                      <Btnp>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary"> Create </button>
                    </div>
                    </Btnp> 


                </form>
            </Card>
            </Cardd>




        </div>
        ) 
    }
 }








export const Textp =styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
font-size: 20px;
text-align: center;
`
export const Cardd =styled.div`
margin-top: 3rem;
margin-bottom: 8rem;
padding-top: 25px;
margin-right: auto;
margin-left: auto;
width: 580px;
text-align: center;
display : flex; 
justify-content: center ; 
align-items:center ;
`
export const Btnp =styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
`
export const Titreanimuser = styled.div`
font-family : 'hello_santtinyregular';
margin-top: 3rem;
margin-bottom: 2rem;
font-size: 50px;
`

export const marg = styled.div`
margin-top: 5rem;
font-size: 100px;
`