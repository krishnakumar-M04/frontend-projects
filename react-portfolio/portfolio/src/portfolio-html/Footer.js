import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div style={{fontFamily:"Poppins"}} className=' footer-sec flex justify-between h-16  border-t-2 border-solid w-full border-black'>
        <div className=' mt-10 mb-10 ml-10 text-lg font-medium'>
            <h1>Resume</h1>
       </div>
       <div  className=' mt-10 mb-10 text-center'>
        <p> Copyright &copy; 2024</p>
        </div>
        <div  className=' mt-10 mb-10 mr-10'>
            <a href='/'> <FontAwesomeIcon icon={faYoutube} size="80px" color="#FF0000" className=' w-14' /></a>
            <a href='/' className=' w-14'><FontAwesomeIcon icon={faFacebook} size="80px" color="#3b5998"  /></a>
            <a href='/'> <FontAwesomeIcon icon={faInstagram} size="80px" color="#E1306C" className=' w-14' /></a>
        </div>
    </div>
  )
}
