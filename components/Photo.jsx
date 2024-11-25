"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};


const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
                }
                }>
                {/*image*/}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="w-[298px] top-2 xl:top-4 h-[270px] xl:w-[498px] 
            xl:h-[468px] absolute"
                >
                    <Image src="/assets/photo.jpg"
                        priority
                        quality={100}
                        fill
                        alt="photo"
                        className="object-contain mx-auto my-auto"
                    />
                </motion.div>
                {/*rectangle*/}
                <motion.svg className="w-[300px] xl:w-[506px] 
            h-[300px] xl:h-[506px]" fill="transparent"
                    viewBox="0 0 506 586"
                    xmlns="http://www.w3.org/2000/svg"

                >
                    <motion.rect className="w-[500px] xl:w-[506px] 
            h-[560px] xl:h-[586px]" fill="transparent"
                        viewBox="0 0 506 586"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#FF7F3E"
                        strokeWidth="5"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>

        </div>
    )
}

export default Photo