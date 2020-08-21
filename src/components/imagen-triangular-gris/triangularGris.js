import React, { Component } from 'react';
import '../../Pages/page.css'
import { Container } from 'react-bootstrap';

const TriangleGris  = (props) =>{
    return(
        <div>
            <div>
                <Container className={props.contenedor}>
                <img src={props.img} className={props.triangulo}alt =''/>
                <div className={props.stylenumero}>
                    {props.numero}
                </div>
                <div className={props.estilotexto}>
                    {props.titulo}
                </div>
                <hr className={props.linea}/>    
                <div className={props.estilosubtexto}>
                    {props.subtitulo}
                </div>
                <div className={props.estiloinput}>
                    <input type="text" placeholder="Correo electrónico" className="input"></input>
                </div>
                <Container className={props.contenedorcaja}>
                <img src={props.imagenm} className={props.boxdialog}alt =''/>
                <div className={props.estilotextocaja}>
                    <label>Me interesa</label>
                </div>
                </Container>

                </Container>


            </div>
        </div>
    )
}
export default TriangleGris;