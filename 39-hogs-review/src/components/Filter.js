import React, { Fragment } from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.filterHogs}>Filter Greased</button>
        <button onClick={this.props.sortByName}>Sort by Name</button>
        <button onClick={this.props.sortByWeight}>Sort by Weight</button>
        <button onClick={this.props.showAllHogs}>Show All</button>

      </div>
    );
  }
}

export default Filter;
