import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
<i class="faSolid faCircleNodes"></i>
const header = (props) => {
  return (
    <>
   <nav className={`navbar navbar-default ${props.color} bg-transparent`}>
    <div className="container">
      <div className="navbar-header">
        <p className="navbar-brand bg-transparent " > <span className="icon"> <FontAwesomeIcon icon={faCircleNodes} size="2xl" /></span>
        <span  style={{color: "white"}}>  INNOVATION CENTER</span>
        
      </p>
      </div>
        <ul className="nav navbar-nav navbar-right mt-4 rounded-xl gap-3 ">
         
          <li id="home" className=' rounded-3xl hover:drop-shadow-xl'><a href="/" className='text-white' style={{color: "white"}}>HOME</a></li>
          <li id="compose" className=' rounded-3xl hover:drop-shadow-xl'><a href="/compose" className='text-white' style={{color: "white"}}>COMPOSE</a></li>
          <li id="contact" className=' rounded-3xl hover:drop-shadow-xl'><a href="/contact" style={{color: "white"}}>CONTACT US</a></li>
        </ul>
    </div>
  </nav>

    
    
    
    
    
    
    </>
  )
}

export default header