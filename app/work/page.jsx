'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import { motion } from 'framer-motion';

import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoTailwindCss } from 'react-icons/bi';
const projects = [
  {
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <TbBrandNextjs />,
      },
      {
        icon: <BiLogoTailwindCss />,
      },
    ],
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    category: 'backend',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <TbBrandNextjs />,
      },
      {
        icon: <TbBrandNextjs />,
      },
    ],
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    category: 'fullstack',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <TbBrandNextjs />,
      },
      {
        icon: <TbBrandNextjs />,
      },
    ],
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <h3 className='h3 uppercase mb-4 xl:hidden'>My latest projects</h3>
        <div className='flex flex-col xl:flex-row xl:gap-8'>
          <div className='w-full xl:w-[35%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <h3 className='hidden xl:flex uppercase text-6xl leading-tight font-extrabold'>
              My latest projects
            </h3>
            <div className='bg-accent h-[50%] px-8 text-primary flex flex-col justify-center gap-4'>
              <h3 className='h3 capitalize'>{project.category}</h3>
              <h3 className='h3 capitalize'>{project.title}</h3>
              <p className='leading-none'>{project.description}</p>
              <div className='flex items-center gap-3'>
                <div>Stack:</div>
                <div className='flex gap-2'>
                  {project.stack.map((item, index) => {
                    return (
                      <div className='text-4xl' key={index}>
                        {item.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[65%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px]'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide className='w-full' key={index}>
                  <div className='h-[460px] bg-white/5'>{project.title}</div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[50%] xl:-bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent text-primary text-xl w-[40px] h-[40px] flex justify-center items-center'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
