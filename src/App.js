import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from '../src/Header';
import Footer from '../src/Footer';
import {Container, Grid} from '@material-ui/core';


export default function App()  {
  return (
        <Grid xs={12} lg={12} sm={12}>
        <div>
        <Header />
        </div>
        <div>
        <img className="remittance-img" src={"/images/remittance.PNG"}/>
        </div>
        

        <div className="heading">
        <h2 style={{backgroundColor: 'teal', color: 'white', textAlign: "center", margin: "0 auto", width: "355px", fontSize: 20, height: "40px"}}>Remittance Tracking</h2>
        </div>
     
        <div>
        <p style={{textAlign: "match-parent", margin: "0 auto", marginTop: "15px", width: "350px"}}>Unique Reference #</p>
        </div>
     
        <div className="search">
        <input style={{width: "350px", height: "30px", margin: "0 auto", display: 'block'}}></input>
        <button style={{backgroundColor: 'teal', width: "355px", height: "35px", color: "white", textAlign: "center", margin: "0 auto", display: "block", marginTop: "10px"}}>Search</button>
        </div>
  
        <div>
        <Footer/>
        </div>








     

        </Grid>
    
   
  
  
    
    


  );
}