import React from 'react';
//import Woman Image
import Img from '../img/home/robot.jpeg';
//import Link
import {Link} from 'react-router-dom';
const About = () => {
  return <section className='min-h-[85vh] lg:mimin-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      {/* text and image wrapper */}
      <div className='mt-32 flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-left lg:text-left'>
        {/* text */}
        <div>
          <h1 className='text-[25px] lg:text-[45px] font-bold leading-[0.8] text-primary mb-16'>About us</h1>
          <div>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0'>At Weero Digital, we are passionate about transforming ideas into visually stunning and impactful digital experiences.</p>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0'>With a focus on creativity, innovation, and flawless execution, we help our clients achieve their digital goals in the most effective way possible. Our team of talented designers, developers, and strategists work closely with each client to understand their unique vision and objectives.</p>
          <div className="flex items-center justify-center lg:items-start lg:justify-start">
          <button
          className='btn btn-lg mb-12'><Link to='/portfolio'>Check My Portfolio</Link></button>
          </div>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default About;
