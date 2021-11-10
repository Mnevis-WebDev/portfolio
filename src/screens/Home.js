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
              <Card.Title className='text-focus-in'>
                Bonjour, vous pouvez m'appeler <span id='name'>Karim</span>
              </Card.Title>
              <Card.Text className='text-focus-in-second'>
                Je suis un développeur web frontal
              </Card.Text>
              <Container className='text-center text-focus-in-second'>
                <Button className='heartbeat' variant='outline-primary'>
                  <LinkContainer to='/Projects'>
                    <a href='/Projects'>Voici ce que je peux faire</a>
                  </LinkContainer>
                </Button>
              </Container>
            </>
          ) : (
            <>
              <Card.Title className='text-focus-in'>
                Hi, you can call me <span id='name'> Karim</span>
              </Card.Title>
              <Card.Text className='text-focus-in-second'>
                I'm a Frontend web developper
              </Card.Text>
              <Container className='text-center text-focus-in-second'>
                <Button className='heartbeat' variant='outline-primary'>
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
