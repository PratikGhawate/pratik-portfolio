import React from 'react'
import { createContext } from 'react';
import {motion} from "framer-motion"
import Image from 'next/image';
type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 tracking-[3px] text-gray-500 text-lg '>Explore My Skill Arsenal
        </h3>
        <div className='grid grid-cols-4 gap-9 '>


        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-22 h-22 xl:w-28 xl:h-28 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-22 h-22 xl:w-28 xl:h-28 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" />

        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />


        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://img.icons8.com/?size=96&id=WHRLQdbEXQ16&format=png" />
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://img.icons8.com/?size=96&id=9Kvi1p1F0tUo&format=png" />
        <img className='rounded-xl object-cover w-22 h-22 xl:w-28 xl:h-28 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://img.icons8.com/?size=96&id=9OGIyU8hrxW5&format=png" />
        
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-22 h-22 xl:w-28 xl:h-28 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://img.icons8.com/?size=96&id=117561&format=png" />   
        <img className='rounded-xl object-cover w-24 h-24 xl:w-32 xl:h-32 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
        <img className='rounded-xl object-cover w-22 h-22 xl:w-28 xl:h-28 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow'
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        









        

          
            
         
          
          </div>






        
    </div>
  )
}