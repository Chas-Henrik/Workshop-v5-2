import { useState } from 'react'
import './App.css'
import { Slider } from "@/components/ui/slider"

function App() {

  return (
    <div className="slider">
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  )
}

export default App
