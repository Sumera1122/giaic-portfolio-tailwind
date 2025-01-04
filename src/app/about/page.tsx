import React from "react";
import Image from "next/image";

const About = () => {
  return (
     <main className="mt-28 md:mt-0"> 

      <div className="w-[60%] h-full flex justify-center items-center p-10 flex-col text-white">
        {/* first div */}
        <div className="flex justify-center items-center flex-col font-bold md:mt-10">
          <h4 className=" w-full text-[16px] ml-60 md:text-2xl">
            HI <span className="text-lime-400">I&apos;M SUMERA </span> AND THIS IS ALL ABOUT ME
          </h4>

          <div className="flex space-x-2 ml-36 md:space-x-10 m-10 text-black">
            <button className=" w-[140px] md:w-[160px] h-[40px] bg-lime-400 rounded-[40px] text-[12px]  font-extrabold p-4"><a href="/my pdf cv (11).pdf">CHECK CV</a>
            </button>
            <button className="w-[140px] md:w-[160px] h-[40px] bg-lime-400 rounded-[40px] text-[12px]  font-extrabold p-4"><a href="/my pdf cv (11).pdf" download> DOWNLOAD CV</a>
            </button>
          </div>
        </div>


        {/* 2nd div */}
      <div className="flex w-[100%] h-[80%] md:mt-[200px] md:ml-[600px]">

        <div className="w-[70%] md:flex-1 md:p-10 md:space-y-2 ml-0">
          <h6 className="text-lime-400 text-[12px] md:[16px]">All about me</h6>
          <h3 className="text-[18px] font-bold"> <span className="text-lime-400 ">MORE</span> ABOUT ME</h3>
          <p className=" w-full text-[10px] md:text-[16px] md:leading-8"> 
            I believe in continuous learning, which is why I always seek new
            challenges and opportunities to expand my skills. I thrive in
            environments that require problem-solving, creativity, and
            collaboration. Whether working independently or as part of a team, I
            am committed to delivering results with my all attention.
          </p>
    </div>
          
         {/* image div */}
      <div className="w-[30%] md:flex-1 md:m-20" >

      <div className="bg-lime-400 w-[200px] h-[160px] rounded-[90px]">

      <Image src={"/images/image5.png"} alt={"pic"} width={200} height={200} />
      </div>
    </div>
    
      </div>
      </div>
     </main>
  );
};

export default About;




