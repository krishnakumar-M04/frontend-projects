import React from 'react'
import Mobile from'./Image/mobile-alt-solid.jpg'
import Email from'./Image/mail-bulk-solid.jpg'
import Address from'./Image/location-arrow-solid.jpg'
import './Nav.css'
export default function Contact() {
  return (
    <div style={{fontFamily:"Poppins"}} className=' contact-sec flex flex-shrink-1 justify-center ml-36 mt-20  mr-36' id='contact'>
    <div className=' border-none rounded-xl  bg-slate-50 shadow-lg w-64 text-center m-10 hover:shadow-gray-300 '>
      
        <img  className=" pl-24 pt-5 pb-5 " style={{width:"150px", height:"100px"}} src={Mobile} alt=''/>
        <h1 className=' text-xl font-semibold'>Call Us</h1>
    
    <p className=' p-5' >+91 63837426876</p>
    </div>
    <div className='border-none rounded-xl  bg-slate-50 shadow-lg w-72 text-center m-10  hover:shadow-gray-300'>
      <img  className=" pl-24 ml-4 pt-5 pb-5" style={{width:"150px", height:"100px"}} src={Email} alt=""/>
      <h1  className='pb-5 text-xl font-semibold'>Email Us</h1>
  <a className=" text-blue-600"href="mailto:krishnakumarm432@gmail.com" >krishnakumarm432@gmail.com</a>
    </div>
    <div className=' border-none rounded-xl  bg-slate-50 shadow-lg w-64 text-center m-10  hover:shadow-gray-300'>
      <img  className=" pl-24 mr-3 pt-7 pb-6" style={{width:"150px", height:"100px"}} src={Address} alt=""/>
      <h1 className='text-xl font-semibold'  >Address</h1>
      <p className=' pt-5' > Aswath Nagar, Marathahalli,</p>
      <p> Bangalore, Karnataka.</p>
      <p className=' p-5' >Pincode:636108.</p>
  
  </div>
    </div>
  )
}
