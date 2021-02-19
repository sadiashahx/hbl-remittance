import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from '../src/Header';
import Footer from '../src/Footer';
import {Container, Grid} from '@material-ui/core';
import axios from 'axios';


export default function App()  {

  const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)

    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
           console.log(error)
        })
    
    }, [idFromButtonClick])


 

  return (

        <Grid xs={12} sm={12} md={12} lg={12}>

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
     
        <div className="App">
        <input type="text" style={{width: "285px", height: "30px"}} value={id} onChange={e => setId(e.target.value)} />
        <button type="button" style={{backgroundColor: 'teal', height: "35px", color: "white", textAlign: "center", marginTop: "10px"}} onClick={handleClick}>Search</button>
        <div style={{marginTop: "20px"}}>{post.title}</div>
        </div>

        <div>
        <Footer/>
        </div>

        </Grid>
  

  );
}
