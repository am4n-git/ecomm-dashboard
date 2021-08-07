import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './App.css';
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand><Link to="#home">Home</Link></Navbar.Brand>
                <Nav className="me-auto navbar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <Link to="/add">Add Prdouct</Link>
                        <Link to="/update">Upadte Product</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
