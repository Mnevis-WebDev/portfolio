import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Resume = () => {
  return (
    <Container
      className='about my-5'
      style={{
        width: '60rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card>
        <Card.Body>
          <Card.Title>Download my resume</Card.Title>
          <Card.Text>
            <Container>
              <Button variant='outline-primary'>
                <a href='CV_Karim_Sorour_EN.PDF'>in English</a>{' '}
              </Button>
              <Button variant='outline-primary'>
                <a href='CV_Karim_Sorour_FR.PDF'>in French</a>{' '}
              </Button>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Resume
