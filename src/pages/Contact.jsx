import React from 'react'
import Header from '../components/header'
import '../App2.css'
import Lottie from "lottie-react";
import laptopAnimation from '../components/138767-laptop-animatiion.json'

const Contact = () => {
  return (
  <>
<div className='overflow-hidden'>
<div className='bg-[#290f99] h-full w-full'>
  <Header ></Header>
  <div>
    <Lottie animationData={laptopAnimation} className="h-100"/>
  </div>
  
  {/* <div className="background ml-[30rem]">
        <div className="shape mt-[5rem] ml-10" ></div>
        <div className="shape"></div>
    </div> */}
      <form action="" className="login_form mt-28 ml-[30rem]">

      <h1 className='text-2xl mt-10'>Welcome back!</h1>
  <p className='text-2xl mt-4 mb-20'>Login to your account.</p>
  <input type="email" placeholder="Email address"/>
  <input type="password" placeholder="Password" className='mt-10'/>
  <button type="submit" className='bg-white'>Login</button>
      </form></div>
  

  
  
  
      </div>
  </>
   
  )
}

export default Contact