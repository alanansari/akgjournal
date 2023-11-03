import Navbar from '@/components/Navbar/Navbar'
import { openSans } from '@/utils/fonts'
// djj
export default function Error() {
  return (
    <div className={openSans.className}>
      <Navbar />
      <div className='h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='text-5xl p-4 font-bold'>404</h1>
        <p className='text-[16px] text-slate-600 font-semibold'>Whoops! You landed on a page that doesn't exist :)</p>
      </div>
    </div>
  )
}
