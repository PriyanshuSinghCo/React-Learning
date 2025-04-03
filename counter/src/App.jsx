import { useState } from 'react'
import './App.css'

function App() {

    let [counter, setCounter] = useState(0);

    //let counter = 78;
    const addValue = () => {
        counter = counter + 1;
        if(counter <= 20) {
            // setCounter(counter);
            // setCounter(counter);
            // setCounter(counter);
            // setCounter(counter);

            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
        }else {}
        
    }

    const removeValue = () => {
        counter = counter - 1;
        if(counter >= 0){
            setCounter(counter);
        } else {
            console.log("Not Possible");
        }
       
    }

  return (

    <>
        <h1>chai aur react</h1>  
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br /> <br/>
        <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
