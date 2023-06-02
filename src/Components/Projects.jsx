import React, { useState } from 'react'
import project1 from '../images/dddd.png'
import project2 from '../images/ddsad.png'
import project3 from '../images/dsicord.png'
import project4 from '../images/dsa2w.png'
import certificate from '../images/Muhammads-Certificate-of-Completion-1.png'
import Modal from './Modal'
import angular from '../images/2048px-Angular_full_color_logo.svg.png'

function Projects({modal, setmodal}) {




  return (
    <section className='  mt-20'>
      <Modal modal={modal} setmodal={setmodal}/>
        <h1 data-aos="zoom-in-right" className=' xl:text-[28px] sm:text-[20px] text-center'>
          What I'm currently learning
        </h1>
        <div className='grid grid-cols-2 sm:gap-x-12 w-fit mx-auto gap-x-10 gap-y-6 items-center mt-10 mb-8'>
        <div className='grid-items'>
          <img className='w-16 sm:w-20' src="https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png" alt="" />
          <h2 className='grid-text'>
          NodeJs
          </h2>
        </div>
      
        <div className='grid-items ml-8'>
          <img className='w-16 sm:w-20' src={angular} alt="" />
          <h2 className='grid-text'>
          Angular
          </h2>
        </div>
        </div>
        {/* Projects */}
       <div id='Projects' className='overflow-x-clip text-center mt-28'>
      
        <h1 className='mb-10 xl:text-[38px] sm:my-16 sm:text-[22px]'>
        My Projects
        </h1>
        <div data-aos="zoom-out-down" className=' w-[100%] overflow-x-clip flex justify-center border-hover py-10 relative mb-10 sm:mb-20'>

          <div className='text-white w-[95%] overflow-x-clip rounded sm:w-[80%] xl:w-[60%] relative overflow-hidden hover-slide'>
        <div className='bg-[gray]/70 overflow-x-clip overlay lg:text-[28px] sm:text-[20px] h-full w-[100%] text-[12px] slide'>
          <div className=' overflow-x-clip mt-2 xl:mt-6'>
Netflix Clone
<p className='text-[10px] xl:text-[24px] font-light xl:mt-6 xl:mb-8 lg:leading-10 lg:text-[22px] lg:px-2 lg:mb-2 sm:text-[14px] sm:mt-6'>
This Project is a clone of Netflix. It takes backend data from TMDB movies and youtube API and uses it to show you movies from the API. The website also has trailers for each of the movies and real ratings. It also has a checkout made with stripe and accounts made with firebase. The project was made mainly using TypeScript.
</p>
          </div>
<div className='flex justify-center mt-1 invert overflow-x-hidden'>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://github.com/Muhammad32130/Netflix__clone__project" ><svg className="hoover__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://netflix-clone-project-sigma.vercel.app/"><svg  className="hoover__svg hoover__svg--link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
</div>
        </div>
        <img className='w-[100%]' src={project1} alt="" />
          </div>
        </div>
        <div data-aos="zoom-out-up" className='w-[100%] overflow-x-clip flex justify-center mb-10 sm:mb-20'>
          <div className='text-white w-[95%] overflow-x-clip rounded sm:w-[80%] xl:w-[60%] relative overflow-hidden hover-slide'>
        <div className='bg-[gray]/70 overflow-x-clip overlay lg:text-[28px] sm:text-[20px] h-full w-[100%] text-[12px] slide'>
          <div className=' overflow-x-clip mt-2 xl:mt-6'>
E-Commerce
<p className='text-[10px] xl:text-[24px] font-light xl:mt-10 xl:mb-10 lg:leading-10 lg:text-[22px] lg:px-2 lg:mb-2 sm:text-[14px] sm:mt-6'>
This project was designed and made by Muhammad Askari. It is a website that takes data from backend and allows the users browse through books and buy them, the website has a cart and filters for you to find the best books. The website was created mainly using JavaScript and HTML. 
</p>
          </div>
<div className='flex justify-center mt-1 invert overflow-x-hidden'>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://github.com/Muhammad32130/Book-Project" ><svg className="hoover__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://muhammad32130.github.io/Book-Project/"><svg  className="hoover__svg hoover__svg--link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
</div>
        </div>
        <img className='w-[100%]' src={project2} alt="" />
          </div>
        </div>
        <div data-aos="zoom-out-left" className='w-[100%] overflow-x-clip flex justify-center mb-10 sm:mb-20 '>
          <div className='text-white w-[95%] overflow-x-clip rounded sm:w-[80%] xl:w-[60%] relative overflow-hidden hover-slide'>
        <div className='bg-[gray]/70 overflow-x-clip lg:text-[28px] overlay sm:text-[20px] h-full w-[100%] text-[12px] slide'>
          <div className=' overflow-x-clip mt-2 xl:mt-6'>
Discord Clone
<p className='text-[10px] xl:text-[24px] font-light xl:mt-4 xl:mb-2 lg:leading-10 lg:text-[22px] lg:px-2 lg:mb-2 sm:text-[14px] sm:mt-6'>
This project was designed and made by Muhammad Askari. It is a clone of a well known Gaming/Communication application called Discord. The application allows users to communicate with one another without any delays. All the data is being uploaded to firebase and firestore. It is also printing realtime data at all times to ensure no delays.
</p>
          </div>
<div className='flex justify-center mt-1 invert overflow-x-hidden'>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://github.com/Muhammad32130/Discord-Clone" ><svg className="hoover__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://discord-clone-eosin-two.vercel.app"><svg  className="hoover__svg hoover__svg--link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
</div>
        </div>
        <img className='w-[100%]' src={project3} alt="" />
          </div>
        </div>
        <div data-aos="zoom-out-right" className='overflow-x-clip flex justify-center'>
          <div className='text-white w-[95%] overflow-x-clip rounded sm:w-[80%] xl:w-[60%] relative overflow-hidden hover-slide'>
        <div className='bg-[gray]/70 overflow-x-clip lg:text-[28px] overlay sm:text-[20px] h-full w-[100%] text-[12px] slide'>
          <div className=' overflow-x-clip mt-2 xl:mt-6'>
          Forum Website
<p className='text-[10px] xl:text-[24px] font-light xl:mt-10 xl:mb-8 lg:leading-10 lg:text-[22px] lg:px-2 lg:mb-2 sm:text-[14px] sm:mt-6'>
This is a simple forum site like reddit made for users to chat and discuss, the site asks has login functionality with firebase and uses firestore for data. It also allows users to edit their posts and their account settings.
</p>
          </div>
<div className='flex justify-center mt-1 invert overflow-x-hidden'>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://github.com/Muhammad32130/Forum-Website"><svg className="hoover__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
                <a className="w-4 lg:w-8 mx-2 sm:mt-4 sm:w-6" target='_blank' href="https://forum-website-seven.vercel.app"><svg  className="hoover__svg hoover__svg--link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
</div>
        </div>
        <img className='w-[100%]' src={project4} alt="" />
          </div>
        </div>
        <div id='#certificate' className='text-center mt-28'>
          <h1 className='mb-10 xl:text-[38px] sm:my-16 sm:text-[22px]'>
          Certifications
          </h1>
          <div className='w-[95%] shadow-xl mx-auto overflow-x-clip rounded sm:w-[80%] xl:w-[60%] relative overflow-hidden hover-slide'>
            <img className='w-[100%]' src={certificate} alt="" />
          </div>
        </div>
       </div>
      
    </section>
  )
}

export default Projects