import React, { useState } from 'react'
import Nav from './Nav'
import Intro from './Components/Intro'
import Projects from './Components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer';
import Particles from "react"
import particlesConfig from './Components/config/config';
function App() {
  const [modal, setmodal] = useState(null)
  const [ivert, setinvert] = useState(false)

  return (
    <div className='bg-[#141414]  h-full '>
    <Nav ivert={ivert} setinvert={setinvert} setmodal={setmodal} modal={modal} />
    <Intro ivert={ivert} setinvert={setinvert}/>
    <Projects setmodal={setmodal} modal={modal}/>
    <Footer setmodal={setmodal} modal={modal}></Footer>
    </div>
  )
}
AOS.init({once:true});

export default App