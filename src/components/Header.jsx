import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';


const Header = () => {

   
    return (
        <header>
        <Navbar className="header" bg="dark" variant="dark" expand="lg" collapseOnSelect>

            <Container>
                <LinkContainer exact  to='/'>
                    <Navbar.Brand>React Interviwer</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">



                    <Nav className="ml-auto">
                        <LinkContainer exact to='/create'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i> Create Question</Nav.Link>
                        </LinkContainer>

                        <LinkContainer exact to='/'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i> All Question</Nav.Link>
                        </LinkContainer>

                        <LinkContainer exact to='/detail'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i> Solutions</Nav.Link>
                        </LinkContainer>

                      


                  
                        
                        

        
                        </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        </header>
    )
}

export default Header
