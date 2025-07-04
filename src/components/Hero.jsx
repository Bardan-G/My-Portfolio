import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import Avatar from "../images/avatar.png";
import ProfilePicture from "../images/Profile.png";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/CV.pdf";
  link.download = "Bardan-G-Neupane-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section id="home" className="px-4 pt-28 lg:pt-36 ">
      <div className=" container flex md:flex-col lg:flex-row items-start gap-10   ">
        <div className="">
          <div className="flex items-center gap-3">
            <figure className=" img-box w-9 h-9 rounded-lg">
              <img
                src={Avatar}
                width={40}
                height={40}
                alt="Bardan Portfolio "
                className="img-cover"
              />
            </figure>
            <div className=" flex  items-center  gap-1.5  text-zinc-400 text-sm tracking-wide">
              <span className=" relative w-2 h-2 bg-emerald-400 rounded-full  ">
                <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className=" flex items-center  gap-3  ">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              onClick={handleDownload}
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className=" hidden lg:block ">
          <figure className=" w-full w-max-[480px] mal-auto bg-gradient-to-t from-white via-40% via-white-40/40 to-110% rounded-[60px] overflow-hidden">
            <img
              src={ProfilePicture}
              width={656}
              height={800}
              alt="Bardan Profile Image"
              className="w-full "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
