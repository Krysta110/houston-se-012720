import React, { Component } from "react";
import Header from "./Header"
import Counter from "./Counter"


export default class App extends Component {

    // state = { count: 0 };
  
    // increment = () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // };
  
    // decrement = () => {
    //   this.setState({
    //     count: this.state.count - 1
    //   })
    // };
  
    render() {
      return (
        <div className="App">
          <Header />
          <Counter />
          {/* // count={this.state.count}
          // increment={this.increment}
          // decrement={this.decrement}/>  */}
        </div>
      );
    }
  }