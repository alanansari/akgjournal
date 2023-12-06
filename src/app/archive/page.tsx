import Navbar from "@/components/Navbar/Navbar"
import { openSans, clash_Display } from '@/utils/fonts'
import Image from "next/image"
import ListData from "./Data.json"
import List from "../../components/Archieve/List"
import Footer from "@/components/Footer/Footer"
// import {menuBook} from "/menuBook.svg"

export default function Home() {
  return (<>
    <div className={` ${openSans.className} flex flex-col`}>
      <Navbar page='archive' />
      <div className='w-[100vw] pt-[7rem] flex flex-col items-center border-t-2 border-black flex-1'>
        <div className='text-center flex flex-col justify-center items-center '>
          <div className='text-[16px] lg:text-xl font-semibold text-[#09F] mb-0'>ARCHIVE</div>
          <div className={`font-semibold py-3 text-4xl sm:text-6xl lg:text-7xl text-[#2C313F] ${clash_Display.className}`}>Journals Archive <br />By AKGEC</div>
          <div className={` w-full py-2 px-8 md:px-0 text-[#08090C]`}>Here’s what people of our collage have published over the years.</div>
        </div>

        {/* swagger */}
        <div className="w-full md:w-4/6">
          <List listData={ListData} />
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
