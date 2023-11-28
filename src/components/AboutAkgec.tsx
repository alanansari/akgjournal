import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clash_Display } from '@/utils/fonts'

const AboutAkgec = () => {
  return (
    <div id='aboutakg'  className={`md:px-10 flex flex-col md:flex-row border-b-2 border-black md:border-0`}>
        <div className='flex flex-col items-center md:items-start w-full md:w-[60%] p-4 pt-[10vh] md:p-[4rem] md:pr-[6rem] pb-10 '>
            <div className={`text-6xl font-semibold ${clash_Display.className}`} >About Us</div>
            <Image
             className=' mt-10 md:hidden p-10 border-black border-2'
             src='/about.png'
             alt='akgec'
             width={670}
             height={594}
            />
            <div className='md:w-[75%] mt-8 mb-8 md:mb-16 text-xl text-center md:text-start'>AKGEC initiated a biennial Technical Journal in 2010, fostering the dissemination of engineering and technology insights. Envisioning it as a catalyst for unleashing creativity and gaining professional recognition, our arduous journey has garnered sustained interest and support from the national technical community.

            </div>
            <Link target="_blank" href='https://www.akgec.ac.in/about/' className={`items-center flex text-md text-[#08090C] px-12  py-4 bg-[#5AC4FF] font-semibold ${clash_Display.className} w-[90%] md:w-[auto]  justify-center`}>READ MORE <Image src="/play_arrow.svg" width={25} height={25} alt='Play_Arrow' /></Link>
        </div>
        <div className='w-[40%] hidden md:block'>
        <Image
            className='py-20 pr-16'
            src='/about.png'
            alt='akgec'
            width={788}
            height={544}
         />
        </div>
    </div>
  )
}

export default AboutAkgec