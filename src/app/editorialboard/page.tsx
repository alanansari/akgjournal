import Navbar from "@/components/Navbar/Navbar"
import { openSans } from "@/utils/fonts"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='editorialboard'/>
    </div>
  )
}
