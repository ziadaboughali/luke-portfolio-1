import Image from 'next/image';

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

const Resume = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
