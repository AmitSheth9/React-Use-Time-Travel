import { useState } from 'react'


export default function useTime() {
    const [dates, setDates] = useState([]);
    const [index, setIndex] = useState(-1);
    const currentDate = dates.length> 0 ? dates[index] : '';
    
    const handleUndo = () => {
      if (index>0) {
        setIndex(index -1)
      }
      };
    
    const handleRedo = () => {
        if(index<dates.length-1){
          setIndex(index+1)
        }
    }
    const handleChange = (e) => {
      
   
      let datesArr = dates;
      console.log('original datesArr', datesArr)
      let newDate = e.target.value;
  
      datesArr.splice(index+1,0,newDate);
      setDates(datesArr);
      setIndex(index+1);
      
     
     
    }

    return [dates, index, handleChange, handleRedo, handleUndo, currentDate]
}