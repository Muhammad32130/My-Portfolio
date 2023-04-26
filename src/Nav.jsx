import React, { useEffect, useState } from 'react'
import logo from './images/ma-low-resolution-logo-black-on-transparent-background.png'
import svg from './images/icons8-menu.svg'

function Nav({setmodal, modal}) {
  const [clicked, setclicked ] = useState(false) 
  function stateHandler(first, second){
    setmodal(true)
setclicked(second)
  }
  useEffect(()=>{
    if(modal){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "scroll"
    }
  })

  return (
    <div className="h-20 flex w-[100%] items-center overflow-x-hidden border-b border-[gray]">
        <nav className="flex justify-between items-center">
          <div className=" ml-2 lg:ml-8 w-[10%] lg:w-[4%] sm:w-[7%]">
           <img className='invert' src={logo} alt="" />
          </div>
            <img onClick={()=>{setclicked(!clicked)}} className='sm:hidden invert w-[8%] mr-2' src={svg} alt="" />
              <div className=' hidden sm:flex sm:justify-between sm:mr-5'>
              <a className="sm:px-4" href="#">Home</a>
              <a className="sm:px-4"  href="#">About</a>
                <a className="sm:px-4" href="#Projects">Projects</a>
                <a className="sm:px-4" href="#" onClick={stateHandler}>Contact</a>
              </div>
              <div onClick={()=>{setmodal(false)}} className={`absolute w-[100%] h-[100%] top-0 bg-[gray]/30 -z-10 ${clicked && 'z-10'} ${modal && 'z-10'} `}></div>
            <ul className={`mr-2 justify-between absolute right-[10%] w-[80%] top-0 text-white bg-[#0D1830] border-[gray] translate-y-[-100%] bg- border-t-0 rounded-b-xl border ${modal && '-='} -z-10 ${clicked && 'show'}`}>
                <div className="flex flex-col mb-6 mt-4 items-center">
                  <div className='w-[100%] flex justify-end mr-8'>
                  <button className="w-4 text-end" onClick={()=>{setclicked(false)}}>
                    <svg className="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
                  </button>
                  </div>
                  <a className="pt-0" href="">Home</a>
                  <a className="pt-2" href="#">About</a>
                  <a className="pt-2" href="#" onClick={()=>{stateHandler(true, false)}}>Contact</a>
              </div>
            </ul>
        </nav>
      </div>
  )
}

export default Nav