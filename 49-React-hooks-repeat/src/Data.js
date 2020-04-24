import React, {useState, useEffect} from  "react"

export default function Data(){
    const[data, setData] = useState([])

    useEffect(() =>{
        fetch("https://api.covid19api.com/summary")
        .then(res=> res.json())
        .then(info => setData(info.Countries))
    }, [])

    // useEffect(() => console.log("mounted"),[]) //run only when your component mounts
    // useEffect(() => console.log("mounted or updated / rendered")) //run everytime your component renders
    // useEffect(() => console.log("State changed"),[state.value]) //run every time state value changes
    // useEffect(() => {
    //     return () => {
    //       console.log('will unmount');
    //     }
    //   }, []); // compoentWillUnmount

    return(<div>
        Cases:
        {data.map(d => <li>{d.Country}: {d.TotalConfirmed}</li>)}
    </div>)
}