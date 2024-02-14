import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Home/Header'
import About from '@/components/Home/About'
import { oswald,openSans } from '@/utils/fonts'
import Textbox from '@/components/Textbox'
import AboutAkgec from '@/components/AboutAkgec'
import Editorial from '@/components/Home/Editorial'

export default function Home() {
  return (
    <div className={`${openSans.className} `}>
      <Navbar page='home'/>
      <Header />
      <AboutAkgec />
      <Editorial />
      <Footer />
    </div>
  )
}
