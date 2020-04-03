import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";

class App extends Component {

  constructor(){
    super()
    let newHogs = hogs.map(hog => {return({ ...hog, display: false})}) //add a new key and value pair
    this.state= {
      hogs: newHogs,
      displayHogs: newHogs
    }
  }

  displayHog = (h) => {
    // debugger

    //change one key and value pair for one hog
    let changeHogs = this.state.displayHogs.map(hog => {
      if(hog === h){
        return({ ...hog, display: !h.display}) //toogle true and false
      }
      return hog
    })

    this.setState({
      displayHogs: changeHogs
    })
  }

  filterHogs = () => {
    // debugger

    let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)

    this.setState({
      displayHogs: greasedHogs
    })
  }

  showAllHogs = () => {
    this.setState({
      displayHogs: this.state.hogs
    })
  }

  sortByName = () => {
    // debugger
    let sortedHogs = this.state.displayHogs.sort((a,b) => a.name > b.name ? 1 : -1 )

    //if you don't want to mutate actual state
    // let sortedHogs = [...this.state.displayHogs] 
    // sortedHogs.sort((a,b) => a.name.localeCompare(b.name) )

    this.setState({
      displayHogs: sortedHogs
    })
  }

  sortByWeight = () => {
    // debugger
    // let sortedHogs = this.state.displayHogs.sort((a,b) => a.weight > b.weight ? 1 : -1 )
    let sortedHogs = this.state.displayHogs.sort((a,b) => a.weight - b.weight)

    
    this.setState({
      displayHogs: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter 
        filterHogs={this.filterHogs}
        showAllHogs={this.showAllHogs}
        sortByName={this.sortByName} 
        sortByWeight={this.sortByWeight}/>
        <HogList hogs={this.state.displayHogs} displayHog={this.displayHog} />
      </div>
    );
  }
}

export default App;
