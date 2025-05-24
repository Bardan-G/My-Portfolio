import React from 'react'
import SkillCard from './SkillCard';
import NextJs from '../images/expressjs.svg';
import Css from '../images/css3.svg';
import JavaScript from '../images/javascript.svg';
import NodeJs from '../images/nodejs.svg';
import ExpressJs from '../images/expressjs.svg';
import Figma from '../images/figma.svg';
import MongoDb from '../images/mongodb.svg';
import Reactt from '../images/react.svg';
import Tailwindcss from '../images/tailwindcss.svg'


const skillItem = [
  {
    imgSrc: {Figma},
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: {Css},
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc:{JavaScript},
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: {NodeJs},
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: {ExpressJs},
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: {MongoDb},
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: {Reactt},
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc :{NextJs},
    label: 'NextJs',
    desc: 'React Framework'
  },
  {
    imgSrc: {Tailwindcss},
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skill = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className='headline-2 reveal-up'>
                Essential Tools I use 
            </h2>
            <p className=' text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>(
                        <SkillCard
                        key={key}
                        imgSrc={imgSrc}
                        desc={desc}
                        label={label}
                        classes='reveal-up'
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill