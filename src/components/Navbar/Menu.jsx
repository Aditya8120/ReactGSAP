import React, { useRef } from 'react'
import logo from '../../assets/logo.webp'

const Menu = () => {

  const menuRef = useRef(null)
  return (
    <div ref={menuRef} id='fullMenu' className='h-screen w-full top-0 z-50 absolute py-40 bg-black transition-all duration-200 overflow-hidden'>
      <div className='flex absolute top-0 w-full items-start justify-between z-4'>
        <div className='h-15 w-15 p-1 rounded-full overflow-hidden'><img className='object-cover' src={logo} alt="logo" /></div>
        <div className='h-10 w-10 m-2 rounded-2xl cursor-pointer'  onClick={()=>{
          menuRef.current.style.height='0vh'
          menuRef.current.style.padding='0'
        }}>
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round">
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </div>
      </div>
      <div id='allLinks'>
        <div className='link border-t font-[font1] uppercase text-[6vw] text-center text-white relative'>
          <h1>Projects</h1>
          <div className='moveLink flex top-0 bg-cyan-300 text-black absolute'>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className='link border-t font-[font1] uppercase text-[6vw] text-center text-white relative'>
          <h1>Agence</h1>
          <div className='moveLink flex top-0 bg-cyan-300 text-black absolute'>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className='link border-y font-[font1] uppercase text-[6vw] text-center text-white relative'>
          <h1>Contact</h1>
          <div className='moveLink flex top-0 bg-cyan-300 text-black absolute'>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
            <div className='moveX flex whitespace-nowrap items-center'>
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
              <h2>Lorem, ipsum dolor.</h2>
              <img className='rounded-full object-cover w-48 shrink-0' src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
