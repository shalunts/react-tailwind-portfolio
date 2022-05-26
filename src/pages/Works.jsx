import React from 'react';
import TextFeature from '../components/TextFeature';

import FeatureThumb from '../assets/core-feature.png';
import shapePattern from '../assets/shape-pattern2.png';

const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnLivePreview: 'Live Preview',
  btnLivePreviewURL: '#',
  btnCode: 'Code',
  btnCodeURL: '#',
};

const Works = () => {
  return (
    <section className='projects-section'>
      <div className='project max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <div className='contentBox'>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnLivePreview={data.btnLivePreview}
            btnLivePreviewURL={data.btnLivePreviewURL}
            btnCode={data.btnCode}
            btnCodeURL={data.btnCodeURL}
          />
        </div>
        <div className='thumbnail'>
          <img className=' z-10' src={FeatureThumb} alt='Thumbnail' />
          <div className='shapeBox absolute top-0'>
            <img src={shapePattern} alt='Shape' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
