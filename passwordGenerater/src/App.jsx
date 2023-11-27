import "./App.css";
import { useState,useCallback,useEffect,useRef } from "react";
function App() {
      const [password,setPassword]=useState("");
      const [length,setLength]=useState(5);
      const [allowedNumbers,setAllowedNumbers]=useState(false);
      const [allowedCharacters,setAllowedCharacters]=useState(false);
      const changePassword=useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let pass="";
        if(allowedNumbers)str+="0123456789";
        if(allowedCharacters)str+="`~!@#$%^&*()[]{}"
        for(let i=0;i<length;i++){
          const ch=Math.floor(Math.random()*str.length +1);
          pass+=str.charAt(ch);

        }
        
        
        setPassword(pass);
      },[length,allowedNumbers,allowedCharacters]);
useEffect(()=>changePassword(),[length,allowedNumbers,allowedCharacters])
const passwordRef=useRef(null);
const copyPassword=()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password);
}
  return (
    <div>
    <div className="title-container">
  <h1 className="title">Password Generator</h1>
</div>
<div  className="container" >
  <div >
    <input
      ref={passwordRef}
      type="text"
      readOnly
      value={password}
      placeholder="password"
      className="border border-gray-300 p-2 rounded w-64 mr-2 focus:outline-none focus:border-blue-500"
    />
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={copyPassword}>Copy</button>
  </div>
  <div className="flex items-center">
    <label className="ml-8 " >Length </label>
    <div>{length}</div>

    <input
      type="range"
      min={5}
      max={50}
      className="w-64 border border-gray-300 rounded p-2"
      onChange={(e)=>setLength(e.target.value)}
      
    
    />
    <label className="ml-8">
      Numbers
      <input type="checkbox" className="ml-2" 
      defaultChecked={allowedNumbers}
        onChange={()=>{
          setAllowedNumbers((prev)=>!prev)
        }}
      />
    </label>
    <label className="ml-8">
      Characters
      <input type="checkbox" className="ml-2"
      defaultChecked={allowedCharacters}
      onChange={()=>{
          setAllowedCharacters((prev)=>!prev)
        }}
       />
    </label>
  </div>
</div>

    </div>
  )
}

export default App
