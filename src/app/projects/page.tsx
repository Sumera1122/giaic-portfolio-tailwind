"use client"
import React from 'react'
import Image from 'next/image'
import { RiExternalLinkLine } from "react-icons/ri"; 
import Link from 'next/link';

const Projects = () => {
  return (
    <main className='w-full h-full flex justify-center items-center  text-white  flex-col mt-28 md:mt-10 space-y-8 '>
        <div className='w-full md:w-[80%] flex justify-center items-center md:mt-[100px]'>
            {/* top div */}
            <div className=' flex justify-center items-center flex-col'>
                <div className='bg-lime-400 text-black w-[180px] h-[40px] pl-14  hover:bg-yellow-400 md:text-xl rounded m-6 md:pl-14 md:p-2 pt-2 font-extrabold ' >Work</div>
                <p className=' font-extrabold text-white border-b-white mb-6' >My projects </p> 
              </div>
        </div>
     {/* detail  */}
     <div className='flex w-[90%]  h-[320px] md:w-[40%]  border  border-lime-400   md:mt-[100px]'>

     <div className=' md:w-[45% ] md:h-[250px]'>
        <Link href='https://css-portfolio-2nd-project-main.vercel.app/'><Image src={"/images/project1.jpeg"} alt={"pic"} width={100} height={200} className="w-auto h-auto mt-24 md:m-10"/></Link>
        
     </div>


     {/* right div  */}
     <div className=' w-[70%] md:w-[45%]  space-y-6 ml-2'>
        <h1 className=' text-lime-400 font-bold flex justify-start mt-10 md:m-4'>Portfolio Website</h1>
        <p className='text-[14px] leading-6 md:text-[16px]'> My projects portfolio showcases my skills and creativity in front-end development, built using HTML, CSS, and JavaScript. It features a clean and responsive design, emphasizing user experience and accessibility. </p>
        {/* tags start here */}
      <div className='flex space-x-2 '>

     <div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2  rounded md:m-4 font-bold pl-4 md:p-8 text-[10px]' >HTML</div>
     <div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2 rounded md:m-4 font-bold  pl-4 md:p-8 text-[10px]' >CSS</div>
     <div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2  rounded md:m-4 font-bold pl-4 md:p-8 text-[10px]' >JS</div>
     <Link href='https://css-portfolio-2nd-project-main.vercel.app/'><RiExternalLinkLine className='block'/></Link>
     </div>
     {/* tags end here */}
     </div>
     {/* content ends here */}
     </div>



     {/* project 2................................................................................................ */}
      {/* detail  */}
      <div className='flex w-[90%]  h-[320px] md:w-[40%]  border  border-lime-400   md:mt-[100px]'>

<div className=' md:w-[45% ] md:h-[250px]'>
   <Link href='https://giaic-portfolio-customcss-8ro3.vercel.app/'><Image src={'/images/jsportfolio.jpg'} alt={"pic"} width={100} height={200} className="w-auto h-auto mt-20 md:m-10"/></Link>
   
</div>


{/* right div  */}
<div className=' w-[70%] md:w-[45%]  space-y-6 ml-2'>
   <h1 className=' text-lime-400 font-bold flex mt-6 justify-start md:m-4'>Portfolio Website</h1>
   <p className='text-[14px] leading-6 md:text-[16px]'> This design is inspired by creative concepts I visualized in Figma, translating them into a fully responsive and interactive user interface. Built on the powerful Next.js framework, it ensures optimal performance and seamless navigation. </p>
   {/* tags start here */}
 <div className='flex space-x-2 '>

<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 rounded pt-2 font-extrabold pl-4 md:p-8 text-[10px]' >NEXTJS</div>
<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 rounded pt-2 font-extrabold  pl-4 md:p-8 text-[10px]' >FIGMA</div>
<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400  rounded pt-2 font-extrabold pl-4 md:p-8 text-[10px]' >CSS</div>
<Link href='https://giaic-portfolio-customcss-8ro3.vercel.app/'><RiExternalLinkLine className='block'/></Link>
</div>
{/* tags end here */}
</div>
{/* content ends here */}
</div>
{/* ..............................project3 */}
 {/* detail  */}
 <div className='flex w-[90%]  h-[320px] md:w-[40%]  border  border-lime-400   md:mt-[100px]'>

<div className=' md:w-[45% ] md:h-[250px]'>
   <Link href='https://giaic-portfolio-customcss-8ro3.vercel.app/'><Image src='/images/project3.jpeg' alt="pic" width={100} height={200} className="w-auto h-auto mt-24 md:m-10"/></Link>
   
</div>


{/* right div  */}
<div className=' w-[70%] md:w-[45%]  space-y-6 ml-2 '>
   <h1 className=' text-lime-400 font-bold flex justify-start md:m-4 mt-10'>Restaurant Website</h1>
   <p className='text-[14px] leading-6 md:text-[16px]'> This design is inspired by creative concepts I visualized in Figma, translating them into a fully responsive and interactive user interface. Built on the powerful Next.js framework, it ensures optimal performance and seamless navigation. </p>
   {/* tags start here */}
 <div className='flex md:mt-[-10px] space-x-2 md:space-x-6 '>

<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2 rounded  font-extrabold pl-4 md:p-8 text-[9px]' >NEXTJS</div>
<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2 rounded  font-extrabold pl-4 md:p-8 text-[9px]' > CSS</div>
<div className='bg-lime-400 text-black w-[100px] h-[30px]  hover:bg-yellow-400 pt-2 rounded  font-extrabold pl-4 md:p-8 text-[9px]' >TAILWIND  </div>
<Link href='https://giaic-portfolio-customcss-8ro3.vercel.app/'><RiExternalLinkLine className='block'/></Link>
</div>
{/* tags end here */}
</div>
{/* content ends here */}
</div>

</main>
  )
}

export default Projects
