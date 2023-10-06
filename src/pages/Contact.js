import React from 'react';
import Socials from '../components/Socials';

const Contact = () => {
  return <section className='min-h-[85vh] lg:mimin-h-[78vh] flex items-center'>
    <div className="container mx-auto">
    <div className="mt-48 mb-8 grid lg:grid-cols-2">
    {/* text */}
    <div className='flex-auto text-left font-secondary md:text-left lg:text-left'>
    <h2
    className='text-[25px] lg:text-[45px] font-bold leading-[0.8] mb-16 text-primary'>
    Contact Us
    </h2>
    <h4 className='text-xl uppercase font-medium mb-2 tracking-wide text-secondary'>Get in touch</h4>
    <p className='mb-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dignissimos corrupti laudantium facilis atque, quibusdam natus eaque doloremque consectetur laborum cum dolorem delectus, culpa voluptatum eligendi, laboriosam maiores quos debitis.</p>
    </div>
    {/* form */}
    <form
        className='' action="">
            <input className='bg-zinc-300 py-3 px-4 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='Your Name'/>
            <input className='bg-zinc-300 py-3 px-4 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="" id="" placeholder='Your Email'/>
            <textarea className='bg-zinc-300 py-12 px-4 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
    </form>
    </div>
    </div>
  </section>;
};

export default Contact;
