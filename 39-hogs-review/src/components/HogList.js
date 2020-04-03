import React, { Fragment } from "react";
import HogCard from "./HogCard";

class HogList extends React.Component {
  render() {
    return (
      <div>
        {this.props.hogs.map(hog => <HogCard hog={hog} displayHog={this.props.displayHog}/> )}
      </div>
    );
  }
}

export default HogList;
