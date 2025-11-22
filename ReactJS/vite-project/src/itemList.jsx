import { useState } from "react";
import "./App.css";

//const itemList = ()
 
const itemList = ({items}) => {
    return(
        <ul>
            {items.map((value, idx) => (
                <li>
                    key={idx}{value}
                    <button></button>
                </li>
            ))}
        </ul>
    );
  };

  export {itemList}
