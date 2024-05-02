import Image from 'next/image';
import React from 'react';

const skills = [
  {
    icon: '/assets/skills/html.svg',
    name: 'html 5',
  },
  {
    icon: '/assets/skills/css.svg',
    name: 'css 3',
  },
  {
    icon: '/assets/skills/js.svg',
    name: 'javascript',
  },
  {
    icon: '/assets/skills/react.svg',
    name: 'react.js',
  },
  {
    icon: '/assets/skills/next.svg',
    name: 'next.js',
  },
  {
    icon: '/assets/skills/tailwind.svg',
    name: 'tailwind.css',
  },
  {
    icon: '/assets/skills/html.svg',
    name: 'html 5',
  },
  {
    icon: '/assets/skills/css.svg',
    name: 'css 3',
  },
  {
    icon: '/assets/skills/js.svg',
    name: 'javascript',
  },
  {
    icon: '/assets/skills/react.svg',
    name: 'react.js',
  },
  {
    icon: '/assets/skills/next.svg',
    name: 'next.js',
  },
  {
    icon: '/assets/skills/tailwind.svg',
    name: 'tailwind.css',
  },
];

const Skills = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h2 className='text-[42px] font-bold capitalize text-center mb-8'>
          My skills
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-[30px]'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='text-center'>
                <div className='bg-[#232329] h-[180px] rounded-xl flex items-center justify-center mb-4'>
                  <Image src={skill.icon} width={60} height={60} alt='' />
                </div>
                <h4 className='capitalize text-accent'>{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
