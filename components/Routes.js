import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent'; // Importa el componente de la página de inicio
import LoginComponent from './LoginComponent'; // Importa el componente de inicio de sesión

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginComponent} /> {/* Ruta para el componente de inicio de sesión */}
        <Route path="/home" component={HomeComponent} /> {/* Ruta para el componente de la página de inicio */}
      </Switch>
    </Router>
  );
};

export default Routes;
