import React , {useState} from "react";
import "./styles.css";

export default function App() {
  let [count , setCount] = useState(1)
  
  return (
    <div>

    <h1>your balance : {count}</h1>
    <button onClick = {()=> setCount(--count)}> upgrade Garamat </button>
    </div>
  );
}
