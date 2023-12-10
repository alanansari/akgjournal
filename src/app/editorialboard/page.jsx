import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { openSans, clash_Display } from "@/utils/fonts";
import ListData from "./Data.json";
import TableComponent from "./tableComponent";

export default function Home() {
  function table(people) {
    return (
      <TableComponent
        name={people.name}
        designation={people.designation}
        university={people.university}
        place={people.place}
      />
    );
  }
  return (
    <div className={`${openSans.className} min-h-[100vh] flex flex-col `}>
      <Navbar page="editorialboard" />
      <div className="pt-[7rem] md:pt-[10rem] flex flex-col items-center justify-center mb-10 px-4 flex-1">
        <h1
          className={`${clash_Display.className} font-semibold text-2xl xs:text-3xl mb-2 sm:text-5xl sm:mb-6 leading-normal text-center`}
        >
          Editorial Advisory Board
        </h1>
        <div className="flex border-2 border-gray-900 p-2 xs:w-5/6 sm:w-[600px]">
          <div className="flex border-2 border-gray-900 py-4 px-4">
            <div className="flex flex-row gap-4 flex-wrap justify-between">
              {ListData.map((people) => table(people))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
