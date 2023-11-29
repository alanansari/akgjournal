import Navbar from "@/components/Navbar/Navbar"
import { openSans, clash_Display } from "@/utils/fonts"
import Header from "@/components/patroninchief/Header"
import Textbox from "@/components/Textbox"
import ListData from "./Data.json"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='editorialteam'/>
      {/* <Header /> */}
      <div className=" px-19 pt-[10rem] flex md:flex-row flex-col-reverse justify-around items-center ">
        <div className="pt-5 md:w-[40%] w-[80%] ">
          <h3 className="text-[#09F] font-[600] pb-3">EDITORIAL TEAM</h3>
          <h1 className={`${clash_Display.className} font-semibold text-5xl w-[100%] md:w-[50%] leading-normal pb-3`}>Dr. Ranjit Singh</h1>
          <p className=" w-[100%] md:w-[70%]">{ListData.TopText}</p>
        </div>
        <img src="/editorial.png" alt="pic" className='w-[20rem] h-[23rem] object-cover'/>
      </div>
      <Textbox pxval={20}>
      
        
        {ListData.List.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
        
      </Textbox>
    </div>
  )
}
