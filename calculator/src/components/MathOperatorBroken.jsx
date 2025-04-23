import {useState} from "react";

function MathOperatorBroken({onValueChange}) {
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(0);
    const [operator, setOperator] = useState('+');

    function handleLeftValueChange(event)
    {
        console.log('handleLeftValueChange = ' + event.target.value);

        setLeftValue(event.target.value);
        computeResult();
    }
    function handleRightValueChange(event)
    {
        console.log('handleRightValueChange = ' + event.target.value);

        setRightValue(event.target.value);
        computeResult();
    }
    function handleOperatorChange(event)
    {
        console.log('handleOperatorChange = ' + event.target.value);

        setOperator(event.target.value);
        computeResult();
    }

    function computeResult() {
        switch (operator)
        {
            case '+':
                console.log(`-- pre call to onValueChange with ${leftValue} and ${rightValue}`);
                onValueChange(Number(leftValue) + Number(rightValue));
                console.log('-- post call to onValueChange');
                break;
            case '-':
                console.log(`-- pre call to onValueChange with ${leftValue} and ${rightValue}`);
                onValueChange(Number(leftValue) - Number(rightValue));
                console.log('-- post call to onValueChange');
                break;
            case '*':
                console.log(`-- pre call to onValueChange with ${leftValue} and ${rightValue}`);
                onValueChange(Number(leftValue) * Number(rightValue));
                console.log('-- post call to onValueChange');
                break;
            case '/':
                console.log(`-- pre call to onValueChange with ${leftValue} and ${rightValue}`);
                onValueChange(Number(leftValue) / Number(rightValue));
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
export default MathOperatorBroken;