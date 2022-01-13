
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useTime from "./hooks/useTime";

export default function App() {
 const [dates, index, handleChange, handleRedo, handleUndo, currentDate] = useTime();
console.log('dates', dates);
  return  ( 
  <>
  <input name='inputdate' type='date' placeholder={dates[index]} value={currentDate} onChange={handleChange}  />
  <button onClick={handleUndo}>Undo</button>
  <button onClick={handleRedo}>Redo</button>
  <div>Display {currentDate}</div>
  <div>Display dates array: {dates.map((date) => <div>{date}</div>)}</div>
  </>
  )
}


