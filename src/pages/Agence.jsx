import React, { useRef } from 'react'
import bgvideo from '../assets/BG/BG_2.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imgRef = useRef(null)
  const urlRef = useRef(null)

  const imageArray = [
    'https://i.pinimg.com/1200x/65/18/1b/65181b447f5a34236077c5269a575410.jpg',
    'https://i.pinimg.com/736x/cf/46/21/cf4621bfbbabbcf988d595c13a00b210.jpg',
    'https://i.pinimg.com/736x/c7/7f/08/c77f08a9ac3fcb1c0d637f1ff1bc780c.jpg',
    'https://i.pinimg.com/736x/f5/55/c3/f555c3b5f506e52ee09a3d8a9cb9cd4c.jpg',
    'https://i.pinimg.com/1200x/5e/84/e4/5e84e429fdfe16788ff03c617de08e27.jpg',
  ]


  useGSAP(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        // markers: true,
        start: 'top 22%',
        end: 'top -100%',
        pin: true,
        scrub: true,
        pinSpacing: true,
        onUpdate: (elem) => {
          let index = Math.floor(elem.progress * imageArray.length);
          urlRef.current.src = imageArray[index];
          console.log(Math.floor(elem.progress * imageArray.length))
        }
      }
    })
  })

  return (
    <div className='font-[font2]'>
      <div className='h-screen w-screen fixed inset-0'>
        <video autoPlay loop muted className='h-full w-full object-cover opacity-75' src={bgvideo}></video>
      </div>
      <div ref={imgRef} className='h-[20vw] w-[15vw] z-10 overflow-hidden bg-green-900 absolute rounded-4xl top-40 left-100'>
        <img ref={urlRef} className='h-full w-full object-cover' src={imageArray[0]} alt="img" />
      </div>
      <div className='text-white mt-[50vh] relative z-20 leading-[15vw] uppercase text-center text-[18vw]'>
        Emerging <br /> Waves
      </div>
      <div className='pl-[45vw] relative text-4xl z-20 mt-5'>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Emerging Waves is a reflection of journeys shaped by movement, curiosity, and discovery.
          Inspired by endless coastlines and shifting tides, it celebrates travel as a flow of experiences — where every path leads to new perspectives, quiet escapes, and moments that stay with you long after the waves fade.</p>
      </div>
    </div>
  )
}

export default Agence