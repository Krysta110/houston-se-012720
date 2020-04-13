import React, {useState} from 'react'
import {useHistory, useLocation, useParams} from 'react-router-dom'


function Counter(){
    const [counter, setCounter] = useState(0) 
    const [test, changeTest] = useState("something")
    const [obj, changeObj] = useState({key1: "key1"})

    const history = useHistory() 
    const location = useLocation()
    const params = useParams()

    // const counter = useState(0)[0]
    // const setCounter = useState(0)[1]

    function handleClick(){
        //extra code
        changeTest("Something Else!!!")
        changeObj({key1: "key2"})
    }

    return(<div>
    
        <h5>Counter:{counter}</h5>
        <button onClick={() => setCounter(counter+1)}>Increment</button>


        <h5>Test:{test}</h5>
        <button onClick={() => handleClick()}>Change Test</button>

        <button onClick={() => history.push("/home") }>Go to Home</button>

    </div>)
}

export default Counter