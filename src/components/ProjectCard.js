import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'

const ProjectCard = (props) => {
  return (
    <Container>
      <Card style={{ width: '18rem' }} className='card text-white bg-dark mb-3'>
        <Container>
          <Card.Img
            className={'my-3'}
            variant='top'
            src={props.src}
            alt={props.alt}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Container className='btn-toolbar '>
              <Button variant='outline-primary'>
                <a href={props.linkCode}>View</a>
              </Button>
              <Button variant='outline-primary'>
                <a href={props.link}>GitHub</a>
              </Button>
            </Container>
          </Card.Body>
        </Container>
      </Card>
    </Container>
  )
}

export default ProjectCard
