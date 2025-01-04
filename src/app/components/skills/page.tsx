import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <main className='text-white w-full h-[full] bg-lime-400  flex justify-center items-center mt-[160px] '>
        <div className='w-[80%] flex justify-center items-center flex-col'>
            {/* top div */}
            <div className=' flex justify-center items-center flex-col'>
                <div className='bg-black text-white w-[180px] h-[40px]  hover:bg-yellow-400 text-xl rounded m-6 font-bold pb-8 pl-12 pt-4' >Skills</div>
                <p className='mt-3  font-extrabold text-black border-b-black'>Skills and technologies i'm good at !</p>


            </div>
            {/* bottom */}
  
             <div className=' flex flex-col md:flex-row text-black font-bold text-[14px] gap-2'>
              {/* box1 */}
              <div>
              <Image src={'/images/html.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /> <p >90% skills and practice in html</p></div>
              {/* box 2 */}
              <div>
              <Image src={'/images/css.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /> <p>60% skills and practice in css</p></div>
              {/* box3 */}
              <div>
              <Image src={'/images/js.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /> <p>45% skills and practice in javascript</p> </div>
              {/* box4 */}
              <div>
              <Image src={'/images/nextjs.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /> <p>50% skills and practice in nextjs</p></div>
              {/* box5 */}
              <div>
              <Image src={'/images/tailwind.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /><p>60% skills and practice in tailwind</p> </div>
              {/* box6 */}
              <div>
              <Image src={'/images/ts.png'} alt='pic' width={100} height={100} className='md:w-[200px]'
              /><p>45% skills and practice in typescript</p> </div>
              

             </div>
  
  
  
  
  
  
  
  </div>



    </main>
  )
}

export default Skills
