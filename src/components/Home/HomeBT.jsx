import React from 'react'
import { Link } from 'react-router-dom'

const HomeBT = () => {
  return (
    <div className='font-[font2] flex flex-col lg:flex-row items-center justify-center gap-2 pb-2'>
      <div className='px-5 pt-1 pb-0 border-2 rounded-full flex justify-center lg:w-[35vw] shadow-2xl shadow-black hover:text-sky-300 hover:border-sky-300'>
      <Link to='/projects' className='uppercase lg:text-[6vw] text-[15vw] leading-tight'>PROJECTS</Link>
      </div>
      <div className='px-5 pt-1 pb-0 border-2 rounded-full flex justify-center lg:w-[35vw] shadow-2xl shadow-black hover:text-sky-300 hover:border-sky-300'>
      <Link to='/agence' className='uppercase lg:text-[6vw] text-[15vw] leading-tight'>AGENCE</Link>
      </div>
    </div>
  )
}

export default HomeBT