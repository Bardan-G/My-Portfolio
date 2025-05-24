import React from 'react'
import { ButtonPrimary } from './Button';
import { li } from 'motion/react-client';
import Logo from '../images/logo.svg'

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee'
  }
];
const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2 reveal-up">
                <div className=""> 
                    <h2 className="headline-1">Let&apos;s work together today!</h2>
                   <ButtonPrimary
                  href="mailto:neupanebardang@gmail.com"
                   label="Start project"
                   icon="chevron_right"
                   classes='reveal-up'
                   />
                </div>


                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href},key)=>(
                                <li key={key}>
                                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <p className="mb-2 reveal-up">Socails</p>

                        <ul>
                            {socials.map(({label, href},key)=>(
                                <li key={key}>
                                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            

            <div className="flex items-center justify-between pt-10 mb-8 reveal-up">
                <a href="/" className='logo reveal-up'>
                    <img src={Logo} width={40} height={40} alt="Logo" />
                </a>
                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200"> Bardan G Neupane</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer