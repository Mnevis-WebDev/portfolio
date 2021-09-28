import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
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

            <LinkContainer to='/About'>
              <Nav.Link>
                <div className='scalableOut'>About </div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Resume'>
              <Nav.Link>
                <div className='scalableOut'>Resume</div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Projects'>
              <Nav.Link>
                <div className='scalableOut'>Projects</div>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
