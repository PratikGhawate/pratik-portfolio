import React from 'react'
import {motion} from "framer-motion";
import ExperienceCard from './ExperienceCard';
import ExperienceCard2 from './ExperienceCard2';
import ExperienceCard3 from './ExperienceCard3';
type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    className={`flex flex-col relative h-screen text-left
      md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center`}>


        
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20'>
        
        <ExperienceCard />
        <ExperienceCard2/>
        <ExperienceCard3/>
        








      </div>






    </motion.div>
  )
}