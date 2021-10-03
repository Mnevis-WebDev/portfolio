import React from 'react'
import { Container, Card } from 'react-bootstrap'

const About = (props) => {
  return (
    <Container className='about my-5'>
      <Card id='aboutCard'>
        <Card.Body>
          {props.english ? (
            <>
              <Card.Title>
                Comment je suis devenu un{' '}
                <span id='name'> développeur web frontal</span> ?
              </Card.Title>
              <Card.Text>
                Pour faire une histoire courte je suis devenu développeur après
                avoir suivie une formation au collège Rosemont à Montréal durant
                la pandémie de COVID. Avant j'étais toujours intéressé par les
                art et la programmation, donc le métier de développeur web
                frontal était le mix parfait.
              </Card.Text>
            </>
          ) : (
            <>
              <Card.Title>
                How I became a <span id='name'> Frontend web developper</span> ?
              </Card.Title>
              <Card.Text>
                To make a long story short I became a web developper after
                following a program at College Rosemont in Montreal during the
                COVID pandemic. Before that I was always interested in
                programming and art thus front-end web developper was the
                perfect mix.
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About
