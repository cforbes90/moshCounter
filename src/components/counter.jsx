import React, { Component } from "react";
//Controlled Component.

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev props", prevProps);
    console.log("prevState", prevState);

    //We can use the compnentDIdUpdate as a way of sending out an Ajax call
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data
    }
  }
  //This gets called when it is being removed from the DOM
  componentWillUnmount() {
    console.log("component unmount");
  }
  // state = {
  //   //count: this.props.value,
  //   value: this.props.counter.value,

  //   tags: ["tag1", "tag2", "tag3"],
  //   imageUrl: "https://picsum.photos/200",
  // };

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
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p> There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((bask) => (
  //         <li key={bask}> {bask} </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    console.log("Counter -Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        </div>
        <div className="col m2">
          {/* {this.props.children} */}
          {/* Here we are running the functions automatically that is why they have parenthesis. */}

          <button
            //This doesn't need an arrow function prefixing it because it is referencing a function within this class on this page. If you lift the state up then you will need to have an arrow function

            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.stateOfButton()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            {" "}
            Delete
          </button>

          {/* {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        <ul>{this.renderTags()}</ul> */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    //this sets a javascript variable to be a string
    let classes = "badge m-2 badge-";
    //the string is concantednated based off of this ternary statement First part o
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  stateOfButton() {
    return this.props.counter.value === 0 ? "disabled" : "";
  }
  formatCount() {
    //Destructuring of the key in the state. This refers back to the parent class, then you choose whatever function you want like you normally would for a Class! In this case we choose state!
    const { value } = this.props.counter;

    //If value is equal to primitive 0, then make value equal to the string Zero, otherwise just render value as the value
    return value === 0 ? "Zero" : value;
  }
  deactivateButton() {}
}
export default Counter;
