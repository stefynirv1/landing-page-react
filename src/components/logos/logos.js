import React, { Component } from 'react';
import '../../Pages/page.css'
import { Container } from 'react-bootstrap';

const Logo  = (props) =>{
    return(
        <div className={props.estiloslogos}>
            <img src={props.img} className={props.logo_estilo}alt =''/>
            
        </div>  
    );
}
export default Logo;