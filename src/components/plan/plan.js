import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../../Pages/page.css'


const Plan  = (props) =>{
    return(
        <div>
            <div>
                <img src={props.img} className={props.estiloplan}alt =''/>
                <Container className={props.estilocontenedor}>
                <div className={props.estilovalor}>
                    {props.valor}
                </div>
                <div className="estilo_span">
                    <span >PLAN {props.numeroplan}</span>
                </div>
                </Container>

               

            </div>
        </div>
    )
}
export default Plan;