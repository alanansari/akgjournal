import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import { openSans } from '@/utils/fonts'

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='home'/>
      <Header />
    </div>
  )
}
