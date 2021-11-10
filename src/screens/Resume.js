import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Resume = (props) => {
  return (
    <Container className='about my-5' style={{}}>
      <Card>
        <Card.Body>
          {props.english ? (
            <>
              <Container className='text-center text-focus-in'>
                <Card.Title>Télécharger mon resume</Card.Title>
                <Card.Text>
                  <Button variant='outline-primary'>
                    <a href='./KarimVallee_CV_FR.pdf' download>
                      En Français
                    </a>{' '}
                  </Button>
                </Card.Text>
              </Container>
            </>
          ) : (
            <>
              <Container className='text-center text-focus-in'>
                <Card.Title>Download my resume</Card.Title>
                <Card.Text>
                  <Button variant='outline-primary'>
                    <a href='./KarimVallee_CV_EN.pdf' download>
                      in English
                    </a>{' '}
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
