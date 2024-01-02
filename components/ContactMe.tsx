import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import Link from 'next/link'
type Inputs = {
  name: string;
  email: string;
  subject: string
  message: string;
}

type Props = {}

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailSubject = encodeURIComponent(` ${formData.subject}`);
    const emailBody = encodeURIComponent(`Hi Pratik,\n\nMy name is ${formData.name}.\n${formData.message}\n\nContact me at: ${formData.email}`);
  
    const mailToLink = `mailto:pratikghawate6@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    window.location.href = mailToLink;
  };
  return (
    <div className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
        I've got just what you need—
            <span className=' decoration-[#F7AB0A]/40 underline'>Let's talk and make it happen! </span>
        </h4>
        <div className='space-y-5'>
            <div className='flex items-center  space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>   
                <p className='text-2xl'>+1619-386-0503 </p>        
                </div>

                <div className='flex items-center space-x-2 justify-center'>
                <Link href="mailto:pratikghawate6@gmail.com" className='flex items-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl ml-2'>pratikghawate6@gmail.com</p>
                </Link>
                </div>


                <div className='flex items-center  space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>   
                <p className='text-2xl'> Open to Relocate</p>        
                </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className= 'contactInput' type="text" />
                <input {...register('email')} placeholder='Email' className= 'contactInput' type="email" />
            </div>

            <input {...register('subject')} placeholder='Subject' className= 'contactInput' type="text" />

            <textarea {...register('message')} placeholder='Message' className= 'contactInput'/>

            <button type='submit' className='bg-[#F7AB0A]/50 py-5 px-10 hover:bg-[#F7AB0A]'
            >Submit</button>
        </form>
        <div className='md:w-100 bottom-10 md:absolute left-0 right-0 p-10 text-center'>
        <p className='text-sm text-gray-500'>
          Coded in Visual Studio Code by yours truly.
          Built with <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, deployed with Vercel.
        </p>
      </div>
      </div>



        
    </div>
  )
}