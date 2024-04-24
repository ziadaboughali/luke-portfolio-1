import { FaLaptopCode, FaCogs } from 'react-icons/fa';
import { RiPencilRuler2Fill } from 'react-icons/ri';
import { BiSolidVector } from 'react-icons/bi';
import { FaRankingStar } from 'react-icons/fa6';
import { IoMegaphone } from 'react-icons/io5';
const services = [
  {
    icon: <RiPencilRuler2Fill />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
  {
    icon: <FaCogs />,
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
  {
    icon: <BiSolidVector />,
    title: 'Logo Design',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
  {
    icon: <FaRankingStar />,
    title: 'SEO',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
  {
    icon: <IoMegaphone />,
    title: 'Marketing',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsa dolores.',
  },
];

const Services = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='my-12'>
          <h2 className='h2 text-center'>
            My Services<span className='text-accent'>.</span>
          </h2>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            libero animi doloremque vero eum officia! Iure eveniet inventore
            obcaecati commodi sequi.
          </p> */}
        </div>
        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 border border-white/10 min-h-[400px] flex flex-col justify-center items-center gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all'
              >
                <div className='text-6xl text-accent'>{service.icon}</div>
                <h3 className='h3'>{service.title}</h3>
                <p className='text-center'>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
