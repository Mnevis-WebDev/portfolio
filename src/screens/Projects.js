import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Row, Col, Container } from 'react-bootstrap'

const Projects = (props) => {
  return (
    <Container>
      {props.english ? (
        <>
          <Container className='my-3 p-3 text-center'>
            <h1>Voici la liste de mes projets pour l'instant</h1>
          </Container>
          <Container>
            <Row>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProjectCard
                  title={'Le magasin Fortnite'}
                  src={'/img/project1.png'}
                  alt={'image projet 1'}
                  description={
                    "Projet React qui récupère les données via l'API de fortnite."
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
                  alt={'image projet 2'}
                  description={
                    'Quiz pour apprendre le genre des noms en Français'
                  }
                  linkCode={
                    'https://mnevis-webdev.github.io/LaBatailleDesGenres/'
                  }
                  link={' https://github.com/Mnevis-WebDev/LaBatailleDesGenres'}
                  iconsClass={['fab fa-js', 'fab fa-bootstrap']}
                />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProjectCard
                  title={'Laboratoire de langues'}
                  src={'/img/project3.png'}
                  alt={'image projet 3'}
                  description={
                    "Projet commercial sur React. Laboratoire de langues qui améliore les capacités de l'apprenant."
                  }
                  linkCode={''}
                  link={''}
                  disabled='true'
                  iconsClass={[
                    'fab fa-react',
                    'fab fa-bootstrap',
                    'fab fa-node',
                  ]}
                />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProjectCard
                  title={'Portfolio'}
                  src={'/img/project4.png'}
                  alt={'image projet 4'}
                  description={'Portfolio simple sur React'}
                  linkCode={'mnevis.website'}
                  link={'https://github.com/Mnevis-WebDev/portfolio'}
                  iconsClass={['fab fa-react', 'fab fa-bootstrap']}
                />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
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
                  linkCode={
                    'https://mnevis-webdev.github.io/LaBatailleDesGenres/'
                  }
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
                  iconsClass={[
                    'fab fa-react',
                    'fab fa-bootstrap',
                    'fab fa-node',
                  ]}
                />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProjectCard
                  title={'Portfolio'}
                  src={'/img/project4.png'}
                  alt={'image project 4'}
                  description={'Simple portfolio on react'}
                  linkCode={'mnevis.website'}
                  link={'https://github.com/Mnevis-WebDev/portfolio'}
                  iconsClass={['fab fa-react', 'fab fa-bootstrap']}
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}

export default Projects
