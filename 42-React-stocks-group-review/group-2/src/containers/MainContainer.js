import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      displayStocks: [],
      portfolioStocks:[],
      filter: ''
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res =>  res.json())
    .then(stocks => {
      this.setState({
        stocks: stocks, //stocks
        displayStocks: stocks
      })
      console.log(this.state.stocks) //aleardy sync
    })
  }

  addStock = (stock) => {
    // debugger
    if(this.state.portfolioStocks.includes(stock)){
      alert("Already purchased stock!!")
    }else{
      this.setState({
        // portfolioStocks: this.state.portfolioStocks.push(stock) .push return legnth of the array
        portfolioStocks: [...this.state.portfolioStocks, stock]
      }, () =>  console.log(this.state.portfolioStocks))
     
    }
  }

  sellStock = (stock) => {
    // debugger
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s!== stock)
      //when you want all the stock except one
    })
  }

  filterStocks = (type) => {
    // debugger
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })
  }

  sortByName = () => {
    // debugger
    this.setState({
      displayStocks: this.state.displayStocks.sort((a,b) => a.name.localeCompare(b.name))
    })
  }

  sortByPrice = () => {
    // debugger
    this.setState({
      displayStocks: this.state.displayStocks.sort((a,b) => a.price - b.price)
    })
  }

  render() {
    return (
      <div>
        <SearchBar
        filterStocks={this.filterStocks}
        sortByName={this.sortByName}
        sortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.state.displayStocks}
              addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
              stocks={this.state.portfolioStocks}
              sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
