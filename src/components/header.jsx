import React from 'react'
import '../App.css'

const header = () => {
  return (
    <>
   <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <p className="navbar-brand">DAILY JOURNAL</p>
      </div>
        <ul className="nav navbar-nav navbar-right">
         
          <li id="home"><a href="/home">HOME</a></li>
          <li id="compose"><a href="/compose">COMPOSE</a></li>
          <li id="contact"><a href="/contact">CONTACT US</a></li>
        </ul>
    </div>
  </nav>

    
    
    
    
    
    
    </>
  )
}

export default header