import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar"
import { openSans, clash_Display } from "@/utils/fonts"
import Textbox from "@/components/Textbox"
import ListData from "./Data.json"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='editorialteam'/>
      {ListData.map((team)=>
      <div>
      <div className="pt-[10rem] px-12 md:px-20 mb-4 flex md:flex-row flex-col-reverse justify-around items-center ">
        <div className="md:w-[40%] w-full ">
          <h1 className={`${clash_Display.className} font-semibold mt-4 md:mt-0 text-5xl w-[100%] md:w-[50%] leading-normal pb-3`}>{team.Name}</h1>
          <p className=" w-[100%] md:w-[70%]">{team.TopText}</p>
        </div>
        {/* <img src="/editorial.png" alt="pic" className='w-[20rem] h-[23rem] object-cover'/> */}
        <Image
          src={team.Image}
          alt="akglogo"
          width={50}
          height={50}
          className="w-[20rem] h-[23rem] object-cover"
        />
      </div>
      <Textbox pxval={20}> 
        {team.List.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
        
      </Textbox>
      </div>)}
      <Footer />
    </div>
  )
}

