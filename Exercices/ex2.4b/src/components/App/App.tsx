/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.css'
import User from '../../User'

function App() {
  

  return (
   <main>

    <User  nom='kevin'age={10} online ={true}/>
    <User  nom='Anna'age={20} online ={false}/>
    <User  nom='Marie'age={30} online ={true}/>
    <User  nom='Emma'age={40} online ={false}/>
   </main>
  )
}

export default App
