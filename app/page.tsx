import Image from 'next/image'
import DropdownComponent from './components/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-8 p-24 ">
     
     <div className="w-full text-center text-3xl font-bold ">Todo APP</div>

     <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
      <input className='w-[86%] p-2 outline-none text-black' type="text" />
      <button className='
      p-2 rounded-md bg-black '>Create TODO</button>
     </div>

     <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
      <div className='w-[70%] p-2 outline-none text-black'  > </div>
  <div className="flex w-[30%] gap-2"> <DropdownComponent/>
      <button className='
      py-2 px-4 rounded-md bg-black w-[30%] '>Edit</button></div>
     </div>
    </main>
  )
}
