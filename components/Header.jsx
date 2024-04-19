import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='text-white py-12'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Luke<span className='text-accent'>.</span>
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
