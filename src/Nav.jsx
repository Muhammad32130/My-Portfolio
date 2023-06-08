import React, { useEffect, useState } from 'react'
import logo from './images/Logoo.png'
import svg from './images/icons8-menu.svg'
import invert from './images/61136.png'
import resume from './FES RESUME (4).pdf'

function Nav({setmodal, modal, ivert, setinvert}) {
  const [clicked, setclicked ] = useState(false) 
  function stateHandler(first, second){
    setmodal(true)
setclicked(second)
  }
  useEffect(()=>{
    if(modal || clicked){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "scroll"
    }
  })
  function clickHandle(){
    if(modal||clicked){
      setmodal(false)
      setclicked(false)
    }
  }
  useEffect(()=>{
    
  })
  function invertHandle(){
    const background = document.querySelectorAll('.bg')
    setinvert(!ivert)
    if(!ivert){
      document.body.style.color = 'black'
        background[0].style.backgroundColor= "#ffe6ff"
      background[0].classList.remove("background")
      
    }else if(ivert){
      document.body.style.color = "white"
      background[0].classList.add("background")
    }
  }

  return (<>
    <div className="h-20 flex w-[100%] items-center justify-end overflow-x-clip border-[gray]">
        <nav className="flex justify-end">
          
            <img onClick={()=>{setclicked(!clicked)}} className='sm:hidden invert w-[8%] mr-2' src={svg} alt="" />
              <div className=' hidden sm:flex sm:justify-between sm:mr-5'>
              <a className="sm:px-4" href="#">Home</a>
              <a className="sm:px-4"  href="#">About</a>
                <a className="sm:px-4" href="#Projects">Projects</a>
                <a className="sm:px-4" href="#" onClick={stateHandler}>Contact</a>
                <a className="sm:px-4" href='#' onClick={()=>invertHandle()} ><img className={`w-6 invert ${ivert&&'invert-0'}`} src={invert} alt="" /></a>
              </div>
              <div onClick={()=>{clickHandle()}} className={`absolute w-[100%] h-screen top-0 bg-[gray]/30 -z-10 ${clicked && 'z-10'} ${modal && 'z-10'} `}></div>
            <ul className={`mr-2 justify-between absolute right-[10%] w-[80%] top-0  bg-[#0D1830] border-[gray] translate-y-[-100%] bg- border-t-0 rounded-b-xl border ${modal && '-='} -z-10 ${clicked && 'show'}`}>
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
      <div className='fixed h-[100%] w-10 top-0 bg-[#1a1818]'>
        <div className='flex flex-col items-center justify-between h-[100%]'>
      <img className={`invert mt-6 w-[100%] ${ivert && 'invert-0'}`} src={logo} alt="" />
        <div>
        <div className={`flex flex-col ${ivert && 'invert'} justify-center lg:justify-start sm:mt-4 xl:mt-6 mt-2`}>
    <a className="w-4 invert my-3" href="https://github.com/Muhammad32130" target="_blank"><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
    <a className="w-4 invert my-3" href={resume} download><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/></svg></a>
    <a className="w-4 invert my-3" href="https://linkedin.com" target="_blank"><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
    </div>

        </div>
        </div>
      </div>
  </>
  )
}

export default Nav