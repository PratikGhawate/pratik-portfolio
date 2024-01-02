import React from 'react';
import {motion} from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
type Props = {}

export default function ExperienceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#EBEBE1] hover:opacity-100 opacity-80 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        <img
        className= 'w-32 h-32  rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src = 'http://localhost:3000/images/elring.png' alt = ''
        />
        <div className = 'px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Data Analyst</h4>
            <p className='font-bold text-2xl mt-0'>Elringklinger</p>
            <div className='flex space-x-2 my-2'>
            <img className='h-12 w-12 rounded'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img className='h-12 w-12 rounded'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" />
            <img className='h-12 w-12 rounded'
            src="https://img.icons8.com/?size=96&id=117561&format=png" />
            <img className='h-12 w-12 rounded' src="https://img.icons8.com/?size=96&id=9Kvi1p1F0tUo&format=png" alt="" />


            </div>
            <p className=' py-5 font-semibold text-black'>June 2021 - August 2021
            </p>
           

           <div className='list-container'>
            <ul className='list-disc space-y-1 ml-5 text-lg'>
                <li>Processed and integrated sales data from 3 different sources using SQL and API tools, reducing data integration time by 20% and improving data accuracy.</li>
                <li>Conducted quantitative analysis in Python to validate data, identify patterns and trends in complex data sets, and provided
actionable recommendations while generating relevant insights through analytics reports.</li>
                <li>Orchestrated a Machine Learning model achieving an 85% accuracy rate in predicting future sales, thereby reducing inventory
costs, and enhancing sales forecasting precision.</li>
                <li>Enhanced communication with the product development team by creating visually engaging presentations and reports, resulting in a 40% improvement in understanding data insights and informing strategic decision-making.</li>
            </ul>
            </div>
            
            



        </div>
    </article>

    
  )
}