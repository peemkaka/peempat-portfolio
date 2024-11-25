"use client";

import {
 FaHtml5,
 FaCss3,
 FaJs,
 FaReact,
 FaDiscord,
 FaSlack,
 FaJira
} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs,SiVisualstudio } from "react-icons/si";


const universitys = {
  icon: '/assets/resume/badge.svg',
  title: 'My university projects',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  voluptas aspernatur voluptatem nihil doloribus.',
  items:[
    {
      title:'Experiential Learning Project l-ll (SIT-Chatbot)',
      description: 'System for managing answering questions and providing information within the Faculty of Information Technology',
      responsible:'My responsible is Front-End Developer for coding Front-End user interface functions, developing CRUD function by using Next.js and tailwind css , managing Line OA and using LIFF(LINE Front-End Framework) for working with web application',
      duration: '2022',
    },
    {
      title:'Integrated Project I-II (Online Booking Room in Hotel Website)',
      description: 'A single page web application do functions as a booking system',
      responsible:'My responsible for designing website and coding user interface functions developing CRUD function by using Vue.js',
      duration: '2021',
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Work experience during university studies By the university curriculum',
  items:[
    {
      company:'Atmosph Digital Solutions Co.,Ltd.',
      position: 'Intern Front-End Developer',
      duration: 'Jan 2022 - May 2022 (4 Month)',
      description:'learning how to write clean coding, efficient, dynamic, and reusable components using programming languages such as React.js and try new Framework Next.js from senior Front-End Developer'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Educational institution information and overall GPA',
  items:[
    {
      school:'KING MONGKUTS UNIVERSITY OF TECHNOLOGY THONBURI (KMUTT)',
      degree: 'BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)',
      duration: 'July 24 2019 - july 3 2023',
      gpax:'3.01',
    },
  ]
}

const skills = {
  title: "My skills & Tools",
  description: "Skills and tools that are proficient and used",
  skillList:[
    {
      icon: <FaHtml5/>,
      name:'html 5'
    },
    {
      icon: <FaCss3/>,
      name:'css 3'
    },
    {
      icon: <FaJs/>,
      name:'javascript',
    },
    {
      icon: <FaReact/>,
      name:'react.js',
    },
    {
      icon: <SiNextdotjs/>,
      name:'next.js'
    },
    {
      icon: <SiTailwindcss/>,
      name:'tailwind.css'
    },
    {
      icon:<FaDiscord/>,
      name:'discord',
    },
    {
      icon:<FaJira/>,
      name:'jira',
    },
    {
      icon:<FaSlack/>,
      name:'slack',
    },
    {
      icon:<SiVisualstudio/>,
      name:'visual studio code',
    },
  ]
}
const about = {
  title : 'About me',
  description: "Personal information and contact channels",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Peempat Pinsang"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 83 067 9249"
    },
    {
      fieldName: "Experience",
      fieldValue: "4 Month"
    },
    {
      fieldName: "Facebook",
      fieldValue: "Peempat Pinsang"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thai"
    },
    {
      fieldName: "Email",
      fieldValue: "peemjajajaja@gmail.com"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Spanish"
    },
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";  

import { ScrollArea } from "@/components/ui/scroll-area";  
import {motion} from "framer-motion"

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={
      {
        opacity:1,
        transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"
        }
      }
    }
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills & Tools</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh]  w-full">
          {/*content*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="bg-[#232329] h-auto xl:h-[238px] py-6 px-10 rounded-xl 
                  flex flex-col justify-center items-center lg:items-start gap-1">
                    {experience.items.map((item,index)=>{
                      return <li key={index}>
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl min-h-[50px] text-center
                        lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent">   
                          </span>
                          <p className="text-white/60 pb-2 font-semibold">{item.company}</p>
                        </div>
                        <p className="text-white/60">{item.description}</p>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/*education*/}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="bg-[#232329] h-auto xl:h-[184px] py-6 px-10 rounded-xl 
                  flex flex-col justify-center items-center lg:items-start gap-1">
                    {education.items.map((item,index)=>{
                      return <li key={index}>
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl min-h-[50px] text-center
                        lg:text-left">
                          {item.school}
                        </h3>
                        <p className="text-white/60">{item.degree}</p>
                        <div className="flex items-center xl:justify-start justify-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent">   
                          </span>
                          <p className="text-white/60 font-semibold">GPAX {item.gpax}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/*Skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center ">
                            <div className="text-6xl hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
          {/*About me*/}
            <TabsContent value="about" className="w-full text-center xl:text-left h-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center
                    xl:justify-start gap-4
                    ">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume