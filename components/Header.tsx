import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion";
import Link from 'next/link';
type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-10 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <motion.div 
       initial={{ x: -500, opacity: 0, scale: 0.5 }}
       animate={{ x: 0, opacity: 1, scale: 1 }}
       transition={{ duration: 1 }}
      className='flex flex-row items-center'>
        <SocialIcon url='https://www.linkedin.com/in/pratik-ghawate' fgColor='black' bgColor='transparent' />
        <SocialIcon url='https://www.facebook.com//pratik.ghavate.100' fgColor='black' bgColor='transparent' />
        <SocialIcon url='https://www.instagram.com/__pratik.g' fgColor='black' bgColor='transparent' />
        <SocialIcon url='https://github.com/PratikGhawate' fgColor='black' bgColor='transparent' />
      </motion.div>
      <Link href="#contact">
      <motion.div 
       initial={{ x: 500, opacity: 0, scale: 0.5 }}
       animate={{ x: 0, opacity: 1, scale: 1 }}
       transition={{ duration: 1 }}
      className='flex flex-row items-center text-black-300 cursor-pointer'>
        <SocialIcon
          network='email'
          fgColor='black'
          bgColor='transparent'
          style={{ width: '70px', height: '70px' }}
        />
        <p className='uppercase hidden md:inline-flex text-black-400'></p>
      </motion.div>
      </Link>
    </header>

  );
}
