import React, { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import { Card } from '@mui/material';


export default class Ajouterinfopers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          job: "",
          skills: "",
          picturep: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        const { firstname , lastname , job , skills , picturep } = this.state;
        console.log( firstname , lastname , job , skills , picturep );
        }
    
    render() {
        return ( 
            <div>
    <h1> <marg>  <Titreanimuser> Your Profil  </Titreanimuser>  </marg> </h1>
            <Cardd> 
            <Card style={{ width: '60rem'}} variant="outlined" >
                <form form onSubmit={this.handleSubmit} >
                    <div className="mb-5">
                        <Textp>
                         
                            <input 
                              type="text"
                              className="btn3"
                              placeholder="First name"
                              onChange={(e) => this.setState({ firstname : e.target.value })} />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input 
                             type="text" 
                             className="btn3" 
                             placeholder="Last name"
                             onChange={(e) => this.setState({ lastname: e.target.value })} />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input  
                            type="text" 
                            className="btn3"
                            placeholder=" Job"
                            onChange={(e) => this.setState({ job : e.target.value })}  />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input  
                            type="text" 
                            className="btn3" 
                            placeholder="Skills"
                            onChange={(e) => this.setState({ skills: e.target.value })} />
                        </Textp>
                    </div>


                    <div className="mb-5">
                        <Textp>
                            <input  
                            type="file" 
                            className="btn3"
                            onChange={(e) => this.setState({ picturep: e.target.value })}  />
                        </Textp>
                    </div>


                    <Btnp>
                    <div className="d-grid"> <button type="submit" className="btn btn-primary"> Add </button> </div>
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