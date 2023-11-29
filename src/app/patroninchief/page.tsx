import Navbar from "@/components/Navbar/Navbar"
import { openSans, clash_Display } from "@/utils/fonts"
import Header from "@/components/patroninchief/Header"
import Textbox from "@/components/Textbox"
import ListData from "./Data.json"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='patroninchief'/>
      {/* <Header /> */}
      <div className=" px-20 pt-[10rem] flex md:flex-row flex-col-reverse justify-around items-center ">
        <div className="pt-5 md:w-[40%] w-[80%] ">
          <h3 className="text-[#09F] font-[600] pb-3">PATRON-IN-CHIEF</h3>
          <h1 className={`${clash_Display.className} font-semibold text-5xl w-[100%] md:w-[50%] leading-normal pb-3`}>Dr. R.K. Agarwal</h1>
          <p className=" w-[100%] md:w-[70%]">{ListData.TopText}</p>
        </div>
        <img src="/pic.png" alt="pic" className='w-[40rem] h-[20rem] object-cover'/>
      </div>
      <Textbox>
      
        
        {ListData.List.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
        
      </Textbox>
    </div>
  )
}
