import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Header from './Header'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.siteName = 'firstApp'
    }
    render(){
        return(
            <div>
            <Header />
            </div>
        )
    }
}