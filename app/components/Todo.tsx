'use client'
import React, { useState } from 'react'
import DropdownComponent from './button'
import { data } from 'autoprefixer'

type Props = {}

export default function Todo({}: Props) {

    const [activity, setActivity] = useState('')
    const [listData, setlistData] = useState([])
    const [edit, setEdit ] = useState(' hidden')



    function addActivity(){
      
        setlistData((listData)=>{
          
            const updatedlist= [...listData, activity]
            
            setActivity('')
            return updatedlist
        })
    }
    
  return (
    <div className="flex flex-col  w-full gap-8 relative">  <div className="w-full text-center text-3xl font-bold ">Todo APP</div>

    <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2">
     <input className='w-[86%] p-2 outline-none text-black' type="text"   value={activity} onChange={(e)=>setActivity(e.target.value)} />
     <button className='
     p-2 rounded-md bg-black ' onClick={ addActivity}>Create TODO</button>
    </div>
    <div className="flex w-full flex-col gap-2"  > {listData!=[]  && listData.map((data, index)=>{ 
        return(
          
 <div className="flex  w-full bg-white justify-between rounded-lg overflow-hidden p-2 gap-2 " key={index}>
 <div className='w-[70%] p-2 outline-none text-black'  > {data} </div>
<div className="flex w-[40%] gap-1"> <DropdownComponent/>
 <button className='
 py-2 px-4 rounded-md bg-black w-[30%] ' onClick={()=> setEdit('flex')}>Edit</button>
 <button className='
 py-2 px-4 text-center rounded-md bg-black w-[30%] hover:bg-red-500'>DELETE</button>
 </div>
</div>



)
    })}
   
    </div>
    
<div className={`flex absolute bg-black w-full h-screen justify-center items-center bg-opacity-70 ${edit} `} >
  <div className="flex  w-full  bg-white justify-between rounded-sm overflow-hidden py-44 gap-2 px-4 h-[55%] items-center" >
 <input className='w-full px-2 py-4 outline-none text-white rounded-lg  bg-black'  value= {activity}  onChange={(e)=>setActivity(e.target.value)} />
<div className="flex w-[30%] gap-1">
 <button className='
 p-4  rounded-md bg-black w-full text-white' onClick={()=> setEdit('hidden')}>Cancle</button>
 <button className='
 p-4 text-center rounded-md bg-black w-full hover:bg-green-500 text-white'>Save</button>
 </div>
</div>
</div>
    </div>
  )
}