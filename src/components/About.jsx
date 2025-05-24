import { div, label } from 'motion/react-client';
import React from 'react'
import Logo from '../images/logo.svg'


const aboutItems = [
  {
    label: 'Project done',
    number: 3
  },
  {
    label: 'Months of experience',
    number: 2
  }
];
const About = () => {
    
  return (
    <section
    id='about'
    className='section'
    >
        <div className="container">
            <div className=" bg-zinc-800/50 p-7 rounded-2xl overflow-hidden md:p-12 reveal-up"> 
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] font-medium tracking-wide ">
                    Welcome! I&apos;m Bardan G Neupane, a passionate web developer and from BSC(Hons) student from Nepal. I specialize in front-end development using React and JavaScript, and I'm currently learning full-stack development. My goal is to build clean, functional websites that create a smooth user experience. Feel free to explore my projects or get in touch to transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>
                <div className=" flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label,number},key)=>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img src={Logo} width={30} height={30} alt="Logo" className='ml-auto md:w-[40px] md:h-[40px]' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About