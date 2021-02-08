import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';

export default function Footer() {
    return(
      <Grid xs={12} lg={12} sm={12}>
          <div className= "footer">
          <div className= "footer-container">
          <div className= "footer-row">
          <div className= "footer-col"> <p style={{textAlign: "left"}}>Privacy policy | Terms of use | Disclaimer | Sitemap</p></div>
          <div className= "footer-col"> <p style={{textAlign: "right"}}> © 2015 HBL All Rights Reserved</p></div>
      </div>
      </div>
      </div>

    </Grid>
        
    );
  }
  

  