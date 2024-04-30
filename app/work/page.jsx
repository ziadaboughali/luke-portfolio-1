'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import { motion } from 'framer-motion';

import { TbBrandNodejs } from 'react-icons/tb';

import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';

const projects = [
  {
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <IoLogoHtml5 />,
        name: 'Html 5',
      },
      {
        icon: <IoLogoCss3 />,
        name: 'Css 3',
      },
      {
        icon: <IoLogoJavascript />,
        name: 'Javascript',
      },
    ],
    image: '/assets/work/thumb1.png',
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    category: 'fullstack',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind.js',
      },
      {
        icon: <TbBrandNodejs />,
        name: 'Node.js',
      },
    ],
    image: '/assets/work/thumb1.png',
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.',
    stack: [
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind.css',
      },
    ],
    image: '/assets/work/thumb1.png',
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
            <div className='bg-accent h-[50%] px-6 py-8 text-primary flex flex-col justify-center items-center'>
              <div className='flex flex-col gap-4'>
                <div className='bg-primary text-white px-4 py-1 max-w-max flex justify-center items-center '>
                  <p className='text-[15px] uppercase font-semibold tracking-[4px] text-center'>
                    {project.category} Project
                  </p>
                </div>
                <div>
                  <h3 className='h3 capitalize font-extrabold mb-2'>
                    {project.title}
                  </h3>
                  <p className='leading-snug'>{project.description}</p>
                </div>
                <div className='flex items-center gap-4'>
                  {project.stack.map((item, index) => {
                    return (
                      <div className='flex text-4xl text-primary' key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>{item.icon}</TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
                  <div className='h-[460px] bg-white/5 relative'>
                    <div>{project.title}</div>
                    <Image
                      src={project.image}
                      width={300}
                      height={300}
                      alt=''
                    />
                  </div>
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
