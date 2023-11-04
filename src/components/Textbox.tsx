import React from 'react'

interface Props{
    children: React.ReactNode
}

const Textbox = ({children}:Props) => {
  return (
    <div className='flex flex-col items-center text-center md:text-start md:items-start px-[20px] md:px-[52px] py-[56px] [&>*]:mt-5 w-[90%] mx-auto text-[#5A6473] rounded-3xl border border-[#ffda48] bg-[#fff]'>
        {children}
    </div>
  )
}

export default Textbox