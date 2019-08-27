import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            products: []
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    componentWillMount(){
        fetch('https://greencommunitylaundry.herokuapp.com/api/products')
            .then(response => {
                return response.json();
            }).then(data => {
                let products = data.map((newProducts) => {
                    return (
                        <tr>
                            <td>{newProducts._id}</td>
                            <td>{newProducts.description}</td>
                            <td>{newProducts.name}</td>
                            <td>{newProducts.price}</td>
                            <td><img src={`https://greencommunitylaundry.herokuapp.com/api/images/${newProducts.image}`}/></td>
                        </tr>
                     );
            });
            this.setState({products: products});
            console.log("state", this.state.products);
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
export default Content;