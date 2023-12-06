import akgLogo from "../../../public/akgLogo.png";
import { oswald, openSans, clash_Display } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex border-t-2 flex-col border-black justify-center sm:items-start text-left gap-6 sm:justify-around px-4 py-12 mid:px-16 mid:py-16 mt-4 sm:flex-row">
      <div className="flex justify-start w-full sm:w-2/5 gap-2">
        <Image
          src="akglogo.svg"
          alt="akglogo"
          width={50}
          height={50}
          className="object-none"
        />
        <div className={`${oswald.className}`}>
          <p className="font-bold text-lg sm:text-base mid:text-lg">
            AJAY KUMAR GARG ENGINEERING COLLEGE
          </p>
          <p
            className={`font-normal text-sm sm:text-xs mid:text-sm ${openSans.className} md:w-[240px] mid:w-[283px]`}
          >
            (Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow,
            UP, College Code - 027)
          </p>
        </div>
      </div>
      <div className="text-base sm:text-sm mid:text-base text-left pl-4 xs:pl-12 sm:pl-0">
        <ul className={`flex flex-col gap-2 ${clash_Display.className}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/patroninchief">Patron-in Chief</Link>
          </li>
        </ul>
      </div>
      <div className="text-base sm:text-sm mid:text-base text-left pl-4 xs:pl-12 sm:pl-0">
        <ul className={`flex flex-col gap-2 ${clash_Display.className}`}>
          <li>
            <Link href="/editorialteam ">Editorial Team</Link>
          </li>
          <li>
            <Link href="/editorialboard">Editorial Advisory Board</Link>
          </li>
          <li>
            <Link href="/payment">Payment & Subscription</Link>
          </li>
        </ul>
      </div>
      <div className="text-base sm:text-sm mid:text-base text-left pl-4 xs:pl-12 sm:pl-0">
        <ul className={`flex flex-col gap-2 ${clash_Display.className}`}>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
