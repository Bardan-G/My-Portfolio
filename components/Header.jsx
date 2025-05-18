/**
 * @copyright 2025 bardan-g
 * @license Apache2.0
 */

import { header } from 'motion/react-client'
import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />

const Header = () => {
    const [navOpen,setNavOpen]=useState(false )
  return (
    <header className='fixed top-0 left-0 h-20 w-full flex items-center justify-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex  justify-between items-center md:px-6  '>
            <h1 >
                <a href="" className=''>
                    <img src="null" width={40} height={40} alt=" logo"  />
                </a>
            </h1>

            <div  className='relative md:justify-self-center'>
                <button className='menu-btn ' onClick={() => setNavOpen((prev) => !prev)}>  
                    <span className='material-symbols-rounded '>
                        menu
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            <a href=" #contact" className='btn btn-secondary max-md:hidden md:justify-self-end'> Contact Me</a>
        </div>
    </header>
  )
}

export default Header