import { useState } from "react";

function Lab05(){
    var [todos, setTodo] = useState([]);
    var [text, setText] = useState('');

    var array = todos.map((item, index)=>{
        return (
            <li style={{marginTop: 5}} key={index}>
                {item}
                <button id={index} style={{marginLeft: 20}} onClick={() => {handleClickRemove(index)}}>Remove</button>
            </li>
        )
    })

    function handleOnChange(e) {
        setText(e.target.value);
    }

    function handleOnClick() {
        setTodo([...todos, text]);
    }

    function handleClickRemove(index) {
        var newArr = todos.filter((todo, i) => {
            return i !== index;
        })
        setTodo(newArr);
    }

    return (
        <>
            <input type="text" onChange={handleOnChange} placeholder="Enter element: "></input>
            <br/><br/>
            <button onClick={handleOnClick}>Add</button>
            <ul>
                {array}
            </ul>
        </>
    );
}

export default Lab05