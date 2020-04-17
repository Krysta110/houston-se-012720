import React, { Component } from "react";
import {connect} from "react-redux"


function Counter(props){
   
    return (
    <div>
        <h1>Count: {props.count}</h1>
        <button onClick={() => props.dec()}> - </button>
        <button onClick={() => props.inc()}> + </button>
    </div>
    );
  
}

const mapStateToProps = (state) => {
    return{
        count: state.CounterReducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        inc: (() => dispatch({type: "inc"})),
        dec: (() => dispatch({type: "dec"}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

