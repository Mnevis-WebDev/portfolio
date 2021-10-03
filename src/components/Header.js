import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Header = (props) => {
  return (
    <Navbar bg='light' expand='sm' className='text-center'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <div className='scalableOut'>Mnevis's Portfolio</div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <LinkContainer to='/' exact>
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
        <BootstrapSwitchButton
          checked={false}
          onlabel='FR'
          offlabel='EN'
          onChange={(checked: boolean) => {
            props.returnLanguage(checked)
          }}
        />
      </Container>
    </Navbar>
  )
}

export default Header
