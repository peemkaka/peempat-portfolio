"use client";
import CountUp from 'react-countup';

const stats = [
    {
        num:7,
        text:"Month of experience"
    },
    {
        num:5,
        text:"Projects completed"
    },
    {
        num:6,
        text:"Technologies"
    },
    {
        num:384,
        text:"Code commit",
    },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-8 xl:pb-8'>
        <div className='container mx-auto'> 
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item,index)=>{
                    return <div className='flex-1 flex gap-4 items-center justify-center' key={index}>
                        <CountUp end={item.num} 
                        duration={5} delay={2}
                        className='text-4xl 
                        xl:text-6xl 
                        font-extrabold'/>
                        <p className={`${
                            item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                        } leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats