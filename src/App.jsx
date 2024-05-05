import "./App.css";
import { useState } from "react";
import Gen from "./Gen";

function App() {
  const [password, setPassword] = useState("Generate A password");
  const [len,setLen]=useState(7);
  function clickHandler(){
    navigator.clipboard.writeText(password);
    alert("copied");
  }
  return (

   <div className=" flex flex-col justify-center items-center">
    <div>
    <h1 className=" font-bold text-2xl">Password Generator</h1>

    
<input className=" border-4" type="text" disabled value={password} id="pass"></input>
&nbsp;

<label className=" p-2 bg-blue-400  hover:bg-blue-600" htmlFor="pass" onClick={clickHandler}>copy</label>
&nbsp;
    </div>
    <br />
    
    <div>
    <input className="  w-10 border-4 border-sky-400" type="number"  id="len"  defaultValue={8}  onChange={()=>setLen(document.getElementById("len").value)}/>
    <label htmlFor="len"> Set Password Length</label>
    </div>
    <Gen setPassword={setPassword} len={len}></Gen>
    
   </div>
  );
}

export default App;
