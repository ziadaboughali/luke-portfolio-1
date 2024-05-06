import Image from 'next/image';

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Luke Coleman',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+40) 321 654 876',
    },
    {
      fieldName: 'Experience',
      fieldValue: '12+ Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'luke.01',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'American',
    },
    {
      fieldName: 'Email',
      fieldValue: 'luke.01@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  items: [
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021 - Present',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistant',
      duration: '2019 - 2020',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021 - Present',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistant',
      duration: '2019 - 2020',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  items: [
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },
  ],
};

// ???
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
  {
    icon: <SiNextdotjs />,
    name: 'next.js',
  },
  {
    icon: <SiTailwindcss />,
    name: 'tailwind.css',
  },
  {
    icon: <FaNodeJs />,
    name: 'react.js',
  },
  {
    icon: <FaPhp />,
    name: 'html 5',
  },
  {
    icon: <FaWordpress />,
    name: 'css 3',
  },
  {
    icon: <SiStrapi />,
    name: 'tailwind.css',
  },

  {
    icon: <FaSketch />,
    name: 'next.js',
  },
  {
    icon: <FaFigma />,
    name: 'javascript',
  },
];

// maybe use the icons below but first try with figma svgs from the design
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

import { SiTailwindcss, SiStrapi, SiNextdotjs } from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resume = () => {
  return (
    <section className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-4'>Why hire me?</h2>
        <p className='mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Tabs
          defaultValue='about'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col md:w-[40%] xl:w-[30%] md:mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about'>About me</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          <TabsContent value='about' className='w-full'>
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px]'>{about.description}</p>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[620px]'>
                {about.info.map((item, index) => {
                  return (
                    <li className='flex items-center gap-4' key={index}>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value='experience' className='bg-pink-50/10 w-full'>
            experience
          </TabsContent>
          <TabsContent value='education' className='bg-pink-50/10 w-full'>
            education
          </TabsContent>
          <TabsContent value='skills' className='bg-pink-50/10 w-full'>
            skills
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;

{
  /* <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
  <div>
    <div className='flex items-center gap-8 mb-10 h-[80px]'>
      <Image src={experience.icon} width={40} height={40} alt='' />
      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
        {experience.title}
      </h2>
    </div>
    <div className='flex flex-col gap-6'>
      {experience.items.map((item, index) => {
        return (
          <div
            key={index}
            className='border border-white/5 px-8 py-6 rounded-xl min-h-[160px] flex flex-col gap-2 hover:border-accent transition-all duration-300'
          >
            <p className='text-accent text-lg'>{item.duration}</p>
            <h4 className='text-xl uppercase font-bold tracking-[1.2px]'>
              {item.position}
            </h4>
            <p className='text-white/60 text-lg leading-normal'>
              {item.company}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  <div>
    <div className='flex items-center gap-8 mb-10 h-[80px]'>
      <Image src={education.icon} width={40} height={40} alt='' />
      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
        {education.title}
      </h2>
    </div>
    <div className='flex flex-col gap-6'>
      {education.items.map((item, index) => {
        return (
          <div
            key={index}
            className='border border-white/5 px-8 py-6 rounded-xl min-h-[160px] flex flex-col gap-2 hover:border-accent transition-all duration-300'
          >
            <p className='text-accent text-lg'>{item.duration}</p>
            <h4 className='text-xl uppercase font-bold tracking-[1.2px]'>
              {item.degree}
            </h4>
            <p className='text-white/60 text-lg leading-normal'>
              {item.institution}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>; */
}
