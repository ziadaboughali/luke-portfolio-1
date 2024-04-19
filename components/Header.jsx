import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='text-white py-12'>
      <div className='container mx-auto flex justify-between'>
        <Link href='/'>logo</Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
