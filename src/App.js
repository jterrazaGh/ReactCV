import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import Estudios from "./pages/estudios/estudios.component";
import Experiencia from "./pages/experiencia/experiencia.component";
import Contacto from './pages/contacto/contacto.component';
import Header from './components/header/header.component';

class App extends React.Component{

  constructor()
  {
    super();
  }

  render(){

    return(
      <div>
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/estudios" component={Estudios} />
          <Route path="/experiencia" component={Experiencia} />
          <Route path="/contacto" component={Contacto} />
        </Switch> 
      </div>
      
    );
  }
}

export default App;
