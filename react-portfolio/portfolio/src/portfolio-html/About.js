import React from 'react'
import Image from './Image/10001.jpg'
import './Nav.css'

export default function About() {

  
  return (
    <div className=' About-sec flex justify-between mt-20 ml-40' id='About' style={{fontFamily:"Poppins"}} >
      <div className='about-img '>
        <img style={{width:"1500px", height:"400px", marginTop:"50px"}} src={Image} alt=''/>
      </div>
      <div className='ml-5 p-5'>
        <h1 className='text-3xl font-bold' >About Me</h1>
        <h6 className=' text-base pt-4 pl-5 font-medium'>I am a Full Stack Web Developer</h6>
        <p className=' text-base w-5/6 pl-5 pt-5'> 

         Hi, I'm Krishnakumar M, a Web Developer with 2 years of experience in IT sector. I specialize in Application Development and hold a Bachelore of Engineering  from SNS College Of Technology. I’m passionate about IT sector and enjoy Travel and Learn new things in my free time. My goal is to achieve a good postion where i can guide my juniors to reach their goal. Explore my portfolio to see my work, and feel free to connect with me for collaboration or inquiries. 
        </p>
      <br></br>
        <div className='grid grid-cols-2'>
        <div className='m-5 '>
            
            <h2 className='  font-bold '>Name:<p  className='inline font-normal'> Krishnakumar M</p></h2>
            </div>
            <div className='m-5 '>
            <h2 className=' inline-block font-bold '>Email:<a  className=' inline font-normal  text-blue-600' href="mailto:krishnakumarm432@gmail.com"> krishnakumarm432@gmail.com</a></h2>
            </div>
            <div className='m-5 '>
            <h2 className='font-bold '>Age:<p  className=' inline font-normal'> 24</p></h2>
            </div>
            <div className='m-5 '>
              <h2 className='font-bold '>From:<p  className=' inline font-normal'> Tamil Nadu,Salem</p></h2>
            </div>
        </div>
        <div>
        <button className='m-5 border p-2 text-base font-medium text-white rounded-full w-32 border-black bg-blue-800  hover:bg-cyan-400' type="submit">Resume</button>
        <button className='m-5 border ml-20 p-2 text-base font-medium rounded-full w-32 border-black' type="button">Experience</button>
        </div>
      </div>
    </div>
  )
}
