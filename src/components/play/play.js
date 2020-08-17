import React, { Component } from 'react';

const Play = (props) =>{
    return(
        <div className="botonVideo">
            <img src={props.img} className={props.className} alt =''/>  
            <div className="titulo-video">
                {props.titulo}
            </div>         
        </div>
    );
}
export default Play;