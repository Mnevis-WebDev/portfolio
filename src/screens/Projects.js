import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Row, Col, Container } from 'react-bootstrap'

const Projects = () => {
  return (
    <Container>
      <Container className='my-3 p-3'>
        <h1>Here are the list of my projects</h1>
      </Container>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProjectCard
            title={'Fortnite Shop'}
            src={'/img/project1.png'}
            alt={'image project 1'}
            description={
              'React project that fetch data item from the fortnite API.'
            }
            linkCode={' https://mnevis-webdev.github.io/react-fortnite-store/'}
            link={'https://github.com/Mnevis-WebDev/react-fortnite-store'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProjectCard
            title={'La bataille des genres'}
            src={'/img/project2.png'}
            alt={'image project 2'}
            description={'Quiz like to learn the gender of the noun in French'}
            linkCode={' https://github.com/Mnevis-WebDev/LaBatailleDesGenres'}
            link={'https://mnevis-webdev.github.io/LaBatailleDesGenres/'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProjectCard
            title={'Language Lab'}
            src={'/img/project3.png'}
            alt={'image project 3'}
            description={
              'Commercial project on React. Language lab that enhance the capabilities of the learner.'
            }
            linkCode={''}
            link={''}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
