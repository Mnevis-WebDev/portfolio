import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Row, Col } from 'react-bootstrap'

const Projects = () => {
  return (
    <div className='projects'>
      Here are the list of my projects
      <Row>
        <ProjectCard
          className='cardProject'
          title={'First big shop'}
        ></ProjectCard>
        <ProjectCard
          className='cardProject'
          title={'First big shop'}
        ></ProjectCard>
      </Row>
    </div>
  )
}

export default Projects
