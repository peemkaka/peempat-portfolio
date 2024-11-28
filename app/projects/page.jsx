'use client'

import {motion} from 'framer-motion';
import React, {useState} from 'react';       

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs'

import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from '@/components/WorkSliderBtns';

const works = [
  {
    num: '01',
    category: 'frontend',
    title: 'Portfolio website',
    description: 'A website that collects information, contact channels and my work.',
    stack:[
      {name: 'Next.js'},{name:"Tailwind.css"},{name:"Framer Motion"}
    ],
    image:'/assets/work/thumb1.1.png',
    live:'',
    github:'https://github.com/peemkaka/peempat-portfolio',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Food Order App',
    description: 'Mock up',
    stack:[
      {name: 'React.js'},{name:"Tailwind.css"},
    ],
    image:'/assets/work/thumb2.png',
    live:'',
    github:'',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Shop webapplication',
    description: 'Mock up',
    stack:[
      {name: 'React.js'},{name:"Tailwind.css"},
    ],
    image:'/assets/work/thumb1.png',
    live:'',
    github:'',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Auth System',
    description: 'Auth System / Easy Note (todo website)',
    stack:[
      {name: 'React.js'},{name:"Tailwind.css"},{name:"Firebase"}
    ],
    image:'/assets/work/thumb4.png',
    live:'https://peempat-easynote.netlify.app',
    github:'https://github.com/peemkaka/peempat-easynote',
  },
  {
    num: '05',
    category: 'University INT365',
    title: 'Sit Chatbot and web Application',
    description: 'My responsible is Front-End Developer for coding Front-End user interface functions, developing CRUD function by using Next.js and tailwind css , managing Line OA and using LIFF(LINE Front-End Framework) for working with web application',
    stack:[
      {name: 'React.js'},{name:"Tailwind.css"},{name:"Spring boot"},{name:"MySQL"}
    ],
    image:'/assets/work/thumb5.png',
    live:'offline',
    github:'https://github.com/INT-365-Project',
  }
]

const Projects = () => {
  const [project,setProject] = useState(works[0]);

  const handleSlideChange = (swiper) =>{
    //get current slide index
    // console.log('hi')
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(works[currentIndex])
  }

  return (
    <motion.div initial={{opacity:0}} animate={{
      opacity:1,
      transition:{
        delay:2.4,
        duration:0.4,
        ease:"easeIn"
      }
      }}                
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'                         
      >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>   
          {/* slider */}
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
              >
              {works.map((project,index)=>{
                return <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20'>
                        {/* overlay */}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'> 
                        </div>
                        {/* image */}
                        <div className='relative w-full h-full'>
                          <Image src={project.image} fill className='object-cover' 
                          alt=''/>
                        </div>
                    </div> 
                  </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20
              w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent/70 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
              
            </Swiper>
          </div>
          {/* content */}
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none
          '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/*outline num*/}
              <div className='text-8xl leading-none font-extrabold text-accent'>
                {project.num}
              </div>
              {/*project category*/}
              <h2 className='text-[42px] font-bold leading-none text-white
              hover:text-accent transition-all duration-500 capitalize cursor-pointer'>
                {project.category} project
              </h2>
              {/*project description*/}
              <h3 className='text-[20px] text-white font-semibold'>
                - {project.title}
              </h3>
              {/*project description*/}
              <p className='text-white/60'>
                {project.description}
              </p>
              {/*stack*/}
              <ul className='flex gap-4'>
                {project.stack.map((item,index)=>{
                  return <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the last comma */}
                      {index!==project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'>
                {/* buttons */}
              </div>
              <div className='flex gap-4 items-center'>
                {/* live project button */}
                {project.live != 'offline' && <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] 
                      rounded-full bg-white/5 flex justify-center items-center 
                      group'>
                        <BsArrowUpRight className='
                        text-white text-3xl group-hover:text-accent
                        '/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>}
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group
                      '>
                        <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </motion.div>
  )
}

export default Projects