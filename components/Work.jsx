import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
  {
    imgSrc: '../src/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
  {
    imgSrc: '../src/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
  {
    imgSrc: '../src/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
  {
    imgSrc: '../src/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
  {
    imgSrc: '../src/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
  {
    imgSrc: '../src/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/Bardan-G?tab=overview&from=2025-05-01&to=2025-05-19'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="continer">
            <h2 className="heading-2 mb-8">
                My portfolio highlights

            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work