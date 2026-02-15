import React from 'react'
import bgvideo from "/BG/BG_1.mp4"

const Video = () => {
  return (
    <video autoPlay loop muted className='h-full w-full object-cover' src={bgvideo}/>
  )
}

export default Video