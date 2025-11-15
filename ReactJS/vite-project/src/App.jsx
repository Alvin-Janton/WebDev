import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([1,2]);
  
  const add = () => {
    setItem([...item, item.length+1]);
  }

  const remove = () =>{
    if(item.length > 0){
      setItem[item.slice(0, -1)];
    }
  }

  return (
    <>
    
      <div>
        <ul>
          {item.map((num)
        )}
        </ul>
      </div>
      
    </>
  )
}

export default App
