import { useState } from 'react'

import './App.css'
import Generatepassword from './component/Generatepassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Generatepassword/>
     
    </>
  )
}

export default App
