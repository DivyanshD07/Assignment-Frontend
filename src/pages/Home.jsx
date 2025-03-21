import React from 'react'
import Hero from './HomeSections/Hero'
import Facts from './HomeSections/Facts'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <Facts />
    </div>
  )
}

export default Home