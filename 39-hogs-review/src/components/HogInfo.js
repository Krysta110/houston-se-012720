import React, { Fragment } from "react";

class HogInfo extends React.Component {
  render() {
    return (
      <div>
        <h5>Weight: {this.props.weight}</h5>
        <h5>Specialty: {this.props.specialty}</h5>
        <h5>Medal: {this.props["highest medal achieved"]}</h5>
        <h5>
            {this.props.greased
            ? "Greased"
            : "Not Greased"
            }
        </h5>
      </div>
    );
  }
}

export default HogInfo;
