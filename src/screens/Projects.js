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
            alt={'image project 1'}
            description={
              'React project that fetch data item from the fortnite API.'
            }
            linkCode={' https://github.com/Mnevis-WebDev/LaBatailleDesGenres'}
            link={'https://github.com/Mnevis-WebDev/LaBatailleDesGenres'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
