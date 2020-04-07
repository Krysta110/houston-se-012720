import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoContainer from "./VideoContainer";
import Key from './keys'
import _  from "lodash"

class App extends Component {

  constructor(){
    super()
    this.state = {
      videos: [],
      searchTerm: "dogs",
      mainVideo: null,
      isLoading: true
    }
  }

  componentDidMount = () => {
    // console.log(Key)
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${Key.API_KEY}&q=${this.state.searchTerm}&type=video`)
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     videos: data.items,
    //     mainVideo: data.items[0],
    //     isLoading: false
    //   })
    // })
    this.fetchData()

  }

  changeMainVideo = (etag) => {

    let video = this.state.videos.find(video => video.etag === etag)
    // debugger

    this.setState({
      mainVideo: video
    })

  }

  changeSearchTerm = (term) => {
    console.log(term)
    // debugger
    // e.preventDefault()

    // this.setState({
    //   searchTerm: e.target[0].value
    // }, () => this.fetchData())
    this.setState({
      searchTerm: term
    }, () => this.fetchData())

  }

  fetchData = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${Key.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items,
        mainVideo: data.items[0],
        isLoading: false
      })
    })
  }

  render() {

    const videoSearch = _.debounce(term => {
      this.changeSearchTerm(term);
    }, 2000);


    return (<div>
      <SearchBar videoSearch={videoSearch}/>
      {/* changeSearchTerm={this.changeSearchTerm}/> */}
      {this.state.isLoading
      ? <div> Loading..... </div>
      : <div>
      <VideoContainer 
      videos={this.state.videos} 
      mainVideo={this.state.mainVideo}
      changeMainVideo={this.changeMainVideo}/>
        </div>}
 
      </div>)
  }
}

export default App;
