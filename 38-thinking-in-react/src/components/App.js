import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      displayPets: [],
      filters: {
        type: 'all'
      }
    }
    // console.log("Constructor") --1
  }

  componentDidMount(){
    // console.log("CDM") --3(last)
    fetch("/api/pets")
    .then(res => res.json())
    .then(pets => {
      this.setState({
        // pets: pets 
        pets,
        displayPets: pets
      })
    })

  }

  changeFilter = (type) => {
    // debugger
    this.setState({
      filters: {
        // type: type
        type
      }
    })
  }

  filterPets = () => {
    // debugger
    // console.log(this.state.filters.type)
    if(this.state.filters.type === "all"){
      this.setState({
        displayPets: this.state.pets
      })
    }else{
      let display = this.state.pets.filter(pet => pet.type === this.state.filters.type)

      this.setState({
        displayPets: display
      })
    }
    
  }

  adoptPet = (petId) => {
    // debugger

    //when you want to change one key from an array of objects
    let newArray = this.state.displayPets.map( pet => {
      if(pet.id === petId){
        // Object.assign({},pet,{isAdopted: true})
        return {...pet, isAdopted: true}
      }
      return pet
    })

    this.setState({
      displayPets: newArray
    })

    // EXTRA 
    // let newArray = this.state.pets.map( pet => {
    //   if(pet.id === petId){
    //     return {...pet, isAdopted: true}
    //   }
    //   return pet
    // })

    // this.setState({
    //   pets: newArray
    // })

    // if(this.state.filters.type === "all"){
    //   this.setState({
    //     displayPets: newArray
    //   })
    // }else{
    //   this.setState({
    //     displayPets: newArray.filter(pet => pet.type === this.state.filters.type)
    //   })
    // }

  }

  render() {
    // console.log("Render") --2

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeFilter={this.changeFilter} filterPets={this.filterPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.displayPets} adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
