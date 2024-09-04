import { useState, useCallback,useEffect ,useRef} from "react";
function App() {
  const [length,setlength] =useState(8);
  let [number,Setnumber]=useState(false);
  let [specialcharflag,Setspecialcharflag]=useState(false);
  const [Password,setPassword]=useState("");

  const passwordRef = useRef(null)

  const passgenerator= useCallback(() => {
    let str="ABCDEFGHIJKLMNOPQRESTUVWXYZ";
    let pw="";
    
    if(number) str+="0123456789";
    if(specialcharflag) str+="!@#$%^&*()_+~";


    for(let i=0; i<length ; i++){
    let random = Math.floor(Math.random()*str.length+1);
      pw+=str.charAt(random);
    }

    setPassword(pw);

}, [number,specialcharflag,length,setPassword])

const copyPassword=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(Password)
},[Password])

useEffect(()=>{passgenerator()},[number,specialcharflag,length,passgenerator]);

return (
<>
  <div className="w-full max-w-md mx-auto my-5 shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
    <h1 className="text-white">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" className="outline-none w-full py-1 px-3" value={Password} readOnly/>
      <button className="outline-none bg-blue-700 text-white px-6 py-0.5 shrink-0" onClick={copyPassword}>Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-1">
      <label htmlFor="range">Length: {length}</label>
        <input type="range" min={6} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} />
      </div>

      <div className="flex items-center gap-x-1">
      <label htmlFor="">Numbers</label>
        <input type="checkbox" onClick={()=>{Setnumber((prev)=>!prev)}}/>
      </div>

      <div className="flex items-center gap-x-1">
        <label htmlFor="">Special Characters</label>
        <input type="checkbox" onClick={()=>{Setspecialcharflag((prev)=>!prev)}}/>
      </div>
    </div>
  </div>
  </>
  )

}
export default App
