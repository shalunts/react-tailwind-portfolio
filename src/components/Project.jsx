import React from 'react';

import { QrcodeIcon } from '@heroicons/react/solid';
function Project({
  id,
  subTitle = [],
  title,
  description,
  btnLivePreview,
  btnLivePreviewURL = '#',
  btnCode,
  btnCodeURL = '#',
  screenShot,
}) {
  return (
    <div className='project max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between gap-10'>
      {/* Text area  */}
      <div
        className={`mb-7 md-mb-0 md:px-5 ${
          id % 2 === 0 ? 'order-last' : 'order-first'
        }`}
      >
        <div className='flex flex-row '>
          {subTitle.map((item, i) => (
            <p className='bg-gray-700 text-white px-3 py-1 rounded-xl text-sm font-medium items-center mr-2'>
              #{item}
            </p>
          ))}
        </div>

        <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block text-indigo-600'>{title}</span>
        </h3>

        {description && (
          <p className='mt-4 max-w-2xl text-xl text-gray-500 mb-6'>
            {description}
          </p>
        )}

        {btnLivePreview && (
          <div className='inline-flex rounded-md shadow'>
            <a
              href={btnLivePreviewURL}
              aria-label={btnLivePreview}
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              target='_blank'
              rel='noreferrer'
            >
              {btnLivePreview}
            </a>
          </div>
        )}
        {btnCode && (
          <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href={btnCodeURL}
              aria-label={btnCode}
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
              target='_blank'
              rel='noreferrer'
            >
              <div className='w-4 text-base mr-4'>
                <QrcodeIcon />
              </div>
              {btnCode}
            </a>
          </div>
        )}
      </div>
      {/* Image area  */}
      <div className='thumbnail relative'>
        <img src='./assets/' alt='' />
        <img
          className='z-10 drop-shadow-2xl rounded-lg'
          src={screenShot}
          alt='Screenshot'
        />
      </div>
    </div>
  );
}

export default Project;
