import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200",
  };

  // //solution to bind event handlers to this
  // constructor() {
  //   //you need this if you are using the constructor in your class in react because no matter what you build, it will be a child component to the overall inheritance hiearchy.
  //   super();
  //   //binding this to handleIncrememnt and then assigning it.
  //   //You have to do this for every event handler so this way is a bit noisy.
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   console.log("Constructor", this);
  // }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((bask) => (
          <li key={bask}> {bask} </li>
        ))}
      </ul>
    );
  }
  handleIncrement = (product) => {
    //shows in console
    console.log(product);
    console.log("Increment Button Clicked!", this.state.count);
    //changes state the official way so React is aware.
    this.setState({ count: this.state.count + 1 });
  };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment{" "}
        </button>
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}

        <ul>{this.renderTags()}</ul>
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
