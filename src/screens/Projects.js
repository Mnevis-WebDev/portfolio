import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Row, Col, Container } from 'react-bootstrap'

const Projects = () => {
  return (
    <Container>
      <Container className='my-3 p-3 text-center'>
        <h1>Here are the list of my projects</h1>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProjectCard
              title={'Fortnite Shop'}
              src={'/img/project1.png'}
              alt={'image project 1'}
              description={
                'React project that fetch data item from the fortnite API.'
              }
              linkCode={
                ' https://mnevis-webdev.github.io/react-fortnite-store/'
              }
              link={'https://github.com/Mnevis-WebDev/react-fortnite-store'}
              iconsClass={['fab fa-react']}
            />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProjectCard
              title={'La bataille des genres'}
              src={'/img/project2.png'}
              alt={'image project 2'}
              description={
                'Quiz like to learn the gender of the noun in French'
              }
              linkCode={'https://mnevis-webdev.github.io/LaBatailleDesGenres/'}
              link={' https://github.com/Mnevis-WebDev/LaBatailleDesGenres'}
              iconsClass={['fab fa-js', 'fab fa-bootstrap']}
            />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProjectCard
              title={'Language Lab'}
              src={'/img/project3.png'}
              alt={'image project 3'}
              description={
                'Commercial project on React. Language laboratory that enhance the capabilities of the learner.'
              }
              linkCode={''}
              link={''}
              disabled='true'
              iconsClass={['fab fa-react', 'fab fa-bootstrap', 'fab fa-node']}
            />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProjectCard
              title={'Portfolio'}
              src={'/img/project4.png'}
              alt={'portfolio'}
              description={'Simple portfolio on react'}
              linkCode={'mnevis.website'}
              link={'https://github.com/Mnevis-WebDev/portfolio'}
              iconsClass={['fab fa-react', 'fab fa-bootstrap']}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
