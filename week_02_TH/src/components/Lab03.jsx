import { useState } from "react"

function Lab03(){
    var [a, setA] = useState(0);
    var [b, setB] = useState(0);
    var [result, setResult] = useState(0);

    function handleChangeA(e) {
        setA(parseFloat(e.target.value));
    }

    function handleChangeB(e) {
        setB(parseFloat(e.target.value));
    }

    function handleOnClik(e) {
        let res = 0;
        switch(e){
            case '+':
                res = a + b;
                break;
            case '-':
                res = a-b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                if(b === 0) {
                    res = 'Cannot divide by 0';
                } else {
                    res = a / b;
                }
                break;
            default:
                res = 0;
        }
        setResult(res);
    }

    return (
        <>
            <input type="number" placeholder="Enter first number: " onChange={handleChangeA}/>
            <br/>
            <input type="number" placeholder="Enter second number: " onChange={handleChangeB}/>
            <br/>
            <ul style={{listStyleType: 'none', justifyContent: 'center', display: 'flex', gap: '10px', padding: 0}}>
                <li>
                    <input type="radio" id="+" name='group' onClick={()=>handleOnClik("+")}></input>
                    <label for="+">+</label>
                </li>
                <li>
                    <input type="radio" id="-" name='group' onClick={()=>handleOnClik("-")}></input>
                    <label for="-">-</label>
                </li>
                <li>
                    <input type="radio" id="*" name='group' onClick={()=>handleOnClik("*")}></input>
                    <label for="*">*</label>
                </li>
                <li>
                    <input type="radio" id="/" name='group' onClick={()=>handleOnClik("/")}></input>
                    <label for="/">-</label>
                </li>
            </ul>
            
            <span>Result: {result}</span>
        </>
    );
}

export default Lab03