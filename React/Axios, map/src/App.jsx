import axios from 'axios'

import React, {useEffect, useState } from 'react'

const App = () => {
    const [data, setData] = useState([])
const getData = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
  setData(response.data); 
}

useEffect(() => {
getData()
}, [])

  return (
    <div>
 {/* <button onClick={getData} className='px-5 py-5 bg-blue-200 rounded m-5'>Get data</button> */}
{data.map(function(elem, idx){
  return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
    <img className='h-40' src={elem.download_url} alt="" />
    <h1>{elem.author}</h1>
  </div>
  
})}
    </div>
    
  )
}

export default App
