import Navbar from "@/components/Navbar/Navbar"
import { openSans, clash_Display } from "@/utils/fonts"
import Header from "@/components/patroninchief/Header"
import Textbox from "@/components/Textbox"
import ListData from "./Data.json"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='about'/>
      <div className="px-8 md:px-20 pt-[10rem] flex md:flex-row flex-col-reverse justify-around items-center ">
      <div className="pt-5 md:w-[40%] w-full">
          <h1 className={`${clash_Display.className} font-semibold text-5xl w-[100%] md:w-[50%] leading-normal pb-3`}>About Us</h1>
          <p className=" w-[100%] md:w-[70%] text-justify">{ListData.TopText}</p>
        </div>
        <img src="/about.png" alt="pic" className='w-[40rem] h-[20rem] object-cover'/>
      </div>
      <Textbox>
        {ListData.List.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
        
      </Textbox>
      <Footer />
    </div>
  )
}
