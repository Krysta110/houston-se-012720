import React, {Component} from 'react';

// function PaintingInfo(props) {
//     console.log(props) //verify props
//   return (
//     <div>
//       {/* PaintingInfo component */}
//         <h2>{props.painting.title}</h2>
//         <img src={props.painting.image}/>
//         <p>Artist Name: {props.painting.artist.name}</p>
//     </div>
//   );
// }

class PaintingInfo extends Component{
    
    render(){
        return(  <div>
                    <h2>{this.props.painting.title}</h2>
                    <img src={this.props.painting.image}/>
                    <p>Artist Name: {this.props.painting.artist.name}</p>
                    {/* <h5>current painting id is: {this.props.match.params.id}</h5> */}
               </div>)
    }

}

// class PaintingInfo extends React.Component{

// }

export default PaintingInfo;