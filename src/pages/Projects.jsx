import React from 'react';
import Project from '../components/Project';
import data from './data-projects';
import files from '../constants/files';
import { ArrowCircleDownIcon } from '@heroicons/react/solid';

const Projects = () => {
  return (
    <section className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='section-header'>
        <h2 className='text-3xl mb-2 mt-4 font-semibold leading-normal'>
          Welcome!
        </h2>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600'>
          I'm a front-end web developer/web designer with about 7
          years of experience in a wide range of disciplines and
          bachelor's in engineering. Currently shaping the React JS
          experience.{' '}
          <span className='font-medium'>
            Here are some projects I've worked on:
          </span>
        </p>

        <div className=''>
          <a
            href={files.resume}
            className='btn flex items-center gap-1'
            download
          >
            <ArrowCircleDownIcon
              className=''
              width={20}
              color={'lightblue'}
            />
            <span>Download My Resume</span>
          </a>
        </div>
      </div>
      {data.map((project, index) => (
        <Project
          key={index}
          id={project.id}
          subTitle={project.subTitle}
          title={project.title}
          description={project.description}
          btnLivePreview={project.btnLivePreview}
          btnLivePreviewURL={project.btnLivePreviewURL}
          btnCode={project.btnCode}
          btnCodeURL={project.btnCodeURL}
          screenShot={project.screenShot}
        />
      ))}
    </section>
  );
};

export default Projects;
