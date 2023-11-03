'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = (props: any) => {
    const {page} = props
    return (
        <div className='w-[100%] flex flex-col justify-center items-center m-0 p-1 text-[#333]'>
            <div className='flex min-h-10 w-[100vw] border-b-[1px] justify-center items-center'>
                <Image
                    className='p-2' 
                    src='akglogo.svg'
                    alt='akglogo'
                    width={44}
                    height={44}
                />
                <div className='font-sans font-bold text-xs'>AJAY KUMAR GARG ENGINEERING COLLEGE</div>
                <div className='text-xs px-1 hidden md:block'>(Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, UP, College Code - 027)</div>
            </div>
            <ul className='flex w-[100vw] justify-center p-1 text-xs border-b-[1px]'>
                
                <li className={"hover:font-bold w-[10rem] text-center "+((page==="home")?"font-bold":"")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='patronincheif')?"font-bold":"")}>
                    <Link href="/patronincheif">Patron-in Cheif</Link>
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
                <li className={'hover:font-bold w-[10rem] text-center '+((page=='archive')?"font-bold":"")}>
                    <Link href="/archive">Archive</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar