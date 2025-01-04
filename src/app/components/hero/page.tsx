import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <main className='text-white w-full h-full md:h-[500px] flex  justify-center items-center mt-10 '>
        <div className='flex w-full md:w-[80%] h-full flex-col md:flex-row justify-center pt-10'>

    {/* left div */}
        <div className='w-[60%] h-[20%] m-10 md:w-[26%] md:mt-28 flex justify-center items-center bg-lime-400 rounded-[100%] border border-white md:p-20 '>
            <Image src={'/images/image5.png'} alt='profile' width={100} height={100} className='w-[200px] h-[150px] rounded-[40%] m-6  md:m-0  md:rounded-[10%] mb-10  md:w-[660px] md:h-[250px] md:mb-10'/>
        </div>
    {/* right div */}
        <div className=' w-full md:w-[50%] space-y-5 px-5'>
            <h1 className=' text-xl font-bold lg:text-3xl text-lime-400'>Hi, I'm Sumera </h1>
            <p className=' text-[14px] md:text-[16px]'>A budding Front-End Developer with a unique background in Business Administration and Finance. My journey into tech began when i got enrolled in governor house IT initiative program,i worked as a project cordinator in PDM&I where i gained a year of experience that honed my skills in teamwork and problem-solving.
            
            I am passionate about creating user-friendly web experiences and have been diving into front-end technologies like HTML, CSS, and JavaScript. My background in finance gives me a distinct perspective on building solutions that not only look good but also make sense from a business standpoint.
            </p>
            <div>
                <p className='flex'> <IoLocationOutline />Karachi, Pakistan</p>
                <p className='flex'><GoDotFill />Available for new Projects</p>
            </div>
            <div className='text-white  flex space-x-4 md:text-3xl'>
            <Link href="https://github.com"> <FaGithub  className='text-3xl'/>  </Link>
            <Link href="https://www.linkedin.com/in/sumera-mushtaque-7759bb1b5/"><FaLinkedin className='text-3xl' /> </Link>
            <Link href="mailto:sumeramushtaque993@gmail.com"> <SiGmail  className='text-3xl'/></Link>

            </div>
            </div>
        </div>


    </main>
  )
}

export default Hero
