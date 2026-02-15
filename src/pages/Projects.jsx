import React from 'react'
import ProjectCards from '../components/Projects/ProjectCards'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HomeBT from '../components/Home/HomeBT';

const Projects = () => {

  const projectLinks = [
    {
      img1: "https://i.pinimg.com/736x/c1/e9/32/c1e932c86aa09e38e89773bf66f2501b.jpg",
      img2: "https://i.pinimg.com/1200x/8e/87/f3/8e87f361b6a14578a5d04f833217b2df.jpg",
    },
    {
      img1: "https://i.pinimg.com/1200x/c6/5b/3a/c65b3ae2a27df1141fd756662d836889.jpg",
      img2: "https://i.pinimg.com/1200x/da/b5/23/dab523f7ca7cfe8511749896311a90c5.jpg",
    },
    {
      img1: "https://i.pinimg.com/736x/21/f5/71/21f571579df9f7aeda51a04c3f5e3c74.jpg",
      img2: "https://i.pinimg.com/736x/9e/e0/66/9ee066d85a0fa422a0d5315d44ba8547.jpg",
    },
    {
      img1: "https://i.pinimg.com/1200x/24/ca/ca/24caca5f36caea8e805c52950d3cad9f.jpg",
      img2: "https://i.pinimg.com/736x/ce/75/c7/ce75c707b9253e248155710618f8edc4.jpg",
    }
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.from('.cards',{
      height:'100px',
      stagger:{
        amount:0.5,
      },
      scrollTrigger:{
        trigger:'.cardsDiv',
        // markers:true,
        start:'top 100%',
        end:'top -100%',
        scrub:true,
      }
    })
  })

  return (
    <div className='bg-linear-to-bl from-cyan-300 via-violet-600 to-violet-700'>
      <div className='pt-60'>
        <h2 className='font-[font2] text-[8vw] uppercase text-white'>Projects</h2>
      </div>
      <div className='cardsDiv p-2'>
          {projectLinks.map((e)=>(
            <div className='cards w-full h-100 mb-4 flex flex-col lg:flex-row gap-4'>
            <ProjectCards Im1={e.img1} Im2={e.img2}/>
            </div>
          ))}
      </div>
      <div className='text-white'><HomeBT/></div>
    </div>
  )
}

export default Projects