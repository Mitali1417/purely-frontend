import React from 'react'
import Navbar from '../components/Navbar'
import QueryForm from '../components/QueryForm'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className={`relative overflow-hidden`}>
      <Navbar/>
      <QueryForm/>
      <Footer/>
    </div>
  )
}

export default ContactPage
