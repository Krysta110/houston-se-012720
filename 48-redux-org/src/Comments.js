import React from 'react';
import {connect} from 'react-redux'


class Comments extends React.Component{


  render(){
    return(<div>
        <h3>Likes:{this.props.likes}</h3>
        <button onClick={() => this.props.addLike()}>Like</button>

        <h2>Comments:</h2>
        <div className="ui input focus">
            <input type="text" placeholder="write something about the image!!" />
            <button onClick={(e) => {
              this.props.addComment(e.target.previousElementSibling.value)
              e.target.previousElementSibling.value = " "
              }}>Submit</button>
        </div>

        {this.props.comments.map(comment => <li>{comment}</li>)}
        
      </div>)
  }
} 

const mapStateToProps = (state) => {
  console.log(state)
  return{
    likes: state.ImgReducer.img.likes, //add ImgReducer because of multi reducers
    comments: state.ImgReducer.img.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addLike: (() => dispatch({type: "addLike"})), //action dispatch
    addComment: ((comment) => dispatch({type: "addComment", comment: comment}) ) //comment
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)