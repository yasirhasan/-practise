import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import axios from 'axios';
export default class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            products: []
        }
    }
    componentWillMount() {
        axios.get('/products')
            //     .then((response) =>{
            //         return response.json()
            //     }).then((products) =>{
            //     const newProducts = products.map(({id, name, description, price, image}) =>{
            //         return {id, name, description, price, image}
            //     });
            //     this.setState({
            //         products: newProducts
            //     })
            // })
            .then(function (response) {
                // handle success
                console.log(response.data);
                return response.data
            }).then((products) => {
                const newProducts = products.map(({id, name, description, price, image}) => {
                    return {id, name, description, price, image}
                });
                this.setState({
                    products: newProducts
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    renderRow() {
        return this.state.products.map((product, i) =>{
            return(
                <Col key={product.id} md={4}>
                    <NavLink to="/product">
                        <div className="card mt-4">
                            <img className="card-img-top" src={/products/images/${product.image}} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        </div>
                    </NavLink>
                </Col>
            )
        })
    }
    render(){
        return(
            <div className="container">
                <Row>{
                    this.renderRow()
                }
                </Row>
            </div>
        )
    }
}
