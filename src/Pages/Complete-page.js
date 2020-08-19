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
import TriangleGris from '../components/imagen-triangular-gris/triangularGris'
import Descuento from '../Assets/Group-gris860.png'
import Banner1 from '../Images/Group1800.png'
import Seccion2 from '../components/seccion1/seccion2'
import Plan from '../components/plan/plan'
import PlantillaPlan from '../Assets/plantillaplan.png'
import Cuadro from '../components/plan/plan2'

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

            </div>
            <div id="planes1">          
            <div className="imagen2" alt =''/>  
           
                <TriangleGris
                    estilotexto='texto-imagen2 centrado'
                    estilosubtexto='subtexto-imagen2 centrado'
                    triangulo='triangulo-gris'
                    img={Descuento}
                    stylenumero="descuento"
                    numero='20%'
                    titulo='Subscríbete'
                    subtitulo='Y obtén precios especiales'
                    textoplace='Correo electrónico'
                    linea='hr3'
                />
            </div>
           
            <div className="planes">
            <Seccion2
                    title='¡Tenemos planes  para todos los presupuestos!'
                    className='estilo-texto-2'
                    description='Adicional a la calidad y metodología ágil implementada,
                    puedes elegir el tiempo que necesitan tus hijos.'
                />
            </div>
           <div id="planes2">
               <div className="organizar-planes">

               
           <Plan
                img={PlantillaPlan}
                estilocontenedor='plan1'
                estiloplan='estilo_plan estilo_plan1'
                estilovalor='estilo_valor'
                estilonumeroplan='estilo_numero_plan'
                estilohoras='estilo_horas'
                valor='$25.000'
                numeroplan='1'
                numerohoras='1'
                
            />
            <Cuadro
                    contenedor='estilo_contenedor'
                    estilonumeroplan='estilo_numero_plan'
                    estilohoras='estilo_horas'
                    numerohoras='1'
                    palabra='hora1'
                    info='estilo_info1'
                    clases='estilo_texto_clases'
                />
            <Plan
                img={PlantillaPlan}
                estilocontenedor='plan2'
                estiloplan='estilo_plan estilo_plan2'
                estilovalor='estilo_valor'
                estilonumeroplan='estilo_numero_plan'
                estilohoras='estilo_horas'
                valor='$125.000'
                numeroplan='2'
                numerohoras='1'
            />
            <Cuadro
                    contenedor='estilo_contenedor estilo_contenedor2'
                    estilonumeroplan='estilonumero_plan estilo_numero_plan2'
                    estilohoras='estilo_horas'
                    numerohoras='4'
                    palabra='hora1'
                    info='estilo_info1'
                    clases='estilo_texto_clases estilo_texto_clases2'
                />
            <Plan
                img={PlantillaPlan}
                estilocontenedor='plan3'
                estiloplan='estilo_plan estilo_plan3'
                estilovalor='estilo_valor'
                estilonumeroplan='estilo_numero_plan'
                estilohoras='estilo_horas'
                valor='$125.000'
                numeroplan='3'
                numerohoras='1'
            />
            <Cuadro
                    contenedor='estilo_contenedor estilo_contenedor3'
                    estilonumeroplan='estilonumero_plan estilo_numero_plan2'
                    estilohoras='estilo_horas'
                    numerohoras='8'
                    palabra='hora1'
                    info='estilo_info1'
                    clases='estilo_texto_clases estilo_texto_clases2'
                />

            </div>
            <div className="organizar-planes">
            <Plan
                img={PlantillaPlan}
                estilocontenedor='plan4'
                estiloplan='estilo_plan estilo_plan4'
                estilovalor='estilo_valor'
                estilonumeroplan='estilo_numero_plan'
                estilohoras='estilo_horas'
                valor='$25.000'
                numeroplan='PROMO'
                numerohoras='1'
            />
            <Cuadro
                contenedor='estilo_contenedor estilo_contenedor4'
                estilonumeroplan='estilonumero_plan estilo_numero_plan2'
                estilohoras='estilo_horas'
                numerohoras='1'
                palabra='hora1'
                info='estilo_info1'
                clases='estilo_texto_clases estilo_texto_clases2'
            />
                        <Plan
                img={PlantillaPlan}
                estilocontenedor='plan5'
                estiloplan='estilo_plan estilo_plan4'
                estilovalor='estilo_valor'
                estilonumeroplan='estilo_numero_plan'
                estilohoras='estilo_horas'
                valor='$125.000'
                numeroplan='PREMIUM'
                numerohoras='1'
            />
            <Cuadro
                contenedor='estilo_contenedor estilo_contenedor5'
                estilonumeroplan='estilonumero_plan estilo_numero_plan2'
                estilohoras='estilo_horas'
                numerohoras='4'
                palabra='hora1'
                info='estilo_info1'
                clases='estilo_texto_clases estilo_texto_clases2'
            />
            </div>
           </div>
           <div id="planes1">          
            <div className="imagen3" alt =''/>  
           
                <TriangleGris
                    estilotexto='texto-imagen3 centrado'
                    estilosubtexto='subtexto-imagen3 centrado'
                    triangulo='triangulo-gris2'
                    img={Descuento}
                    stylenumero="descuento"
                    numero='20%'
                    titulo='Subscríbete'
                    subtitulo='Y obtén clases GRATIS'
                    linea='hr5'
                    textoplace='Correo electrónico'
                />
            </div>

            <div className="planes">
            <Seccion2
                    title='¡Servicio de calidad y credibilidad!'
                    className='estilo-texto-2'
                    description='Contamos con el apoyo gubernamental local y nacional para una
                    efectiva enrega de contenidos y clases de calidad certificadas.'
                />
            </div>
        </div>
    )
  }


  export default CompletePage;