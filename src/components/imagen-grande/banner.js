import React, { Component } from 'react';

const Banner= (props) =>{
    return(
        
            <div>
            <img src={props.img} className={props.className} alt =''/>  
                <div className="child texto-imagen centrado">
                    Tutorías online
                </div>
                <hr className="child"/>    
                <div className="child subtexto-imagen centrado">
                    Clases en vivo
                </div>
            </div>
      
    );
}
export default Banner;
