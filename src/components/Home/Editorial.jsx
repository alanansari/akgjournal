import { openSans, clash_Display } from "@/utils/fonts";
import List from "../Archieve/List";
import Link from "next/link";
import Image from "next/image";
import ListData from "../../app/archive/Data.json"

function Editorial() {
  return (
    <>
      <div className="md:px-10 flex flex-col md:flex-row pb-10">
        <div className="flex flex-col items-center md:items-start w-full md:w-[80%] p-4 mt-10 md:pl-[4rem]">
          <div className="text-[16px] lg:text-xl font-semibold text-[#09F] mb-0">
            ARCHIVE
          </div>
          <div
            className={`leading-8 font-semibold py-3 text-4xl sm:text-6xl lg:leading-[76px] text-[#2C313F] ${clash_Display.className} text-center md:text-start`}
          >
            Journals Archive <br />
            By AKGEC
          </div>
          <div className={` w-full py-2 text-[#08090C] text-xl text-center md:text-start mb-8`}>
            Here’s what people of our college have published over the years.
          </div>

          <Link
            href="/archive"
            className={`items-center flex text-md text-[#08090C] px-12  py-4 bg-[#5AC4FF] font-semibold ${clash_Display.className} w-[90%] md:w-[auto]  justify-center`}
          >
            READ MORE{" "}
            <Image
              src="/play_arrow.svg"
              width={25}
              height={25}
              alt="Play_Arrow"
            />
          </Link>
        </div>
        <div className="md:ml-6 p-4 w-full">
          <List listData={ListData.slice(0, 2)} />
        </div>
      </div>
    </>
  );
}

export default Editorial;
