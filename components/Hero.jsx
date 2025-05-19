import React from 'react'

const Hero = () => {
  return (
    <section id='home' className=' pt-28 lg:pt-26 '> 
       <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-0  '>
        <div>
            <div className='flex items-center gap-3'>
                <figure className=" img-box w-9 h-9 rounded-lg">
                    <img src="../src/images/avatar-1.jpg" width={40} height={40} alt="Bardan Portfolio " className='img-cover' />
                </figure>
                <div className=" flex flex-row items-center  gap-1.5 text-zinc-400 text-sm tracking-wide">
                    <span className="relative bg-emerald-400 h-2 w-2  rounded-full  ">
                        <span className=" "></span>
                        Available for work

                    </span>
                </div>
            </div>
            <h2 className="">
                Building Scalable Modern Websites for the Future
            </h2>
            <div className="">
                ButtonPrimary 

                ButtonOutline
            </div>
        </div>

        <div className="">
            <figure className="">
                <img src="../src/images/hero-banner.png" width={656} height={800} alt="Bardean Profile Image" className='w-full' />
            </figure>
        </div>
    </div>
    </section>
  )
}

export default Hero