/**
 * @copyright 2025 bardan-g
 * @license Apache2.0
 */

import { header } from 'motion/react-client'
import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'




const Header = () => {
    const [navOpen,setNavOpen]=useState(true )
  return (
    <header className='fixed top-0 left-0 h-20 w-full  flex items-center justify-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0   '>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex  justify-between items-center md:px-6 ma:grid mad:grid-cols-[1fr,3fr,1fr]  '>
            <h1 >
                <a href="" className=''>
                    <img src="null" width={40} height={40} alt=" logo"  />
                </a>
            </h1>

            <div  className='relative md:justify-self-center'>
                <button className='menu-btn ' onClick={() => setNavOpen((prev) => !prev)}>  
                    <span className='material-symbols-rounded fixed '>
                        {navOpen ? 'close' :'menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
                
            </div>
 
            <a href=" #contact" className='btn btn-secondary md:justify-self-end'> Contact Me</a>
        </div>
    </header>
  )
}

export default Header