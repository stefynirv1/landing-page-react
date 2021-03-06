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
import Logo from '../components/logos/logos'
import Mintic from '../Logos/MinTIC_(Colombia)_logo.png'
import Camaracomercio from '../Logos/Subtraction4.png'
import Vivedigital from '../Logos/customLogo.png'
import Appsco from '../Logos/appsCO.png'
import Todosnuevopais from '../Logos/todos.png'
import Footeryoutube from '../Logos/youtube-logo-8.png'
import Box from '../Assets/Path 630.png'


const CompletePage = () =>{
    return(
        <div>
        <div id="home">          
            <div className="parent" alt =''/> 
            <div className="layer">
            <div className="child texto-imagen centrado">
                    Tutorías online
                </div>
                <hr className="child"/>    
                <div className="child subtexto-imagen centrado">
                    Clases en vivo
                </div>
            </div>
               

      
        </div>
        <div id="about">
                <Seccion1
                    title='Cómo funciona'
                />
                <div id="triangles">
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
            </div>
            <div>
                <Play
                    className="playImagen"
                    img={PlayButton}
                    titulo='Ver video'
                />
            </div>

            </div>
            <div id="planes1">          
             
            <div className="imagen2" alt=''>
            <div className="layer2">

           
<TriangleGris
    estilotexto='texto-imagen2 centrado'
    estilosubtexto='subtexto-imagen2 centrado'
    triangulo='triangulo-gris'
    img={Descuento}
    stylenumero="descuento"
    numero='20%'
    titulo='Subscríbete'
    subtitulo='Y obtén precios especiales'
   
    linea='hr3'
    estiloinput='estilo_input'
    imagenm={Box}
    boxdialog='caja1'
    estilotextocaja='estilo-texto-caja1'
    contenedorcaja='contenedorcaja'
/>
</div>
            </div>
           
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
                estilocontenedor='plan plan1'
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
                estilocontenedor='plan plan2'
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
                estilocontenedor='plan plan3'
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
                estilocontenedor='linea2-plan plan4'
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
                estilocontenedor='linea2-plan plan5'
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
                   
            <div className="imagen3" >
            <div className="layer3">
                <TriangleGris
                    estilotexto='texto-imagen3 centrado'
                    estilosubtexto='subtexto-imagen3 centrado'
                    triangulo='triangulo-gris3'
                    img={Descuento}
                    stylenumero="descuento"
                    
                    titulo='Subscríbete'
                    subtitulo='Y obtén clases GRATIS'
                    linea='hr5'
                    estiloinput='estilo_input2'
                    imagenm={Box}
                    boxdialog='caja2'
                    estilotextocaja='estilo-texto-caja1'
                    contenedorcaja='contenedorcaja1'
                />
            </div>
            </div> 
            </div> 
            <div className="planes">
            <Seccion2
                    title='¡Servicio de calidad y credibilidad!'
                    className='estilo-texto-2'
                    description='Contamos con el apoyo gubernamental local y nacional para una
                    efectiva enrega de contenidos y clases de calidad certificadas.'
                />
            </div>
            <div>
            <Logo
                    img={Mintic}
                    estiloslogos='logos2'
                    logo_estilo='estilo_logoMin'
                />
            </div>
            <div id="logos-seccion">
            <div className="logos">
                <Logo
                    estiloslogos='logos2'
                    img={Camaracomercio}
                    logo_estilo='estilo_logo'
                />
                <Logo
                estiloslogos='logos2'
                logo_estilo='estilo_logo'
                    img={Vivedigital}
                />
                <Logo
                estiloslogos='logos2'
                logo_estilo='estilo_logo'
                    img={Appsco}
                />
                <Logo
                estiloslogos='logos2'
                logo_estilo='estilo_logo'
                    img={Todosnuevopais}
                />
            </div>
            </div>
            
            <div id="footer1">
            <div className="imagen4" alt =''>
            <div className="layer4">
            <Container className="parrafo">
                <label>QUIÉNES SOMOS</label><br/>
                <label>TÉRMINOS Y CONDICIONES</label><br/>
                <label>PREGUNTAS FRECUENTES</label><br/>
                <label>CONTÁCTENOS</label>
                </Container>
            </div>
            </div>  
            </div>
            <div className="footer">

            <Logo
            estiloslogos='logos_youtube'
                logo_estilo='estilo_logofooter'
                    img={Footeryoutube}
                />
            </div>
        </div>
    )
  }


  export default CompletePage;