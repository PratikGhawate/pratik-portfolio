
import React from 'react';
import {motion} from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div className={`flex flex-col relative h-screen text-center
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center`}>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <img
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95
        xl:w-[500px] xl:h-[600px]'
        src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/pratikimage2.png?raw=true"
        alt="pratik"
      />
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold"> Here's a {" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background </h4>
        <p className='text-lg'>
        Hello there! I’m Pratik Ghawate, a passionate Information Systems enthusiast currently pursuing my Master's at San Diego State University. I thrive on diving into data analysis and machine learning adventures, drawing from real-world experiences at ElringKlinger and SDSU. My toolbox is filled with skills in Python, R, SQL and Business Intelligence tools. Whether it's crafting ETL pipelines, segmenting customers, or achieving precision in cancer diagnosis with advanced ML models, I’m all in! I'm also quite comfy with cloud tech, big data tools, and databases. I love solving problems proactively, aiming to weave innovative solutions through technology and data insights.        </p>

      </div>
    </motion.div>
  );
}
