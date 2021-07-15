import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navegacion from './components/Navegacion';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import "bulma/css/bulma.css";
import Usuario from './pages/Usuario';
import Productos from './pages/Productos';

function App() {
  return (
    <div>
     <h1>React Router</h1>
     <Router>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/acerca" component={Acerca} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/usuario/:nombre/:edad/:email" component={Usuario} />
        <Route path="/about"> <Redirect to="/acerca" /> </Route>
        <Route path="/producto" component={Productos} />
        <Route path="*" component={Error404} />       
       </Switch>
     </Router>
    </div>
  );
}

export default App;
