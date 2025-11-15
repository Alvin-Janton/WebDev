import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([1, 2]);

  const add = () => {
    setItem([...item, item.length + 1]);
  };

  const remove = () => {
    if (item.length > 0) {
      // use parentheses, not square brackets
      setItem(item.slice(0, -1));
    }
  };

  return (
    <>
      <div>
        <h1>Hello!</h1>
        <p>How are you?</p>
        <ul>
          {item.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>

        <button onClick={add}>More</button>
        <button onClick={remove}>Less</button>
      </div>
    </>
  );
}

export default App;
