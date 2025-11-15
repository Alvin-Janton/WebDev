import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(["Soup", "Chicken", "Eggs"]);
  const [newItem, setNewItem] = useState("");

  // Add item
  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]); // append item
    setNewItem(""); // clear input
  };

  // Remove item
  const removeItem = () => {
    setItems(items.slice(0,-1)));
  };

  return (
    <>
      <h1>My Grocery List</h1>

      {/* Input field */}
      <input
        type="text"
        value={newItem}
        placeholder="Enter an item..."
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      {/* List */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
