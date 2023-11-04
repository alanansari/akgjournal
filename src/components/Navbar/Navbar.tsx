'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { openSans, oswald } from '../../utils/fonts'

const Navbar = (props: any) => {
    const {page=''} = props
    const [expanded, setExpanded] = React.useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={`w-[100%] fixed flex flex-col justify-center items-center md:p-1 text-[#333] bg-[#fbfbfb] border-b-[1px] ${openSans.className}`}>
            <div className='flex w-[100vw] md:p-0 border-b-[1px] justify-center items-center'>
                <Image
                    className='px-1 py-1 ml-auto md:ml-0 h-15 md:h-11' 
                    src='akglogo.svg'
                    alt='akglogo'
                    width={44}
                    height={44}
                />
                <div className={`font-sans font-bold text-sm md:text-xs lg:text-sm w-[40%] text-center md:w-auto ${oswald.className}`}>AJAY KUMAR GARG ENGINEERING COLLEGE</div>
                <div className='text-xs px-1 hidden md:block'>(Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, UP, College Code - 027)</div>
                <div className={`py-7 px-8 ml-auto border-l-[1px] ${(expanded?'':'')} md:hidden`} onClick={handleClick}>
                    {
                    !(expanded)?
                    <Image
                        src='ham.svg'
                        alt='ham-menu'
                        width={20}
                        height={20}
                    />:
                    <Image
                        src='cross.svg'
                        alt='cross'
                        width={20}
                        height={20}
                    />}
                </div>
            </div>
            <ul className={`flex flex-col md:flex-row [&>*]:mb-1 [&>*]:mt-[24px] md:[&>*]:mt-0 md:[&>*]:mb-0 w-[100vw] py-1 justify-center items-center text-[12px] lg:text-[16px] ${(!(expanded)?'hidden':'')} md:flex`}>
                <li className={"hover:font-bold w-[9rem] text-center "+((page==="home")?"font-bold":"")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='patroninchief')?"font-bold":"")}>
                    <Link href="/patroninchief">Patron-in Chief</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='editorialteam')?"font-bold":"")}>
                    <Link href="/editorialteam ">Editorial Team</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='editorialboard')?"font-bold":"")}>
                    <Link href="/editorialboard">Editorial Advisory Board</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='payment')?"font-bold":"")}>
                    <Link href="/payment">Payment & Subscription</Link>
                </li>
                <li className={'hover:font-bold w-[9rem] text-center '+((page=='archive')?"font-bold":"")}>
                    <Link href="/archive">Archive</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar