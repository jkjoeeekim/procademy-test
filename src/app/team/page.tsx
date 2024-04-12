import React from 'react'
import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'
import TeamMembers from './TeamMembers'

const TeamPage = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <NaviBar></NaviBar>
      <TeamMembers></TeamMembers>
      <Footer></Footer>
    </div>
  )
}

export default TeamPage