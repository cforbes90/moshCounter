import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200",
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment </button>
        <ul>
          {this.state.tags.map((bask) => (
            <li key={bask}>{bask}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    //this sets a javascript variable to be a string
    let classes = "badge m-2 badge-";
    //the string is concantednated based off of this ternary statement First part o
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //Destructuring of the key in the state. This refers back to the parent class, then you choose whatever function you want like you normally would for a Class! In this case we choose state!
    const { count } = this.state;
    //If count is equal to primitive 0, then make count equal to the string Zero, otherwise just render count as the count
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
