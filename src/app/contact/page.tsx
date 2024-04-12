import React from 'react'
import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'
import ContactForm from '../home/ContactForm'

const ContactPage = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <NaviBar></NaviBar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
