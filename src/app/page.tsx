// Import required modules and types
"use client"
import Head from 'next/head';
import Header from '../../components/Header';
import type { NextPage } from 'next';
import {motion} from "framer-motion";
import Hero from '../../components/Hero';
import { Typewriter } from 'react-simple-typewriter';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Projects from  '../../components/Projects';
import ContactMe from '../../components/ContactMe';
import Link from 'next/link';
import Image from 'next/image';
import { PageInfo } from 'next/dist/build/utils';
import { getPageStaticInfo } from 'next/dist/build/analysis/get-page-static-info';
// Define the Home component as a NextPage
const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(255,255,240)] text-black h-screen snap-y snap-mandatory overflow-y-scroll 
     overflow-x-hidden z-0 scrollbar scrollbar-track-[#EBEBE1] scrollbar-thumb-[#F7AB0a]/70'> 
      {/* Set the page title using the Head component */}
      <Head>
        <title> Pratik Portfolio</title>
      </Head>

      <Header />

      <section id = "hero" className='snap-start'>
        <Hero />
      </section>

      <section id= "about" className='snap-center'>
      <About />
      </section>

      <section id="experience"  className='snap-center'>
      <Experience />
      </section>
      
      <section id= "projects" className='snap-center'>
        <Projects/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>
      </section>
      <section id="contact" className='snap-center'>
        <ContactMe/>
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-4 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full grayscale hover:grayscale-0]'
          src="https://github.com/PratikGhawate/pratikghawate/blob/main/public/images/pratikimage2.png?raw=true" />
        </div>
      </footer>
      </Link>
    </div>
  );
};
// Export the Home component as the default export
export default Home;
