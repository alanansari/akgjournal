import React from 'react'

interface Props{
    children: React.ReactNode,
    pxval?: number
}

const Textbox = ({children , pxval}:Props) => {
  return (
    <div className={`flex flex-col items-center  md:text-start md:items-start px-10 md:px-${pxval} py-[56px] [&>*]:mt-5 w-[90%] mx-auto text-[#08090C] rounded-3xl `}>
        {children}
    </div>
  )
}

export default Textbox