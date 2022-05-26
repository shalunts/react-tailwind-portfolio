import React from 'react';
import Project from '../components/Project';
import data from './data-projects';

const Projects = () => {
  return (
    <section className='projects-section '>
      {data.map((project, id) => (
        <Project
          key={id}
          subTitle={project.subTitle}
          title={project.title}
          description={project.description}
          btnLivePreview={project.btnLivePreview}
          btnLivePreviewURL={project.btnLivePreviewURL}
          btnCode={project.btnCode}
          btnCodeURL={project.btnCodeURL}
        />
      ))}
    </section>
  );
};

export default Projects;
