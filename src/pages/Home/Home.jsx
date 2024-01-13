import React from 'react'
import "./Home.css"
import Aside from '../../components/aside/Aside'
import Dashboard from '../../components/Dashboard/Dashboard'

function Home() {
  return (
    <div className='home'>
      <Aside />
      <Dashboard />
    </div>
  )
}

export default Home