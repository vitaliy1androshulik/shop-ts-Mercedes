import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppLayout></AppLayout>
    </>
  )
}

export default App
