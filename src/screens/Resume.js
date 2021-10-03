import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Resume = (props) => {
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
          {props.english ? (
            <>
              <Container className='text-center'>
                <Card.Title>Télécharger mon resume</Card.Title>
                <Card.Text>
                  <Button variant='outline-primary'>
                    <a href='CV_Karim_Sorour_FR.PDF'>En Français</a>{' '}
                  </Button>
                </Card.Text>
              </Container>
            </>
          ) : (
            <>
              <Container className='text-center'>
                <Card.Title>Download my resume</Card.Title>
                <Card.Text>
                  <Button variant='outline-primary'>
                    <a href='CV_Karim_Sorour_EN.PDF'>in English</a>{' '}
                  </Button>
                </Card.Text>
              </Container>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Resume
