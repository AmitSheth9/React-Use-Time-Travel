
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useTime from "./hooks/useTime";

export default function App() {
 const [dates, index, handleChange, handleRedo, handleUndo] = useTime();
console.log('dates', dates);
  return  ( 
  <>
  <input name='inputdate' type='date' placeholder={dates[index]} value={dates[index]} onChange={handleChange}  />
  <button onClick={handleUndo}>Undo</button>
  <button onClick={handleRedo}>Redo</button>
  <div>Display {dates[index]}</div>
  <div>Display dates array: {dates}</div>
  </>
  )
}


