import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj={
    username:"Mayank",
  }

  let user="mayank";
    

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taiwind test</h1>
    <Card channel="chai aur code" Someobj={myObj} />  

    <Card channel="Mayank"/>

    </>

    
  )
}

export default App
