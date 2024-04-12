import React from 'react'
import IgFeed from '../components/IgFeed'
import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'

const FeedPage = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <NaviBar></NaviBar>
      <IgFeed></IgFeed>
      <Footer></Footer>
    </div>
  )
}

export default FeedPage
