import React from 'react'
import Doctormale from './Doctormale.png'
import {BsToggle2On} from 'react-icons/bs'
import {BsToggle2Off} from 'react-icons/bs'

export default function MainBody() {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <>
   
   {
      darkMode ? 
           <BsToggle2On className='absolute top-[536px] left-36 text-white font-extrabold' onClick={()=>setDarkMode(!darkMode)} />
          
        :
           <BsToggle2Off className='absolute top-[536px] left-36 text-white font-extrabold' onClick={()=>setDarkMode(!darkMode)}/>
      }
      
    <div className={`max-sm:w-full max-sm:h-screen w-[86%] h-[710px] absolute top-0  left-52  bg-blue-100 ${darkMode && 'bg-slate-800 text-white'} '}`}>
        <h1 className=' mt-32 ml-20 font-mono text-6xl'>Get All The Cures!</h1>
        <p className=' mt-12 ml-20 font-mono font-bold'>Doctors are one of the most important people in our <br /> society. They are lifesavers. They are the first ones to lend <br /> a helping hand when someone is struggling. Many <br /> parents dream that their children might become doctors in the future. <br /> Doctors are the ones who have a lot of knowledge about all diseases. <br /> This article has sample paragraphs about doctors and their importance in society.</p>
        <button className={`bg-red-500 hover:bg-yellow-800 w-40 h-16 mt-6 ml-20 rounded hover:rounded-3xl text-white font-mono font-extrabold  duration-150 ${darkMode && 'bg-yellow-900'}}`}>Get Started!</button>
        <img className='absolute ml-[856px] top-10 w-92 h-[456px]' src={Doctormale} alt="" />
    </div>
    </>
  )
}

       
