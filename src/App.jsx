import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('Button Clicked 2')
  }
  const addFive = num => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts</h3>

      {/* <Friends></Friends> */}

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => {alert('Third')}}>Click Me3</button>
      <button onClick={() => {addFive(5)}}>Click Me4</button>
    </>
  )
}

export default App
