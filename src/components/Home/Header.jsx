import React from 'react'
import Image from 'next/image'
import {openSans,clash_Display} from '@/utils/fonts' 
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-[100vw] pt-[18vh] h-[100vh] flex flex-col items-center justify-center border-y-2 border-black'>
        <div className='text-center flex flex-col justify-center items-center '>
            <div className='text-[16px] lg:text-xl font-semibold text-[#09F]'>Research & Development</div>
            <div className={`font-bold py-5 text-4xl sm:text-6xl  lg:text-7xl text-[#2C313F] ${clash_Display.className}`}>AKGEC<br/>International  <br/> Journal of Technology</div>
            <div className={` w-[63%] text-[14px] py-2 text-[#08090C]`}>Ajay Kumar Garg Engineering offers four year under graduate B.Tech course in ten engineering branches, two year post graduate M.Tech course in four engineering branches and two year post graduate MCA course.</div>
        </div>
        <div className='flex py-8 items-center justify-center text-[16px]'>
          <Link href='/payment'>
          {/* <button className='flex items-center bg-[#ffcc00] px-9 py-3 rounded-xl outline outline-1 outline-offset-2'>
            More about us
            
          </button> */}
          <Image
                className='ml-2'
                src='subscribe.svg'
                alt='down'
                width={150}
                height={50}
            />
          </Link>
        </div>
    </div>
  )
}

export default Header