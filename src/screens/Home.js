import React from 'react'
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Card,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <Container className='welcomeScreen my-5'>
      <Card id='welcomeCard'>
        <Card.Body>
          <Card.Title>
            Hi, you can call me <span id='name'> Mnevis</span>
          </Card.Title>
          <Card.Text>I'm a Front-end web developper</Card.Text>
          <Container className='text-center'>
            <Button variant='outline-primary'>
              <LinkContainer to='/Projects'>
                <a href='/Projects'>See what I can do</a>
              </LinkContainer>
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Home
