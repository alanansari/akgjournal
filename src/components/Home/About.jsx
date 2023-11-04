import React from 'react'
import Image from 'next/image'
import { oswald } from '@/utils/fonts'

const About = () => {
  return (
    <div id='About' className='pt-[12vh] md:pt-[15vh]'>
        <div className='flex flex-col md:flex-row pb-10 w-[86%] mx-auto justify-start items-center'>
          <div className={`text-5xl py-3 px-7  mb-[36px] md:mb-0 md:mr-auto font-semibold border-b-[3px] border-slate-900 ${oswald.className}`}>About Us</div>
          <img src="about.png" alt="pic" className='w-[337px] h-[158px] object-cover rounded-xl outline outline-1 outline-offset-2'/>
        </div>
    </div>
  )
}

export default About