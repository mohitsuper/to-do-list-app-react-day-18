import React, { useState } from 'react'

function App() {
  const [massage,setMassage] = useState('');
  const [arryMassage,setArryMassage] = useState([]);
  const [error,setError] = useState('');
  const [isTheam, setIsthem] = useState(false)
  const isSubmitdata =()=>{
      if(massage.trim() == ""){
        setError("field must not be empty");
        return
      }
      const val = arryMassage.some((value)=>value.text == massage);
      if(val){
        setError("field must not be empty");
        return
      }
    setArryMassage([...arryMassage,{text:massage,complete:false}]);
    setMassage('');
    setError('')
  }
  const isChanged =(index)=>{
    
    const newArry = [...arryMassage]
    newArry[index].complete = !newArry[index].complete;
    setArryMassage(newArry);
  }
  const isClose =()=>{
    const updateArry = [...arryMassage];
    const res = updateArry.filter((value)=>value.complete !== true)
    setArryMassage(res);
  }
  const isEdit =(index)=>{
    const updateArry = [...arryMassage]
    const res = updateArry.filter((_,key)=>key == index);
    const newArry = updateArry.filter((_,key)=>key !== index);
    setArryMassage(newArry)
    setMassage(res[0].text)

  }

  return (

    <div className={`${isTheam?"bg-white":"bg-black"} min-h-screen`}>
      <div className={`${isTheam?"text-black":"text-white"} flex gap-3 px-2 xl:px-[20rem] items-center justify-around text-[.5rem]`}>
      <button onClick={()=>setIsthem(!isTheam)} className={`theam uppercase  px-5 py-1 rounded-sm flex ${isTheam?"bg-black text-white":"bg-white text-black"} `}>{isTheam?"light":"dark"}</button>
      <h1 className='uppercase text-[1rem] font-[400] text-center py-5'>to do list app</h1>
      </div>
      <div className="xl:px-[20rem] px-2 flex gap-2">
        <input type="text" className='border py-2 border-gray-200 rounded-sm h-full w-full px-2 bg-white' placeholder='massge' value={massage} onChange={(e)=>setMassage(e.target.value)} />
        <button className='bg-green-500 text-white px-8 rounded-sm py-2' onClick={isSubmitdata}>Submit</button>
      </div>
      <span className='error text-red-500 px-2 xl:px-[20rem]'>{error}</span>
      <div className="display-massged px-2 xl:px-[20rem] py-2 h-full w-full flex flex-col gap-3">
        {
          arryMassage.map((value,key)=>{
            return(
             <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all" key={key}>
              <input 
                type="checkbox" name='massage'
                checked={value.complete}
                onChange={()=>isChanged(key)}
                className="w-4 h-4 accent-green-500 cursor-pointer"
              />
              <p className="text-gray-500 text-sm font-medium">{key + 1}.</p>
              <p className="text-gray-800 text-base flex-1">{value.text}</p>
              <button className="text-green-500 hover:text-red-600 text-sm font-semibold" onClick={()=>isEdit(key)}>Edit</button>
              <button className="text-red-500 hover:text-red-600 text-sm font-semibold" onClick={()=>isClose()}>Close</button>
            </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default App