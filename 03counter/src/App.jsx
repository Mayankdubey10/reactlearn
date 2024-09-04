import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setcounter]=useState(15)

  //let counter=15;

  const addvalue=()=>{
    setcounter(counter+1);
  }

  const decvalue=()=>{
    setcounter(counter-1);
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2> Counter value : {counter}</h2>
     
     <button onClick={addvalue}>Increase Value</button>
     <br />
     <button onClick={decvalue}>Decrease Value</button>

     <p>footer: {counter}</p>
    </>
  )
}

export default App
