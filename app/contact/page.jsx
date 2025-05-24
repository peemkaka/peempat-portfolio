"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Swal from 'sweetalert2'

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select";

import React, { useState } from 'react'
import {FaPhoneAlt,FaEnvelope,FeMapMarkerAlt, FaMapMarkerAlt} from "react-icons/fa";
import { icons } from "lucide-react";

const info=[
  {
    icons:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+66) 83 067 9249',
  },
  {
    icons:<FaEnvelope/>,
    title:'Email',
    description:'peemjajajaja@gmail.com',
  },
  {
    icons:<FaMapMarkerAlt/>,
    title:'Address',
    description:'Ranong , Bang rint 85000',
  },
]

import {motion} from "framer-motion"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a58070b-e8d1-4909-963b-906dba7b12ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere fugiat veritatis ducimus beatae laborum.
              </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" name="firstname"/>
                  <Input type="lastname" placeholder="Lastname" name="lastname"/>
                  <Input type="email" placeholder="Email Address" name="email"/>
                  <Input type="phone" placeholder="Phone Number" name="phone"/>
                </div>
                <Textarea
                 className="h-[200px]"
                 placeholder="Type Your message here."
                 name="message"
                />
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end xl:order-none mb-8
          xl:mb-0
          ">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center
                  justify-center
                  ">
                    <div>{item.icons}</div>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact