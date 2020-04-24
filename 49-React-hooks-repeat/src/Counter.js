import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Counter(){
    const [count, setCount] = useState(0)
    const [test, changeTest] = useState({key1: "test", key2:"key2"})

    // const count = useState(0)[0]
    // const setCount = useState(0)[1]

    const history = useHistory()

    function handleClick(){
        //extra code added here
        changeTest({...test, key1: "key1"})
    }


    return(<div>
    
        <h5>Counter:{count}</h5>
        <button onClick={() => setCount(count+1)}>Increment</button>

        <h5>{test.key1}</h5>
        <button onClick={() => handleClick()}>Change Test</button>

        <button onClick={() => history.push("/home")}>Go To Home</button>
    </div>)
}

export default Counter