import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import check from '../images/Eo_circle_green_checkmark.svg.png'
import spin from '../images/spin.png'

function Modal({modal, setmodal}) {

    const [loading, setloading] = useState(false)
    const [spinner, setspinner] = useState(false)

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
          setspinner(true)
          emailjs.sendForm('service_4etywk5', 'template_9c9svdw', form.current, 'afAh1yi6uFuDhPzP1')
          .then((result) => {
              setspinner(false)
              setloading(true)
            }, (error) => {
                console.log(error.text);
            });
        };

        function currentloading(){
            if(spinner){
                return(
                    <div className=' flex justify-center items-center h-[80%] w-[100%]' >
<img className=' w-[50%] animate-spin' src={spin} alt="" />
    </div>
                )
            }
            else if(loading){
                return(
                    <div className='bg-[green] w-[100%] absolute top-0 left-0 h-[100%]'>
                        <div className='w-[100%] h-[100%] flex justify-center flex-col items-center'>
                        <img className='w-[20%]' src={check} alt="" />
                            <h1 className='mt-20 mx-8'>
                        Done! I will be in contact with you as soon as possible!
                            </h1>
                        </div>
                    </div>
                )
            }
            
            
        }
    


  return (
    <div className={`${modal ? "z-20": ""} -z-10 absolute top-[60%] md:w-[70%] w-[90%] h-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <div className='flex h-[80%]'>
        <div className={`${modal ? 'translate-y-[0%]': 'translate-y-[100%]' } bg-[#6A4C93] duration-500 transition-all  w-[50%] `}>
            <div className='flex flex-col '>
        <h1 className='pt-12 lg:pt-4 xl:text-[28px] pl-2 lg:mx-2'>
            About Me
        </h1>
        <p className='text-[10px] xl:text-[20px] lg:text-[10px] lg:leading-8 lg:mx-2 md:text-[14px] md:leading-6 px-2 mt-4'>
            Hi I'm from Pakitan and a lifelong student of coding. I attended Bellaire High School and College for coding, but during college I decided to learn coding by myself through a course called frontend simplified and I have made amazing progress so far. I have created projects using JavaScript, HTML, Typescript, CSS, Stripe, Firebase and ETC. Please checkout my projects and contact me so I can be a helpful to your company.
        </p>
            </div>

        </div>
        <div className={`${modal && 'translate-y-[0%] '}bg-[#C7C7CC] xl:pl-6 duration-500 transition-all pt-4 pl-2 w-[50%] translate-y-[-100%]`}>
            <div  onClick={()=>{setmodal(false)}} className='cursor-pointer absolute left-[90%] z-20 w-[100%] pb-4  pr-4'>
            <svg className='w-4 lg:w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </div>
            {(!spinner && !loading) ? 
            <div>

            <h1 className='xl:text-[28px]'>

    Contact Me
            </h1>
    <div className='flex flex-col'>
    <form ref={form} onSubmit={(e)=>sendEmail(e)} className=' mt-10 lg:mt-0'>
        <div className='text-[16px] md:text-[18px] md:mt-4 xl:text-[20px]'>
        <label>Email:</label>
        <input required className='text-[black] md:py-1 md:mt-2 md:text-[14px] xl:text-[18px] text-[10px] outline-none w-[90%] h-[5%]' type="Email" name="user_email" placeholder='e-mail' />
        </div>
        <div className='text-[16px] flex-col flex md:text-[18px] md:mt-4 xl:text-[20px]'>
        <label>Name:</label>
        <input required className='text-[black] md:py-1 md:mt-2 md:text-[14px] xl:text-[18px] text-[10px] outline-none w-[90%] h-[5%]' type="Name" name="user_name" placeholder='Name' />
        </div>
        <div className='text-[16px] md:text-[18px] md:mt-4  xl:text-[20px]'>
        <label>Message:</label>
        <textarea name="message" required className='outline-none text-[black] md:py-1 md:mt-2 md:text-[14px] xl:text-[18px] lg:h-[70px] text-[10px] w-[90%]' id="" cols="15" rows="5"></textarea>
        </div>
        <button value="Send" className='bg-[green] px-2 xl:px-6 xl:text-[20px] mt-4 text-center'>Send It!</button>

    </form>
            </div>
    
    </div> :
   currentloading()
    
    }
        </div>
        </div>
    </div>
  )
}

export default Modal