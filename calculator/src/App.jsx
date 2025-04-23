import './index.css'
import MathOperator from "./components/MathOperator.jsx";
import MathOperatorBroken from "./components/MathOperatorBroken.jsx";
import MathResult from "./components/MathResult.jsx";
import {useState} from "react";

function App() {
    const [computedValue, setComputedValue] = useState('');

    function handleOnValueChanged(newValue) {
        console.log('App.handleOnValueChange = ' + newValue);
        setComputedValue(newValue);
    }

  return (
    <>
        <MathOperatorBroken onValueChange={handleOnValueChanged}/>
        <MathResult computedValue={computedValue}/>
    </>
  )
}

export default App