import React from 'react';
import { Link } from 'react-router-dom';
import One from '../img/portfolio/robo1.jpg';
import Two from '../img/portfolio/robo2.jpg';
const Portfolio = () => {
  const works= [
    {
      id: 1,
      img: One,
      pretitle: "XYZ Project",
      title: "Wordpress Customization",
      link: "https://www.instagram.com/"
    },
    {
      id: 2,
      img: Two,
      pretitle: "XYZ Studios",
      title: "MERN Customization",
      link: "https://www.instagram.com/"
    },
    {
      id: 3,
      img: One,
      pretitle: "XYZ Animation",
      title: "Shopify Customization",
      link: "https://www.instagram.com/"
    },
    {
      id: 4,
      img: Two,
      pretitle: "Chris Photography",
      title: "Webflow Customization",
      link: "https://www.instagram.com/"
    },
    {
      id: 5,
      img: One,
      pretitle: "Navana USA",
      title: "Frontend Development",
      link: "https://www.facebook.com/"
    },
    {
      id: 6,
      img: Two,
      pretitle: "Warehouse Website",
      title: "Fullstack Development",
      link: "https://www.instagram.com/",
    },
    {
      id: 7,
      img: One,
      pretitle: "Demo Photography with React",
      title: "Frontend with React",
      link: "https://et-photography.firebaseapp.com/"
    },
    {
      id: 8,
      img: Two,
      pretitle: "Empanada Shopping Mall",
      title: "Shopify Customization",
      link: "https://www.instagram.com/"
    }
  
  ]
  return <section className='min-h-[85vh] lg:mimin-h-[78vh] flex items-center'>
          <div className="container mx-auto">
            <h2
            className='mt-48 text-[25px] lg:text-[45px] font-bold leading-[0.8] text-primary mb-16'>
              Our Latest Projects
            </h2>
            <div className='m-4'>
              <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-12 mb-10 lg:mb-0'>
                {/* image */}
                {
                  works.map(work=>{
                    return <a href={work.link}>
                    <div
                    key={work.id} work={work} className='cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      {/* overlay */}
                      <div className='group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300'></div>
                      {/* image */}
                      <img className='group-hover:scale-125 transition-all duration-500' src={work?.img} alt="" />
                      {/* pretitle */}
                      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                        <span className='text-white'>{work?.pretitle}</span>
                      </div>
                      {/* title */}
                      <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-40'>
                        <span className='text-3xl text-white'>{work?.title}</span>
                      </div>
                    </div>
                    </a>
                  })
                }
              </div>
            </div>
          </div>
        </section>;
};

export default Portfolio;
