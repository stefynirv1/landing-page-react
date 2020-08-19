import React, { Component } from 'react';
import '../../Pages/page.css'

const Input  = (props) =>{
    return(
        <div>
            <div>
                <img src={props.img} className="triangulo-gris"alt =''/>
                <div className={props.stylenumero}>
                    {props.numero}
                </div>
                <div className="texto-imagen2 centrado">
                    {props.titulo}
                </div>
                <hr className="hr3"/>    
                <div className="subtexto-imagen2 centrado">
                    {props.subtitulo}
                </div>
            </div>
        </div>
    )
}
export default Input;