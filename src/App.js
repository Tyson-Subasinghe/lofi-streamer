import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NoMatch} from './pages/404';
import './pages/colourChanger.css';


function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
