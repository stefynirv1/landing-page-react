import React from 'react';
import LogoYoutube from '../Logos/youtube-logo-8.png'
import '../Fuente/styleall.css'
import './menu/menu.css'
import {NavLink, withRouter}  from 'react-router-dom'
class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <a className="navbar-brand" id="logoYoutube" href="#Home">
               <img 
                  src={LogoYoutube}
                  alt="Youtube"
                  width= "180px"
               />
         </a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
       <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
              <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
              
              <a className="nav-link" href="#About">About us</a>
           </li>
           <li className="nav-item">
              <a className="nav-link" href="#Services">Services</a>
           </li>
           <li className="nav-item">
              <a className="nav-link" href="#Stories">Sucess stories</a>
           </li>
       </ul>
      
       </div>
      </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;