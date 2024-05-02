'use client';
import Image from 'next/image';
import React from 'react';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaSketch,
} from 'react-icons/fa';

import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss, SiStrapi } from 'react-icons/si';

const skills = [
  {
    icon: <FaHtml5 />,
    name: 'html 5',
  },
  {
    icon: <FaCss3 />,
    name: 'css 3',
  },
  {
    icon: <FaJs />,
    name: 'javascript',
  },
  {
    icon: <FaReact />,
    name: 'react.js',
  },
  // {
  //   icon: <RiNextjsFill />,
  //   name: 'next.js',
  // },
  // {
  //   icon: <SiTailwindcss />,
  //   name: 'tailwind.css',
  // },
  {
    icon: <FaPhp />,
    name: 'html 5',
  },
  {
    icon: <FaWordpress />,
    name: 'css 3',
  },
  {
    icon: <FaFigma />,
    name: 'javascript',
  },
  {
    icon: <FaNodeJs />,
    name: 'react.js',
  },
  {
    icon: <FaSketch />,
    name: 'next.js',
  },
  {
    icon: <SiStrapi />,
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
              <div key={index} className='text-center group'>
                <div className='bg-[#232329] h-[180px] rounded-xl flex items-center justify-center mb-4'>
                  <div className='text-white/30 text-5xl group-hover:text-accent transition-all'>
                    {skill.icon}
                  </div>
                </div>
                <h4 className='capitalize group-hover:text-accent transition-all'>
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
