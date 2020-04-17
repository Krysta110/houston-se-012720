import React from 'react';
import {connect} from 'react-redux'


class ImgContainer extends React.Component{
  render(){
    console.log("Img container")
    return(<div>
      <img src={this.props.url} />
    </div>)
  }
} 

const mapStateToProps = (state) => {
  console.log(state)
  return{
    url: state.ImgReducer.img.url
  }
}


export default connect(mapStateToProps)(ImgContainer)