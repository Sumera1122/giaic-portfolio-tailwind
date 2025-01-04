import React from "react";
import { CiMail } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <main className="w-full h-full p-4 md:h-[400px] flex justify-center items-start mt-20 text-black bg-lime-400 ">
      <div className="w-full md:w-[80% flex flex-col justify-center items-center]">
        <div className=" flex justify-center items-center flex-col">
          <div className="bg-black text-white w-[180px] h-[40px]  hover:bg-yellow   md:text-xl rounded m-6 font-bold pb-8 pl-12 pt-4">
            Get in touch
          </div>
        </div>
        {/* top */}
        <div className=" font-bold md:text-xl space-y-4 md:ml-[700px] ">
          <p className="text-[14px]  ml-2 md:ml-[0px]">
            Feel free to reach out to me, If you are looking for a developer
          </p>
        </div>

        <div>
          <h1 className="flex text-[18px] md:text-2xl justify-center font-bold mt-10">
            <CiMail className="mr-3 bg-black text-white rounded " />{" "}
            sumeramushtaque993@gmail.com <GoCopy />
          </h1>
          <h2 className="flex text-[2xl] md:text-3xl justify-center">
            <MdOutlineLocalPhone className="mr-3" />
            03458923151 <GoCopy />
          </h2>
        </div>
        {/* links */}
        <h6 className="flex flex-col justify-center items-center md:text-xl"></h6>
        <div className=" flex  space-x-10 ml-40 mb-10 mt-6 text-[20px] text-black rounded w-[36px] md:ml-[850px] md:mt-20 md:text-3l">
          <a href="https://wa.me/03312156555">
          <IoLogoWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/sumera-mushtaque-7759bb1b5/">
          <TfiLinkedin />
          </a>
          <a href="mailto:sumeramushtaque993@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Footer;
