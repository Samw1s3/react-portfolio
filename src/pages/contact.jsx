import React from 'react'
import css from './Pages.module.css'; 
import ContactForm from '../components/contact';


export default function Contact() {
  return (
    <body className={css.body}>
      <h1>Contact</h1>
      <p>If you would further information about me or would like to chat about something specific, please fill out the contact form below.</p>
      <p className={css.alert}>Please note this contact form is currently just front-end, back-end is in development</p>  
      <ContactForm></ContactForm>
      <p>If you would like a copy of my resume please click below</p>
      <a className={css.resumeButton} href='/SamanthaKTechnicalResume.pdf' download>RESUME DOWNLOAD</a>
    </body>
  )
  
}
