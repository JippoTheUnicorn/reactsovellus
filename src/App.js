import React from "react"
import { Message } from "./pages/Message"
import { Buttons } from "./pages/Buttons"
import './App.css'

function App() {
  console.log('Testitulostus: Hello!')

  return (
    <div>

      <Message />
      <Buttons />
    </div>
  )
}

export default App

