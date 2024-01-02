import React from 'react';
import {motion} from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#EBEBE1] hover:opacity-100 opacity-80 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        <img
        className= 'w-32 h-32 rounded md:rounded xl:w-[200px] xl:h-[200px] object-cover object-center'
        src = 'https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/sdsu.png?raw=true' alt = ''
        />
        <div className = 'px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Data Analyst - Research</h4>
            <p className='font-bold text-2xl mt-0'>San Diego State University</p>
            <div className='flex space-x-2 my-2'>
            <img className='h-12 w-12 rounded'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img className='h-12 w-12 rounded'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
            <img className='h-12 w-12 rounded'
            src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png" />
            <img className='h-11 w-11 rounded' src="https://img.icons8.com/?size=96&id=117561&format=png" alt="" />



            </div>
            <p className=' py-5 font-semibold text-black'>June 2023 - Present
            </p>
           

           <div className='list-container'>
            <ul className='list-disc space-y-3 ml-5 text-lg'>
                <li>Developed and implemented automated data collection system for secondhand Luxury bags by scraping and storing data on S3 using a daily Cron Job.</li>
                <li>Implemented Amazon S3 storage for seamless, scalable data management, facilitating efficient analysis using Pandas and Excel.</li>
                <li>Developed a scratch and pale color YOLO detection model on luxury handbags with 80% identification accuracy.</li>
                <li>Leveraged advanced regression methodologies, including the Random Forest Regression model, to estimate handbag sales
potential by using variables such as bag popularity, seller's ethnicity, seller's rating, and handbag quality.</li>
               

          
            </ul>
            </div>
            
            



        </div>
    </article>

    
  )
}