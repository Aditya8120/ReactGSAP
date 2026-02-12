import React, { useRef } from 'react'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen, closeMenu }) => {

  const menuRef = useRef(null)
  return (
    <div ref={menuRef} id='fullMenu' className={`w-full top-0 z-50 absolute bg-black transition-all duration-300 overflow-hidden ${isOpen ? "h-screen py-40" : "h-0 p-0"}`}>
      <div className='flex absolute top-0 w-full items-start justify-between z-4'>
        <div className='h-15 w-15 p-1 rounded-full overflow-hidden'><img className='object-cover' src={logo} alt="logo" /></div>
        <div className='h-10 w-10 m-2 rounded-2xl cursor-pointer' onClick={() => {
          closeMenu()
        }}>
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round">
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </div>
      </div>
      <div id='allLinks'>
        <Link to='/project'><div className='link border-t font-[font1] uppercase text-[6vw] text-center text-white relative'>
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
        </div></Link>
        <Link to='/agence'><div className='link border-t font-[font1] uppercase text-[6vw] text-center text-white relative'>
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
        </div></Link>
        <Link to='/contact'><div className='link border-y font-[font1] uppercase text-[6vw] text-center text-white relative'>
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
        </div></Link>
      </div>
    </div>
  )
}

export default Menu
