import React, {Component} from 'react'
import { Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import About from './About'

class App extends Component{
    constructor(props){
        super(props);
        this.title = 'hello';
    }
    render() {
        return(
            <Container fluid={true}>
                <Router>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
               <Route exact={true} path="/" component={Home}/>
               <Route path="/about" component={About}/>
                </Router>
            </Container>
            )



    }
}

export default App;
