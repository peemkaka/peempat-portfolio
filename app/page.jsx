import Photo from '@/components/Photo'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from 'react-icons/fi'
 

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto  h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <p>Software Developer</p>
            <h1 className='h1'>
              Hello I'm <br />
              <span className='text-accent'>Peempat Pinsang</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I am a motivated and
              passionate IT with a strong foundation in programming and I have
              experience working on many projects while studying
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a target="_blank" href='https://drive.google.com/file/d/1svmdHpMbwvIyMw0CUaquz-gYXKxmZRoe/view?usp=sharing' rel='noopener noreferrer'>
                <Button variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  Download CV
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full 
                flex justify-center text-accent text-base hover:bg-accent hover:text-primary
                hover:transition-all duration-500 items-center"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl-order-none mb-8 xl:mb'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home