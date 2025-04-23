import {useState} from "react";

function MathOperator({onValueChange}) {
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(0);
    const [operator, setOperator] = useState('+');

    function handleLeftValueChange(event)
    {
        console.log('handleLeftValueChange = ' + event.target.value);

        const newLeftValue = event.target.value;
        setLeftValue(newLeftValue);
        computeResult(operator, Number(newLeftValue), Number(rightValue));
    }
    function handleRightValueChange(event)
    {
        console.log('handleRightValueChange = ' + event.target.value);

        const newRightValue = event.target.value;
        setRightValue(newRightValue);
        computeResult(operator, Number(leftValue), Number(newRightValue));
    }
    function handleOperatorChange(event)
    {
        console.log('handleOperatorChange = ' + event.target.value);

        setOperator(event.target.value);
        computeResult(event.target.value, Number(leftValue), Number(rightValue));
    }

    function computeResult(newOperator, newLeftValue, newRightValue) {
        switch (newOperator)
        {
            case '+':
                console.log(`-- pre call to onValueChange with ${newLeftValue} and ${newRightValue}`);
                onValueChange(Number(newLeftValue) + Number(newRightValue));
                console.log('-- post call to onValueChange');
                break;
            case '-':
                console.log(`-- pre call to onValueChange with ${newLeftValue} and ${newRightValue}`);
                onValueChange(Number(newLeftValue) - Number(newRightValue));
                console.log('-- post call to onValueChange');
                break;
            case '*':
                console.log(`-- pre call to onValueChange with ${newLeftValue} and ${newRightValue}`);
                onValueChange(Number(newLeftValue) * Number(newRightValue));
                console.log('-- post call to onValueChange');
                break;
            case '/':
                console.log(`-- pre call to onValueChange with ${newLeftValue} and ${newRightValue}`);
                onValueChange(Number(newLeftValue) / Number(newRightValue));
                console.log('-- post call to onValueChange');
                break;
            default:
                onValueChange("Invalid operator!")
        }
    }

    return (
        <form>
            <p>
                <input type='number' onChange={handleLeftValueChange}/>
                <select onChange={handleOperatorChange}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input type='number' onChange={handleRightValueChange} />
            </p>
        </form>
    )
}
export default MathOperator;