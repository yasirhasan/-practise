import React, { Component } from 'react'
import { Table } from 'react-bootstrap'


    class Content extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                products: []
            }
        }
        componentWillMount() {
            fetch('https://greencommunitylaundry.herokuapp.com/api/products')
            .then((response) =>{
                    return response.json()
                }).then((products) =>{
                    const newProducts = products.map(({id, name, description, price}) =>{
                        return {id, name, description, price}
                });
            this.setState({
                    products: newProducts
                })
            })
        }
        increment() {
            this.setState({
                count: this.state.count +1
            })
        }

    renderRow() {
        return this.state.products.map((product, i) =>{
            return(
                <tr key={product. id}>
                    <td>{i}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }
        render() {
            return (
                <Table style={{marginTop:'30px'}} striped bordered hover>
                    <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRow()}
                    </tbody>
                </Table>
            )
        }
    }
export default Content