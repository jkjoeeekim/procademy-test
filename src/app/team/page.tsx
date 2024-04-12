import React from 'react'
import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'
import TeamMembers from './TeamMembers'

const TeamPage = () => {
  return (
    <main className=''>
      <NaviBar></NaviBar>
      <div className=''>
        <TeamMembers></TeamMembers>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default TeamPage