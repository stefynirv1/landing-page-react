import React, { Component } from 'react';
import './page.css'
import '../Fuente/styleall.css'
import Banner from '../components/imagen-grande/banner'
import Seccion1 from '../components/seccion1/seccion1'
import Play from '../components/play/play'
import Triangle from '../components/triangle/triangle'
import Triangulo from '../Assets/Group860.png'
import PlayButton from '../Logos/play-button.png'
import { Container } from 'react-bootstrap';
import Banner1 from '../Images/Group1800.png'

const CompletePage = () =>{
    return(
        <div>
        <div id="home">          
            <div className="parent" alt =''/>  
                <div className="child texto-imagen centrado">
                    Tutorías online
                </div>
                <hr className="child"/>    
                <div className="child subtexto-imagen centrado">
                    Clases en vivo
                </div>
        </div>
        <div id="about">
                <Seccion1
                    title='Cómo funciona'
                />
            <Container>
            <div className="seccion-triangulos">
            <Triangle
                    className="triangle triangle1"
                    img={Triangulo}
                    numero='1'
                    stylenumero="numero"
                    texto='Elige una materia'
                    styletext="triangle-text"
                />
            <Triangle
                    className="triangle triangle2"
                    img={Triangulo}
                    numero='2'
                    stylenumero="numero numero2"
                    texto='Selecciona un tutor'
                    styletext="triangle-text triangle-text2"
                />
                <Triangle
                    className="triangle triangle3"
                    img={Triangulo}
                    numero='3'
                    stylenumero="numero numero3"
                    texto='Programa tu clase'
                    styletext="triangle-text triangle-text3"
                    
                />
                <Triangle
                    className="triangle triangle4"
                    img={Triangulo}
                    numero='4'
                    stylenumero="numero numero4"
                    texto='¡A aprender!'
                    styletext="triangle-text triangle-text4"
                    
                />
            </div>
            </Container>
            <div>
                <Play
                    className="playImagen"
                    img={PlayButton}
                    titulo='Ver video'
                />
            </div>
            <div id="home">          
            <div className="imagen2" alt =''/>  
                <div className="child texto-imagen centrado">
                    Tutorías online
                </div>
                <hr className="child"/>    
                <div className="child subtexto-imagen centrado">
                    Clases en vivo
                </div>
        </div>
            

          

            </div>
        
        </div>
    )
  }


  export default CompletePage;