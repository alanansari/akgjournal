import Navbar from "@/components/Navbar/Navbar"
import { openSans, oswald } from "@/utils/fonts"
import Header from "@/components/patronincheif/Header"
import Textbox from "@/components/Textbox"

export default function Home() {
  return (
    <div className={openSans.className}>
      <Navbar page='patronincheif'/>
      <Header />
      <Textbox>
        <h2 className={`text-3xl text-[#000336] font-semibold ${oswald.className}`}>Dr. R. K. Agarwal</h2>
        <p className="text-[14px] md:text-4">B.Tech (IIT Kanpur), M.S. (CIT, Cranfield, UK) and PhD (IISc Bangalore)</p>
        <p>Dr. R.K. Agarwal has an exceptionally brilliant academic background with B.Tech from IIT Kanpur, M.S. from CIT, Cranfield, UK and PhD from IISc Bangalore. During his illustrious career of nearly three decades in the Indian Air Force and Defence Research & Development Organization (DRDO), he has held various key appointments including Chief Engineering Officer of an Operational Base, Director (Engg) at Air HQ and Project Director at Centre for Airborne Systems. His vast managerial, administrative, research and academic experience includes teaching assignments at Air Force Technical College and nine years of pioneering R&D work on the prestigious AWACS project in DRDO. He has also been a member of the Aeronautical Research & Development Board (ARDB) panel for approval and review of sponsored research projects at various centres of Excellence established at IITs and CSIR Laboratories.</p>
        <p>He is the recipient of the coveted Royal Aeronautical Society (UK) award for academic excellence at CIT and a citation with cash award by DRDO for his contribution to the design and development of Airborne Early Warning aircraft, culminating in its maiden flight.</p>
        <p>After taking voluntary retirement in 2004, Dr. Agarwal decided to contribute in the field of technical education and has been the Director of Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad since then. He has been persistently working towards setting new benchmarks in academic excellence as well as industry–academia interface to make the students globally competitive and employable. During his tenure, the college has not only been consistently maintaining exceptional results and placements but has also made significant progress in research and industry relevant consultancy projects. A number of initiatives and collaborative ventures with eminent multi-national companies have lead to establishment of many multi-disciplinary, high technology industry relevant facilities. These include India’s first Kuka Industrial Robotics Training Centre, NI-LabVIEW Academy, Bosch Rexroth Centre of Competence in Automation Technologies, Janatics Industrial Pneumatic Knowledge Centre and Mitsubishi Electric India. The college has also achieved the unique distinction of receiving the Academic Excellence Award for Best Engineering College in UPTU for two successive years under his able guidance.</p>
        <p>He has also contributed in bringing about a culture of corporate social responsibility in academic institutions. The social activities initiated by him include running a free primary school in the college, adopting a municipal corporation school in a nearby village, providing tuition fee subsidy to children of class IV employees, donating computers to spread computer literacy and generously contributing for relief work after natural calamities. Involvement in these activities makes the students conscious of their civic and social responsibilities. He places special emphasis on all round development with focus on inculcating self-discipline, good moral values, ethics, work culture and a positive attitude to make the students not just competent professionals but also good citizens and responsible members of the society.</p>
        <p>His wide ranging experience, vision and dynamism have infused inspiration and provided a road map for academic institutions to achieve the zenith of excellence in all fields of activities.</p>
        <p>Dr. R.K. Agarwal’s extraordinary inspiring-vision catapulted AKGEC to numero uno position for all time to come. He took the momentous decision in 2010 to launch this biannual publication to nurture creativity and encourage innovations. The journal received manuscripts even from overseas authors, earning accolades from research community worldwide.</p>
      </Textbox>
    </div>
  )
}
