import React, { useRef } from 'react'
import logo from '../../assets/logo.webp'

const Navbar = () => {

    const menuBlock = useRef(null)
  return (
    <div className='flex fixed top-0 w-full items-start justify-between z-4'>
      <div className='h-15 w-15 p-1 rounded-full overflow-hidden'><img className='object-cover' src={logo} alt="" /></div>
      
      <div className='relative h-10 w-1/6 bg-green-300 opacity-40 text-center transition-all duration-300 rounded-full overflow-hidden ' onMouseEnter={(e)=>{
        menuBlock.current.style.height = '100%',
        e.currentTarget.style.opacity='100%'
      }} onMouseLeave={(e)=>{
        menuBlock.current.style.height = '0%',
        e.currentTarget.style.opacity='40%'
      }}>
      <div className='absolute text-2xl h-full w-full text-white'>MENU</div>
      <div ref={menuBlock} className='h-0 top-0 w-full transition-all bg-cyan-500 absolute text-white text-2xl overflow-hidden'>MENU</div>
      </div>
    </div>
  )
}

export default Navbar
