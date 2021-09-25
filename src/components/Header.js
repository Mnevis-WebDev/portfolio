import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <div className='scalableOut'>Mnevis's Portfolio</div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <LinkContainer to='/'>
              <Nav.Link>
                <div className='scalableOut'>Home</div>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href='#about'>
              <div className='scalableOut'>About</div>
            </Nav.Link>
            <Nav.Link href='#resume'>
              <div className='scalableOut'>Resume</div>
            </Nav.Link>
            <NavDropdown title='Projects' id='basic-nav-dropdown'>
              <LinkContainer to='/Projects'>
                <NavDropdown.Item href='/Projects'>
                  <div className='scalableIn'>All</div>
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.2'>
                {' '}
                <div className='scalableIn'>React</div>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                {' '}
                <div className='scalableIn'>JS</div>
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.4'>
                {' '}
                <div className='scalableIn'>Bootstrap</div>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>
                {' '}
                <div className='scalableIn'>Sass</div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
