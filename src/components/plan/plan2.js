import React, { Component } from 'react';
import { Container,Row } from 'react-bootstrap';
import '../../Pages/page.css'

const Cuadro = (props) =>{
    return(
        <div>
            <div className={props.contenedor}>
                <Container className={props.estilocontenedor}>
                    <Row>
                    <div className={props.estilohoras}>
                        {props.numerohoras}
                    </div>
                    <Row className={props.palabra}>
                        HORA
                    </Row>
                    <Row className={props.clases}>
                        <div>
                        DE CLASES ONLINE EN VIVO
                        </div>
                    </Row>
                    </Row>

                <div className={props.info}>
                    <ul>
                        <li>
                            Tips académicos
                        </li>
                        <li>
                            Clases programadas
                        </li>
                        <li>
                            <a href="">Más información</a>
                        </li>
                    </ul>
                    
                </div>
                </Container>

               

            </div>
        </div>
    )
}
export default Cuadro;