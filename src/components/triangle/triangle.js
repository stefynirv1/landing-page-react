import React, { Component } from 'react';
import '../../Pages/page.css'

const Triangle  = (props) =>{
    return(
        <div>
            <div >
                <img src={props.img} className={props.className} alt =''/>
                <div className={props.stylenumero}>
                    {props.numero}
                </div>
                <div className={props.styletext}>
                    {props.texto}
                </div>
               
               
            </div>
        </div>
    )
}
export default Triangle;