import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className='card'>
      <div className='wrapper'>
        <p className='subtitle'>{subTitle}</p>
        <h2 className='title'>{title}</h2>
      </div>
      {description && <p className='description'>{description}</p>}

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

      <div className='ml-3 inline-flex rounded-md shadow'>
        <a
          href={btnCodeURL}
          aria-label={btnCode}
          className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
        >
          {btnCode}
        </a>
      </div>
    </div>
  );
}
