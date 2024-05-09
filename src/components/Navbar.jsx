import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {BsToggle2On} from 'react-icons/bs'
import {BsToggle2Off} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'

import Doctor from './Doctor.png'

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
 
  return (
    <>
    <div><nav className={`bg-red-500   max-sm:w-20 max-sm:h-12 max-sm:bg-white  h-screen w-52  ${darkMode && 'bg-slate-900'}`}>
       <MdDarkMode className='text-white absolute top-[536px] left-20 '/>
      
      {
      darkMode ? 
           <BsToggle2On className='absolute top-[536px] left-28 text-white font-extrabold' onClick={()=>setDarkMode(!darkMode)} />
          
        :
           <BsToggle2Off className='absolute top-[536px] left-28 text-white font-extrabold' onClick={()=>setDarkMode(!darkMode)}/>
      }
      {
        toggle ?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white  md:hidden block ml-8 max-sm:text-black' />
        :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white md:hidden block ml-8 max-sm:text-black'/>
      }
        <ul className=' flex flex-col items-center '>
            <div className='text-white font-extrabold mt-9 cursor-pointer hover:text-yellow-200 duration-500 hover:scale-150 max-sm:hidden'><AiOutlineHome/></div>
            <li className='mt-10 text-2xl  text-white font-bold hover:text-yellow-200 duration-500 cursor-pointer hover:scale-125 max-sm:hidden'>Medicines</li>
            <li className=' mt-10 text-2xl text-white font-bold  hover:text-yellow-200 duration-500 cursor-pointer hover:scale-125 max-sm:hidden'>Doctors</li>
            <li className=' mt-10 text-2xl text-white font-bold  hover:text-yellow-200 duration-500 cursor-pointer hover:scale-125 max-sm:hidden'>Stores</li>
            <li className=' mt-10 text-2xl text-white font-bold  hover:text-yellow-200 duration-500 cursor-pointer hover:scale-125 max-sm:hidden'>Contact</li>
            <img className='max-sm:hidden mt-10 w-32 h-32 cursor-pointer hover:scale-125 duration-500' src={Doctor} alt="fsa" />
        </ul>
        </nav>
       <ul className={`duration-300 max-sm:block md:hidden bg-red-500 fixed h-screen text-white font-bold top-98[px] ${toggle ? 'left-[0]': 'left-[-100%]'}`}>
        <li className='mt-0 p-10 text-3xl  flex justify-center'>Medicines</li>
        <li className='mt-0 p-10 text-3xl flex justify-center'>Doctors</li>
        <li className='mt-0 p-10 text-3xl flex justify-center'>Stores</li>
        <li className='mt-0 p-10 text-3xl flex justify-center'>Contact</li>
       </ul>
    </div>
    <div>
      <footer className={`w-[100%] bg-red-400 h-20'> ${darkMode && 'bg-slate-700 text-white'}`}>
        <h1 className='flex justify-center text-white font-bold p-5'>ALL Copyrights Reserved © 2023 @Medicure™  </h1>
       <div className=' flex absolute top-[740px] left-[1400px] pb-[-15px] space-x-2 cursor-pointer hover:text-white duration-100'>  <AiFillYoutube/> <AiFillInstagram/> <AiFillFacebook/> </div>
        <div className='absolute top-[730px] space-y-2 cursor-pointer left-[1100px]' ><IoLogoWhatsapp/> <BsFillTelephoneFill/>
        <h4 className='text-white font-mono font-bold absolute top-[-12px] left-[30px]'>+91 9856729473</h4>
       
        </div>
       
       
      </footer>
    </div>
    </>   
  )
}
