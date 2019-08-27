import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            products: []
        }
    }

    componentWillMount(){
        fetch('https://greencommunitylaundry.herokuapp.com/api/products/')
            .then(response => {console.log(response.json());
            }).then(data => {
                console.log(data);
                this.setState({
            products : [data]
           });
        });

    }

    render() {
        return(
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Image</th>

                </tr>
                </thead>
                <tbody>
                  {this.state.products}
                </tbody>
            </Table>
        )
    }

}
export default Product;