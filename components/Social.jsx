import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaYoutube />, path: '' },
  { icon: <FaTwitter />, path: '' },
];

const Social = () => {
  return (
    <div className='flex gap-6'>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
