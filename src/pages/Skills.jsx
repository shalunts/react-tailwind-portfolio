import React from 'react';

const Skills = () => {
  const skills = [
    {
      skill: 'React (React Router, Hooks, Context.api)',
      percentage: '80%',
    },
    {
      skill: 'GarphQL, Apollo Client',
      percentage: '60%',
    },
    {
      skill: 'Javascript ES6',
      percentage: '85%',
    },
    {
      skill: 'HTML5',
      percentage: '95%',
    },
    {
      skill: 'CSS3 / SCSS',
      percentage: '95%',
    },
    {
      skill: 'Tailwind CSS, DaisyUI',
      percentage: '90%',
    },
    {
      skill: 'Bootstrap 5',
      percentage: '95%',
    },
    {
      skill: 'Webflow',
      percentage: '95%',
    },
    {
      skill: 'Shopify',
      percentage: '95%',
    },
    {
      skill: 'Foundation',
      percentage: '90%',
    },
    {
      skill: 'Adobe Suite',
      percentage: '95%',
    },
  ];
  return (
    <section>
      <div className='card card-body'>
        <h3 className='text-3xl mb-2 mt-4 font-semibold leading-normal'>
          My skills
        </h3>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600'>
          I love to learn new things everyday and strongly believe
          that a company's success depends on its team.
        </p>
        <hr />
        {skills.map((item, index) => (
          <div key={index}>
            <h4 className='text-2xl mb-2 mt-4 font-semibold leading-normal'>
              {item.skill}
            </h4>
            <div className='progress'>
              <div
                className='progress-bar'
                style={{ width: item.percentage }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
