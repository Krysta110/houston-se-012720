import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      displaySushis: [],
      startIndex: 0,
      money: 100,
      plates: []
    }
  }

  componentDidMount(){
    //initial fetch to get data
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      //adding new key and value pair for eaten
      let arr = sushis.map(sushi => {return {...sushi, eaten: false} })
      this.setState({
        sushis: arr
      })
      this.getSushis()
    })
  }

  //getting four sushis at a time
  getSushis = () => {
    this.setState({
      displaySushis: this.state.sushis.slice(this.state.startIndex,this.state.startIndex+4),
      startIndex: this.state.startIndex+4
    })
  }

  eatSushi = (eatenSushi) => {
    // debugger

    if(this.state.money > eatenSushi.price){
        // let arr = this.state.sushis.map(sushi => {
        //   if(sushi === eatenSushi){
        //     return {...sushi, eaten: true}
        //   }
        //   return sushi
        // })

        // this.setState({
        //   sushis: arr,
        //   displaySushis: arr.slice(this.state.startIndex-4, this.state.startIndex)
        // })

      eatenSushi.eaten = true
      // this.setState({
      // })

      let emptyPlates = this.state.plates
      emptyPlates.push(eatenSushi)
  
      this.setState({
        plates: emptyPlates, //this.state.plates.push(eatenSushi) is not going to work because it returns a length of the array
        money: this.state.money - eatenSushi.price
      })
    }

  }

  addMoney = (e) => {
    e.preventDefault()
    // debugger
    this.setState({
      money: this.state.money + parseInt(e.target[0].value)
    })

    e.target.reset() //clear the form
  }


  render() {
    //can't setState in render
    return (
      <div className="app">

        <SushiContainer 
        sushis={this.state.displaySushis} 
        getSushis={this.getSushis}
        eatSushi={this.eatSushi} />

        <MoneyForm addMoney={this.addMoney}/>

        <Table 
        money={this.state.money}
        plates={this.state.plates} />

      </div>
    );
  }
}

export default App;