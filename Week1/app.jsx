import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([1,2])

  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <h1>My Grocery List</h1>
        <ul id="groceryList">
        <li>soup</li>
        <li>Chicken</li>
        <li>Eggs</li>
        </ul>
        <button id="removeItem" onclick="remove()">Remove</button>
        <button id="addItem" onclick="Add()">Add</button>
        <script src="scripts.js"></script>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
