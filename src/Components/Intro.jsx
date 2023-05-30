import React, { useEffect, useState } from 'react'
import svg from "../images/undraw_remotely_-2-j6y.svg"
import profile from "../images/profile.jpg"
import TagCloud from 'TagCloud';
import resume from '../FES RESUME (4).pdf'


function Intro({ivert, setinvert}) {
    const [loaded, setload] = useState(false)
    const [showmore, setshow] = useState(false)

    const container = '.tagcloud';
    const texts = [
        'JavaScript', 'ReactJS', 'HTML5',
        'CSS3', 'TailwindCSS', 'Git','Firebase', 'Redux'
        ,"NEXTJS", "TypeScript"
    ];
    const options = {
        keep: true,
        radius: 200,
    };

    useEffect(() => {

        TagCloud(container, texts, options)
    }, [loaded])




    return (
        <div id="particles-js" className='h-[calc(100%-5rem)] flex justify-center '>
            <div className='mt-24 mx-2 flex flex-col items-center'>
                <div>
                    <div className='flex mx-4 xl:mx-10 2xl:mb-4 lg:mb-8'>
                        <div className="lg:w-[50%] 2xl:w-[45%] 2xl:mb-[200px] ">
                            <h1 data-aos="fade-down" className='xl:text-[32px] xl:mt-6 lg:leading-9 lg:text-start sm:text-[24px] sm:mb-8 text-[20px] leading-8 text-center'>
                                Hi, <br /> I'm Muhammad Askari
                            </h1>
                            <p data-aos="fade-up" className='xl:text-[26px] lg:leading-9  xl:mt-10 xl:leading-loose lg:text-start lg:w-[100%] sm:text-[18px] sm:mt-4 text-center mt-4 text-sm leading-7'>
                                I'm learning to become a <span className='text-[red]'>
                                    Frontend Sofware Engineer.
                                </span>
                                I'm dedicated and ready to start working at your company and excel at
                                all tasks. I'm an excellent learner and I truly enjoy learning.
                                Please take a look at my projects and contact me.
                            </p>
                            <div className={`flex ${ivert && 'invert'} justify-center lg:justify-start sm:mt-4 xl:mt-6 mt-2`}>
    <a className="w-4 invert sm:w-6 sm:mx-4 mx-2 p-[1px]" href="https://github.com/Muhammad32130" target="_blank"><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg></a>
    <a className="w-4 invert sm:w-6 sm:mx-4 mx-2 p-[1px]" href={resume} download><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/></svg></a>
    <a className="w-4 invert sm:w-6 sm:mx-4 mx-2 p-[1px]" href="https://linkedin.com" target="_blank"><svg className="footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
    </div>
                        </div>
                        <div className='lg:w-[50%] 2xl:w-[45%] hidden lg:flex'>
                            <img src={svg} alt="" />
                        </div>
                    </div>
                    <a href='#Projects' className='hidden xl:mt-6 xl:mb-20 2xl:mt-4 2xl:mb-[200px] scroll-smooth lg:flex mt-[200px] up-down cursor-pointer justify-center'>
                        <img className={`w-8 rotate-90 ${ivert && 'invert-0'} invert`} src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
                    </a>
                    <div className='mt-20 w-[100%] flex flex-col items-center justify-center text-center'>
                        <img className='w-[20%] lg:mb-10 lg:mt-10 lg:w-[10%] rounded-full' src={profile} alt="" />
                        <h1 className='mt-4 lg:mb-10 md:text-[18px] lg:text-[20px] xl:w-[50%] xl:text-[26px] font-bold'>
                            About Me
                        </h1>
                        <div className={` overflow-y-hidden md:w-[70%] md:text-[17px] lg:text-[20px] xl:w-[50%] xl:text-[22px] ${showmore ? 'h-[fit]' : 'h-[110px]'} `}>
                            <p className='mt-4 '>I came to this country in 2014. When I was 12 years old, ever since then I fell in love with computers and how they worked. I started learning about different concepts. I've finished high school and I'm currently enrolled in college but I'm also a self taught developer. I have learned languages from courses and have also recieved certifications. My hobbies include playing cricket, soccer, boxing and working out. I love being fit and organized.</p>
                        </div>
                        <button onClick={() => (setshow(!showmore))} className='text-[red] mt-2 text-left hover:underline cursor-pointer'>{showmore ? 'Show less' : 'Read More'} </button >
                    </div>
                    <h1 data-aos="zoom-in-up" className='xl:mt-[200px] xl:text-[28px] lg:mt-20 mt-16 sm:text-[20px] text-center'>
                        Languages I've Learned
                    </h1>
                    <div className='tagcloud hidden text-[20px] lg:flex my-10 justify-center'>
                    </div>
                    <div className='grid grid-cols-2 lg:hidden w-fit mx-auto gap-x-10 gap-y-4 md:gap-y-6 items-center mt-10'>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                            <h2 className='grid-text'>
                                JavaScript
                            </h2>
                        </div>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                            <h2 className='grid-text'>
                                ReactJS
                            </h2>
                        </div>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="" />
                            <h2 className='grid-text'>
                                HTML5
                            </h2>
                        </div>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                            <h2 className='grid-text'>
                                CSS
                            </h2>
                        </div>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="" />
                            <h2 className='grid-text'>
                                Tailwind
                            </h2>
                        </div>
                        <div className='grid-items'>
                            <img className='w-12 sm:w-16' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                            <h2 className='grid-text'>
                                Git
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro