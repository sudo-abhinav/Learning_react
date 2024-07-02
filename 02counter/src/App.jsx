
import { useState } from 'react';
import './App.css'

function App() {
  let [counter , setCounter] = useState(0)
  

  // let counter  = 5;
  const addValue = ()=>{
    if(counter >= 20){
      return alert('value not more than 20')
    }
    setCounter(previousState => previousState+1)
    setCounter(previousState => previousState+1)
    

    // setCounter(counter +1)
    // setCounter(counter +1)
    // console.log(counter);
  }

  const RemoveValue = ()=>{
    if(counter === 0 ){
      return alert('Value should not be less than 0')
      // console.log('number should not be less than 0');
      
    }
    setCounter(counter -1)
    
  }
  return (
    <>
      
      <h1>React With Abhinav</h1>
      <h3> Counter Value : {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
