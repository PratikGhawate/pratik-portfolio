import React from 'react';
import {motion} from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
type Props = {}

export default function ExperienceCard3({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#EBEBE1] hover:opacity-100 opacity-80 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        <img
        className= 'w-32 h-32 rounded md:rounded xl:w-[200px] xl:h-[200px] object-cover object-center'
        src = 'http://localhost:3000/images/sdsu.png' alt = ''
        />
        <div className = 'px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Student Assistant</h4>
            <p className='font-bold text-2xl mt-0'>San Diego State University</p>
            <div className='flex space-x-2 my-2'>
            <img className='h-12 w-12 rounded'
            src="https://img.icons8.com/?size=96&id=117561&format=png" />
            <img className='h-12 w-12 rounded'
            src="https://www.svgrepo.com/show/55176/network-support.svg" />
            <img className='h-12 w-12 rounded'
            src="https://www.svgrepo.com/show/307748/customer-service-customer-support-customer-service-representative-service-center.svg" />


            </div>
            <p className=' py-5 font-semibold text-black'>June 2023 - Present
            </p>
           

           <div className='list-container'>
            <ul className='list-disc space-y-3 ml-5 text-lg'>
                <li>Monitored and maintained security protocols at San Diego State University, ensuring a safe environment through diligent supervision and implementation of safety measures, enhancing student and staff safety.</li>
                <li>Displayed exceptional customer service as a Desk Assistant, delivering top-tier customer service and showcasing adept conflict resolution abilities in diverse situations, fostering a positive environment for all.</li>
                <li>Played a pivotal role in the security team, contributing effectively to a cohesive work atmosphere, showcasing quick thinking and adept problem-solving during incidents, ultimately leading to a 95% resolution rate of resident concerns, a 30% surge in engagement, and positive feedback from 85% of residents.</li>
               

          
            </ul>
            </div>
            
            



        </div>
    </article>

    
  )
}