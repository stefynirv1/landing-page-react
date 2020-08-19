import React, { Component } from 'react';

const Seccion2 = (props) =>{
    return(
        <div>
            <div className="title title2">
                {props.title}
                <hr className="hr2 hr4"/>
                <div className="description">
                {props.description}
            </div>
            </div>
            

        </div>
    );
}
export default Seccion2;