import Image from "next/image"

interface Props {
  listData:{
    heading:string,
    content_title: string,
    content_date: string,
    content:{
      title:string,
      name:string
    }[]
  }[]
}
const List: React.FC<Props> = ({ listData }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mx-auto px-8 mt-10 z-2">
        {listData.map((l) => {
          return (
            <div className="collapse border-2 border-black rounded-none mb-6">
              <input type="checkbox" />
              <div className="collapse-title flex justify-between items-center px-6 text-black h-16 border-b-2 border-black">
                <span>
                  <Image src="menuBook.svg" alt="icon" width={24} height={24} />
                </span>
                {l.heading}
                <span className="font-bold text-2xl">+</span>
              </div>
              <div className="collapse-content px-4">
                <div className="mt-4 text-center text-[15px] py-3 px-4 w-full bg-slate-200 border-t-2 border-gray-600 ">
                  {l.content_title}
                </div>
                <div className="text-center text-[15px] py-3 px-4 w-full border-t-2 border-gray-600 ">
                  {l.content_date}
                </div>
                <div className="flex p-2 bg-slate-200 border-t-2 border-gray-600">
                  <div className="w-1/5">S. No.</div>
                  <div className="w-4/5">Content</div>
                </div>
                {l.content.map((item, index) => {
                  return (
                    <div
                      className={`flex p-2 ${
                        index % 2 == 0 ? "bg-white" : "bg-slate-200"
                      } border-t-2 border-gray-600`}
                    >
                      <div className="w-1/5">{index + 1}</div>
                      <div className="w-4/5">
                        {item.title}
                        <br />
                        <span className="text-black">{item.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default List;
