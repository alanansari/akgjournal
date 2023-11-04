import React from 'react'
import Image from 'next/image'
import { oswald } from '@/utils/fonts'

const Header = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row pt-[10rem] pb-10 justify-center items-center'>
          <div className={`text-3xl p-3 mb-[36px] md:mb-0 md:mr-[15vw] font-medium border-b-[3px] border-slate-900 ${oswald.className}`}>PATRON IN CHIEF</div>
          <img src="pic.png" alt="pic" className='w-[337px] h-[158px] object-cover rounded-xl outline outline-1 outline-offset-2'/>
        </div>
    </>
  )
}

export default Header