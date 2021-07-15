import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '@fontsource/roboto';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';

function App() {
 
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/registro" component={Registro}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
  );
}

export default App;
