import React from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MainComponent from './components/MainComponent';


require('dotenv').config()

 
function App() {
  return (
      <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact to='/' component={MainComponent}/>
      </Switch>
      </div>
      </Router>
  );
}


export default App

