import React from 'react'

export default function Header() {
  return (
    <div style={{fontFamily:"Poppins"}} className=' nav-bar  fixed w-full flex bg-stone-700 text-pink-50 justify-between text-center m-0 p-0 ' >
     <div className='nav-img  pt-5 pb-5 ml-20'>
       
        <h1 className=' inline text-xl ml-8 font-bold hover:text-pink-300 '>Resume</h1>
     </div>
     <div className='nav-txt pt-5  mr-28 pb-5 text-lg '>
        <ul>
            <li  className=' inline mr-9 ml-4 '><a href="#Home">Home</a></li>
            <li  className=' inline mr-9'><a href="#About">About</a></li>
            <li  className=' inline mr-9'><a href="#Education">Academic</a></li>
            <li  className=' inline mr-9'><a href="#Skills">Skills</a></li>
            <li  className=' inline mr-9'><a href="#Projects">Projects</a></li>
            <li  className=' inline mr-9 '><a href="#contact">Contact</a></li>
        </ul>
     </div>
    </div>
  )
}
