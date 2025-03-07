import { useState } from 'react'

function Lab01() {
    var [name, setName] = useState("default");

    function handleChange(e) {
      name = e.target.value;
    }
  
    function handleClick(e){
      setName(name);
    }
    
    return (
        <>
            <input type="text" onChange={handleChange} placeholder="Enter your name: "></input>
            <br/><br/>
            <button onClick={handleClick}>Click</button>
            <br/><br/>
            <span>Hello: {name}</span>
        </>
    )
}

export default Lab01;