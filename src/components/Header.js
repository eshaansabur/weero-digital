import React from 'react';
//import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

//import Link
import {Link} from 'react-router-dom';

const Header = () => {
  return <header className='fixed bg-teal-900 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/* logo */}
      <Link className="max-w-[200px]" to='/'><img src={Logo} alt="" /></Link>
      {/* nav initially hidden show on desktop mode */}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link className='text-secondary hover:text-[#ccfbf1] transition' to='/'>Home</Link>
          <Link className='text-secondary hover:text-[#ccfbf1] transition' to='/about'>About</Link>
          <Link className='text-secondary hover:text-[#ccfbf1] transition' to='/portfolio'>Portfolio</Link>
          <Link className='text-secondary hover:text-[#ccfbf1] transition' to='/contact'>Contact</Link>
      </nav>
    </div>
    {/* socials */}
    <Socials></Socials>
    {/* mobile nav */}
    <MobileNav></MobileNav>
  </header>;
};

export default Header;
