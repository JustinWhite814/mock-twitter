import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./styles.css"
export default function Navbar({isLoggedIn, handleLogout}) {

  return (
    <>
     {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    <nav>
    <Link to='/'><h3>Home</h3></Link>
        {isLoggedIn ? (
            <Button variant='primary' onClick={handleLogout} >
                Log Out
            </Button>
        ) : (
            <>
                <Link to='/auth/signup'>
                    <h4>Sign Up</h4>
                </Link>
            
            
                <Link to='/auth/login'>
                    <h4>Log In</h4>
                </Link>
            
            </>
        )}
    </nav>   
    </>
  )
}
