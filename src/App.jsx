import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Quiz from './components/quiz'
import Result from './components/result'

function App() {

  return (
    <div className="app-container">
      <h1>Quiz App</h1>

       <Quiz/>
    </div>
  )
}

export default App;
