import React from 'react';
//import Woman Image
import Robot from '../img/home/robot.jpeg';
//import Link
import {Link} from 'react-router-dom';
const Home = () => {
  return <section className='min-h-[85vh] lg:mimin-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      <div className='mt-32 flex flex-col gap-y-8 lg:flex-row lg:items-center md:items-center lg:gap-x-12'>
        {/* Text */}
        <div className='flex-auto text-left font-secondary md:text-left lg:text-left'>
          <h1
          className='text-[25px] lg:text-[45px] font-bold leading-[0.8] mb-16 text-primary'>Weero Digital</h1>
          <div>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0'>Weero Digital is a leading digital creative agency. With a team of highly skilled professionals.</p>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veritatis eaque in, ut nam ea modi dolor labore eligendi, quas animi ullam aliquid, sit consectetur nemo quis necessitatibus velit. Voluptas voluptatem eveniet harum consectetur modi ipsam aspernatur quo ex, alias suscipit tempora itaque quibusdam laudantium eum eaque, consequatur obcaecati perferendis.</p>
          <Link to='/about'><button
          className='btn btn-lg mb-12'>About Us</button></Link>
          </div>
        </div>
        {/* Image */}
        <div className=''>
          <img className='flex md:flex lg:flex w-96' src={Robot} alt="" /></div>
      </div>
    </div>
  </section>;
};

export default Home;
