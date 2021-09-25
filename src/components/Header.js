import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>Mnevis's portfolio</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <LinkContainer to='/'>
              <Nav.Link href='/'>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#resume'>Resume</Nav.Link>
            <NavDropdown title='Projects' id='basic-nav-dropdown'>
              <LinkContainer to='/Projects'>
                <NavDropdown.Item href='/Projects'>All</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.2'>React</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>JS</NavDropdown.Item>

              <NavDropdown.Item href='#action/3.4'>Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Sass</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
