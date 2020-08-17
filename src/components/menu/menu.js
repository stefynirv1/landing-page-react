import React, { Component } from 'react';
import Route from 'react-router-dom/Route'

import { BrowserRouter } from 'react-router-dom'
import Nav from '../navbar'
import Home from '../../Pages/Complete-page'
import CompletePage from '../../Pages/Complete-page';
 
class Menu extends React.Component {
 
  render() {
   return (
    
         <div>
           <BrowserRouter>
             <div>
               <Nav />
               <Route exact path="#Home"/>
               <Route path="#About"/>
               
             </div>
           </BrowserRouter>
         </div>
       );
    
  }
 
}
 
export default Menu;