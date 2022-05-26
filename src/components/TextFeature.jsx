import React from 'react';

export default function TextFeature({
  subTitle,
  title,
  description,
  btnLivePreview,
  btnLivePreviewURL = '#',
  btnCode,
  btnCodeURL = '#',
}) {
  return (
    <div className='mb-7 md-mb-0'>
      <p className='text-base text-gray-600 font-semibold tracking-wide uppercase'>
        {subTitle}
      </p>

      <h3 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
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
          >
            {btnCode}
          </a>
        </div>
      )}
    </div>
  );
}
