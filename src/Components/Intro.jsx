import React, { useEffect, useState } from 'react'
import svg from "../images/undraw_remotely_-2-j6y.svg"
import profile from "../images/profile.jpg"
import TagCloud from 'TagCloud';

function Intro() {
    const [loaded, setload] = useState(false)
    const [showmore, setshow] = useState(false)

    const container = '.tagcloud';
    const texts = [
        'JavaScript', 'ReactJS', 'HTML5',
        'CSS3', 'TailwindCSS', 'Git',
        ,
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
                        <div className="lg:w-[50%] 2xl:w-[45%]  ">
                            <h1 data-aos="fade-down" className='xl:text-[32px] xl:mt-6 lg:leading-9 lg:text-start sm:text-[24px] sm:mb-8 text-[20px] leading-8 text-center'>
                                Hi, <br /> I'm Muhammad Askari
                            </h1>
                            <p data-aos="fade-up" className='xl:text-[26px] lg:leading-9 2xl:mb-[200px] xl:mt-10 xl:leading-loose lg:text-start lg:w-[100%] sm:text-[18px] sm:mt-4 text-center mt-4 text-sm leading-7'>
                                I'm learning to become a <span className='text-[red]'>
                                    Frontend Sofware Engineer.
                                </span>
                                I'm dedicated and ready to start working at your company and excel at
                                all tasks. I'm an excellent learner and I truly enjoy learning.
                                Please take a look at my projects and contact me.
                            </p>
                        </div>
                        <div className='lg:w-[50%] 2xl:w-[45%] hidden lg:flex'>
                            <img src={svg} alt="" />
                        </div>
                    </div>
                    <a href='#Projects' className='hidden xl:mt-6 xl:mb-20 2xl:mt-4 2xl:mb-[200px] scroll-smooth lg:flex mt-[200px] up-down cursor-pointer justify-center'>
                        <img className='w-8 rotate-90 invert' src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
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