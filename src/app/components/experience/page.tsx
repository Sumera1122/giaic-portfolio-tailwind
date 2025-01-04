import React from 'react'
import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <main>
        <div className='w-[80%] h-[full] flex justify-center items-center flex-col p-6 md:mr-20'>
            {/* top div */}
            <div className=' flex justify-center items-center flex-col'>
                <div className='bg-lime-400 text-black w-[180px] h-[40px] mt-6  hover:bg-yellow-400 text-xl rounded  font-extrabold pb-8 pl-12 pt-4 md:ml-80 ' >Experiences</div>
                <p className=' font-extrabold  text-lime-400 border-white mt-10  md:ml-64  ml-[10px]'>Experiences relatively in the field of IT only !</p>
           </div>
           {/* bottom */}
           <div className='text-white  w-full mt-10 leading-9  text-[14px] md:text-[18px]'>
            <h3 className=' flex justify-center items-center  md:ml-72 font-bold text-xl text-lime-400 '>Front end developer</h3>
            <p className='flex justify-center items-center p-4 '> <GoDotFill className='text-[30px] mt-[-138px] md:text-[16px] md:mt-2' />I'm a new in the field of it but i built my experience in Html css and js by creating multiple projects , most important among them was the portfolio i created.</p>
            <p className='flex justify-center items-center p-4 md:ml-[-420px]'><GoDotFill className='text-[30px] mt-[-116px] md:text-[16px] md:mt-2' />in next js  i also build  few websites and portfolios using figma templates and my words is still continued </p>
            <p className='flex justify-center items-center p-4 md:ml-[-80px]'> <GoDotFill  className='text-[30px] mt-[-138px] md:text-[16px] md:mt-2'/>I enhaned my performance by implenting the best practices in coding and optimizing assets, reducing page load and improving user experience</p>
           </div>

        </div>
    </main>
  )
}

export default Experience
