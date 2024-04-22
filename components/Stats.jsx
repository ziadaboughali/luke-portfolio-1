'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 3,
    text: 'Years of experience',
  },
  {
    num: 14,
    text: 'Projects completed',
  },
  {
    num: 8,
    text: 'Technologies mastered',
  },
  {
    num: 500,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-8'>
          {stats.map((item, index) => {
            return (
              <div className='flex-1 flex gap-4 items-center' key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className='text-6xl font-extrabold'
                />
                {/* <div className='text-6xl font-extrabold'>{item.statsNum}</div> */}
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
