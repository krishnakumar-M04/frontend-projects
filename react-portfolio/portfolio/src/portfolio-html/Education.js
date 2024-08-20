import React from 'react'
import Image from './Image/school-solid.jpg'
import './Nav.css'
export default function Education() {
  return (
    <div style={{fontFamily:"Poppins"}} className='Education-sec grid' id='Education'>
      <div className='Education-header'>
       <h1 className=' text-black  text-center text-3xl  mt-10 font-bold  p-3 mb-2 '>
                Academic Details
            </h1>
            </div>
        <div className=' Education-details grid mt-20 grid-cols-3 ml-10 mr-10 hover:cursor-pointer'>
        
            <div className='  border-none mt-8  ml-10 shadow-md shadow-stone-500 border-black rounded-xl  hover:shadow-orange-200'>
                <div className=' Education-inner border-none  border-black rounded-xl  text-xl bg-gray-50'>
                <img className=' inline border-none pl-40 pt-2   pb-0 rounded-md ' src={Image} alt=""/>
                <h2 className='text-center text-white font-extrabold'>College Details</h2>
                </div>
                <br/>
                <div className='text-left ml-5 pr-6 pl-6 pt-0 pb-8 text-lg'>
                  <h2  className='font-bold'>College Name: <p className=' inline font-medium'> SNS College of Technology</p></h2>  
                  <h2 className='font-bold'>Stream: <p className=' inline font-medium'> Agriculture Engineering</p></h2> 
                  <h2 className='font-bold'>Year Of PassedOut: <p className=' inline font-medium'> 2022</p> </h2>
                  <h2 className='font-bold' >Percentage: <p className=' inline font-medium'>85%</p></h2> 

                </div>
            </div>
            <div className=' Education-inner border-none shadow-md shadow-stone-500 border-black rounded-xl mt-8 ml-10 hover:shadow-orange-200'>
                <div className='border-none  border-black text-xl rounded-xl bg-gray-50'>
            <img className=' inline pl-40 pt-2   pb-0 rounded-t-lg' src={Image} alt=""/>
                <h2 className='text-center  text-white font-extrabold'>HSC Details</h2>
                </div>
                <br/>
                <div className='text-left ml-5 pr-6 pl-6 pt-0 pb-8 text-lg '>
                  <h2 className='font-bold'>School Name: <p className=' inline font-medium'> SRI SRV Matric Hr.Sec School</p> </h2> 
                  <h2 className='font-bold'>Group: <p  className=' inline font-medium'> Maths Biology</p></h2> 
                  <h2 className='font-bold'>Year Of PassedOut: <p  className=' inline font-medium'> 2018</p></h2> 
                  <h2 className='font-bold'>Percentage: <p  className=' inline font-medium'>90%</p></h2> 

                </div>

            </div>
            <div className=' Education-inner border-none  shadow-md mt-8  ml-10  shadow-stone-500 border-black  rounded-xl  hover:shadow-orange-200 '>
                <div className=' border-none  border-black text-xl rounded-xl bg-gray-50'>
            <img className=' inline  border-none pl-40 pt-2   pb-0 rounded-md ' src={Image} alt=""/>
                <h2 className='text-center  text-white font-extrabold'>SSLC Details</h2>
            
                </div>
                <br/>
                <div className='text-left ml-5 pr-6 pl-6 pt-0 pb-8  text-lg'>
                  <h2 className='font-bold'>School Name: <p  className=' inline font-medium'> SRI SRV Matric Hr.Sec School</p></h2> 
                  <h2 className='font-bold'>Year Of PassedOut: <p  className=' inline font-medium'> 2016</p> </h2>
                  <h2 className='font-bold'>Percentage:  <p className=' inline font-medium'>95%</p></h2>

                </div>

            </div>
        </div>
      
    </div>
  )
}
