import Navbar from "@/components/Navbar/Navbar";
import { openSans, clash_Display } from "@/utils/fonts";
import Header from "@/components/patroninchief/Header";
import Textbox from "@/components/Textbox";
import ListData from "./Data.json";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`${openSans.className} min-h-[100vh] flex flex-col `}>
      <Navbar page="patroninchief" />
      <div className="flex-1">
        <div className="px-8 md:px-20 pt-[10rem] flex md:flex-row flex-col-reverse justify-around items-center ">
          <div className="pt-5 md:w-[40%] w-full ">
            <h3 className="text-[#09F] font-[600] pb-3">PATRON-IN-CHIEF</h3>
            <h1
              className={`${clash_Display.className} font-semibold text-5xl w-[100%] md:w-[50%] leading-normal pb-3`}
            >
              Dr. R.K. Agarwal
            </h1>
            <p className=" w-[100%] md:w-[70%]">{ListData.TopText}</p>
          </div>
          <Image
            src="/Director_General.jpg"
            alt="patron in chief"
            width={210}
            height={120}
            className="w-[40rem] h-[20rem] object-cover"
          />
        </div>
        <Textbox>
          {ListData.List.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </Textbox>
      </div>
      <Footer />
    </div>
  );
}
