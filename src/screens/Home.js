import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Home = (props) => {
  return (
    <Container className='welcomeScreen my-5'>
      <Card id='welcomeCard'>
        <Card.Body>
          {props.english ? (
            <>
              <Card.Title>
                Bonjour, vous pouvez m'appeler <span id='name'> Mnevis</span>
              </Card.Title>
              <Card.Text>Je suis un développeur web frontal</Card.Text>
              <Container className='text-center'>
                <Button variant='outline-primary'>
                  <LinkContainer to='/Projects'>
                    <a href='/Projects'>Voici ce que je peux faire</a>
                  </LinkContainer>
                </Button>
              </Container>
            </>
          ) : (
            <>
              <Card.Title>
                Hi, you can call me <span id='name'> Mnevis</span>
              </Card.Title>
              <Card.Text>I'm a Frontend web developper</Card.Text>
              <Container className='text-center'>
                <Button variant='outline-primary'>
                  <LinkContainer to='/Projects'>
                    <a href='/Projects'>See what I can do</a>
                  </LinkContainer>
                </Button>
              </Container>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Home
