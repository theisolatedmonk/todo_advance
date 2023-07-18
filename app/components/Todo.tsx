'use client'
import React, { useState } from 'react'
import DropdownComponent from './button'

type Props = {}

export default function Todo({}: Props) {

    const [activity, setActivity] = useState('')
    const [listData, setlistData] = useState([])

    function addActivity(){
      
        setlistData((listData)=>{
          
            const updatedlist= [...listData, activity]
            
            setActivity('')
            return updatedlist
        })
    }
    
  return (
    <div className="flex flex-col  w-full gap-8">  <div className="w-full text-center text-3xl font-bold ">Todo APP</div>

    <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
     <input className='w-[86%] p-2 outline-none text-black' type="text"   value={activity} onChange={(e)=>setActivity(e.target.value)} />
     <button className='
     p-2 rounded-md bg-black ' onClick={ addActivity}>Create TODO</button>
    </div>
    <div className="flex w-full flex-col gap-2" > {listData!=[]  && listData.map((data, index)=>{ 
        return(
 <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2 gap-2 ">
 <div className='w-[70%] p-2 outline-none text-black'  > {listData} </div>
<div className="flex w-[40%] gap-1"> <DropdownComponent/>
 <button className='
 py-2 px-4 rounded-md bg-black w-[30%] '>Edit</button>
 <button className='
 py-2 px-4 text-center rounded-md bg-black w-[30%] hover:bg-red-500'>DELETE</button>
 </div>
</div>)
    })}
   
    </div>

    </div>
  )
}