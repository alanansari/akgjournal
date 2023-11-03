import React from 'react'
import Image from 'next/image'
import {oswald} from '@/utils/fonts' 

const Header = () => {
  return (
    <div className='w-[100vw] pt-[18vh] flex flex-col items-center py-14'>
        <div className='text-center flex flex-col justify-center items-center'>
            <div className='text-[16px] lg:text-xl font-semibold text-slate-400'>Research & Development</div>
            <div className={`font-bold py-5 text-4xl sm:text-6xl  lg:text-7xl text-[#000336] ${oswald.className}`}>AKGEC<br/>International Journal of Technology</div>
            <div className='w-[50%] text-[14px] py-2 text-[#5A6473]'>Ajay Kumar Garg Engineering College (AKGEC) offers four year under graduate B.Tech course in ten engineering branches, two year post graduate M.Tech course in four engineering branches and two year post graduate MCA course.</div>
        </div>
        <div className='flex py-8 items-center justify-center text-[16px]'> 
          <button className='flex items-center bg-[#ffcc00] px-9 py-3 rounded-xl outline outline-offset-2'>
            More about us
            <Image
                className='ml-2'
                src='down.svg'
                alt='down'
                width={10}
                height={16}
            />
          </button>
        </div>
    </div>
  )
}

export default Header