import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <div className='w-full'>
      <div className='bg-black w-full h-screen flex'>
        <Form/>
      </div>      
    </div>
  )
}

export default App