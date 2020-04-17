import React, { Component } from "react";
import {connect} from "react-redux"


function Counter(props){
    // componentDidMount(){
    //   store.subscribe(() => {
    //     this.setState({}) //rerender the component
    //   })
    // }
  
    // increment = (amount) => {
    //   store.dispatch({type: "inc", payload: amount}) //action as an arg
    // }
  
    // decrement = (amount) => {
    //   store.dispatch({type: "dec", payload: amount})
    // }
  
  
   
      return (
        <div className="Counter">
          {/* <h1>{store.getState().count}</h1> */}
          <h1>{props.count}</h1>
          <button onClick={() => props.decrement(1)}> - </button>
          <button onClick={() => props.increment(1)}> + </button>
          <button onClick={() => props.decrement(3)}> -3 </button>
          <button onClick={() => props.increment(5)}> +5 </button>
        </div>
      );
  
  }

  const mapStateToProps = (state) => {
      console.log(state)
      return{
          count: state.count
      }
  }

  const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return{
        increment: ((amount) => dispatch({type: "inc", payload: amount})),
        decrement: ((amount) => dispatch({type: "dec", payload: amount}))
    }

  }


  export default connect(mapStateToProps, mapDispatchToProps)(Counter)

