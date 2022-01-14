
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useTime from "../hooks/useTime";
import styles from './TimeTravel.css'

export default function App() {
 const [dates, index, handleChange, handleRedo, handleUndo, currentDate] = useTime();
console.log('dates', dates);
  return  ( 
  <div>
  <input 
    aria-label='input' 
    type='date' 
    placeholder={dates[index]} 
    value={currentDate} 
    onChange={handleChange}  />
  <div className={styles.display}>Select a Date</div>
  <button onClick={handleUndo}>Undo</button>
  <button onClick={handleRedo}>Redo</button>
  <div className={styles.display}>Display {currentDate}</div>
  <div className={styles.display}>Display dates array: {dates.map((date) => <div key={dates.indexOf(date)}>{date}</div>)}</div>
  </div>
  )
}