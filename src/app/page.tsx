import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Home/Header'
import About from '@/components/Home/About'
import { oswald,openSans } from '@/utils/fonts'
import Textbox from '@/components/Textbox'

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='home'/>
      <Header />
      <About />
      <Textbox>
        <h2 className={`text-3xl text-[#000336] font-semibold ${oswald.className}`}>AKGEC <br/>International Journal of Technology </h2>
        <p>Ajay Kumar Garg Engineering College commenced publication of a biennial Technical Journal in 2010 to disseminate information spanning the entire spectrum of engineering and technology. We envisioned that this activity will help unleash the creative potential of technical community and provide a credible platform to receive professional recognition. Our journey through this arduous path has been a satisfying effort. We have sustained interest and support of the country’s Technical community.</p>
        <p>The Journal aims to provide platform to researchers, academicians, developers, industry experts and authors interested in state-of-the art and state-of-the-practice activities via publishing their research-based papers, articles and case studies on topics of current concern in the areas of engineering branches, namely electrical engineering, electronics, communication technology, instrumentation and measurement, information technology, computers, mechanical engineering, robotics and allied disciplines.</p>
        <p>Our source of articles mainly comprises the faculty teaching in Engineering Colleges across the country. Process of publication of the Journal is supervised by IIT-background professionals with impeccable credentials. The articles are blind-peer reviewed and published following internationally-accepted IEEE style as the format for publication. Printed on art paper, the Journal with ISSN number 0975-9514 is currently running in its Ninth volume. To begin with we had planned the Journal at the national level. Gradually, the contributions started coming from overseas Universities and we converted it to an international journal.</p>
        <p>To recognize the invaluable Intellectual contribution made by professionals in advancing the noble cause of dissemination of scientific and engineering knowledge, all published articles since Volume 7 of the “AKGEC International Journal of Technology” are being suitably rewarded. A prize of Rs.5,000 is being paid to the paper adjudged the best for each issue. For the balance, an amount of Rs.2,500 per article is earmarked.</p>
      </Textbox>
    </div>
  )
}
