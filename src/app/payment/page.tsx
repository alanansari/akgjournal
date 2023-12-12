import Navbar from "@/components/Navbar/Navbar"
import { openSans , clash_Display } from "@/utils/fonts"
import Footer from "@/components/Footer/Footer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className={openSans.className}>
    <Navbar page='about'/>
    <div className="pt-[7rem] md:pt-[10rem] flex flex-col items-center justify-center mb-10 px-4">
    <h1 className={`${clash_Display.className} font-semibold text-2xl xs:text-3xl mb-2 sm:text-5xl sm:mb-6 leading-normal text-center`}>Payment & Subscription</h1> 
    <h3 className={`${openSans.className} font-medium text-base xs:text-lg mb-2 sm:text-xl sm:mb-6 leading-normal text-center`}>Choose your Subscription. Choose your Payment method. fill the form.</h3>
    <Link
            href=""
            className={`items-center flex text-md text-[#08090C] px-12 mt-4  py-4 bg-[#5AC4FF] font-semibold ${clash_Display.className} md:w-[auto]  justify-center`}
          >
            Fill Now{" "}
            <Image
              src="/play_arrow.svg"
              width={25}
              height={25}
              alt="Play_Arrow"
            />
          </Link> 
          <h3 className="text-[#09F] font-[600] mt-12 pb-3">Step-1</h3>
          <h2 className={`${clash_Display.className} font-semibold text-xl xs:text-2xl mb-2 sm:text-4xl sm:mb-6 leading-normal text-center`}>Choose Your Subscription</h2> 
          <table className={`${clash_Display.className} mb-8 border-2 border-black border-collapse text-center w-1/2`}>
          <tr>
            <th colSpan={5} className="font-medium p-4 text-lg border-2 border-black">Subscription Rates for Indian (in Rupees)</th>
          </tr>
          <tr className="text-lg">
            <th className="font-semibold border-2 border-black py-3 px-4">S.No.</th>
            <th className="font-semibold border-2 border-black py-3 px-4">Category Indian(in Rs.)</th>
            <th className="font-semibold border-2 border-black py-3 px-4">1 yr</th>
            <th className="font-semibold border-2 border-black py-3 px-4">2 yrs</th>
            <th className="font-semibold border-2 border-black py-3 px-4">3 yrs</th>
          </tr>
          <tr className="text-lg ">
           <td className="border-black border-2">1</td>
           <td className="border-black border-2">Institutions</td>
           <td className="border-black border-2">500</td>
           <td className="border-black border-2">900</td>
           <td className="border-black border-2">1300</td>
          </tr>
          <tr className="text-lg ">
           <td className="border-black border-2">2</td>
           <td className="border-black border-2">Individuals</td>
           <td className="border-black border-2">200</td>
           <td className="border-black border-2">300</td>
           <td className="border-black border-2">500</td>
          </tr>
          <tr>
           <td className="border-black border-2">3</td>
           <td className="border-black border-2">Alumni/Students</td>
           <td className="border-black border-2">150</td>
           <td className="border-black border-2">250</td>
           <td className="border-black border-2">400</td>
          </tr>
          </table>
          <table className={`${clash_Display.className} border-2 w-1/2 border-black border-collapse text-center`}>
          <tr>
            <th colSpan={5} className="font-medium p-4  text-lg border-2 border-black">Foreign Subscription Rates (in US dollars)</th>
          </tr>
          <tr className="text-lg ">
            <th className="font-semibold border-2 border-black py-3 px-4">S.No.</th>
            <th className="font-semibold border-2 border-black py-3 px-4">Category Foreign(in $)</th>
            <th className="font-semibold border-2 border-black py-3 px-4">1 yr</th>
            <th className="font-semibold border-2 border-black py-3 px-4">2 yrs</th>
            <th className="font-semibold border-2 border-black py-3 px-4">3 yrs</th>
          </tr>
          <tr className="text-lg ">
           <td className="border-black border-2">1</td>
           <td className="border-black border-2">Air-Mail</td>
           <td className="border-black border-2">200</td>
           <td className="border-black border-2">300</td>
           <td className="border-black border-2">400</td>
          </tr>
          <tr className="text-lg ">
           <td className="border-black border-2">2</td>
           <td className="border-black border-2">SAARC Countries</td>
           <td className="border-black border-2">40</td>
           <td className="border-black border-2">70</td>
           <td className="border-black border-2">100</td>
          </tr>
          <tr>
            <td colSpan={5} className="text-lg border-black border-2">Please add Rs. 30 towards bank charges, in case of outstation cheques</td>
          </tr>
          <tr>
            <td colSpan={5} className="text-lg border-black border-2">Overseas Payments through bank drafts.</td>
          </tr>
          </table>
          <h3 className="text-[#09F] font-[600] mt-12 pb-3">Step-2</h3>
          <h2 className={`${clash_Display.className} font-semibold text-xl xs:text-2xl mb-2 sm:text-4xl sm:mb-6 leading-normal text-center`}>Choose Payment Method</h2> 
 <table className={`${clash_Display.className} border-2 w-1/2 border-black border-collapse mb-8`}>
          <tr>
            <th colSpan={2} className="font-medium p-4  text-lg border-2 border-black">Online mode</th>
          </tr>
          <tr>
            <th colSpan={2} className="font-semibold p-4 text-lg border-2 border-black">Online Payment : Through RTGS/NEFT </th>
          </tr>
          <tr>
          <td className="py-2 px-4">Name of the Beneficiary</td>
          <td className="py-2 px-4">Ajay Kumar Garg Engineering College</td>
          </tr>
          <tr>
          <td className="py-2 px-4">Name of the Bank</td>
          <td className="py-2 px-4">Kotak Mahindra Bank Ltd.</td>
          </tr>
           <tr>
          <td className="py-2 px-4">Branch Address</td>
          <td className="py-2 px-4">30 & 31 Navyug Market, P.B. No. 75 Ghaziabad-201001 (U.P.)- India</td>
          </tr>
          <tr>
          <td className="py-2 px-4">Branch Code</td>
          <td className="py-2 px-4">5295</td>
          </tr>
          <tr>
          <td className="py-2 px-4">Bank Account No.</td>
          <td className="py-2 px-4">508010250461</td>
          </tr>
          <tr>
          <td className="py-2 px-4">Type of Bank Account</td>
          <td className="py-2 px-4">Savings Bank Account</td>
          </tr>
          <tr>
          <td className="py-2 px-4">RTGS/NEFT/IFSC Code</td>
          <td className="py-2 px-4">KKBK0005295</td>
          </tr>
          <tr>
          <td className="py-2 px-4">Contact No.</td>
          <td className="py-2 px-4">0120-2790969</td>
          </tr>
          </table>
          <table className={`${clash_Display.className} border-2 w-1/2z border-black border-collapse`}>
          <tr>
            <th className="font-medium p-4  text-lg border-2 border-black">Offline mode</th>
          </tr>
          <tr>
            <th className="font-semibold p-2 text-lg ">Offline Payment : Through Bank Draft/Cheque </th>
          </tr>
          <tr>
            <td className="p-2 text-base ">All Cheques / Demand Drafts (DD) should be made in favour of <span className="font-medium">"Ajay Kumar Garg Engineering College."</span> , payable at Ghaziabad</td>
          </tr>
          </table>
    </div>
    <Footer />
  </div>
  )
}
