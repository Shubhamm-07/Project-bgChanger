import { useState } from 'react'

function App() {
  const [color, setColor] = useState("seagreen")

  return (
    
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-2 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-2 py-2 bg-white'>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-red-500' onClick={()=>setColor("crimson")} >Red</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-blue-500' onClick={()=>setColor("dodgerblue")}>Blue</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-green-500'onClick={()=>setColor("limegreen")} >Green</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-black bg-yellow-300'onClick={()=>setColor("gold")} >Yellow</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-pink-400'onClick={()=>setColor("hotpink")} >Pink</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-lavender'onClick={()=>setColor("lavender")} >Lavender</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-gray-400'onClick={()=>setColor("darkgray")} >Gray</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-black bg-white'onClick={()=>setColor("snow")} >White</button>
          <button className='rounded-full px-3 py-2 shadow-lg text-white bg-black'onClick={()=>setColor("Black")} >Black</button>
        </div>

      </div>
    </div>
      
  
  )
}

export default App
