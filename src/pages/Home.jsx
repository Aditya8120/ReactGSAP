import React from 'react'
import Video from '../components/Home/Video'
import HomeTT from '../components/Home/HomeTT'
import HomeBT from '../components/Home/HomeBT'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Navbar/Menu'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Menu/> */}
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between text-white'>
        <HomeTT/>
        <HomeBT/>
      </div>
    </div>
  )
}

export default Home