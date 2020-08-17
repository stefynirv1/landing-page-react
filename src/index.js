import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './components/menu/menu'
import CompletePage from './Pages/Complete-page';

const Body = () =>{
  return(
    <div id="body">
      <Menu/>
      <CompletePage/>
    </div>
  )
}

ReactDOM.render(
    <Body/>,
  document.getElementById('root')
);


