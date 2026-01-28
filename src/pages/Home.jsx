import React from 'react'
import Video from '../components/Home/Video'
import HomeTT from '../components/Home/HomeTT'
import HomeBT from '../components/Home/HomeBT'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col text-white'>
        <HomeTT/>
        <HomeBT/>
      </div>
    </div>
  )
}

export default Home