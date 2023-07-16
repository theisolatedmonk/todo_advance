import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-4 p-24 ">
     
     <div className="w-full text-center text-3xl font-bold ">Todo APP</div>

     <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
      <input className='w-[86%] p-2 outline-none text-black' type="text" />
      <button className='
      p-2 rounded-md bg-black '>Create TODO</button>
     </div>

    </main>
  )
}
