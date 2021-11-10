import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useState } from 'react'

const Header = (props) => {
  const [language, setLanguage] = useState(false)
  var element = document.getElementById('title')

  return (
    <Navbar bg='light' expand='sm' className='text-center'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            {language ? (
              <div className='scalableOut shake-horizontal' tabindex='0'>
                Le Portfolio de Karim
              </div>
            ) : (
              <div className='scalableOut shake-horizontal' tabindex='0'>
                Karim's Portfolio
              </div>
            )}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto '>
            <LinkContainer to='/' exact>
              <Nav.Link>
                {language ? (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Page d'accueil
                  </div>
                ) : (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Home
                  </div>
                )}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/About'>
              <Nav.Link>
                {language ? (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    À propos
                  </div>
                ) : (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    About{' '}
                  </div>
                )}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Resume'>
              <Nav.Link>
                {language ? (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Résumé
                  </div>
                ) : (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Resume
                  </div>
                )}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Projects'>
              <Nav.Link>
                {language ? (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Projets
                  </div>
                ) : (
                  <div className='scalableOut shake-horizontal' tabindex='0'>
                    Projects
                  </div>
                )}
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
            setLanguage((prevLanguage) => !prevLanguage)
            language
              ? (element.innerHTML = "Karim's Portfolio")
              : (element.innerHTML = 'Le Portfolio de Karim')
          }}
        />
      </Container>
    </Navbar>
  )
}

export default Header
