'use client';

import { FaLaptopCode, FaCogs } from 'react-icons/fa';
import { RiPencilRuler2Fill } from 'react-icons/ri';
import { BiSolidVector } from 'react-icons/bi';
import { FaRankingStar } from 'react-icons/fa6';
import { IoMegaphone } from 'react-icons/io5';
import Link from 'next/link';
const services = [
  {
    icon: <RiPencilRuler2Fill />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
  {
    icon: <FaCogs />,
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
  {
    icon: <BiSolidVector />,
    title: 'Logo Design',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
  {
    icon: <FaRankingStar />,
    title: 'SEO',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
  {
    icon: <IoMegaphone />,
    title: 'Marketing',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
    linkText: 'Read more',
    linkPath: '',
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='h2 text-center mt-12 mb-12'>
          My Services<span className='text-accent'>.</span>
        </h2>

        {/* grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 border border-white/10 min-h-[400px] flex flex-col justify-center items-center gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all relative'
              >
                <div className=' bg-white/5 backdrop-blur-3xl w-[92px] h-[92px] flex justify-center items-center rounded-full'>
                  <div className='text-5xl text-accent'>{service.icon}</div>
                </div>
                <h3 className='h3'>{service.title}</h3>
                <p className='text-center'>{service.description}</p>
                <Link href={service.linkPath}>{service.linkText}</Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
