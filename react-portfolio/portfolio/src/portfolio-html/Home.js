import React from 'react'
import Profilepic from './Image/profile-image.jpg'
import './Nav.css'
export default function Home() {
  return (
    <>
    <div  style={{fontFamily:"Poppins"}} className=' home-sec flex h-4/5 bg-fixed text-slate-800' id="Home">
        <div className=' border-none ml-40  mt-40 p-8 '>
        <p className='  pt-8 text-xl' >Hello, my name is Krishnakumar</p>
        <h1 className=' home-txt pt-3 text-3xl'>I'M a Developer</h1>
        <p className=' border-none w-4/5 text-lg  pt-8 pb-14 '>Dedicated and detail-oriented Full Stack Developer with 2 years of experience in designing, developing, and implementing web applications and solutions. Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and SQL databases.</p>
         
         <button type='submit' className='mt-16 border text-lg font-semibold text-white rounded-full p-3 w-40 bg-blue-700 hover:bg-cyan-400'>Resume</button>
        </div>
        <div className='home-img   mr-36   '>
            <img className='mt-40 m rounded-xl border-none shadow-md    hover:shadow-emerald-300 ' style={{ width:"1000px"}} src={Profilepic} alt=""/>
        </div>
    </div>
</>
  )
}
