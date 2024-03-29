import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import './navigation.css'


export const Navigation = () => {

  return (
    <>
          <Navbar  expand="lg">
            <Container fluid>
              <Navbar.Brand to="/"as={Link} >
                  <img
                  src="img/Logo.jpg"
                  width="150"
                  height="150"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-3 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                 <Nav.Link to="/" as={Link}>Home</Nav.Link> 
                  
                  <NavDropdown title="categories" id="navbarScrollingDropdown">
                    <NavDropdown.Item to="/categories/lights" as={Link}>Luces</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/audio" as={Link}>Audio y video</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/cleaning" as={Link}>Limpieza</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/retrovisores" as={Link}>Retrovisores</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/protection" as={Link}>Proteccion</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/accessories" as={Link}>Accessories</NavDropdown.Item>
                    <NavDropdown.Item to="/categories/tires" as={Link}>Llantas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="/products" as={Link}>
                      Todos los productos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="carrito-cont">
                    <div className="carrito-name">Carrito</div>
                    <IoCartOutline size="2rem"/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    </>
  )
}

