'use client';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';

import WorkSliderBtns from '@/components/WorkSliderBtns';

// import motion
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'project 1',
    category: '',
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    title: 'project 2',
    category: '',
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
  {
    title: 'project 3',
    category: '',
    links: [
      {
        icon: 'github',
        path: 'http://www.github.com',
      },
    ],
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='relative'
    >
      <div className='container mx-auto'>
        <div className='flex gap-8'>
          <div className='w-[35%] h-[400px] flex flex-col justify-between'>
            <h3 className='uppercase text-6xl font-bold'>My latest projects</h3>
            <div className='bg-accent h-[50%] p-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='w-[65%]'>
            <Swiper spaceBetween={30} slidesPerView={2} className='h-[500px]'>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className='w-full' key={index}>
                    <div className='h-[400px] bg-white/10'>{project.title}</div>
                  </SwiperSlide>
                );
              })}
              {/* check with shad cn carousel */}
              <WorkSliderBtns
                containerStyles='flex gap-1 absolute left-0 bottom-0 z-20'
                btnStyles='bg-accent text-primary w-[40px] h-[40px] flex justify-center items-center'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
