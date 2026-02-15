import React from 'react'

const ProjectCards = ({ Im1, Im2 }) => {
    return (

        <>
            <div className='lg:w-1/2 h-full group relative rounded-none hover:rounded-4xl hover:scale-101 transition-all ease-out bg-green-50 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Im1} alt="img" />
                <div className='absolute opacity-0 group-hover:opacity-100 top-0 left-0 h-full w-full flex items-center justify-center bg-black/20 transition-all ease-out'>
                    <h2 className='font-[font1] uppercase text-4xl pt-2 border-2 rounded-full px-4 text-white'>Project</h2>
                </div>
            </div>
            <div className='lg:w-1/2 h-full group relative rounded-none hover:rounded-4xl hover:scale-101 transition-all ease-out bg-green-50 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Im2} alt="img" />
                <div className='absolute opacity-0 group-hover:opacity-100 top-0 left-0 h-full w-full flex items-center justify-center bg-black/20 transition-all ease-out'>
                    <h2 className='font-[font1] uppercase text-4xl pt-2 border-2 rounded-full px-4 text-white'>Project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCards
