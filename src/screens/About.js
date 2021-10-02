import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const About = () => {
  return (
    <Container className='about my-5'>
      <Card id='aboutCard'>
        <Card.Body>
          <Card.Title>
            How I became a <span id='name'> Frontend web developper</span> ?
          </Card.Title>
          <Card.Text>
            To make a long story short I became a web developper after following
            a program at College Rosemont in Montreal during the COVID pandemic.
            Before that I was always interested in programming and art thus
            front-end web developper was the perfect mix.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About
