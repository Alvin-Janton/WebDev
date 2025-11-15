import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  // You can keep count if you need it later, otherwise you can delete it
  const [count, setCount] = useState(0);

  // List of items
  const [items, setItems] = useState(["Soup", "Chicken", "Eggs"]);

  // Controlled input value
  const [newItem, setNewItem] = useState("");

  const add = () => {
    // ignore empty / whitespace-only entries
    if (!newItem.trim()) return;

    // add the new item to the end of the list
    setItems([...items, newItem.trim()]);

    // clear the input
    setNewItem("");
  };

  const remove = () => {
    if (items.length > 0) {
      // remove the last item
      setItems(items.slice(0, -1));
    }
  };

  return (
    <>
      <div>
        <h1>Hello!</h1>
        <p>How are you?</p>

        <input
          type="text"
          placeholder="What do you want to add?"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button onClick={add}>More</button>
        <button onClick={remove}>Less</button>
      </div>
    </>
  );
}

export default App;
