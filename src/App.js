import React, { Component } from 'react';
import {container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Header from './Header'
import Home from './Home'
import About from './About'
import Products from './Products'

class App extends Component{
    constructor(props){
        super(props);
        this.title='My app'
    }
  render() {
    return(
       <container>
            <Router>
                <Header/>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/products' component={Products} />
            </Router>
       </container>
    )
  }
}

export default App;