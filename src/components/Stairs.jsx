import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stairs = ({ children }) => {

    const stairRef = useRef(null)
    const pageRef = useRef(null)

    const currPath = useLocation().pathname

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.to(stairRef.current, {
            display: 'block'
        })

        tl.from('.stair', {
            height: 0,
            duration: 0.3,
            stagger: {
                amount: -0.3
            },
        })

        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.3
            },
        })

        tl.to(stairRef.current, {
            display: 'none'
        })

        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            delay:1,
            opacity:0,
        })

    }, [currPath])

    return (
        <div>
            <div ref={stairRef} className='h-screen w-screen fixed z-30 top-0'>
                <div className='h-full w-full flex'>
                    <div className='h-full w-1/5 stair bg-sky-300'></div>
                    <div className='h-full w-1/5 stair bg-sky-200'></div>
                    <div className='h-full w-1/5 stair bg-sky-300'></div>
                    <div className='h-full w-1/5 stair bg-sky-200'></div>
                    <div className='h-full w-1/5 stair bg-sky-300'></div>
                </div>
            </div>
            <div ref={pageRef}>
            {children}
            </div>
        </div>
    )
}

export default Stairs
