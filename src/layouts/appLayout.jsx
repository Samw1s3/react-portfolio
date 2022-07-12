import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer/footer'


export default function appLayout(props) {
  return (
    <main>
        
        {/* nav */}
        <Navbar></Navbar>
        {props.children}

        {/* footer */}
        <Footer></Footer>
    </main>
  )
}
