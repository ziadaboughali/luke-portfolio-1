"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedCircle = () => {
  return (
    <div className="w-full h-full relative">
      {/* <AnimatePresence mode='wait'> */}
      {/* <div key={pathname}> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute mix-blend-lighten w-[298px] xl:w-[498px] h-[298px] xl:h-[498px]"
        >
          <Image
            src="/photo.png"
            priority
            quality={100}
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          // width='506'
          // height='506'
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360], // add rotation for extra cool effect
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }} // increased duration for slower motion
          />
        </motion.svg>
      </motion.div>
      {/* </div> */}
      {/* </AnimatePresence> */}
    </div>
  );
};

export default AnimatedCircle;

{
  /* <motion.svg
        width='506'
        height='506'
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253'
          cy='253'
          r='250'
          stroke='#00FF99'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '0 250 0 0' }}
          animate={{
            strokeDasharray: ['0 250 0 0', '16 25 92 72', '0 250 0 0'],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.svg> */
}
