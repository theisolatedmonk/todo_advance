import Image from 'next/image'
import DropdownComponent from './components/button'
import Todo from './components/Todo'

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center   p-24 ">
     
   <Todo/>
    </main>
  )
}
