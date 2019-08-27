import React, {Component} from 'react'
import { Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Product from './Product'
import Singleproduct from './Singleproduct'



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
                    <Link to="/product">Product</Link>
                    <Link to="/singleproduct">Singleproduct</Link>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/singleproduct" component={Singleproduct}/>
                </Router>
            </Container>
            )



    }
}

export default App;
