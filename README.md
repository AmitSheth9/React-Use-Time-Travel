# react-template

A starter template for React projects at Alchemy Code Lab. We'll be using this in the "Advanced React" portion of the program.

## Getting Started

Click "Use this template" to create a new repo with your user as the owner. Then clone down the newly created repo and get hacking!


//keep track of time
//index at start is 0
//disable undo if index is <=0
//disable redo if index is >=0
//setDate index++, addDate to dates array
setDates((prev) => [...prevState, e.target.value])
//undo goes back one (setIndex --) (only if index>0)
//redo goes forward one (only if index <0) setIndex --
//

any time date changes add it to the array of dates
use index to keep track of dates
can only undo(go back) if index is greater than 0
can only redo if index isn't the last date in array


//how does it know thats previous state? because its last state value