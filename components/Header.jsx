import Link from 'next/link';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='text-white py-8 xl:py-12'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Luke<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className='xl:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
