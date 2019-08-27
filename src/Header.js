import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return(
          <section>
              <div className="container">
                  <header>
                      <Navbar bg="light" expand="lg">
                          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="mr-auto">
                                  <NavLink exact className="nav-link" to="/" activeClassName="active">
                                      Home
                                  </NavLink>
                                  <NavLink className="nav-link" to="/about" activeClassName="active">
                                      About
                                  </NavLink>
                                  <NavLink className="nav-link" to="/products" activeClassName="active">
                                      Products
                                  </NavLink>

                              </Nav>
                              <Form inline>
                                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                  <Button variant="outline-success">Search</Button>
                              </Form>
                          </Navbar.Collapse>
                      </Navbar>
                  </header>
              </div>
          </section>
        )
    }
}