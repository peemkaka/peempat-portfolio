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

import { SiTailwindcss, SiNextdotjs, SiVisualstudio } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Work experience during university studies By the university curriculum and real-world project development',
  items: [
    {
      company: 'G KULL Co.,Ltd.',
      position: 'Software Engineer (Full time)',
      duration: 'Dec 2024 - Present',
      description: 'Admin Management Web Application (G KULL Ecommerce) ',
      list: [
        {
          id: 1,
          title: 'Collaborated in a team of 3 developers to develop an internal web application for admin and staff users to manage  product listings, shop profiles, and backend operations'
        },
        {
          id: 2,
          title: 'Built core UI/UX and functional components using Next.js (TypeScript) , Tailwindcss , Ant Design'
        },
        {
          id: 3,
          title: ' Integrated RESTful APIs for features such as product management, shop data control, and user authentication using  MySQL for database  Worked closely with backend team to ensure smooth data flow using Next.js API routes (Node.js)'
        },
        {
          id: 4,
          title: 'Followed clean code principles, reusable component patterns, and responsive design best practices'
        },
      ]
    },
    {
      company: 'Atmosph Digital Solutions Co.,Ltd.',
      position: 'Intern Front-End Developer',
      duration: 'Jan 2022 - May 2022 (4 Month)',
      description: 'Interactive Mini-game Web Application',
      list: [
        {
          id: 1,
          title: 'Developed an interactive mini-game using React.js, designed specifically for touchscreen kiosk devices used in offline product promotions with 5 developer programmer'
        },
        {
          id: 2,
          title: 'Assisted the frontend team by implementing animated motion backgrounds and visual effects to enhance gameplay experience'
        },
        {
          id: 3,
          title: 'Integrated REST API to display real-time player scores and cumulative results at the end of each game session'
        }
      ]
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Educational institution information and overall GPA',
  items: [
    {
      school: 'KING MONGKUTS UNIVERSITY OF TECHNOLOGY THONBURI (KMUTT)',
      degree: 'BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)',
      duration: 'July 24 2019 - july 3 2023',
      gpax: '3.01',
    },
  ]
}

const skills = {
  title: "My skills & Tools",
  description: "Skills and tools that are proficient and used",
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <AiOutlineAntDesign />,
      name: 'ant design'
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaDiscord />,
      name: 'discord',
    },
    {
      icon: <FaJira />,
      name: 'jira',
    },
    {
      icon: <FaSlack />,
      name: 'slack',
    },
    {
      icon: <SiVisualstudio />,
      name: 'visual studio code',
    },
  ]
}
const about = {
  title: 'About me',
  description: "Personal information and contact channels",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Peempat Pinsang (Peem)"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 83 067 9249"
    },
    {
      fieldName: "Experience",
      fieldValue: "10 Month"
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
      fieldValue: "Thai (native),English (Intermediate)"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        {
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn"
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

          <div className="min-h-[100vh] pb-[20px] w-full">
            {/*content*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="min-h-[400px]">
                  <ul className="bg-[#232329] h-auto xl:min-h-[238px] py-6 px-10 rounded-xl 
                  flex flex-col justify-center items-center lg:items-start gap-1">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="pb-[14px]">
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
                        <div>
                          <p className="text-white/60 text-[14px]">{item.description}</p>
                          <ul className="list-disc pl-4 mt-2 text-left">
                            {item.list.map((temp) => (
                              <li key={temp.id} className="pb-[4px] text-white/60 text-[12px]">
                                {temp.title}
                              </li>
                            ))}
                          </ul>
                        </div>
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
                    {education.items.map((item, index) => {
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
                  {skills.skillList.map((skill, index) => {
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
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 min-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center
                    xl:justify-start gap-4
                    ">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-md">{item.fieldValue}</span>
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