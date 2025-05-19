import React from 'react'

const Hero = () => {
  return (
    <section id='home' className=''> 
    <div className=''>
        <div>
            <div>
                <figure className="">
                    <img src="../src/images/avatar-1.jpg" width={40} height={40} alt="Bardan Portfolio " className='img-cover' />
                </figure>
                <div className="">
                    <span className="">
                        <span className=""></span>
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