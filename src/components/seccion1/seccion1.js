import React, { Component } from 'react';

const Seccion1 = (props) =>{
    return(
        <div>
            <div className="title">
                {props.title}
            </div>
            <hr className="hr2"/>
            <div className="description">
                Clases en vivo, personalizadas para niños y jóvenes<br/>
                de colegio que les permite aprender de manera<br/>
                segura y desde cualquier lugar.
            </div>
        </div>
    );
}
export default Seccion1;