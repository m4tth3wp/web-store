import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopNav extends Component {

    render() {
      return (
        <>
      <Navbar bg="dark" variant="dark" fixed="top" style={{opacity: '90%'}}>
          <Nav className="links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Cart</Nav.Link>
            <Nav.Link href="#contact">Sign In</Nav.Link>
          </Nav>
      </Navbar>
        </>
      )
    }
  }

  export default TopNav;