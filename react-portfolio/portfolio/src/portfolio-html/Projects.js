import React from 'react';
import './Nav.css';
import Port from './Image/port.jpg'
import Farm from './Image/farm1.jpg'
import Random from './Image/random1.jpg'
import Travel from './Image/travel.jpg'

export default function Projects() {
  return (
    <div className='Project-sec flex flex-shrink-1 m-3' id='Projects' style={{fontFamily:"Poppins"}}>
         <div className=' w-2/4 '>
            <h1 className=' text-3xl font-bold mt-80 mb-20 text-center  align-middle'>Projects</h1>
            
         </div>
          
        <div className='Project-details grid grid-cols-2 ml-10 mt-20 justify-between '>
           <div className=' Project-inner mr-6 ease-out delay-150'>
                <div className='border-none rounded-xl shadow-lg shadow-stone-500 mr-10  border-black  m-4 hover:shadow-cyan-700 '>
                <img className=' inline border-none w-96 h-62  rounded-xl ' src={Farm} alt=""/>
             
               
                 <div className='text-left ml-5 pt-10 pl-8 pr-8 pb-10 text-lg '>
                  <h2  className='font-bold'>Project Name: <p className=' inline font-medium text-lg'> Farmland</p></h2>  
                  <h2 className='font-bold '>Website: <a className=' inline text-lg text-stone-500 animate-pulse' href="/">www.org.com</a></h2> 
                
                </div>
                </div>
                </div> 

            <div className=' mr-6'>
                <div className='border-none rounded-xl shadow-lg shadow-stone-500 mr-10  border-black  m-4 hover:shadow-cyan-700 '>
                <img className=' inline border-none w-96 h-62  rounded-xl ' src={Travel} alt=""/>
             
                
                 <div className='text-left ml-5 pt-10 pl-8 pr-8 pb-8 text-lg '>
                  <h2  className='font-bold'>Project Name: <p className=' inline font-medium text-lg'> Travel Destination</p></h2>  
                  <h2 className='font-bold '>Website: <a className=' inline text-lg text-stone-500 animate-pulse' href="/">www.org.com</a></h2> 
                </div>
                </div>
                </div>
            
            <div className=' mr-6'>
                <div className='border-none rounded-xl shadow-lg shadow-stone-500 mr-10  border-black  m-4 hover:shadow-cyan-700 '>
                <img className=' inline border-none w-96 h-62  rounded-xl ' src={Random} alt=""/>
             
                
                 <div className='text-left ml-5 pt-10 pl-8 pr-8 pb-10 text-lg '>
                  <h2  className='font-bold'>Project Name: <p className=' inline font-medium text-lg'> Random Password Generator</p></h2>  
                  <h2 className='font-bold '>Website: <a className=' inline text-lg text-stone-500 animate-pulse' href="/">www.org.com</a></h2> 
                </div>
                </div>
                </div>   

            <div className=' mr-6'>
                <div className='border-none rounded-xl shadow-lg shadow-stone-500 mr-10  border-black  m-4 hover:shadow-cyan-700 '>
                <img className=' inline border-none w-96 h-52 rounded-xl ' style={{ width:"300", height:"300"}} src={Port} alt=""/>
             
              
                 <div className='text-left ml-5 pt-10 pl-8 pr-8 pb-10 text-lg '>
                  <h2  className='font-bold'>Project Name: <p className=' inline font-medium text-lg'> Portfolio</p></h2>  
                  <h2 className='font-bold '>Website: <a className=' inline text-lg text-stone-500 animate-pulse' href="/">www.org.com</a></h2> 
                </div>
                </div>   
                </div>
        </div>
               
    
    
    </div>
  )
}
