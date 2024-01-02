
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, The Name is Pratik", "<A Daytime Data Analyst/>","<Code Poet by Night/>"],
        loop: true,
        delaySpeed: 2000
    
      });
    
      return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
          <BackgroundCircles />
          <img className= "realative rounded-full h-32 w-32 mx-auto object-cover"
          src='http://localhost:3000/images/pratikimage.png'   alt='' 
          />


          <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[13px]'
            >Data Analyst / Engineer</h2>
            <h1 className='text-5xl lg:text-6xl front-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
            </h1>


            <div className='pt-5'>


            <Link href="#about">
              <button className= "heroButton">About</button>
            </Link>
            <Link href = "#experience">
              <button className= "heroButton">Experience</button>
            </Link>
            <Link href ="#projects">
              <button className= "heroButton">Projects</button>
            </Link>
            <Link href ="#skills">
              <button className= "heroButton">Skills</button>
            </Link>

            </div>

          </div>
        </div>

      );
    }

    
