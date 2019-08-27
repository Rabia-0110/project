import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

class Singleproduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            singleProducts: []
        }
    }

    componentWillMount(){
        axios.get('https://greencommunitylaundry.herokuapp.com/api/products/:id' +
            '')
            .then(response => {
                console.log(response)
                this.setState({singleProducts : response.data});
            });


    }

    render() {
        return(
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.products}
                </tbody>
            </Table>
        )
    }

}
export default Singleproduct;