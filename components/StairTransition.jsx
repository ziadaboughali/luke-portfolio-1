'use client';

import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Stairs from './Stairs';

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      {/* <Header /> */}
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
            <Stairs />
          </div>

          <motion.div
            className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;

{
  /* <motion.div
className='h-screen w-screen fixed bg-black z-40'
animate={{ height: '0vh' }}
exit={{ height: '140vh' }}
transition={{ duration: 0.6, ease: 'easeOut' }}
/>
<motion.div
className='h-screen w-screen fixed bg-black bottom-0 z-30'
initial={{ height: '140vh' }}
animate={{
  height: '0vh',
  transition: { delay: 0.6, duration: 1, ease: 'easeInOut' },
}}
/> */
}
