import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'; 
import Home from './Components';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <CssBaseline>
      <Route exact path="/" component={ Home } />
      <Route path="/portfolio" component= { Portfolio } />
      <Route path="/contact" component={ Contact } />
    </CssBaseline>
  );
}

export default App;
