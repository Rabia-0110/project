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
            .then(response => response.json())
            .then(result => {this.setState({
                products : [result]
            });
            })
    }

    render() {
        return(
            <Table striped bordered hover>
                <thead>
                <tr>

                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.state.count}</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        )
    }

}
export default Content;